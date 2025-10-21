import React from "react";
// import "../styles.css";
import { qnas as qnaData } from "@/data/faqs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const qnaColumnSecond = qnaData.splice(qnaData.length / 2);
const qnaColumnFirst = qnaData;

const qnaColumnGroups = [qnaColumnFirst, qnaColumnSecond];

// TODO: Add class name support for the component
function FAQ() {
	return (
		// TODO: try to simplify the tailwind after fixing global.css
		// TODO: Issue #9: Text sizes are different depending on whether the answer uses a Text node versus a paragraph node
		// The transparent background property is just to override the global style for now.
		// It should be removed once global.css is properly cleaned up
		<div className="flex flex-row flex-wrap gap-x-(--margin-default) p-0 rounded-none max-h-[65dvh] max-w-[2*calc(var(--paragraph-width-default))] overflow-auto bg-[#0000]">
			{qnaColumnGroups.map((qnaColumnGroup, index) => (
				<Accordion
					key={`col-${index}`}
					type="multiple"
					className="w-(--paragraph-width-default)"
				>
					{qnaColumnGroup.map((question, questionIndex) => (
						<AccordionItem
							className="border-1 rounded-none"
							key={questionIndex}
							value={questionIndex.toString()}
						>
							{/* The padding and corner radius are split into the Trigger and Content component so that their background colors can fill the whole accordion */}
							<AccordionTrigger className="max-w-full rounded-none p-(--padding-default) bg-primary-gradient">
								{question.question}
							</AccordionTrigger>
							<AccordionContent className="rounded-none p-(--padding-default) bg-(--background-color-element)">
								{question.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			))}
		</div>
	);
}

export default FAQ;
