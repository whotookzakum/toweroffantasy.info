const claudia = {
    name: "Claudia",
    uri: "claudia",
    imgSrc: "claudia.png",
    rarity: "SSR",
    chinaOnly: false,
    banners: {
        cn: [
            {
                bannerNo: 1,
                start: "22 Dec 2021",
                end: "5 Jan 2022",
                duration: "14d",
                week: "2~4"
            },
            {
                bannerNo: 6,
                subtext: "Standard afterwards",
                start: "19 Mar 2022",
                end: "21 Mar 2022",
                duration: "2d",
                week: "14/15"
            }
        ]
    },
    weapon: {
        name: "Guren Blade",
        element: "physical",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "7.50"],
        charge: ["S", "12.00"],
        materials: ["physical", "red", "blue"],
        advancement: {
            star1: `After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by **8%** for **25** seconds (stacks up to **3** times; each successful skill or discharge use can only grant a single stack).`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by **10%** for **15** seconds. Stack up to **1** time.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by **20%** for **15** seconds (cannot stack).`,

            star6: `Hitting the same target no longer reduces the damage dealt. After using Guren Blade or a discharge skill, applies **1** stack of War Wounds to all targets within 8 meters.`
        },
        abilities: {
            normal: [
                {
                    name: "Quick Slash",
                    description: `While on the ground, swing the blade to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **39%** of ATK + **2** and knock the target back a short distance.',
                        'Deal damage equal to **54.6%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **49.4%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **87%** of ATK + **5** and knock the target back a short distance.',
                        'Deal damage equal to **148.1%** of ATK + **8** and **launch** the target.'
                    ]
                },
                {
                    name: "Jumping Strike",
                    description: `While airborne, tap normal attack to attack 4 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **23.2%** of ATK + **1**.',
                        'Deal damage equal to **40.3%** of ATK + **2**.',
                        'Deal damage equal to **95.4%** of ATK + **5**.',
                        'Deal damage equal to **115.8%** of ATK + **6** and deliver a **knockdown**.'
                    ]
                },
                {
                    name: "Cyclone",
                    description: `Hold the normal attack button after normal attacks to trigger Cyclone. Knock the target, suspending them in mid-air and deal **39.8%** of ATK + **2** to a single target.`,
                },
                {
                    name: "Diving Edge",
                    description: `Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to **10%** of ATK + **1** each hit. Upon landing, deal damage equal to **63.6%** of ATK + **3** and knock the target back. The higher you are when cast, the higher the damage dealt, up to **600%** of ATK.`,
                },
                {
                    name: "Sneak Attack",
                    description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                },
                {
                    name: "Leap Attack",
                    description: `Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to **31.6%** of ATK + **2**, **knocking the target into the air** and becoming airborne, then deal additional damage equal to **47.3%** of ATK + **2**.`,
                }
            ],
            skill: [
                {
                    name: "Roam",
                    description: `Dance through targets while swinging the blade, dealing damage equal to **348.5%** of ATK + **18** in total to up to **5** targets (attacks on the same target deal **20%** less damage). At the end of the ability, slash the space in front, dealing damage equal to **264%** of ATK + **14** to targets and knocking them into the air. Immune to crowd-control effects while ability is in use. Cooldown: **15** seconds.`,
                }
            ],
            discharge: [
                {
                    name: "Unbridled Flurry",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, who charges and **airbornes** a target to deal **436.2%** x ATK + **23** damage, leaving behind a bladestorm that deals **174.4%** x ATK + **9** damage to the target, while immunizing self to grievous/freeze/burn/electrify effects for **5** seconds.`,
                }
            ]
        },
        recommendedMatrix: {
            set2: ["claudia", "samir", "crow"],
            set4: ["claudia"],
            set3: ["pepper", "sobek"]
        }
    },

    matrix: {
        set2: `Increase damage by **13%/17%/20%/23%** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.`,

        set4: `Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **1.5/2/2.5/3** seconds and increases the damage of discharge skills by **36%/45%/54%/63%** for **15** seconds.`,
    },

    awakening: {
        trait1200: `Hide for **1** seconds upon dodging.`,

        trait4000: `Hide for **1.5** seconds upon dodging.`,

        giftCategories: ['everyday-items', 'rare-items', 'decorations'],

        gifts: [
            [80, "snowglobe", "peppaFigure"],
            [60, "seal", "tataCards", "miaFigure", "catFigure", "princeTataFigure", "ufo"],
            [30, "suit", "juicePouch", "vial", "perfume", "spiderFigure", "elfFigure"],
            [15, "flowers", "photoAlbum", "photo", "scarf", "plant", "harmonica"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '170 cm',
        birthplace: 'Hagarge',
        horoscope: 'Capricorn',
        birthday: '16 Jan',
        voiceActors: {
            jp: "小松未可子 (Mikako Komatsu)",
            en: "",
            cn: "文小"
        }
    }
}

export default claudia;