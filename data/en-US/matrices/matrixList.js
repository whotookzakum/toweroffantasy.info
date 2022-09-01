import { CHARACTERS } from "../characters/characterList";
import functionalDash from "./r/FunctionalDash";
import obstacleRemoval from "./r/ObstacleRemoval";
import selfExplosive from "./r/SelfExplosive";
import plunder from "./r/Plunder";
import standardOperation from "./r/StandardOperation";
import apophis from "./sr/Apophis";
import barbarossa from "./sr/Barbarossa";
import frostbot from "./sr/FrostBot";
import robarg from "./sr/Robarg";
import sobek from "./sr/Sobek";
import wanderingAberrant from "./n/WanderingAberrant";
import { windBlade } from "./r/WindBlade";

const matrixList = [
    robarg,
    apophis, 
    frostbot, 
    sobek, 
    barbarossa,
    windBlade,
    obstacleRemoval,
    selfExplosive,
    functionalDash, 
    standardOperation,
    plunder,
    wanderingAberrant
]

export const MATRICES = CHARACTERS.concat(matrixList);