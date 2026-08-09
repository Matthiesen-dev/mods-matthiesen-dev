import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { HEAD_CONFIG } from "./src/head.config";
import starlightSocialIcons from "./src/plugins/socialIcons";
import { buildSidebarFromGlob } from "./src/sidebar.config";

// https://astro.build/config
export default defineConfig({
	site: "https://mods.matthiesen.dev/",
	integrations: [
		starlightSocialIcons({
			modrinth: "https://modrinth.com/user/Adammatthiesen",
			maven: "https://maven.matthiesen.dev/",
		}),
		starlight({
			title: "Adam Matthiesen's MC Development",
			description:
				"Documentation for Adam Matthiesen's Minecraft mods and libraries.",
			tagline:
				"Documentation for Adam Matthiesen's Minecraft mods and libraries.",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/Matthiesen-dev",
				},
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/4ePfVRgexS",
				},
			],
			components: {
				ContentPanel: "./src/components/starlight/ContentPanel.astro",
				SocialIcons: "./src/components/starlight/SocialIcons.astro",
			},
			customCss: ["./src/styles/starlight.css"],
			logo: {
				src: "./src/assets/logo.png",
			},
			favicon: "favicon.svg",
			pagination: false,
			head: HEAD_CONFIG,
			sidebar: [
				{
					label: "Introduction",
					link: "/",
				},
				{
					label: "Library Mods",
					items: [
						buildSidebarFromGlob({
							name: "Matthiesen Core",
							docs: "matthiesen-core"
						}),
						buildSidebarFromGlob({
							name: "Matthiesen Core Webhooks",
							docs: "matthiesen-core-webhooks",
							badge: "S",
						}),
					],
				},
				{
					label: "Mods",
					items: [
						buildSidebarFromGlob({
							name: "Cobble Poke Bank",
							docs: "cobble-poke-bank",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Cobbled Lvl Ctrl",
							docs: "cobbled-level-control",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Boosters",
							docs: "cobblemon-boosters",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Breathers",
							docs: "cobblemon-breathers",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Escape Rope",
							docs: "cobblemon-escape-rope",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Move Tutor",
							docs: "cobblemon-move-tutor",
						}),
						buildSidebarFromGlob({
							name: "Cbmn NPC Exts",
							docs: "cobblemon-npc-extensions",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Pokestops",
							docs: "cobblemon-pokestops",
						}),
						buildSidebarFromGlob({
							name: "Cbmn PokeTotem",
							docs: "cobblemon-poketotem",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Tablet",
							docs: "cobblemon-tablet",
						}),
						buildSidebarFromGlob({
							name: "Cbmn Torchmaster",
							docs: "cobblemon-torchmaster-fix",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Custom Gateways",
							docs: "custom-gateways",
						}),
						buildSidebarFromGlob({
							name: "Falling Star Rewards",
							docs: "falling-star-rewards",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "PackWiz-ard",
							docs: "packwiz-ard",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Re-LPChatPrefix",
							docs: "re-lpchatprefix",
							badge: "S",
						}),
						buildSidebarFromGlob({
							name: "Vanity Plates",
							docs: "vanity-plates",
							badge: "S",
						}),
					]
				},
				{
					label: "Deprecated Mods",
					collapsed: true,
					items: [
						buildSidebarFromGlob({
							name: "Cobble NPC GD Compat",
							docs: "cobble-npc-gd-compat",
							badge: {
								text: "Deprecated",
								variant: "caution"
							}
						}),
						buildSidebarFromGlob({
							name: "Cobblemon LP NPC Compat",
							docs: "cobblemon-luckperms-npc-compat",
							badge: {
								text: "Deprecated",
								variant: "caution"
							}
						}),
						buildSidebarFromGlob({
							name: "PC-on-a-stick",
							docs: "cobblemon-pc-on-a-stick",
							badge: {
								text: "Deprecated",
								variant: "caution"
							}
						}),
						buildSidebarFromGlob({
							name: "Matthiesen Lib",
							docs: "matthiesen-lib",
							badge: {
								text: "Deprecated",
								variant: "caution"
							}
						}),
						buildSidebarFromGlob({
							name: "Matthiesen Lib API",
							docs: "matthiesen-lib-api",
							badge: {
								text: "Deprecated",
								variant: "caution"
							}
						}),
					]
				}
			],
		}),
	],
});
