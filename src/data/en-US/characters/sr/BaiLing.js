const bailing = {
    name: "Bai Ling",
    rarity: "SR",
    wepName: "Nightingale's Feather",
    element: "phyiscal",
    reso: "damage",
    shieldBreak: ["6.00", "b"],
    energyCharge: ["10.00", "a"],
    materials: function() { return [this.element, "green", "blue"] },
    // wepBaseStats: [attack, health, crit],

    awakening: [
            // 1 star
            "Restore 1 dodge attempt every fifth normal attack or after using <strong class='text-green'>Piercing Shot</strong>.",
            // 2 star
            "Increase the current weapon's base ATK growth by **10%**.",
            // 3 star
            "Increase headshot damage by **30%**.",
            // 4 star
            "Increase the current weapon's base ATK growth by **20%**.",
            // 5 star
            "Dodge skills inflict grievous on targets for **7** seconds.",
            // 6 star
            "Increase crit rate by **30%** and crit damage by **50%** against grievous targets."
        ],

    chipEffect: "Increase damage dealt to grievous targets by **12%/15%/18%**.",

    mimicEffect: [
            // 1200 affininty
            "When Bai Ling puts the Glider or the Wayboard away, increase speed by **8%** for **12** seconds. Cooldown: **60** seconds.",

            // 4000 affinity
            "When Bai Ling puts the Glider or the Wayboard away, increase speed by **15%** for **12** seconds. Cooldown: **60** seconds."
        ],
    
    traits: {
        gender: 'Female',
        height: '163 cm',
        birthplace: 'HT201 Sanctuary',
        horoscope: 'Taurus',
        birthday: '8 May'
    },
    
    // gifts: [
    //     [80, snowglobe, seal],
    //     [60, miaFigure, goldCoin, foxFigure, catFigure, ufo, peppaFigure, kitchenware, princeTataFigure, linyeFigure],
    //     [30, necklace, vial, spiderFigure, elfFigure],
    //     [15, photoAlbum, harmonica, photo, plant, strangePlant]
    // ],
    giftPrefs: ['decorations', 'collectibles', 'rare-items'],
    
    recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['arrogantprovocation', 3]
        ],
    
    skills: [
        {
            name: "Quickdraw",
            type: "normal",
            desc: `While on the ground, draw the bow repeatedly to attack 5 times.  
                    First Attack: Deal damage equal to **33.7%** of ATK + **2**.  
                    Second Attack: Deal damage equal to **30.2%** of ATK + **2**.  
                    Third Attack: Deal damage equal to strong>54.3%** of ATK + **3**.  
                    Fourth Attack: Deal damage equal to **83.5%** of ATK + **4**.  
                    Fifth Attack: Deal damage equal to **77.7%** of ATK + **4** and knock the target back a short distance.`,
        },
        {
            name: "Charged Arrow",
            type: "normal",
            desc: `Tap and hold normal attack to charge the weapon. Deal basic damage equal to **60.5%** of ATK + **3**, and **50%** more for each **1** second spent charging, up to **3** seconds. Deal double damage when scoring a headshot or when hitting an enemy's weakness, knocking them down (headshots are ineffective against Wanderers).`,
        },
        {
            name: "Arrow Rain",
            type: "normal",
            desc: `After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to **198.7%** of ATK + **10** area damage to targets.`,
        },
        {
            name: "Air Volley",
            type: "normal",
            desc: `While airborne, tap normal attack to attack 4 times in a row in the air.  
                    First Attack: Deal damage equal to **38.8%** of ATK + **2**.  
                    Second Attack: Deal damage equal to **51%** of ATK + **3**.  
                    Third Attack: Deal damage equal to **77.7%** of ATK + **4**.  
                    Fourth Attack: Deal damage equal to **117%** of ATK + **6**.`,
        },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
        },
        {
            name: "Loaded Arrow",
            type: "dodge",
            desc: `Tap attack after dodging to trigger Loaded Arrow, knocking the target back by a short distance and dealing damage equal to **85.5%** of ATK + **5**.`,
        },
        {
            name: "Piecing Shot",
            type: "skill",
            desc: `Backflips and fires **1** piercing arrow forward, dealing damage equal to **154.8%** of ATK + **8** and knocking the target back. **12**-second cooldown.`,
        },
        {
            name: "Explosive Barrage",
            type: "discharge",
            desc: `When <b>weapon charge</b> is full or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder**, and unleashes Explosive Barrage on the target upon switching to this weapon, dealing damage equal to **486.6%** of ATK + **26**.`,
        }
    ]
}

export default bailing;