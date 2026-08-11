import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "level-control",
        description: "The main command for Cobbled Level Control.",
        usage: "/level-control <subcommand>",
        permissionNode: "cobbled_level_control.command.level-control",
    },
    {
        command: "level-control level-up",
        description: "Levels up a player's module.",
        usage: "/level-control level-up <player> <module>",
        permissionNode: "cobbled_level_control.command.level-control.level-up",
    },
    {
        command: "level-control set-level",
        description: "Sets the level of a player's module.",
        usage: "/level-control set-level <player> <module> <level>",
        permissionNode: "cobbled_level_control.command.level-control.set-level",
    },
    {
        command: "level-control status",
        description: "Displays the player's current level and difficulty.",
        usage: "/level-control status",
        permissionNode: "cobbled_level_control.command.level-control.status",
    },
    {
        command: "level-control status-other",
        description: "Displays another player's current level and difficulty.",
        usage: "/level-control status-other <player>",
        permissionNode: "cobbled_level_control.command.level-control.status-other",
    },
    {
        command: "level-control configure",
        description: "Allows operators to adjust server config values at runtime without restarting the server.",
        usage: "/level-control configure <module> <property> <value>",
        permissionNode: "cobbled_level_control.command.level-control.configure",
    }
];