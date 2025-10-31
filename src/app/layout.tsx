import "./globals.css";
import { MLHBanner } from "./globalComponents/MLHBanner";
import { ReactNode } from "react";
import Navbar from "./globalComponents/NavBar";
// Optional: if you’re using fonts
// import { Anaheim } from "next/font/google";
// const anaheim = Anaheim({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata = {
	title: "SF Hacks 2025",
	description: "Bigger, Better, with more Air Fryers",
	icons: {
		// I honestly don't have a good reason to use ico files here but might as well
		icon: `${basePath}/favicon.ico`,
		shortcut: `${basePath}/favicon.ico`,
		apple: `${basePath}/icon.png`,
		other: {
			rel: `${basePath}apple-touch-icon-precomposed`,
			url: `${basePath}/icon.png`,
		},
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			{/* Add a global class or font variable if needed */}
			<body
				className="min-h-screen bg-[#030528] text-white antialiased"
				// Turning this off for now, we will have to use this for when we have the new grid background set up
				// style={{
				// 		backgroundColor: "var(--background-color-solid)",
				// 		backgroundImage: `linear-gradient(
				// 	rgb(from var(--background-color-solid) r g b / 0) 90vh,
				// 	rgb(from var(--background-color-solid) r g b / 0.5) 97vh,
				// 	rgb(from var(--background-color-solid) r g b / 1) 100vh
				// ),
				// url("${basePath}/background.svg")`,
				// 	}}
			>
				<Navbar></Navbar>
				{children}
				<MLHBanner></MLHBanner>
			</body>
		</html>
	);
}
