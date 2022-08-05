const marc = {
    name: "Marc",
    uri: "marc",
    imgSrc: "marc.png",
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
                description: `**[GROUP PLAY]** When using Re-entry, Form Switch, or Full Shot, inflict **40%** damage to the lowest HP ally for **10** seconds, afterwards restoring **10%** of lost HP, only triggered while using Perseverance Resonance, the effect will not be removed and cannot be triggered again until the end of time.`
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
                    name: "Wasteland Hunters Attack",
                    input: ["Attack x4"],
                },
                {
                    name: "Wasteland Hunters Heavy Punch",
                    input: ["Jump", "Attack"],
                },
                {
                    name: "Wasteland Hunters Shot",
                    input: ["hold:Attack"],
                },
                {
                    name: "Heavy Stereo Punch",
                    input: ["Attack x4"],
                },
                {
                    name: "Impact Slash",
                    input: ["Attack", "hold:Attack"],
                },
                {
                    name: "Shoulder Cannon Launch",
                    input: ["hold:Attack"],
                },
                {
                    name: "Double Slam",
                    input: ["Jump", "Attack"],
                },
            ]
        },
        recommendedMatrix: {
            set2: ["marc", "king", "shiro"],
            set4: ["marc"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `Attacking an enemy adds a shield to all teammates for **15%** of your current HP, lasting **15** seconds and resetting after leaving combat for **10** seconds. This shield combines with other shields. When the shield is activated, damage received is reduced by **11%/13%/15%/17%** for **15** seconds (not stackable). This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `When shields are obtained, increase your ATK by **6%/7.5%/9%/11.5%** and teammates' ATK by **3%/3.5%/4.5%/5.75%** for **15** seconds, up to **3** stacks. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
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