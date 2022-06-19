const meryl = {
    name: "Meryl",
    rarity: "SSR",
    wepName: "Rosy Edge",
    element: "ice",
    reso: "tank",
    shieldBreak: ["12.00", "s"],
    energyCharge: ["4.00", "b"],
    materials: [meryl.element, "red", "black"],
    wepBaseStats: [attack, defense, health],

    awakening: [
            // 1 star
            "Increase shatter by **15%** and restore **10%** of HP after shattering the target's shield.",
            // 2 star
            "Increase the current weapon's base HP growth by **16%**.",
            // 3 star
            "Obtain Health Ice Shield with **10%** maximum health value when the weapon is switched; cooldown takes **20** seconds; Ice Shield lasts up to **10** seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by **32%**.",
            // 5 star
            "Increase damage and shatter by **50%** while the shield is active.",
            // 6 star
            "Health Ice Shield with a health value of up to **20%** is obtained when switched to the weapon. The shield provides immunity to control effects; cooldown takes **20** seconds; Ice Shield lasts up to **10** seconds."
        ],

    chipEffect: [
            // 2 set
            `If HP is less than **30%** after being attacked, gain a shield equal to **15%/19%/22.5%/26%** of Max HP for **10** seconds. Cooldown: **120** seconds.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> If HP is less than **30%** after being attacked, gain a shield equal to **20%/26%/32%/40%** of Max HP for **10** seconds. Cooldown: **90** seconds.`,

            // 4 set
            `Increase Whirlwind's damage by **36%/45%/54%/63%** and restore HP equal to **30%/38%/44%/50%** of the damage dealt while Whirlwind is active. The maximum HP restored every **0.5** seconds cannot exceed **60%/72%/81%/90%** of ATK.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Converts **60%/75%/90%/105%** of damage dealth during shield to health, restores no more than **105%/127.5%/150%/172.5%** of attack power every 0.5 seconds`
        ],

    mimicEffect: [
            // 1200 affininty
            `Reduce frost damage received by Meryl by **20%**, gain immunity to the frostbitten effect, and reduce duration of being frozen by **50%**.`,

            // 4000 affinity
            `Reduce frost damage received by Meryl by **25%**, gain immunity to the frostbitten effect, and reduce duration of being frozen by **50%**.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Meryl takes 25% less ice damage, is immune to frostbite, and is frozen for 50% less time. Meryl's surroundings will freeze.`
        ],

    traits: {
        gender: 'Female',
        height: '170 cm',
        birthplace: '???',
        horoscope: 'Libra',
        birthday: '10 October'
    },

    gifts: [
        [80, seal],
        [60, goldCoin, miaFigure, foxFigure, snowglobe, kitchenware, ufo, linyeFigure],
        [30, necklace, vial],
        [15, photo, harmonica, strangePlant]
    ],
    giftPrefs: ['metalware', 'rare-items'],

    recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 3],
            ['cleanupagreement', 3]
        ],

    skills: [
        {
            name: "Heavy Cleave",
            type: "normal",
            desc: `While on the ground, swing a greatsword to attack 4 times in a row.  
                        First Attack: Deal damage equal to **60.7%** of ATK + **3** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **50.1%** of ATK + **3** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **87.9%** of ATK + **5** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **130.3%** of ATK + **7**, knock the target **into the air**, then launch them upon landing.`,
            },
        {
            name: "Aerial Strike",
            type: "normal",
            desc: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.  
                        First Attack: Deal damage equal to **88.7%** of ATK + **5**.  
                        Second Attack: Deal damage equal to **72.9%** of ATK + **4**.  
                        Third Attack: Deal damage equal to **130%** of ATK + **7**.  
                        Fourth Attack: Deal damage equal to **117.1%** of ATK + **6** and deliver a **knockdown**, launch the target upon landing.`,
            },
        {
            name: "Rising Slash",
            type: "normal",
            desc: `After the third normal attack, hold normal attack to trigger Rising Slash. Knock the target **into the air** and go airborne, dealing damage equal to **53.6%** of ATK + **3**.`,
            },
        {
            name: "Moonset Slash",
            type: "normal",
            desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Moonset Slash. While falling, each hit deals damage equal to **12.5%** of ATK + **1**. Upon landing, deal damage equal to **117.1%** of ATK + **6** and launch targets. Deal greater damage depending on the user's altitude when Moonset Slash triggered, up to **600%** of ATK.`,
            },
        {
            name: "Sneak Attack",
            type: "normal",
            desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
            },
        {
            name: "Whirlwind",
            type: "normal",
            desc: `While standing still or moving, tap and hold normal attack to trigger Whirlwind, dealing damage equal to **82%** of ATK + **4** every **0.5** seconds to the target. Grant hitstun immunity while in use.`,
            },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
        {
            name: "Devastate",
            type: "dodge",
            desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Devastate. Deal damage equal to **55%** of ATK + **3** each hit and **launch** targets.`,
            },
        {
            name: "Crescent Slash",
            type: "dodge",
            desc: `Tap normal attack during the short period after dodging to trigger Crescent Slash. Swing the blade to unleash sword auras forward, each dealing damage equal to **41.3%** of ATK + **2**.`,
            },
        {
            name: "Blizzard",
            type: "skill",
            desc: `Swing the blade to launch sword auras forward, each dealing damage equal to **90.8%** of ATK + **5** and increasing damage dealt by **5%** with each hit. While active, immune to control effects. **45**-second cooldown.`,
            },
        {
            name: "Frost Barrier",
            type: "discharge",
            desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder**, and smash the ground to form a barrier upon switching to this weapon, dealing damage equal to **419.3%** of ATK + **22** to nearby enemies, knocking enemies into the air. This reduces their speed by **50%** and stops them from dodge or jump. The barrier lasts **5** seconds and blocks projectiles.`,
            }
        ]

}

export default meryl;