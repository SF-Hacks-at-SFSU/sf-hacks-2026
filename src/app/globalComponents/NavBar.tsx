"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Set menu links here
const NAV_LINKS = [
	{ name: "About Us", href: "/about-us", newTab: false },

	{ name: "Sponsors", href: "/past-sponsors", newTab: false },
	{ name: "FAQs", href: "/faqs", newTab: false },
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

interface DesktopLinksProps {
	className?: string;
}

function DesktopLinks({ className = "" }: DesktopLinksProps) {
	return (
		<div className={`${className} items-center font-audiowide`}>
			<div
				className={`flex items-center pointer-events-auto relative
          text-[#13123e] gap-3 text-sm md:text-base lg:text-lg font-medium
          w-full px-6 py-2`}
			>
				<div className="flex items-center gap-4 md:gap-6 lg:gap-8 justify-center flex-1">
					<Link
						href="/"
						className="hidden md:block"
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/logo.svg`}
							alt="SF Hacks logo"
							width={40}
							height={40}
							className="transition-transform duration-200 hover:opacity-90"
							priority
						/>
					</Link>

					<div className="flex items-center gap-3 md:gap-6 text-[#FFBD52] whitespace-nowrap">
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

				<div className="flex items-center gap-2 md:gap-3 shrink-0 absolute right-4">
					<a
						href="https://discord.gg/P5PsDR6G7W"
						target="_blank"
						className="bg-[#6FD9FF] rounded-xl px-6 md:px-7 py-1.5 text-xs md:text-sm text-[#43457F]"
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
							className="w-8 md:w-9 lg:w-10"
							objectFit="cover"
						/>
					</a>
				</div>
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
		<div className={`${className} px-3 py-2 font-anaheim font-bold text-4xl`}>
			<div className="flex items-center gap-4">
				<button
					onClick={handleToggle}
					className="z-50 p-2 text-[#FFBD52] transition-colors duration-200 rounded-lg"
				>
					{!isOpen && <Menu size={28} />}
				</button>
				<a
					href="https://discord.gg/P5PsDR6G7W"
					target="_blank"
				>
					<Image
						src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/discord.svg`}
						alt="discord icon"
						width={28}
						height={28}
					/>
				</a>
				<a
					href="https://www.instagram.com/sf.hacks/"
					target="_blank"
				>
					<Image
						src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/instagram.svg`}
						alt="instagram icon"
						width={28}
						height={28}
					/>
				</a>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`fixed inset-y-0 right-0 z-40 bg-[#FFBD52] text-[#303160] transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0 w-4/5" : "translate-x-full"
				}`}
			>
				{isOpen && (
					<button
						onClick={handleToggle}
						className="p-3"
					>
						<X
							size={40}
							color="#303160"
						/>
					</button>
				)}

				<div className="flex flex-col items-center justify-center h-full px-6 ">
					{/* Mobile Navigation Links */}
					<div className="flex flex-col items-center gap-10  h-4/5">
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
						<NavLink
							href={REGISTER_LINK.href}
							className="px-6 py-2 mt-2 bg-[#6FD9FF] text-[#43457F] rounded-full shadow-lg active:scale-95"
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
		<nav className="sticky top-0 z-40 pointer-events-none w-full py-2">
			<DesktopLinks className="hidden md:flex w-full" />
			<MobileMenu
				isOpen={isOpen}
				handleToggle={handleToggle}
				className="md:hidden pointer-events-auto flex justify-end"
			/>
		</nav>
	);
}
