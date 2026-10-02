import type { MolangExtensions } from '../../../types';

export const playerMolangExtensions: MolangExtensions = [
    {
        function: "q.player.market()",
        description: "Returns the player's UUID",
        result: "{ \"playerUUID\": \"string\" }"
    },
    {
        function: "q.player.market.open()",
        description: "Opens the market GUI for the player.",
        result: "1 for success, otherwise 0"
    },
    {
        function: "q.player.market.open(<shopId string>)",
        description: "Opens a specific shop GUI for the player.",
        result: "1 for success, otherwise 0"
    }
];
