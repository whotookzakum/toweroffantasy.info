import { dailies } from "./systems/dailies";
import { cnTopUp } from "./technical/cnTopUp";
import { simulacra } from "./systems/simulacra";
import { gacha } from "./systems/gacha";
import { thingsYouMustKnow } from "./general/thingsYouMustKnow";
import { vitality } from "./systems/vitality";
import { housing } from "./systems/housing";
import { cnRegistration } from "./technical/cnRegistration";
import { pvpStrategy } from "./strategy/pvpStrategy";

const guideEnhancingGear = { 
    name: "Enhancing Gear", 
    type: "general",
    author: ["Zakum#3080"] 
};

const beginnerWeaponAndMatrices = { 
    name: "Weapons & Matrices for Beginners", 
    type: "general",
    author: ["Stitch#8913"] 
};

const dpsWeaponLoadouts = { 
    name: "DPS Weapon Loadouts", 
    type: "strategy",
    author: ["Cytus#4151"] 
};



const darkCrystalSources = { 
    name: "Dark Crystal Sources", 
    type: "reference",
    author: ["Unconsidered#1568"] 
};


export const GUIDES = [
    // GENERAL
    thingsYouMustKnow,
    //beginnerWeaponAndMatrices,
    // story lore
    
    // GAME SYSTEMS
    gacha,
    // combat
    // exploration
    vitality,
    //enhancingGear,
    simulacra,
    dailies,
    // pvp
    // battle royale
    housing,
    // time gate

    // STRATEGY
    //dpsWeaponLoadouts,
    //chipProgression,
    pvpStrategy,
    // any dungeon specific guides go here
    
    // TECHNICAL
    cnRegistration,
    cnTopUp,

    // REFERENTIAL
    //darkCrystalSources
    // currencies
]