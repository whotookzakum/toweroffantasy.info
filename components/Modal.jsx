import Link from "next/link";
import { CHARACTERS } from "../data/en-US/characters/characterList";
import { RELICS } from "../data/en-US/relics/relicList";
import { MOUNTS } from "../data/en-US/mounts/mountList";
import { MATRICES } from "../data/en-US/matrices/matrixList";
import { GUIDES } from "../data/en-US/guides/guideList";
import { EXPLORATION } from "../data/en-US/exploration/exploration";
import { useRouter } from "next/router";

export function ModalMenu({ list, filter, target }) {
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

export function Modal({ item, children }) {
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
        default:
            break;
    }
    const pagesWithNoBg = ["robarg", "apophis", "frost-bot", "sobek", "barbarossa", "offensive-logic", "cleanup-agreement", "explosive-core", "bullseye", "tenet-guard", "provocateurs"];
    if (pagesWithNoBg.includes(item.uri)) {
        options.bgImgPath = `bg-1.webp`;
    }

    return (
        <article className="modal">
            <div className="modal-backdrop" />
            <img className="bg-img" src={`/static/images/${options.bgImgPath}`} alt="Page Background" />
            <ModalHeader item={item} options={options} path={path} />
            {children}
        </article>
    );
}

function ModalHeader({ item, options, path }) {

    let color = { color: "var(--color-tier-s)" };
    if (item.rarity === 'SR') {
        color = { color: "var(--color-tier-a)" };
    }
    else if (item.rarity === 'R') {
        color = { color: "var(--color-tier-b)" };
    }

    return (
        <>
            <Link href={`/${path}`}>
                <a tabIndex={0} className="modal-back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-lines" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="#439eac" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3z"></path>
                        <path d="M21 15v-6"></path>
                        <path d="M18 15v-6"></path>
                    </svg>
                    &nbsp;All {path}</a>
            </Link>
            <header className={options.headerClass} >
                <div className="header-img-wrapper">
                    <img src={`/static/images/${options.headerImgPath}`} alt={item.name} />;
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

