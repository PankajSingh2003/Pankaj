"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I am currently pursuing B. Tech. in Computer Science and Information Technology (AKTU) and did my schooling at Kendriya Vidyalaya, Mankhurd, Mumbai. Since my father is in the military, I have lived in more than 8 different locations across India. My long-term goal is to become a skilled software developer and create projects that could positively impact people's lives, even if only in small ways. 
</p>
						<p>
For my tech stack, I am already familiar with programming languages such as Python, C, and R, and primarily use C++ to solve DSA-based questions on platforms like LeetCode and Codeforces. I also have a keen interest in web development, so I am familiar with JavaScript, Node.js, React, and use MySQL for my DBMS. A fun fact about myself is that I have a average typing speed of 104 wpm. In addition to all this, I am highly fascinated by new technologies coming out and aspire to integrate them into my projects and daily life.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
