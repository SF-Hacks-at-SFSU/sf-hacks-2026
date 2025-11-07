import React from "react";
import { qnas as qnaData } from "@/data/faqs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const midpoint = Math.ceil(qnaData.length / 2);
const qnaColumnFirst = qnaData.slice(0, midpoint);
const qnaColumnSecond = qnaData.slice(midpoint);
const qnaColumnGroups = [qnaColumnFirst, qnaColumnSecond];

function FAQ() {
	return (
		<div className="mx-auto w-full ">
			<div className="grid grid-cols-1 md:grid-cols-2  md:gap-6 rounded-md">
				{qnaColumnGroups.map((group, idx) => (
					<Accordion
						key={`col-${idx}`}
						type="multiple"
						className="w-full rounded-md "
					>
						{group.map((qa, i) => (
							<AccordionItem
								key={i}
								value={`${idx}-${i}`}
								className="rounded-md border border-none "
							>
								<AccordionTrigger className="rounded-mds px-4 py-3 bg-[#1a1942] text-[#FFBD52] font-audiowide font-bold  hover:bg-[#3a2f6d] transition hover:underline-none">
									{qa.question}
								</AccordionTrigger>
								<AccordionContent className="rounded-xl px-4 py-3  ">
									{qa.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				))}
			</div>
		</div>
	);
}

export default FAQ;
