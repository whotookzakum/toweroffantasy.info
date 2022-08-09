const frigg = {
    name: "Frigg",
    uri: "frigg",
    imgSrc: "frigg.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 7,
                start: "25 Mar 2022",
                end: "12 Apr 2022",
                duration: "18d",
                week: "15~18"
            },
            {
                bannerNo: 14,
                subtext: "Standard in November",
                start: "23 Jun 2022",
                end: "9 Jul 2022",
                duration: "16d",
                week: "28~30"
            }
        ]
    },
    weapon: {
        name: "Balmung",
        element: "ice",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["A", "8.00"],
        charge: ["A", "8.00"],
        materials: ["ice", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Frost Resonance",
                description:
                    `Increase frost ATK by **15%** and frost resistance by **25%**. Activate by equipping **2** or more frost weapons. This set's effect also works with weapons in the off-hand slot. Effect cannot be stacked.`
            }
        },
        advancement: {
            star1:
                `Gain **1** frostiness point every time you receive **550%** &times; Frost ATK of damage in the Frost Domain. Up to **10** frost points can be accumulated.  
                When Frost Domain ends, frostiness points &times; Frost ATK &times; **95%** of blast damage will be dealt to all enemies in the Frost Domain. After leaving the Frost Domain lose **1** frostiness point every **3** seconds.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3:
                `Increase frostiness limit to **15**. When using discharge skills of frost weapons in the frost domain, deal damage equal to **20%** of frost ATK &times; (current frostiness +5) to all targets in the frost domain.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5:
                `Shattering shields using frost weapons in the Frost Domain will freeze the target for **2** seconds and cause frostiness points &times; Frost ATK &times; **35%** of additional damage (if the target cannot be frozen, double the additional damage dealt).`,

            star6:
                `Reaching **15** Frost points while inside the ice field will grant the additional effect Frozen Domain II: when using Ice weapons, increase Ice ATK by **12%**.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: "Initiate 5 attacks in a row with Balmung when on the ground.",
                    breakdown: [
                        'Deal damage equal to **62.1%** of ATK + **3** and cause minor knockback.',
                        'Deal damage equal to **46.2%** of ATK + **2** and cause minor knockback.',
                        'Deal damage equal to **91.1%** of ATK + **5** and cause minor knockback.',
                        'Deal damage equal to **55.8%** of ATK + **3** and cause minor knockback.',
                        'Deal damage equal to **218.4%** of ATK + **11** and knocks down the target.',
                    ]
                },
                {
                    name: "Aerial Discharge",
                    input: ["Jump", "Attack x5"],
                    description: "While airborne of after jumping once, tap normal attack to attack 5 times in a row.",
                    breakdown: [
                        'Deal damage equal to **64.4%** of ATK + **3**.',
                        'Deal damage equal to **72.6%** of ATK + **4**.',
                        'Deal damage equal to **76.7%** of ATK + **4**.',
                        'Deal damage equal to **107.9%** of ATK + **6**.',
                        'Deal damage equal to **168.3%** of ATK + **9**.',
                    ]
                },
                {
                    name: "Soaring Slash",
                    input: ["hold:Attack"],
                    description:
                        `While normal attacking, hold normal attack to trigger Soaring Slash.  
                        Lunge forward with a horizontal swipe, then launch the target into the air before soaring up with the target. Deal a maximum of **134.3%** of ATK + **7** damage.`
                },
                {
                    name: "Helix Slash",
                    input: ["Jump", "hold:Attack"],
                    description:
                        `Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Helix Slash.  
                        While falling, deal damage equal to **19.8%** of ATK + **1** each hit. Upon landing, deal damage equal to **185.7%** of ATK + **10** to nearby targets.`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Multislash",
                    input: ["Dodge", "Attack"],
                    description:
                        `Tap normal attack during the short perfect attack window to trigger Multislash.  
                        Unleash multiple slashes at a set distance in front of the user, dealing total damage equal to **143.9%** of ATK + **8**.`
                },
            ],
            skill: [
                {
                    name: "Fimbulwinter",
                    description:
                        `Slash the space around the Wanderer, dealing total damage equal to **577.5%** of ATK + **30**. Can suspend and launch targets, and grant damage immunity while this skill is being used. **30**-second cooldown.  
                        After unleashing **"Fimbulwinter"** a large frost domain will be formed around you for **25** seconds. The number of dodges you can perform will not be deducted when you perform the Balmung dodge within the frost domain.  
                        Grant "Domain of Frost I" when you are in the frost domain, and increase shatter by **25%** when using a frost weapon.`
                },
            ],
            discharge: [
                {
                    name: "Frigid Fracture",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, **clear all debuffs from the user** and dash forward upon switching to this weapon, temporarily controlling opponents in an area before unleashing a gigantic slash. Deal damage equal to **618.2%** of ATK + **33** and launch enemies into the air."
                }
            ]
        },
        recommendedMatrix: {
            set2: ["samir", "crow"],
            set4: ["frigg", "saki-fuwa"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `When switching from ice weapon to ice weapon, Ice ATK is increased by **15%/18%/21%/25%** for **10** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `When using Frozen Domain, enemies within the domain take **60%/75%/90%/105%** of Ice ATK as Ice damage every second.`
    },

    awakening: {
        trait1200: `Increase frost ATK by **1.5%** every **3** seconds upon entering battle. Stack up to **10** times. Lasts for **5** seconds.`,

        trait4000: `Increase frost ATK by **2.4%** every **3** seconds upon entering battle. Stack up to **10** times. Lasts for **5** seconds. In addition, gain hyperbody and become immune to control effects in the Frost Domain.`,

        giftCategories: ['metalware', 'everyday-items'],

        gifts: [
            [60, "present", "tataCards", "pearl", "peppaFigure", "catFigure", "kitchenware"],
            [30, "juicePouch", "suit", "toolbox", "perfume", "strangeFragment"],
            [15, "flowers", "dumbbells", "scarf"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '190 cm',
        birthplace: '???',
        horoscope: 'Aquarius',
        birthday: '1 Feb',
        voiceActors: {
            jp: "伊藤静 (Shizuka Ito)",
            en: "",
            cn: "杨梦露"
        }
    },

    // Add CN Tags back once she's released in global
    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: "Frozen Domain",
                    description:
                        `After using the Weapon Skill **Fimbulwinter**, a large ice field will be placed at your position, lasting  **25** seconds. Inside the ice field, dodges will not be consumed while using Frigg's weapon, and gain the effect Frozen Domain I: when using Ice weapons, increase Ice ATK by **15%** and Shatter by **25%**.`
                }
            },
            advancement: {
                star3:
                    `Increase frostiness limit to **15**. When using discharge skills of frost weapons in the frost domain, deal damage equal to **25%** of frost ATK &times; (current frostiness +5) to all targets in the frost domain.`,

                star6: 
                    `Reaching **15** Frost points while inside the ice field will grant the additional effect Frozen Domain II: when using Ice weapons, increase Ice ATK by **25%**.`
            }
        }
    }
}

export default frigg;