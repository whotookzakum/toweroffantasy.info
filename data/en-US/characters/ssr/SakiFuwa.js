const saki = {
    // 流泉彻心
    name: "Saki Fuwa",
    uri: "saki-fuwa",
    imgSrc: "sakifuwa.webp",
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
            },
            {
                bannerNo: 22,
                start: "28 Sep 2022",
                end: "17 Oct 2022",
                duration: "19d",
                week: "43~46"
            }
        ]
    },
    weapon: {
        name: "Ryusen Toshin",
        element: "ice",
        type: "defense",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["S", "13.90"],
        charge: ["A", "8.00"],
        materials: ["ice", "red", "black"],
        bonusEffect: {
            effect1: {
                title: `Frost Resonance`,
                description: `When equipped with **2** or more Frost weapons, increase Frost ATK by **20%** and Frost Resistance by **40%**, taking effect in the background.`
            }
        },
        advancement: {
            star1: `When Frost Resonance is active, release any weapon skill **5** times in total to clear the cooldown of all weapon skills, and **double** the damage of [Circulation] and [Counterattack] for **25** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Flowing Heart: Sword Shadow [Surge] damage increased to **900%** of Frost ATK.  
                Silent Flow: Sword Shadow [Surge] cooldown reduced to **5** seconds.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Sword Shadow's [Surge] triggers Phantasia upon hitting a target, shares cooldown with Phantasia trigged by dodging.`,

            star6: `Sword Shadow's [Surge] increases your Frost damage by **20%** for **15** seconds upon hitting a target. Activating Sword Shadow's block reduces surrounding enemies' Frost damage by **25%** for **12** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Flowing Springs",
                    input: ["Attack x5"],
                    description: `While on the ground, use the Flowing Spring to perform 5 attacks.`,
                    breakdown: [
                        `Deal damage equal to **42.5%** of ATK + **2** and knock the target back a short distance`,
                        `Deal damage equal to **29.5%** of ATK + **2** and knock the target back a short distance`,
                        `Deal damage equal to **45%** of ATK + **2** and knock the target back a short distance`,
                        `Deal damage equal to **70.6%** of ATK + **4** and knock the target back a short distance`,
                        `Deal damage equal to **102.6%** of ATK + **5** and **suspend** the target.`,
                    ]
                },
                {
                    name: "Heavenbreak Waterfall",
                    input: ["Jump", "Attack x5"],
                    description: `When in the air or after using a jump, click the basic attack to make five consecutive attacks in the air.`,
                    breakdown: [
                        `Deal damage equal to **47.2%** of ATK + **2**.`,
                        `Deal damage equal to **43.7%** of ATK + **2**.`,
                        `Deal damage equal to **54.2%** of ATK + **3**.`,
                        `Deal damage equal to **76.9%** of ATK + **4**.`,
                        `Deal damage equal to **170.2%** of ATK + **9**.`,
                    ]
                },
                {
                    name: "Frostfall",
                    input: ["Jump", "hold:Attack"],
                    description: 
                        `Triggered by holding basic attack, climbing, reverse jumping attack or using a jetpack to attack while in the air.  
                        &nbsp;  
                        In the process of falling, each time you hit a target deal damage equal to **30.4%** of ATK + **2** damage to the target; when landing, it will cause **76%** of ATK + **4** damage to surrounding targets.`
                },
                {
                    name: "Surging Heart Style - Vortex", // "while target is airborne"
                    input: ["hold:Attack"],
                    description: 
                        `During normal attacks, hold the normal attack to trigger.  
                        Dash forward and spin to perform multi-stage attacks, dealing damage up to **199.5%** of ATK + **11** damage to the target.`
                },
                {
                    name: "Calm Style - Broken Spring", // "while target is on the ground"
                    input: ["hold:Attack"],
                    description: 
                        `In Calm Style, the normal attack can be triggered by holding the normal attack or immediately.  
                        Long press the attack button to keep the momentum, release the attack button to deal up to **127.3%** of ATK + **7** of damage to the target. If you are attacked while the skill is casting, block damage equal to **20%** of your maximum HP.`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Frigid Tide",
                    input: ["Arrow keys", "Dodge", "Attack"],
                    description: 
                        `After dodging forward, tap Basic Attack.  
                        Dash and turn around to attack the target, dealing a total of **277%** of ATK + **15** damage.`
                },
            ],
            skill: [
                {
                    name: "Surging Heart Style - Glimpse of Ning Quan",
                    description: `Dash in the target direction and briefly immobilize enemies in your way, dealing delayed damage up to **927.7%** of ATK + **49**, cooldown for **30** seconds.`
                },
                {
                    name: "Calm Style - Gathering Springs",
                    description: 
                        `Enter a charging state for up to **3** seconds. While charging, continuously taunt surrounding targets and absorb damage (up to **60%** of Max HP). When charging ends, deal Frost damage based on damage absored, equal to **850%** &times; Frost Attack + **50%** &times; amount of damage absored. **20%** of the amount that is not used is converted into health. Cooldown **30** seconds.`
                },
                {
                    name: "Passive",
                    description: 
                        `When using Fortitude Resonance, switch to Calm Style, otherwise switch to Surging Heart Style.  
                        &nbsp;  
                        Cast the skill to summon a Shadow Sword that follows you. When using Ryusen Toshin's hold attack or discharge skill, Shadow Sword unleashes [Surge], dealing **450%** of Frost ATK as AoE damage to the target. [Surge] has a cooldown of **10** seconds.  
                        &nbsp;  
                        **Surging Heart Style**: When the player uses any weapon to deal damage, the Shadow Sword releases [Flow], dealing **125%** of Frost ATK as damage to another target and recovering **57%** of the damage as health (each recovery is capped at **100%** of ATK), cooldown **0.8** seconds.  
                        &nbsp;  
                        **Calm Style**: After the Shadow Sword unleashes [Surge], gain **3** block charges that last for **10** seconds and blocking up to **15%** of Max HP. Each successful block deals [Counterattack] damage equal to **450%** of Frost ATK. Increase [Surge]'s shatter by **100%** and grant it a taunting effect.`
                }
            ],
            discharge: [
                {
                    name: "Heart of Lotus",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, **clear all debuffs from the user** and sprint towards the target and launch a set of combos, dealing a total of **864.5%** of ATK + **46** damage."
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Saki Fuwa",
                pieces: 4,
                description: "Very high damage buff set that is best used on other weapons. However, if you're using Alyss, Saki, and Lin weapons together, it's best used on Saki's weapon as the other two need their matrices to be used on their weapons specifically. Since you'll be switching weapons a lot, this set is better than the options below."
            },
            {
                name: "Samir",
                pieces: 2,
                description: "High damage buff that can be maintained with Ryusen Toshin's quick hits."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate."
            },
            {
                name: "Shiro",
                pieces: 2,
                description: "Decent option that boosts Ryusen Toshin's overall damage and shatter."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `While Frost Resonance is active: Every **3** seconds, deal **60%/100%/150%/220%** of Frost ATK to enemies within 10 meters and apply one stack of Frost: 5% slowing effect for **3.5** seconds. After 3 stacks, Freeze the target for **3** seconds (excluding bosses) and the target will take **12%** more Frost damage for **18** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `Attack the target **10** times to add a 12-second Frozen mark, increasing your Frost damage against the target by **25%/28%/31%/34%**. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },

    awakening: {
        trait1200: `When health is below **70%**, gain **40%** all-element resistance.`,

        trait4000: `When health is below **70%**, gain **40%** all-element resistance and an additional **60%** Frost resistance.  
            When blocking with Silent Flow [Surge], provide 3 blocks to the teammate with the lowest health (excluding yourself) for **10** seconds. The block amount will not exceed **15%** of the teammate's maximum health.`,

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
        birthplace: 'Mirroria',
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