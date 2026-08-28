import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "cobble-paste import",
        description: "Imports a Cobblemon Poke Paste from a Pokepast.es URL.",
        usage: "/cobble-paste import <url>",
        permissionNode: "cobble_paste.command.cobble-paste.import",
    },
    {
        command: "cobble-paste export",
        description: "Exports a Cobblemon Team to a Pokepast.es URL.",
        usage: "/cobble-paste export",
        permissionNode: "cobble_paste.command.cobble-paste.export",
    }
];