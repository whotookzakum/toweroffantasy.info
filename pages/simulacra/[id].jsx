import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getSimulacrumData, getAllSimulacrumIds } from "../../lib/simulacra";
import ReactMarkdown from 'react-markdown';
import { hyphenToSpace } from "../../utils/stringHelper";
import CNTag from "../../components/CNTag";
import elementalEffects from "../../data/en-US/elementalEffects";
import { Modal } from "../../components/Modal";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { MATRICES } from "../../data/en-US/matrices/matrixList";
import _ from 'lodash';
import { VersionToggler } from "../../components/VersionToggler";

export async function getStaticProps({ params }) {
    const simulacrum = await getSimulacrumData(params.id);
    return {
        props: {
            simulacrum,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllSimulacrumIds();
    return {
        paths,
        fallback: false,
    };
}

export default function SimulacrumPage({ simulacrum, version, setVersion }) {
    const cnData = _.cloneDeep(simulacrum);
    const chinaData = _.merge(cnData, cnData.cnData);
    const dataVersion = (version === "global" && !simulacrum.chinaOnly) ? simulacrum : chinaData;
    const weapon = dataVersion.weapon;
    const awakening = dataVersion.awakening;
    const rarity = (simulacrum.rarity === "SSR") ? 1 : 0;
    const elementColor = `var(--color-${weapon.element})`;
    const advancements = Object.entries(weapon.advancement).map(([star, effect]) => {
        return (
            <tr key={star}>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown rehypePlugins={[rehypeRaw]}>{effect}</ReactMarkdown></td>
            </tr>
        )
    })
    const getBonusEffects = () => Object.entries(weapon.bonusEffect).map(([key, effect]) => {
        return (
            <div key={key}>
                <h4>{effect.title}</h4>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{effect.description}</ReactMarkdown>
            </div>
        )
    })
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
                <li key={materialUri} className={`item-frame rarity-${rarity}`}>
                    <img src={`/static/images/mat/${materialUri}.webp`} alt={materialUri} />
                </li>
            );
        }
        return result;
    });
    let veraGiftDisclaimer = false;
    const giftCategories = awakening.giftCategories.map(giftCategory => {
        if (giftCategory === "vera") veraGiftDisclaimer = true;
        const style = {
            color: `var(--color-${giftCategory})`,
            borderColor: `var(--color-${giftCategory})`
        };
        return <li key={giftCategory} style={style}>{hyphenToSpace(giftCategory)}</li>;
    })
    const gifts = awakening.gifts.map(group => {
        let rarity = 2;
        if (group[0] > 40)
            rarity = 4;
        else if (group[0] > 15)
            rarity = 3;
        return (group.map((gift, index) => {
            // Skip first index because it holds the points gained from the gifts in the same array i.e. [50, "gift1", "gift2"]
            if (index > 0) {
                return (
                    <li key={gift} className="gift">
                        <div className={`item-frame rarity-${rarity}`}>
                            <img src={`/static/images/awakening/${gift}.webp`} alt={gift} />
                        </div>
                        <h4>+{group[0]}</h4>
                    </li>
                )
            }
        }))
    })
    function getInputs(inputs) {
        return inputs.map((input, index) => <li key={input}><kbd>{input}</kbd></li>)
    }
    function getBreakdown(breakdown) {
        return breakdown.map(step => <li key={step}><ReactMarkdown>{step}</ReactMarkdown></li>)
    }
    const abilitiesArray = Object.entries(weapon.abilities);
    const abilities = abilitiesArray.map(([category, abilityList]) => {
        const abilitiesInThisCategory = abilityList.map(ability => {
            return (
                <div key={ability.name} className="weapon-ability">
                    <h3>{ability.name}</h3>
                    {ability.input &&
                        <ul key={ability.name} className="ability-inputs">
                            {getInputs(ability.input)}
                        </ul>
                    }
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{ability.description}</ReactMarkdown>
                    {ability.breakdown &&
                        <ol>
                            {getBreakdown(ability.breakdown)}
                        </ol>}
                </div>
            )
        });
        return (
            <details key={category}>
                <summary><h4>{category}</h4></summary>
                <div className="details-content">{abilitiesInThisCategory}</div>
            </details>
        )
    })
    const recommendedMatrices = weapon.recommendedMatrices.map(recMatrix => {
        const matrixData = MATRICES.find(mat => mat.name === recMatrix.name);

        return (
            <tr key={recMatrix.name + recMatrix.pieces}>
                <td>
                    <Link href={`/matrices/${matrixData.uri}`}>
                        <a>
                            <div className="img-wrapper">
                                <img src={`/static/images/matrices/${matrixData.imgSrc}`} alt={matrixData.name + " Matrix"} />
                                <i className="tag">x{recMatrix.pieces}</i>
                                {matrixData.chinaOnly && !simulacrum.chinaOnly && <abbr title="China Exclusive" />}
                            </div>
                            <div className="matrix-name">
                                {matrixData.name}
                            </div>
                        </a>
                    </Link>
                </td>
                <td>
                    {recMatrix.description}
                </td>
            </tr>
        )
    });
    const weaponUpgrades = [
        {
            isAugment: false,
            weaponLevel: "0 to 10",
            goldCost: "400"
        },
        {
            isAugment: true,
            weaponLevel: 20,
            goldCost: "400",
            materialCount: [2],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "10 to 20",
            goldCost: "600"
        },
        {
            isAugment: true,
            weaponLevel: 30,
            goldCost: "800",
            materialCount: [2],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "20 to 30",
            goldCost: "900"
        },
        {
            isAugment: true,
            weaponLevel: 40,
            goldCost: "1200",
            materialCount: [3, 3],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "30 to 40",
            goldCost: "1200"
        },
        {
            isAugment: true,
            weaponLevel: 50,
            goldCost: "1600",
            materialCount: [3, 3, 3],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "40 to 50",
            goldCost: "1700"
        },
        {
            isAugment: true,
            weaponLevel: 60,
            goldCost: "2000",
            materialCount: [4, 4, 4],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "50 to 60",
            goldCost: "2200"
        },
        {
            isAugment: true,
            weaponLevel: 70,
            goldCost: "2400",
            materialCount: [6, 6, 6],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "60 to 70",
            goldCost: "2900"
        },
        {
            isAugment: true,
            weaponLevel: 80,
            goldCost: "2800",
            materialCount: [8, 8, 8],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "70 to 80",
            goldCost: "3900"
        },
        {
            isAugment: true,
            weaponLevel: 90,
            goldCost: "3200",
            materialCount: [11, 11, 11],
            materialTier: 1
        },
        {
            isAugment: false,
            weaponLevel: "80 to 90",
            goldCost: "5000"
        },
        {
            isAugment: true,
            weaponLevel: 100,
            goldCost: "3600",
            materialCount: [5, 5, 5],
            materialTier: 2
        },
        {
            isAugment: false,
            weaponLevel: "90 to 100",
            goldCost: "5800"
        },
        {
            isAugment: true,
            weaponLevel: 110,
            goldCost: "4000",
            materialCount: [6, 6, 6],
            materialTier: 2
        },
        {
            isAugment: false,
            weaponLevel: "100 to 110",
            goldCost: "6400"
        },
        {
            isAugment: true,
            weaponLevel: 120,
            goldCost: "4400",
            materialCount: [8, 8, 8],
            materialTier: 2
        },
        {
            isAugment: false,
            weaponLevel: "110 to 120",
            goldCost: "7100"
        },
        {
            isAugment: true,
            weaponLevel: 130,
            goldCost: "4800",
            materialCount: [11, 11, 11],
            materialTier: 2
        },
    ]
    const weaponUpgradeTable = weaponUpgrades.map(data => {

        let materialCount = null;
        if (data.materialCount) {
            materialCount = data.materialCount.map((value, index) => {
                const thisMat = weapon.materials[index];
                const tier = data.materialTier;
                const matImg = <img src={`/static/images/mat/${thisMat + tier}.webp`} alt="Upgrade Material" />
                let rarity = 5;
                if (["flame", "ice", "volt", "physical"].includes(thisMat) && tier < 5) {
                    rarity = tier + 1;
                }
                else if (["red", "green"].includes(thisMat) && tier < 4) {
                    rarity = tier + 2;
                }
                else if (["black", "blue"].includes(thisMat) && tier < 3) {
                    rarity = tier + 3;
                }
                return (
                    <div key={thisMat + tier} className="upgrade-material">
                        <div className={`item-frame rarity-${rarity}`}>
                            {matImg}
                        </div>
                        <h3>x{value}</h3>
                    </div>
                )
            })
        }

        const goldAndExpCost = `${data.goldCost}g, ${data.goldCost} EXP`;
        const materialCost = <>{data.goldCost}g {materialCount}</>

        return (
            <tr key={data.weaponLevel}>
                <td>{data.isAugment && data.weaponLevel / 2}</td>
                <td>{data.isAugment ? `augment to ${data.weaponLevel}` : data.weaponLevel}</td>
                <td>{data.isAugment ? materialCost : goldAndExpCost}</td>
            </tr>
        )
    })
    return (
        <>
            <Head>
                <title>{setPageTitle(simulacrum.name)}</title>
                <meta name="description" content={`Information about the simulacrum ${simulacrum.name} in Tower of Fantasy.`} />
            </Head>
            <Modal item={dataVersion} >
                <div className="modal-body">
                    {simulacrum.chinaOnly && <CNTag name={simulacrum.name} />}
                    <div id="nn_lb1"></div>
                    <div id="nn_lb3"></div>
                    <div id="nn_mobile_mpu1"></div>
                    <div id="nn_mobile_lb1"></div>
                    <div id="nn_mobile_lb2"></div>
                    <div id="nn_lb2"></div>
                    <div id="nn_mobile_mpu2"></div>
                    <div id="nn_player"></div>
                    <h2 className="anchor">Weapon</h2>
                    <div className="weapon-header" style={{ borderColor: elementColor }}>
                        <img className="weapon-image" src={`/static/images/wep/${simulacrum.imgSrc}`} alt={weapon.name} />
                        <div className="weapon-info">
                            <h3>{weapon.name}</h3>
                            <div className="weapon-stat-grid">
                                <div className="weapon-stat">
                                    <img src={`/static/images/${weapon.type}.webp`} alt={weapon.type} />
                                    <div>
                                        <h5>Resonance</h5>
                                        <h4>{weapon.type}</h4>
                                    </div>
                                </div>
                                <div className="weapon-stat">
                                    <img src={`/static/images/${weapon.element}.webp`} alt={weapon.element} />
                                    <div>
                                        <h5>Element</h5>
                                        <h4>{weapon.element}</h4>
                                    </div>
                                </div>
                                <div className="weapon-stat">
                                    <i style={{ color: `var(--color-tier-${weapon.shatter[0].toLowerCase()})` }}>{weapon.shatter[0]}</i>
                                    <div>
                                        <h5>Shatter</h5>
                                        <h4>{weapon.shatter[1]}</h4>
                                    </div>
                                </div>
                                <div className="weapon-stat">
                                    <i style={{ color: `var(--color-tier-${weapon.charge[0].toLowerCase()})` }}>{weapon.charge[0]}</i>
                                    <div>
                                        <h5>Charge</h5>
                                        <h4>{weapon.charge[1]}</h4>
                                    </div>
                                </div>
                                <div className="weapon-stat">
                                    <div className="base-stats">
                                        <div>
                                            <h4>{weapon.baseStats[0]}</h4>
                                            <img src={`/static/images/stats/${weapon.baseStats[0]}.webp`} alt={weapon.baseStats[0]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="weapon-stat">
                                    <div className="base-stats">
                                        <div>
                                            <h4>{weapon.baseStats[1]}</h4>
                                            <img src={`/static/images/stats/${weapon.baseStats[1]}.webp`} alt={weapon.baseStats[1]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="weapon-stat">
                                    <div className="base-stats">
                                        <div>
                                            <h4>{weapon.baseStats[2]}</h4>
                                            <img src={`/static/images/stats/${weapon.baseStats[2]}.webp`} alt={weapon.baseStats[2]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="weapon-effects w-75ch">
                        <div className="modal-section-header">
                            <h3 className="anchor">Weapon Effects</h3>
                            {!simulacrum.chinaOnly &&
                                <VersionToggler section="weapon-effects" version={version} setVersion={setVersion} />}
                        </div>
                        <div>
                            <h4 style={{ color: elementColor }}>{elementalEffects[weapon.element].title}</h4>
                            <ReactMarkdown>{elementalEffects[weapon.element].description(rarity)}</ReactMarkdown>
                        </div>
                        {weapon.bonusEffect && getBonusEffects()}
                    </section>
                    <section className="advancements w-75ch">
                        <div className="modal-section-header">
                            <h3 className="anchor">Advancements</h3>
                            {!simulacrum.chinaOnly &&
                                <VersionToggler section="weapon-advancements" version={version} setVersion={setVersion} />}
                        </div>
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
                            <div className="modal-section-header">
                                <h3 className="anchor">Weapon Abilities</h3>
                                {!simulacrum.chinaOnly &&
                                    <VersionToggler section="weapon-abilities" version={version} setVersion={setVersion} />}
                            </div>
                            {weapon.abilitiesVideoSrc &&
                                <iframe src={weapon.abilitiesVideoSrc} allow="fullscreen" modestbranding={1} />
                            }
                            <>
                                Data reflects unleveled weapons.
                                {abilities}
                            </>
                        </section>
                    }

                    <section className="weapon-materials w-75ch" >
                        <h3 className="anchor">Upgrade Materials</h3>
                        <ul>{weaponMaterials}</ul>
                    </section>

                    <section className="weapon-materials w-75ch">
                        <h3 className="anchor">Upgrade Materials</h3>
                        <table className="modal-table">
                            {/* <thead>
                                <tr>
                                    <th>Req. Wanderer Lv.</th>
                                    <th>Weapon Level</th>
                                    <th>Gold (and EXP)</th>
                                    <th>Materials</th>
                                    
                                </tr>
                            </thead> */}
                            <thead style={{ borderColor: elementColor }}>
                                <tr>
                                    <th><h6>Req. Wanderer Lv.</h6></th>
                                    <th><h6>Weapon Level</h6></th>
                                    <th><h6>Materials</h6></th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td></td>
                                    <td>0 to 10</td>
                                    <td>400g, 400 EXP</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>augment to 20</td>
                                    <td>400g, x2</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>10 to 20</td>
                                    <td>600g, 600 EXP</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>augment to 30</td>
                                    <td>800g, x2</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>20 to 30</td>
                                    <td>900g, 900 EXP</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>augment to 40</td>
                                    <td>1200g, x3 x3</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>30 to 40</td>
                                    <td>1200g, 1200 EXP</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>augment to 50</td>
                                    <td>1600g, x3 x3 x3</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>40 to 50</td>
                                    <td>1700g, 1700 EXP</td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td>augment to 60</td>
                                    <td>2000g, x4 x4 x4</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>50 to 60</td>
                                    <td>2200g, 2200 EXP</td>
                                </tr>
                                <tr>
                                    <td>35</td>
                                    <td>augment to 70</td>
                                    <td>2400g, x6 x6 x6</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>60 to 70</td>
                                    <td>2900g, 2900 EXP</td>
                                </tr>
                                <tr>
                                    <td>40</td>
                                    <td>augment to 80</td>
                                    <td>2800g, x8 x8 x8</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>70 to 80</td>
                                    <td>3900g, 3900 EXP</td>
                                </tr>
                                <tr>
                                    <td>45</td>
                                    <td>augment to 90</td>
                                    <td>3200g, x11 x11 x11</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>80 to 90</td>
                                    <td>5000g, 5000 EXP</td>
                                </tr>
                                <tr>
                                    <td>50</td>
                                    <td>augment to 100</td>
                                    <td>3600g, x5 x5 x5</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>90 to 100</td>
                                    <td>5800g, 5800 EXP</td>
                                </tr>
                                <tr>
                                    <td>55</td>
                                    <td>augment to 110</td>
                                    <td>4000g, x6 x6 x6</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>100 to 110</td>
                                    <td>6400g, 6400 EXP</td>
                                </tr>
                                <tr>
                                    <td>60</td>
                                    <td>augment to 120</td>
                                    <td>4400g, x8 x8 x8</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>110 to 120</td>
                                    <td>7100g, 7100 EXP</td>
                                </tr>
                                <tr>
                                    <td>65</td>
                                    <td>augment to 130</td>
                                    <td>4800g, x11 x11 x11</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>70</td>
                                    <td>augment to 140</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>75</td>
                                    <td>augment to 150</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>80</td>
                                    <td>augment to 160</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>85</td>
                                    <td>augment to 170</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>90</td>
                                    <td>augment to 180</td>
                                    <td></td>
                                </tr>
                            </tbody> */}
                            <tbody>
                                {weaponUpgradeTable}
                            </tbody>
                        </table>
                        <span>Augmenting is the process of raising the level cap of a weapon. By augmenting a weapon to level 60, weapon abilities will be raised to Lv. 6 and the flat number in their descriptions (after the damage %) will be increased.</span>
                        <span>Enhancement costs (EXP and Gold) are 1:1. EXP can overflow so the cost may be lower than what is shown on the table.</span>
                    </section>

                    {simulacrum.rarity === "SSR" &&
                        <section className="weapon-rec-matrices w-75ch">
                            <div className="modal-section-header">
                                <h3 className="anchor">Recommended Matrices</h3>
                                {!simulacrum.chinaOnly &&
                                    <VersionToggler section="recommended-matrices" version={version} setVersion={setVersion} />}
                            </div>
                            <table className="modal-table">
                                <thead style={{ borderColor: elementColor }}>
                                    <tr>
                                        <th>Matrix Set</th>
                                        <th>Explanation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recommendedMatrices}
                                </tbody>
                            </table>
                            <i>The list above may change when new matrices are added. Check the Chinese version's list as well to see if there are better options in the future.</i>
                        </section>
                    }

                    <hr />

                    <h2 className="anchor">Awakening</h2>
                    <section className="awakening-traits w-75ch">
                        <div className="modal-section-header">
                            <h3 className="anchor">Simulacrum Traits</h3>
                            {!simulacrum.chinaOnly &&
                                <VersionToggler section="simulacrum-traits" version={version} setVersion={setVersion} />}
                        </div>
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
                                    <td><ReactMarkdown rehypePlugins={[rehypeRaw]}>{awakening.trait1200}</ReactMarkdown></td>
                                </tr>
                                <tr>
                                    <th>4000</th>
                                    <td><ReactMarkdown rehypePlugins={[rehypeRaw]}>{awakening.trait4000}</ReactMarkdown></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="awakening-gifts w-75ch">
                        <h3 className="anchor">Favorite Gifts</h3>
                        <ul className="gift-categories-grid">{giftCategories}</ul>
                        <ul className="gifts-grid">{gifts}</ul>
                        {veraGiftDisclaimer && <i>Vera characters will receive reduced Awakening Points from Non-Vera gifts.</i>}
                    </section>

                    <hr />

                    <h2 className="anchor">Other Info</h2>
                    <section className="character-bio w-75ch">
                        <h3 className="anchor">Character Profile</h3>
                        <div className="bio-container">
                            <ul>
                                <li>
                                    <h5>Gender</h5>
                                    <h4>{simulacrum.bio.gender}</h4>
                                </li>
                                <li>
                                    <h5>Height</h5>
                                    <h4>{simulacrum.bio.height}</h4>
                                </li>
                                <li>
                                    <h5>Birthplace</h5>
                                    <h4>{simulacrum.bio.birthplace}</h4>
                                </li>
                                <li>
                                    <h5>Horoscope</h5>
                                    <h4>{simulacrum.bio.horoscope}</h4>
                                </li>
                                <li>
                                    <h5>Birthday</h5>
                                    <h4>{simulacrum.bio.birthday}</h4>
                                </li>
                            </ul>
                            <img src={`/static/images/charts/${simulacrum.imgSrc}`} alt="" />
                        </div>
                    </section>
                    <section className="voice-actors w-75ch">
                        <h3 className="anchor">Voice Actors</h3>
                        <ul>
                            {simulacrum.bio.voiceActors.en.length > 0 &&
                                <li>
                                    <h5>English</h5>
                                    <h4>{simulacrum.bio.voiceActors.en}</h4>
                                </li>
                            }
                            {simulacrum.bio.voiceActors.jp.length > 0 &&
                                <li>
                                    <h5>Japanese</h5>
                                    <h4>{simulacrum.bio.voiceActors.jp}</h4>
                                </li>
                            }
                            {simulacrum.bio.voiceActors.cn.length > 0 &&
                                <li>
                                    <h5>Chinese</h5>
                                    <h4>{simulacrum.bio.voiceActors.cn}</h4>
                                </li>
                            }
                        </ul>
                    </section>
                </div>
            </Modal>
        </>
    )
}
