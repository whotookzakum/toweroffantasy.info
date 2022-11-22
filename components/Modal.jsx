import Link from "next/link";
import { CHARACTERS } from "../data/en-US/characters/characterList";
import { RELICS } from "../data/en-US/relics/relicList";
import { MOUNTS } from "../data/en-US/mounts/mountList";
import { MATRICES } from "../data/en-US/matrices/matrixList";
import { GUIDES } from "../data/en-US/guides/guideList";
import { EXPLORATION } from "../data/en-US/exploration/exploration";
import { OUTFITS, MIA_OUTFITS, ACCESSORIES, HEADWEAR, AVATARS, AVATAR_FRAMES, CHAT_BUBBLES } from "../data/en-US/cosmetics/cosmetics";
import { COSMETICS } from "../pages/cosmetics";
import { useRouter } from "next/router";
import AnchorJS from "anchor-js";
import { useEffect } from "react";
import BackButton from "./BackButton";

export function ModalMenu({ list, filter, target, gender }) {
    let options = new Object();

    const filteredList = list.filter(item => item[filter] === target);

    const finalList = filteredList.map(item => {
        switch (list) {
            case CHARACTERS:
                options.menuClass = "simulacra";
                options.linkPath = `simulacra/${item.uri}`;
                options.imgPath = `avatar/${item.imgSrc}`;
                options.conditionalContent =
                    <div className="flex" style={{ gap: "0.3rem" }}>
                        <img src={`/static/images/${item.weapon.type}.webp`} alt={item.weapon.type} />
                        <img src={`/static/images/${item.weapon.element}.webp`} alt={item.weapon.element} />
                    </div>
                break;
            case MATRICES:
                options.menuClass = "matrices";
                options.linkPath = `matrices/${item.uri}`;
                options.imgPath = `matrices/${item.imgSrc}`;
                break;
            case RELICS:
                options.menuClass = "relics";
                options.linkPath = `relics/${item.uri}`;
                options.imgPath = `relics/${item.imgSrc}`;
                break;
            case MOUNTS:
                options.menuClass = "mounts";
                options.linkPath = `mounts/${item.uri}`;
                options.imgPath = `mounts/${item.imgSrc}`;
                break;
            case GUIDES:
                options.menuClass = "guides";
                options.linkPath = `guides/${item.type}/${item.uri}`;
                options.conditionalContent = <div className="guide-date">{item.date}</div>
                break;
            case EXPLORATION:
                options.menuClass = "exploration";
                options.linkPath = `exploration/${item.uri}`;
                options.imgPath = `exploration/${item.imgSrc}`;
                break;
            case OUTFITS:
                options.menuClass = "outfits";
                options.linkPath = `cosmetics/outfits/${item.uri}`;
                options.imgPath = `cosmetics/outfits/${gender}_${item.imgSrc}`;
                break;
            case ACCESSORIES:
                options.menuClass = "accessories";
                options.linkPath = `cosmetics/accessories/${item.uri}`;
                options.imgPath = `cosmetics/accessories/${item.imgSrc}`;
                break;
            case HEADWEAR:
                options.menuClass = "headwear";
                options.linkPath = `cosmetics/headwear/${item.uri}`;
                options.imgPath = `cosmetics/headwear/${item.imgSrc}`;
                break;
            case AVATARS:
                options.menuClass = "avatars";
                options.linkPath = `cosmetics/avatars/${item.uri}`;
                options.imgPath = `cosmetics/avatars/${item.imgSrc}`;
                break;
            case AVATAR_FRAMES:
                options.menuClass = "avatar-frames";
                options.linkPath = `cosmetics/avatar-frames/${item.uri}`;
                options.imgPath = `cosmetics/avatar-frames/${item.imgSrc}`;
                break;
            case CHAT_BUBBLES:
                options.menuClass = "chat-bubbles";
                options.linkPath = `cosmetics/chat-bubbles/${item.uri}`;
                options.imgPath = `cosmetics/chat-bubbles/${item.imgSrc}`;
                break;
            case MIA_OUTFITS:
                options.menuClass = "mia-outfits";
                options.linkPath = `cosmetics/mia/${item.uri}`;
                options.imgPath = `cosmetics/mia/${item.imgSrc}`;
                break;
            case COSMETICS: 
                options.menuClass = "cosmetics";
                options.linkPath = `cosmetics/${item.uri}`;
                options.imgPath = `cosmetics/${item.imgSrc}`;
                break;
            default:
                break;
        }

        return (
            <li key={item.uri}>
                <Link href={`/${options.linkPath}`}>
                    <a>
                        {item.chinaOnly && options.menuClass !== "guides" && <abbr title="China Exclusive" />}
                        {options.imgPath &&
                            <div className={options.menuClass === "exploration" ? "" : "flex"}>
                                <img src={`/static/images/${options.imgPath}`} alt={item.name} />
                            </div>
                        }
                        <h3>
                            {item.chinaOnly && options.menuClass === "guides" && <abbr title="China Exclusive" />}
                            {item.name}
                        </h3>
                        {options.conditionalContent}
                    </a>
                </Link>
            </li>
        )
    })

    return (
        <menu className={`modal-menu ${options.menuClass}`}>
            {finalList}
        </menu>
    );
}

export function Modal({ item, children, gender }) {

    useEffect(() => {
        const anchors = new AnchorJS();
        anchors.add('.anchor');
    })

    const router = useRouter()
    const path = router.pathname.substring(1).split("/[id]")[0];

    const options = new Object();
    options.headerClass = path;
    options.headerImgPath = path + "/" + item.imgSrc;
    options.bgImgPath = path + "/" + item.imgSrc;

    switch (path) {
        case "simulacra":
            options.headerImgPath = `avatar/${item.imgSrc}`;
            options.bgImgPath = `art/${item.imgSrc}`;
            break;
        case "matrices":
            options.bgImgPath = `art/${item.imgSrc}`;
            break;
        case "mounts":
            options.bgImgPath = `bg-2.webp`;
            break;
        case "exploration":
            options.bgImgPath = `bg-2.webp`;
            break;
        case "cosmetics/mia":
        case "cosmetics/accessories":
        case "cosmetics/outfits":
            options.headerClass = "cosmetics";
            options.bgImgPath = `bg-1.webp`;
            if (gender) {
                options.headerImgPath = `${path}/${gender}_${item.imgSrc}`;
            }
            break;
        default:
            break;
    }
    
    const pagesWithNoBg = ["robarg", "apophis", "frost-bot", "sobek", "barbarossa", "wind-blade", "obstacle-removal", "self-explosive", "functional-dash", "standard-operation", "plunder"];
    if (pagesWithNoBg.includes(item.uri) || path.includes("cosmetics")) {
        options.bgImgPath = `bg-1.webp`;
    }

    return (
        <>
            <article className="modal">
                <div className="modal-backdrop" />
                <img className="bg-img" src={`/static/images/${options.bgImgPath}`} alt="Page Background" />
                <ModalHeader item={item} options={options} path={path} />
                {children}
            </article>
            <BackButton />
        </>
    );
}

function ModalHeader({ item, options }) {

    let color = { color: "var(--color-tier-s)" };
    if (item.rarity === 'SR') {
        color = { color: "var(--color-tier-a)" };
    }
    else if (item.rarity === 'R') {
        color = { color: "var(--color-tier-b)" };
    }

    let imgSrc = `/static/images/${options.headerImgPath}`;

    return (
        <>
            <BackButton />
            <header className={options.headerClass} >
                <div className="header-img-wrapper">
                    <img src={imgSrc} alt={item.name} />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2>
                        <i style={color}>{item.rarity}</i>
                    </h2>
                </div>
            </header>
        </>
    )
}

