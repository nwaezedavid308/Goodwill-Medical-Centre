import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

async function loadData(file) {
  const { outputText } = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  });
  return import(
    "data:text/javascript;base64," + Buffer.from(outputText).toString("base64")
  );
}
const { SERVICES_DATA, serviceId } = await loadData("data/care.ts");
const { descriptions } = await loadData("data/metadata.ts");
const { TEAMS } = await loadData("data/teams.ts");
const { POSTS } = await loadData("data/posts.ts");

test("every service CTA resolves to one bookable service", () => {
  assert.equal(
    new Set(SERVICES_DATA.map((service) => service.title)).size,
    SERVICES_DATA.length,
  );
  for (const service of SERVICES_DATA)
    assert.equal(
      SERVICES_DATA[Number(serviceId(service.title))].title,
      service.title,
    );
});
test("the team showcase includes the requested departments and the other existing hospital services", () => {
  for (const name of [
    "Pharmacy Team",
    "Doctors",
    "Nurses Unit",
    "Medical Laboratory Science",
    "Finance",
    "Security and Logistics",
    "Janitors",
    "Maternity and Midwifery",
    "Eye Care Team",
    "Emergency Care Team",
    "Paediatric Care Team",
    "Surgical and Inpatient Care",
    "Community Outreach Team",
    "Reception and Patient Support",
  ])
    assert.ok(
      TEAMS.some((team) => team.name === name),
      name + " missing",
    );
  assert.equal(new Set(TEAMS.map((team) => team.id)).size, TEAMS.length);
  for (const team of TEAMS)
    assert.ok(
      fs.existsSync(path.join("public", team.image)),
      team.name + " photo missing",
    );
});
test("published care and journal media/download references exist locally", () => {
  for (const item of [...SERVICES_DATA, ...TEAMS, ...POSTS]) {
    for (const url of [item.img, item.image, item.pdfDownload?.file].filter(
      Boolean,
    )) {
      assert.ok(
        fs.existsSync(path.join("public", decodeURIComponent(url))),
        `Missing ${url}`,
      );
    }
  }
});
test("production pages have their own metadata and articles have shareable HTML entry points", () => {
  const titles = new Set();
  for (const [route, [, description]] of Object.entries(descriptions)) {
    const html = fs.readFileSync(
      path.join("dist", route, "index.html"),
      "utf8",
    );
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), "Duplicate page title at " + route);
    titles.add(title);
    assert.ok(
      html.includes(description.replaceAll("&", "&amp;")),
      "Missing page description at " + route,
    );
    assert.ok(
      !html.includes("cdn.tailwindcss.com"),
      "Runtime Tailwind remains",
    );
    assert.ok(!html.includes('type="importmap"'), "Legacy import map remains");
  }
  for (const post of POSTS) {
    const html = fs.readFileSync(`dist/blog/${post.id}/index.html`, "utf8");
    assert.ok(
      html.includes(post.title.replaceAll("&", "&amp;")),
      "Wrong article title",
    );
  }
});
