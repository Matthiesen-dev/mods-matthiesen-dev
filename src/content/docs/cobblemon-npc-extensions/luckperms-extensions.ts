import type { MolangExtensions } from '../../../types';

export const luckPermsPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.luckperms()',
        description: 'Returns the player\'s UUID for use with the LuckPerms functions.',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.luckperms.promote(<track string>, <dont-add-to-first int-as-boolean>)',
        description: 'Promotes the player on a specific track, optionally not adding them to the first group in the track.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.demote(<track string>, <dont-remove-from-first int-as-boolean>)',
        description: 'Demotes the player on a specific track, optionally not removing them from the first group in the track.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_set(<track string>, <dont-remove-from-first int-as-boolean>)',
        description: 'Sets a permission node for the player, optionally not removing them from the first group in the track.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_unset(<node string>)',
        description: 'Unsets a permission node for the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_settemp(<node string>, <value boolean>, <duration string>)',
        description: 'Sets a temporary permission node for the player with a specific duration.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_unsettemp(<node string>)',
        description: 'Unsets a temporary permission node for the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_check(<node string>)',
        description: 'Checks if the player has a specific permission node.',
        result: 'Boolean-As-Double'
    },
    {
        function: 'q.player.luckperms.parent_set(<group string>)',
        description: 'Sets the player\'s parent group to a specific group.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_add(<group string>)',
        description: 'Adds a parent group to the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_remove(<group string>)',
        description: 'Removes a parent group from the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_settrack(<track string>, <group string>)',
        description: 'Sets the player\'s parent group for a specific track.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_addtemp(<group string>, <duration string>)',
        description: 'Adds a temporary parent group to the player with a specific duration.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_removetemp(<group string>)',
        description: 'Removes a temporary parent group from the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_set(<key string>, <value string>)',
        description: 'Sets a metadata key-value pair for the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_unset(<key string>)',
        description: 'Unsets a metadata key for the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_settemp(<key string>, <value string>, <duration string>)',
        description: 'Sets a temporary metadata key-value pair for the player with a specific duration.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_unsettemp(<key string>)',
        description: 'Unsets a temporary metadata key for the player.',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_get(<key string>)',
        description: 'Gets the value of a metadata key for the player.',
        result: 'string'
    }
];
