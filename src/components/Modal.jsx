import { SSR_CHARACTERS, SR_CHARACTERS } from "../data/en-US/characterList";
import elementalEffects from "../data/en-US/elementalEffects";
import ReactMarkdown from "react-markdown";


function removeSpace(string) {
    return string.toLowerCase().replace(/\s/g, '');
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ModalMenu({ listContent }) {

    const list = listContent.map(character =>
        <li onClick={() => setModalData(character)}>
            {character.chinaOnly && <abbr title="China Exclusive" />}
            <img src={require(`../data/images/avatar/${removeSpace(character.name)}.png`)}
                alt={character.name} />
            <h3>{character.name}</h3>
            <img src={require(`../data/images/${character.weapon.type}.png`)}
                alt={character.weapon.type} />
            <img src={require(`../data/images/${character.weapon.element}.png`)}
                alt={character.weapon.element} />
        </li>
    );

    return (
        <menu className="modal-menu">
            {list}
        </menu>
    );
}

function setModalData(item) {
    Modal(item);
}

export function Modal(item) {
    item = SSR_CHARACTERS[6];

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
    for (const gift of item.awakening.giftCategories) giftCategories.push( <li>{gift}</li> );

    let gifts = [];
    // Gifts are in a 2d array. The inner array's index [0] stores the points earned for that group of gifts.
    for (let group = 0; group < item.awakening.gifts.length; group++) {
        let rarity = 2;
        if (item.awakening.gifts[group][0] > 40) rarity = 4;
        else if (item.awakening.gifts[group][0] > 15) rarity = 3;
        for (let gift = 1; gift < item.awakening.gifts[group].length; gift++) {
            gifts.push(
                <li className="gift">
                    <div className="item-frame" style={{backgroundColor: `var(--color-rarity-${rarity})`}}>
                        <img src={require(`../data/images/awakening/${item.awakening.gifts[group][gift]}.png`)} alt={item.awakening.gifts[group][gift]} />
                    </div>
                    <h4>+{item.awakening.gifts[group][0]}</h4>
                </li>
            );
        }
    }

    return (
        <article className="modal">
            <h1>{item.name}</h1>
            
            { item.chinaOnly && 
                <section>
                    <h2><abbr title="China Exclusive" style={{fontSize: "1.5rem", verticalAlign: "middle"}}/> China Exclusive </h2>
                    {item.name} is currently only available the Chinese version of Tower of Fantasy.<br/>All information on this page is subject to change when {item.name} is released in the Global version.
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
                { item.weapon.bonusEffect && <>{bonusEffects}</> }
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

            <section className="weapon-materials w-75ch">
                <h3>Upgrade Materials</h3>
            </section>

            <section className="weapon-rec-matrices w-75ch">
                <h3>Recommended Matrices</h3>
            </section>




            <h2>Awakening</h2>

            <section className="awakening-traits w-75ch">
                <h3>Passive Traits</h3>
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
                <ul>{giftCategories}</ul>
                <ul className="gifts-grid">{gifts}</ul>
            </section>

        </article >
    );
}