import { dailies } from "./systems/dailies-and-weeklies";
import { cnTopUp } from "./technical/cn-top-up";
import { simulacra } from "./systems/simulacra";
import { gacha } from "./systems/gacha";
import { thingsYouMustKnow } from "./general/15-things-you-must-know.js";
import { vitality } from "./systems/vitality";
import { housing } from "./systems/housing";
import { cnRegistration } from "./technical/cn-registration";
import { pvpStrategy } from "./strategy/pvp-strategy-guide";
import { gear } from "./systems/gear";
import { darkCrystals } from "./referential/dark-crystal-sources";
import { dpsLoadouts } from "./strategy/dps-weapon-loadouts";
import { beginnerWeapons } from "./general/beginner-weapon-guide";

export const GUIDES = [
    // GENERAL
    thingsYouMustKnow,
    beginnerWeapons,
    // story lore
    
    // GAME SYSTEMS
    gacha,
    // combat
    // exploration
    vitality,
    gear,
    simulacra,
    dailies,
    // pvp
    // battle royale
    housing,
    // time gate

    // STRATEGY
    dpsLoadouts,
    //chipProgression,
    //pvpStrategy,
    // any dungeon specific guides go here
    
    // TECHNICAL
    cnRegistration,
    cnTopUp,

    // REFERENTIAL
    darkCrystals
    // currencies
]