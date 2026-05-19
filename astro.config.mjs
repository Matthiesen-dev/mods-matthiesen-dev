// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSocialIcons from './src/utils/socialIcons';

const COBBLEMON_MODS = [
	{
		name: 'Boosters',
		docs: 'mods/cobblemon-boosters',
		badge: "Server"
	},
	{
		name: 'Breathers',
		docs: 'mods/cobblemon-breathers'
	},
	{
		name: 'Escape Rope',
		docs: 'mods/cobblemon-escape-rope'
	},
	{
		name: 'LP NPC Compat',
		docs: 'mods/cobblemon-luckperms-npc-compat',
		badge: "Server"
	},
	{
		name: 'Move Tutor',
		docs: 'mods/cobblemon-move-tutor'
	},
	{
		name: 'PC-on-a-stick',
		docs: 'mods/cobblemon-pc-on-a-stick'
	},
	{
		name: 'Pokestops',
		docs: 'mods/cobblemon-pokestops'
	},
	{
		name: 'PokeTotem',
		docs: 'mods/cobblemon-poketotem',
		badge: "Server"
	},
];

const MISC_MODS = [
	{
		name: 'Re-LPChatPrefix',
		docs: 'mods/re-lpchatprefix',
		badge: "Server"
	},
	{
		name: 'Vanity Plates',
		docs: 'mods/vanity-plates',
		badge: "Server"
	}
];

// https://astro.build/config
export default defineConfig({
	site: 'https://mods.matthiesen.dev/',
	integrations: [
		starlightSocialIcons({
			modrinth: 'https://modrinth.com/user/Adammatthiesen',
			maven: 'https://maven.matthiesen.dev/'
		}),
		starlight({
			title: "Adam Matthiesen's MC Development",
			description: "Documentation for Adam Matthiesen's Minecraft mods and libraries.",
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Matthiesen-dev' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/4ePfVRgexS' },
			],
			components: {
				SocialIcons: './src/utils/SocialIcons.astro'
			},
			logo: {
				src: "./src/assets/logo.png",
			},
			favicon: "favicon.svg",
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: "image/png",
						sizes: "96x96",
						href: "/favicon-96x96.png"
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						href: "/favicon.ico"
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: "180x180",
						href: "/apple-touch-icon.png"
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-title',
						content: "Adam's MC Dev"
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: "/site.webmanifest"
					}
				}
			],
			sidebar: [
				{
					label: 'Introduction',
					link: '/'
				},
				{
					label: 'Library Mods',
					items: [
						{
							label: 'Matthiesen Lib',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'mods/matthiesen-lib', collapsed: true } }
							]
						}
					]
				},
				{
					label: 'Cobblemon Mods',
					items: COBBLEMON_MODS.map(mod => ({
						label: mod.name,
						collapsed: true,
						...(mod.badge ? {
							badge: {
								text: mod.badge,
								variant: "tip"
							}
						} : {}),
						items: [
							{ autogenerate: { directory: mod.docs, collapsed: true } }
						]
					}))
				},
				{
					label: 'Misc Mods',
					items: MISC_MODS.map(mod => ({
						label: mod.name,
						collapsed: true,
						...(mod.badge ? {
							badge: {
								text: mod.badge,
								variant: "tip"
							}
						} : {}),
						items: [
							{ autogenerate: { directory: mod.docs, collapsed: true } }
						]
					}))
				}
			],
		}),
	],
});
