import { GuideArticle } from "../../../components/GuideArticle";
import { shortestRerollPath } from "../../../data/en-US/guides/general/shortest-reroll-path";

export default function Guide() {
    return <GuideArticle guide={shortestRerollPath}/>;
}