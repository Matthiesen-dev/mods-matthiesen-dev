import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "pokebank",
        description: "Opens the Cobble Poke Bank GUI.",
        usage: "/pokebank",
        permissionNode: "cobble_poke_bank.command.pokebank",
    },
    {
        command: "pokebank reload",
        description: "Reloads the Cobble Poke Bank configuration.",
        usage: "/pokebank reload",
        permissionNode: "cobble_poke_bank.command.pokebank.reload",
    },
    {
        command: "pokebank status",
        description: "Displays the current status of the Cobble Poke Bank.",
        usage: "/pokebank status",
        permissionNode: "cobble_poke_bank.command.pokebank.status",
    },
    {
        command: "pokebank status blacklist",
        description: "Displays the current blacklist of the Cobble Poke Bank.",
        usage: "/pokebank status blacklist",
        permissionNode: "cobble_poke_bank.command.pokebank.status",
    }
];