export const LIBRARY_MODS = [
    {
        name: 'Matthiesen Lib',
        docs: 'mods/matthiesen-lib'
    }
];

export const COBBLEMON_MODS = [
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

export const MISC_MODS = [
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

export function buildSidebarItems(mods: { name: string; docs: string; badge?: string }[]) {
    return mods.map(mod => ({
        label: mod.name,
        collapsed: true,
        ...(mod.badge ? {
            badge: {
                text: mod.badge,
                variant: "tip" as const
            }
        } : {}),
        items: [
            { autogenerate: { directory: mod.docs, collapsed: true } }
        ]
    }));
}