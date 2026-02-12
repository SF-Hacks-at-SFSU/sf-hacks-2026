export type SponsorsDatum = {
	name: string;
	path: string;
	isCurrent: boolean;

	tier?: SponsorTier;
	url?: string;
};

export type SponsorTier = (typeof sponsorTier)[keyof typeof sponsorTier];

export const sponsorTier = {
	platinum: "platinum",
	gold: "gold",
	silver: "silver",
	bronze: "bronze",
	specialThanks: "specialThanks",
} as const;

const data: SponsorsDatum[] = [
	{
		name: "Browserbase",
		path: "/sponsor-logos/current/BrowserBase.png",
		isCurrent: false,

		tier: "specialThanks",
		url: "https://www.browserbase.com/",
	},
	{
		name: "Meta",
		path: "/sponsor-logos/current/Meta.svg",
		isCurrent: true,

		tier: "gold",
		url: "https://www.meta.com/",
	},
	{
		name: "JFF Ventures",
		path: "/sponsor-logos/current/JFFVentures1.png",
		isCurrent: true,

		tier: "gold",

		url: "https://www.jff.org/work/jff-ventures/",
	},
	{
		name: "IBM",
		path: "/sponsor-logos/current/IBM.png",
		isCurrent: true,

		tier: "gold",
		url: "https://www.ibm.com/",
	},
	{
		name: "SFSU Department of Computer Science",
		path: "/sponsor-logos/current/SFSU-CSDepartment.svg",
		isCurrent: true,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://cs.sfsu.edu",
	},
	{
		name: "Gilead Sciences",
		path: "/sponsor-logos/current/Gilead.svg",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://www.gilead.com",
	},
	{
		name: "SFSU College of Science and Engineering",
		path: "/sponsor-logos/current/CoSE.svg",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://cose.sfsu.edu",
	},
	{
		name: "Innovation & Entrepreneurship at San Francisco State University",
		path: "/sponsor-logos/current/IE.png",
		isCurrent: true,

		tier: "specialThanks",
		url: "https://cob.sfsu.edu/initiatives-centers/innovation-entrepreneurship-programs",
	},
	{
		name: "TensorStax",
		path: "/sponsor-logos/current/TensorStax.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: "https://tensorstax.com/",
	},
	{
		name: "Management Leadership for Tomorrow",
		path: "/sponsor-logos/current/MLT.png",
		isCurrent: true,

		tier: "bronze",
		url: "https://mlt.org/career-prep/",
	},
	{
		name: "Inductive Automation",
		path: "/sponsor-logos/current/InductiveAutomation.png",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://inductiveautomation.com",
	},
	{
		name: "Upstreman",
		path: "/sponsor-logos/current/Upstreman.svg",
		isCurrent: true,

		tier: "bronze",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://upstreman.com/sfhacks",
	},
	{
		name: "Backboard",
		path: "/sponsor-logos/current/Backboard.svg",
		isCurrent: true,

		tier: "bronze",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://backboard.io",
	},

	{
		name: "CodePath",
		path: "/sponsor-logos/current/CodePath.png",
		isCurrent: false,

		tier: "specialThanks",
		url: "https://www.codepath.org",
	},
	//
	{
		name: "Lam-Larsen Initiative in Emerging Technologies",
		path: "/sponsor-logos/current/LamLarsen.png",
		isCurrent: false,

		tier: "specialThanks",
		url: "https://www.codepath.org",
	},
	{
		name: "OpenMind",
		path: "/sponsor-logos/current/OpenMind.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: "https://openmind.org",
	},
	//
	{
		name: "Momen",
		path: "/sponsor-logos/current/Momen.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: "https://momen.app",
	},
	//
	{
		name: "Fastly",
		path: "/sponsor-logos/current/Fastly.svg",
		isCurrent: false,

		tier: "specialThanks", // idk what an a la carte sponsorship level is but imma jsut put bronze
		url: "https://www.fastly.com/",
	},

	{
		name: "Broxi",
		path: "/sponsor-logos/current/broxi.png",
		isCurrent: true,

		tier: "bronze",
		url: "https://broxi.ai",
	},

	{
		name: "Medsender",
		path: "/sponsor-logos/current/MedSender.png",
		isCurrent: true,

		tier: "bronze",
		url: "https://medsender.com",
	},
	{
		name: "Actian",
		path: "/sponsor-logos/current/Actian.svg",
		isCurrent: true,

		tier: "gold",
		url: "https://actian.com",
	},

	{
		name: "Association for Computing Machinery",
		path: "/sponsor-logos/current/ACM.svg",
		isCurrent: true,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://www.instagram.com/acm.sfsu",
	},
	{
		name: "GT's Living Foods",
		path: "/sponsor-logos/current/kombucha.png",
		isCurrent: true,

		tier: "specialThanks",
		url: "https://gtslivingfoods.com/",
	},
	{
		name: "CRS",
		path: "/sponsor-logos/current/crs2.svg",
		isCurrent: true,

		tier: "silver",
		url: "https://crscreditapi.com",
	},
] as const;

export default data;
