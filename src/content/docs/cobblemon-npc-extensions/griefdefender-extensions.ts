import type { MolangExtensions } from '../../../types';

export const griefDefenderNpcExtensions: MolangExtensions = [
    {
        function: 'q.npc.griefdefender()',
        description: 'Returns the NPC\'s UUID for use with the GriefDefender functions.',
        result: '{ "npcUUID": "string" }'
    },
    {
        function: 'q.npc.griefdefender.economy_enabled()',
        description: 'Checks if the GriefDefender economy is enabled on the server.',
        result: '1 for true, or 0'
    },
    {
        function: 'q.npc.griefdefender.get_player_claims(<uuid>)',
        description: 'Returns an array of claims owned by a specific player UUID.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    },
    {
        function: 'q.npc.griefdefender.is_wilderness()',
        description: 'Checks if the NPC is currently in a wilderness area (not in a claim).',
        result: '1 for true, or 0'
    },
    {
        function: 'q.npc.griefdefender.available_rentals()',
        description: 'Returns an array of claims that are available for rent.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double, "isForRent": false, "isRented": false, "renter": "string", "paymentType": "string", "rentMinTime": 0, "rentMaxTime": 0 }>'
    },
    {
        function: 'q.npc.griefdefender.available_forsale()',
        description: 'Returns an array of claims that are available for sale.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }>'
    },
    {
        function: 'q.npc.griefdefender.claim_data()',
        description: 'Returns the claim data for the claim the NPC is currently in, if any.',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }'
    },
    {
        function: 'q.npc.griefdefender.claim_uuid()',
        description: 'Returns the UUID of the claim the NPC is currently in, if any.',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_name()',
        description: 'Returns the name of the claim the NPC is currently in, if any.',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_owner_uuid()',
        description: 'Returns the UUID of the owner of the claim the NPC is currently in, if any.',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_owner_name()',
        description: 'Returns the name of the owner of the claim the NPC is currently in, if any.',
        result: '"string" or 0 if not in a claim'
    },
    {
        function: 'q.npc.griefdefender.claim_rental_data()',
        description: 'Returns the rental data for the claim the NPC is currently in, if any.',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double, "isForRent": false, "isRented": false, "renter": "string", "paymentType": "string", "rentMinTime": 0, "rentMaxTime": 0 }'
    },
    {
        function: 'q.npc.griefdefender.claim_sale_data()',
        description: 'Returns the sale data for the claim the NPC is currently in, if any.',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }'
    },
    {
        function: 'q.npc.griefdefender.claim_tax_data()',
        description: 'Returns the tax data for the claim the NPC is currently in, if any.',
        result: '{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "spawnPos": "string", "taxPastDueDate": "string", "taxBalance": double }'
    }
];

export const griefDefenderPlayerExtensions: MolangExtensions = [
    {
        function: 'q.player.griefdefender()',
        description: 'Returns the player\'s UUID for use with the GriefDefender functions.',
        result: '{ "playerUUID": "string" }'
    },
    {
        function: 'q.player.griefdefender.economy_enabled()',
        description: 'Checks if the GriefDefender economy is enabled on the server.',
        result: '1 for true, or 0'
    },
    {
        function: 'q.player.griefdefender.available_rentals()',
        description: 'Returns an array of claims that are available for rent.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double }>'
    },
    {
        function: 'q.player.griefdefender.available_forsale()',
        description: 'Returns an array of claims that are available for sale.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }>'
    },
    {
        function: 'q.player.griefdefender.claims(<uuid>)',
        description: 'Returns an array of claims owned by a specific player UUID.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    },
    {
        function: 'q.player.griefdefender.current_claim()',
        description: 'Returns the claim data for the claim the player is currently in, if any.',
        result: 'UUID as string or 0'
    },
    {
        function: 'q.player.griefdefender.accrued_claim_blocks()',
        description: 'Returns the number of accrued claim blocks the player has.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.blocks_accrued_per_hour()',
        description: 'Returns the number of claim blocks the player accrues per hour.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_accrued_claim_blocks()',
        description: 'Returns the maximum number of accrued claim blocks the player can have.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_bonus_claim_blocks()',
        description: 'Returns the maximum number of bonus claim blocks the player can have.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_claim_level()',
        description: 'Returns the maximum claim level the player can have.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.min_claim_level()',
        description: 'Returns the minimum claim level the player can have.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.bonus_claim_blocks()',
        description: 'Returns the number of bonus claim blocks the player has.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.initial_claim_blocks()',
        description: 'Returns the number of initial claim blocks the player has.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.remaining_claim_blocks()',
        description: 'Returns the number of remaining claim blocks the player has.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.max_claimable_blocks()',
        description: 'Returns the maximum number of claimable blocks the player can have.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.rental_limit()',
        description: 'Returns the rental limit for the player.',
        result: 'An Integer'
    },
    {
        function: 'q.player.griefdefender.start_purchase(<claimUUID>)',
        description: 'Attempts to start a purchase for the specified claim.',
        result: '1 for success or 0'
    }
];

export const griefDefenderServerExtensions: MolangExtensions = [
    {
        function: 'q.server.griefdefender()',
        description: 'Returns the server\'s platform for use with the GriefDefender functions.',
        result: '{ "serverPlatform": "string" }'
    },
    {
        function: 'q.server.griefdefender.economy_enabled()',
        description: 'Checks if the GriefDefender economy is enabled on the server.',
        result: '1 for true, or 0'
    },
    {
        function: 'q.server.griefdefender.get_player_claims(<uuid>)',
        description: 'Returns an array of claims owned by a specific player UUID.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    }
];

export const griefDefenderWorldExtensions: MolangExtensions = [
    {
        function: 'q.world.griefdefender()',
        description: 'Returns the world\'s name for use with the GriefDefender functions.',
        result: '{ "location": "string" }'
    },
    {
        function: 'q.world.griefdefender.economy_enabled()',
        description: 'Checks if the GriefDefender economy is enabled on the server.',
        result: '1 for true, or 0'
    },
    {
        function: 'q.world.griefdefender.get_player_claims(<uuid>)',
        description: 'Returns an array of claims owned by a specific player UUID.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string" }>'
    },
    {
        function: 'q.world.griefdefender.available_rentals()',
        description: 'Returns an array of claims that are available for rent.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "rentalRate": double }>'
    },
    {
        function: 'q.world.griefdefender.available_forsale()',
        description: 'Returns an array of claims that are available for sale.',
        result: 'Array<{ "uuid": "string", "displayName": "string", "ownerUUID": "string", "ownerName": "string", "isForSale": false, "salePrice": double }>'
    },
    {
        function: 'q.world.griefdefender.is_wilderness(x, y, z)',
        description: 'Checks if the specified coordinates are in a wilderness area (not in a claim).',
        result: '1 for true or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_uuid(x, y, z)',
        description: 'Returns the UUID of the claim at the specified coordinates, if any.',
        result: 'string or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_name(x, y, z)',
        description: 'Returns the name of the claim at the specified coordinates, if any.',
        result: 'string or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_owner_uuid(x, y, z)',
        description: 'Returns the UUID of the owner of the claim at the specified coordinates, if any.',
        result: 'string or 0'
    },
    {
        function: 'q.world.griefdefender.get_claim_owner_name(x, y, z)',
        description: 'Returns the name of the owner of the claim at the specified coordinates, if any.',
        result: 'string or 0'
    }
];
