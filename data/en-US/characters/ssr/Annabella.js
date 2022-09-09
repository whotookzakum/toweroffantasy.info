const annabella = {
    name: "Annabella",
    uri: "annabella",
    imgSrc: "annabella.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 20,
                start: "9 Sep 2022",
                end: "28 Sep 2022",
                duration: "19d",
                week: "40~43"
            },
        ]
    },
    weapon: {
        name: "Cross Sniper",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "12.00"],
        charge: ["A", "9.00"],
        materials: ["flame", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Flame Reaction",
                description: 
                    `Increase flame ATK by **20%** and flame resistance by **40%**. Activate by equipping **2** or more flame weapons. This set effect also works with weapons in the off-hand slot. Effect does not stack with Flame Resonance.`
            },
            effect2: {
                title: "Peace of Mind",
                description: 
                    `Using Cross Sniper's skill, discharge, charged attack, or dodge increases Cross Sniper's final crit rate by **5%** for **15** seconds. Stacks up to **3** times. If crit rate exceeds **100%**, **50%** of the excess crit rate is converted to crit damage (up to **7.5%**).`
            }
        },
        advancement: {
            star1: 
                `Hitting the target **2** times with Scoped Shot will create an **optical space** at the target location for **12** seconds. Enemies within the space will trigger a burn settlement and then automatically trigger 2 burn settlements. When enemies leave the space, their movement speed is reduced by **80%** for **5** seconds, cooldown **12** seconds.  
                Enemies targeted by the Scoped Shot shot will be scared for **1.5** seconds, reducing their attack speed and movement speed by **80%**, cooldown **4** seconds.`,

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 
                `After a critical hit by Scoped Shot, recover **50%** of damage dealt as HP (up to **15%** of Max HP) and gain **50** weapon charge.  
                Peace of Mind: each stack increases final crit rate by **9%** (up to **27%**), and maximum crit damage conversion is **13.5%**.`,

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: 
                `**Violent Bullet Enhancement** - "Enhanced Scorch" state increases the target's scorching damage to **30%**.  
                **Deception Magic Bullet Enhancement** - Gas detonation damage ignores the target's flame resistance by **30%**.`,

            star6: "Increase Scoped Shot's damage by **20%**."
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x3"],
                    description: `While on the ground, attack 3 times with a sniper rifle.`,
                    breakdown: [
                        `Deal damage equal to **44.2%** of ATK + **2** to the target and knock them back.`,
                        `Deal damage equal to **84.4%** of ATK + **4** to the target and knock them back.`,
                        `Deal damage equal to **176.9%** of ATK + **9** to the target and knock them down.`
                    ]
                },
                {
                    name: "Scoped Shot",
                    input: ["hold:Attack"],
                    description: 
                        `Hold the basic attack to enter to scope in and charge the sniper rifle, firing a charged attack that deals damage equal to **58%** of ATK + **3** to the target. Shots charged to stage 3 can deal up to **400.8%** of ATK + **21**. Hitting an enemy's head triggers a headshot (does not apply to Wanderers) dealing double damage and suspending the target.  
                        **Passive:** When Scoped Shot hits a burning target or deals a critical hit, gain **300** weapon charge, cooldown **15** seconds.  
                        **Passive:** Using Scoped Shot increases your movement speed by **30%** for **3** seconds.`,
                },
                {
                    name: "Boiling Point",
                    input: ["Attack", "hold:Attack"],
                    description: `Hold attack after normal attacking to fire a laser projectile that explodes on contact, dealing damage equal to **150%** of ATK + **8** and suspending targets within range.`
                },
                {
                    name: "Aerial Attack",
                    input: ["Jump", "Attack x3"],
                    description: `While airborne, tap basic attack 3 times to perform consecutive aerial attacks.`,
                    breakdown: [
                        `Deal damage equal to **47.6%** of ATK + **3** to the target and knock them back.`,
                        `Deal damage equal to **90.6%** of ATK + **5** to the target and knock them back.`,
                        `Deal damage equal to **190.5%** of ATK + **10** to the target and knock them down.`
                    ]
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, cooldown 15 seconds, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Twilight Arc",
                    input: ["Dodge", "Attack"],
                    description: 
                        `Jump backwards and throw an explosive shell, detonating when it hits the ground and dealing damage equal to **37%** of ATK + **2** and suspending targets.  
                        **Passive:** Tap basic attack after using Twilight Arc to instantly fire a fully-charged Scoped Shot.`
                },
            ],
            skill: [
                {
                    name: "Backup Magazine",
                    description: 
                        `Activate the skill once to alternate between enhancement magazines. Depending on the magazine you choose, the effects of Scoped Shot and Twilight Arc will be changed. Activate the skill again when the desired magazine is showing as the skill icon to equip that magazine. The skill will remain active until the magazine is empty (after **8** Scoped Shots). The skill has a cooldown of **14** seconds.  
                        &nbsp;  
                        **Firebomb Magazine:** Scoped Shots will explode and deal flame AoE damage equal to **59.2%** of ATK + **3**, up to **410%** of ATK + **22** after charging. If the hit target is not inflicted with a burn, apply "Cross Burn" to the target (deals **120%** of ATK every second for **13** seconds). If the target was already inflicted with a burn, apply "Cross Burn" while gaining "Burn Enhancement" (increases burn damage by **20%** for **20** seconds). Twilight Arc throws **3** explosive shells while this magazine is active.  
                        &nbsp;  
                        **Gasbomb Magazine:** Scoped Shots fire a gas bomb, dealing damage equal to **80.9%** of ATK + **4**, up to **560.5%** of ATK + **30** after charging. The gas lasts for **7** seconds and slows enemies within its radius. Twilight Arc can detonate the gas (the longer you charge Scoped Shot, the more damage the gas detonation will deal) for explosion damage up to **620%** of ATK + **33** and reduce flame resistance of targets by **10%**.  
                        &nbsp;  
                        **Passive:** For the duration of the magazine, gain "Optical Enhancement", which reduces the charge time Scoped Shot by **30%** and grants immunity to control effects while charging. For every **2** dodges, the first one will not consume a dodge (up to **4** times).  
                        &nbsp;  
                        **Passive:** While equipped with the Gasbomb magazine, using Scoped Shot will reduce skill cooldowns of other flame weapons by **0.7** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Missile Command",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, switch to this weapon to **clear all debuffs from the user**, throw a firebomb, and snipe it to detonate, dealing damage equal to **890%** of ATK + **47** to targets within range. During the discharge animation, become immune to damage for **2.6** seconds (does not take effect in Apex League)."
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Annabella",
                pieces: 4,
                description: "Very high damage and crit damage buff set effects with 100% uptime."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate. Cross Sniper's kit boosts crit rate by a considerable amount as well."
            },
            {
                name: "Ruby",
                pieces: 2,
                description: "Easy to main Flame ATK buff should you decide to use it on Cross Sniper."
            },
            {
                name: "Shiro",
                pieces: 2,
                description: "Great matrix set for both shatter and consistent damage increase."
            },
            {
                name: "Samir",
                pieces: 2,
                description: "Cross Sniper will have a hard time maintaining damage buff stacks with this set, so it is best used only when there are multiple mobs that you can spam Twilight Arc on."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Hitting a target with a Flame weapon increases final damage by **6%/7%/8%/9%** and final crit rate by **2.5%/2.5%/3%/3%** for **30** seconds, up to **2** stacks. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `Equip 2 or more Flame weapons to activate the "Flowing Flames" effect; increase final damage by **13%/15%/17%/19%**, and after a critical hit increase crit damage by **21%/24%/27%/30%** for **10** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },

    awakening: {
        trait1200: `Every time gas explosion hits at least **1** enemy, the damage of Cross Sniper is increased by **10%** for **20** seconds, stacks **2** times.`,

        trait4000: `Every time gas explosion hits at least **1** enemy, the damage of Cross Sniper is increased by **18%** for **20** seconds, stacks **2** times.`,

        giftCategories: ['decorations', 'rare-items', 'games', 'vera'],

        gifts: [
            [80, "princeTataFigure"],
            [60, "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [15, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '166 cm',
        birthplace: '???',
        horoscope: 'Taurus',
        birthday: '28 April',
        voiceActors: {
            jp: "",
            en: "",
            cn: "洪海天"
        }
    }
}

export default annabella;