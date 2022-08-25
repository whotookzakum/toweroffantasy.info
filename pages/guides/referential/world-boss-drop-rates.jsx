import { GuideArticle } from "../../../components/GuideArticle";
import { worldBossDrops } from "../../../data/en-US/guides/referential/world-boss-drop-rates";

export default function Guide() {
    return <GuideArticle guide={worldBossDrops}/>;
}