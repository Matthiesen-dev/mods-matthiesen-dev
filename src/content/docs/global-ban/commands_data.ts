import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "global-ban",
        description: "The root command for the Global Ban mod.",
        permissionNode: "global_ban.command.global-ban",
        usage: "/global-ban <subcommand> [arguments]",
    },
    {
        command: "global-ban reload",
        description: "Reloads the configuration files for the Global Ban mod.",
        permissionNode: "global_ban.command.global-ban.reload",
        usage: "/global-ban reload",
    },
    {
        command: "global-ban import",
        description: "Imports data into the Global Ban mod. Optionally cleans up old data.",
        permissionNode: "global_ban.command.global-ban.import",
        usage: "/global-ban import [cleanup boolean]",
    },
    {
        command: "global-ban banlist",
        description: "Displays the list of banned players and IPs.",
        permissionNode: "global_ban.command.ban_list",
        usage: "/global-ban banlist",
    },
    {
        command: "banlist",
        description: "Displays the list of banned players and IPs.",
        permissionNode: "global_ban.command.ban_list",
        usage: "/banlist",
    },
    {
        command: "kick",
        description: "Kicks a player from the server.",
        permissionNode: "global_ban.command.kick",
        usage: "/kick <player> [reason]",
    },
    {
        command: "ban",
        description: "Bans a player from the server.",
        permissionNode: "global_ban.command.ban",
        usage: "/ban <player> [reason]",
    },
    {
        command: "tempban",
        description: "Temporarily bans a player from the server.",
        permissionNode: "global_ban.command.temp_ban",
        usage: "/tempban <player> <duration> [reason]",
    },
    {
        command: "ban-ip",
        description: "Bans an IP address from the server.",
        permissionNode: "global_ban.command.ban_ip",
        usage: "/ban-ip <ip> [reason]",
    },
    {
        command: "tempban-ip",
        description: "Temporarily bans an IP address from the server.",
        permissionNode: "global_ban.command.temp_ban_ip",
        usage: "/tempban-ip <ip> <duration> [reason]",
    },
    {
        command: "unban",
        description: "Unbans a player from the server.",
        permissionNode: "global_ban.command.unban",
        usage: "/unban <player>",
    },
    {
        command: "unban-ip",
        description: "Unbans an IP address from the server.",
        permissionNode: "global_ban.command.unban_ip",
        usage: "/unban-ip <ip>",
    },
    {
        command: "pardon",
        description: "Pardons a player from the server.",
        permissionNode: "global_ban.command.pardon",
        usage: "/pardon <player>",
    },
    {
        command: "pardon-ip",
        description: "Pardons an IP address from the server.",
        permissionNode: "global_ban.command.pardon_ip",
        usage: "/pardon-ip <ip>",
    }
];