const echo = {
    name: "Echo",
    rarity: "SR",
    wepName: "Thunderous Halberd",
    element: "volt",
    reso: "damage",
    shieldBreak: ["11.00", "s"],
    energyCharge: ["7.00", "b"],
    materials: function() { return [this.element, "red", "black"] },
    // wepBaseStats: [attack, defense, health],

    awakening: [
            // 1 star
            `Increase shatter by **15%**. After shattering the target's shield, increase all teammates' ATK by **15%** for **30** seconds. This cannot be stacked.`,
            // 2 star
            `Increase the current weapon's base HP growth by **10%**.`,
            // 3 star
            `After hitting a target with <strong class='text-green'>Moonchase**, reduce their ATK by **5%** and increase the user's ATK by **5%** for **15** seconds (effect can be stacked up to **3** times by hitting multiple targets). Effect is doubled to grievous targets.`,
            // 4 star
            `Increase the current weapon's base ATK growth by **20%**.`,
            // 5 star
            `Double stun duration from dodge skills.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Double stun duration from forward dodge skills.`,
            // 6 star
            `Discharge deals more damage the further it travels, up to **100%** more damage.`
        ],


    chipEffect: "Using a discharge skill to switch to the current weapon grants **80/100/120** weapon charge.",

    mimicEffect: [
            // 1200 affininty
            "When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **4%** (excluding Echo).",

            // 4000 affinity
            "When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **6%** (excluding Echo)."
        ],

    traits: {
        gender: 'Female',
        height: '162 cm',
        birthplace: 'Warren',
        horoscope: 'Leo',
        birthday: '14 Aug'
    },

    // gifts: [
    //     [80, psp, tataCards],
    //     [60, goldCoin, ufo, peppaFigure, catFigure, pearl, tataFigure],
    //     [30, chessSet, suit, juicePouch, diary, perfume],
    //     [15, flowers, snackBox, tradingCard, harmonica, scarf]
    // ],
    giftPrefs: ['everyday-items', 'limited-time-items', 'games'],

    recChips: [
            ['samir', 2],
            ['king', 2],
            ['shiro', 2],
            ['guardscode', 2],
            ['offensivelogic', 2]
        ],

    skills: [
        {
            name: "Thrust",
            type: "normal",
            desc: `While on the ground, swing the spear to attack 5 times in a row.  
                    First Attack: Deal damage equal to **24.7%** of ATK + **1** and knock the target back a short distance.  
                    Second Attack: Deal damage equal to **22.6%** of ATK + **1** and knock the target back a short distance.  
                    Third Attack: Deal damage equal to **47.2%** of ATK + **2** and knock the target back a short distance.  
                    Fourth Attack: Deal damage equal to **65.2%** of ATK + **3** and knock the target back a short distance.  
                    Fifth Attack: Deal damage equal to **114.95%** of ATK + **6** and knock the target back a significant distance.`,
            },
        {
            name: "Jumping Strike",
            type: "normal",
            desc: `While airborne, tap normal attack to attack 4 times in a row in the air.  
                    First Attack: Deal damage equal to **27.4%** of ATK + **1**.  
                    Second Attack: Deal damage equal to **23.2%** of ATK + **1**.  
                    Third Attack: Deal damage equal to **45.8%** of ATK + **2**.  
                    Fourth Attack: Deal damage equal to **110%** of ATK + **6**.`,
            },
        {
            name: "Crashing Drive",
            type: "normal",
            desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Crashing Drive. While falling, deal damage equal to **8%** of ATK + **1** each hit. Upon landing, deal damage equal to **48.5%** of ATK + **3** and knock the target down. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.`,
            },
        {
            name: "Spear Flurry",
            type: "normal",
            desc: `After the third normal attack, hold the normal attack button to trigger Spear Flurry. Strike the target and knock them **into the air**, dealing damage equal to **49.2%** of ATK + **3**. Tap again to continue attacking the airborne target, dealing up to **98%** of ATK + **5** damage to a single target.`,
            },
        {
            name: "Sneak Attack",
            type: "normal",
            desc: `Thrust the spear forward, dealing damage equal to **570%** of ATK + **30**.`,
            },
        {
            name: "Flying Kick",
            type: "dodge",
            desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Kick. Once hit the target, deal damage equal to **72%** of ATK + **4**, knock the target back significantly, and stun them for **1** second (non-Wanderer targets) or **0.5** seconds (Wanderers).`,
            },
        {
            name: "Lunging Smash",
            type: "dodge",
            desc: `Tap normal attack during the short period after dodging to trigger Lunging Smash. Slam the long spear into the ground, dealing damage equal to **52.8%** of ATK + **3** and knocking targets **into the air**.`,
            },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`,
            },
        {
            name: "Moonchaser",
            type: "skill",
            desc: `Launch the target into the air and go airborne, dealing damage equal to **127.5%** of ATK + **7**. **25**-second cooldown.`,
            },
        {
            name: "Thunderclap",
            type: "discharge",
            desc: `When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon **removes all debuffs from the wielder**, who jumps in the air and throws a lightning spear that causes area explosion to deal **296.7%** x ATK + **16** damage plus **paralyzing** the target for **1** second.`,
            }
        ]
}

export default echo;
