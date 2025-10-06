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
		<>
			<Accordion
				type="multiple"
				className="basis-full p-0 rounded-none max-h-[70dvh] overflow-auto"
			>
				{data.map((question, questionIndex) => (
					<AccordionItem
						className="rounded-none"
						key={questionIndex}
						value={questionIndex.toString()}
					>
						<AccordionTrigger className="max-w-full">
							{question.question}
						</AccordionTrigger>
						<AccordionContent>{question.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
}

export default FAQ;
