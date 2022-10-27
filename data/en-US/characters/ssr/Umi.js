const umi = {
    name: "Umi",
    uri: "umi",
    imgSrc: "umi.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 26,
                start: "1 Nov 2022",
                end: "2022",
                duration: "d",
                week: "48~"
            }
        ]
    },
    weapon: {
        name: "Mobius",
        element: "physical",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "14.00"],
        charge: ["A", "9.00"],
        materials: ["physical", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Physical Reaction",
                description: 
                    `Increase physical ATK by **20%** and physical resistance by **40%**. Activate by equipping **2** or more physical weapons. This set effect also works with weapons in the off-hand slot. Effect does not stack with Physical Resonance.`
            }
        },
        advancement: {
            star1: 
                `When entering Magic Shadow, gain Mind Puppet, which increases Mobius' physical damage buff to **60%**. During Magic Show, recover **2%** HP and **10** weapon charge every second.`,

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 
                `End Magic Show early to apply continuous AoE damage that lasts for **13** seconds, reduce Mobius' skill cooldown, and temporarily gain **50%** increased physical damage. If Magic Show's remaining duration is **13** seconds or longer before being cancelled, gain **200** weapon charge. 

                The longer the remaining duration of Magic Show before being cancelled, the stronger the buffs. 
                The AoE deals up to **400%** damage per hit (cancel when duration > 13 seconds). Skill cooldown can be reduced by a maximum of **13** seconds. The physical damage buff's duration can be extended up to **20** seconds (this effect does not apply to Mobius).`,

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: 
                `When switching to Mobius, gain **30** points of Preheat Value, cooldown for **17** seconds. When entering Magic State, deal **840%** of ATK as AoE damage to nearby enemies, reducing their physical resistance by **10%** for **20** seconds.`,

            star6: 
                `During Magic Show, Mobius gains an additional whip. Normal attacks and dodge attacks will have a follow up hit, dealing **130%** of ATK. The additional hit is not considered a normal attack.`
        },
        abilities: {},
        recommendedMatrices: [
            // {
            //     name: "Umi",
            //     pieces: 4,
            //     description: "Very high damage buff set effects."
            // },
            // {
            //     name: "Shiro",
            //     pieces: 4,
            //     description: "Great set effects for both shatter and consistent damage increase. Use 4 set for quick fights, otherwise pair with 2-set Samir or 2-set Crow."
            // },
            // {
            //     name: "Crow",
            //     pieces: 2,
            //     description: "High damage matrix set when you have high crit rate."
            // },
            // {
            //     name: "Sobek",
            //     pieces: 3,
            //     description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            // }
        ]
    },

    matrix: {
        set2: ``,

        set4: ``
    },

    awakening: {
        trait1200: `Every time Umi uses **Magic Time**, increase final damage by **12%** for **30** seconds (can not be stacked).`,

        trait4000: `Every time Umi uses **Magic Time**, increase final damage by **23%** for **30** seconds (can not be stacked).`,

        giftCategories: ['toys', 'vera'],

        gifts: [
            [60, "princeTataFigure", "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [15, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '162 cm',
        birthplace: 'Mirroria',
        horoscope: 'Libra',
        birthday: '20 October',
        voiceActors: {
            jp: "",
            en: "",
            cn: "刘雯"
        }
    }
}

export default umi;