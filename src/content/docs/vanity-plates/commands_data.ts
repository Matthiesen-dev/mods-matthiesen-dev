import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "vanity",
        description: "Opens the Vanity Plates GUI (Available to all users)",
        usage: "/vanity",
    },
    {
        command: "vanity reload",
        description: "Reloads the Vanity Plates config (Requires OP)",
        usage: "/vanity reload",
        requiresOp: true,
    },
    {
        command: "plates",
        description: "An Alias for `vanity` (Available to all users)",
        usage: "/plates",
    },
    {
        command: "plates reload",
        description: "An Alias for `vanity reload` (Requires OP)",
        usage: "/plates reload",
        requiresOp: true,
    }
];