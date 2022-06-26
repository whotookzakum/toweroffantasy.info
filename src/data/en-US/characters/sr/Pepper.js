const pepper = {
    name: "Pepper",
    rarity: "SR",
    wepName: "Staff of Scars",
    element: "volt",
    reso: "support",
    shieldBreak: ["4.00", "b"],
    energyCharge: ["10.00", "a"],
    materials: function() { return [this.element, "red", "black"] },
    // wepBaseStats: [attack, defense, health],

    awakening: [
            // 1 star
            "Heal all teammates within **10** meters for **100%** of ATK after using a Dodge skill.",
            // 2 star
            "Increase the current weapon's base HP growth by **10%**.",
            // 3 star
            "Normal attacks also fire two missiles, each dealing damage equal to **5%** of ATK to the target and restoring **5** weapon charge points.",
            // 4 star
            "Increase the current weapon's base HP growth by **20%**.",
            // 5 star
            "Increase speed of obtaining weapon charge by **20%** (not applicable to missile attacks).",
            // 6 star
            "Grant all teammates within range of the skill **60%** damage reduction and immunity to crowd control effects."
        ],

    chipEffect: "Increase speed of obtaining weapon charge by **10%/12.5%/15%**.",

    mimicEffect: [
            // 1200 affininty
            "When Pepper spends satiety to restore HP, increase restoration effect by **100%**.",

            // 4000 affinity
            "When Pepper spends satiety to restore HP, increase restoration effect by **200%**."
        ],

    traits: {
        gender: 'Female',
        height: '160 cm',
        birthplace: 'Banges',
        horoscope: 'Cancer',
        birthday: '9 Jul'
    },

    // gifts: [
    //     [80, peppaFigure],
    //     [60, seal, tataCards, foxFigure, catFigure, goldCoin, snowglobe, kitchenware, princeTataFigure, linyeFigure],
    //     [30, suit, juicePouch, necklace, perfume, spiderFigure, elfFigure],
    //     [15, photoAlbum, flowers, plant, scarf, strangePlant]
    // ],
    giftPrefs: ['everyday-items', 'decorations', 'collectibles'],
    
    recChips: [
            ['coco', 2],
            ['coco', 4],
            ['peppa', 3],
            ['guardscode', 3],
            ['cleanupagreement', 3],
        ],

    skills: [
        {
            name: "Normal Attack",
            type: "normal",
            desc: `While on the ground, swing the staff to attack 5 times in a row.  
                    First Attack: Deal damage equal to **25.1%** of ATK + **1**.  
                    Second Attack: Deal damage equal to **18.8%** of ATK + **1**.  
                    Third Attack: Deal damage equal to **30.4%** of ATK + **2**.  
                    Fourth Attack: Deal damage equal to **41.4%** of ATK + **2**.  
                    Fifth Attack: Deal damage equal to **73.2%** of ATK + **4**.`
        },
        {
            name: "Soaring Barrage",
            type: "normal",
            desc: `While airborne or after jumping once, tap normal attack to attack 5 times in a row.  
                    First Attack: Deal damage equal to **32.5%** of ATK + **2**.  
                    Second Attack: Deal damage equal to **23.5%** of ATK + **1**.  
                    Third Attack: Deal damage equal to **25.5%** of ATK + **1**.  
                    Fourth Attack: Deal damage equal to **45.6%** of ATK + **2**.  
                    Fifth Attack: Deal damage equal to **47.7%** of ATK + **3**.`
        },
        {
            name: "Moonfall",
            type: "normal",
            desc: `Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **57.2%** of ATK + **3** damage.`
        },
        {
            name: "Focused Assault",
            type: "normal",
            desc: `After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.  
                    First Attack: Pull in enemies in front of the user, knocking them **into the air** and dealing damage equal to **16.1%** of ATK + **1** every **0.3** seconds (up to **4** times).  
                    Second Attack: Deal damage equal to **18.6%** of ATK + **1** at the target location and to nearby enemies every **0.3** seconds.`
        },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`
        },
        {
            name: "Surge",
            type: "dodge",
            desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **22.6%** of ATK + **1** to targets. Grant **75** weapon charge points upon use.`
        },
        {
            name: "Tesseract",
            type: "dodge",
            desc: `Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **32.1%** of ATK + **2** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.`
        },
        {
            name: "Sanctuary",
            type: "skill",
            desc: `Create an energy shield at the Wanderer's location. Heal allies within the shield for **81.7%** of ATK + **4** every second and reduce their damage taken by **3%** for **10** seconds. **60**-second cooldown.`
        },
        {
            name: "Swift Deliverance",
            type: "discharge",
            desc: `When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon **removes all debuffs from the wielder**, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for **79%** x ATK + **4** HP for **7** seconds.`
        }
    ]

}

export default pepper;