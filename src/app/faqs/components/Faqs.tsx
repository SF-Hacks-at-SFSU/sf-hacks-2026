import React from "react";
// import "../styles.css";
import { qnas as data } from "@/data/faqs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// TODO: Add class name support for the component
function FAQ() {
	return (
		// TODO: try to simplify the tailwind after fixing global.css
		<>
			<Accordion
				type="multiple"
				className="basis-full p-0 rounded-none max-h-[65dvh] overflow-auto"
			>
				{data.map((question, questionIndex) => (
					<AccordionItem
						className="border-1 rounded-none"
						key={questionIndex}
						value={questionIndex.toString()}
					>
						{/* The padding and corner radius are split into the Trigger and Content component so that their background colors can fill the whole accordion */}
						<AccordionTrigger className="max-w-full rounded-none p-(--padding-default) bg-(--background-color-element-opaque)">
							{question.question}
						</AccordionTrigger>
						<AccordionContent className="rounded-none p-(--padding-default)">
							{question.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
}

export default FAQ;
