const hilda = {
    name: "Hilda",
    rarity: "SR",
    chinaOnly: false,
    weapon: {
        name: "The Terminator",
        element: "ice",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["A", "10.00"],
        charge: ["A", "10.00"],
        materials: ["ice", "red", "blue"],
        advancement: {
            star1: "Every successful normal attack increases damage by **1%** for **2** seconds (stack up to **15** times). Increase ammo count to **60**.",

            star2: "Increase the current weapon's base ATK growth by **10%**.",

            star3: "Within **10** seconds of switching to the weapon, increase damage of normal attacks and shatter by **30%**. Cooldown: **25** seconds. Increase ammo to **80**.",

            star4: "Increase the current weapon's base ATK growth by **20%**.",

            star5: "Reduce cooldown of normal attacks while in turret mode to **2** seconds.",

            star6: "Within **10** seconds upon switching to the weapon, increase damage of normal attacks and shatter by **60%**. Cooldown: **25** seconds."
        },
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: `Tap normal attack to enter aiming mode. Hold normal attack to fire continuously, up to **40** rounds. Each shot deals damage equal to **11.4%** of ATK + **1**. Deal double damage when scoring a headshot or hitting the enemy's weakness, knocking them down (headshots are ineffective against Wanderers).`,
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
            {
                name: "Turret",
                type: "skill",
                desc: `Enable turret mode and fire large energy orbs, each dealing damage equal to **213.3%** of ATK + **11** and launching the target into the air. Become immune to hitstun and control effects while setting up the turret. **3.5**-second cooldown.`,
            },
            {
                name: "Arctic Beam",
                type: "discharge",
                desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and fire an arctic beam upon switching to this weapon, dealing damage equal to **329.2%** of ATK + **17** and inflict a **3**-second **freeze** effect. Also reduce the target's frost resistance by **50%** for **10** seconds.`,
            }
        ],
        recommendedMatrix: {
            set2: ["samir", "king", "shiro"],
            set3: ["pepper", "offensivelogic", "sobek"]
        }
    },

    matrix: {
        set3: "Increase ATK by **15%/19%/22.5%** when there are no enemies within 6 meters."
    },

    awakening: {
        trait1200: "When Hilda uses a vehicle, increase speed by **7%**.",

        trait4000: "When Hilda uses a vehicle, increase speed by **10%**.",

        giftCategories: ['toys', 'figurines', 'limited-edition'],

        gifts: [
            [80, "tataFigure"],
            [60, "goldCoin", "tataCards", "foxFigure", "catFigure", "bearFigure", "miaFigure", "present", "psp", "princeTataFigure", "linyeFigure"],
            [30, "tataPlush", "catPlush", "robotFigure", "pumpkinFigure", "androidFigure", "bunnyDoll"],
            [15, "pinwheel", "snackBox"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '165 cm',
        birthplace: '???',
        horoscope: 'Aries',
        birthday: '11 Apr'
    }
}

export default hilda;