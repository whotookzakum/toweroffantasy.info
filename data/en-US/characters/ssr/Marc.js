const marc = {
    name: "Marc",
    uri: "marc",
    imgSrc: "marc.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 4,
                subtext: "Collaboration Event",
                start: "14 Feb 2022",
                end: "4 Mar 2022",
                duration: "18d",
                week: "10~12"
            },
            {
                bannerNo: 11,
                subtext: "Collaboration Event",
                start: "24 May 2022",
                end: "3 Jun 2022",
                duration: "10d",
                week: "24~25"
            }
        ]
    },
    weapon: {
        name: "Dawn",
        element: "physical",
        type: "defense",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "9.00"],
        charge: ["S", "12.00"],
        materials: ["physical", "red", "black"],
        // Omni Shield? Mecha Shield? Heavy Dimensional/3D Shield?????
        bonusEffect: {
            effect1: {
                title: `Guardian`,
                description: `**[GROUP PLAY]** When using Re-entry, Form Switch, or Full Shot, take **40%** damage for your lowest HP ally and recover 10% of it back after **10** seconds. Only activates while using Perseverance Resonance and the effect cannot be removed early or reactivated until it ends.`
            },
            effect2: {
                title: `Amplify`,
                description: `**[SOLO PLAY]** Mecha Form gains **50%** physical damage reduction.`
            },
            effect3: {
                title: `Omni Shield`,
                description: `Mecha basic attack/Double Smash/Impact Slash will give **1** point of Mecha Energy. At **20** points, convert **20%** of your current HP into a [Omni Shield] with **1.5x** your max HP (cannot exceed 1.5x max HP and healing is reduced by 50% while active). The shield lasts for **15** seconds and cannot be gained if you are below **10%** HP.  
                &nbsp;   
                After the duration, **66.7%** of the remaining shield value is converted to HP, and hitting a weak target nets **2** points of energy.  
                &nbsp;  
                When triggering the effect, convert active HP shields into [Omni Shield]. Other HP shields cannot be obtained while active.`
            }
        },
        advancement: {
            star1: `Activating Re-entry, Form Switch, or Full Shot will instantly grant [Omni Shield].`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `When [Omni Shield] breaks or refreshes, increase final damage by **35%** for **20** seconds, does not stack.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `When [Omni Shield] breaks or refreshes, inflict **160%** of ATK + **5%** of lost HP to nearby targets and gains **50** weapon charge points on hit.`,

            star6: `While [Omni Shield] is active, Physical Resistance is **doubled** and provides Dominance effect. [Omni Shield] can be obtained when another Weapon Skill or Discharge Skill hits the target while the shield is active.`
        },
        abilities: {
            normal: [
                {
                    name: "Hunter Attack",
                    input: ["Attack x4"],
                    description: `While on the ground, perform 4 basic attacks in a row.`,
                    breakdown: [
                        `Deal damage equal to **56.4%** of ATK + **3**`,
                        `Deal damage equal to **30.2%** of ATK + **2**`,
                        `Deal damage equal to **120.7%** of ATK + **6**`,
                        `Deal damage equal to **139.8%** of ATK + **7**`
                    ]
                },
                {
                    name: "Wild Hunter Punch",
                    input: ["Jump", "Attack"],
                    description: `Use a normal attack while in the air, which can trigger a heavy attack and cause damage to the target hit. Dealing **108.4%** of ATK + **6** damage and knocks the target back.`
                },
                {
                    name: "Heavy Punch",
                    input: ["Attack x5"],
                    description:
                        `When in the Mech form, perform basic attack five times in a row, hitting the same target 4 times adds a weakness lasting for 20 seconds, not stackable.  
                        After switching back to the original form, perform 5 basic attacks in a row, adding a weakness status to the targets, dealing increased damage of 10%. The effect lasts for 20 second.`,
                    breakdown: [
                        `Mech form: Deal damage equal to **70.7%** of ATK + **4** and knock the target back a short distance.
                        Original form: Deal damage equal to **87.6%** of ATK + **5** and knock the target back a short distance.`,

                        `Mech form: Deal damage equal to *38.7%** of ATK + **2** and knock the target back a short distance.
                        Original form: Deal damage equal to **48.2%** of ATK + **3** and knock the target back a short distance.`,

                        `Mech form: Deal damage equal to *109.4%** of ATK + **6** and knock the target back a short distance.
                        Original form: Deal damage equal to **185.5%** of ATK + **10** and knock the target back a short distance.`,

                        `Mech form: Deal damage equal to *129.6%** of ATK + **7** and knock the target back a short distance.
                        Original form: Deal damage equal to **151.9%** of ATK + **8** and knock the target back a short distance.`,

                        `Mech form: Deal damage equal to *188.5%** of ATK + **10** and **launch** the target.
                        Original form: Deal damage equal to **365.3%** of ATK + **19** and **launch** the target.`,
                    ]
                },
                {
                    name: "Double Smash",
                    input: ["Jump", "Attack"],
                    description: `Hold Attack while jumping or when in the air to trigger a Mech Heavy Strike. When landing, causes damage to nearby targets equal to **135.4%** of ATK + **7** damage and controls the **floating** target. The higher the distance from the ground when triggered, the higher the damage, up to **600%** damage.`
                },
                {
                    name: "Shoulder-gun Fire",
                    input: ["hold:Attack"],
                    description: `Hold attack while in Mech form to launch 3 missiles. Hitting a target deals **17.8%** of ATK + **1** damage, the explosion deals **26.7%** of ATK + **1** damage.`
                },
                {
                    name: "Impact Slash",
                    input: ["Attack", "hold:Attack"],
                    description: `Press and hold the attack to trigger the branch attack during the general attack.  
                    When in Mech form, leap up and hit the ground, dealing **250.3%** of ATK + **13** damage to nearby targets and force control the floating targets.  
                    When in original form, sprint forward, dealing **254.5%** of ATK + **13** damage to targets along the way and forcibly controlling flying targets.`
                },
                {
                    name: "Wild Hunter Shot",
                    input: ["hold:Attack"],
                    description: `Use the pistol to aim at the target and shoot, dealing **23.9%** of ATK + **1** damage to the target.`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                },
                {
                    name: "Mecha Collision",
                    description: `In the short window after dodging, tap the basic attack to trigger Mecha Collision. Deals **149.1%** of ATK + **8** damage to the target along the way, and knocks the target back slightly.`,
                },
            ],
            skill: [
                {
                    name: "Mecha Entry",
                    description: `The Mecha will jump down, dealing **395.3%** of ATK + **21** damage to surrounding targets, and **strongly suspends** targets, with a **20**-second cooldown.  
                    Passive: In the Mech form, become immune to the rigidity effect, and other sources other than the uncontrolled source cannot be used.`
                },
                {
                    name: "Form Switch",
                    description: `The Mecha leaps down, dealing **395.3%** of ATK + **21** damage and  **strongly suspending** surrounding targets before switching forms. Cooldown **20** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Full Bomb Launch",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and releases a large number of missiles, dealing **513.3%** of ATK + **27** damage to the target.  
                    Passive: In the Mech form, become immune to control effects, but cannot use any relic other than those that free you from control effects.`
                }
            ]
        },
        recommendedMatrix: {
            set2: ["marc", "king", "shiro"],
            set4: ["marc"],
            set3: ["sobek"]
        },
        recommendedMatrices: [
            {
                name: "Marc",
                pieces: 4,
                description: "Excellent utility effects that apply to team members as well. Use 4 pieces for the damage buff, or 2 pieces for just the life shield."
            },
            {
                name: "Shiro",
                pieces: 2,
                description: "Increases Dawn's overall damage and shatter."
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
        set2: `Attacking an enemy adds a life shield to all teammates for **15%** of your current HP, lasting **15** seconds and resetting after leaving combat for **10** seconds. This shield combines with other shields. When the shield is activated, damage received is reduced by **11%/13%/15%/17%** for **15** seconds (not stackable). This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `When life shields are obtained from any source, increase your ATK by **6%/7.5%/9%/11.5%** and teammates' ATK by **3%/3.5%/4.5%/5.75%** for **15** seconds, up to **3** stacks. This effect works in the background, and if multiple sets are used, the highest star set will take effect.` // Effect can activate from shields granted from other players
    },

    awakening: {
        trait1200: `When Marc takes lethal damage from an enemy, he survives the attack and is granted Ressurection, provoking the surrounding enemies for **5** seconds. During Ressurection, Marc cannot perform any actions, does not take damage, recovers **1%** HP every second, and healing received is increased by **20%**. This effect has a cooldown of **10** minutes. Damage from Stinging Eel and Ground Roar is reduced by **50%**.`,

        trait4000: `When Marc takes lethal damage from an enemy, he survives the attack and is granted Ressurection, provoking the surrounding enemies for **5** seconds. During Ressurection, Marc cannot perform any actions, does not take damage, recovers **2%** HP every second, and healing received is increased by **50%**. This effect has a cooldown of **10** minutes. Damage from Stinging Eel and Ground Roar is reduced by **50%**.`,

        giftCategories: ['metalware'],

        gifts: [
            [60, "kitchenware", "present", "pearl", "bearFigure"],
            [30, "toolbox", "strangeFragment"],
            [15, "dumbbells"]
        ],
    },

    bio: {
        gender: 'Male',
        height: '192 cm',
        birthplace: '???',
        horoscope: '???',
        birthday: '???',
        voiceActors: {
            jp: "",
            en: "",
            cn: "赵铭"
        }
    }
}

export default marc;