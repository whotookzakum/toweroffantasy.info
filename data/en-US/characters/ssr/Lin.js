const lin = {
    name: "Lin",
    uri: "lin",
    imgSrc: "lin.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 15,
                subtext: "Limited Banner only",
                start: "9 Jul 2022",
                end: "29 Jul 2022",
                duration: "20d",
                week: "30~33"
            }
        ]
    },
    weapon: {
        name: "Shadow Weaver",
        element: "aberration",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "11.50"],
        charge: ["S", "11.50"],
        materials: ["red", "green", "black", "blue"],
        bonusEffect: {
            effect1: {
                title: `Weapon Mastery`,
                description: `Activate **Weapon Mastery** when used with other weapons. Nightblooms will randomly appear around the target and explode within **1-3** seconds, dealing **60%** AoE damage.`
            }
        },
        advancement: {
            star1: `Normal attacks deal AoE damage. When Nightblooms are in explosion range of each other, increase the damage of subsequent explosions by **10%** each (up to **50%**). **Moonlight Realm** reduces the spawn time of Nightblooms to **0.5** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `**Moonlight Realm** reduces the spawn time of Nightblooms to **0.3** seconds. Nightblooms now attach to enemy targets. The duration of **Moonlight Realm** is increased to **20** seconds.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `While inside **Moonlight Realm**, gain **30** weapon charge per second and increase damage of discharge skills by **15%**.`,

            star6: `**Moonlight Realm** can be activated up to **2** times. Gain **1** charge from skill cooldown. Gain **1** charge from using discharge skills **3** times (effective in the background). The damage bonus while inside **Moonlight Realm** is increased to **15%**.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, use Shadow Weaver to perform 5 attacks.`,
                    breakdown: [
                        `Deal damage equal to **59.9%** of ATK + **3**.`,
                        `Deal damage equal to **57.1%** of ATK + **3**.`,
                        `Deal damage equal to **49.5%** of ATK + **3**.`,
                        `Deal damage equal to **114.2%** of ATK + **6**.`,
                        `Deal damage equal to **152.2%** of ATK + **8**.`
                    ]
                },
                {
                    name: "Air Strike",
                    input: ["Jump", "Attack x5"],
                    description: `While airborne, tap basic attack 5 times to perform consecutive attacks in the air.`,
                    breakdown: [
                        `Deal damage equal to **30.6%** of ATK + **2**.`,
                        `Deal damage equal to **55.6%** of ATK + **3**.`,
                        `Deal damage equal to **48.2%** of ATK + **3**.`,
                        `Deal damage equal to **111.2%** of ATK + **6**.`,
                        `Deal damage equal to **148.3%** of ATK + **8**.`
                    ]
                },
                {
                    name: "Mud Scatter",
                    input: ["Attack", "hold:Attack"],
                    description: 
                        `After the second basic attack on the ground or in the air, hold the basic attack to trigger mud scatter.  
                        &nbsp;  
                        Launch an attack at the target location, dealing damage equal to **83.2%** of ATK + **4** and knocking the target down.  
                        &nbsp;  
                        Passive: Quickly click the basic attack after mud scatter to perform a fully charged Short-lived.`
                },
                {
                    name: "Short-lived",
                    input: ["hold:Attack"],
                    description: 
                        `Hold the basic attack to release a Short-lived, can be charged up to three stages, gaining immunity to control effects while charging.  
                        &nbsp;  
                        The first stage deals damage equal to **73.9%** ATK + **4**.  
                        The second stage deals damage equal to **146.2%** of ATK + **8**.  
                        The third stage deals damage equal to **246.2%** of ATK + **13**.`
                },
                {
                    name: "Falling Shadow",
                    input: ["Jump", "hold:Attack"],
                    description: `Falling quickly from the air, deal damage equal to **160%** of ATK + **8** and knocking down targets.`
                },
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Just Leave Greenery",
                    input: ["Dodge", "Attack"],
                    description: 
                        `Launch an attack on the target while dodging midair, dealing damage equal to **70%** of ATK + **4**. The hit generates **1-3 Nightblooms** and forms a field that lasts for **5** seconds that reduces enemy movement speed by **50%**.  
                        &nbsp;  
                        Passive: can be used on the ground or in the air.  
                        &nbsp;  
                        Passive: When under control effects, immediately break out and cast the field (automatically use a dodge attack without consuming dodge count), cooldown **20** seconds.`,
                }
            ],
            skill: [
                {
                    name: "Moonlight Realm",
                    description: `A Moonlight Realm of the moon is formed around yourself for **15** seconds. In the Realm, gain a **10%** damage bonus, you can double jump multiple times, gain **20%** increased jumping ability, and reduce stamina consumption by **50%** (cooldown **30** seconds).  
                    &nbsp;                      
                    When using Shadow Weaver inside Moonlight Realm, enter the state of "Cold Air", where your falling speed is greatly reduced. Jumping while moving in a direction will allow you to perform a shuttle and launch an attack dealing **66%** of ATK + **3** and spawn **1-3** Nightblooms.  
                    &nbsp;  
                    Passive: Inside Moonlight Realm, a **Nightbloom** will be generated near a target every **0.8** seconds.  
                    &nbsp;  
                    Passive: When using Shadow Weaver inside Moonlight Realm, increase damage by **50%** against targets with less than **20%** HP.  
                    &nbsp;  
                    Passive: When using Shadow Weaver inside Moonlight Realm, teleport away from the target when you are about to take damage, cooldown **10** seconds.  
                    &nbsp;  
                    When paired with two **Flame weapons**, Moonlight Realm is transformed into a Flame Moonlight Realm. While inside the Realm, any burn effects applied will have their duration extended by **4** seconds, and increase flame damage to shielded targets by **15%**.  
                    &nbsp;  
                    When paired with two **Volt weapons**, Moonlight Realm is transformed into a Thunder Moonlight Realm. In the Realm, increase Volt damage by **30%**, dodges have a **65%** chance of not being consumed, and each dodge attacks deal **35%** more damage.  
                    &nbsp;  
                    When paired with two **Frost weapons**, Moonlight Realm is transformed into an Ice Moonlight Realm. When enemies in the Realm receive frost damage **10** times, they enter a state of frostbite for **15** seconds, receiving **22%** more frost damage. The number of hits to activate frostbite does not accumulate while the enemy is in the frostbite state.  
                    &nbsp;  
                    When paired with two **Physical weapons**, Moonlight Realm is transformed into a Physical Moonlight Realm. When there is an active life shield in the Realm, deal damage equal to **150%** of ATK + **8** every second.  
                    &nbsp;  
                    When paired with two **weapons of different elements**, gain **15%** attack for all elements while inside the Realm (considered as activating elemental resonances for flame, volt, frost, and physical).`
                },
            ],
            discharge: [
                {
                    name: "Gravity Weave",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and release a gravity field with a strong pull, dealing damage equal to **542%** of ATK + **29**. After **5** seconds, the gravity field explodes in a wide diffusion wave, dealing **271%** of ATK + **14** damage. During the skill, become immune to damage for **2.6** seconds (does not take effect in Apex League).`
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Lin",
                pieces: 4,
                description: "Extremely powerful damage and attack buffs that are easy to upkeep."
            },
            {
                name: "Samir",
                pieces: 2,
                description: "Recommended only if you're using Shadow Weaver as a DPS and not solely for DoT/buffs, otherwise use Lin 2-piece set. Shadow Weaver deals many hits, easily maintaining uptime of the damage buff."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "Recommended only if you're using Shadow Weaver as a DPS and not solely for DoT/buffs, otherwise use Lin 2-piece set. At high crit rate, Crow's 2 set is the second best choice for damage. Otherwise, opt for 2-piece Shiro matrices."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Successful attacks increase your attack power by **3%/3.7%/4.3%/5%** for 18 seconds, stacking up to 5 times. If multiple sets are used, only the highest star set will take effect.`,

        set4: `Traveling 5 meters within Moonlight Realm will grant 1 stack of [Moon's Realm], increasing your total damage by **7%/8.3%/9.6%/11%** for 15 seconds, stacking up to 3 times. Effect is active in the background. If multiple sets are used, only the highest star set will take effect.`
    },

    awakening: {
        trait1200: `Nightbloom's explosion damage increased by **15%**`,

        trait4000: `Nightbloom's explosion damage increased by **20%**. Nightbloom explosions reduce all elemental resistances of the affected targets by **7%** for **7** seconds. This effect cannot stack.`,

        giftCategories: ['metalware', 'decorations', 'vera'],

        gifts: [
            [80, "princeTataFigure"],
            [60, "linyeFigure"],
            [40, "strangeFragment"],
            [30, "bunnyDoll"],
            [15, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '175 cm',
        birthplace: 'Mirroria',
        horoscope: 'Virgo',
        birthday: '3 Sep',
        voiceActors: {
            jp: "",
            en: "",
            cn: "陈婷婷"
        }
    }
}

export default lin;