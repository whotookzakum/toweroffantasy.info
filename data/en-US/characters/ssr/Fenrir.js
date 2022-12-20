const fenrir = {
    name: "Fenrir",
    uri: "fenrir",
    imgSrc: "fenrir.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 30,
                start: "20 Nov 2022",
                end: "15 Dec 2022",
                duration: "25d",
                week: "51~54"
            }
        ]
    },
    weapon: {
        name: "Gleipnir",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "13.50"],
        charge: ["A", "10.50"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Volt Resonance",
                description: 
                    `Increase volt ATK by **20%** and volt resistance by **40%**. Activate by equipping **2** or more volt weapons. This set effect also works with weapons in the off-hand slot. Volt Resonance will take priority if equipped with a Volt Reaction weapon.`
            },
            effect2: {
                title: "Balanced Elements",
                description: 
                    `Increase all ATK by **15%**. Activate by equipping **3** weapons with different elements. This effect works in the background.`
            }
        },
        advancement: {
            star1: 
                `When **Soul Master** is used and goes on cooldown, gain the skill **Soundwave Frenzy**: Rush to the target and perform multiple attacks, with each hit adding **2** notes on the target, applying a short slowing effect, and restoring **100%** of ATK as HP. Deals **1542%** of ATK and has a cooldown of **15** seconds.  
                When **3** or more notes are added and Soundwave Frenzy's cooldown is longer than **5** seconds, reset the cooldown (can be triggered once every **15** seconds).`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: 
                `During Musical World, losing **45%** of your total HP or using **Soundwave Frenzy** will activate **Musical World Shockwaves**, dealing **1215%** of ATK to targets inside Musical World.  
                Losing **99%** of your total HP grants **1** Immunity (blocks damage and invincible for a short time) for **45** seconds, up to **1** stack.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: 
                `Increase the damage of detonating notes to **70%** and the damage over time is increased to **2%** of max HP per second while intoxicated. During Musical World, if **Musical World Shockwave** is not triggered for **12** consecutive seconds while in combat, it will automatically be triggered once.`,

            star6: 
                `Increase crit rate by **30%** when using **Gleipnir**. The effect remains active for **5** seconds after switching to another weapon.`
        },
        abilities: {
            normal: [
                {
                    name: "Wang Ming",
                    input: ["Attack x7"],
                    description: 
                        `While on the ground, attack 7 times.`,
                    breakdown: [
                        `Deal damage equal to **80.4%** of ATK + **4** to the target.`,
                        `Deal damage equal to **89.5%** of ATK + **5** to the target.`,
                        `Deal damage equal to **89.5%** of ATK + **5** to the target.`,
                        `Deal damage equal to **141.2%** of ATK + **7** to the target.`,
                        `Deal damage equal to **89.5%** of ATK + **5** to the target.`,
                        `Deal damage equal to **252.7%** of ATK + **13** to the target.`,
                        `Deal damage equal to **279.3%** of ATK + **15** to the target.`,
                    ]
                },
                {
                    name: "Prisonbreak",
                    input: ["Jump","Attack x7"],
                    description: `When in the air or after using a jump, tap basic attack to perform 7 consecutive attacks in the air.`,
                    breakdown: [
                        `Deal damage equal to **87.4%** of ATK + **5**.`,
                        `Deal damage equal to **100.5%** of ATK + **5**.`,
                        `Deal damage equal to **100.5%** of ATK + **5**.`,
                        `Deal damage equal to **174.8%** of ATK + **9**.`,
                        `Deal damage equal to **131.1%** of ATK + **7**.`,
                        `Deal damage equal to **303.2%** of ATK + **16**.`,
                        `Deal damage equal to **335.2%** of ATK + **18**.`,
                    ]
                },
                {
                    name: "Wolf Bite",
                    input: ["Attack x2 or x4", "hold:Attack"],
                    description: 
                        `While on the ground, hold the attack button after the 2nd or 4th basic attack to trigger Wolf Bite. Charge forward quickly and deal **114%** of ATK + **6** damage and knock back the target. After triggering Wolf Bite, press and hold the basic attack to trigger an uppercut. Perform an upward claw swipe, dealing **153.9%** of ATK + **8** damage and **suspend** the target.`,
                },
                {
                    name: "Wild Hunt",
                    input: ["Attack x5 or x6", "hold:Attack"],
                    description:
                        `While on the ground, hold the attack button after the 5th or 6th basic attack to trigger Wild Hunt. Fall from the sky, becoming temporarily invincible, to deal **420.3%** of ATK + **22** damage and **suspend** the target.`
                },
                {
                    name: "Impact Fall",
                    input: ["Jump", "hold:Attack", "hold:Attack"],
                    description:
                        `While airborne, climbing, using the jetpack, or reverse jump attacking, hold the attack button to trigger Impact Fall. Falling from the sky, crash into the ground to deal **330.6%** of ATK + **17** damage to and **suspend** nearby targets. Afterwards, hold the attack button again to trigger Roar, granting temporary invincibility and dealing **330.6% of ATK + **17** and knocking enemies back.`
                },
                {
                    name: "Soundtrack",
                    input: ["Jump", "Attack", "hold:Attack"],
                    description:
                        `While airborne, hold the attack button after the 2nd attack of Prisonbreak to trigger Soundtrack. Dash through the air in multiple directions, dealing **458.3%** of ATK + **24** damage.`
                },
                {
                    name: "Reverb",
                    description:
                        `Each attack has a **50%** chance of adding **1** note to the target, lasting **15** seconds and maxing out at **5** notes.  
                        **Wolf Bite, Wild Hunt, and Impact Fall** have a **100%** chance of adding **1** note.  
                        Notes are added in **1** second intervals.  
                        **Passive**: **Soundtrack** and **Echo** detonate all notes on a target, dealing **35%** of ATK damage (doubles damage if **3** or more notes are detonated).  
                        **Passive**: If **2** or more notes are detonated, the target will enter a state of intoxication, dealing **1%** of max HP damage per second for **16** seconds. The damage from detonating notes and intoxication is considered as dodge attack damage.`
                }
            ],
            dodge: [
                {
                    name: "Echo",
                    input: ["Dodge", "Attack"],
                    description:
                        `Perform a close range claw attack, dealing **383.2%** of ATK + **20** to surrounding targets and knocking them down.`
                },
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
            ],
            skill: [
                {
                    name: "Soul Master",
                    description:
                        `Separate the spirit and physical body, dealing **225.7%** of ATK + **12** and create a Musical World that lasts for **30** seconds, where you take **8%** less damage and ignore **35%** of the target's defense. The spirit body has **30** times your max HP, and **100%** of non-passive damage received from Gleipnir will be dealt back to the physical body (**1%** to the player), while recovering **50%** of ATK as health. Receive **12%** less damage from the spirit. The spirit body lasts for **15** seconds.  
                        When the spirit returns to its physical body it receives AoE damage equal to **1282%** of ATK + **68**.  
                        The spirit body will return if it was defeated, if its duration expired, if a new spirit body was summoned, or if the spirit body and physical bodies are too far away from each other.  
                        Soul Master has a cooldown of **30** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Ovation",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and rushes you to the the target to deal **1203.3%** of ATK + **63** damage to targets in range and add **3** notes. Immune to damage for **2.6** seconds during the skill animation (does not take effect in Apex League).`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/elx8wHwvgEU",
        recommendedMatrices: [
            {
                name: "Fenrir",
                pieces: 4,
                description: "Fenrir's matrices are absurdly powerful and ideally should be used on other weapons since they work in the background, but if all your matrices work in the background, using them on Gleipnir is fine."
            },
            {
                name: "Samir",
                pieces: 2,
                description: "Gleipnir can easily maintain the full buff with its fast attacks and passive damage refreshing stacks. Samir and Crow/Shiro matrices are a very good option if you don't have Fenrir matrices or are using them in the background."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate. Gleipnir's 6th advancement grants crit rate so may be more effective than usual, displacing Shiro 2-piece."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },
 
    matrix: {
        set2: 
            `Crit damage increased by **20%/24%/28%/32%**, does not stack. This effect works in the background, and if multiple sets are used, only the highest star set will take effect.`,

        set4: 
            `Dealing volt damage increases final damage by **5%** for **10** seconds, up to **5/6/7/8** stacks. This effect works in the background, and if multiple sets are used, only the highest star set will take effect. `
    },

    awakening: {
        trait1200: `When equipping **2** weapons of different elements, increase final damage by **13%**. When equipping **3** weapons of different elements, increase final damage by **18%**.`,

        trait4000: `When equipping **2** weapons of different elements, increase final damage by **18%**. When equipping **3** weapons of different elements, increase final damage by **25%**.`,

        giftCategories: ['collectibles', 'toys', 'vera'],

        gifts: [
            [80, "princeTataFigure", "linyeFigure"],
            [40, "bunnyDoll"],
            [30, "strangeFragment"],
            [20, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '160 cm',
        birthplace: '???',
        horoscope: 'Aquarius',
        birthday: '13 Feb',
        voiceActors: {
            jp: "",
            en: "",
            cn: "孙艳琦"
        }
    },
}

export default fenrir;