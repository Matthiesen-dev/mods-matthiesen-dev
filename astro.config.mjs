// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Adam Matthiesen's MC Development",
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
