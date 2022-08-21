import { GuideArticle } from "../../../components/GuideArticle";
import { worldBossDrops } from "../../../data/en-US/guides/referential/world-boss-drops";

export default function Guide() {
    return <GuideArticle guide={worldBossDrops}/>;
}