import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "market",
        description: "The main command for Cobbled Market. This command without any arguments will open the market GUI for the player.",
        usage: "/market",
        permissionNode: "cobbled_market.command.market",
    },
    {
        command: "market <shopId>",
        description: "Opens a specific shop GUI for the player.",
        usage: "/market <shopId>",
        permissionNode: "cobbled_market.command.market.shop",
    },
    {
        command: "market reload",
        description: "Reloads the market configuration and shop data from the server.",
        usage: "/market reload",
        permissionNode: "cobbled_market.command.market.reload",
    }
];