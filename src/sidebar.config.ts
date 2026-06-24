import type { Mod } from "./types";

export const LIBRARY_MODS: Mod[] = [
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

export const COBBLEMON_MODS: Mod[] = [
    {
        name: 'Cobbled Level Control',
        docs: 'cobbled-level-control',
        badge: "S"
    },
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

export const MISC_MODS: Mod[] = [
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

export function buildSidebarItems(mods: Mod[]) {
    return mods.map(mod => ({
        label: mod.name,
        collapsed: true,
        ...(mod.badge
            ? {
                badge: typeof mod.badge === "string"
                    ? { text: mod.badge, variant: "tip" as const }
                    : mod.badge
            } : {}),
        items: [
            { autogenerate: { directory: mod.docs, collapsed: true } }
        ]
    }));
}