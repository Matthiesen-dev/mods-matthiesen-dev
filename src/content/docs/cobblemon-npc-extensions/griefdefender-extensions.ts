import type { MolangExtensions } from '../../../types';

export const griefDefenderNpcExtensions: MolangExtensions = [
    {
        function: 'q.npc.griefdefender()',
        result: '{ "npcUUID": "string" }'
    },
    {
        function: 'q.npc.griefdefender.economy_enabled()',
        result: '1 for true, or 0'
    },
    {
        function: 'q.npc.griefdefender.get_player_claims(<uuid>)',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    },
    {
        function: 'q.npc.griefdefender.is_wilderness()',
        result: '1 for true, or 0'
    },
    {
        function: 'q.npc.griefdefender.available_rentals()',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double, "isForRent": false, "isRented": false, "renter": "string", "paymentType": "string", "rentMinTime": 0, "rentMaxTime": 0 }>'
    },
    {
        function: 'q.npc.griefdefender.available_forsale()',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }>'
    },
    {
        function: 'q.npc.griefdefender.claim_data()',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }'
    },
    {
        function: 'q.npc.griefdefender.claim_uuid()',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_name()',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_owner_uuid()',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_owner_name()',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_rental_data()',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double, "isForRent": false, "isRented": false, "renter": "string", "paymentType": "string", "rentMinTime": 0, "rentMaxTime": 0 }'
    },
    {
        function: 'q.npc.griefdefender.claim_sale_data()',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }'
    },
    {
        function: 'q.npc.griefdefender.claim_tax_data()',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "spawnPos": "string", "taxPastDueDate": "string", "taxBalance": double }'
    }
];

export const griefDefenderPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.griefdefender()',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.griefdefender.economy_enabled()',
        result: '1 for true, or 0'
    },
    {
        function: 'q.player.griefdefender.available_rentals()',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double }>'
    },
    {
        function: 'q.player.griefdefender.available_forsale()',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }>'
    },
    {
        function: 'q.player.griefdefender.claims(<uuid>)',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    },
    {
        function: 'q.player.griefdefender.current_claim()',
        result: 'UUID as string or 0'
    },
    {
        function: 'q.player.griefdefender.accrued_claim_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.blocks_accrued_per_hour()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_accrued_claim_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_bonus_claim_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_claim_level()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.min_claim_level()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.bonus_claim_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.initial_claim_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.remaining_claim_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_claimable_blocks()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.rental_limit()',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.start_purchase(<claimUUID>)',
        result: '1 for success or 0'
    }
];

export const griefDefenderServerExtensions: MolangExtensions = [
    {
        function: 'q.server.griefdefender()',
        result: '{ "serverPlatform": "string" }'
    },
    {
        function: 'q.server.griefdefender.economy_enabled()',
        result: '1 for true, or 0'
    },
    {
        function: 'q.server.griefdefender.get_player_claims(<uuid>)',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    }
];

export const griefDefenderWorldExtensions: MolangExtensions = [
    {
        function: 'q.world.griefdefender()',
        result: '{ "location": "string" }'
    },
    {
        function: 'q.world.griefdefender.economy_enabled()',
        result: '1 for true, or 0'
    },
    {
        function: 'q.world.griefdefender.get_player_claims(<uuid>)',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    },
    {
        function: 'q.world.griefdefender.available_rentals()',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double }>'
    },
    {
        function: 'q.world.griefdefender.available_forsale()',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }>'
    },
    {
        function: 'q.world.griefdefender.is_wilderness(x, y, z)',
        result: '1 for true or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_uuid(x, y, z)',
        result: 'string or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_name(x, y, z)',
        result: 'string or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_owner_uuid(x, y, z)',
        result: 'string or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_owner_name(x, y, z)',
        result: 'string or 0'
    }
];
