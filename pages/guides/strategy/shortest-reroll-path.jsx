import { GuideArticle } from "../../../components/GuideArticle";
import { shortestRerollPath } from "../../../data/en-US/guides/strategy/shortest-reroll-path";

export default function Guide() {
    return <GuideArticle guide={shortestRerollPath}/>;
}