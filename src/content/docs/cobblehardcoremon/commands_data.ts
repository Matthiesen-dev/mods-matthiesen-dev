import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "hardcoremon",
        description: "The root command for CobbleHardcoreMon. Shows help information for the mod.",
        usage: "/hardcoremon",
        permissionNode: "cobblehardcoremon.command.hardcoremon",
    },
    {
        command: "hardcoremon setHealthLink",
        description: "Enables or disables the Health Link feature for the player.",
        usage: "/hardcoremon setHealthLink <true|false>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.set-health-link",
    },
    {
        command: "hardcoremon getHealthLink",
        description: "Checks whether the Health Link feature is enabled or disabled for the player.",
        usage: "/hardcoremon getHealthLink",
        permissionNode: "cobblehardcoremon.command.hardcoremon.get-health-link",
    },
    {
        command: "hardcoremon forceHealthLink",
        description: "Forces the Health Link feature to be enabled or disabled for a specific player.",
        usage: "/hardcoremon forceHealthLink <player> <true|false>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.force-health-link",
    },
    {
        command: "hardcoremon getHealthLinkOther",
        description: "Checks whether the Health Link feature is enabled or disabled for a specific player.",
        usage: "/hardcoremon getHealthLinkOther <player>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.get-health-link-other",
    },
    {
        command: "hardcoremon soulLink",
        description: "Checks whether the Soul Link feature is enabled or disabled for the player.",
        usage: "/hardcoremon soulLink",
        permissionNode: "cobblehardcoremon.command.hardcoremon.soul-link",
    },
    {
        command: "hardcoremon soulLink invite",
        description: "Invites another player to link their parties together.",
        usage: "/hardcoremon soulLink invite <player>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.soul-link.invite",
    },
    {
        command: "hardcoremon soulLink accept",
        description: "Accepts a Soul Link invitation from another player.",
        usage: "/hardcoremon soulLink accept <player>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.soul-link.accept",
    },
    {
        command: "hardcoremon soulLink decline",
        description: "Declines a Soul Link invitation from another player.",
        usage: "/hardcoremon soulLink decline <player>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.soul-link.decline",
    },
    {
        command: "hardcoremon soulLink remove",
        description: "Removes the current Soul Link between the player and their partner.",
        usage: "/hardcoremon soulLink remove",
        permissionNode: "cobblehardcoremon.command.hardcoremon.soul-link.remove",
    }
];