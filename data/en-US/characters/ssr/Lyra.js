const lyra = {
    name: "Lyra",
    uri: "lyra",
    imgSrc: "lyra.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 16,
                start: "29 Jul 2022",
                end: "17 Aug 2022",
                duration: "19d",
                week: "33~36"
            }
        ]
    },
    weapon: {
        name: "Vespers",
        element: "physical",
        type: "support",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["S", "12.00"],
        charge: ["A", "10.00"],
        materials: ["physical", "black", "red"],
        bonusEffect: {
            effect1: {
                title: `Physical Resonance`,
                description: `When equipped with **2** or more Physical weapons, increase Physical ATK by **20%** and Physical Resistance by **40%**, taking effect in the background.`
            }
        },
        advancement: {
            star1: `When using any weapon skill or discharge skill, if your personal Guardian count is maxed, your Guardians' durations will be refreshed, and deal damage equal to the number of guardians on the field * **100%** of Physical ATK, (maximum 8 guardians for supports and 6 for non-supports).`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Increases Guardian damage by **20%**. Using any weapon skill or discharge skill while you have the Blessing Resonance will increase Guardian final damage by **15%** for 10 seconds.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5:
                `Triggering Guardian of Forgiveness 5 times protects you and your guarded target from fatal damage **1** time. Afterwards, the Guardian of Forgiveness will be consumed and restore **15%** HP (does not take effect in Apex League).
                Triggering Guardian of Repentance 5 times protects you from fatal damage **2** times. Can protect up to **5** maximum times, after which one usage will be consumed to restore **15%** HP (does not take effect in Apex League).`,

            star6: `Using any weapon skill or discharge skill will increase your final damage and healing equivalent to the number of Guardians. Each Guardian will increase final damage and healing by **3%** for a maximum of **15%** for 25 seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description:
                        `While on the ground, use Vespers to attack five times in a row.  
                        &nbsp;  
                        **Passives**  
                        *Repentance*: When Vespers basic attack hits a target marked with "Repentance" while not using Blessing Resonance, **deal additional damage**. The damage does not trigger additional attack effects and is regarded as linking skill damage and weapon skill damage; Vespers basic attack hits a target **marked with "Repentance"** dealing additional damage equal to: Number of Guardians (self and teammates') x **4.6%** of ATK (Max **36.8%** of ATK), this damage does not trigger additional attack effects and is regarded as combo skill damage and weapon skill damage.  
                        &nbsp;  
                        *Radiance*: All basic attacks of Vespers that hits the target will restore **15%** of ATK into HP.  
                        &nbsp;  
                        *Holy Strike*: Vespers air attack and recharge can convert **60%** of the recharge ability into shield breaking ability.  
                        &nbsp;  
                        *Guard*: For every **15%** decrease in your own health or **300** weapon charge points, you can gain up to **5** "Repentance" guards (can be generated in the background), and the "Repentance" guards last for **25** seconds. If your own "Repentance" guardian is full, the newly generated "Repentance" guardian will attack the enemy target, causing **120%** of the attack physical damage and disappear, the damage will not trigger additional attack effects.  
                        &nbsp;  
                        Note: Vespers is not considered a secondary weapon in Visions of the Past`,
                    breakdown: [
                        `Deal damage equal to **116.5%** of ATK + **6** and knock the target back a short distance.`,
                        `Deal damage equal to **84.4%** of ATK + **4** and knock the target back a large distance.`,
                        `Deal damage equal to **177.1%** of ATK + **9** and knock the target back a short distance.`,
                        `Deal damage equal to **247.1%** of ATK + **13** and floats the target.`,
                        `Deal damage equal to **280.6%** of ATK + **15** and **suspend** the target.`,
                    ]
                },
                {
                    name: "Despair",
                    input: ["Jump", "Attack"],
                    description: `When in the air, click on the basic attack to release Despair. Each punch will cause **47.4%** of ATK + **2** damage to the target, and consume 10 points of stamina, and the last blow will cause **4%** of ATK + **5** damage and knocks the target into the air. During the release of Shattering, if the target can be grabbed, grab the target and throw it to the ground, causing a total of **2%** of ATK + **3** damage.`
                },
                {
                    name: "Accumulate",
                    input: ["hold:Attack"],
                    description:
                        `Hold the basic attack button to charge up to **3** stages; hitting the target will cause a **strong control floating** effect. During the charge attack, you will be immune to damage and control effects. Release it before being hit to trigger Phantasia.  
                        &nbsp;  
                        A charged hit deals **137.1%** of ATK + **7** damage.
                        The second charge hit causes **318.6%** of ATK + **17** damage.
                        The third charge hit causes **515%** of ATK + **27** damage.`
                },
                {
                    name: "Flash",
                    input: ["Attack", "hold:Attack"],
                    description: `During the basic attack or after dodging, press and hold the basic attack to release the instant light. Each punch will cause **28.5%** of ATK + **2** damage to the target, and consume **10** points of stamina.`
                },

                {
                    name: "Bash",
                    input: ["Jump", "hold: Attack"],
                    description:
                        `When in the air, press and hold the basic attack to trigger **3** stages of charging in the air. After letting go, hit the ground and **control the floating** target. Before being hit, enter the charging, which can trigger Phantasia.`,
                    breakdown: [
                        `(First stage charge) Deal damage equal to **237.5%** of ATK + **13**.`,
                        `(Second stage charge) Deal damage equal to **411.7%** of ATK + **22**.`,
                        `(Third stage charge) Deal damage equal to **649.2%** of ATK + **34**.`,
                    ]
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Consciousness Capture",
                    input: ["Dodge", "Attack"],
                    description: `After dodging, click on the basic attack, grab the target to your side and continue to absorb the target for **2** seconds, and mark it to cause **261.4%** of ATK + **14** damage; Hold the basic attack after dodging to trigger **Flash** after using Consciousness Capture.`
                }
            ],
            skill: [
                {
                    name: `"Forgiveness" Guardian`,
                    description: 
                        `*"Forgiveness" Guardian*: When the healing effect overflows, a life shield that does not exceed **60%** of max HP is generated; Vespers gains the "Forgiveness" guardian, and activates different guardian effects under different weapon resonances.  
                        &nbsp;  
                        *Blessed Guard*: The skill is replaced by **Huiqi**; she no longer gets the "Repentance" guard, but instead adds "Forgiveness" guard to her teammates, and can also get a "Forgiveness" guard for every **15%** of the maximum HP healed, and each teammate can get a maximum of "Forgiveness" guard. A guardian of "Forgiveness", if there are no teammates who have not obtained the guardianship of "Forgiveness" on the field, the guardianship of "Forgiveness" will deal **120%** ATK of physical damage to one enemy unit and disappear, the damage will not trigger additional attack effects; Increases the maximum HP of teammates by **12.5%** (multiple do not stack).  
                        &nbsp;  
                        *Strong Attack Guardian*: When using Vespers to hit, immediately gain **30%** of the maximum HP shield, cooldown for 30 seconds.  
                        &nbsp;  
                        *Fortitude Guardian*: When using Vespers to hit, receive immediate healing, restores **2%** of Max HP per second for **20** seconds, cooldown for **30** seconds.  
                        &nbsp;  
                        *Balanced guardian*: when HP is higher than **50%**, shatter is increased by **20%**; when HP is lower than **50%**, final damage is increased by **10%**, and shatter is increased by **10%**.  
                        &nbsp;  
                        **Starfall**  
                        Leaps to the target, dealing **807%** of ATK + **42** damage to the target, **strong control of floating**, and add the "Repentance" mark to the target for **18** seconds, with a **20** second cooldown.  
                        &nbsp;  
                        **Huiqi**  
                        Slams the ground, knocks the target in front of you with **strong control**, causing **807%** of ATK + **42** damage, and summons up to **3** sharp edges for **75** seconds (there is a maximum of one within 2 meters near the sharp edge), this skill Can be used up to **3** times in total, with a single cooldown of **20** seconds; when there are 2 **sharps** on the field, create a **clear light**, each time the **sharp edge** is touched, the target within the moving distance radius will be healed once, and the target's attack power will be restored by **25%** life; when there are 3 **Edges** on the field, create a **nebula**, and each time the **edge** is touched, it will deal (**300%** of ATK x Movement Distance / **5m** ) damage to the target within the moving distance radius.`
                }
            ],
            discharge: [
                {
                    name: "Sigh and Chant",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder** and release the sigh and light chant, cause **831.3%** of ATK + **44** damage to the target, and add the "repentance" mark to the target for **18** seconds during the immunity to damage for **2.6** seconds (does not take effect in Apex League).`
                }
            ]
        },
        recommendedMatrix: {
            set4: ["lyra"],
            set2: ["lyra", "samir", "crow"]
        },
        recommendedMatrices: [
            {
                name: "Lyra",
                pieces: 4,
                description: "Very powerful damage buffing set effect specifically for fast-hitting physical weapons, as well as boosts survivability. Alternatively, Lyra's 2-piece matrix set is also very good."
            },
            {
                name: "Samir",
                pieces: 2,
                description: "Vespers will have no problem maintaining the damage buff with its fast attacks."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate. Otherwise, opt for Shiro 2-piece matrices."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Using this weapon grants a **20%/25%/30%/35%** ATK buff. The lower your health, the higher your healing received, up to **100%**.`,

        set4: `Dealing Physical damage grants a **5%** Physical damage buff with a cooldown of **0.1** seconds, stacking up to **5** times. When fully stacked, gain an additional **6%/10%/14%/18%** Physical damage buff for **5** seconds. Dodging grants up to **3** stacks of Block for **10** seconds, blocking up to **60%** of current health and at least **20%** of max health. When using multiple sets, only the highest star set will take effect.`
    },

    awakening: {
        trait1200: `While you have Blessing Resonance active, increase the HP of all team members by 12.5%, does not stack.`,

        trait4000: `While you have Blessing Resonance active, increase the HP of all team members by 12.5%, does not stack. Increase your own HP an additional 12.5%.Each time you successfully release a skill while having Hyperbody, or your health is greater than 50%, provide 12 seconds of Hyperbody to all allies.`,

        giftCategories: ['everyday-items', 'vera'],

        gifts: [
            [60, "princeTataFigure", "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [15, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '174 cm',
        birthplace: '???',
        horoscope: 'Cancer',
        birthday: '23 Jun',
        voiceActors: {
            jp: "",
            en: "",
            cn: "常佳梦"
        }
    }
}

export default lyra;