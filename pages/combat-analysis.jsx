const getGroupByBuffName = (inputArray, filterText) => {
    if (filterText) {
        return inputArray.filter(item => item.name.includes(filterText));
    }
    return inputArray.filter(item => !item.name.includes(filterText));
}

const getBuffsByType = (buffType, filters, optgroupLabels, defaultOption) => {
    const buffsArray = damageMultipliers.filter(buff => buff.type === buffType + "Buff");
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
        <select id={buffType + "Buff"}>
            {defaultOption ? <option value={defaultOption}>{defaultOption}</option> : null}
            {allOptgroups}
        </select>
    );
}

export default function CombatPage() {
    const traitBuffs = getBuffsByType(
        "trait",
        ["1200", "4000"],
        ["Trait (1200)", "Trait (4000)"],
        "None"
    );
    const resonanceBuffs = getBuffsByType(
        "resonance",
        ["Balance", "Attack"],
        ["Balance", "Attack"],
        "Other"
    );
    const weaponBuffs = getBuffsByType(
        "weapon",
        ["★", ""],
        ["Advancement Buff", "Weapon Effect"],
        "None"
    );
    const matrixBuffs = getBuffsByType(
        "matrix",
        ["2", "3", "4"],
        ["2-piece set", "3-piece set", "4-piece set"],
        "None"
    );

    return (
        <div>
            <h1>Damage Calculator</h1>
            <h2>Main Multipliers</h2>

            <div className="input-wrapper number">
                <label htmlFor="critRate">Crit Rate</label>
                <div>
                    <input id="critRate" type="number" defaultValue={0} max={100} />
                </div>
            </div>

            <div className="input-wrapper number">
                <label htmlFor="critDamage">Crit Damage</label>
                <div>
                    <input id="critDamage" type="number" defaultValue={50} />
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
                <label htmlFor="wepBuff3">Weapon Buff 3</label>
                {weaponBuffs}
            </div>

            <div className="input-wrapper">
                <label htmlFor="matrixSet1">Matrix Set 1</label>
                {matrixBuffs}
            </div>

            <div className="input-wrapper number">
                <label htmlFor="armorDamageLines">Armor % Damage Lines</label>
                <div>
                    <input id="armorDamageLines" type="number" defaultValue={0} />
                </div>
            </div>

            <div className="input-wrapper number">
                <label htmlFor="miscMultipliers">Any Other Multipliers</label>
                <div>
                    <input id="miscMultipliers" type="number" defaultValue={0} />
                </div>
            </div>

            <div className="input-wrapper">
                <label htmlFor="grievous">Grievous</label>
                <input id="grievous" type="checkbox" />
            </div>

            <div className="input-wrapper">
                <label htmlFor="enemyEleWeakness">Enemy's Elemental Resistance</label>
                <div className="slider-wrapper">
                    <input id="enemyEleWeakness" type="range" min="0" max="2" step="1" defaultValue="0" />
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
                    <input id="enemyEleWeakness" type="range" min="0" max="3" step="1" defaultValue="0" />
                    <div className="tick-marks">
                        <span>0%</span>
                        <span>30%</span>
                        <span>50%</span>
                        <span>75%</span>
                    </div>
                </div>
            </div>
        </div>
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
]