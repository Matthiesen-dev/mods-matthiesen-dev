import type { MolangExtensions } from '../../../types';

export const playerMolangExtensions: MolangExtensions = [
    {
        function: "q.player.level_control()",
        description: "Returns the player's UUID and their account record for use with the level control functions.",
        result: "{ \"playerUUID\": \"string\", \"accountRecord\": { \"catching\": number, \"leveling\": number } }"
    },
    {
        function: "q.player.level_control.status()",
        description: "Returns the player's current level control status, including their difficulty setting and account record.",
        result: "{ \"difficulty\": \"string\", \"catching\": number, \"leveling\": number } OR 0",
    },
    {
        function: "q.player.level_control.lvlup(<module string>)",
        description: "Levels up the player in a specific module, increasing their catching and leveling stats accordingly.",
        result: "1 for success, otherwise 0"
    },
    {
        function: "q.player.level_control.setlvl(<module string>, <lvl int>)",
        description: "Sets the player's level in a specific module to a specific value, adjusting their catching and leveling stats accordingly.",
        result: "1 for success, otherwise 0"
    }
];
