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
				// The transparent background property is jsut to override the global style for now. 
				// It should be removed once global.css is properly cleaned up
				className="basis-full p-0 rounded-none max-h-[65dvh] overflow-auto bg-[#0000]"
			>
				{data.map((question, questionIndex) => (
					<AccordionItem
						className="border-1 rounded-none max-w-(--paragraph-width-default)"
						key={questionIndex}
						value={questionIndex.toString()}
					>
						{/* The padding and corner radius are split into the Trigger and Content component so that their background colors can fill the whole accordion */}
						<AccordionTrigger className="max-w-full rounded-none p-(--padding-default) bg-(--background-color-element-opaque)">
							{question.question}
						</AccordionTrigger>
						<AccordionContent className="rounded-none p-(--padding-default) bg-(--background-color-element)">
							{question.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
}

export default FAQ;
