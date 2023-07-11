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
							My name is Pankaj. Currently, I am pursuing BTech in Computer Science from KIET Group of Institution and my long term goal is to be a Software Devloper.
							During my university 2nd year, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
							</p>

						< p className="my-3.5"> One day, I decided to try something new, and I started learning React. I was so excited to see how fast I can build a website with it, and how easy it is to maintain it. Consequently, I quickly learnt Next.js and I used it to build some clubs projects working in a team with a backend dev.
						</p>
						<p className="my-3.5">
						As someone who enjoys learning new things, I have already gained knowledge of programming languages such as C++, C, and Python in additon I also have proficiency in Data Strucutres and Algorithm, and I am keen to explore others. My strong work ethic means that I am always punctual and complete tasks on time. I am passionate about discovering new technologies and creating modern Website Designs, and I have a talent for quickly picking up new skills in this area.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
