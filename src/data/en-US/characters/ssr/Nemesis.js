const nemesis = {
    name: "Nemesis",
    rarity: "SSR",
    wepName: "Enlightenment",
    element: "volt",
    reso: "support",
    shieldBreak: ["6.00", "b"],
    energyCharge: ["8.00", "a"],
    materials: function() { return [this.element, "green", "blue"] },
    // wepBaseStats: [attack, health, crit],
    exclusiveEffect: `**Volt Resonance**: When equipped with **2** or more Volt weapons, increase Volt ATK by **20%** and Volt Resistance by **40%**, taking effect in the background.`,
    
    awakening: [
            // 1 star
            `Activating the **Weapon Skill** or **Discharge Skill** creates **1** Electrode, immediately grants **5** levels of Chain Heal Enhancement, and releases a healing chain that heals nearby friendly units for **135%** of ATK.`,
            // 2 star
            `Increase the current weapon's base ATK growth by **16%**.`,
            // 3 star
            `Electrodes release an **electric current** every **6** seconds, dealing up to **389%** of ATK within its range.`,
            // 4 star
            `Increase the current weapon's base ATK growth by **32%**.`,
            // 5 star
            `After using the **Weapon Skill**, increase Volt ATK by ( **10** + Your Electrode Count &times; **10** ) % for **25** seconds.`,
            // 6 star
            `Up to **2** Electrodes can be created. When a new electrode appears, it replaces the one furthest from you.`
        ],

    chipEffect: [
            // 2 set
            `When healing a target, the healed target's Volt ATK is increased by **15%/18%/21%/25%** for **20** seconds. The effect does not stack, and only the highest level will take effect when using multiple sets.`,
            // 4 set
            `When healing yourself or your own electrodes, the healed target gains a chance to Lightning Strike; the next attack within **30** seconds deals **300%/375%/450%/525%** of Volt ATK (half for electrodes) as Volt damage to the first target hit. Can only be triggered again after **10** seconds. Lightning Strike is not stackable, and only the highest level will take effect when using multiple sets.`
        ],

    mimicEffect: [
            // 1200 affininty
            `When an electrode is summoned, all enemies within **30** metres of the electrode take **60%** electric damage and all allies (including yourself) are healed for **120%** of their attack power.`,

            // 4000 affinity
            `When an electrode is summoned, all enemies within **30** metres of the electrode take **100%** electric damage and all allies (including yourself) are healed for **200%** of their attack power.`
        ],
    
    traits: {
        gender: 'Female',
        height: '165 cm',
        birthplace: '???',
        horoscope: 'Gemini',
        birthday: '25 May'
    },
    
    // gifts: [
    //     [80, peppaFigure, princeTataFigure],
    //     [60, tataCards, present, snowglobe, foxFigure, catFigure],
    //     [30, tataPlush, suit, catPlush, perfume, spiderFigure, elfFigure, robotFigure, bunnyDoll],
    //     [15, flowers, photoAlbum, plant, scarf, pinwheel]
    // ],
    giftPrefs: ['toys', 'everyday-items', 'decorations'],
    
    recChips: [
            ['nemesis', 2],
            ['nemesis', 4],
            ['coco', 2],
            ['coco', 4],
            ['guardscode', 3]
        ]
}

export default nemesis;