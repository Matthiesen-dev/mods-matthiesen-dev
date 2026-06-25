import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "fallingstar",
        description: "The main command for the Falling Star Rewards mod. This command has several subcommands that can be used to manage and customize the falling star events and rewards.",
        usage: "/fallingstar <subcommand> [args]",
        permissionNode: "falling_star_rewards.command.fallingstar",
    },
    {
        command: "fallingstar help",
        description: "Show a list of available commands and their descriptions.",
        usage: "/fallingstar help [page]",
        permissionNode: "falling_star_rewards.command.fallingstar.help",
    },
    {
        command: "fallingstar reload",
        description: "Reload config files.",
        usage: "/fallingstar reload",
        permissionNode: "falling_star_rewards.command.fallingstar.reload",
    },
    {
        command: "fallingstar status",
        description:
            "Show status output. By default, shows condensed status output.",
        usage: "/fallingstar status [brief|full]",
        permissionNode: "falling_star_rewards.command.fallingstar.status",
    },
    {
        command: "fallingstar status brief",
        description: "Show condensed status output.",
        usage: "/fallingstar status brief",
        permissionNode: "falling_star_rewards.command.fallingstar.status",
    },
    {
        command: "fallingstar status full",
        description:
            "Show full status output, including all config values, and rewards validation status.",
        usage: "/fallingstar status full",
        permissionNode: "falling_star_rewards.command.fallingstar.status",
    },
    {
        command: "fallingstar force",
        description:
            "Force one random spawn cycle, or a specific preset if provided. This command is useful for testing and debugging purposes, as well as for manually triggering events.",
        usage: "/fallingstar force [<preset>]",
        permissionNode: "falling_star_rewards.command.fallingstar.force",
    },
    {
        command: "fallingstar cleanup",
        description:
            "Remove tracked active drops. This command is useful for removing drops that have been stuck due to errors or other issues.",
        usage: "/fallingstar cleanup",
        permissionNode: "falling_star_rewards.command.fallingstar.cleanup",
    },
    {
        command: "fallingstar confirm-delete",
        description: "Confirm deletion of a preset.",
        usage: "/fallingstar confirm-delete <event_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.confirm-delete",
    },
    {
        command: "fallingstar preset events enable",
        description: "Allow an event preset to be selected for spawning.",
        usage: "/fallingstar preset events enable <event_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.enable",
    },
    {
        command: "fallingstar preset events disable",
        description: "Prevent an event preset from being selected for spawning.",
        usage: "/fallingstar preset events disable <event_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.disable",
    },
    {
        command: "fallingstar preset events list",
        description:
            "Show a list of all event presets, including their enabled/disabled status.",
        usage: "/fallingstar preset events list",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.list",
    },
    {
        command: "fallingstar preset events create",
        description:
            "Create a new event preset. This command will create a new preset file with default values, which can then be edited to customize the event.",
        usage: "/fallingstar preset events create <event_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.create",
    },
    {
        command: "fallingstar preset events delete",
        description:
            "Delete an event preset. This command will prompt for confirmation before deleting the preset file.",
        usage: "/fallingstar preset events delete <event_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.delete",
    },
    {
        command: "fallingstar preset events info",
        description:
            "Show detailed information about an event preset, including its activation conditions, spawn parameters, and associated rewards and visuals presets.",
        usage: "/fallingstar preset events info <event_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.info",
    },
    {
        command: "fallingstar preset events set rewards",
        description: "Set the rewards preset associated with this event preset.",
        usage:
            "/fallingstar preset events set rewards <event_id> <rewards_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.set",
    },
    {
        command: "fallingstar preset events set visuals",
        description: "Set the visuals preset associated with this event preset.",
        usage:
            "/fallingstar preset events set visuals <event_id> <visuals_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.set",
    },
    {
        command: "fallingstar preset rewards list",
        description: "Show a list of all rewards presets.",
        usage: "/fallingstar preset rewards list",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.list",
    },
    {
        command: "fallingstar preset rewards create",
        description:
            "Create a new rewards preset. This command will create a new preset file with default values, which can then be edited to customize the rewards.",
        usage: "/fallingstar preset rewards create <rewards_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.create",
    },
    {
        command: "fallingstar preset rewards delete",
        description:
            "Delete a rewards preset. This command will prompt for confirmation before deleting the preset file.",
        usage: "/fallingstar preset rewards delete <rewards_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.delete",
    },
    {
        command: "fallingstar preset rewards info",
        description:
            "Show detailed information about a rewards preset, including the items and quantities that can be dropped.",
        usage: "/fallingstar preset rewards info <rewards_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.info",
    },
    {
        command: "fallingstar preset rewards add",
        description:
            "Add a reward entry to a rewards preset. This command allows for quick editing of rewards presets without needing to manually edit the JSON files.",
        usage:
            "/fallingstar preset rewards add <rewards_preset_id> <item_id> <weight> <min> <max> [custom_model_data] [custom_data]",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.add",
    },
    {
        command: "fallingstar preset rewards add-held-item",
        description:
            "Add a reward entry to a rewards preset based on the item currently held by the player. This command allows for quickly adding rewards based on in-game items without needing to know the exact item ID or other parameters.",
        usage:
            "/fallingstar preset rewards add-held-item <rewards_preset_id> <weight> <min> <max>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.add",
    },
    {
        command: "fallingstar preset rewards remove",
        description:
            "Remove a reward entry from a rewards preset by its item ID. This command allows for quick editing of rewards presets without needing to manually edit the JSON files.",
        usage: "/fallingstar preset rewards remove <rewards_preset_id> <item_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.remove",
    },
    {
        command: "fallingstar preset visuals enable",
        description: "Allow a visuals preset to be selected for use in events.",
        usage: "/fallingstar preset visuals enable <visuals_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.enable",
    },
    {
        command: "fallingstar preset visuals disable",
        description: "Prevent a visuals preset from being selected for use in events.",
        usage: "/fallingstar preset visuals disable <visuals_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.disable",
    },
    {
        command: "fallingstar preset visuals list",
        description:
            "Show a list of all visuals presets, including their enabled/disabled status.",
        usage: "/fallingstar preset visuals list",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.list",
    },
    {
        command: "fallingstar preset visuals create",
        description:
            "Create a new visuals preset. This command will create a new preset file with default values, which can then be edited to customize the visuals.",
        usage: "/fallingstar preset visuals create <visuals_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.create",
    },
    {
        command: "fallingstar preset visuals delete",
        description:
            "Delete a visuals preset. This command will prompt for confirmation before deleting the preset file.",
        usage: "/fallingstar preset visuals delete <visuals_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.delete",
    },
    {
        command: "fallingstar preset visuals info",
        description:
            "Show detailed information about a visuals preset, including the particle effects, sounds, and other visual parameters that will be used during events.",
        usage: "/fallingstar preset visuals info <visuals_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.info",
    },
    {
        command: "fallingstar preset schedules enable",
        description: "Allow a schedule preset to be selected for use in events.",
        usage: "/fallingstar preset schedules enable <schedule_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.enable",
    },
    {
        command: "fallingstar preset schedules disable",
        description: "Prevent a schedule preset from being selected for use in events.",
        usage: "/fallingstar preset schedules disable <schedule_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.disable",
    },
    {
        command: "fallingstar preset schedules list",
        description:
            "Show a list of all schedule presets, including their enabled/disabled status.",
        usage: "/fallingstar preset schedules list",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.list",
    },
    {
        command: "fallingstar preset schedules create",
        description:
            "Create a new schedule preset. This command will create a new preset file with default values, which can then be edited to customize the schedule.",
        usage: "/fallingstar preset schedules create <schedule_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.create",
    },
    {
        command: "fallingstar preset schedules delete",
        description:
            "Delete a schedule preset. This command will prompt for confirmation before deleting the preset file.",
        usage: "/fallingstar preset schedules delete <schedule_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.delete",
    },
    {
        command: "fallingstar preset schedules info",
        description:
            "Show detailed information about a schedule preset, including the timing and frequency of events.",
        usage: "/fallingstar preset schedules info <schedule_preset_id>",
        permissionNode: "falling_star_rewards.command.fallingstar.preset.info",
    },
];