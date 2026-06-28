import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "packwizard",
        description: "Root command for PackWiz-ard.",
        usage: "/packwizard <subcommand>",
        controlledByConfig: true,
    },
    {
        command: "packwizard link",
        description: "Links a PackWiz modpack to the server.",
        usage: "/packwizard link <url>",
        controlledByConfig: true,
    },
    {
        command: "packwizard update",
        description: "Updates the server's modpack to the latest version.",
        usage: "/packwizard update",
        controlledByConfig: true,
    },
    {
        command: "packwizard minimumPermissionLevel",
        description: "Sets the minimum permission level required to use PackWiz-ard commands.",
        usage: "/packwizard minimumPermissionLevel <level>",
        controlledByConfig: true,
    },
    {
        command: "packwizard autoUpdate",
        description: "Enables or disables automatic updates for the server's modpack.",
        usage: "/packwizard autoUpdate <true|false>",
        controlledByConfig: true,
    },
    {
        command: "packwizard autoUpdateInterval",
        description: "Sets the interval (in minutes) for automatic updates.",
        usage: "/packwizard autoUpdateInterval <minutes>",
        controlledByConfig: true,
    },
    {
        command: "packwizard autoUpdateStatus",
        description: "Checks the status of automatic updates for the server's modpack.",
        usage: "/packwizard autoUpdateStatus",
        controlledByConfig: true,
    }
];