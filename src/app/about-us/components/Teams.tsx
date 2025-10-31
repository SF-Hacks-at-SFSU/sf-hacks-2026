"use client";

import React from "react";
import Avatar from "./Avatar";
import { useState } from "react";
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
			<div className="flex overflow-x-auto bg-gradient-to-b from-[#2f3160] to-[#1a1a3f] rounded-t-md px-4 py-2 scrollbar-hide">
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
			<div className="flex flex-wrap justify-center gap-6 bg-[#43457F] rounded-b-md p-6">
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
			className={`px-4 py-2 font-semibold text-base transition-colors duration-200 ${
				isActive
					? "bg-[#43457F] text-white rounded-t-md rounded-b-none -mb-[9px] z-10"
					: "text-gray-300 hover:text-white"
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
