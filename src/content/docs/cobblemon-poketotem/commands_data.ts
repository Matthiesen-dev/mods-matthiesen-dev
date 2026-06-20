import type { Commands } from "../../../types";

export const commands: Commands = [
    {
        command: "poketototem",
        description:
            "Opens the normal PokeTotem conversion GUI, allowing you to convert a Pokemon into a Normal PokeTotem. Normal PokeTotems keep their UUID and OT data intact.",
        usage: "/poketototem",
        permissionNode: "cobblemon_poketotem.command.poketototem",
    },
    {
        command: "poketototem clone",
        description:
            "Opens the clone PokeTotem conversion GUI, allowing you to convert a Pokemon into a Clone PokeTotem. Clone PokeTotems get new UUIDs and OTs assigned once redeemed.",
        usage: "/poketototem clone",
        permissionNode: "cobblemon_poketotem.command.poketototem",
    },
    {
        command: "poketototem server",
        description:
            "Converts a specific Player's party Pokemon into a PokeTotem and gives it to the player. This command is useful for server-owners and map-makers who want to give out PokeTotems as rewards.",
        usage: "/poketototem server <player> <slot 0-5>",
        permissionNode: "cobblemon_poketotem.command.poketototem-server",
    },
    {
        command: "totemtopoke",
        description: "Converts a PokeTotem back into a Pokemon. This command is used to redeem the currently held PokeTotem.",
        usage: "/totemtopoke",
        permissionNode: "cobblemon_poketotem.command.totemtopoke",
    },
    {
        command: "totemtopoke server",
        description:
            "Converts the specific Player's currently held PokeTotem back into a Pokemon. This command is useful for server-owners and map-makers who want to allow players to redeem PokeTotems as rewards.",
        usage: "/totemtopoke server <player>",
        permissionNode: "cobblemon_poketotem.command.totemtopoke-server",
    },
    {
        command: "totemtopoke redeem",
        description:
            "Converts a Clone PokeTotem back into a Pokemon. This command is used to redeem the currently held Clone PokeTotem. This command is separate from `/totemtopoke` to allow server-owners and map-makers to restrict the redemption of Clone PokeTotems if they wish.",
        usage: "/totemtopoke redeem",
        permissionNode: "cobblemon_poketotem.command.totemtopoke-redeem",
    },
    {
        command: "totemtopoke redeem server",
        description:
            "Converts the specific Player's currently held Clone PokeTotem back into a Pokemon. This command is useful for server-owners and map-makers who want to allow players to redeem Clone PokeTotems as rewards, while still restricting the redemption of Clone PokeTotems for regular players.",
        usage: "/totemtopoke redeem server <player>",
        permissionNode: "cobblemon_poketotem.command.totemtopoke-redeem-server",
    },
];