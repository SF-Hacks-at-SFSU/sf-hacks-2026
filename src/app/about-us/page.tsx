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
		name: "Justine",
		img: "https://hnclioapcshnrzxkx.supabase.co/storage/v1/object/public/about-us/Tech%20Team/John_Cena_3.webp",
	},
	{
		name: "Louella",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Design%20Team/issame%20-%20Louella%20Mortel.HEIC",
		link: "https://www.linkedin.com/in/louella-mortel-04b24a309",
	},
	{ name: "Hillary", img: "/team/hillary.jpg" },
	{ name: "Michelle", img: "/team/michelle.jpg" },
	{ name: "Declan", img: "/team/declan.jpg" },
	{ name: "Caedyn", img: "/team/caedyn.jpg" },
	{ name: "Marco", img: "/team/marco.jpg" },
	{ name: "Ashley", img: "/team/ashley.jpg" },
	{
		name: "Ria",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Exec%20Team/20230917_100942%20-%20Ria%20Thakker.jpg",
		link: "https://www.linkedin.com/in/ria-thakker/",
	},
	{ name: "Kurt", img: "/team/kurt.jpg" },
	{
		name: "Hemasri",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Logs%20Team/Photo%20-%20hemasri%20bavisetty.jpg",
		link: "https://www.linkedin.com/in/hemasri-bavisetty-43a370169",
	},
	{ name: "Vireak", img: "/team/v.jpg" },
	{ name: "Brandon", img: "/team/brandon.jpg" },
	{ name: "Matthew", img: "/team/matthew.jpg" },
	{ name: "Gavin", img: "/team/gavin.jpg" },
	{ name: "Adan", img: "/team/adan.jpg" },
	{ name: "Grishma", img: "/team/grishma.jpg" },
	{ name: "Christian", img: "/team/christian.jpg" },
	{ name: "Stella", img: "/team/stella.jpg" },
	{
		name: "John",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Tech%20Team/pic-of-myself%20-%20J%20Mikko.jpg",
		link: "https://www.linkedin.com/in/johnmikkovelasquez",
	},
	{ name: "Trish", img: "/team/trish.jpg" },
	{ name: "William", img: "/team/william.jpg" },
	{ name: "Keith", img: "/team/keith.jpg" },
	{ name: "Malhar", img: "/team/malhar.jpg" },
	{ name: "Nalia", img: "/team/nalia.jpg" },
	{ name: "Rishita", img: "/team/rishita.jpg" },
	{
		name: "Said",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Outreach%20Team/IMG_2305%20-%20Said%20Masbahullah.jpeg",
		link: "https://www.linkedin.com/in/saidmasbahullahsf/",
	},
	{ name: "Sukrit", img: "/team/sukrit.jpg" },
	{
		name: "Bahara",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Engage%20Team/Bahara_OL_2025%20-%20Bahara%20Mehry.jpg",
		link: "https://www.linkedin.com/in/bahara-mehry-517510300/",
	},
	{ name: "Trenton", img: "/team/trenton.jpg" },
	{
		name: "Kareem",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Outreach%20Team/sfhackspic%20-%20Kareem%20Amin.jpeg",
		link: "https://www.linkedin.com/in/kareem-amin",
	},
	{ name: "Maxwell", img: "/team/maxwell.jpg" },
	{
		name: "Cecil",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Design%20Team/Cecil-Montesa%20-%20Cecil%20Emanuelle.JPEG",
		link: "https://www.linkedin.com/in/cecilemanuelle",
	},
	{ name: "Jim", img: "/team/jim.jpg" },
	{
		name: "Abha",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Outreach%20Team/Edited-150-compressed%20-%20Abha%20Deshpande.pdf",
		link: "https://www.linkedin.com/in/abha-deshpande-2303b7224/",
	},
	{ name: "James", img: "/team/james.jpg" },
	{
		name: "Hiro",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Design%20Team/HiroEernisse.jpg",
		link: "https://www.linkedin.com/in/hiro-design",
	},
	{ name: "Akim", img: "/team/akim.jpg" },
	{ name: "Avinh", img: "/team/avinh.jpg" },
	{ name: "Kushvi", img: "/team/kushvi.jpg" },
	{
		name: "Om",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Outreach%20Team/1727065039451%20(1)%20-%20Om%20Pandya.jpeg",
		link: "https://www.linkedin.com/in/om-pandya-9a5014272",
	},
	{ name: "Krrish", img: "/team/krrish.jpg" },
	{ name: "Kunj", img: "/team/kunj.jpg" },
	{
		name: "Rohith",
		img: "https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Tech%20Team/WhatsApp%20Image%202025-10-20%20at%2018.31.55.jpeg",
		link: "https://www.linkedin.com/in/gannoju-rohith/",
	},
];

enum membersEnum {
	Gabby,
	Justine,
	Louella,
	Hillary,
	Michelle,
	Declan,
	Caedyn,
	Marco,
	Ashley,
	Ria,
	Kurt,
	Hemasri,
	Vireak,
	Brandon,
	Matthew,
	Gavin,
	Adan,
	Grishma,
	Christian,
	Stella,
	John,
	Trish,
	William,
	Keith,
	Malhar,
	Nalia,
	Rishita,
	Said,
	Sukrit,
	Bahara,
	Trenton,
	Kareem,
	Maxwell,
	Cecil,
	Jim,
	Abha,
	James,
	Hiro,
	Akim,
	Avinh,
	Kushvi,
	Om,
	Krrish,
	Kunj,
	Rohith,
}

const teams: aboutUsTypes.team[] = [
	{
		name: "Design",
		memberIndices: [
			membersEnum.Gabby,
			membersEnum.Declan,
			membersEnum.Louella,
			membersEnum.Michelle,
			membersEnum.Hillary,
			membersEnum.Justine,
			membersEnum.Cecil,
			membersEnum.Hiro,
		],
	},
	{
		name: "Engagement",
		memberIndices: [
			membersEnum.Ria,
			membersEnum.Caedyn,
			membersEnum.Bahara,
			membersEnum.Om,
		],
	},
	{
		name: "Executive",
		memberIndices: [
			membersEnum.Keith,
			membersEnum.Ria,
			membersEnum.Marco,
			membersEnum.Ashley,
			membersEnum.Kurt,
		],
	},
	{
		name: "Finance",
		memberIndices: [
			membersEnum.Kurt,
			membersEnum.Matthew,
			membersEnum.Krrish,
			membersEnum.Grishma,
			membersEnum.Brandon,
			membersEnum.Vireak,
		],
	},
	{
		name: "Logistics",
		memberIndices: [
			membersEnum.Gavin,
			membersEnum.Hemasri,
			membersEnum.Adan,
			membersEnum.Christian,
			membersEnum.Kunj,
			membersEnum.Stella,
			membersEnum.Krrish,
			membersEnum.Grishma,
		],
	},
	{
		name: "Marketing",
		memberIndices: [membersEnum.John, membersEnum.Trish, membersEnum.William],
	},
	{
		name: "Outreach",
		memberIndices: [
			membersEnum.Keith,
			membersEnum.Malhar,
			membersEnum.Rishita,
			membersEnum.Said,
			membersEnum.Sukrit,
			membersEnum.Trenton,
			membersEnum.Kareem,
			membersEnum.Abha,
		],
	},
	{
		name: "Publicity",
		memberIndices: [
			membersEnum.Maxwell,
			membersEnum.Jim,
			membersEnum.James,
			membersEnum.Kushvi,
		],
	},
	{
		name: "Tech",
		memberIndices: [
			membersEnum.Akim,
			membersEnum.John,
			membersEnum.Avinh,
			membersEnum.Vireak,
			membersEnum.Brandon,
			membersEnum.Rohith,
		],
	},
];

export default function Page() {
	return (
		<main className="w-full px-6 md:px-8 py-10 space-y-12 bg-[#030528]">
			<div className="mx-auto w-full max-w-6xl">
				<h1 className="text-center font-audiowide text-3xl md:text-4xl text-[#FFBD52]">
					About Us
				</h1>

				<section className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
					{/* left image */}
					<div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-white/5">
						<div className="relative w-full h-[260px] md:h-[320px]">
							<Image
								src="https://hnclioapcshnrzxkxwfd.supabase.co/storage/v1/object/public/about-us/Tech%20Team/sfh_team.jpg"
								alt="Team"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>
					</div>

					<div className="flex-1 rounded-xl border border-white/10 bg-[#1a1942] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
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
