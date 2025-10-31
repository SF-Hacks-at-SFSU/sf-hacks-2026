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
		<div className="mx-auto w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
				{qnaColumnGroups.map((group, idx) => (
					<Accordion
						key={`col-${idx}`}
						type="multiple"
						className="w-full "
					>
						{group.map((qa, i) => (
							<AccordionItem
								key={i}
								value={`${idx}-${i}`}
								className="group overflow-hidden border-[0.1px]  border-white bg-white/5"
							>
								<AccordionTrigger className="px-4 py-3 bg-[#303160] text-white font-anaheim font-bold hover:bg-[#3a2f6d] hover:text-[#FF76FE] transition text-left ">
									{qa.question}
								</AccordionTrigger>

								<AccordionContent
									className="
                    px-4 py-3 bg-[#1a1942] border-t border-white/10
                    text-[#E6E7FF]/90 text-sm leading-6
                    [&_p]:mb-3 [&_p:last-child]:mb-0
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3
                    [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3
                    [&_a]:text-[#6FD9FF] hover:[&_a]:text-[#B873FF] [&_a]:underline
                    [&_strong]:text-white
                  "
								>
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
