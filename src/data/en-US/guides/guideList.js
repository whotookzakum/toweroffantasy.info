import { dailies } from "./systems/dailies";
import { cnTopUp } from "./technical/cnTopUp";
import { simulacra } from "./systems/simulacra";
import { gacha } from "./systems/gacha";
import { thingsYouMustKnow } from "./general/thingsYouMustKnow";
import { vitality } from "./systems/vitality";
import { housing } from "./systems/housing";
import { cnRegistration } from "./technical/cnRegistration";
import { pvpStrategy } from "./strategy/pvpStrategy";
import { gear } from "./systems/gear";
import { darkCrystals } from "./referential/darkCrystals";
import { dpsLoadouts } from "./strategy/dpsLoadouts";
import { beginnerWeapons } from "./general/beginnerWeaponsMatrices";

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