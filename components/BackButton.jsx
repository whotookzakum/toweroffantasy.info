import { useRouter } from "next/router";
import Link from "next/link";

export default function BackButton() {
    const router = useRouter();
    const isGuideArticle = router.pathname.includes("guides");
    const isCosmeticItem = router.pathname.includes("cosmetics");
    let path = router.pathname.substring(1).split("/[id]")[0];
    if (isGuideArticle) {
        path = "guides";
    } 
    else if (isCosmeticItem) {
        path = "cosmetics";
    }
    return (
        <Link href={`/${path}`}>
            <a tabIndex={0} className="modal-back-button">
                <BackArrowIcon/>&nbsp;All {path}
            </a>
        </Link>
    )
}

function BackArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left-lines" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="#439eac" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z"></path>
            <path d="M21 15v-6"></path>
            <path d="M18 15v-6"></path>
        </svg>
    )
}