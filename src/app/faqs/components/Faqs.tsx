import React from "react";
import "../styles.css";
import { qnas as data } from "@/data/faqs";

function FAQ() {
	return (
		/* The component should have more flexbility with class name stylings in the future
		instead of having the styles be hardcoded */
		<ul className="faqContainer self-center">
			{data.map((question, questionIndex) => (
				<li key={questionIndex}>
					<details className="faqQuestion">
						<summary>{question.question}</summary>
						<div>{question.answer}</div>
					</details>
				</li>
			))}
		</ul>
	);
}

export default FAQ;
