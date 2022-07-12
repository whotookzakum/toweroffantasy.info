import { Link, Outlet, useParams } from "react-router-dom";
import { removeSpace, getItemByName } from "../../utils/stringHelper";
import { CHARACTERS } from "../../data/en-US/characters/characterList";
import { RELICS } from "../../data/en-US/relics/relicList";
import { MOUNTS } from "../../data/en-US/mounts/mountList";
import { MATRICES } from "../../data/en-US/matrices/matrixList";
import { GUIDES } from "../../data/en-US/guides/guideList";
import { SimulacraModal } from "./SimulacrumModal";
import { MatrixModal } from "./MatrixModal";
import { RelicModal } from "./RelicModal";
import { MountModal } from "./MountModal";

export function ModalMenu({ listContent, type }) {
    let path = (type === "simulacra") ? "avatar" : type;
    return (
        <menu className={`modal-menu ${type}`}>
            {listContent.map(item =>
                <li key={item.name}>
                    <Link to={`/${type}/${removeSpace(item.name)}`}>
                        {item.chinaOnly && <abbr title="China Exclusive" />}
                        {type !== "guides" &&
                            <div className="flex">
                                <img src={`/images/${path}/${removeSpace(item.name)}.png`}
                                    alt={item.name} />
                            </div>
                        }
                        <h3>{item.name}</h3>
                        {type === "guides" &&
                            <div className="authors">
                                By {
                                    item.author.map((author, index) => {
                                        return (index === item.author.length - 1) ?
                                            <em>{author}</em> :
                                            <><em>{author}</em>, </>
                                    })

                                }
                            </div>
                        }
                        {type === "simulacra" &&
                            <div className="flex" style={{ gap: "0.3rem" }}>
                                <img src={`/images/${item.weapon.type}.png`} alt={item.weapon.type} />
                                <img src={`/images/${item.weapon.element}.png`} alt={item.weapon.element} />
                            </div>
                        }
                    </Link>
                </li>
            )}
            <Outlet />
        </menu>
    );
}


export function Modal({ type }) {
    const params = useParams();
    let path = (type === "simulacra" || type === "matrices") ? "art" : type;
    let dataSet = CHARACTERS;
    if (type === "matrices") dataSet = MATRICES;
    else if (type === "relics") dataSet = RELICS;
    else if (type === "mounts") dataSet = MOUNTS;
    else if (type === "simulacra") dataSet = CHARACTERS;
    else if (type === "guides") dataSet = GUIDES;
    const item = getItemByName(params.itemName, dataSet);
    let hasArtwork = true;
    if (type === "matrices") hasArtwork = CHARACTERS.find(character => character.name === item.name);
    (type === "mounts") ? path = "bg-2.png" : path += `/${removeSpace(item.name)}.png`;
    return (
        <article className="modal">
            {hasArtwork && <img className="bg-img" src={`/images/${path}`} alt={item.name + " Artwork"} />}
            <div className="modal-backdrop"></div>
            {type === "simulacra" && <SimulacraModal item={item} />}
            {type === "matrices" && <MatrixModal item={item} />}
            {type === "relics" && <RelicModal item={item} />}
            {type === "mounts" && <MountModal item={item} />}
        </article >
    );
}