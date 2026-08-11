import type { MolangExtensions } from '../../../types';

export const matthiesenCoreEconomyPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.economy()',
        description: 'Returns the player\'s UUID for use with the economy functions.',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.economy.get_balance(<string providerID>, <string currency>)',
        description: 'Gets the player\'s balance for a specific currency from the specified provider.',
        result: 'double'
    },
    {
        function: 'q.player.economy.deposit(<string providerID>, <int amount>, <string currency>)',
        description: 'Deposits a specific amount of currency into the player\'s account from the specified provider.',
        result: '1 for success, otherwise 0'
    },
    {
        function: 'q.player.economy.withdraw(<string providerID>, <int amount>, <string currency>)',
        description: 'Withdraws a specific amount of currency from the player\'s account from the specified provider.',
        result: '1 for success, otherwise 0'
    },
    {
        function: 'q.player.economy.has_enough(<string providerID>, <int amount>, <string currency>)',
        description: 'Checks if the player has enough of a specific currency in their account from the specified provider.',
        result: '1 for true, otherwise 0'
    }
];

export const matthiesenCoreTextParserPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.text_parser()',
        description: 'Returns the player\'s UUID for use with the text parser functions.',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.text_parser.vanilla(<string message>)',
        description: 'Parses and sends a message using the vanilla Minecraft text parser, allowing for formatting and color codes.',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.player.text_parser.adventure(<string message>)',
        description: 'Parses and sends a message using the Adventure text parser, allowing for advanced text formatting.',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.player.text_parser.emberstextapi(<string message>)',
        description: 'Parses and sends a message using the Ember\'s Text API parser, allowing for custom text formatting.',
        result: '1 for success, 0 for failure'
    }
];

export const matthiesenCoreTextParserServerExtensions: MolangExtensions = [
    {
        function: 'q.server.text_parser()',
        description: 'Returns the server\'s platform for use with the text parser functions.',
        result: '{ "serverPlatform": "string" }'
    },
    {
        function: 'q.server.text_parser.vanilla(<string message>)',
        description: 'Parses and sends a message using the vanilla Minecraft text parser, allowing for formatting and color codes.',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.server.text_parser.adventure(<string message>)',
        description: 'Parses and sends a message using the Adventure text parser, allowing for advanced text formatting.',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.server.text_parser.emberstextapi(<string message>)',
        description: 'Parses and sends a message using the Ember\'s Text API parser, allowing for custom text formatting.',
        result: '1 for success, 0 for failure'
    }
];
