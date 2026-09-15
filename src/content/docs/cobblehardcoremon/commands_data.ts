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
        command: "hardcoremon forceHealthLink",
        description: "Forces the Health Link feature to be enabled or disabled for a specific player.",
        usage: "/hardcoremon forceHealthLink <player> <true|false>",
        permissionNode: "cobblehardcoremon.command.hardcoremon.force-health-link",
    }
];