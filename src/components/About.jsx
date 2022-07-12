import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import cn from "classnames";

import SplitText from "../utils/Split3.min.js";
import SectionHeader from "./SectionHeader";
import useOnScreen from "../hooks/useOnScreen";

const About = () => {
  const [reveal, setReveal] = useState(false);
  const ref = useRef();

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <section className={"about-section"} data-scroll-section>
      <SectionHeader title={"About"} />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in
        maiores. Soluta unde, eligendi commodi inventore beatae architecto
        fugiat neque officia suscipit, culpa corrupti molestias tenetur esse
        quos! Fugit eveniet doloribus nisi, fugiat consequatur cupiditate!
      </p>
    </section>
  );
};

export default About;
