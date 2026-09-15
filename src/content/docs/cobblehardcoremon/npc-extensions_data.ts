import type { MolangExtensions } from '../../../types';

export const playerMolangExtensions: MolangExtensions = [
    {
        function: 'q.player.hardcoremon()',
        description: 'Returns the player\'s UUID for use with the hardcoremon functions.',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.hardcoremon.get_health_link()',
        description: 'Checks whether the Health Link feature is enabled or disabled for the player.',
        result: '1 for true, otherwise 0'
    },
    {
        function: 'q.player.hardcoremon.set_health_link(<int enabled>)',
        description: 'Enables or disables the Health Link feature for the player. Use 1 to enable and 0 to disable.',
        result: '1 for success, otherwise 0'
    },
    {
        function: 'q.player.hardcoremon.soul_link()',
        description: 'Checks whether the Soul Link feature is enabled or disabled for the player.',
        result: '{ "playerUUID": "string", "soulLinkPartnerUUID": "string", "soulLinkPartnerName": "string" }'
    },
    {
        function: 'q.player.hardcoremon.soul_link.has_partner()',
        description: 'Checks whether the player has a Soul Link partner.',
        result: '1 for true, otherwise 0'
    },
    {
        function: 'q.player.hardcoremon.soul_link.get_partner_uuid()',
        description: 'Gets the UUID of the player\'s Soul Link partner.',
        result: 'returns the UUID of the soul link partner as a string, 0 otherwise'
    },
    {
        function: 'q.player.hardcoremon.soul_link.get_partner_name()',
        description: 'Gets the name of the player\'s Soul Link partner.',
        result: 'returns the name of the soul link partner as a string, 0 otherwise'
    }
];
