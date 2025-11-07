import Image from "next/image";
import React from "react";
import type * as aboutUsTypes from "../types";

interface AvatarProps {
	member: aboutUsTypes.member;
}

export default function Avatar({ member }: AvatarProps) {
	if (!member) {
		console.warn("Avatar rendered without valid member data");
		return null;
	}

	const imgSrc = member.img.startsWith("http")
		? member.img
		: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${member.img}`;

	const href = member.link
		? member.link.startsWith("http")
			? member.link
			: `https://${member.link}`
		: undefined;

	const content = (
		<div className="bg-white/5 rounded-2xl overflow-hidden shadow-md flex flex-col items-center w-40 md:w-44 transition-transform duration-150 hover:scale-[1.03]">
			<div className="relative w-full h-48 md:h-56 overflow-hidden">
				<Image
					src={imgSrc}
					alt={member.name}
					fill
					className="object-cover"
					sizes="(max-width: 640px) 10rem, (max-width: 768px) 11rem, 12rem"
					loading="lazy"
				/>
			</div>
			<div className="w-full py-3 text-center">
				<div className="font-anaheim text-[15px] md:text-base tracking-wide text-[#E6E7FF]">
					{member.name}
				</div>
			</div>
		</div>
	);

	return href ? (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="no-underline hover:no-underline"
		>
			{content}
		</a>
	) : (
		content
	);
}
