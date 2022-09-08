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
