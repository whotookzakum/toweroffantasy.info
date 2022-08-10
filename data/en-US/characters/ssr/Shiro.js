const shiro = {
    name: "Shiro",
    uri: "shiro",
    imgSrc: "shiro.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Chakram of the Seas",
        element: "physical",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["A", "10.00"],
        charge: ["B", "6.00"],
        materials: ["physical", "green", "black"],
        advancement: {
            star1: `Increase damage dealt to and all elemental shattering effects on targets within *Full Bloom*'s range by **30%**.`,
            
            star2: `Increase the current weapon's base ATK growth by **16%**.`,
            
            star3: `Increase shatter by **15%** and reset all weapon skill cooldowns upon shattering the target's shield. Can only be triggered once every **30** seconds.`,
           
            star4: `Increase the current weapon's base HP growth by **32%**.`,
            
            star5: `Attacking a grievous target extends the duration of grievous by an additional **7** seconds (only take effect once for the same effect).`,
           
            star6: `After using *Full Bloom*, grant a 100% crit chance for the next **8** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Rapid Throw",
                    input: ["Attack x5"],
                    description: `While on the ground, swing the chakram to unleash 5 spinning attacks.`,
                    breakdown: [
                        'Deal damage equal to **23.6%** of ATK + **1**.',
                        'Deal damage equal to **18.3%** of ATK + **1**.',
                        'Deal damage equal to **26.2%** of ATK + **1**.',
                        'Deal damage equal to **23.6%** of ATK + **1**.',
                        'Deal damage equal to **41.4%** of ATK + **2** and knock the target back a short distance.'
                    ]
                },
                {
                    name: "Aerial Discharge",
                    input: ["Jump","Attack x3"],
                    description: `While airborne or after jumping once, tap normal attack to unleash 3 spinning attacks in a row.`,
                    breakdown: [
                        'Deal damage equal to **20.1%** of ATK + **1**.',
                        'Deal damage equal to **22.5%** of ATK + **1**.',
                        'Deal damage equal to **28.6%** of ATK + **2**.'
                    ]
                },
                {
                    name: "Scatter",
                    input: ["Attack x2","hold:Attack"],
                    description: `After the second normal attack, hold attack button to activate Scatter. Fire five penetrating chakrams forward, each hit dealing **33.5%** x ATK + **2** damage, with minor knockback.`
                },
                {
                    name: "Air Spin",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne to trigger Air Spin. Unleash a powerful strike, dealing damage equal to **147.3%** of ATK + **8** to the target and nearby enemies, and knocking them into the air.`
                },
                {
                    name: "Sneak Attack",
                    input: ["Crouch","Attack"],
                    description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **427.5%** of ATK + **23**.`
                }
            ],
            dodge: [
                {
                    name: "Waning Moon",
                    input: ["Dodge","Attack"],
                    description: `Tap normal attack during the short period after dodging to trigger Waning Moon. Toss a spinning chakram forward, dealing damage equal to **102.2%** of ATK + **5** to the target and inflicting a **stun** effect for **0.5** seconds. The chakram then splits into **3** and keeps traveling, dealing damage equal to **14.6%** of ATK + **1** to targets along their path. ***Split chakrams will bounce during Full Bloom***.`
                },
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                }
            ],
            skill: [
                {
                    name: "Full Bloom",
                    description: `Create a Chakram Domain with the Wanderer at the center for **8** seconds. For **8** seconds after unleashing, pull in targets and reduce their speed by **30%**. Also fire **5** chakrams that bounce between enemies, dealing damage equal to **14.3%** of ATK + **1** to targets on their paths, bouncing up to **5** times. ***The split chakrams triggered by Waning Moon also bounce up to 5 times***. **45**-second cooldown.`
                }
            ],
            discharge: [
                {
                    name: "Spirit of the Air",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and unleashes Chakram of the Seas at a target. Struck target causes AOE **stun** for **1** second, plus **1** attack each against up to **3** units every second (each attack has **10%** chance of **stunning** the target for **1.5** seconds), dealing **31.8%** x ATK + **2** damage for **10** seconds.`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/z4qOq5g5lT8?start=10",
        recommendedMatrix: {
            set2: ["king", "shiro", "samir"],
            set3: ["sobek"]
        }
    },
    

    matrix: {
        set2: `Increase both damage and shatter to targets with more than **50%** HP by **15%/19%/22.5%/26%**.`,

        set4: `Upon entering battle, gain a **20%/25%/30%/35%** damage boost for **20** seconds. Reset **5** seconds after exiting battle.`
    },

    awakening: {
        trait1200: `When Shiro uses a weapon skill/discharge skill, increase all kinds of ATK by **10%** and physical ATK by an additional **7%** for **8** seconds. Cooldown: **16** seconds.`,

        trait4000: `When Shiro uses a weapon skill/discharge skill, increase all kinds of ATK by **16%** and physical ATK by an additional **10%** for **8** seconds. Cooldown: **16** seconds.`,

        giftCategories: ['metalware', 'collectibles', 'rare-items'],

        gifts: [
            [80, "kitchenware", "seal"],
            [60, "miaFigure", "goldCoin", "foxFigure", "ufo", "bearFigure", "snowglobe", "present", "pearl", "linyeFigure"],
            [30, "vial", "necklace", "toolbox", "strangeFragment"],
            [15, "dumbbells", "harmonica", "photo", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '163 cm',
        birthplace: 'Warren',
        horoscope: 'Virgo',
        birthday: '22 Sep',
        voiceActors: {
            jp: "小澤亜李 (Ari Ozawa)",
            en: "Kristen McGuire",
            cn: "小耗"
        }
    },

    cnData: {
        matrix: {
            set4: `<abbr title='China Exclusive'></abbr> Upon entering battle, gain a **20%/25%/30%/35%** damage boost for **35** seconds. Reset **5** seconds after exiting battle.`
        },
    }
}

export default shiro;
