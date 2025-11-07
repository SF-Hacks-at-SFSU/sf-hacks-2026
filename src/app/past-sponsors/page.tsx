import Image from "next/image";
import "./styles.css";

import sponsorsData, {
	sponsorTier,
	SponsorTier,
	SponsorsDatum,
} from "@/custom-img-loader/sponsor-logos/data";
import TieredSponsors from "./components/TieredSponsorsGrid";

const sponsorsByTier = Object.values(sponsorTier).reduce(
	(acc, currentTier) => {
		acc[currentTier] = sponsorsData.filter(
			({ /* isCurrent, */ tier }) => tier && tier === currentTier
		);
		return acc;
	},
	{} as Record<SponsorTier, SponsorsDatum[]>
);

export default function PastSponsorsPage() {
	return (
		<main className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 bg-[#030528]">
			{/* Title sponsor hero */}
			<section
				className="
          w-full flex justify-center mb-10 
          pt-16 sm:pt-20 md:pt-24 lg:pt-28
          transition-all duration-300
        "
			>
				<div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl">
					<a
						href="https://openmind.org"
						target="_blank"
						className=" cursor-pointer "
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sponsor-logos/current/OpenMind.svg`}
							alt="OpenMind — Title Sponsor"
							width={1600}
							height={600}
							priority
							className="w-full h-auto mx-auto hover:scale-105 transition delay-200"
							sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw"
						/>
					</a>
				</div>
			</section>

			{/* Tiered sponsors list */}
			<section className="mt-6 sm:mt-10">
				{Object.keys(sponsorsByTier).map((tierKey) => {
					const data = sponsorsByTier[tierKey as SponsorTier];
					if (data.length === 0) return null;
					return (
						<TieredSponsors
							key={tierKey}
							logoData={data}
							tier={tierKey as SponsorTier}
							name="self-center"
						/>
					);
				})}
			</section>
		</main>
	);
}
