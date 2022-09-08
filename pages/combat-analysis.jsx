import { useState } from "react";
import Head from "next/head";
import { setPageTitle } from "../components/Layout";


export default function CombatPage() {

    const [buffValues, setBuffValues] = useState(
        {
            critRate: 0,
            critDamage: 0.5,
            traitBuff: 0,
            resonanceBuff: 0,
            weaponBuff1: 0,
            weaponBuff2: 0,
            weaponBuff3: 0,
            matrixBuff1: 0,
            matrixBuff1Stars: 0,
            matrixBuff2: 0,
            matrixBuff2Stars: 0,
            armorDamageLines: 0,
            miscMultipliers: 0,
            grievous: 0,
            enemyEleResistance: 0,
            enemyEleWeakness: 0
        }
    );

    const getGroupByBuffName = (inputArray, filterText) => {
        if (filterText) {
            return inputArray.filter(item => item.name.includes(filterText));
        }
        return inputArray.filter(item => !item.name.includes(filterText));
    }

    const getBuffsByType = (buffType, filters, optgroupLabels, defaultOption, instanceNumber) => {
        const buffsArray = damageMultipliers.filter(buff => buff.type === buffType);
        (instanceNumber) ? buffType += instanceNumber : null;
        const allOptgroups = [];
        filters.forEach((filter, index) => {
            const optionsArray = getGroupByBuffName(buffsArray, filter);
            const optionsElements = optionsArray.map(buff =>
                <option value={buff.type + buff.id} key={buff.id}>
                    {buff.name}
                </option>
            );
            const thisOptgroup = <optgroup label={optgroupLabels[index]}>{optionsElements}</optgroup>;
            allOptgroups.push(thisOptgroup);
        });
        return (
            <select id={buffType} onChange={(e) => handleChange(e)}>
                {defaultOption ? <option value={defaultOption}>{defaultOption}</option> : null}
                {allOptgroups}
            </select>
        );
    }

    function handleChange(e) {
        let id = e.target.id;
        const itemType = e.target.type;
        let result;

        switch (itemType) {
            case "number":
                if (id === "critRate" && e.target.value > 100) {
                    e.target.value = 100;
                }
                else if (e.target.value < 0) {
                    e.target.value = 0;
                }
                result = parseFloat(e.target.value) / 100;
                break;
            case "select-one":
                const value = e.target.value;
                const buffId = value.split("Buff").pop();
                console.log(e.target.id);
                console.log(buffId);
                const buffData = damageMultipliers.find(buff => buff.id === buffId);
                if (e.target.id.includes("matrixBuff1")) {
                    result = buffData.value[buffValues.matrixBuff1Stars];
                }
                else if (e.target.id.includes("matrixBuff2")) {
                    result = buffData.value[buffValues.matrixBuff2Stars];
                }
                else {
                    result = buffData.value;
                }
                console.log(result);
                break;
            case "checkbox":
                if (id === "grievous") {
                    result = e.target.checked ? 0.2 : 0;
                }
                break;
            case "range":
                let values;
                if (id === "enemyEleResistance") {
                    values = [0, 0.5, 0.65];
                }
                else if (id === "enemyEleWeakness") {
                    values = [0, 0.3, 0.5, 0.75, 1.2];
                }
                result = values[e.target.value];
                break;
            case "radio":
                id = e.target.name;
                result = parseFloat(e.target.value);
                break;
            default: break;
        }
        setBuffValues({ ...buffValues, [id]: result });
        console.log(buffValues);
    }

    const traitBuffs = getBuffsByType(
        "traitBuff",
        ["1200", "4000"],
        ["Trait (1200)", "Trait (4000)"],
        "None"
    );
    const resonanceBuffs = getBuffsByType(
        "resonanceBuff",
        ["Balance", "Attack"],
        ["Balance", "Attack"],
        "Other"
    );
    const weaponBuffs1 = getBuffsByType(
        "weaponBuff",
        ["★", ""],
        ["Advancement Buff", "Weapon Effect"],
        "None",
        1
    );
    const weaponBuffs2 = getBuffsByType(
        "weaponBuff",
        ["★", ""],
        ["Advancement Buff", "Weapon Effect"],
        "None",
        2
    );
    const weaponBuffs3 = getBuffsByType(
        "weaponBuff",
        ["★", ""],
        ["Advancement Buff", "Weapon Effect"],
        "None",
        3
    );
    const matrixBuffs1 = getBuffsByType(
        "matrixBuff",
        ["2", "3", "4"],
        ["2-piece set", "3-piece set", "4-piece set"],
        "None",
        1
    );
    const matrixBuffs2 = getBuffsByType(
        "matrixBuff",
        ["2", "3", "4"],
        ["2-piece set", "3-piece set", "4-piece set"],
        "None",
        2
    );


    const dmgFromNoncrits = (1 - buffValues.critRate);
    var dmgFromCrits = (1 + buffValues.critDamage) * buffValues.critRate;
    const totalDmgInt =
        1 *
        (dmgFromNoncrits + dmgFromCrits) *
        (1 - buffValues.enemyEleResistance) *
        (1 + buffValues.enemyEleWeakness) *
        (1 + buffValues.armorDamageLines) *
        (1 + buffValues.traitBuff) *
        (1 + buffValues.resonanceBuff) *
        (1 + buffValues.grievous) *
        (1 + buffValues.miscMultipliers);

    const totalDmgPercent = Math.round(totalDmgInt * 100 * 100) / 100 + "%";

    return (
        <>
            <Head>
                <title>{setPageTitle('Combat Analysis')}</title>
                <meta name="description" content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!" />
            </Head>
            <img className="bg-img" src="/static/images/baiandmarc.webp" alt="Background" style={{ top: "-100px", objectPosition: "400px" }} />

            <div>
                <h1>Damage Calculator</h1>
                <h2>Main Multipliers</h2>

                <div>
                    <p>Crit rate: {buffValues.critRate}</p>
                    <p>Crit damage: {buffValues.critDamage}</p>
                    <p>Simulacrum trait: {buffValues.traitBuff}</p>
                    <p>Resonance: {buffValues.resonanceBuff}</p>
                    <p>Weapon 1's buff: {buffValues.weaponBuff1}</p>
                    <p>Weapon 2's buff: {buffValues.weaponBuff2}</p>
                    <p>Weapon 3's buff: {buffValues.weaponBuff3}</p>
                    <p>Matrix 1's buff: {buffValues.matrixBuff1}</p>
                    <p>Matrix 2's buff: {buffValues.matrixBuff2}</p>
                    <p>Damage lines from armor: {buffValues.armorDamageLines}</p>
                    <p>Grievous: {buffValues.grievous}</p>
                    <p>Any other multipliers: {buffValues.miscMultipliers}</p>
                    <p>Enemy's elemental resistance: {buffValues.enemyEleResistance}</p>
                    <p>Enemy's elemental weakness: {buffValues.enemyEleWeakness}</p>
                    <p>Total Damage: {totalDmgPercent}</p>
                </div>

                <div className="input-wrapper number">
                    <label htmlFor="critRate">Crit Rate</label>
                    <div>
                        <input id="critRate" type="number" defaultValue={0} max={100} min={0} onChange={(e) => handleChange(e)} />
                    </div>
                </div>

                <div className="input-wrapper number">
                    <label htmlFor="critDamage">Crit Damage</label>
                    <div>
                        <input id="critDamage" type="number" defaultValue={50} min={0} onChange={(e) => handleChange(e)} />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="simulacrumTrait">Simulacrum Trait</label>
                    {traitBuffs}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="resonance">Resonance</label>
                    {resonanceBuffs}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="weaponBuff1">Weapon 1 Buff</label>
                    {weaponBuffs1}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="weaponBuff2">Weapon 2 Buff</label>
                    {weaponBuffs2}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="weaponBuff3">Weapon 3 Buff</label>
                    {weaponBuffs3}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="matrixBuff1">Matrix Set 1</label>
                    {matrixBuffs1}

                </div>
                <input id="matrixBuff1Star0" type="radio" value="0" name="matrixBuff1Stars" onChange={(e) => handleChange(e)} defaultChecked />
                <label htmlFor="matrixBuff1Star0">0★</label>

                <input id="matrixBuff1Star1" type="radio" value="1" name="matrixBuff1Stars" onChange={(e) => handleChange(e)} />
                <label htmlFor="matrixBuff1Star1">1★</label>

                <input id="matrixBuff1Star2" type="radio" value="2" name="matrixBuff1Stars" onChange={(e) => handleChange(e)} />
                <label htmlFor="matrixBuff1Star2">2★</label>

                <input id="matrixBuff1Star3" type="radio" value="3" name="matrixBuff1Stars" onChange={(e) => handleChange(e)} />
                <label htmlFor="matrixBuff1Star3">3★</label>

                <div className="input-wrapper">
                    <label htmlFor="matrixBuff2">Matrix Set 2</label>
                    {matrixBuffs2}
                </div>

                <div className="input-wrapper number">
                    <label htmlFor="armorDamageLines">Armor % Damage Lines</label>
                    <div>
                        <input id="armorDamageLines" type="number" defaultValue={0} onChange={(e) => handleChange(e)} />
                    </div>
                </div>

                <div className="input-wrapper number">
                    <label htmlFor="miscMultipliers">Any Other Multipliers</label>
                    <div>
                        <input id="miscMultipliers" type="number" defaultValue={0} onChange={(e) => handleChange(e)} />
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="grievous">Grievous</label>
                    <input id="grievous" type="checkbox" onChange={(e) => handleChange(e)} />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="enemyEleResistance">Enemy's Elemental Resistance</label>
                    <div className="slider-wrapper">
                        <input id="enemyEleResistance" type="range" min="0" max="2" step="1" defaultValue="0" onChange={(e) => handleChange(e)} />
                        <div className="tick-marks">
                            <span>0%</span>
                            <span>50%</span>
                            <span>65%</span>
                        </div>
                    </div>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="enemyEleWeakness">Enemy's Elemental Weakness</label>
                    <div className="slider-wrapper">
                        <input id="enemyEleWeakness" type="range" min="0" max="4" step="1" defaultValue="0" onChange={(e) => handleChange(e)} />
                        <div className="tick-marks">
                            <span>0%</span>
                            <span>30%</span>
                            <span>50%</span>
                            <span>75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const damageMultipliers = [
    {
        name: "Crow (1200)",
        type: "traitBuff",
        id: "Crow1200",
        value: 0.06,
        buffStat: "damage",
        condition: "when not in a team"
    },
    {
        name: "Crow (4000)",
        type: "traitBuff",
        id: "Crow4000",
        value: 0.10,
        buffStat: "damage",
        condition: "when not in a team"
    },
    {
        name: "Samir (1200)",
        type: "traitBuff",
        id: "Samir1200",
        value: 0.12,
        buffStat: "damage"
    },
    {
        name: "Samir (4000)",
        type: "traitBuff",
        id: "Samir4000",
        value: 0.20,
        buffStat: "damage"
    },
    {
        name: "Balance (Solo)",
        type: "resonanceBuff",
        id: "BalanceSolo",
        value: 0.05,
        buffStat: "damage"
    },
    {
        name: "Balance (Team)",
        type: "resonanceBuff",
        id: "BalanceTeam",
        value: 0.25,
        buffStat: "damage"
    },
    {
        name: "Attack (Solo)",
        type: "resonanceBuff",
        id: "AttackSolo",
        value: 0.10,
        buffStat: "damage"
    },
    {
        name: "Attack (Team)",
        type: "resonanceBuff",
        id: "AttackTeam",
        value: 0.50,
        buffStat: "damage"
    },
    {
        name: "Tsubasa 1★",
        type: "weaponBuff",
        id: "Tsubasa1",
        value: 0.15,
        buffStat: "damage"
    },
    {
        name: "Tsubasa 6★",
        type: "weaponBuff",
        id: "Tsubasa6",
        value: 0.25,
        buffStat: "damage"
    },
    {
        name: "Crow (2)",
        type: "matrixBuff",
        id: "Crow2",
        value: [0.24, 0.30, 0.36, 0.42],
        uptime: 0.6,
        buffStat: "crit damage"
    },
    {
        name: "Samir (2)",
        type: "matrixBuff",
        id: "Samir2",
        value: [0.10, 0.13, 0.16, 0.20],
        buffStat: "damage"
    },
    {
        name: "Shiro (2)",
        type: "matrixBuff",
        id: "Shiro2",
        value: [0.15, 0.19, 0.225, 0.26],
        uptime: 0.5,
        buffStat: "damage"
    },
    {
        name: "Tsubasa (2)",
        type: "matrixBuff",
        id: "Tsubasa2",
        value: [0.14, 0.16, 0.18, 0.20],
        condition: "when there are no enemies within 4 meters",
        buffStat: "damage"
    },
    {
        name: "Sobek (3)",
        type: "matrixBuff",
        id: "Sobek3",
        value: [0.18, 0.225, 0.27], // 0.06, 0.075, 0.09 up to 3 enemies
        condition: "when there are 3 enemies nearby",
        buffStat: "damage"
    },
    {
        name: "None",
        id: "None",
        value: 0
    },
    {
        name: "Other",
        id: "Other",
        value: 0
    }
]