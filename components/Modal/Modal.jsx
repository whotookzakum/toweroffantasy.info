import Link from "next/link";
import { CHARACTERS } from "../../data/en-US/characters/characterList";
import { RELICS } from "../../data/en-US/relics/relicList";
import { MOUNTS } from "../../data/en-US/mounts/mountList";
import { MATRICES } from "../../data/en-US/matrices/matrixList";
import { GUIDES } from "../../data/en-US/guides/guideList";
import { SimulacraModal } from "./SimulacrumModal";
import { MatrixModal } from "./MatrixModal";
import { RelicModal } from "./RelicModal";
import { MountModal } from "./MountModal";

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

export function Modal({ list }) {
    const params = useParams();
    const item = list.find(item => item.uri === params.itemName);

    let options = new Object();

    switch (list) {
        case CHARACTERS:
            options.modal = <SimulacraModal item={item} />;
            options.headerClass = 'simulacra';
            options.headerImg = <img src={`/images/avatar/${item.imgSrc}`} alt={`${item.name} Avatar`} />;
            options.bgImg = <img className="bg-img" src={`/images/art/${item.imgSrc}`} alt={item.name + " Artwork"} />;
            break;
        case MATRICES:
            options.modal = <MatrixModal item={item} />;
            options.headerClass = 'matrices';
            options.headerImg = <img src={`/images/matrices/${item.imgSrc}`} alt={`${item.name} Matrix`} />;
            options.bgImg = <img className="bg-img" src={`/images/art/${item.imgSrc}`} alt={item.name + " Artwork"} />;
            break;
        case RELICS:
            options.modal = <RelicModal item={item} />;
            options.headerClass = 'relics';
            options.headerImg = <img src={`/images/relics/${item.imgSrc}`} alt={item.name} />;
            options.bgImg = <img className="bg-img" src={`/images/relics/${item.imgSrc}`} alt={item.name} />;
            break;
        case MOUNTS:
            options.modal = <MountModal item={item} />;
            options.headerClass = 'mounts';
            options.headerImg = <img src={`/images/mounts/${item.imgSrc}`} alt={item.name} />;
            options.bgImg = <img className="bg-img" src="/images/bg-2.png" alt="Vera Background" />;
            break;
        default:
            break;
    }

    return (
        <article className="modal">
            <div className="modal-backdrop" />
            {options.bgImg}
            <ModalHeader item={item} options={options} />
            {options.modal}
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
                {options.headerImg}
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