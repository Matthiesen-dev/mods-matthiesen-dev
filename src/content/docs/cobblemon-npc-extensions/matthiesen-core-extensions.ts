import type { MolangExtensions } from '../../../types';

export const matthiesenCoreEconomyPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.economy()',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.economy.get_balance(<string providerID>, <string currency>)',
        result: 'double'
    },
    {
        function: 'q.player.economy.deposit(<string providerID>, <int amount>, <string currency>)',
        result: '1 for success, otherwise 0'
    },
    {
        function: 'q.player.economy.withdraw(<string providerID>, <int amount>, <string currency>)',
        result: '1 for success, otherwise 0'
    },
    {
        function: 'q.player.economy.has_enough(<string providerID>, <int amount>, <string currency>)',
        result: '1 for true, otherwise 0'
    }
];

export const matthiesenCoreTextParserPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.text_parser()',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.text_parser.vanilla(<string message>)',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.player.text_parser.adventure(<string message>)',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.player.text_parser.emberstextapi(<string message>)',
        result: '1 for success, 0 for failure'
    }
];

export const matthiesenCoreTextParserServerExtensions: MolangExtensions = [
    {
        function: 'q.server.text_parser()',
        result: '{ "serverPlatform": "string" }'
    },
    {
        function: 'q.server.text_parser.vanilla(<string message>)',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.server.text_parser.adventure(<string message>)',
        result: '1 for success, 0 for failure'
    },
    {
        function: 'q.server.text_parser.emberstextapi(<string message>)',
        result: '1 for success, 0 for failure'
    }
];
