import { GuideArticle } from "../../../components/GuideArticle";
import { beginnerWeapons } from "../../../data/en-US/guides/general/beginner-weapon-guide";

export default function Guide() {
    return <GuideArticle guide={beginnerWeapons}/>;
}