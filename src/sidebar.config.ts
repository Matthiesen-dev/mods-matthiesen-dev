import { globSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Mod } from "./types";

export const LIBRARY_MODS: Mod[] = [
  {
    name: "Matthiesen Lib",
    docs: "matthiesen-lib",
  },
  {
    name: "Matthiesen Lib API",
    docs: "matthiesen-lib-api",
    badge: "S",
  },
  {
    name: "Matthiesen Lib Webhooks",
    docs: "matthiesen-lib-webhooks",
    badge: "S",
  },
];

export const COBBLEMON_MODS: Mod[] = [
  {
    name: "NPC GD Compat",
    docs: "cobble-npc-gd-compat",
    badge: "S",
  },
  {
    name: "Cobbled Lvl Ctrl",
    docs: "cobbled-level-control",
    badge: "S",
  },
  {
    name: "Boosters",
    docs: "cobblemon-boosters",
    badge: "S",
  },
  {
    name: "Breathers",
    docs: "cobblemon-breathers",
  },
  {
    name: "Escape Rope",
    docs: "cobblemon-escape-rope",
  },
  {
    name: "LP NPC Compat",
    docs: "cobblemon-luckperms-npc-compat",
    badge: "S",
  },
  {
    name: "Move Tutor",
    docs: "cobblemon-move-tutor",
  },
  {
    name: "PC-on-a-stick",
    docs: "cobblemon-pc-on-a-stick",
  },
  {
    name: "Tablet",
    docs: "cobblemon-tablet",
  },
  {
    name: "Pokestops",
    docs: "cobblemon-pokestops",
  },
  {
    name: "PokeTotem",
    docs: "cobblemon-poketotem",
    badge: "S",
  },
];

export const MISC_MODS: Mod[] = [
  {
    name: "Falling Star Rewards",
    docs: "falling-star-rewards",
    badge: "S",
  },
  {
    name: "PackWiz-ard",
    docs: "packwiz-ard",
    badge: "S",
  },
  {
    name: "Re-LPChatPrefix",
    docs: "re-lpchatprefix",
    badge: "S",
  },
  {
    name: "Vanity Plates",
    docs: "vanity-plates",
    badge: "S",
  },
];

export function buildSidebarItems(mods: Mod[]) {
  return mods.map((mod) => ({
    label: mod.name,
    collapsed: true,
    ...(mod.badge
      ? {
          badge:
            typeof mod.badge === "string"
              ? { text: mod.badge, variant: "tip" as const }
              : mod.badge,
        }
      : {}),
    items: [{ autogenerate: { directory: mod.docs, collapsed: true } }],
  }));
}

function removeLeadingSlash(str: string): string {
  return str.startsWith("/") ? str.slice(1) : str;
}

function removeTrailingSlash(str: string): string {
  return str.endsWith("/") ? str.slice(0, -1) : str;
}

function makeDocsLink(str: string): string {
  str = str.replace(/\\/g, "/").replace(/\.mdx$/, "").replace(/index$/, "");
  // Remove trailing slash if present
  str = removeTrailingSlash(str);
  // Remove leading slash if present
  return removeLeadingSlash(str);
}

function prettyFolderName(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function buildSidebarFromGlob(mod: Mod) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const contentDocsBase = path.join(dir, "./content/docs/");
  const modBase = path.join(contentDocsBase, mod.docs);
  const pattern = `${modBase}/**/*.mdx`;
  const files = globSync(pattern);

  const rootItems: string[] = [];
  const folderMap = new Map<string, string[]>();

  for (const file of files) {
    const relativePath = path.relative(contentDocsBase, file);
    const link = makeDocsLink(relativePath);
    const relToMod = path.relative(modBase, file);
    const parts = relToMod.split(path.sep);

    if (parts.length === 1) {
      rootItems.push(link);
    } else {
      const folder = parts[0];
      const existing = folderMap.get(folder);
      if (existing) {
        existing.push(link);
      } else {
        folderMap.set(folder, [link]);
      }
    }
  }

  const folderGroups = Array.from(folderMap.entries()).map(
    ([folder, folderItems]) => ({
      label: prettyFolderName(folder),
      collapsed: true as const,
      items: folderItems,
    })
  );

  return {
    label: mod.name,
    collapsed: true,
    ...(mod.badge
      ? {
          badge:
            typeof mod.badge === "string"
              ? { text: mod.badge, variant: "tip" as const }
              : mod.badge,
        }
      : {}),
    items: [...rootItems, ...folderGroups],
  };
}
