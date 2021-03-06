const frigg = {
    name: "Frigg",
    uri: "frigg",
    imgSrc: "frigg.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 7,
                start: "25 Mar 2022",
                end: "12 Apr 2022",
                duration: "18d",
                week: "15~18"
            },
            {
                bannerNo: 14,
                subtext: "Standard in November",
                start: "23 Jun 2022",
                end: "9 Jul 2022",
                duration: "16d",
                week: "28~30"
            }
        ]
    },
    weapon: {
        name: "Balmung",
        element: "ice",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["A", "8.00"],
        charge: ["A", "8.00"],
        materials: ["ice", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Frozen Domain",
                description: "After using the Weapon Skill **Fimbulwinter**, a large ice field will be placed at your position, lasting  **25** seconds. Inside the ice field, dodges will not be consumed while using Frigg's weapon, and gain the effect Frozen Domain I: when using Ice weapons, increase Ice ATK by **15%** and Shatter by **25%**."
            }
        },
        advancement: {
            star1: `Gain **1** point of Frost every time you deal **550%** of Ice ATK with any element while inside the ice field, up to **10** points. When the ice field expires, inflict burst damage for ( Frost points &times; **95%** &times; Ice ATK ) to all enemies within the area. Lose **1** Frost point every **3** seconds that you are outside of the field.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `Maximum Frost points increased to **15**. Using an Ice weapon's Discharge Skill inside the ice field inflicts ( Frost points + 5 ) &times; **25%** &times Ice ATK to all enemies in the field.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `Using an Ice weapon to break a shield inside the ice field will freeze the target for **2** seconds and deal an additional ( Frost points &times; **35%** &times; Ice ATK ) damage (doubled if the target cannot be frozen).`,

            star6: `Reaching **15** Frost points while inside the ice field will grant the additional effect Frozen Domain II: when using Ice weapons, increase Ice ATK by **25%**.`
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["samir", "crow"],
            set4: ["samir", "frigg", "sakifuwa"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `When switching from ice weapon to ice weapon, the ice attack power is increased by **15%/18%/21%/25%** for **10** seconds. This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when  multiple sets are equipped.`,

        set4: `When the ice field is released by the weapon Balmung, the enemy targets within the ice field take **60%/75%/90%/105%** ice damage per second.`
    },

    awakening: {
        trait1200: `When entering combat, Frigg gains **1.5%** Ice ATK every **3** seconds, stacking up to **10** times and lasting **5** seconds.`,

        trait4000: `When entering combat, Frigg gains **2.4%** Ice ATK every **3** seconds, stacking up to **10** times and lasting **5** seconds. Frigg is immune to CC effects while in the Frozen Domain.`,

        giftCategories: ['metalware', 'everyday-items'],

        gifts: [
            [60, "present", "tataCards", "pearl", "peppaFigure", "catFigure", "kitchenware"],
            [30, "juicePouch", "suit", "toolbox", "perfume", "strangeFragment"],
            [15, "flowers", "dumbbells", "scarf"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '190 cm',
        birthplace: '???',
        horoscope: 'Aquarius',
        birthday: '1 Feb',
        voiceActors: {
            jp: "????????? (Shizuka Ito)",
            en: "",
            cn: "?????????"
        }
    }
}

export default frigg;