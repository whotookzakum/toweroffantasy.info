const saki = {
    // 流泉彻心
    name: "Saki Fuwa",
    uri: "saki-fuwa",
    imgSrc: "sakifuwa.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 12,
                start: "03 Jun 2022",
                end: "23 Jun 2022",
                duration: "20d",
                week: "25~28"
            }
        ]
    },
    weapon: {
        name: "Ryusen Toshin",
        element: "ice",
        type: "defense",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "13.90"],
        charge: ["A", "8.00"],
        materials: ["ice", "red", "black"],
        bonusEffect: {
            effect1: {
                title: `Ice Resonance`,
                description: `When equipped with **2** or more Ice weapons, increase Ice ATK by **20%** and Ice Resistance by **40%**, taking effect in the background.`
            }
        },
        advancement: {
            star1: `When Ice Resonance is active, release any weapon skill **5** times in total to clear the cooldown of all weapon skills, and **double** the damage of [Circulation] and [Counterattack] for **25** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Flowing Heart: Sword Shadow [Surge] damage increased to **900%** of Ice ATK.  
                Silent Flow: Sword Shadow [Surge] cooldown reduced to **5** seconds.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Sword Shadow's [Surge] triggers Phantasia upon hitting a target, shares cooldown with Phantasia trigged by dodging.`,

            star6: `Sword Shadow's [Surge] increases your ice damage by **20%** for **15** seconds upon hitting a target. Activating Sword Shadow's block reduces surrounding enemies' ice damage by **25%** for **12** seconds.`
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["crow", "samir"],
            set4: ["samir"],
            set3: ["sobek"]
        } // Saki's 2 and 4 set useful on other ice weapons in the team
    },

    matrix: {
        set2: `While Ice Resonance is active: Every **3** seconds, deal **60%/100%/150%/220%** * Ice ATK to enemies within 10 meters of the surrounding area and apply [Frost] effect: 5% slowing effect for **3.5** seconds, after 3 stacks Freeze the target for **3** seconds (excluding bosses) and increase the target's Ice Damage by **12%** (lasts **18** seconds). These matrices work in the background, and for multiple sets the highest star set will be used.`,

        set4: `Attack the target **10** times and add a 12-second [Frozen] mark: Attack the marked target to increase the ice element damage by **25%/28%/31%/34%**. These matrices work in the background, and for multiple sets the highest star set will be used.`
    },

    awakening: {
        trait1200: `When health is below **70%**, gain **40%** all-element resistance.`,

        trait4000: `When health is below **70%**, gain **40%** all-element resistance and an additional **60%** ice resistance.  
            When blocking with Silent Flow [Surge], provide 3 blocks to the teammate with the lowest health (excluding yourself). Lasting **10** seconds, the block amount will not exceed **15%** of the teammate's maximum health.`,

        giftCategories: ['metalware', 'everyday-items', 'vera'],

        gifts: [
            [60, "princeTataFigure", "linyeFigure"],
            [40, "strangeFragment"],
            [30, "bunnyDoll"],
            [15, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '157 cm',
        birthplace: 'Mirror City',
        horoscope: 'Libra',
        birthday: '11 October',
        voiceActors: {
            jp: "",
            en: "",
            cn: "唐小喜"
        }
    }
}

export default saki;