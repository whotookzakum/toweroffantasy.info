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
import { weaponUpgrades } from "../../data/en-US/characters/weaponUpgrades";
import Ads from "../../components/Ads";
import { useEffect } from "react";

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


    const weaponGameVersion = weaponUpgrades[version];
    let wepUpgradesData = weaponGameVersion[simulacrum.rarity];
    if (simulacrum.chinaOnly) {
        wepUpgradesData = weaponUpgrades.china[simulacrum.rarity];
    }
    if (simulacrum.name === "Lin") {
        wepUpgradesData = weaponUpgrades.lin;
    }
    const weaponUpgradeTable = wepUpgradesData.map((data, index) => {

        const augmentMats = data.augmentMatCount.map((value, index) => {
            const thisMat = weapon.materials[index];
            const tier = data.materialTier;
            const matImg = <img src={`/static/images/mat/${thisMat + tier}.webp`} alt="Upgrade Material" />;
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

        const nextLevelCap = wepUpgradesData[index].wepLevelMax;
        const augmentHint = `Req. Wanderer level **${nextLevelCap / 2}**.`;
        // Augmenting a weapon to level 110 requires Wanderer level 55.
        const augmentGoldCost =
            <div className="upgrade-material">
                <div className="item-frame rarity-3">
                    <img src={`/static/images/coin/gold.webp`} alt="Gold" />
                </div>
                <h4>{data.augmentGoldCost}</h4>
            </div>;

        return (
            <tr key={data.wepLevelMin} >
                <td>{data.wepLevelMin} to {data.wepLevelMax}</td>
                <td>
                    <div className="upgrade-materials">
                        {data.wepLevelMin > 0 && augmentGoldCost}
                        {augmentMats}
                    </div>

                    {data.wepLevelMax > 10 &&
                        <ReactMarkdown>{augmentHint}</ReactMarkdown>
                    }
                </td>
                <td>
                    <div className="upgrade-materials">
                        <div className="upgrade-material">
                            <div className="item-frame rarity-3">
                                <img src={`/static/images/coin/gold.webp`} alt="Gold" />
                            </div>
                            <h4>{data.goldAndExpCost}</h4>
                        </div>
                        <div className="upgrade-material exp">
                            <div className="item-frame rarity-1">
                                <img src={`/static/images/mat/wep_exp1.webp`} alt="Gold" />
                            </div>
                            <h4>{data.goldAndExpCost}</h4>
                        </div>
                    </div>
                </td>
            </tr>
        )
    })

    useEffect(() => {
        if (window !== undefined) {
            window.reloadAdSlots();
        }
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

                    <section>
                        <Ads unit="lb1" />
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
                                        <th><h6>Matrix Set</h6></th>
                                        <th><h6>Explanation</h6></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recommendedMatrices}
                                </tbody>
                            </table>
                            <i>The list above may change when new matrices are added. Check the Chinese version's list as well to see if there are better options in the future.</i>
                        </section>
                    }

                    <section className="weapon-materials w-75ch">
                        <div className="modal-section-header">
                            <h3 className="anchor">Upgrade Materials</h3>
                            {!simulacrum.chinaOnly &&
                                <VersionToggler section="weapon-materials" version={version} setVersion={setVersion} />}
                        </div>
                        <table className="modal-table">
                            <thead style={{ borderColor: elementColor }}>
                                <tr>
                                    <th><h6>Weapon Level</h6></th>
                                    <th><h6>Augmentation Materials</h6></th>
                                    <th><h6>Gold &amp; EXP</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                {weaponUpgradeTable}
                            </tbody>
                        </table>
                        <i>EXP can overflow so the cost may be lower than what is shown on the table. Learn more about upgrading weapons <Link href="/guides/systems/gear"><a>here</a></Link>.</i>
                    </section>

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
                        <i>Learn more about the simulacrum system <Link href="/guides/systems/simulacrum"><a>here</a></Link>.</i>
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
