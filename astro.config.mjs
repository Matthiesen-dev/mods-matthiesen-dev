// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const COBBLEMON_MODS = [
	{
		name: 'Boosters',
		docs: 'mods/cobblemon-boosters'
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
		name: 'Luckperms NPC Compat',
		docs: 'mods/cobblemon-luckperms-npc-compat'
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
		docs: 'mods/cobblemon-poketotem'
	},
];

const MISC_MODS = [
	{
		name: 'Re-LPChatPrefix',
		docs: 'mods/re-lpchatprefix'
	},
	{
		name: 'Vanity Plates',
		docs: 'mods/vanity-plates'
	}
];

// https://astro.build/config
export default defineConfig({
	site: 'https://mods.matthiesen.dev/',
	integrations: [
		starlight({
			title: "Adam Matthiesen's MC Development",
			description: "Documentation for Adam Matthiesen's Minecraft mods and libraries.",
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Matthiesen-dev' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/4ePfVRgexS' },
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
						items: [
							{ autogenerate: { directory: mod.docs, collapsed: true } }
						]
					}))
				}
			],
		}),
	],
});
