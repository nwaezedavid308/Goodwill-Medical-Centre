import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { HERO_HEADLINES } from "../data/headlines";

export default function TypewriterHeadline() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [frame, setFrame] = useState({
    index: 0,
    text: HERO_HEADLINES[0],
    deleting: false,
  });
  useEffect(() => {
    if (reduced || paused) return;
    const target = HERO_HEADLINES[frame.index];
    const complete = frame.text === target;
    const delay = frame.deleting ? 30 : complete ? 3200 : 65;
    const timer = window.setTimeout(() => {
      if (!frame.deleting && complete) setFrame({ ...frame, deleting: true });
      else if (frame.deleting && !frame.text)
        setFrame({
          index: (frame.index + 1) % HERO_HEADLINES.length,
          text: "",
          deleting: false,
        });
      else
        setFrame({
          ...frame,
          text: frame.deleting
            ? frame.text.slice(0, -1)
            : target.slice(0, frame.text.length + 1),
        });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [frame, reduced, paused]);
  return (
    <div className="headline-rotator" data-paused={paused || reduced}>
      <h1 className="rotating-headline">
        <span className="sr-only">Quality care for everyone.</span>
        <span aria-hidden="true" className="typewriter-text">
          {reduced ? HERO_HEADLINES[0] : frame.text}
          <span className="typewriter-caret" />
        </span>
      </h1>
      {!reduced && (
        <button
          className="headline-toggle"
          aria-label={
            paused ? "Resume headline animation" : "Pause headline animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "Resume words" : "Pause words"}</span>
        </button>
      )}
    </div>
  );
}
