const cobalt = {
    name: "Cobalt-B",
    uri: "cobalt-b",
    imgSrc: "cobalt-b.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 2,
                start: "8 Jan 2022",
                end: "26 Jan 2022",
                duration: "18d",
                week: "4~7"
            },
            {
                bannerNo: 8,
                subtext: "Standard afterwards",
                start: "13 Apr 2022",
                end: "27 Apr 2022",
                duration: "14d",
                week: "18~20"
            }
        ]
    },
    weapon: {
        name: "Blazing Revolver",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.50"],
        charge: ["A", "10.00"],
        materials: ["flame", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Flame Resonance",
                description: 
                    `Increase flame ATK by **15%** and flame resistance by **25%**. Activate by equipping **2** or more flame weapons. This set effect also works with weapons in the off-hand slot. Effect cannot be stacked.`
            }
        },
        advancement: {
            star1: "When using the weapon skill, add **2%** of the enemy's max HP as bonus damage, up to **200%** of ATK.",

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 'Using the skill or dodge attack on burning targets will additionally apply *Ionic Burn*, dealing **90%** of ATK as Flame damage every second for **10** seconds.',

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: "*Ionic Burn* damage increased to **140%** and dodge attacks from any weapon will refresh the burn's duration.",

            star6: "The skill *Barrage* has a burning effect that lasts for **15** seconds. Hitting a target with any weapon's dodge attack reduces the cooldown of *Barrage* by **4** seconds, up to once every **1.5** seconds. Damage over time effects trigged from a dodge attack can also trigger the effect."
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["samir", "crow"],
            set4: ["cobalt-b", "samir"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `Restore 1 dodge every **4** dodges. Dodge attacks add burn to the target, dealing **13%/17%/21%/25%** attack damage per second for **10** seconds.`,

        set4: `Increases damage by **13%/17%/21%/25%** to targets with abnormal statuses.`
    },

    awakening: {
        trait1200: `When Cobalt-B releases a discharge skill, restore **50** - **120** points of energy charge at random.`,

        trait4000: `When Cobalt-B releases a discharge skill, restore **90** - **180** points of energy charge at random.`,

        giftCategories: ['metalware', 'collectibles', 'limited-edition'],

        gifts: [
            [80, "kitchenware", "goldCoin"],
            [60, "seal", "tataCards", "foxFigure", "catFigure", "bearFigure", "tataFigure", "present", "psp", "linyeFigure", "pearl"],
            [30, "necklace", "toolbox", "strangeFragment"],
            [15, "dumbbells", "snackBox", "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '157 cm',
        birthplace: 'Crown',
        horoscope: 'Cancer',
        birthday: '26 Jun',
        voiceActors: {
            jp: "川澄綾子 (Ayako Kawasumi)",
            en: "Stephanie Kerbis",
            cn: "陈睿婕"
        }
    },

    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: "",
                    description: ``
                }
            }
        }
    }
}

export default cobalt;