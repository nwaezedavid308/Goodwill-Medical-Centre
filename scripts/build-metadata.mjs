import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
const load = async (file) => {
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  }).outputText;
  return import(
    "data:text/javascript;base64," + Buffer.from(output).toString("base64")
  );
};
const { descriptions } = await load("data/metadata.ts");
const { POSTS } = await load("data/posts.ts");
const template = fs.readFileSync("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const siteValue = process.env.SITE_URL || process.env.VITE_SITE_URL;
const origin = siteValue ? new URL(siteValue).origin : null;
if (origin && !origin.startsWith("https://"))
  throw new Error("Use an HTTPS production SITE_URL.");
const routes = Object.entries(descriptions).map(
  ([route, [title, description]]) => ({
    route,
    title: route === "/" ? title : `${title} | Goodwill Medical Centre`,
    description,
  }),
);
routes.push(
  ...POSTS.map((post) => ({
    route: `/blog/${post.id}`,
    title: `${post.title} | GMC Journal`,
    description: post.excerpt,
  })),
);
for (const item of routes) {
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(item.title)}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*"/,
      `$1${escape(item.description)}"`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*"/,
      `$1${escape(item.title)}"`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*"/,
      `$1${escape(item.description)}"`,
    );
  if (origin)
    html = html
      .replace(
        "</head>",
        `<link rel="canonical" href="${origin}${item.route}"><meta property="og:url" content="${origin}${item.route}"></head>`,
      )
      .replace(
        'content="/images/Goodwill-Medical-centre-front-view.jpeg"',
        `content="${origin}/images/Goodwill-Medical-centre-front-view.jpeg"`,
      );
  const destination = path.join(
    "dist",
    item.route === "/" ? "" : item.route,
    "index.html",
  );
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
}
fs.writeFileSync(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""}`,
);
if (origin)
  fs.writeFileSync(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(({ route }) => `<url><loc>${origin}${route}</loc></url>`).join("")}</urlset>`,
  );
console.log(
  `Generated unique HTML metadata for ${routes.length} routes.${origin ? " Canonicals and sitemap included." : " Set SITE_URL at deployment to include canonicals and sitemap."}`,
);
