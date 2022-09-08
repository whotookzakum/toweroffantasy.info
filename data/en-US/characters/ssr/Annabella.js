const annabella = {
    name: "Annabella",
    uri: "annabella",
    imgSrc: "annabella.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 20,
                start: "9 Sep 2022",
                end: "28 Sep 2022",
                duration: "19d",
                week: "40~43"
            },
        ]
    },
    weapon: {
        name: "Crosshair Snipe",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "12.00"],
        charge: ["A", "9.00"],
        materials: ["flame", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Flame Reaction",
                description: 
                    `Increase flame ATK by **20%** and flame resistance by **40%**. Activate by equipping **2** or more flame weapons. This set effect also works with weapons in the off-hand slot. Effect does not stack with Flame Resonance.`
            },
            effect2: {
                title: "Peace of Mind",
                description: 
                    `Using Crosshair Snipe's skill, discharge, charged attack, or dodge increases Crosshair Snipe's final crit rate by **5%** for **15** seconds. Stacks up to **3** times. If crit rate exceeds **100%**, **50%** of the excess crit rate is converted to crit damage (up to **7.5%**).`
            }
        },
        advancement: {
            star1: 
                `Hitting the target **2** times with Crosshair Snipe will create an **optical space** at the target location for **12** seconds. Enemies within the space will trigger a burn settlement and then automatically trigger 2 burn settlements. When enemies leave the space, their movement speed is reduced by **80%** for **5** seconds, cooldown **12** seconds.  
                Enemies targeted by the Crosshair Snipe shot will be scared for **1.5** seconds, reducing their attack and movement speed by **80%**, cooldown **4** seconds.`,

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 
                `After a critical hit by Crosshair Snipe, recover **50%** of damage dealt as HP (up to **15%** of Max HP) and gain **50** weapon charge.  
                Peace of Mind: each stack increases final crit rate by **9%** (up to **27%**), and maximum crit damage conversion is **13.5%**.`,

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: 
                `**Violent Bullet Enhancement** - "Enhanced Scorch" state increases the target's scorching damage to **30%**.  
                **Deception Magic Bullet Enhancement** - Gas detonation damage ignores the target's flame resistance by **30%**.`,

            star6: "Increase Crosshair Snipe's damage by **20%**."
        },
        abilities: {

        },
        recommendedMatrices: [
            {
                name: "Annabella",
                pieces: 4,
                description: "Very high damage and crit damage buff set effects with 100% uptime."
            },
        ]
    },

    matrix: {
        set2: `Hitting a target with a Flame weapon increases final damage by **6%/7%/8%/9%** and final crit rate by **2.5%/2.5%/3%/3%** for **30** seconds, up to **2** stacks. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `Equip 2 or more Flame weapons to activate the "Flowing Flames" effect; increase final damage by **13%/15%/17%/19%**, and after a critical hit increase crit damage by **21%/24%/27%/30%** for **10** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },

    awakening: {
        trait1200: `Every time gas explosion hits at least **1** enemy, the damage of Crosshair Snipe is increased by **10%** for **20** seconds, stacks **2** times.`,

        trait4000: `Every time gas explosion hits at least **1** enemy, the damage of Crosshair Snipe is increased by **18%** for **20** seconds, stacks **2** times.`,

        giftCategories: ['decorations', 'rare-items', 'games', 'vera'],

        gifts: [
            [80, "princeTataFigure"],
            [60, "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [15, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '166 cm',
        birthplace: '???',
        horoscope: 'Taurus',
        birthday: '28 April',
        voiceActors: {
            jp: "",
            en: "",
            cn: "洪海天"
        }
    }
}

export default annabella;