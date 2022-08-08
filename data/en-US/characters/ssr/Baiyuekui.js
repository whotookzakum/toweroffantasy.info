const baiyuekui = {
    name: "Baiyuekui",
    uri: "baiyuekui",
    imgSrc: "baiyuekui.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 3,
                subtext: "Collaboration Event",
                start: "26 Jan 2022",
                end: "13 Feb 2022",
                duration: "18d",
                week: "7~9"
            },
            {
                bannerNo: 10,
                subtext: "Collaboration Event",
                start: "13 May 2022",
                end: "23 May 2022",
                duration: "10d",
                week: "22~24"
            }
        ]
    },
    weapon: {
        name: "Alaya", //Alaya Vijnana "Base [of] Consciousness"
        element: "volt",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "12.50"],
        charge: ["A", "8.00"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "War Intent",
                description: "When entering combat, trigger War Intent, increasing your final damage by **15%** but accelerating your cellular aging (lose **1%** of your current HP every **5** seconds). The effect disappears when leaving battle or switching weapons. If your HP drops below **50%**, cellular aging stops but the damage boost from War Intent remains (switching weapons causes the effect to disappear)."
            }
        },
        advancement: {
            star1: `**Dodge attacks** gain an additional hit dealing **80%** of ATK + **2.5%** of HP lost.  
                The **Weapon Skill** explodes for an additional **160%** of ATK + **5%** of HP lost.  
                The **Discharge Skill** deals an additional **160%** of ATK + **5%** of lost HP (does not apply to the DoT).`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Increase shatter by **15%**. Breaking a shield releases an instant burst of damage at the target's location, dealing **680%** of ATK to targets within range, or **1500%** of ATK if there is only one target within range.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `When attacked, automatically trigger a **1** second block (immediately negates crowd control), blocking one hit up to **20%** of your max HP. Performing a basic attack during the block period will initiate a **counter attack**, dealing **240%** of ATK and **launching the target airborne**, cooldown **18** seconds. `,

            star6: `While inside the area of the **Discharge Skill** or **Phantasia**, trigger War Intent for **7** seconds, increasing your final damage by **40%** and halting cellular aging (switching weapons causes the effect to disappear).`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                },
                {
                    name: "Aerial Attack",
                    input: ["Jump", "Attack x4"],
                },
                {
                    name: "Whip Kick",
                    input: ["hold:Attack"],
                },
                {
                    name: "Leg Splitter",
                    input: ["Jump", "hold:Attack"],
                    description: "while target is airborne"
                },
                {
                    name: "Earthshaker",
                    input: ["Jump", "hold:Attack"],
                    description: "while target is on the ground"
                },
            ],
            dodge: [
                {
                    name: "Unsheathe",
                    input: ["Arrow keys", "Dodge", "Attack"],
                }
            ]
        },
        recommendedMatrix: {
            set2: ["king", "shiro", "samir", "crow"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `If you have **200~999** charge when switching to this weapon, use **200** charge to gain a **15%/18%/21%/25%** attack boost for **15** seconds, cooldown **5** seconds, does not stack.`,

        set4: `When you delay using a discharge skill, the next discharge skill will deal AoE damage to enemies within 5m. The AoE will increase by **106%/122%/140%/160%** every **0.6** seconds, up to **530%/610%/700%/800%**. The discharge will also increase Shatter by **7%/14%/21%/28%** for **4** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },

    awakening: {
        trait1200: `When Baiyuekui enters combat, increase Volt ATK by **21%**, decreasing over a period of **120** seconds. The effect can be reset after **5** seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by **50%**.`,

        trait4000: `When Baiyuekui enters combat, increase Volt ATK by **33%**, decreasing over a period of **120** seconds. The effect can be reset after **5** seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by **50%**.`,

        giftCategories: ['collectibles', 'limited-edition', 'decorations'],

        gifts: [
            [80, "goldCoin", "catFigure"],
            [60, "kitchenware", "tataFigure", "tataCards", "peppaFigure", "snowglobe", "psp", "foxFigure", "seal", "princeTataFigure", "linyeFigure"],
            [30, "necklace", "elfFigure", "spiderFigure"],
            [15, "photoAlbum", "snackBox", "plant", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '172 cm',
        birthplace: '???',
        horoscope: '???',
        birthday: '???',
        voiceActors: {
            jp: "",
            en: "",
            cn: "夏一可"
        }
    }
}

export default baiyuekui;