import { GuideArticle } from "../../../components/GuideArticle";
import { gameLore } from "../../../data/en-US/guides/general/game-lore";

export default function Guide() {
    return <GuideArticle guide={gameLore}/>;
}