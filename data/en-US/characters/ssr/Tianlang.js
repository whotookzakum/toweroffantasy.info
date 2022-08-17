const tianlang = {
    name: "Tian Lang",
    uri: "tian-lang",
    imgSrc: "tianlang.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 18,
                subtext: "",
                start: "17 Aug 2022",
                end: "4 Sep 2022",
                duration: "18d",
                week: "36~39"
            }
        ]
    },
    weapon: {
        name: "Powerbreak",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["A", "8.00"],
        charge: ["S", "12.50"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Volt Resonance",
                description: 
                    `Increase volt ATK by **20%** and volt resistance by **40%**. Activate by equipping **2** or more volt weapons. This set's effects do not work with others.`
            }
        },
        advancement: {
            star1: 
                `Charging battery grants 1 stack of Overload, increasing max HP by **20%** but increases damage received by **12%** (except when your HP is lower than 50 &times; volt ATK). Stacks up to **8** times and if not refreshed, lose one stack every **6** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: 
                `Unleash any volt weapon's skill or discharge skill to gain **2** stacks of Overload. At **8** stacks gain immunity to control effects.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: 
                `Every stack of Overload grants a **1.5%** final damage buff.`,

            star6: 
                `Greedy Wolf's lightning conductor effect is increased to: **25%** lightning damage boost for every conductor for **25** seconds.`
        },
        abilities: {
        },
        recommendedMatrix: {
            set2: ["tian-lang"],
            set4: ["tian-lang"]
        }
    },
 
    matrix: {
        set2: 
            `Dealing volt damage has a **40%** chance to release chain lightning, dealing **60%/100%/150%/200%** of volt ATK to up to **7** targets, cooldown **2** seconds. Triggering the lightning chain increases volt damage by **12%** for **6** seconds. This effect works in the background, and if multiple sets are used, only the highest star set will take effect.`,

        set4: 
            `Using a volt weapon's skill or discharge skill increases volt damage by **25%/28%/31%/34%** for **15** seconds. This effect works in the background, and if multiple sets are used, only the highest star set will take effect. `
    },

    awakening: {
        trait1200: `Using a volt weapon's skill or discharge skill grants **1** free dodge, stacking up to **2** times, and increases volt damage by **12%** for **8** seconds, does not stack.`,

        trait4000: `Using a volt weapon's skill or discharge skill grants **1** free dodge, stacking up to **3** times, and increases volt damage by **18%** for **8** seconds, does not stack.`,

        giftCategories: ['collectibles', 'decorations', 'vera'],

        gifts: [
            [80, "princeTataFigure", "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [20, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '185 cm',
        birthplace: 'Mirroria',
        horoscope: 'Aries',
        birthday: '23 Mar',
        voiceActors: {
            jp: "",
            en: "",
            cn: "淦子齐"
        }
    },
}

export default tianlang;