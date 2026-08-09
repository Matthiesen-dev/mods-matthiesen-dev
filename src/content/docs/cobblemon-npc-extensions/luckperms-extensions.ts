import type { MolangExtensions } from '../../../types';

export const luckPermsPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.luckperms()',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.luckperms.promote(<track string>, <dont-add-to-first int-as-boolean>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.demote(<track string>, <dont-remove-from-first int-as-boolean>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_set(<track string>, <dont-remove-from-first int-as-boolean>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_unset(<node string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_settemp(<node string>, <value boolean>, <duration string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_unsettemp(<node string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.permission_check(<node string>)',
        result: 'Boolean-As-Double'
    },
    {
        function: 'q.player.luckperms.parent_set(<group string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_add(<group string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_remove(<group string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_settrack(<track string>, <group string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_addtemp(<group string>, <duration string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.parent_removetemp(<group string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_set(<key string>, <value string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_unset(<key string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_settemp(<key string>, <value string>, <duration string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_unsettemp(<key string>)',
        result: '0'
    },
    {
        function: 'q.player.luckperms.meta_get(<key string>)',
        result: 'string'
    }
];
