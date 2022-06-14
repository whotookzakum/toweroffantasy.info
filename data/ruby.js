const ruby = {
    name: "Ruby",
    rarity: "SSR",
    wepName: "Sparky",
    element: "flame",
    reso: "damage",
    shieldBreak: ["11.50", "s"],
    energyCharge: ["8.00", "a"],
    materials: [ruby.element, "green", "blue"],
    wepBaseStats: [attack, health, crit],
    exclusiveEffect: `**Flame Resonance**: When equipped with **2** or more Flame weapons, increase Flame ATK by **20%** and Flame Resistance by **40%**, taking effect in the background.`,
    
    awakening: [
            // 1 star
            `[Scorching Heat] Increases Sparky's basic attack damage to **182%**. Weapon Skill cooldown reduced to **24** seconds.`,
            // 2 star
            `Increase the current weapon's base ATK growth by **16%**.`,
            // 3 star
            `[Scorching Heat] Incidental fire damage increased by **18%**; scorch settlement multiplier increased to **150%**.`,
            // 4 star
            `Increase the current weapon's base ATK growth by **32%**.`,
            // 5 star
            `Each time Sparky's basic attack hits an enemy unit **75** weapon charge is restored, cooldown 0.9 seconds. During [Ultimate Heat], Shatter is increased by **25%**.`,
            // 6 star
            `[Scorching Heat] Increases Sparky's basic attack damage to **240%** and doubles the effectiveness of [Heat]. Weapon Skill cooldown reduced to **16** seconds.`
        ],

    chipEffect: [
            // 2 set
            `After releasing weapon skill, fire attack is increased by **15%/18%/21%/25%** for **25** seconds, the effect is triggered by different star levels, the effect is not stackable.`,
            
            // 4 set
            `After releasing the weapon skill, gain (mastery) for **15** seconds, cooldown **15** seconds (different of levels (mastery) shares the cooldown), (mastery) cannot be stacked. Each time the basic attack hits the target, the fire damage is increased by **4%/5%/6%/7%** which lasts until the end of (mastery), stacks up to **6** levels, adding up to **1** level every **0.2** seconds, after **6** levels are added, you get a shield to resist **1** damage.`
        ],

    mimicEffect: [
            // 1200 affininty
            `Within **5** meters of Dolly, monsters receive **8%** more fire damage, not stackable`,

            // 4000 affinity
            `Within **5** meters of Dolly, monsters receive **8%** more fire damage, not stackable; after throwing Dolly, increase fire ATK by **12%** increases for **10** seconds, not stackable`
        ],
    
    traits: {
        gender: 'Female',
        height: '140 cm',
        birthplace: '???',
        horoscope: 'Cancer',
        birthday: '15 July'
    },
    
    gifts: [
        [80, princeTataFigure],
        [60, linyeFigure],
        [40, bunnyDoll],
        [30, strangeFragment],
        [15, strangePlant]
    ],
    giftPrefs: ['games', 'toys', 'vera'],
    
    recChips: [
            ['ruby', 2],
            ['ruby', 4],
            ['samir', 2],
            ['hane', 2],
            ['karasuma', 2],
            ['sobek', 3]
        ]
}

export default ruby;