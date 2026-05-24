export const LIBRARY_MODS = [
    {
        name: 'Matthiesen Lib API',
        docs: 'matthiesen-lib-api'
    },
    {
        name: 'Matthiesen Lib',
        docs: 'matthiesen-lib'
    }
];

export const COBBLEMON_MODS = [
    {
        name: 'Boosters',
        docs: 'cobblemon-boosters',
        badge: "Server"
    },
    {
        name: 'Breathers',
        docs: 'cobblemon-breathers'
    },
    {
        name: 'Escape Rope',
        docs: 'cobblemon-escape-rope'
    },
    {
        name: 'LP NPC Compat',
        docs: 'cobblemon-luckperms-npc-compat',
        badge: "Server"
    },
    {
        name: 'Move Tutor',
        docs: 'cobblemon-move-tutor'
    },
    {
        name: 'PC-on-a-stick',
        docs: 'cobblemon-pc-on-a-stick'
    },
    {
        name: 'Pokestops',
        docs: 'cobblemon-pokestops'
    },
    {
        name: 'PokeTotem',
        docs: 'cobblemon-poketotem',
        badge: "Server"
    },
];

export const MISC_MODS = [
    {
        name: 'Re-LPChatPrefix',
        docs: 're-lpchatprefix',
        badge: "Server"
    },
    {
        name: 'Vanity Plates',
        docs: 'vanity-plates',
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