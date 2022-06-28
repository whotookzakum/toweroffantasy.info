const crow = {
    name: "Crow",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Thunderblades",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["A", "8.00"],
        materials: ["volt", "red", "blue"],
        advancement: {
            star1: `Attacking targets from behind increases crit rate of all dual blades attacks by **40%**. Attacking an electrified target from behind increases crit rate by **100%** and crit damage by **30%**.`,
           
            star2: `Increase the current weapon's base ATK growth by **16%**.`,
           
            star3: `Increase damage by **30%** to targets with less than **60%** HP.`,
           
            star4: `Increase the current weapon's base HP growth by **32%**.`,
           
            star5: `Triggering a Back Attack grants a 100% crit chance for the next **4** seconds and increases crit damage by **50%**. Cooldown: **10** seconds.`,
            
            star6: `After using a skill, increase volt damage dealt to the target by **20%** for **20** seconds.`
        },
        skills: [
            {
                name: "Twin Blades",
                type: "normal",
                desc: `While on the ground, swing the blades to attack 5 times in a row.  
                        First Attack: Deal damage equal to **42.9%** of ATK + **2** and knock the target back a short distance.  
                        Second Attack: Deal damage equal to **52.2%** of ATK + **3** and knock the target back a short distance.  
                        Third Attack: Deal damage equal to **64.8%** of ATK + **3** and knock the target back a short distance.  
                        Fourth Attack: Deal damage equal to **69.2%** of ATK + **4** and knock the target back a short distance.  
                        Fifth Attack: Deal damage equal to **144.3%** of ATK + **8** and knock the target back a short distance.`,
            },
            {
                name: "Sky Flurry",
                type: "normal",
                desc: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.  
                        First Attack: Deal damage equal to **46.8%** of ATK + **2**.  
                        Second Attack: Deal damage equal to **27.5%** of ATK + **1**.  
                        Third Attack: Deal damage equal to **65.8%** of ATK + **3**.  
                        Fourth Attack: Deal damage equal to **98.5%** of ATK + **5**.`,
            },
            {
                name: "Rapid Lunge",
                type: "normal",
                desc: `After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Strike the target and knock them **into the air**, dealing total damage equal to **83.4%** of ATK + **4**.`,
            },
            {
                name: "Spiral Drive",
                type: "normal",
                desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Spiral Drive. While falling, deal damage equal to **42%** of ATK + **2** each hit.`,
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
            },
            {
                name: "Flying Blades",
                type: "dodge",
                desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target **5** times, each dealing damage equal to **18.8%** of ATK + **1**. Grant immunity to control effects while phasing.`,
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the red area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
            {
                name: "Returning Blades",
                type: "skill",
                desc: `Fires 6 returning blades, each dealing damage equal to **20.7%** of ATK + **1**. Gains **hyperbody** for up to **8** seconds, and the effect is removed when the blades return. **45**-second cooldown.`,
            },
            {
                name: "Orbiting Blades",
                type: "discharge",
                desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and blink to the target location upon switching to this weapon and attack, dealing damage equal to **62.1%** of ATK + **3** and electrocuting the target (after **5** seconds, deals volt damage equal to **15%** of damage dealt, up to **350%** of the Wanderer's ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to **46.5%** of ATK + **2** to those that touch them.`,
            }
        ],
        recommendedMatrix: {
            set2: ["samir", "claudia", "crow"],
            set4: ["samir"],
            set3: ["pepper", "sobek"]
        }
    },

    matrix: {
        set2: `Increase crit damage to targets with less than **60%** HP by **24%/30%/36%/42%**.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase crit damage to targets with less than **60%** HP by **33%/42%/50%/58%**.`,

        set4: `Crits deal additional damage over time equal to **18%/22%/26%/30%** of ATK every second for **5** seconds. Does not stack.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Crits deal additional damage over time equal to **12%/15%/18%/21%** of ATK every second for **5** seconds. Does not stack.`
    },

    awakening: {
        trait1200: `When Crow is not in team play, increase damage dealt by **6%** and reduce damage received by **4%**.`,

        trait4000: `When Crow is not in team play, increase damage dealt by **10%** and reduce damage received by **6%** When Crow enters combat, increase damage dealt by **12%** for **12** seconds.`,

        giftCategories: ['everyday-items', 'figurines', 'limited-edition'],

        gifts: [
            [80, "tataCards", "tataFigure"],
            [60, "goldCoin", "catFigure", "miaFigure", "peppaFigure", "bearFigure", "psp", "linyeFigure"],
            [30, "suit", "juicePouch", "perfume", "pumpkinFigure", "androidFigure"],
            [15, "flowers", "snackBox", "scarf"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '162 cm',
        birthplace: 'Astra',
        horoscope: 'Sagittarius',
        birthday: '17 Dec',
        voiceActors: {
            jp: "岡本信彦 (Nobuhiko Okamoto)",
            en: "Casey Mongillo",
            cn: "翟巍"
        }
    }
}

export default crow;
