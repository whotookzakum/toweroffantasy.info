import { dailies } from "./systems/dailies-and-weeklies";
import { cnTopUp } from "./technical/cn-top-up";
import { simulacrum } from "./systems/simulacrum";
import { gacha } from "./systems/gacha";
import { thingsYouMustKnow } from "./general/15-things-you-must-know.js";
import { vitality } from "./systems/vitality";
import { artificialIslandConstruction } from "./systems/artificial-island-construction";
import { cnRegistration } from "./technical/cn-registration";
import { apexLeague } from "./strategy/apex-league";
import { gear } from "./systems/gear";
import { darkCrystals } from "./referential/dark-crystal-sources";
import { dpsLoadouts } from "./strategy/dps-weapon-loadouts";
import { beginnerWeapons } from "./general/beginner-weapon-guide";
import { pvp } from "./systems/pvp";
import { shortestRerollPath } from "./strategy/shortest-reroll-path";
import { worldBossDrops } from "./referential/world-boss-drop-rates";
import { gameLore } from "./general/game-lore";
import { maxLevelTimegates } from "./referential/max-level-timegates";
import { planningAhead } from "./general/planning-ahead";
import { bygoneRewards } from "./referential/bygone-phantasm-rewards";
import { mountDropRates } from "./referential/mount-piece-drop-rates";
import { jointopDropRates } from "./referential/joint-operation-drop-rates";
import { movementTech } from "./general/movement-tech";
import { armorStatRanges } from "./referential/armor-rng-stat-ranges";

export const GUIDES = [
    // GENERAL
    planningAhead,
    movementTech,
    thingsYouMustKnow,
    beginnerWeapons,
    gameLore,
    // Obtaining newest armor pieces
    
    // GAME SYSTEMS
    gacha,
    // combat: include discharge, elements, resonance
    // research missions
    // exploration; world bosses
    // unlock artificial island; map of artificial island
    // unlock outer artificial islands,
    // vera exploration notes: quicksand whirlpool, gray zone & dark zone explanations, map of Mirroria
    vitality,
    gear,
    pvp,
    simulacrum,
    dailies, // include gray zone dark zone?
    // battle royale
    artificialIslandConstruction, // elaborate on rewards, maybe a table for required materials to level up buildings..
    // time gate

    // STRATEGY
    dpsLoadouts,
    shortestRerollPath,
    // chipProgression,
    apexLeague,
    // wormhole
    // frontier clash
    // void rifts
    
    // TECHNICAL
    cnRegistration,
    cnTopUp,

    // REFERENTIAL
    jointopDropRates,
    worldBossDrops,
    mountDropRates,
    armorStatRanges,
    darkCrystals,
    maxLevelTimegates,
    bygoneRewards
    // currencies
]