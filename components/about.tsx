"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having recently completed my studies with a{" "}
        <span className="font-medium">
          Master's degree in mobile software and IoT development
        </span>
        , I've gained invaluable experience in the business world. During my
        studies, I had the opportunity to enter the professional world through{" "}
        <span className="font-medium">
          alternating work-study programs and several internships
        </span>
        , allowing me to apply my theoretical knowledge and develop genuine
        on-the-ground skills.
      </p>
      <p>
        What <span className="italic">I love most about programming</span> is
        the
        <span className="font-medium">roblem-solving aspect</span>p. I adore the
        feeling when I finally find a solution to a problem. My primary tech
        stack includes{" "}
        <span className="font-medium">React, Next.js, Vue.js, and Angular</span>{" "}
        for <span className="italic">the frontEnd</span>, followed by{" "}
        <span className="font-medium">Node.js, C#, and PHP</span> for
        <span className="italic">the backend</span>, and finally{" "}
        <span className="font-medium">PostgreSQL or MongoDB</span> for{" "}
        <span className="italic">databases</span>. I've also become familiar
        with TypeScript. I'm always eager to learn new technologies. I'm
        currently seeking a full-time position as a full stack developer.
      </p>
      <p>
        When I'm not coding, I enjoy going to the gym, playing video games, and
        watching movies. I also love learning new things. Currently, I'm
        interested in the impact that AI might have on our future evolution.
      </p>
    </motion.section>
  );
}
