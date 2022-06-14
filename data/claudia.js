const claudia = {
    name: "Claudia",
    rarity: "SSR",
    wepName: "Guren Blade",
    element: "physical",
    reso: "damage",
    shieldBreak: ["7.50", "a"],
    energyCharge: ["12.00", "s"],
    materials: [claudia.element, "red", "blue"],
    wepBaseStats: [attack, defense, health],

    awakening: [
            // 1 star
            `After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by **8%** for **25** seconds (stacks up to **3** times; each successful skill or discharge use can only grant a single stack).`,
            // 2 star
            `Increase the current weapon's base ATK growth by **16%**.`,
            // 3 star
            `Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by **10%** for **15** seconds. Stack up to **1** time.`,
            // 4 star
            `Increase the current weapon's base HP growth by **32%**.`,
            // 5 star
            `Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by **20%** for **15** seconds (cannot stack).`,
            // 6 star
            `Hitting the same target no longer reduces the damage dealt. After using Guren Blade or a discharge skill, applies **1** stack of War Wounds to all targets within 8 meters.`
        ],

    chipEffect: [
            // 2 set
            `Increase damage by **13%/17%/20%/23%** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.`,
            // 4 set
            `Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **1.5/2/2.5/3** seconds and increases the damage of discharge skills by **36%/45%/54%/63%** for **15** seconds.`
        ],

    mimicEffect: [
            // 1200 affininty
            `Hide for **1** seconds upon dodging.`,

            // 4000 affinity
            `Hide for **1.5** seconds upon dodging.`
        ],

    traits: {
        gender: 'Female',
        height: '170 cm',
        birthplace: 'Hagarge',
        horoscope: 'Capricorn',
        birthday: '16 Jan'
    },

    gifts: [
        [80, snowglobe, peppaFigure],
        [60, seal, tataCards, miaFigure, catFigure, princeTataFigure, ufo],
        [30, suit, juicePouch, vial, perfume, spiderFigure, elfFigure],
        [15, flowers, photoAlbum, photo, scarf, plant, harmonica]
    ],
    giftPrefs: ['everyday-items', 'rare-items', 'decorations'],

    recChips: [
            ['claudia', 2],
            ['claudia', 4],
            ['samir', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['arrogantprovocation', 3]
        ],
    skills: [
        {
            name: "Quick Slash",
            type: "normal",
            desc: `While on the ground, swing the blade to attack 5 times in a row.  
                    First Attack: Deal damage equal to **39%** of ATK + **2** and knock the target back a short distance.  
                    Second Attack: Deal damage equal to **54.6%** of ATK + **3** and knock the target back a short distance.  
                    Third Attack: Deal damage equal to **49.4%** of ATK + **3** and knock the target back a short distance.  
                    Fourth Attack: Deal damage equal to **87%** of ATK + **5** and knock the target back a short distance.  
                    Fifth Attack: Deal damage equal to **148.1%** of ATK + **8** and **launch** the target.`,
        },
        {
            name: "Jumping Strike",
            type: "normal",
            desc: `While airborne, tap normal attack to attack 4 times in a row.  
                    First Attack: Deal damage equal to **23.2%** of ATK + **1**.  
                    Second Attack: Deal damage equal to **40.3%** of ATK + **2**.  
                    Third Attack: Deal damage equal to **95.4%** of ATK + **5**.  
                    Fourth Attack: Deal damage equal to **115.8%** of ATK + **6** and deliver a **knockdown**.`,
        },
        {
            name: "Cyclone",
            type: "normal",
            desc: `Hold the normal attack button after normal attacks to trigger Cyclone. Knock the target, suspending them in mid-air and deal **39.8%** of ATK + **2** to a single target.`,
        },
        {
            name: "Diving Edge",
            type: "normal",
            desc: `Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to **10%** of ATK + **1** each hit. Upon landing, deal damage equal to **63.6%** of ATK + **3** and knock the target back. The higher you are when cast, the higher the damage dealt, up to **600%** of ATK.`,
        },
        {
            name: "Sneak Attack",
            type: "normal",
            desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
        },
        {
            name: "Dodge",
            type: "dodge",
            desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
        },
        {
            name: "Leap Attack",
            type: "dodge",
            desc: `Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to **31.6%** of ATK + **2**, **knocking the target into the air** and becoming airborne, then deal additional damage equal to **47.3%** of ATK + **2**.`,
        },
        {
            name: "Roam",
            type: "skill",
            desc: `Dance through targets while swinging the blade, dealing damage equal to **348.5%** of ATK + **18** in total to up to **5** targets (attacks on the same target deal **20%** less damage). At the end of the ability, slash the space in front, dealing damage equal to **264%** of ATK + **14** to targets and knocking them into the air. Immune to crowd-control effects while ability is in use. Cooldown: **15** seconds.`,
        },
        {
            name: "Unbridled Flurry",
            type: "discharge",
            desc: `When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon **removes all debuffs from the wielder**, who charges and **airbornes** a target to deal **436.2%** x ATK + **23** damage, leaving behind a bladestorm that deals **174.4%** x ATK + **9** damage to the target, while immunizing self to grievous/freeze/burn/electrify effects for **5** seconds.`,
        }
    ]
    
}
export default claudia;
