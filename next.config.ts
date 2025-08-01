import type { NextConfig } from "next";
import { __next_app__ } from "next/dist/build/templates/app-page";

const hasCustomDomain = process.env.GITHUB_PAGES_HAS_CUSTOM_DOMAIN === "true";
const gitHubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
	output: "export",
	// The environment variable code comes from https://github.com/nextjs/deploy-github-pages/blob/main/next.config.ts
	basePath: hasCustomDomain ? "" : gitHubPagesBasePath,
	images: {
		unoptimized: true,
		// disableStaticImages: true
	},
};

export default nextConfig;
