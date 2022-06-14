var frigg = {
    name: "Frigg",
    rarity: "SSR",
    wepName: "Balmung",
    element: "ice",
    reso: "damage",
    shieldBreak: ["8.00", "a"],
    energyCharge: ["8.00", "a"],
    materials: [frigg.element, "red", "black"],
    wepBaseStats: [attack, health, crit],
    exclusiveEffect: `After using the Weapon Skill **Fimbulwinter**, a large ice field will be placed at your position, lasting  **25** seconds. Inside the ice field, dodges will not be consumed while using Frigg's weapon, and gain the effect Frozen Domain I: when using Ice weapons, increase Ice ATK by **15%** and Shatter by **25%**.`,
    
    awakening: [
            // 1 star
            `Gain **1** point of Frost every time you deal **550%** of Ice ATK with any element while inside the ice field, up to **10** points. When the ice field expires, inflict burst damage for ( Frost points &times; **95%** &times; Ice ATK ) to all enemies within the area. Lose **1** Frost point every **3** seconds that you are outside of the field.`,
            // 2 star
            `Increase the current weapon's base HP growth by **16%**.`,
            // 3 star
            `Maximum Frost points increased to **15**. Using an Ice weapon's Discharge Skill inside the ice field inflicts ( Frost points + 5 ) &times; **25%** &times Ice ATK to all enemies in the field.`,
            // 4 star
            `Increase the current weapon's base ATK growth by **32%**.`,
            // 5 star
            `Using an Ice weapon to break a shield inside the ice field will freeze the target for **2** seconds and deal an additional ( Frost points &times; **35%** &times; Ice ATK ) damage (doubled if the target cannot be frozen).`,
            // 6 star
            `Reaching **15** Frost points while inside the ice field will grant the additional effect Frozen Domain II: when using Ice weapons, increase Ice ATK by **25%**.`
        ],

    chipEffect: [
            // 2 set
            `When switching from ice weapon to ice weapon, the ice attack power is increased by **15%/18%/21%/25%** for **10** seconds. This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when  multiple sets are equipped.`,
        
            // 4 set
            `When the ice field is released by the weapon Balmung, the enemy targets within the ice field take **60%/75%/90%/105%** ice damage per second. `
        ],

    mimicEffect: [
            // 1200 affininty
            `When entering combat, gain **1.5%** ice ATK every **3** seconds, stack up to **10** times for **5** seconds.`,

            // 4000 affinity
            `When entering battle gain **2.4%** ice ATK every **3** seconds up to **10** stacks, lasts for **5** seconds. Immune to CC effects in the ice domain.`
        ],
    
    traits: {
        gender: 'Female',
        height: '190 cm',
        birthplace: '???',
        horoscope: 'Aquarius',
        birthday: '1 Feb'
    },
    
    gifts: [
        [60, present, tataCards, pearl, peppaFigure, catFigure, kitchenware],
        [30, juicePouch, suit, toolbox, perfume, strangeFragment],
        [15, flowers, dumbbells, scarf]
    ],
    giftPrefs: ['metalware', 'everyday-items'],
    
    recChips: [
            ['samir', 2],
            ['karasuma', 2],
            ['samir', 4],
            ['frigg', 4],
            ['transportthinking', 3]
        ]
}

export default frigg;