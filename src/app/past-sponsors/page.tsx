import Image from "next/image";
import Link from "next/link";
import "./styles.css";

import sponsorsData, {
	sponsorTier,
	SponsorTier,
	SponsorsDatum,
} from "@/custom-img-loader/sponsor-logos/data";
import TieredSponsors from "./components/TieredSponsorsGrid";

const currentSponsorsByTier = Object.values(sponsorTier).reduce(
	(acc, currentTier) => {
		acc[currentTier] = sponsorsData.filter(
			({ isCurrent, tier }) => isCurrent && tier === currentTier
		);
		return acc;
	},
	{} as Record<SponsorTier, SponsorsDatum[]>
);

const pastSponsorsByTier = Object.values(sponsorTier).reduce(
	(acc, currentTier) => {
		acc[currentTier] = sponsorsData.filter(
			({ isCurrent, tier }) => !isCurrent && tier === currentTier
		);
		return acc;
	},
	{} as Record<SponsorTier, SponsorsDatum[]>
);

export default function PastSponsorsPage() {
	return (
		<main className="w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 text-center">
			<h1 className="font-audiowide text-white text-3xl md:text-4xl mb-3">
				Our Sponsors
			</h1>

			<Link
				href="/past-sponsors/why-sponsor"
				className="button self-center"
			>
				Sponsor Us!
			</Link>

			<section className="mt-6 sm:mt-10">
				{Object.keys(currentSponsorsByTier).map((tierKey) => {
					const data = currentSponsorsByTier[tierKey as SponsorTier];
					if (data.length === 0) return null;
					return (
						<TieredSponsors
							key={`current-${tierKey}`}
							logoData={data}
							tier={tierKey as SponsorTier}
							name="self-center"
						/>
					);
				})}
			</section>

			<section className="mt-20 sm:mt-28">
				<h2 className="font-audiowide text-white text-2xl md:text-3xl mb-6">
					Past Sponsors
				</h2>

				{Object.keys(pastSponsorsByTier).map((tierKey) => {
					const data = pastSponsorsByTier[tierKey as SponsorTier];
					if (data.length === 0) return null;
					return (
						<TieredSponsors
							key={`past-${tierKey}`}
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
