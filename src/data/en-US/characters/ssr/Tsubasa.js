const tsubasa = {
    name: "Tsubasa",
    rarity: "SSR",
    wepName: "Icewind Arrow",
    element: "ice",
    reso: "damage",
    shieldBreak: ["4.00", "b"],
    energyCharge: ["11.50", "s"],
    materials: [tsubasa.element, "red", "blue"],
    wepBaseStats: [attack, health, crit],

    awakening: [
            // 1 star
            `Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by **8%** for **15** seconds. Stack up to **3**.`,
            // 2 star
            `Increase the current weapon's base ATK growth by **16%**.`,
            // 3 star
            `Launching a Dodge attack fires **3** Charged Arrows.`,
            // 4 star
            `Increase the current weapon's base ATK growth by **32%**.`,
            // 5 star
            `Double duration of Arrow Rain and slow targets by **25%**.`,
            // 6 star
            `Sharp Arrow stacks up to **5** times. Hitting a target with Charged Arrow immediately grants **3** stacks, headshots grant **5** stacks.`
        ],

    chipEffect: [
            // 2 set
            `Increase damage dealt by **10%/12.5%/15%/17.5%** when there are no enemies within 4 meters.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase damage dealt by **12.5%/15%/17.5%/20%** when there are no enemies within 4 meters.`,

            // 4 set
            `Upon a headshot, increase ATK by **12%/15%/18%/21%** for 8 seconds.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Upon a headshot or Icewind Arrow Skill - Piercing Arrow hitting a target, increase ATK by **15%/18%/21%/25%** for 8 seconds.`
        ],

    mimicEffect: [
            // 1200 affininty
            `Each time Tsubasa deals damage, gain **1** stack of Fierce Strike, up to **1** stack per **1** second. Each stack adds **0.5%** ATK, up to **15** stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for **30** seconds.`,

            // 4000 affinity
            `Each time Tsubasa deals damage, gain **1** stack of Fierce Strike, up to **1** stack per **1** second. Each stack adds **0.6%** ATK, up to **30** stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for **30** seconds.`
        ],

    traits: {
        gender: 'Female',
        height: '169 cm',
        birthplace: 'Astra',
        horoscope: 'Aries',
        birthday: '24 Mar'
    },

    gifts: [
        [80, tataPlush, miaFigure],
        [60, seal, tataCards, bearFigure, catFigure, ufo, psp, goldCoin, snowglobe, linyeFigure],
        [30, vial, pumpkinFigure, androidFigure],
        [15, photo, snackBox, harmonica]
    ],
    giftPrefs: ['figurines', 'limited-time-items', 'rare-items'],

    recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['transportthinking', 3]
        ],

    skills: [
        {
            name: "Quickdraw",
            type: "normal",
            desc: `While on the ground, draw the bow repeatedly to attack 5 times.  
                        First Attack: Deal damage equal to **48.8%** of ATK + **3**.  
                        Second Attack: Deal damage equal to **43.7%** of ATK + **2**.  
                        Third Attack: Deal damage equal to **78.6%** of ATK + **4**.  
                        Fourth Attack: Deal damage equal to **121.2%** of ATK + **6**.  
                        Fifth Attack: Deal damage equal to **112.5%** of ATK + **6** and knock the target back a short distance.`
            },
        {
            name: "Charged Arrow",
            type: "normal",
            desc: `Tap and hold normal attack to charge the weapon. Deal basic damage equal to **87.8%** of ATK + **5**, and **50%** more for each 1 second spent charging, up to **3** seconds. Deal double damage when scoring a headshot or when hitting an enemy's weakness, knocking them down (headshots are ineffective against Wanderers).`
            },
        {
            name: "Arrow Rain",
            type: "normal",
            desc: `After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to **287.2%** of ATK + **15** area damage to targets.`
            },
        {
            name: "Air Volley",
            type: "normal",
            desc: `While airborne, tap normal attack to attack 4 times in a row in the air.  
                        First Attack: Deal damage equal to **56.3%** of ATK + **3**.  
                        Second Attack: Deal damage equal to **74%** of ATK + **4**.  
                        Third Attack: Deal damage equal to **112.7%** of ATK + **6**.  
                        Fourth Attack: Deal damage equal to **169.8%** of ATK + **9**.`
            },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`
            },
        {
            name: "Loaded Arrow",
            type: "dodge",
            desc: `Tap attack after dodging to trigger a Loaded Arrow, which **knocking the target back** and dealing damage equal to **124%** of ATK + **7**.`
            },
        {
            name: "Piercing Arrow",
            type: "skill",
            desc: `Perform a backflip and fire **3** piercing arrows, with the main arrow deals damage equal to **224.6%** of ATK + **12**, and the other two arrows deal 60% damage. In addition, **knock targets back** and stun them for **5** seconds if they collide with an obstacle. Cooldown: **12** seconds.`
            },
        {
            name: "Explosive Barrage",
            type: "discharge",
            desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder**, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to **570%** of ATK + **30**. The storm has a **10%** chance to inflict a **2** seconds **freeze effect**. Gain cold front, increasing damage dealt by **15%**, and speed by **45%** for **7** seconds.`
            }
        ]
    
}

export default tsubasa;
