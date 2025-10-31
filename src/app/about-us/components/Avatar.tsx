import Image from "next/image";
import React from "react";
import type * as aboutUsTypes from "../types";

interface AvatarProps {
	member: aboutUsTypes.member;
}

export default function Avatar({ member }: AvatarProps) {
	if (!member) {
		console.warn("Avatar rendered without valid member data");
		return null; // skip rendering safely
	}
	const content = (
		<div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col items-center w-44 transition-transform duration-150 hover:scale-105">
			<div className="relative w-full h-56 overflow-hidden">
				<Image
					src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${member.img}`}
					alt={member.name}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 8rem, (max-width: 1200px) 10rem, 12rem"
				/>
			</div>
			<div className="py-3 text-lg font-semibold text-[#16133d] text-center">
				{member.name}
			</div>
		</div>
	);

	// If a portfolio link exists, wrap the content in an anchor tag
	return member.link ? (
		<a
			href={member.link}
			target="_blank"
			rel="noopener noreferrer"
			className="no-underline"
		>
			{content}
		</a>
	) : (
		content
	);
}

// export default function Avatar({ member }: AvatarProps) {
// 	return (
// 	  <div className="flex flex-col w-40 h-56 border-[0.3em] border-[#43457F] rounded-xl bg-[#43457F] m-3 transition-transform duration-100 ease-out hover:scale-110">
// 		<div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
// 		  <Image
// 			src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${member.img}`}
// 			fill
// 			alt={member.name}
// 			sizes="5em 10em 20em"
// 			className="object-cover object-top"
// 		  />
// 		</div>
// 		<div className="mt-2 text-lg font-medium text-center tracking-wider text-[#16133d]">
// 		  {member.name}
// 		</div>
// 	  </div>
// 	);
//   }
