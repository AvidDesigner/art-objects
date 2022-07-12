import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cn from "classnames";

import SplitText from "../utils/Split3.min.js";
import SectionHeader from "./SectionHeader";
import useOnScreen from "../hooks/useOnScreen";

const Footer = () => {
  const [reveal, setReveal] = useState(false);
  const ref = useRef();

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    const split = new SplitText("#location-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title={"Made by"} />
      <h1
        ref={ref}
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
      >
        Abhishek
      </h1>
    </section>
  );
};

export default Footer;
