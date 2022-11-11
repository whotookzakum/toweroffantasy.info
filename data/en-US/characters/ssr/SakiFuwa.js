const saki = {
    // 流泉彻心
    name: "Saki Fuwa",
    uri: "saki-fuwa",
    imgSrc: "sakifuwa.webp",
    rarity: "SSR",
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
        ],
        glob: [
            {
                bannerNo: 6,
                start: "9 Nov 2022",
                end: "1 Dec 2022",
                duration: "22d",
                week: "14~17"
            }
        ]
    },
    weapon: {
        name: "Heartstream",
        element: "ice",
        type: "defense",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["S", "13.90"],
        charge: ["A", "8.00"],
        materials: ["ice", "red", "black"],
        bonusEffect: {
            effect1: {
                title: `Frost Resonance`,
                description: `Increase frost ATK by **15%** and frost resistance by **25%**. Activate by equipping **2** or more frost weapons. This set effect works in the off-hand slot. Cannot stack with effects of the same type.`
            }
        },
        advancement: {
            star1: `When Frost Resonance is activated, all weapon skill cooldowns are cleared every **5** times weapon skills are used, and the damage of Flow and Counterattack is **doubled** for the next **25** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: 
                `Excited Flow: Increase the damage of Sword Shadow: Surge to **350%** of Frost ATK.  
                Silent Flow: The cooldown of Sword Shadow: Surge becomes **5** seconds.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Freeze time and trigger Phantasia upon Surge hitting the target. Share cooldown with the Phantasia triggered by dodging.`,

            star6: `Upon hitting a target with Surge, increase frost damage by **11%** for **15** seconds. Upon triggering block with Sword Shadow, reduce the frost damage dealt by enemy targets by **25%** for **12** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Ragestream",
                    input: ["Attack x5"],
                    description: `Launch 5 Heartstream attacks while on the ground.`,
                    breakdown: [
                        `Deal **42.5%** of ATK + **2** damage to the target and slightly knocks the target back.`,
                        `Deal **29.5%** of ATK + **2** damage to the target and slightly knocks the target back.`,
                        `Deal **45%** of ATK + **2** damage to the target and slightly knocks the target back.`,
                        `Deal **70.6%** of ATK + **4** damage to the target and slightly knocks the target back.`,
                        `Deal **102.6%** of ATK + **5** damage to the target and flies the target.`,
                    ]
                },
                {
                    name: "Airsplit",
                    input: ["Jump", "Attack x5"],
                    description: `While airborne or after jumping once, use normal attack to attack 5 times in a row.`,
                    breakdown: [
                        `Deal damage equal to **47.2%** of ATK + **2**.`,
                        `Deal damage equal to **43.7%** of ATK + **2**.`,
                        `Deal damage equal to **54.2%** of ATK + **3**.`,
                        `Deal damage equal to **76.9%** of ATK + **4**.`,
                        `Deal damage equal to **170.2%** of ATK + **9**.`,
                    ]
                },
                
                {
                    name: "Excited Flow: Vortex",
                    input: ["hold:Attack"],
                    description: 
                        `In the Excited Flow mode, tap and hold normal attack to trigger the skill.  
                        Lunge forward with a swirling multiattack, dealing a maximum of **199.5%** of ATK + **11** damage.`
                },
                {
                    name: "Silent Flow: Barrier",
                    input: ["hold:Attack"],
                    description: 
                        `In the Silent Flow mode, tap while launching normal attacks or tap and hold the normal attack to trigger the skill.  
                        Hold the attack button to keep the Anticipation. Release the button to deal **127.3%** of ATK + **7** damage. When received attacks during the attacking period, blocks **20%** of your max HP.`
                },
                {
                    name: "Frostfall",
                    input: ["Jump", "hold:Attack"],
                    description: 
                        `Tap and hold normal attack while airborne, or use normal attack while climbing, jumping backward, or using the Jetpack with normal attack to trigger.  
                        While falling, deal damage equal to **30.4%** of ATK + **2** each hit. Upon landing, deal damage equal to **76%** of ATK + **4** to nearby targets.`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Polar Front",
                    input: ["Arrow keys", "Dodge", "Attack"],
                    description: 
                        `Tap normal attack during the short period after dodging forward.  
                        Dash and turn around to attack the target, dealing damage equal to **277%** of ATK + **15**.`
                },
            ],
            skill: [
                {
                    name: "Excited Flow: Flashing Stream",
                    description: `Dash toward the target and temporarily immobilize enemies along the path, dealing delayed damage up to **445.3%** of ATK + **23**. Cooldown: **30** seconds.`
                },
                {
                    name: "Silent Flow: Concentrated Stream",
                    description: 
                        `Cast the Silent Flow skills to begin charging for up to **3** seconds, continuously taunting nearby targets and absorbing damage up to **60%** of Max HP. At the end of the charge, deal frost damage equal to **408%** of frost ATK + **50%** of absorbed damage to targets, and **20%** of the unconsumed value is converted to HP recovery. Cooldown: **30** seconds.`
                },
                {
                    name: "Passive",
                    description: 
                        `Enter Silent Flow when Fortitude Resonance is activated. **Excited Flow: Flashing Stream** is replaced by **Silent Flow: Concentrated Stream**. Enter Excited Flow when Fortitude Resonance is not activated.  
                        &nbsp;  
                        The Wanderer can gain Sword Shadow, which follows them around when using Saki Fuwa's skills. Sword Shadow will release Surge when the Wanderer uses Saki Fuwa's branch skills or discharge skills, dealing ranged damage equal to **175%** of frost ATK. Cooldown of Surge: **10** seconds.  
                        &nbsp;  
                        While in Excited Flow: Sword Shadow will release Flow when the Wanderer deals damage with any weapon, which inflicts damage equal to **45%** of frost ATK on the first hit target and recovers HP equal to **57%** of the damage. The maximum recovery each time cannot exceed **100%** of ATK. Cooldown: **0.8** seconds.  
                        &nbsp;  
                        While in Silent Flow: After Sword Shadow releases Surge, the Wanderer obtains **3** blocks for **10** seconds, and the maximum block capacity cannot exceed **15%** of Max HP. Each successful block deals Counterattack damage equal to **225%** of frost ATK to the target, and the shatter of Surge increases by **100%** with an added taunt effect.`
                }
            ],
            discharge: [
                {
                    name: "Heartlotus",
                    description: "When **weapon charge** is full or **Phantasia** is triggered, **remove all debuffs from the wielder** and dash toward the target with a combo attack upon switching to this weapon, dealing damage equal to **536%** of ATK + **28**."
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
        set2: `When Frost Resonance gets triggered: Every **3** seconds, deal frost damage equal to **65%/80%/95%/110%** of frost ATK to enemies within a 10-meter radius and apply the Icefrost effect: Inflict 5% slow effect that lasts for **3.5** seconds, freeze targets for **3** seconds at 3 stacks (does not apply to bosses), and increase frost damage taken by the target by **5%** for **18** seconds. This Matrix's effect is also active in the off-hand slot, but only the set with the highest star rating will take effect.`,

        set4: `Attack the target **10** times to inflict a 12-second Flashfreeze mark. Flashfreeze: Increase frost damage edalt to the marked target by **11%/28%/31%/34%**. This Matrix's effect is also active in the off-hand slot, but only the set with the highest star rating will take effect.`
    },

    awakening: {
        trait1200: `When HP is lower than **70%**, increase resistance by **40%**.`,

        trait4000: 
            `When HP is lower than **70%**, increase all resistance by **40%** with an extra **60%** increased frost resistance.  
            In the state of Silent Flow: After the sword shadow releases Surge and blocks an attack, the teammate with the lowest HP percentage will get 3 block abilities, not including yourself, lasting for **10** seconds. The maximum blocking damage does not exceed **15%** of the teammate's max HP.`,

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
            en: "EmiLo",
            cn: "唐小喜"
        }
    },

    cnData: {
        weapon: {
            advancement: {
                star3: 
                `<abbr title="China Exclusive></abbr> Excited Flow: Increase the damage of Sword Shadow: Surge to **900%** of Frost ATK.  
                Silent Flow: The cooldown of Sword Shadow: Surge becomes **5** seconds.`,

                star6: `<abbr title="China Exclusive></abbr> Upon hitting a target with Surge, increase frost damage by **20%** for **15** seconds. Upon triggering block with Sword Shadow, reduce the frost damage dealt by enemy targets by **25%** for **12** seconds.`
            },
            abilities: {
                skill: [
                    {
                        name: "Excited Flow: Flashing Stream",
                        description: `<abbr title="China Exclusive></abbr> Dash toward the target and temporarily immobilize enemies along the path, dealing delayed damage up to **927.7%** of ATK + **49**. Cooldown: **30** seconds.`
                    },
                    {
                        name: "Silent Flow: Concentrated Stream",
                        description: 
                            `<abbr title="China Exclusive></abbr> Cast the Silent Flow skills to begin charging for up to **3** seconds, continuously taunting nearby targets and absorbing damage up to **60%** of Max HP. At the end of the charge, deal frost damage equal to **850%** of frost ATK + **50%** of absorbed damage to targets, and **20%** of the unconsumed value is converted to HP recovery. Cooldown: **30** seconds.`
                    },
                    {
                        name: "Passive",
                        description: 
                            `<abbr title="China Exclusive></abbr> Enter Silent Flow when Fortitude Resonance is activated. **Excited Flow: Flashing Stream** is replaced by **Silent Flow: Concentrated Stream**. Enter Excited Flow when Fortitude Resonance is not activated.  
                            &nbsp;  
                            The Wanderer can gain Sword Shadow, which follows them around when using Saki Fuwa's skills. Sword Shadow will release Surge when the Wanderer uses Saki Fuwa's branch skills or discharge skills, dealing ranged damage equal to **450%** of frost ATK. Cooldown of Surge: **10** seconds.  
                            &nbsp;  
                            While in Excited Flow: Sword Shadow will release Flow when the Wanderer deals damage with any weapon, which inflicts damage equal to **125%** of frost ATK on the first hit target and recovers HP equal to **57%** of the damage. The maximum recovery each time cannot exceed **100%** of ATK. Cooldown: **0.8** seconds.  
                            &nbsp;  
                            While in Silent Flow: After Sword Shadow releases Surge, the Wanderer obtains **3** blocks for **10** seconds, and the maximum block capacity cannot exceed **15%** of Max HP. Each successful block deals Counterattack damage equal to **450%** of frost ATK to the target, and the shatter of Surge increases by **100%** with an added taunt effect.`
                    }
                ],
                discharge: [
                    {
                        name: "Heartlotus",
                        description: `<abbr title="China Exclusive></abbr>  When **weapon charge** is full or **Phantasia** is triggered, **remove all debuffs from the wielder** and dash toward the target with a combo attack upon switching to this weapon, dealing damage equal to **864.5%** of ATK + **46**.`
                    }
                ]
            },
        },
        matrix: {
            set2: `<abbr title="China Exclusive></abbr> When Frost Resonance gets triggered: Every **3** seconds, deal frost damage equal to **60%/100%/150%/220%** of frost ATK to enemies within a 10-meter radius and apply the Icefrost effect: Inflict 5% slow effect that lasts for **3.5** seconds, freeze targets for **3** seconds at 3 stacks (does not apply to bosses), and increase frost damage taken by the target by **12%** for **18** seconds. This Matrix's effect is also active in the off-hand slot, but only the set with the highest star rating will take effect.`,
    
            set4: `<abbr title="China Exclusive></abbr> Attack the target **10** times to inflict a 12-second Flashfreeze mark. Flashfreeze: Increase frost damage edalt to the marked target by **25%/28%/31%/34%**. This Matrix's effect is also active in the off-hand slot, but only the set with the highest star rating will take effect.`
        },
    }
}

export default saki;