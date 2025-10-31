import Image from "next/image";
import "./styles.css";

export default function Home() {
	return (
		<main
			id="home"
			className="relative min-h-screen h-auto overflow-clip bg-[#030528]"
		>
			{/* BACKGROUND */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/SunGridDesktop.svg"
					alt=""
					fill
					priority
					className="
            pointer-events-none select-none
            /* slightly zoomed out so both sides show */
             md:object-cover
            /* push horizon up slightly */
            md:object-center
            scale-[190%] md:scale-100
            transition-transform duration-500
          "
				/>
			</div>

			{/* MOBILE content */}
			<div className="relative z-10 block md:hidden w-full px-6 pt-4 pb-2 flex justify-center">
				<div className="flex flex-col rounded-xl w-[90%] max-w-[680px] h-auto bg-transparent justify-center gap-2">
					<p className="font-anaheim text-[#FFBD52] text-center text-base sm:text-lg leading-tight">
						February 4–6: Student Life Events Center / Annex
					</p>
					<p className="text-[#FFBD52] font-audiowide text-center text-3xl sm:text-4xl leading-tight">
						SF Hacks 2026
					</p>
					<div className="flex gap-3 justify-center flex-wrap mt-1">
						<button className="border bg-[#6FD9FF] text-black rounded-full px-5 py-2 font-anaheim font-semibold text-sm sm:text-base">
							Join the Waitlist
						</button>
						<p className="text-[#FFBD52] px-4 py-2 font-anaheim font-semibold text-sm sm:text-base whitespace-nowrap">
							More updates soon
						</p>
					</div>
				</div>
			</div>

			{/* DESKTOP overlay */}
			<div className="hidden md:flex absolute inset-0 z-10 items-end justify-start">
				<div className="flex flex-col rounded-xl w-[42vw] max-w-[680px] h-40 bg-transparent ml-[6vw] mb-[12vh] justify-center gap-2">
					<p className="font-anaheim text-[#FFBD52] text-center text-lg">
						February 4–6: Student Life Events Center / Annex
					</p>
					<p className="text-[#FFBD52] font-audiowide text-center text-4xl">
						SF Hacks 2026
					</p>
					<div className="flex gap-3 justify-center">
						<button className="border bg-[#6FD9FF] text-black rounded-full px-4 py-2 font-anaheim font-semibold">
							Join the Waitlist
						</button>
						<p className="text-[#FFBD52] px-4 py-2 font-anaheim font-semibold whitespace-nowrap">
							More updates soon
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
