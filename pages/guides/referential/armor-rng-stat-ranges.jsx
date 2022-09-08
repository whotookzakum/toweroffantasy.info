import { GuideArticle } from "../../../components/GuideArticle";
import { armorStatRanges } from "../../../data/en-US/guides/referential/armor-rng-stat-ranges";

export default function Guide() {
    return <GuideArticle guide={armorStatRanges}/>;
}