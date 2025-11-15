import "./styles.css";

export default function WhySponsorPage() {
	return (
		<main className="mt-20 md:mt-0 md:px-4 flex flex-col gap-4 md:gap-8 items-center">
			<h1 className="text-white text-3xl md:text-4xl font-audiowide font-bold">
				Why Sponsor Us?
			</h1>
			<p className="px-8 text-sm md:text-lg">
				Join us in empowering the next generation of tech leaders. SF Hacks
				brings together 400 talented hackers for a 48-hour hackathon full of
				innovation, collaboration, and creativity.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
				<section className="bg-[#303160] px-4 py-2 rounded-md">
					<h3 className="text-md md:text-lg font-semibold font-audiowide">
						Promote Your Brand
					</h3>
					<p className="">
						Showcase your organization to a global audience of tech-savvy
						students and professionals. Build your brand’s reputation as a
						leader in innovation.
					</p>
				</section>
				<section className="bg-[#303160] px-4 py-2 rounded-md">
					<h3 className="text-md md:text-lg font-semibold font-audiowide">
						Access Top Talent
					</h3>
					<p>
						Connect with some of the brightest minds in tech and discover
						potential interns, employees, or collaborators for your next big
						project.
					</p>
				</section>
				<section className="bg-[#303160] px-4 py-2 rounded-md">
					<h3 className="text-md md:text-lg font-semibold font-audiowide">
						Engage with Hackers
					</h3>
					<p>
						Host workshops, sponsor challenge tracks, and provide proprietary
						tools to guide hackers in creating impactful projects.
					</p>
				</section>
				<section className="bg-[#303160] px-4 py-2 rounded-md">
					<h3 className="text-md md:text-lg font-semibold font-audiowide">
						Support Innovation
					</h3>
					<p>
						Play a crucial role in advancing technology by providing mentorship,
						resources, and prizes that empower hackers to think outside the box.
					</p>
				</section>
			</div>

			<div className="flex flex-col gap-2 md:gap-4 justify-end items-center md:mt-10">
				<h2 className="bg-sfyellow text-white text-lg md:text-2xl font-audiowide">
					Ready to Inspire Innovation?
				</h2>
				<p className="px-4">
					Contact us today to learn how you can contribute to SF Hacks 2025 and
					make a lasting impact.
				</p>
				<a
					href="mailto:sfhacksteam@gmail.com"
					className="button specialButton"
				>
					Contact Us!
				</a>
			</div>
		</main>
	);
}
