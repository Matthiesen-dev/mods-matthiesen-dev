// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
					label: 'Mods',
					items: [
						{
							label: 'Matthiesen Lib',
							items: [
								{ autogenerate: { directory: "mods/matthiesen-lib" } }
							]
						}
					]
				}
			],
		}),
	],
});
