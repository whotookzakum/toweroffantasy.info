import { GuideArticle } from "../../../components/GuideArticle";
import { dpsLoadouts } from "../../../data/en-US/guides/strategy/dps-weapon-loadouts";

export default function Guide() {
    return <GuideArticle guide={dpsLoadouts}/>;
}