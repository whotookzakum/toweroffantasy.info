const lin = {
    name: "Lin",
    uri: "lin",
    imgSrc: "lin.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 15,
                subtext: "Limited Banner only",
                start: "9 Jul 2022",
                end: "29 Jul 2022",
                duration: "20d",
                week: "30~33"
            }
        ]
    },
    weapon: {
        name: "Shadow Weaver",
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
        // abilities: {
        //     normal: [
        //         {
        //             name: "",
        //             description: `An air burst is formed at the target position, a range diffusion wave is formed on the ground, and the target is knocked down. Passive: Continue clicking basic attack after releasing the branch attack to immediately release a max [Hold] attack.`
        //         },
        //         {
        //             name: "",
        //             description: `Sends a large spiral sphere (which can be charged and increases with the charging time), inflicting multiple hits on impact.`
        //         },
        //         {
        //             name: "",
        //             description: `Falling quickly from the air, causes AoE damage after landing and knocks down targets.`
        //         },
        //     ],
        //     dodge: [
        //         {
        //             name: "",
        //             description: `Launch an attack on the target while dodging midair. The hit generates **1-3 Nightblooms**, and at the same time forms a field that lasts for **5** seconds. When an enemy moves against the direction in the field, their movement speed is reduced by **50%**. Passive: can be released both on the ground and in the air; when under control effects, immediately break out and release the wind field (automatically use a dodge attack without consuming dodge count), cooldown **20** seconds.`
        //         },
        //         {
        //             name: "Dodge",
        //             description: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
        //         },
        //     ],
        //     skill: [
        //         {
        //             name: "Gravity Field",
        //             description: `A gravity field is formed around yourself for **15** seconds. In the gravity field, you gain a **15%** damage bonus, and can double jump multiple times and has **20%%** increased jumping ability and reducing stamina consumption by **50%**. Aerial falling speed is also reduced. When using **Shadow Weaver** in the gravity field, gain the **Cold Air** state: using a joystick and jumping in the air will create a gust and release an attack at the target, which will generate **Nightblooms**.  
        //             Passive: In the gravity field, a **Nightbloom** will be generated near the target every **1.5** seconds.  
        //             Passive: When **Nightblooms** detonate in the gravity field, they instantly kill targets with less than **10%** of their HP.  
        //             Passive: When in the gravity field, flash away from the target when you are about to take damage, cooldown **10** seconds.  
        //             Passive: Weapons Master:
        //             When paired with two **Flame weapons**, the wind field is transformed into a flame wind field. When the burning BUFF is added in the wind field, the duration is increased by **5** seconds, and the player's own fire damage to the shielded target in the wind field is increased by **50%**.
        //             When paired with two **Volt weapons**, the wind field is transformed into a lightning wind field. Dodges have a **65%** chance of not being consumed while in the wind field. Each dodge will add **300%** AoE damage to the next Discharge skill, stacking up to **3** times for **900%** damage.
        //             When paired with two **Ice weapons**, the wind field is transformed into an ice wind field. When enemies in the field receive ice damage **10** times, they enter a state of frostbite for **15** seconds, receiving **20%** more ice damage. The number of hits to activate frostbite does not accumulate during the effect.
        //             When paired with two **Physical weapons**, the wind field is transformed into a physical wind field. Every time the target loses **1%** of its max HP in the wind field, you gain the corresponding health in shields within **3** seconds, can be stacked.
        //             When paired with two **weapons of different elements**, the wind field is not transformed. Gain **15%** attack for all elements while in the wind field.`
        //         },
        //     ],
        //     discharge: [
        //         {
        //             name: "",
        //             description: `When switching to this weapon will full charge or when Phantasia is triggered, clear all debuffs and converges to form a spiral energy sphere with strong suction (all movable targets can be sucked), and explodes after a short time (1-2 seconds. Formation of a range of wind pressure diffusion wave.`
        //         }
        //     ]
        // },
        abilities: [],
        recommendedMatrix: {
            set2: ["lin", "samir"],
            set4: ["lin"],
            set3: []
        }
    },

    matrix: {
        set2: `Successful attacks increase your attack power by **3%/3.7%/4.3%/5%** for **18** seconds. This effect can stack up to **5** times. If multiple sets are used, only the highest star set will take effect.`,

        set4: `Traveling **5** meters within Lunar Reflection will grant **1** stack of [Moon's Reflection], increasing your total damage by **7%/8.3%/9.6%/11%** for 15 seconds. This effect can stack up to **3** times. Effect is active in the background. If multiple sets are used, only the highest star set will take effect.`
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
        gender: 'Female',
        height: '175 cm',
        birthplace: 'Mirror City',
        horoscope: 'Virgo',
        birthday: '3 Sep',
        voiceActors: {
            jp: "",
            en: "",
            cn: "陈婷婷"
        }
    }
}

export default lin;