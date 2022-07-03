const baiyuekui = {
    name: "Baiyuekui",
    rarity: "SSR",
    chinaOnly: true,
    weapon: {
        name: "Eighth Consciousness", //Alaya Vijnana "Base [of] Consciousness"
        element: "volt",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "12.50"],
        charge: ["A", "8.00"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "unknown",
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
        abilities: [],
        recommendedMatrix: {
            set2: ["king", "shiro", "samir", "crow"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `If you have **200~999** charge when switching to this weapon, use **200** points to gain a **15%/18%/21%/25%** attack boost for **15** seconds, cooldown **5** seconds, does not stack.`,

        set4: `For every **0.6** seconds that a combo is released, the **next** combo will hit the **first** enemy for **106%/122%/140%/160%** ranged damage (5m radius), up to **530%/610%/700%/800%**; shatter increases by **7%/14%/21%/28%** for **4** seconds, does not stack. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },
    
    awakening: {
        trait1200: `When Bai Yuekui enters combat, the electric attack power is increased by **21%**, the effect decays over time and lasts for **120** seconds. The effect can be reset after **5** seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by **50%**.`,

        trait4000: `When Bai Yuekui enters combat, the electric attack power is increased by **33%**, the effect decays over time and lasts for **120** seconds. The effect can be reset after **5** seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by **50%**.`,

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