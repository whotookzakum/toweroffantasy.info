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

                        In the process of falling, each time you hit a target deal damage equal to **30.4%** of ATK + **2** damage to the target; when landing, it will cause **76%** of ATK + **4** damage to surrounding targets.`
                },
                {
                    name: "Surging Heart Vortex", // "while target is airborne"
                    input: ["hold:Attack"],
                    description: 
                        `During normal attacks, hold the normal attack to trigger.  
                        Dash forward and spin to perform multi-stage attacks, dealing damage up to **199.5%** of ATK + **11** damage to the target.`
                },
                {
                    name: "Calm Style Broken Spring", // "while target is on the ground"
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
                    name: "Surging Heart Style - Glimpse of Ningsen",
                    description: `Dash in the target direction and briefly immobilize the enemy on the path, delaying dealing up to **927.7%** of ATK + **49** damage to the enemy on the path, cooldown for **30** seconds.`
                },
                {
                    name: "Calm Style - Gathering Springs",
                    description: 
                        `Release the skill of Calm Style Flow to enter the charging state, continuously taunting surrounding targets, charging for up to **3** seconds, absorbing damage during charging (up to **60%** of Max HP), and dealing damage after charging ends. Damage dealt is equal to **850%** &times; Frost Attack + **50%** &times; amount of damage absored as Frost damage. **20%** of the value that is not consumed is converted into health regeneration, and cool down for **30** seconds.  

                        When using Perserverance Resonance, switch to Calm Style, and use the Calm Style weapon skill. When using another resonance, switch to Surging Heart Style.  

                        Release the Unbreakable skill to obtain the sword shadow that follows you, and release the Unbreakable branch skill or link. During the skill, the sword shadow will release [Surge], causing **450%** of Ice Attack range damage to the target, [Surge] cools down for **10** seconds.  

                        **Surging Heart Style**: When the player uses any weapon to cause damage, the sword shadow releases [flow], causing **125%** of ice attack damage to the first outside hit target and recovering **57%** of the damage value of health, the maximum recovery amount each time does not exceed aggressive **100%**, cooldown **0.8** seconds.  

                        **Calm Style**: After the sword shadow releases [Surge], the player will get **3** blocks for **10** seconds. The maximum block amount does not exceed **15%** of Max HP. Each successful block will deal damage equal to **450%** of Frost ATK, [Surge]'s shield-breaking ability increased by **100%** and added taunting effect.`
                }
            ],
            discharge: [
                {
                    name: "Heart of Lotus",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, **clear all debuffs from the user** and sprint towards the target and launch a set of combos, dealing a total of **864.5%** of ATK + **46** damage."
                }
            ]
        },
        recommendedMatrix: {
            set2: ["crow", "samir"],
            set4: ["samir"],
            set3: ["sobek"]
        } // Saki's 2 and 4 set useful on other ice weapons in the team
    },

    matrix: {
        set2: `While Ice Resonance is active: Every **3** seconds, deal **60%/100%/150%/220%** of Ice ATK to enemies within 10 meters and apply one stack of Frost: 5% slowing effect for **3.5** seconds. After 3 stacks, Freeze the target for **3** seconds (excluding bosses) and the target will take **12%** more Ice damage for **18** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `Attack the target **10** times to add a 12-second Frozen mark, increasing your Ice damage against the target by **25%/28%/31%/34%**. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },

    awakening: {
        trait1200: `When health is below **70%**, gain **40%** all-element resistance.`,

        trait4000: `When health is below **70%**, gain **40%** all-element resistance and an additional **60%** Ice resistance.  
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