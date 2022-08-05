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
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                },
                {
                    name: "Aerial Attack",
                    input: ["Jump", "Attack x5"],
                },
                {
                    name: "Forbidden Realm",
                    input: ["Attack x2", "hold:Attack"],
                },
                {
                    name: "Gotcha!",
                    input: ["hold:Attack"],
                },
                {
                    name: "Domain Guard",
                    input: ["Jump", "hold:Attack"],
                }
            ],
            dodge: [
                {
                    name: "Dory Out",
                    input: ["Dodge", "Attack"],
                },
            ]
        },
        recommendedMatrix: {
            set2: ["ruby", "samir", "crow"],
            set4: ["ruby"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `After using the weapon skill, Flame ATK is increased by **15%/18%/21%/25%** for **25** seconds. The effect works in the background, and if multiple sets are used, the highest star set will take effect (does not stack).`,

        set4: `After releasing the weapon skill, gain Mastery for **15** seconds, cooldown **15** seconds. While Mastery is active, successful basic attacks increase Flame damage by **4%/5%/6%/7%**, up to **6** stacks, with a cooldown of **0.2** seconds between stacks. At **6** stacks, gain a shield to resist damage **1** time. Mastery cannot be stacked, and different levels of mastery share cooldown.`
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
            cn: "赵爽"
        }
    }
}

export default ruby;