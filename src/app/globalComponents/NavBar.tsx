"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Set menu links here
const NAV_LINKS = [
	{
		name: "About Us",
		href: "/about-us",
		newTab: false,
	},
	{
		name: "Sponsor Us",
		href: "/sponsor-us",
		newTab: false,
	},
	{
		name: "Sponsors",
		href: "/past-sponsors", // We really need a better system for handling routes than just renaming the routes manually
		newTab: false,
	},
	// Hiding schedule and handbook for now since we don't need it
	// {
	// 	name: "Schedule",
	// 	href: "/schedule",
	// 	newTab: false,
	// },
	// {
	// 	name: "Handbook",
	// 	href: "https://docs.google.com/document/d/1Ecz-rSa1G3D9gjdr-WvC0qk9GFsEri1OL5VFNBakgG8/edit?tab=t.0#heading=h.5mlg45992779",
	// 	newTab: true,
	// },
	{
		name: "FAQs",
		href: "/faqs",
		newTab: false,
	},
];

// Set registration link here
const REGISTER_LINK = {
	name: "Register",
	href: "https://tally.so/r/nrRZRN",
};

interface NavLinkProps {
	href: string;
	className?: string;
	onClick?: () => void;
	newTab: boolean;
	children: React.ReactNode;
}

function NavLink({
	href,
	children,
	className = "",
	onClick,
	newTab,
}: NavLinkProps) {
	if (newTab) {
		return (
			<a
				href={href}
				className={`transition-colors duration-200 hover:text-purple-200 ${className}`}
				onClick={onClick}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	}

	return (
		<Link
			href={href}
			className={`transition-colors duration-200 hover:text-purple-200 ${className}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}

interface NavLinksProps {
	className?: string;
}

function NavLinks({ className = "" }: NavLinksProps) {
	return (
		<div className={`${className} items-center font-audiowide`}>
			{/* container for 2 divs: one for the  logo/nav links and the other for discord/IG icons */}
			<div
				// use flex-1 to make the div take up the full width available
				// justify-evenly to space out the 2 divs
				className={`flex text-[#13123e] items-center justify-evenly 
					pointer-events-auto gap-1 md:gap-3 lg:gap-0 text-lg font-medium
					  lg:text-xl flex-1`}
			>
				{/* container for logo and nav links */}
				<div className="flex gap-2 md:gap-4">
					<Link
						href="/"
						className="hidden md:block"
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/logo.svg`}
							alt="SF Hacks logo"
							className="transition-transform duration-200 hover:scale-110 w-20"
							width={10}
							height={10}
							objectFit="cover"
						/>
					</Link>
					{/* Navigation Links */}
					{/* whitespace-nowrap makes text not wrap to 2 lines */}
					<div className="flex items-center gap-1 md:gap-4 text-[#FFBD52] whitespace-nowrap">
						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.name}
								href={link.href}
								newTab={link.newTab}
							>
								{link.name}
							</NavLink>
						))}
					</div>
				</div>

				<div className="flex gap-1 md:gap-4 items-center">
					<a
						href="https://discord.gg/P5PsDR6G7W"
						target="_blank"
						className="bg-[#6FD9FF] rounded-[20px] px-16 py-2 text-[#43457F]"
					>
						Discord
					</a>
					<a
						href="https://www.instagram.com/sf.hacks/"
						target="_blank"
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/instagram.svg`}
							alt="instagram icon"
							width={10}
							height={10}
							className="w-14"
							objectFit="cover"
						/>
					</a>
				</div>

				{/* Register Button */}
				{/* This button is being defined twice right now, one in the desktop navbar and the other in the mobile navbar*/}
				{/* <a
					href={REGISTER_LINK.href}
					className="button text-white bg-linear-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-purple-500/25 active:scale-95"
				>
					{REGISTER_LINK.name}
				</a> */}
			</div>
		</div>
	);
}

interface MobileMenuProps {
	isOpen: boolean;
	handleToggle: () => void;
	className?: string;
}

function MobileMenu({ isOpen, handleToggle, className = "" }: MobileMenuProps) {
	return (
		<div className={`${className}`}>
			{/* logo and menu container */}
			<div className="flex items-center gap-.5">
				<button>
					<Image
						src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/logo.svg`}
						alt="sfhacks2026 logo"
						width={50}
						height={50}
					/>
				</button>
				{/* Mobile Menu Button */}
				<button
					onClick={handleToggle}
					className="z-50 p-2 text-[#FFBD52] transition-colors duration-200 rounded-lg backdrop-blur-xs"
				>
					{!isOpen && (
						<Menu
							size={40}
							className=""
						/>
					)}
				</button>
			</div>

			{/* discord and instagram icons container */}
			<div className="flex items-center gap-4">
				<a
					href="https://discord.gg/P5PsDR6G7W"
					target="_blank"
				>
					<Image
						src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/discord.svg`}
						alt="discord icon"
						width={40}
						height={40}
					/>
				</a>
				<a
					href="https://www.instagram.com/sf.hacks/"
					target="_blank"
				>
					<Image
						src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/instagram.svg`}
						alt="instagram icon"
						width={40}
						height={40}
					/>
				</a>
			</div>

			{/* Full Screen Mobile Menu */}
			<div
				className={`fixed inset-0 z-40 bg-[#FFBD52] transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button>
					{isOpen && (
						<X
							size={32}
							onClick={handleToggle}
						/>
					)}
				</button>

				<div className="flex flex-col items-center justify-center h-full">
					{/* Mobile Navigation Links */}
					<div className="flex flex-col items-center gap-8 text-2xl text-[#13123e]">
						<Link
							href="/"
							className="transition-colors hover:text-purple-500"
							onClick={handleToggle}
						>
							Home
						</Link>

						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.name}
								href={link.href}
								className="transition-colors hover:text-purple-500"
								onClick={handleToggle}
								newTab={link.newTab}
							>
								{link.name}
							</NavLink>
						))}

						{/* Register Button */}
						{/* This button is being defined twice right now, one in the desktop navbar and the other in the mobile navbar*/}
						<NavLink
							href={REGISTER_LINK.href}
							className="px-8 py-3 mt-4 bg-[#6FD9FF] text-[#43457F] rounded-full shadow-lg active:scale-95"
							onClick={handleToggle}
							newTab={true}
						>
							{REGISTER_LINK.name}
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="sticky top-0 z-40 pointer-events-none  w-full">
			<NavLinks className="hidden md:flex w-full" />
			<MobileMenu
				isOpen={isOpen}
				handleToggle={handleToggle}
				className="md:hidden pointer-events-auto flex justify-between"
			/>
		</nav>
	);
}
