const nemesis = {
    name: "Nemesis",
    uri: "nemesis",
    imgSrc: "nemesis.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 5,
                start: "05 Mar 2022",
                end: "24 Mar 2022",
                duration: "19d",
                week: "12~15"
            },
            {
                bannerNo: 13,
                subtext: "Standard in September",
                start: "23 Jun 2022",
                end: "9 Jul 2022",
                duration: "16d",
                week: "28~30"
            }
        ]
    },
    weapon: {
        name: "Venus",
        element: "volt",
        type: "support",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["A", "8.00"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Volt Resonance",
                description: "When equipped with **2** or more Volt weapons, increase Volt ATK by **20%** and Volt Resistance by **40%**, taking effect in the background."
            }
        },
        advancement: {
            star1: `Activating the **Weapon Skill** or **Discharge Skill** creates **1** Electrode, immediately grants **5** levels of Chain Heal Enhancement, and releases a healing chain that heals nearby friendly units for **135%** of ATK.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Electrodes release an **electric current** every **6** seconds, dealing up to **389%** of ATK within its range.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `After using the **Weapon Skill**, increase Volt ATK by ( **10** + Your Electrode Count &times; **10** ) % for **25** seconds.`,

            star6: `Up to **2** Electrodes can be created. When a new electrode appears, it replaces the one furthest from you.`
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
                    name: "Charge Pulse",
                    input: ["hold:Attack"],
                },
                {
                    name: "Forward Pursuit",
                    input: ["Attack", "hold:Attack"],
                }
            ],
            dodge: [
                {
                    name: "Dodge Attack",
                    input: ["Arrow keys", "Dodge", "Attack"],
                },
            ]
        },
        recommendedMatrix: {
            set2: ["nemesis", "cocoritter"],
            set4: ["nemesis", "cocoritter"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `When healing a target, the healed target's Volt ATK is increased by **15%/18%/21%/25%** for **20** seconds. The effect does not stack, and only the highest level will take effect when using multiple sets.`,

        set4: `When healing yourself or your own electrodes, the healed target gains a chance to Lightning Strike; the next attack within **30** seconds deals **300%/375%/450%/525%** of Volt ATK (half for electrodes) as Volt damage to the first target hit. Can only be triggered again after **10** seconds. Lightning Strike is not stackable, and only the highest level will take effect when using multiple sets.`
    },

    awakening: {
        trait1200: `When an electrode is summoned, all enemies within **30** metres of the electrode take damage equal to **60%** of Volt ATK and all allies (including yourself) are healed for **120%** of their ATK.`,

        trait4000: `When an electrode is summoned, all enemies within **30** metres of the electrode take damage equal to **100%** of Volt ATK and all allies (including yourself) are healed for **200%** of their ATK.`,

        giftCategories: ['toys', 'everyday-items', 'decorations'],

        gifts: [
            [80, "peppaFigure", "princeTataFigure"],
            [60, "tataCards", "present", "snowglobe", "foxFigure", "catFigure"],
            [30, "tataPlush", "suit", "catPlush", "perfume", "spiderFigure", "elfFigure", "robotFigure", "bunnyDoll"],
            [15, "flowers", "photoAlbum", "plant", "scarf", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '165 cm',
        birthplace: '???',
        horoscope: 'Gemini',
        birthday: '25 May',
        voiceActors: {
            jp: "",
            en: "",
            cn: "宋媛媛"
        }
    }
}

export default nemesis;