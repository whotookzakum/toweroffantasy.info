import { getItemByName } from "../utils/stringHelper";
import elementalEffects from "../data/en-US/elementalEffects";
import ReactMarkdown from "react-markdown";
import { Link, Outlet, useParams } from "react-router-dom";
import { removeSpace, hyphenToSpace } from "../utils/stringHelper";
import { CHARACTERS } from "../data/en-US/characters/characterList";
import { RELICS } from "../data/en-US/relics/relicList";

export function ModalMenu({ listContent, type }) {
    let path = (type === "simulacra") ? "avatar" : type;
    return (
        <menu className={`modal-menu ${type}`}>
            {listContent.map(item =>
                <li key={item.name}>
                    <Link to={`/${type}/${removeSpace(item.name)}`}>
                        {item.chinaOnly && <abbr title="China Exclusive" />}
                        <div className="flex">
                            <img src={require(`../data/images/${path}/${removeSpace(item.name)}.png`)}
                                alt={item.name} />
                        </div>
                        <h3>{item.name}</h3>
                        {type === "simulacra" &&
                            <div className="flex" style={{gap: "0.3rem"}}>
                                <img src={require(`../data/images/${item.weapon.type}.png`)} alt={item.weapon.type} />
                                <img src={require(`../data/images/${item.weapon.element}.png`)} alt={item.weapon.element} />
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
    let dataSet = CHARACTERS; // For both Simulacra and Matrices
    if (type === "relics") dataSet = RELICS;
    const item = getItemByName(params.itemName, dataSet);
    return (
        <article className="modal">
            <img className="bg-img" src={require(`../data/images/${path}/${removeSpace(item.name)}.png`)} alt={item.name + " Artwork"} />
            <div className="modal-backdrop"></div>
            {type === "simulacra" && <SimulacraModal item={item} />}
            {type === "matrices" && <MatrixModal item={item} />}
            {type === "relics" && <RelicModal item={item} />}
        </article >
    );
}

function SimulacraModal({ item }) {
    const weapon = item.weapon;
    const awakening = item.awakening;
    const rarity = (item.rarity === "SSR") ? 1 : 0;
    let rarityColor = {color: "var(--color-tier-s)"};
    if (item.rarity === "SR") rarityColor = {color: "var(--color-tier-a)"};
    else if (item.rarity === "R") rarityColor = {color: "var(--color-tier-b)"};
    const elementColor = `var(--color-${weapon.element})`;
    const advancements = Object.entries(weapon.advancement).map(([star, effect]) => {
        return (
            <tr>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown>{effect}</ReactMarkdown></td>
            </tr>
        )
    })
    function getBonusEffects(bonusEffects) {
        return (
            Object.entries(bonusEffects).map(([key, effect]) => {
                return (
                    <div>
                        <h4>{effect.title}</h4>
                        <ReactMarkdown>{effect.description}</ReactMarkdown>
                    </div>
                )
            })
        )
    }
    const weaponMaterials = weapon.materials.map(material => {
        let result = [];
        for (let i = 0; i < 3; i++) {
            const materialUri = material + (i + 1);
            let rarity = 5;
            if (["flame", "ice", "volt", "physical"].includes(material)) {
                rarity = i + 2;
            }
            else if (["red", "green"].includes(material)) {
                rarity = i + 3;
            }
            else if (["black", "blue"].includes(material)) {
                if (i < 2) rarity = i + 4;
            }
            result.push(
                <li className={`item-frame rarity-${rarity}`}>
                    <img src={require(`../data/images/mat/${materialUri}.png`)} alt={materialUri} />
                </li>
            );
        }
        return result;
    });
    let veraGiftDisclaimer = false;
    const giftCategories = awakening.giftCategories.map(gift => {
        if (gift === "vera") veraGiftDisclaimer = true;
        const style = {
            color: `var(--color-${gift})`,
            borderColor: `var(--color-${gift})`
        };
        return <li style={style}>{hyphenToSpace(gift)}</li>;
    })
    const gifts = awakening.gifts.map(group => {
        let rarity = 2;
        if (group[0] > 40)
            rarity = 4;
        else if (group[0] > 15)
            rarity = 3;
        return (group.map((gift, index) => {
            // Skip first index because it holds the points gained from the gifts in the same array i.e. [50, "gift1", "gift2"]
            return (index === 0) ? <></> :
                <li className="gift">
                    <div className={`item-frame rarity-${rarity}`}>
                        <img src={require(`../data/images/awakening/${gift}.png`)} alt={gift} />
                    </div>
                    <h4>+{group[0]}</h4>
                </li>
        }))
    })
    function getInputs(inputs) {
        return inputs.map((input, index) => {
            const keystroke = <kbd>{input}</kbd>;
            return (index === inputs.length - 1) ? keystroke : <>{keystroke} + </>;
        })
    }
    function getBreakdown(breakdown) {
        return breakdown.map(step => <li><ReactMarkdown>{step}</ReactMarkdown></li>)
    }
    const abilitiesArray = Object.entries(weapon.abilities);
    const abilities = abilitiesArray.map(([category, abilityList]) => {
        const abilitiesInThisCategory = abilityList.map(ability => {
            return (
                <div className="weapon-ability">
                    <h3>{ability.name}</h3>
                    {ability.input &&
                        <div className="ability-inputs">{getInputs(ability.input)}</div>}
                    <ReactMarkdown>{ability.description}</ReactMarkdown>
                    {ability.breakdown &&
                        <ol>{getBreakdown(ability.breakdown)}</ol>}
                </div>
            )
        });
        return (
            <details>
                <summary><h4>{category}</h4></summary>
                <div className="details-content">{abilitiesInThisCategory}</div>
            </details>
        )
    })
    const recMatrix = Object.entries(weapon.recommendedMatrix).map(([set, matricesList]) => {
        return (matricesList.map(matrix =>
            <li><img src={require(`../data/images/matrices/${matrix}.png`)} alt={matrix + " Matrix"} /></li>))
    });

    return (
        <>
            <header>
                <div className="header-img-wrapper simulacra">
                    <img src={require(`../data/images/avatar/${removeSpace(item.name)}.png`)} alt="" />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2><i style={rarityColor}>{item.rarity}</i> Simulacra</h2>
                </div>
            </header>

            <div className="modal-body">
                {item.chinaOnly &&
                    <section className="china-exclusive">
                        <h3><abbr title="China Exclusive" /> China Exclusive </h3>
                        {item.name} is currently only available the Chinese version of Tower of Fantasy.<br />All information on this page is subject to change when {item.name} is released in the Global version.
                    </section>
                }

                <h2>Weapon</h2>
                <div className="weapon-header" style={{ borderColor: elementColor }}>
                    <img className="weapon-image" src={require(`../data/images/wep/${removeSpace(item.name)}.png`)} alt={weapon.name} />
                    <div className="weapon-info">
                        <h3>{weapon.name}</h3>
                        <div className="weapon-stat-grid">
                            <div className="weapon-stat">
                                <img src={require(`../data/images/${weapon.type}.png`)} alt={weapon.type} />
                                <div>
                                    <h5>Resonance</h5>
                                    <h4>{weapon.type}</h4>
                                </div>
                            </div>
                            <div className="weapon-stat">
                                <img src={require(`../data/images/${weapon.element}.png`)} alt={weapon.element} />
                                <div>
                                    <h5>Element</h5>
                                    <h4>{weapon.element}</h4>
                                </div>
                            </div>
                            <div className="weapon-stat">
                                <i style={{ color: `var(--color-tier-${removeSpace(weapon.shatter[0])})` }}>{weapon.shatter[0]}</i>
                                <div>
                                    <h5>Shatter</h5>
                                    <h4>{weapon.shatter[1]}</h4>
                                </div>
                            </div>
                            <div className="weapon-stat">
                                <i style={{ color: `var(--color-tier-${removeSpace(weapon.charge[0])})` }}>{weapon.charge[0]}</i>
                                <div>
                                    <h5>Charge</h5>
                                    <h4>{weapon.charge[1]}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="weapon-effects w-75ch">
                    <h3>Weapon Effects</h3>
                    <div>
                        <h4 style={{ color: elementColor }}>{elementalEffects[weapon.element].title}</h4>
                        <ReactMarkdown>{elementalEffects[weapon.element].description(rarity)}</ReactMarkdown>
                    </div>
                    {weapon.bonusEffect && <>{getBonusEffects(weapon.bonusEffect)}</>}
                </section>
                <section className="advancements w-75ch">
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
                {Object.keys(weapon.abilities).length > 0 &&
                    <section className="weapon-abilities w-75ch">
                        <h3>Weapon Abilities</h3>
                        Data reflects unleveled weapons.
                        {abilities}
                    </section>
                }
                <section className="weapon-materials w-75ch" >
                    <h3>Upgrade Materials</h3>
                    <ul>{weaponMaterials}</ul>
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
                                <td><ReactMarkdown>{awakening.trait1200}</ReactMarkdown></td>
                            </tr>
                            <tr>
                                <th>4000</th>
                                <td><ReactMarkdown>{awakening.trait4000}</ReactMarkdown></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="awakening-gifts w-75ch">
                    <h3>Favorite Gifts</h3>
                    <ul className="gift-categories-grid">{giftCategories}</ul>
                    <ul className="gifts-grid">{gifts}</ul>
                    {veraGiftDisclaimer && <i>Vera characters will receive reduced Awakening Points from Non-Vera gifts.</i>}
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
                        {item.bio.voiceActors.en.length > 0 &&
                            <li>
                                <h5>English</h5>
                                <h4>{item.bio.voiceActors.en}</h4>
                            </li>
                        }
                        {item.bio.voiceActors.jp.length > 0 &&
                            <li>
                                <h5>Japanese</h5>
                                <h4>{item.bio.voiceActors.jp}</h4>
                            </li>
                        }
                        {item.bio.voiceActors.cn.length > 0 &&
                            <li>
                                <h5>Chinese</h5>
                                <h4>{item.bio.voiceActors.cn}</h4>
                            </li>
                        }
                    </ul>
                </section>
            </div>
        </>
    )
}

function MatrixModal({ item }) {
    const matrix = item.matrix;
    let rarityColor = {color: "var(--color-tier-s)"};
    if (item.rarity === "SR") rarityColor = {color: "var(--color-tier-a)"};
    else if (item.rarity === "R") rarityColor = {color: "var(--color-tier-b)"};
    const setEffects = Object.entries(matrix).map(([key, value]) => {
        const reqPieces = key.split("set").pop();
        return (
            <section className="matrix-set w-75ch">
                <h3>{reqPieces}-piece Set</h3>
                <ReactMarkdown>{matrix[key]}</ReactMarkdown>
                <details style={{display: 'none'}}>
                    <summary>Advancements</summary>
                    <div className="details-content">

                        <table className="modal-table">
                            <thead>
                                <tr>
                                    <th><h6>Stars</h6></th>
                                    <th><h6>Effect</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1 ★</th>
                                    <td><ReactMarkdown>{matrix[key]}</ReactMarkdown></td>
                                </tr>
                                <tr>
                                    <th>2 ★</th>
                                    <td><ReactMarkdown>{matrix[key]}</ReactMarkdown></td>
                                </tr>
                                <tr>
                                    <th>3 ★</th>
                                    <td><ReactMarkdown>{matrix[key]}</ReactMarkdown></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </details>
            </section>
        )
    });

    return (
        <>
            <header>
                <div className="header-img-wrapper matrices">
                    <img src={require(`../data/images/matrices/${removeSpace(item.name)}.png`)} alt="" />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2><i style={rarityColor}>{item.rarity}</i> Matrix</h2>
                </div>
            </header>

            <div className="modal-body">
                {item.chinaOnly &&
                    <section className="china-exclusive">
                        <h3><abbr title="China Exclusive" /> China Exclusive </h3>
                        {item.name} is currently only available the Chinese version of Tower of Fantasy.<br />All information on this page is subject to change when {item.name} is released in the Global version.
                    </section>
                }
                
                
                
                {setEffects}
            </div>
        </>
    )
}

function RelicModal({ item }) {
    let rarityColor = {color: "var(--color-tier-s)"};
    if (item.rarity === "SR") rarityColor = {color: "var(--color-tier-a)"};
    else if (item.rarity === "R") rarityColor = {color: "var(--color-tier-b)"};
    const advancements = Object.entries(item.advancement).map(([star, effect]) => {
        return (
            <tr>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown>{effect}</ReactMarkdown></td>
            </tr>
        )
    });

    return (
        <>
            <header>
                <div className="header-img-wrapper relics">
                    <img src={require(`../data/images/relics/${removeSpace(item.name)}.png`)} alt="" />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2><i style={rarityColor}>{item.rarity}</i> Relic</h2>
                </div>
            </header>

            <div className="modal-body">
                {item.chinaOnly &&
                    <section className="china-exclusive">
                        <h3><abbr title="China Exclusive" /> China Exclusive </h3>
                        {item.name} is currently only available the Chinese version of Tower of Fantasy.<br />All information on this page is subject to change when {item.name} is released in the Global version.
                    </section>
                }

                <section className="relic-effects w-75ch">
                    <h3>Relic Effect</h3>
                    <ReactMarkdown>{item.description}</ReactMarkdown>
                </section>

                <section className="advancements w-75ch">
                    <h3>Advancements</h3>
                    <table className="modal-table">
                        <thead>
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
            </div>
        </>
    )
}