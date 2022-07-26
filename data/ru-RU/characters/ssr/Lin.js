const lin = {
    name: "Линь",
    uri: "lin",
    imgSrc: "lin.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 15,
                subtext: "Никогда не попадёт в стандарт",
                start: "9 Июл 2022",
                end: "29 Июл 2022",
                duration: "20д",
                week: "30~33"
            }
        ]
    },
    weapon: {
        name: "Теневое плетение",
        element: "aberration",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "11.50"],
        charge: ["S", "11.50"],
        materials: ["red", "green", "black", "blue"],
        bonusEffect: {
            effect1: {
                title: `Weapon Mastery`,
                description: `Activate **Weapon Mastery** when used with other weapons. Nightblooms will randomly appear around the target and explode within **1-3** seconds, dealing **60%** AoE damage.`
            }
        },
        advancement: {
            star1: `Normal attacks deal AoE damage. When Nightblooms are in explosion range of each other, increase the damage of subsequent explosions by **10%** each (up to **50%**). **Lunar Reflection** reduces the spawn time of Nightblooms to **0.5** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `**Lunar Reflection** reduces the spawn time of Nightblooms to **0.3** seconds. Nightblooms now attach to enemy targets. The duration of **Lunar Reflection** is increased to **20** seconds.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `While inside **Lunar Reflection**, gain **30** weapon charge per second and increase damage of discharge skills by **15%**.`,

            star6: `**Lunar Reflection** can be activated up to **2** times. Gain **1** charge from skill cooldown. Gain **1** charge from using discharge skills **3** times (effective in the background). The damage bonus while inside **Lunar Reflection** is increased to **15%**.`
        },
        abilities: [],
        recommendedMatrix: {
            set2: ["lin", "samir"],
            set4: ["lin"],
            set3: []
        }
    },

    matrix: {
        set2: `Aerial attacks increase your attack power by **3%/3.7%/4.3%/5%** for **18** seconds. This effect can stack up to **5** times.`,

        set4: `Traveling **5** meters within Gravity Field will grant **1** stack of [Wind's Wish], increasing your total damage by **7.5%/9%/10.5%/12%** for 15 seconds. This effect can stack up to **3** times. Effect is active in the background.`
    },

    awakening: {
        trait1200: `Nightbloom's explosion damage increased by **15%**`,

        trait4000: `Nightbloom's explosion damage increased by **20%**. Nightbloom explosions reduce all elemental resistances of the affected targets by **7%** for **7** seconds. This effect cannot stack.`,

        giftCategories: ['metalware', 'decorations', 'vera'],

        gifts: [
            [60, "princeTataFigure", "linyeFigure"],
            [40, "strangeFragment"],
            [30, "bunnyDoll"],
            [15, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '175 см',
        birthplace: 'Миррория',
        horoscope: 'Дева',
        birthday: '3 Сен',
        voiceActors: {
            jp: "",
            en: "",
            cn: "陈婷婷 (Чен Тинтинг)"
        }
    }
}

export default lin;
