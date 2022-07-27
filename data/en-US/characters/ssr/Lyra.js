const lyra = {
    name: "Lyra",
    uri: "lyra",
    imgSrc: "lyra.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 16,
                start: "29 Jul 2022",
                end: "Aug 2022",
                duration: "18d",
                week: "33~"
            }
        ]
    },
    weapon: {
        name: "Vespers",
        element: "physical",
        type: "support",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "12.00"],
        charge: ["A", "11.00"],
        materials: ["physical", "black", "red"],
        bonusEffect: {
            effect1: {
                title: `Physical Resonance`,
                description: `When equipped with **2** or more Physical weapons, increase Physical ATK by **20%** and Physical Resistance by **40%**, taking effect in the background.`
            }
        },
        advancement: {
            star1: `When using any weapon skill or discharge skill, if your personal Guardian count is maxed, your Guardians' durations will be refreshed, and deal damage equal to the number of guardians on the field * **100%** of Physical ATK, (maximum 8 guardians for supports and 6 for non-supports).`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Increases Guardian damage by **20%**. Using any weapon skill or discharge skill while you have the Blessing Resonance will increase Guardian final damage by **15%** for 10 seconds.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: 
                `Triggering Guardian of Forgiveness 5 times protects you and your guarded target from fatal damage **1** time. Afterwards, the Guardian of Forgiveness will be consumed and restore **15%** HP (does not take effect in Apex League).
                Triggering Guardian of Repentance 5 times protects you from fatal damage **2** times. Can protect up to **5** maximum times, after which one usage will be consumed to restore **15%** HP (does not take effect in Apex League).`,

            star6: `Using any weapon skill or discharge skill will increase your final damage and healing equivalent to the number of Guardians. Each Guardian will increase final damage and healing by **3%** for a maximum of **15%** for 25 seconds.`
        },
        abilities: [],
        recommendedMatrix: {
            set4: ["lyra"],
            set2: ["lyra", "samir", "crow"]
        }
    },

    matrix: {
        set2: `Using this weapon grants a **20%/25%/30%/35% all ATK buff, and healing received is increased by up to 100% based on missing health.`,

        set4: `Dealing Physical damage grants a 5% Physical damage buff with a cooldown of 0.1 seconds, stacking up to 5 times. When fully stacked, gain an additional **6%/10%/14%/18%** Physical damage buff for 5 seconds. Dodging grants up to 3 stacks of Block for 10 seconds, blocking up to 60% of current health and at least 20% of max health.`
    },

    awakening: {
        trait1200: `While you have Blessing Resonance active, increase the HP of all team members by 12.5%, does not stack.`,

        trait4000: `While you have Blessing Resonance active, increase the HP of all team members by 12.5%, does not stack. Increase your own HP an additional 12.5%.Each time you successfully release a skill while having Hyperbody, or your health is greater than 50%, provide 12 seconds of Hyperbody to all allies.`,

        giftCategories: ['everyday-items', 'vera'],

        gifts: [
            [60, "princeTataFigure", "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [15, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '174 cm',
        birthplace: '???',
        horoscope: 'Cancer',
        birthday: '23 Jun',
        voiceActors: {
            jp: "",
            en: "",
            cn: "常佳梦"
        }
    }
}

export default lyra;