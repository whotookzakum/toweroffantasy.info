import { CHARACTERS } from "../characters/characterList";
import bullseye from "./r/Bullseye";
import cleanupagreement from "./r/CleanupAgreement";
import explosivecore from "./r/ExplosiveCore";
import offensivelogic from "./r/OffensiveLogic";
import provocateurs from "./r/Provocateurs";
import tenetguard from "./r/TenetGuard";
import apophis from "./sr/Apophis";
import barbarossa from "./sr/Barbarossa";
import frostbot from "./sr/FrostBot";
import robarg from "./sr/Robarg";
import sobek from "./sr/Sobek";

const matrixList = [
    robarg,
    apophis, 
    frostbot, 
    sobek, 
    barbarossa,
    offensivelogic,
    cleanupagreement,
    explosivecore,
    bullseye, 
    tenetguard,
    provocateurs
]

export const MATRICES = CHARACTERS.concat(matrixList);