const marc = {
    name: "Marc",
    rarity: "SSR",
    wepName: "Breaking Dawn",
    element: "physical",
    reso: "tank",
    shieldBreak: ["9.00", "a"],
    energyCharge: ["12.00", "s"],
    materials: function() { return [this.element, "red", "black"] },
    // wepBaseStats: [attack, defense, health],
    // Omni Shield? Mecha Shield? Heavy Dimensional/3D Shield?????
    exclusiveEffect: `**Group Play [Guardian]**: When using Re-entry, Form Switch, or Full Shot, inflict **40%** damage to the lowest HP ally for **10** seconds, afterwards restoring **10%** of lost HP, only triggered while using Perseverance Resonance, the effect will not be removed and cannot be triggered again until the end of time.  
    **Solo Play [Amplify]**: Mecha Form gains **50%** physical damage reduction.  
    **Omni Shield**: Mecha basic attack/Double Smash/Impact Slash will give **1** point of Mecha Energy. At **20** points, convert **20%** of your current HP into a [Omni Shield] with **1.5x** your max HP (cannot exceed 1.5x max HP and healing is reduced by 50% while active). The shield lasts for **15** seconds and cannot be gained if you are below **10%** HP. After the duration, **66.7%** of the remaining shield value is converted to HP, and hitting a weak target nets **2** points of energy. When triggering the effect, convert active HP shields into [Omni Shield]. Other HP shields cannot be obtained while active.`,
    
    awakening: [
            // 1 star
            `Activating Re-entry, Form Switch, or Full Shot will instantly grant [Omni Shield].`,
            // 2 star
            `Increase the current weapon's base HP growth by **16%**.`,
            // 3 star
            `When [Omni Shield] breaks or refreshes, increase final damage by **35%** for **20** seconds, does not stack.`,
            // 4 star
            `Increase the current weapon's base HP growth by **32%**.`,
            // 5 star
            `When [Omni Shield] breaks or refreshes, inflict **160%** of ATK + **5%** of lost HP to nearby targets and gains **50** weapon charge points on hit.`,
            // 6 star
            `While [Omni Shield] is active, Physical Resistance is **doubled** and provides Dominance effect. [Omni Shield] can be obtained when another Weapon Skill or Discharge Skill hits the target while the shield is active.`
        ],
    
    chipEffect: [
            // 2 set
            `Adds a life shield of **15%** of your current HP to all teammates after attacking an enemy for **15** seconds, resetting **10** seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by **11%/13%/15%/17%** for **15** seconds and is not stackable. This effect is also active in the background, and is effective for multiple sets up to the maximum star level.`,
            // 4 set
            `Increases attack power by **6%/7.5%/9%/11.5%** and teammates attack power by **3%/3.5%/4.5%/5.75%** for **15** seconds when life shield is granted, stacks up to **3** levels. This will effect is also active in the background, with multiple sets of equipment taking effect up to the maximum star level.`
        ],

    mimicEffect: [
            // 1200 affininty
            `When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'revived' and taunts the surrounding enemies for **5** seconds. While 'revived', you do not take damage, but you cannot perform actions, while recovering **1%** of his maximum life every second and healing received is increased by **20%**. This effect has a cooldown of **10** minutes. Damage from Stinging Eel and Ground Roar is reduced by **50%**.`,

            // 4000 affinity
            `When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'Nirvana' and taunts the surrounding enemies for **5** seconds. While in 'Nirvana', you do not take damage, but you cannot perform actions, while recovering **2%** of his maximum life every second and healing received is increased by **50%**. This effect has a cooldown of **5** minutes. Damage from Stinging Eel and Ground Roar is reduced by **50%**.`
        ],
    
    traits: {
        gender: 'Male',
        height: '192 cm',
        birthplace: '???',
        horoscope: '???',
        birthday: '???'
    },
    
    // gifts: [
    //     [60, kitchenware, present, pearl, bearFigure],
    //     [30, toolbox, strangeFragment],
    //     [15, dumbbells]
    // ],
    giftPrefs: ['metalware'],
    
    recChips: [
            ['marc', 2],
            ['marc', 4],
            ['king', 2],
            ['shiro', 2],
            ['arrogantprovocation', 3],
            ['cleanupagreement', 3]
        ]
}

export default marc;