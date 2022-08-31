const nemesis = {
    name: "Nemesis",
    uri: "nemesis",
    imgSrc: "nemesis.webp",
    rarity: "SSR",
    chinaOnly: false,
    banners: {
        cn: [
            {
                bannerNo: 5,
                start: "05 Mar 2022",
                end: "24 Mar 2022",
                duration: "19d",
                week: "12~15"
            },
            {
                bannerNo: 13,
                subtext: "Standard in September",
                start: "23 Jun 2022",
                end: "9 Jul 2022",
                duration: "16d",
                week: "28~30"
            },
            {
                bannerNo: 17,
                subtext: "Standard in September",
                start: "11 Aug 2022",
                end: "21 Aug 2022",
                duration: "10d",
                week: "35~37"
            }
        ],
        glob: [
            {
                bannerNo: 1,
                start: "10 August 2022",
                end: "31 August 2022",
                duration: "21d",
                week: "1~3"
            }
        ]
    },
    weapon: {
        name: "Venus",
        element: "volt",
        type: "support",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["A", "8.00"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Volt Resonance",
                description: 
                    `Increase volt ATK by **15%** and volt resistance by **25%**. Activate by equipping **2** or more volt weapons. This set's effects do not work with others.`
            }
        },
        advancement: {
            star1: 
                `After using **Pulse Lock** or **Particle Beam Burst**, creates **1** Electrode that immediately grants the user **5** stacks of healing chain enhance. In addition, unleash a healing chain that heals nearby allies by **135%** of the Wanderer's ATK.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: 
                `Every **6** seconds, the Electrode will unleash **Ring Lightning**, which deals damage equal to a maximum of **205%** of ATK in a target area.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: 
                `After using **Pulse Lock**, increase the Wanderer's ATK by (**5** + (Number of Electrodes &times; **5**)) % for **25** seconds.`,

            star6: 
                `Up to **2** Electrodes can be active at the same time. Summoning more Electrodes will replace the ones furthest from the user.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: "While on the ground, use Venus to attack 5 times in a row.",
                    breakdown: [
                        'Deal damage equal to **50.8%** of ATK + **3**.',
                        'Deal damage equal to **36.3%** of ATK + **2**.',
                        'Deal damage equal to **98.3%** of ATK + **5**.',
                        'Deal damage equal to **67.3%** of ATK + **4**.',
                        'Deal damage equal to **148.3%** of ATK + **8**.',
                    ]
                },
                {
                    name: "Aerial Discharge",
                    input: ["Jump", "Attack x5"],
                    description: "While airborne, tap normal attack to attack 5 times in a row.",
                    breakdown: [
                        'Deal damage equal to **62.5%** of ATK + **3**.',
                        'Deal damage equal to **62.5%** of ATK + **3**.',
                        'Deal damage equal to **120%** of ATK + **6**.',
                        'Deal damage equal to **71.2%** of ATK + **4**.',
                        'Deal damage equal to **126%** of ATK + **7**.',
                    ]
                },
                {
                    name: "Forward Pursuit",
                    input: ["Attack", "hold:Attack"],
                    description: 
                        `After the second normal attack, hold the normal attack to trigger Forward Pursuit.  
                        Shoot a laser-guided missle at the target, dealing damage up to **107.5%** of ATK + **6**.`
                },
                {
                    name: "Dual Focus",
                    input: ["hold:Attack"],
                    description: 
                        `Hold normal attack to charge a shot and release an electrified ball that explodes on hit, dealing damage equal to **118.4%** of ATK + **6** to nearby enemies.`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: 
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.  
                        Dodging will trigger a healing chain that heals nearby allies by **67.7%** of the Wanderer's ATK; for the next **10** seconds, a small healing chain will trigger every **2** seconds, which heals nearby allies by **22.5%** of the Wanderer's ATK. Dodging grants 1 stack of healing chain enhance, which increases the effects of healing chains by **25%** (stacks up to **5** times) and lasts for **30** seconds. Switching weapons will cancel this effect.`
                },
                {
                    name: "Twin Spinning Focus",
                    input: ["Dodge", "Attack"],
                    description:
                        `Tap normal attack during the short perfect attack window to trigger a slowing magnetic field.  
                        Venus fires a charged orb that travels forward a set distance and explodes in contact with targets. Deal damage equal to **171%** of ATK + **9**, and generate a slowing magnetic field for **3** seconds, which reduces the movement speed and attack speed of all enemies caught within it by **35%**.`
                },
                {
                    name: "Parallel Beams",
                    input: ["Arrow keys", "Dodge", "Attack"],
                    description: 
                        `Tap normal attack during the short perfect dodge window (tap a directional key while dodging) to trigger Parallel Beams.  
                        Venus fires a pair of parallel energy beams, dealing piercing damage equal to **171.6%** of ATK + **9**.`
                }
            ],
            skill: [
                {
                    name: "Pulse Lock",
                    description: 
                        `Venus fires a guided missile that explodes on contact with enemy targets, dealing damage equal to **233.2%** of ATK + **12** and knocking down targets. **25**-second cooldown.`
                }
            ],
            discharge: [
                {
                    name: "Particle Beam Burst",
                    description: 
                        `When ***weapon charge is full*** or ***Phantasia*** is triggered, switching to this weapon will **clear all debuffs from the user** and command Venus to fire a cross-shaped ray at the ground, creating an unstable area and reducing targets' movement speed by **70%** for **5** seconds. After a brief delay, unleash an electromagnetic burst that deals damage equal to **393.9%** of ATK + **21**.  
                        Using a discharge attack will spawn **1** electrode near the enemy's position that attack once every **1.5** seconds, dealing damage equal to **39.9%** of ATK + **2**.  
                        The electrode gains **100%** of the Wanderer's stats, can be attacked or healed, and loses **3%** of its max HP every second.  
                        Only **1** Electrode can exist at any given time, and summoning a new Electrode will replace the previous one.`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/hQQTTuBKm0c?start=9",
        recommendedMatrices: [
            {
                name: "Coco Ritter",
                pieces: 4,
                description: "Excellent choice for Venus that will buff teammates with up to 100% uptime."
            },
            {
                name: "Nemesis",
                pieces: 2,
                description: "Niche option, not recommended unless you and your team are mainly using Volt weapons."
            },
            {
                name: "Pepper",
                pieces: 3,
                description: "Decent option to build weapon charge while using Venus."
            }
        ]
    },
 
    matrix: {
        set2: 
            `When a target is being healed, their volt ATK is increased by **8%/10%/12%/15%** for **20** seconds. The effect does not stack, and only the highest level's effect is applied when obtained repeatedly.`,

        set4: 
            `When healing yourself or your Electrode, the healed target gains a charge of "Lightning". The next attack within **30** seconds will cast lightning upon the target, dealing volt damage equal to **240%/300%/360%/420%** of volt ATK, and damage caused by electrodes is reduced by 50%. Cannot be triggered more than once in **10** seconds. "Lightning" charges do not stack. Only the highest level's effect is applied when obtained repeatedly.`
    },

    awakening: {
        trait1200: `After summoning an Electrode, deal volt damage equal to **60%** of ATK to all enemies within **30** meters of the Electrode and heal all allies (including the user) within its range by **120%** of ATK.`,

        trait4000: `After summoning an Electrode, deal volt damage equal to **100%** of ATK to all enemies within **30** meters of the Electrode and heal all allies (including the user) within its range by **200%** of ATK.`,

        giftCategories: ['toys', 'everyday-items', 'decorations'],

        gifts: [
            [80, "peppaFigure", "princeTataFigure"],
            [60, "tataCards", "present", "snowglobe", "foxFigure", "catFigure"],
            [30, "tataPlush", "suit", "catPlush", "perfume", "spiderFigure", "elfFigure", "robotFigure", "bunnyDoll"],
            [15, "flowers", "photoAlbum", "plant", "scarf", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '165 cm',
        birthplace: '???',
        horoscope: 'Gemini',
        birthday: '25 May',
        voiceActors: {
            jp: "戸松遥",
            en: "Suzie Yeung",
            cn: "宋媛媛"
        }
    },

    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: "Volt Resonance",
                    description: 
                        `<abbr title='China Exclusive'></abbr> When equipped with **2** or more Volt weapons, increase Volt ATK by **20%** and Volt Resistance by **40%**, taking effect in the background.`
                }
            },
            advancement: {
                star3: `<abbr title='China Exclusive'></abbr> Every **4.5** seconds, the Electrode will unleash **Ring Lightning**, which deals damage equal to a maximum of **389%** of ATK in a target area.`,

                star5: `<abbr title='China Exclusive'></abbr> After using **Pulse Lock**, increase Volt ATK by ( **10** + Number of Electrodes &times; **10** ) % for **25** seconds.`
            }
        },
        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> When a target is being healed, their volt ATK is increased by **15%/18%/21%/25%** for **20** seconds. The effect does not stack, and only the highest level will take effect when using multiple sets.`,

            set4: `<abbr title='China Exclusive'></abbr> When healing yourself or your Electrode, the healed target gains a charge of "Lightning". The next attack within **30** seconds is imbued with "Lightning", dealing volt damage equal to **300%/375%/450%/525%** of volt ATK (reduced by 50% for electrodes). Cannot be triggered more than once every **10** seconds. "Lightning" charges do not stack, and only the highest level will take effect when using multiple sets.`
        }
    }
}

export default nemesis;