import "./styles.css";

export default function Home() {
	return (
		<main
			id="home"
			className="relative min-h-[100svh] md:min-h-screen overflow-hidden"
		>
			<div
				className="
          absolute inset-0 z-0
          bg-[url('/SunGridDesktop.svg')] bg-no-repeat bg-bottom
          [background-size:var(--bg-zoom)_auto]
          md:bg-cover md:bg-center
          
          max-[380px]:[--bg-zoom:190%]
          max-[400px]:[--bg-zoom:185%]
          max-[440px]:[--bg-zoom:180%]
          sm:[--bg-zoom:170%]
          md:[--bg-zoom:120%]
          lg:[--bg-zoom:110%]
          xl:[--bg-zoom:100%]
        "
				style={
					{
						["--bg-zoom"]: "180%",
					} as React.CSSProperties
				}
			/>

			{/* MOBILE content */}
			<div
				className="
					relative z-10 md:hidden w-full px-6 pb-2 flex justify-center
					pt-[max(env(safe-area-inset-top),1rem)]
					mt-[var(--hero-y)]
					max-[380px]:[--hero-y:9svh]
					max-[400px]:[--hero-y:10svh]
					max-[440px]:[--hero-y:11svh]
					sm:[--hero-y:12svh]
				"
				style={
					{
						["--hero-y"]: "11svh",
					} as React.CSSProperties
				}
			>
				<div className="flex flex-col w-[90%] max-w-[680px] gap-3">
					<p
						className="
							font-anaheim text-[#FFBD52] text-center leading-tight 
							text-lg sm:text-xl md:text-2xl 
						"
					>
						February 13–15: Student Life Events Center / Annex
					</p>

					<p
						className="
							text-[#FFBD52] font-audiowide text-center leading-tight 
							text-4xl sm:text-5xl md:text-6xl 
						"
					>
						SF Hacks 2026
					</p>

					<div className="flex gap-3 justify-center flex-wrap ">
						<a
							className="
								border bg-[#6FD9FF] text-black rounded-full 
								px-3 py-2 font-anaheim font-semibold 
								text-base sm:text-lg md:text-xl
							"
							href="https://app.sfhacks.io/"
							target="_blank"
						>
							Apply
						</a>
						<a
							className="flex items-center opacity-85 hover:opacity-100 border bg-black 
								text-white rounded-full px-3 py-2 font-anaheim font-semibold text-base 
								sm:text-lg md:text-xl transition-transform duration-150 hover:scale-105"
							href="https://www.youtube.com/watch?v=gNIjTGIuQFY&feature=youtu.be"
							target="_blank"
						>
							Trailer
						</a>
					</div>
				</div>
			</div>

			{/* DESKTOP overlay */}
			<div className="hidden md:flex absolute inset-0 z-10 items-end justify-start">
				<div className="flex flex-col rounded-xl w-[42vw] max-w-[800px] h-auto bg-transparent ml-[6vw] mb-[10vh] justify-center gap-3">
					<p className="font-anaheim text-white font-extrabold text-center text-xl lg:text-2xl xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[2rem]">
						February 13–15: Student Life Events Center / Annex
					</p>
					<p className="text-[#FFBD52] font-audiowide text-center text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[5.5rem] leading-tight">
						SF Hacks 2026
					</p>
					<div className="flex gap-4 justify-center mt-2">
						<a
							className="border bg-[#6FD9FF] text-black rounded-full px-16 py-3 font-anaheim font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-transform duration-150 hover:scale-105"
							href="https://app.sfhacks.io/"
							target="_blank"
						>
							Apply
						</a>
						<a
							className="opacity-85 hover:opacity-100 border bg-black text-white rounded-full px-16 py-3 font-anaheim font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl transition-transform duration-150 hover:scale-105"
							href="https://www.youtube.com/watch?v=gNIjTGIuQFY&feature=youtu.be"
							target="_blank"
						>
							Trailer
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
