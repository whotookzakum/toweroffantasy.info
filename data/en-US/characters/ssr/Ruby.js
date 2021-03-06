const ruby = {
    name: "Ruby",
    uri: "ruby",
    imgSrc: "ruby.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 9,
                start: "25 Apr 2022",
                end: "13 May 2022",
                duration: "18d",
                week: "20~22"
            }
        ]
    },
    weapon: {
        name: "Sparky",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "11.50"],
        charge: ["A", "8.00"],
        materials: ["flame", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Flame Resonance",
                description: "When equipped with **2** or more Flame weapons, increase Flame ATK by **20%** and Flame Resistance by **40%**, taking effect in the background."
            }
        },
        advancement: {
            star1: `[Scorching Heat] Increases Sparky's basic attack damage to **182%**. Weapon Skill cooldown reduced to **24** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `[Scorching Heat] Incidental fire damage increased by **18%**; scorch settlement multiplier increased to **150%**.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `Each time Sparky's basic attack hits an enemy unit **75** weapon charge is restored, cooldown 0.9 seconds. During [Ultimate Heat], Shatter is increased by **25%**.`,

            star6: `[Scorching Heat] Increases Sparky's basic attack damage to **240%** and doubles the effectiveness of [Heat]. Weapon Skill cooldown reduced to **16** seconds.`
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["ruby", "samir", "tsubasa", "crow"],
            set4: ["ruby"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `After releasing weapon skill, fire attack is increased by **15%/18%/21%/25%** for **25** seconds, the effect is triggered by different star levels, the effect is not stackable.`,

        set4: `After releasing the weapon skill, gain (mastery) for **15** seconds, cooldown **15** seconds (different of levels (mastery) shares the cooldown), (mastery) cannot be stacked. Each time the basic attack hits the target, the fire damage is increased by **4%/5%/6%/7%** which lasts until the end of (mastery), stacks up to **6** levels, adding up to **1** level every **0.2** seconds, after **6** levels are added, you get a shield to resist **1** damage.`
    },

    awakening: {
        trait1200: `Enemies within **5** meters of Dolly receive **8%** more Flame damage, does not stack.`,

        trait4000: `Enemies within **5** meters of Dolly receive **8%** more Flame damage, does not stack. After throwing Dolly, increase Flame ATK by **12%** for **10** seconds, does not stack.`,

        giftCategories: ['games', 'toys', 'vera'],

        gifts: [
            [80, "princeTataFigure"],
            [60, "linyeFigure"],
            [40, "bunnyDoll"],
            [30, "strangeFragment"],
            [15, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '140 cm',
        birthplace: '???',
        horoscope: 'Cancer',
        birthday: '15 July',
        voiceActors: {
            jp: "",
            en: "",
            cn: "??????"
        }
    }
}

export default ruby;