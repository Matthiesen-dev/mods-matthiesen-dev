import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "move-tutor",
        description:
            "Opens the Move Tutor's GUI, allowing you to browse and learn new moves for your Pokemon.",
        usage: "/move-tutor",
        permissionNode: "cobblemon_move_tutor.command.move_tutor",
    },
    {
        command: "move-tutor other",
        description:
            "Opens the Move Tutor's GUI for another player, allowing you to browse and learn new moves for their Pokemon.",
        usage: "/move-tutor other <player>",
        permissionNode: "cobblemon_move_tutor.command.move_tutor.other",
    },
];