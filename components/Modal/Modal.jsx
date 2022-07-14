import Link from "next/link";
import { CHARACTERS } from "../../data/en-US/characters/characterList";
import { RELICS } from "../../data/en-US/relics/relicList";
import { MOUNTS } from "../../data/en-US/mounts/mountList";
import { MATRICES } from "../../data/en-US/matrices/matrixList";
import { GUIDES } from "../../data/en-US/guides/guideList";
import { useRouter } from "next/router";

export function ModalMenu({ list, filter, target }) {
    let options = new Object();

    const filteredList = list.filter(item => item[filter] === target);

    const finalList = filteredList.map(item => {
        switch (list) {
            case CHARACTERS:
                options.menuClass = "simulacra";
                options.imgPath = `avatar/${item.imgSrc}`;
                options.conditionalContent =
                    <div className="flex" style={{ gap: "0.3rem" }}>
                        <img src={`/images/${item.weapon.type}.png`} alt={item.weapon.type} />
                        <img src={`/images/${item.weapon.element}.png`} alt={item.weapon.element} />
                    </div>
                break;
            case MATRICES:
                options.menuClass = "matrices";
                options.imgPath = `matrices/${item.imgSrc}`;
                break;
            case RELICS:
                options.menuClass = "relics";
                options.imgPath = `relics/${item.imgSrc}`;
                break;
            case MOUNTS:
                options.menuClass = "mounts";
                options.imgPath = `mounts/${item.imgSrc}`;
                break;
            case GUIDES:
                options.menuClass = "guides";
                const authors =
                    item.author.map((author, index) => {
                        return (index === item.author.length - 1) ?
                            <em>{author}</em> :
                            <><em>{author}</em>, </>
                    });
                options.conditionalContent = <div className="authors">By {authors}</div>;
            default:
                break;
        }

        return (
            <li key={item.uri}>
                <Link href={`/${options.menuClass}/${item.uri}`}>
                    <a>
                        {item.chinaOnly && <abbr title="China Exclusive" />}
                        {options.imgPath &&
                            <div className="flex">
                                <img src={`/images/${options.imgPath}`} alt={item.name} />
                            </div>
                        }
                        <h3>{item.name}</h3>
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
    const path = router.pathname;
    const options = new Object();
    if (path.includes("simulacra")) {
        options.headerClass = 'simulacra';
        options.headerImgPath = `avatar/${item.imgSrc}`;
        options.bgImgPath = `art/${item.imgSrc}`;
    }
    else if (path.includes("matrices")) {
        options.headerClass = 'matrices';
        options.headerImgPath = `matrices/${item.imgSrc}`;
        options.bgImgPath = `art/${item.imgSrc}`;
    }
    else if (path.includes("relics")) {
        options.headerClass = 'relics';
        options.headerImgPath = `relics/${item.imgSrc}`;
        options.bgImgPath = `relics/${item.imgSrc}`;
    }
    else if (path.includes("mounts")) {
        options.headerClass = 'mounts';
        options.headerImgPath = `mounts/${item.imgSrc}`;
        options.bgImgPath = `bg-2.png`;
    }

    return (
        <article className="modal">
            <div className="modal-backdrop" />
            <img className="bg-img" src={`/images/${options.bgImgPath}`} alt="Page Background" />
            <ModalHeader item={item} options={options} />
            {children}
        </article>
    );
}

function ModalHeader({ item, options }) {
    const color = item.rarity === 'SSR' ?
        { color: "var(--color-tier-s)" } :
        { color: "var(--color-tier-a)" }
    
    return (
        <header className={options.headerClass} >
            <div className="header-img-wrapper">
                
                <img src={`/images/${options.headerImgPath}`} alt={item.name} />;
            </div>
            <div>
                <h1>{item.name}</h1>
                <h2>
                    <i style={color}>{item.rarity}</i>
                </h2>
            </div>
        </header>
    )
}