import { CHARACTERS } from "../characters/characterList";
import cyberrhino from "./r/Cyberrhino";
import sweeper from "./r/Sweeper";
import watcher from "./r/Watcher";
import windblade from "./r/Windblade";
import ravager from "./r/Ravager";
import omniumguard from "./r/OmniumGuard";
import apophis from "./sr/Apophis";
import barbarossa from "./sr/Barbarossa";
import frostbot from "./sr/FrostBot";
import robarg from "./sr/Robarg";
import sobek from "./sr/Sobek";
import aberrantcanine from "./n/AberrantCanine";

const matrixList = [
    robarg,
    apophis, 
    frostbot, 
    sobek, 
    barbarossa,
    windblade,
    sweeper,
    watcher,
    cyberrhino, 
    omniumguard,
    ravager,
    aberrantcanine
]

export const MATRICES = CHARACTERS.concat(matrixList);