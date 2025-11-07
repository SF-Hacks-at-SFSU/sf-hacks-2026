import type * as aboutUsTypes from "../types";
import Avatar from "./Avatar";

interface TeamSectionsProps {
	teams: aboutUsTypes.team[];
	members: aboutUsTypes.member[];
}

// This component is not used anywhere, it is just an alternative design for the aboutus page
export function TeamSections({ teams, members }: TeamSectionsProps) {
	return (
		<div>
			{teams.map((team) => (
				<section
					key={team.name}
					className="my-8"
				>
					<h3 className="text-2xl font-semibold mb-4 text-center text-[#fdf4dc]">
						{team.name}
					</h3>
					<div className="flex flex-wrap justify-center gap-6 bg-[#43457F] rounded-md p-6">
						{team.memberIndices.map((index) => (
							<Avatar
								key={members[index].name}
								member={members[index]}
							/>
						))}
					</div>
				</section>
			))}
		</div>
	);
}
