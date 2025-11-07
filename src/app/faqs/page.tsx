import React from "react";
import FAQ from "./components/Faqs";

export default function FAQPage() {
	return (
		<main className="bg-[#030528] px-4 py-16">
			<div className="mx-auto w-full max-w-6xl text-center">
				<h1 className="font-audiowide text-white text-3xl md:text-4xl mb-3">
					Frequently Asked Questions!
				</h1>

				<strong className="block mb-8">
					<a
						href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#6FD9FF] underline hover:text-[#B873FF]"
					>
						MLH Code of Conduct
					</a>
				</strong>

				<FAQ />
			</div>
		</main>
	);
}
