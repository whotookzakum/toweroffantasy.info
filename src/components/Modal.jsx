import { CHARACTERS, getCharacter } from "../data/en-US/characterList";
import elementalEffects from "../data/en-US/elementalEffects";
import ReactMarkdown from "react-markdown";
import { Link, Outlet, useParams } from "react-router-dom";
import { removeSpace, hyphenToSpace } from "../utils/stringHelper";


export function ModalMenu({ listContent }) {
    return (
        <menu className="modal-menu">
            {listContent.map(character =>
                <li key={character.name}>
                    <Link to={`/simulacra/${removeSpace(character.name)}`}>
                        {character.chinaOnly && <abbr title="China Exclusive" />}
                        <img src={require(`../data/images/avatar/${removeSpace(character.name)}.png`)}
                            alt={character.name} />
                        <h3>{character.name}</h3>
                        <img src={require(`../data/images/${character.weapon.type}.png`)}
                            alt={character.weapon.type} />
                        <img src={require(`../data/images/${character.weapon.element}.png`)}
                            alt={character.weapon.element} />
                    </Link>
                </li>
            )}
            <Outlet/>
        </menu>
    );
}

function setModalData({item}) {
    Modal(item);
}

export function Modal() {
    let params = useParams();
    let item = getCharacter(params.itemName);

    let rarity = 1;
    if (item.rarity === "SR") rarity = 0;
    const elementColor = `var(--color-${item.weapon.element})`;

    let advancements = [];
    for (const star in item.weapon.advancement) {
        advancements.push(
            <tr>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown>{item.weapon.advancement[star]}</ReactMarkdown></td>
            </tr>
        );
    }

    let bonusEffects = [];
    for (const effect in item.weapon.bonusEffect) {
        bonusEffects.push(
            <div>
                <h4>{item.weapon.bonusEffect[effect].title}</h4>
                <ReactMarkdown>{item.weapon.bonusEffect[effect].description}</ReactMarkdown>
            </div>
        )
    }

    let giftCategories = [];
    for (const gift of item.awakening.giftCategories) {
        giftCategories.push(
            <li style={{ color: `var(--color-${gift})`, borderColor: `var(--color-${gift})` }}>
                {hyphenToSpace(gift)}
            </li>
        );
        if (gift === "vera") {

        }
    }

    let gifts = [];
    // Gifts are in a 2d array. The inner array's index [0] stores the points earned for that group of gifts.
    for (let group = 0; group < item.awakening.gifts.length; group++) {
        let rarity = 2;
        if (item.awakening.gifts[group][0] > 40) rarity = 4;
        else if (item.awakening.gifts[group][0] > 15) rarity = 3;
        for (let gift = 1; gift < item.awakening.gifts[group].length; gift++) {
            gifts.push(
                <li className="gift">
                    <div className={`item-frame rarity-${rarity}`}>
                        <img src={require(`../data/images/awakening/${item.awakening.gifts[group][gift]}.png`)} alt={item.awakening.gifts[group][gift]} />
                    </div>
                    <h4>+{item.awakening.gifts[group][0]}</h4>
                </li>
            );
        }
    }

    function getInputs(inputs) {
        let list = [];
        if (inputs.length > 1) {
            for (let i = 0; i < inputs.length; i++) {
                if (i === inputs.length - 1) {
                    list.push(<kbd>{inputs[i]}</kbd>);
                    break;
                }
                list.push(<><kbd>{inputs[i]}</kbd> + </>);
            }
        } else { list.push(<kbd>{inputs}</kbd>); }
        return (<div className="ability-inputs">{list}</div>);
    }

    function getBreakdown(breakdown) {
        let list = [];
        for (const step of breakdown) list.push(<li><ReactMarkdown>{step}</ReactMarkdown></li>)
        return (<ol>{list}</ol>);
    }

    let abilities = [];
    for (const category in item.weapon.abilities) {
        let abilityList = [];
        let thisCategory = item.weapon.abilities[category];

        for (const ability in thisCategory) {
            abilityList.push(
                <div className="weapon-ability">
                    <h3>{thisCategory[ability].name}</h3>
                    {thisCategory[ability].input && getInputs(thisCategory[ability].input)}
                    <ReactMarkdown>{thisCategory[ability].description}</ReactMarkdown>
                    {thisCategory[ability].breakdown && getBreakdown(thisCategory[ability].breakdown)}
                </div>
            );
        }

        abilities.push(
            <details>
                <summary><h4>{category}</h4></summary>
                <div className="details-content">{abilityList}</div>
            </details>
        );
    }

    let recMatrix = [];
    for (const set in item.weapon.recommendedMatrix) {
        for (const matrix of item.weapon.recommendedMatrix[set]) {
            recMatrix.push(
                <li><img src={require(`../data/images/matrix/${matrix}.png`)} alt={matrix + " Matrix"} /></li>
            );
        }
    }


    return (
        <article className="modal">
            <img className="bg-img" src={require(`../data/images/art/${removeSpace(item.name)}.png`)} alt={item.name + " Artwork"} />
            <div className="modal-backdrop"></div>

            <header>
                <h1>{item.name}</h1>
                <h2>{item.rarity} Simulacrum</h2>
            </header>

            <div className="modal-body">
                {item.chinaOnly &&
                    <section>
                        <h2><abbr title="China Exclusive" style={{ fontSize: "1.5rem", verticalAlign: "middle" }} /> China Exclusive </h2>
                        {item.name} is currently only available the Chinese version of Tower of Fantasy.<br />All information on this page is subject to change when {item.name} is released in the Global version.
                    </section>
                }

                <h2>Weapon</h2>
                <div className="weapon-header" style={{ borderColor: elementColor }}>
                    <img className="weapon-image" src={require(`../data/images/wep/${removeSpace(item.name)}.png`)} alt={item.weapon.name} />
                    <div className="weapon-info">
                        <h3>{item.weapon.name}</h3>
                        <div className="weapon-stat-grid">
                            <div className="weapon-stat">
                                <img src={require(`../data/images/${item.weapon.type}.png`)} alt={item.weapon.type} />
                                <div>
                                    <h5>Resonance</h5>
                                    <h4>{item.weapon.type}</h4>
                                </div>
                            </div>
                            <div className="weapon-stat">
                                <img src={require(`../data/images/${item.weapon.element}.png`)} alt={item.weapon.element} />
                                <div>
                                    <h5>Element</h5>
                                    <h4>{item.weapon.element}</h4>
                                </div>
                            </div>
                            <div className="weapon-stat">
                                <i style={{ color: `var(--color-tier-${removeSpace(item.weapon.shatter[0])})` }}>{item.weapon.shatter[0]}</i>
                                <div>
                                    <h5>Shatter</h5>
                                    <h4>{item.weapon.shatter[1]}</h4>
                                </div>
                            </div>
                            <div className="weapon-stat">
                                <i style={{ color: `var(--color-tier-${removeSpace(item.weapon.charge[0])})` }}>{item.weapon.charge[0]}</i>
                                <div>
                                    <h5>Charge</h5>
                                    <h4>{item.weapon.charge[1]}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="weapon-effects w-75ch">
                    <h3>Weapon Effects</h3>
                    <div>
                        <h4 style={{ color: elementColor }}>{elementalEffects[item.weapon.element].title}</h4>
                        <ReactMarkdown>{elementalEffects[item.weapon.element].description(rarity)}</ReactMarkdown>
                    </div>
                    {item.weapon.bonusEffect && <>{bonusEffects}</>}
                </section>
                <section className="weapon-advancements w-75ch">
                    <h3>Advancements</h3>
                    <table className="modal-table">
                        <thead style={{ borderColor: elementColor }}>
                            <tr>
                                <th><h6>Stars</h6></th>
                                <th><h6>Effect</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {advancements}
                        </tbody>
                    </table>
                </section>
                {item.weapon.abilities &&
                    <section className="weapon-abilities w-75ch">
                        <h3>Weapon Abilities</h3>
                        Data reflects unleveled weapons.
                        {abilities}
                    </section>
                }
                <section className="weapon-materials w-75ch" >
                    <h3>Upgrade Materials</h3>
                    <ul>
                        <li className="item-frame rarity-2"><img src={require(`../data/images/mat/${item.weapon.materials[0]}1.png`)} alt={`${item.weapon.materials[0]} 1`} /></li>
                        <li className="item-frame rarity-3"><img src={require(`../data/images/mat/${item.weapon.materials[0]}2.png`)} alt={`${item.weapon.materials[0]} 2`} /></li>
                        <li className="item-frame rarity-4"><img src={require(`../data/images/mat/${item.weapon.materials[0]}3.png`)} alt={`${item.weapon.materials[0]} 3`} /></li>

                        <li className="item-frame rarity-3"><img src={require(`../data/images/mat/${item.weapon.materials[1]}1.png`)} alt={`${item.weapon.materials[1]} 1`} /></li>
                        <li className="item-frame rarity-4"><img src={require(`../data/images/mat/${item.weapon.materials[1]}2.png`)} alt={`${item.weapon.materials[1]} 2`} /></li>
                        <li className="item-frame rarity-5"><img src={require(`../data/images/mat/${item.weapon.materials[1]}3.png`)} alt={`${item.weapon.materials[1]} 3`} /></li>

                        <li className="item-frame rarity-4"><img src={require(`../data/images/mat/${item.weapon.materials[2]}1.png`)} alt={`${item.weapon.materials[1]} 1`} /></li>
                        <li className="item-frame rarity-5"><img src={require(`../data/images/mat/${item.weapon.materials[2]}2.png`)} alt={`${item.weapon.materials[1]} 2`} /></li>
                        <li className="item-frame rarity-5"><img src={require(`../data/images/mat/${item.weapon.materials[2]}3.png`)} alt={`${item.weapon.materials[1]} 3`} /></li>
                    </ul>
                </section>
                <section className="weapon-rec-matrices w-75ch">
                    <h3>Recommended Matrices</h3>
                    <ul>{recMatrix}</ul>
                </section>

                <hr />

                <h2>Awakening</h2>
                <section className="awakening-traits w-75ch">
                    <h3>Simulacrum Traits</h3>
                    <table className="modal-table">
                        <thead style={{ borderColor: elementColor }}>
                            <tr>
                                <th><h6>Points</h6></th>
                                <th><h6>Effect</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1200</th>
                                <td><ReactMarkdown>{item.awakening.trait1200}</ReactMarkdown></td>
                            </tr>
                            <tr>
                                <th>4000</th>
                                <td><ReactMarkdown>{item.awakening.trait4000}</ReactMarkdown></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="awakening-gifts w-75ch">
                    <h3>Favorite Gifts</h3>
                    <ul className="gift-categories-grid">{giftCategories}</ul>
                    <ul className="gifts-grid">{gifts}</ul>
                </section>

                <hr />

                <h2>Other Info</h2>
                <section className="character-bio w-75ch">
                    <h3>Character Profile</h3>
                    <div className="bio-container">
                        <ul>
                            <li>
                                <h5>Gender</h5>
                                <h4>{item.bio.gender}</h4>
                            </li>
                            <li>
                                <h5>Height</h5>
                                <h4>{item.bio.height}</h4>
                            </li>
                            <li>
                                <h5>Birthplace</h5>
                                <h4>{item.bio.birthplace}</h4>
                            </li>
                            <li>
                                <h5>Horoscope</h5>
                                <h4>{item.bio.horoscope}</h4>
                            </li>
                            <li>
                                <h5>Birthday</h5>
                                <h4>{item.bio.birthday}</h4>
                            </li>
                        </ul>
                        <img src={require(`../data/images/charts/${removeSpace(item.name)}.png`)} alt="" />
                    </div>
                </section>
                <section className="voice-actors w-75ch">
                    <h3>Voice Actors</h3>
                    <ul>
                        <li>
                            <h5>English</h5>
                            <h4>{item.bio.voiceActors.en}</h4>
                        </li>
                        <li>
                            <h5>Japanese</h5>
                            <h4>{item.bio.voiceActors.jp}</h4>
                        </li>
                        <li>
                            <h5>Chinese</h5>
                            <h4>{item.bio.voiceActors.cn}</h4>
                        </li>
                    </ul>
                </section>
            </div>
        </article >
    );
}