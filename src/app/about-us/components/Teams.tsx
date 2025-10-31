"use client";

import React, { useState } from "react";
import Avatar from "./Avatar";
import type * as aboutUsTypes from "../types";

interface TeamsProps {
	teams: aboutUsTypes.team[];
	members: aboutUsTypes.member[];
}

export default function Teams({ teams, members }: TeamsProps) {
	const [activeTab, updateActiveTab] = useState(0);

	return (
		<div className="w-full self-center">
			{/* Tabs */}
			<div className="flex overflow-x-auto rounded-t-xl border border-white/10 bg-[#1a1942] px-2 py-2 scrollbar-hide">
				{teams.map((team, i) => (
					<TeamTab
						teamIndex={i}
						activeIndex={activeTab}
						handleClick={updateActiveTab}
						key={i}
					>
						{team.name}
					</TeamTab>
				))}
			</div>

			{/* Members */}
			<div className="flex flex-wrap justify-center gap-6 rounded-b-xl border-x border-b border-white/10 bg-[#2a2956] p-6">
				{teams[activeTab].memberIndices.map((memberIndex, i) => (
					<Avatar
						member={members[memberIndex]}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}

function TeamTab({
	teamIndex,
	activeIndex,
	handleClick,
	children,
}: TeamTabProps) {
	const isActive = teamIndex === activeIndex;
	return (
		<button
			className={`mx-1 rounded-lg px-4 py-2 text-sm md:text-base font-anaheim transition-colors duration-200
        ${
					isActive
						? "bg-[#2a2956] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
						: "text-[#FFBD52] hover:text-[#FFBD52]"
				}`}
			onClick={() => handleClick(teamIndex)}
		>
			{children}
		</button>
	);
}

interface TeamTabProps {
	children: React.ReactNode;
	teamIndex: number;
	activeIndex: number;
	handleClick: (teamindex: number) => void;
}
