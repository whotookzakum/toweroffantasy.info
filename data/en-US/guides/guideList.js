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
    // Obtaining newest armor pieces
    
    // GAME SYSTEMS
    gacha,
    // combat: include discharge, elements, resonance
    // exploration (Aesperia)
        // outer artificial islands unlock, map of artificial island
    // exploration (Vera)
        // quicksand whirlpool, gray zone, dark zone, map of mirror city
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
    // chipProgression,
    // pvpStrategy,
    // wormhole
    // frontier clash
    // void rifts
    
    // TECHNICAL
    cnRegistration,
    cnTopUp,

    // REFERENTIAL
    darkCrystals
    // currencies
]