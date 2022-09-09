const tianlang = {
    name: "Tian Lang",
    uri: "tian-lang",
    imgSrc: "tianlang.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 18,
                subtext: "",
                start: "17 Aug 2022",
                end: "4 Sep 2022",
                duration: "18d",
                week: "36~39"
            }
        ]
    },
    weapon: {
        name: "Powerbreak",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["A", "8.00"],
        charge: ["S", "12.50"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Volt Reaction",
                description: 
                    `Increase volt ATK by **20%** and volt resistance by **40%**. Activate by equipping **2** or more volt weapons. This set effect also works with weapons in the off-hand slot. Effect does not stack with Volt Resonance.`
            }
        },
        advancement: {
            star1: 
                `Charging battery grants 1 stack of Overload, increasing max HP by **20%** but increases damage received by **12%** (except when your HP is lower than 50 &times; volt ATK). Stacks up to **8** times and if not refreshed, lose one stack every **6** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: 
                `Unleash any volt weapon's skill or discharge skill to gain **2** stacks of Overload. At **8** stacks gain immunity to control effects.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: 
                `Every stack of Overload grants a **1.5%** final damage buff.`,

            star6: 
                `Greedy Wolf's lightning conductor effect is increased to: **25%** lightning damage boost for every conductor for **25** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Stabbystabs",
                    input: ["Attack x6"],
                    description: 
                        `While on the ground, use Powerbreak to perform 6 attacks.  
                        &nbsp;  
                        **Basic Attack Passive**:  
                        Basic attack with Powerbreak **4** times to gain a battery charge, stacking up to **5** times. When battery charged, using any volt weapon's dodge attack adds thunderstrike, dealing damage equal to **5%** of missing HP (between **100%** to **1000%** of Volt ATK), and activate inductors, dealing AoE damage equal to **2%** of missing HP (between **40%** to **400%** of Volt ATK).`,
                    breakdown: [
                        `Deal damage equal to **90.5%** of ATK + **5** and knock the target back.`,
                        `Deal damage equal to **67.9%** of ATK + **4** and knock the target back.`,
                        `Deal damage equal to **123%** of ATK + **6** and knock the target back.`,
                        `Deal damage equal to **217.9%** of ATK + **11** and knock the target back.`,
                        `Deal damage equal to **222%** of ATK + **12** and knock the target back.`,
                        `Deal damage equal to **291.8%** of ATK + **15** and **suspend** the target.`,
                    ]
                },
                {
                    name: "Wenqu",
                    input: ["Jump","Attack x5"],
                    description: `When in the air or after using a jump, tap basic attack to perform 5 consecutive attacks in the air.`,
                    breakdown: [
                        `Deal damage equal to **87.4%** of ATK + **5**.`,
                        `Deal damage equal to **83%** of ATK + **4**.`,
                        `Deal damage equal to **126.7%** of ATK + **7**.`,
                        `Deal damage equal to **229.4%** of ATK + **12**.`,
                        `Deal damage equal to **256.5%** of ATK + **14**.`,
                    ]
                },
                {
                    name: "Lu Cun",
                    input: ["hold:Attack"],
                    description: 
                        `When on the ground, hold the basic attack to trigger.  
                        &nbsp;  
                        Deals up to **342%** of ATK + **18** to the target and attracts monsters to you.`,
                },
                {
                    name: "Giant Gate",
                    input: ["Jump", "hold:Attack"],
                    description:
                        `Triggered by holding basic attack, climbing, reverse jumping attack or using a jetpack to attack while in the air.  
                        &nbsp;  
                        In the process of falling, each time you hit a target, deal damage equal to **38%** of ATK + **2** to the target. When landing, deal damage equal to **285%** of ATK + **15** to surrounding targets.`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Lian Zhen",
                    description:
                        `In the short window after dodging, click basic attack.  
                        &nbsp;  
                        Dash to attack the target, causing a total of **172.6%** of ATK + **9** damage.`
                }
            ],
            skill: [
                {
                    name: "Greedy Wolf",
                    description:
                        `Launch multiple attacks, dealing up to **936.9%** of ATK + **49** damage to enemies within the range, and turn enemies within range into inductors (up to 3 at a time), cooldown **30** seconds.  
                        &nbsp;  
                        After casting Greedy Wolf, gain **lightning induction**: for every volt weapon equipped gain **15%** volt damage for **25** seconds.  
                        &nbsp;  
                        Inductor: When using a volt weapon's discharge skill, inductors deal AoE damage equal to **5%** of missing HP (between **100%** to **1000%** of Volt ATK).  
                        &nbsp;  
                        When one of your weapons is Powerbreak, using any volt weapon's skill or discharge skill consumes **30%** of current HP to deal additional volt damage equal to **50%** of the HP consumed (between **480%** to **3000%** of Volt ATK), and obtain a short period of invincibility. After **8** seconds or when HP is below **10%**, recover **5%** of missing HP for **8** seconds (not affected by healing effects; this recovery effect does not stack).`
                }
            ],
            discharge: [
                {
                    name: "Army Annihilator",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and use Powerbreak to generate large-scale volt damage, dealing a total of **844.6%** of ATK + **44**, and electrify nearby enemies. Enemies within range become inductors (up to 3).`
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Samir",
                pieces: 2,
                description: "Highest damage set buff that can be maintained with Powerbreak's multiple hits and fast attacks."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate."
            },
            {
                name: "Tian Lang",
                pieces: 4,
                description: "Not ideal as Tian Lang's matrices work in the background and should be used on a less-used weapon, however still viable. Alternatively, Tian Lang's 2-piece set is also viable on their own."
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
            `Dealing volt damage has a **40%** chance to release chain lightning, dealing **60%/100%/150%/200%** of volt ATK to up to **7** targets, cooldown **2** seconds. Triggering the lightning chain increases volt damage by **12%** for **6** seconds. This effect works in the background, and if multiple sets are used, only the highest star set will take effect.`,

        set4: 
            `Using a volt weapon's skill or discharge skill increases volt damage by **25%/28%/31%/34%** for **15** seconds. This effect works in the background, and if multiple sets are used, only the highest star set will take effect. `
    },

    awakening: {
        trait1200: `Using a volt weapon's skill or discharge skill grants **1** free dodge, stacking up to **2** times, and increases volt damage by **12%** for **8** seconds, does not stack.`,

        trait4000: `Using a volt weapon's skill or discharge skill grants **1** free dodge, stacking up to **3** times, and increases volt damage by **18%** for **8** seconds, does not stack.`,

        giftCategories: ['collectibles', 'decorations', 'vera'],

        gifts: [
            [80, "princeTataFigure", "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [20, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '185 cm',
        birthplace: 'Mirroria',
        horoscope: 'Aries',
        birthday: '23 Mar',
        voiceActors: {
            jp: "",
            en: "",
            cn: "淦子齐"
        }
    },
}

export default tianlang;