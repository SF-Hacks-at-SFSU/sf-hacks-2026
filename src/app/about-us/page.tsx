import React from "react";
import Image from "next/image";
import Teams from "./components/Teams";

import type * as aboutUsTypes from "./types";

const members: aboutUsTypes.member[] = [
	{
		name: "Gabby",
		img: "/team/gabby.jpg",
		link: "https://www.linkedin.com/in/gabriella-brown-acv/",
	},
	{
		name: "Louella",
		img: "/team/louella.jpg",
		link: "https://www.linkedin.com/in/louella-mortel-04b24a309",
	},
	{
		name: "Hillary",
		img: "/team/hillary.jpg",
		link: "https://www.linkedin.com/in/hilarylui17/",
	},
	{
		name: "Ria",
		img: "/team/ria.jpg",
		link: "https://www.linkedin.com/in/ria-thakker/",
	},
	{
		name: "Hemasri",
		img: "/team/hemasri.jpg",
		link: "https://www.linkedin.com/in/hemasri-bavisetty-43a370169",
	},
	{
		name: "Vireak",
		img: "/team/v.jpg",
		link: "https://www.linkedin.com/in/vireak-ny/",
	},
	{
		name: "Gavin",
		img: "/team/gavin.jpg",
		link: "https://www.linkedin.com/in/gavinwren",
	},
	{
		name: "Grishma",
		img: "/team/grishma.jpg",
		link: "https://www.linkedin.com/in/gthumar/",
	},
	{
		name: "John",
		img: "/team/john.jpg",
		link: "https://www.linkedin.com/in/johnmikkovelasquez",
	},
	{
		name: "Said",
		img: "/team/said.jpeg",
		link: "https://www.linkedin.com/in/saidmasbahullahsf/",
	},
	{
		name: "Bahara",
		img: "/team/bahara.jpg",
		link: "https://www.linkedin.com/in/bahara-mehry-517510300/",
	},
	{
		name: "Kareem",
		img: "/team/kareem.jpeg",
		link: "https://www.linkedin.com/in/kareem-amin",
	},
	{
		name: "Cecil",
		img: "/team/cecil.JPEG",
		link: "https://www.linkedin.com/in/cecilemanuelle",
	},
	{
		name: "Hiro",
		img: "/team/hiro.jpg",
		link: "https://www.linkedin.com/in/hiro-design",
	},
	{
		name: "Akim",
		img: "/team/akim.jpg",
		link: "https://www.linkedin.com/in/akim-tarasov-2b1072298/",
	},
	{
		name: "Om",
		img: "/team/om.jpeg",
		link: "https://www.linkedin.com/in/om-pandya-9a5014272",
	},
	{
		name: "Krrish",
		img: "/team/Krrish.jpeg",
		link: "http://linkedin.com/in/krrish-puri-2b2827332",
	},
	{ name: "Kunj", img: "/team/gator.jpeg" },
	{
		name: "Rohith",
		img: "/team/rohith.jpeg",
		link: "https://www.linkedin.com/in/gannoju-rohith/",
	},
	{
		name: "Tin",
		img: "/team/tin.jpg",
		link: "https://www.linkedin.com/in/tin-ngo-30a994309/",
	},
	{
		name: "Aaryan",
		img: "/team/aaryan.jpeg",
		link: "https://www.linkedin.com/in/aaryan-sehgal-5b8b13327",
	},
	{
		name: "Palak",
		img: "/team/palak.jpeg",
		link: "https://www.linkedin.com/in/palak-ardak-137065321",
	},
	{
		name: "Sophia",
		img: "/team/sophia.jpg",
		link: "https://www.linkedin.com/in/sophia-lee-e",
	},
	{
		name: "Jim",
		img: "/team/jim.jpg",
		link: "https://www.linkedin.com",
	},

	{
		name: "Abha",
		img: "/team/abha.png",
		link: "https://www.linkedin.com/in/abha-deshpande-2303b7224/",
	},
];

enum membersEnum {
	Gabby,
	Louella,
	Hillary,
	Ria,
	Hemasri,
	Vireak,
	Gavin,
	Grishma,
	John,
	Said,
	Bahara,
	Kareem,
	Cecil,
	Hiro,
	Akim,
	Om,
	Krrish,
	Kunj,
	Rohith,
	Tin,
	Aaryan,
	Palak,
	Sophia,
	Jim,

	Abha,
}

const teams: aboutUsTypes.team[] = [
	{
		name: "Design",
		memberIndices: [
			membersEnum.Gabby,
			membersEnum.Louella,
			membersEnum.Hillary,
			membersEnum.Cecil,
			membersEnum.Hiro,
			membersEnum.Tin,
		],
	},
	{
		name: "Engagement",
		memberIndices: [membersEnum.Bahara],
	},
	{
		name: "Executive",
		memberIndices: [
			membersEnum.Ria,
			membersEnum.Gavin,
			membersEnum.Akim,
			membersEnum.Sophia,
			membersEnum.Om,
		],
	},
	{
		name: "Logistics",
		memberIndices: [
			membersEnum.Palak,
			membersEnum.Kunj,
			membersEnum.Krrish,
			membersEnum.Grishma,
			membersEnum.Hemasri,
		],
	},
	{
		name: "Marketing",
		memberIndices: [membersEnum.Aaryan],
	},
	{
		name: "Outreach",
		memberIndices: [
			membersEnum.Om,
			membersEnum.Said,

			membersEnum.Kareem,
			membersEnum.Abha,
		],
	},
	{
		name: "Publicity",
		memberIndices: [membersEnum.Jim],
	},
	{
		name: "Tech",
		memberIndices: [membersEnum.John, membersEnum.Rohith, membersEnum.Vireak],
	},
];

export default function Page() {
	return (
		<main className="w-full px-6 md:px-8 py-10 space-y-12">
			<div className="mx-auto w-full max-w-6xl">
				<h1 className="text-center font-audiowide text-3xl md:text-4xl text-[#FFBD52]">
					About Us
				</h1>

				<section className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 min-w-0">
					<div className="md:flex-1 w-full min-w-0 rounded-xl overflow-hidden border border-white/10 bg-white/5">
						<div className="relative flex-none w-full h-[260px] min-h-[260px] md:h-[320px]">
							<Image
								src="/team/sfhacks_team.jpg"
								alt="Team"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* right text box */}
					<div className="md:flex-1 w-full min-w-0 rounded-sm border border-white/10 bg-[#1a1942] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
						<p className="text-2xl font-medium text-[#FFBD52] mb-3 font-audiowide">
							Meet Our Team
						</p>
						<p className="text-[#E6E7FF]/90 leading-7">
							SF Hacks is more than just an event, we are a team of passionate
							individuals dedicated to hosting this hackathon. Our diverse team
							spans across logistics, design, tech operations, social
							engagement, marketing, and outreach.
						</p>
					</div>
				</section>

				<section className="mt-10">
					<Teams
						teams={teams}
						members={members}
					/>
				</section>
			</div>
		</main>
	);
}
