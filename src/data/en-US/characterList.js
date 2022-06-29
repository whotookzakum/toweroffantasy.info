//import Linye from './characters/ssr/Linye';
import SakiFuwa from './characters/ssr/SakiFuwa';
import Ruby from './characters/ssr/Ruby';
import Frigg from './characters/ssr/Frigg';
import Nemesis from './characters/ssr/Nemesis';
import Marc from './characters/ssr/Marc';
import Baiyuekui from './characters/ssr/Baiyuekui';
import CobaltB from './characters/ssr/CobaltB';
import Claudia from './characters/ssr/Claudia';
import CocoRitter from './characters/ssr/CocoRitter';
import Huma from './characters/ssr/Huma';
import Crow from './characters/ssr/Crow';
import King from './characters/ssr/King';
import Meryl from './characters/ssr/Meryl';
import Samir from './characters/ssr/Samir';
import Shiro from './characters/ssr/Shiro';
import Tsubasa from './characters/ssr/Tsubasa';
import Zero from './characters/ssr/Zero';

import BaiLing from './characters/sr/BaiLing';
import Echo from './characters/sr/Echo';
import Ene from './characters/sr/Ene';
import Hilda from './characters/sr/Hilda';
import Pepper from './characters/sr/Pepper';

import { removeSpace } from '../../utils/stringHelper';

export const CHARACTERS = [
    SakiFuwa,
    Ruby,
    Frigg,
    Nemesis,
    Marc,
    Baiyuekui,
    CobaltB,
    Claudia,
    CocoRitter,
    Huma,
    Crow,
    King,
    Meryl,
    Samir,
    Shiro,
    Tsubasa,
    Zero,
    BaiLing,
    Echo,
    Ene,
    Hilda,
    Pepper
]

export function getCharacter(requestedCharacter) {
    return CHARACTERS.find((character) => removeSpace(character.name) === requestedCharacter);
}

export function getCharacterWithSpaces(requestedCharacter) {
    let result = "";
    CHARACTERS.find((character) => {
        if (removeSpace(character.name) === requestedCharacter) result = character.name
    });
    return result;
}