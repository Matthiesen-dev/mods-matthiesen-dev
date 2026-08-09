import type { MolangExtensions } from '../../../types';

export const playerMolangExtensions: MolangExtensions = [
    {
        function: 'q.player.open_village_tutor(<slot>)',
        result: 'Opens the Move Tutor\'s GUI for the player, allowing them to browse and learn new moves for their Pokemon.'
    },
    {
        function: 'q.player.open_admin_tutor(<slot>)',
        result: 'Opens the "Admin" version of the Move Tutor\'s GUI for the player, instead of the village tutor.'
    }
];
