const alyss = {
    name: "Alyss",
    uri: "alyss",
    imgSrc: "alyss.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 23,
                start: "1 Oct 2022",
                end: "20 Oct 2022",
                duration: "19d",
                week: "43~46"
            }
        ]
    },
    weapon: {
        name: "Immortal Wings",
        element: "ice",
        type: "dps",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["A", "8.00"],
        charge: ["S", "12.00"],
        materials: ["ice", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Frost Reaction",
                description: 
                    `Increase frost ATK by **20%** and frost resistance by **40%**. Activate by equipping **2** or more frost weapons. This set effect also works with weapons in the off-hand slot. Effect does not stack with Frost Resonance.`
            }
        },
        advancement: {
            star1: 
                `Using a frost weapon's skill while inside Cold Field will activate Alyss' support. Alyss will cast her discharge skill and then the weapon skill that triggered Alyss' support. This will be considered as using a discharge skill, triggering effects activated by discharge.`,

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 
                `Every time Night of the White Star is triggered, gain Alyss' aid, increasing Night of the White Star's and "Frostbite" damage by **30%** for **12** seconds, stacking up to **3** times.`,

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: 
                `Increase Immortal Wing's basic attack and Space Fracture damage by **50%**. When taking fatal damage, receive Alyss' protection one time, resisting the hit and becomming immune to damage for a short time, cooldown **60** seconds.`,

            star6: `When Alyss' aid reaches 3 stacks, increase frost damage by **15%**.`
        },
        abilities: {
            normal: [
                {
                    name: "Swan Arch",
                    input: ["Attack x5"],
                    description: `While on the ground, attack 5 times with Immortal Wings.`,
                    breakdown: [
                        `Deal damage equal to **101.3%** of ATK + **5** to the target and knock them back slightly.`,
                        `Deal damage equal to **107.3%** of ATK + **6** to the target and knock them back significantly.`,
                        `Deal damage equal to **116.4%** of ATK + **6** to the target and knock them back slightly.`,
                        `Deal damage equal to **141.8%** of ATK + **7** to the target and **suspend** them.`,
                        `Deal damage equal to **241.5%** of ATK + **13** to the target and **launch** them.`
                    ]
                },
                {
                    name: "Flying Wing Combo",
                    input: ["Attack x5"],
                    description: `While in the air, attack 5 times, consuming stamina.`,
                    breakdown: [
                        `Deal damage equal to **72.1%** of ATK + **4** to the target.`,
                        `Deal damage equal to **65.6%** of ATK + **3** to the target.`,
                        `Deal damage equal to **115.8%** of ATK + **6** to the target.`,
                        `Deal damage equal to **131.1%** of ATK + **7** to the target.`,
                        `Deal damage equal to **343.9%** of ATK + **18** to the target and **knock them down**.`
                    ]
                },
                {
                    name: "Flash Dance",
                    input: ["Attack", "hold:Attack"],
                    description: 
                        `While using Swan Arc, press and hold the basic attack button to gather targets and deal **506.5%** of ATK + **27** damage, with the last hit **strongly suspending** targets and deals **95%** of ATK + **5** damage.  
                        **Passive**: After successfully performing any weapon skill or entering Latent Configuration for **4** seconds, become immune to damage during the next Flash Dance`,
                },
                {
                    name: "Sweeping Dive",
                    input: ["Jump", "hold:Attack"],
                    description: `Hold attack while in the air (when there is a valid target), climbing, reverse jump attacking, or gliding to trigger a plunge attack that consumes stamina. During the descent, each hit deals **95%** of ATK + **5** damage to targets.`
                },
                {
                    name: "Waltz",
                    input: ["hold:Attack"],
                    description: `Press and hold basic attack to spin, dealing **167.2%** of ATK + **9** damage, gaining **immunity to control effects** while consuming stamina. The last hit will deal **190%** of ATK + **10** damage`
                }
            ],
            dodge: [
                {
                    name: "Dancer Form",
                    input: ["Dodge", "Attack x3"],
                    description: 
                        `After a backwards dodge, attack 3 times to deal up to **958%** of ATK +**50**, with the first hit **strongly suspending** targets.`
                },
                {
                    name: "Latent Configuration",
                    input: ["hold:Dodge"],
                    description: 
                        `Press and hold dodge to enter the Latent Configuration, continuously consuming stamina and increasing movement speed by **50%**. While inside the Cold Field, increase movement speed by an additional **50%**. When you leave the transformation, deal **492.1%** of ATK + **26** damage and freeze enemies for **2** seconds.`
                },
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, cooldown 15 seconds, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                }
            ],
            skill: [
                {
                    name: "Cold Field",
                    description: 
                        `Pull in nearby enemies and deal **982.5%** of ATK + **52** damage and **strongly suspend** enemies, cooldown **25** seconds. Enter a Cold Field for **30** seconds and gain immunity to control effects while casting the skill.  
                        **Passive**: Using a Frost weapon's discharge skill in the Cold Field deals **262.1%** of ATK + **14** "Frostbite" damage and slow targets for **2** seconds (does not apply to bosses). In the field, Immortal Wings will create a Space Fracture every **12** hits, dealing **270%** of ATK + **14** damage 1 time to targets in the area every 2 seconds, for **25** seconds (will stop when the Field disappears).`
                }
            ],
            discharge: [
                {
                    name: "Night of the White Star",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, switch to this weapon to **clear all debuffs from the user** and deal **727.9%** of ATK + **38** damage and **strongly suspend** the target. During the discharge animation, become immune to damage for **2.6** seconds (does not take effect in Apex League)."
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Alyss",
                pieces: 4,
                description: "Very high damage buff set effects."
            },
            {
                name: "Shiro",
                pieces: 4,
                description: "Great set effects for both shatter and consistent damage increase. Use 4 set for quick fights, otherwise pair with 2-set Samir or 2-set Crow."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Switching to this weapon grants a **8.75%/10%/11.25%/12.5%** final damage boost, with an additional **5%** frost damage boost if it's a frost weapon, for **18** seconds. If multiple sets are used, the highest star set will take effect.`,

        set4: `Unleashing a discharge skill with Immortal Wings grants a **12%/13.5%/15%/17%** damage boost for **18** seconds, stacking up to **2** times. Lose **1** stack when the buff expires. This effect works in the background, and if multiple sets are used, the highest star set will take effect. Stamina consumption is reduced by **50%** during Latent Configuration.`
    },

    awakening: {
        trait1200: `After successfully casting a weapon skill, gain **13%** final damage boost for **12** seconds.`,

        trait4000: `After successfully casting a weapon skill, gain **18%** final damage boost for **18** seconds. If Immortal Wings is advanced to 1 star, receive Alyss' support when using **Physical/Flame/Volt** weapon skill while inside the Cold Field. Alyss will cast her discharge skill and then the weapon skill that triggered Alyss' support. This will be considered as using a discharge skill, triggering effects activated by discharge.`,

        giftCategories: ['collectibles', 'limited-edition', 'vera'],

        gifts: [
            [80, "linyeFigure"],
            [60, "princeTataFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [20, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '177 cm',
        birthplace: 'Mirroria',
        horoscope: 'Gemini',
        birthday: '28 May',
        voiceActors: {
            jp: "",
            en: "",
            cn: "杜晴晴"
        }
    }
}

export default alyss;