import { GuideArticle } from "../../../components/GuideArticle";
import { thingsYouMustKnow } from "../../../data/en-US/guides/general/15-things-you-must-know";

export default function Guide() {
    return <GuideArticle guide={thingsYouMustKnow}/>;
}