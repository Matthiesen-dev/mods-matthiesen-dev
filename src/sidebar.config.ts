export const LIBRARY_MODS = [
    {
        name: 'Matthiesen Lib',
        docs: 'matthiesen-lib'
    },
    {
        name: 'Matthiesen Lib API',
        docs: 'matthiesen-lib-api',
        badge: "S"
    },
    {
        name: 'Matthiesen Lib Webhooks',
        docs: 'matthiesen-lib-webhooks',
        badge: "S"
    }
];

export const COBBLEMON_MODS = [
    {
        name: 'Boosters',
        docs: 'cobblemon-boosters',
        badge: "S"
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
        badge: "S"
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
        badge: "S"
    },
];

export const MISC_MODS = [
    {
        name: 'Falling Star Rewards',
        docs: 'falling-star-rewards',
        badge: "S"
    },
    {
        name: 'PackWiz-ard',
        docs: 'packwiz-ard',
        badge: "S"
    },
    {
        name: 'Re-LPChatPrefix',
        docs: 're-lpchatprefix',
        badge: "S"
    },
    {
        name: 'Vanity Plates',
        docs: 'vanity-plates',
        badge: "S"
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