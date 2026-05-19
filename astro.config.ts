import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSocialIcons from './src/utils/socialIcons';
import { buildSidebarItems, COBBLEMON_MODS, LIBRARY_MODS, MISC_MODS } from './src/sidebar.config';
import { HEAD_CONFIG } from './src/head.config';

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
			head: HEAD_CONFIG,
			sidebar: [
				{
					label: 'Introduction',
					link: '/'
				},
				{
					label: 'Library Mods',
					items: buildSidebarItems(LIBRARY_MODS)
				},
				{
					label: 'Cobblemon Mods',
					items: buildSidebarItems(COBBLEMON_MODS)
				},
				{
					label: 'Misc Mods',
					items: buildSidebarItems(MISC_MODS)
				},
			],
		}),
	],
});