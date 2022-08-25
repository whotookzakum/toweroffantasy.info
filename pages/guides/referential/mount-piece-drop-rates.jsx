import { GuideArticle } from "../../../components/GuideArticle";
import { mountDropRates } from "../../../data/en-US/guides/referential/mount-piece-drop-rates";

export default function Guide() {
    return <GuideArticle guide={mountDropRates}/>;
}