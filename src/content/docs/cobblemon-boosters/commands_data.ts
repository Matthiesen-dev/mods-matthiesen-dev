import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "boosters",
        description: "Root command for boosters.",
        usage: "/boosters <subcommand>",
        permissionNode: "cobblemon_boosters.command.boosters",
    },
    {
        command: "boosters reload",
        description: "Reloads the boosters configuration.",
        usage: "/boosters reload",
        permissionNode: "cobblemon_boosters.command.boosters.reload",
    },
    {
        command: "boosters clear-queues",
        description: "Clears all active booster queues.",
        usage: "/boosters clear-queues",
        permissionNode: "cobblemon_boosters.command.boosters.clear_queues",
    },
    {
        command: "boosters check-queues",
        description: "Checks the status of a booster queue.",
        usage: "/boosters check-queues <booster>",
        permissionNode: "cobblemon_boosters.command.boosters.check_queues",
    },
    {
        command: "boosters catch",
        description: "Root command for catch boosters.",
        usage: "/boosters catch <subcommand>",
        permissionNode: "cobblemon_boosters.command.boosters.catch",
    },
    {
        command: "boosters catch start",
        description:
            "Starts a catch booster with the specified multiplier, duration, and time unit.",
        usage: "/boosters catch start <multiplier> <duration> <unit>",
        permissionNode: "cobblemon_boosters.command.boosters.catch.start",
    },
    {
        command: "boosters catch stop",
        description: "Stops the active catch booster.",
        usage: "/boosters catch stop",
        permissionNode: "cobblemon_boosters.command.boosters.catch.stop",
    },
    {
        command: "boosters catch status",
        description: "Checks the status of the active catch booster.",
        usage: "/boosters catch status",
        permissionNode: "cobblemon_boosters.command.boosters.catch.status",
    },
    {
        command: "boosters experience",
        description: "Root command for Experience boosters.",
        usage: "/boosters experience <subcommand>",
        permissionNode: "cobblemon_boosters.command.boosters.experience",
    },
    {
        command: "boosters experience start",
        description:
            "Starts an Experience booster with the specified multiplier, duration, and time unit.",
        usage: "/boosters experience start <multiplier> <duration> <unit>",
        permissionNode: "cobblemon_boosters.command.boosters.experience.start",
    },
    {
        command: "boosters experience stop",
        description: "Stops the active Experience booster.",
        usage: "/boosters experience stop",
        permissionNode: "cobblemon_boosters.command.boosters.experience.stop",
    },
    {
        command: "boosters experience status",
        description: "Checks the status of the active Experience booster.",
        usage: "/boosters experience status",
        permissionNode: "cobblemon_boosters.command.boosters.experience.status",
    },
    {
        command: "boosters shiny",
        description: "Root command for shiny boosters.",
        usage: "/boosters shiny <subcommand>",
        permissionNode: "cobblemon_boosters.command.boosters.shiny",
    },
    {
        command: "boosters shiny start",
        description:
            "Starts a shiny booster with the specified multiplier, duration, and time unit.",
        usage: "/boosters shiny start <multiplier> <duration> <unit>",
        permissionNode: "cobblemon_boosters.command.boosters.shiny.start",
    },
    {
        command: "boosters shiny stop",
        description: "Stops the active shiny booster.",
        usage: "/boosters shiny stop",
        permissionNode: "cobblemon_boosters.command.boosters.shiny.stop",
    },
    {
        command: "boosters shiny status",
        description: "Checks the status of the active shiny booster.",
        usage: "/boosters shiny status",
        permissionNode: "cobblemon_boosters.command.boosters.shiny.status",
    },
    {
        command: "boosters bucket",
        description: "Root command for Spawn Bucket boosters.",
        usage: "/boosters bucket <subcommand>",
        permissionNode: "cobblemon_boosters.command.boosters.bucket",
    },
    {
        command: "boosters bucket start",
        description:
            "Starts a Spawn Bucket booster with the specified multiplier, duration, and time unit.",
        usage: "/boosters bucket start <bucket> <multiplier> <duration> <unit>",
        permissionNode: "cobblemon_boosters.command.boosters.bucket.start",
    },
    {
        command: "boosters bucket stop",
        description: "Stops the active Spawn Bucket booster.",
        usage: "/boosters bucket stop",
        permissionNode: "cobblemon_boosters.command.boosters.bucket.stop",
    },
    {
        command: "boosters bucket status",
        description: "Checks the status of the active Spawn Bucket booster.",
        usage: "/boosters bucket status",
        permissionNode: "cobblemon_boosters.command.boosters.bucket.status",
    },
];