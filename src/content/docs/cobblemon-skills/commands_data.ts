import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "cobbleskills",
        description: "The root command for Cobblemon Skills. Opens the Main Menu GUI.",
        usage: "/cobbleskills",
        permissionNode: "cobblemon_skills.command.cobbleskills",
    },
    {
        command: "cobbleskills leaderboard",
        description: "Opens the Leaderboard GUI.",
        usage: "/cobbleskills leaderboard",
        permissionNode: "cobblemon_skills.command.cobbleskills.leaderboard",
    },
    {
        command: "cobbleskills profile",
        description: "Opens the Player Profile GUI.",
        usage: "/cobbleskills profile",
        permissionNode: "cobblemon_skills.command.cobbleskills.profile",
    },
    {
        command: "cobbleskills profession",
        description: "Opens the Profession GUI.",
        usage: "/cobbleskills profession <profession>",
        permissionNode: "cobblemon_skills.command.cobbleskills.profession",
    },
    {
        command: "cobbleskills reset",
        description: "Root command for reset actions",
        usage: "/cobbleskills reset <action>",
        permissionNode: "cobblemon_skills.command.cobbleskills.reset",
    },
    {
        command: "cobbleskills reset self",
        description: "Resets your own profession progress.",
        usage: "/cobbleskills reset self",
        permissionNode: "cobblemon_skills.command.cobbleskills.reset.self",
    },
    {
        command: "cobbleskills reset player",
        description: "Resets another player's profession progress.",
        usage: "/cobbleskills reset player <player>",
        permissionNode: "cobblemon_skills.command.cobbleskills.reset.player",
    },
    {
        command: "cobbleskills reset all",
        description: "Resets all players' profession progress.",
        usage: "/cobbleskills reset all",
        permissionNode: "cobblemon_skills.command.cobbleskills.reset.all",
    },
    {
        command: "cobbleskills admin",
        description: "Root command for admin actions",
        usage: "/cobbleskills admin <action>",
        permissionNode: "cobblemon_skills.command.cobbleskills.admin",
    },
    {
        command: "cobbleskills admin reload",
        description: "Reloads the Cobblemon Skills configuration files.",
        usage: "/cobbleskills admin reload",
        permissionNode: "cobblemon_skills.command.cobbleskills.admin.reload",
    },
    {
        command: "cobbleskills admin addExp",
        description: "Adds experience to a player's profession.",
        usage: "/cobbleskills admin addExp <player> <profession> <amount>",
        permissionNode: "cobblemon_skills.command.cobbleskills.admin.add-exp",
    },
    {
        command: "cobbleskills admin setLevel",
        description: "Sets a player's profession level.",
        usage: "/cobbleskills admin setLevel <player> <profession> <level>",
        permissionNode: "cobblemon_skills.command.cobbleskills.admin.set-level",
    }
];