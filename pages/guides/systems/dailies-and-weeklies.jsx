import { GuideArticle } from "../../../components/GuideArticle";
import { dailies } from "../../../data/en-US/guides/systems/dailies-and-weeklies";

export default function Guide() {
    return <GuideArticle guide={dailies}/>;
}