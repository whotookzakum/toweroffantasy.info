const zero = {
    name: "Zero",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Negating Cube",
        element: "flame",
        type: "support",
        baseStats: ["attack", "defense", "health"],
        shatter: ["B", "5.00"],
        charge: ["S", "13.00"],
        materials: ["flame", "green", "blue"],
        advancement: {
            star1: `Deal damage and produce a healing orb, which lasts for **20** seconds and restore HP of any teammate who picks it up equal to **60%** of ATK. **2**-second cooldown.`,
            // 20% chance of generating a healing sphere when dealing damage, lasts 20 seconds and restores 60% of attack power as health to the player who picks up the healing sphere.

            star2: `Increase the current weapon's base ATK growth by **16%**.`,
            
            star3: `Reduce skill cooldown from **90** seconds to **45** seconds. Restore HP equal to **30%** of ATK every second while the shield is active.`,
            
            star4: `Increase the current weapon's base HP growth by **32%**.`,
            
            star5: `Deal damage and produce a damage orb, which lsts for **20** seconds and increases ATK of any teammate who picks it up by **1.5%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Deal damage and produce a damage orb, which lsts for **20** seconds and increases ATK of any teammate who picks it up by **2%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.`,
            
            star6: `Using an ability grants allies healing orbs and damage orbs equal to the number of Omnium Cubes.`
        },
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: `While on the ground, manipulate the cube to attack 5 times in a row.  
                    First Attack: Deal damage equal to **35.9%** of ATK + **2**.  
                    Second Attack: Deal damage equal to **29.4%** of ATK + **2**.  
                    Third Attack: Deal damage equal to **91.5%** of ATK + **5**.  
                    Fourth Attack: Deal damage equal to **61.2%** of ATK + **3**.  
                    Fifth Attack: Deal damage equal to **62.3%** of ATK + **3** up to 3 times and **launch** the target.  
                    **Passive: If normal attacks hit targets 6 times, gain 1 cube. Up to 5 cubes can be stored**.`
            },
            {
                name: "Omnium Missile",
                type: "normal",
                desc: `While airborne, tap normal attack to activate the energy within the cube, firing up to **5** missiles and dealing total damage equal to **45.6%** of ATK + **2**. Consume up to **250** endurance.  
            **Passive: If the Wanderer has any stored cubes, consume all cubes to fire Omnium Missiles at targets to deal damage**.`
            },
            {
                name: "Energy Overflow",
                type: "normal",
                desc: `While airborne or after jumping once, tap normal attack to trigger Energy Overflow. Upon landing, fire a shockwave that travels forward, dealing up to **18%** of ATK + **1** damage to targets in its path.`
            },
            {
                name: "Omnium Shock",
                type: "normal",
                desc: `On the third normal attack, hold the normal attack button to trigger Omnium Shock. A pillar of energy launches nearby targets into the air, dealing damage equal to **52.8%** of ATK + **3**. The pillar lasts 5 seconds and deals damage equal to **22%** of ATK + **1** to nearby targets every second.`
            },
            {
                name: "Energy Sentinel",
                type: "normal",
                desc: `Cubes orbiting the Wanderer deal damage equal to **7.5%** of ATK + **1** to enemies.`
            },
            {
                name: "Energy Missile",
                type: "normal",
                desc: `When the Wanderer casts Omnium Missiles and Energy Overflow, their orbiting cubes are fired as well, dealing damage equal to **37.3%** of ATK + **2** to the target.`
            },
            {
                name: "Soul Surge",
                type: "dodge",
                desc: `Dodge right before getting hit to trigger a Phantasia, which reduces speed of enemies within range and grants hitstun immunity for **0.5** seconds. If the Wanderer has less than **5** cubes, each successful dodge has a **40%** chance to restore 1 dodge attempt. Successful dodges do not interrupt normal attack combos.  **Passive: Gain a cube for every successful aerial dodge**.`
            },
            {
                name: "Omnium Shield",
                type: "skill",
                desc: `Create shielding for self and nearby allies to block up to **800%** x ATK in damage for **10** seconds, and deal **109.9%** x ATK + **6** damage to nearby targets and **launch** them. Each cube in possession when this skill is used adds **160%** of ATK to max shielding and exhaust the cube. Cooldown: **90** seconds.`
            },
            {
                name: "Omnium Wave",
                type: "discharge",
                desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and gain 5 cubes upon switching to this weapon, then unleash the **5** cubes along with a Shockwave. This Shockwave deals damage equal to **131.5%** of ATK + **7** to nearby targets, and **launches** them into the air. Each cube also deals damage equal to **37.3%** of ATK + **2**. If allies are in the vicinity, they gain damage immunity for **3** seconds.`
            },
        ],
        recChips: {
            set2: ["coco"],
            set4: ["coco"], // 4samir removed because global description is changed; won't proc cubes
            set3: ["pepper", "sobek"]
        }
    },

    matrix: {
        set2: `Upon using a discharge skill to switch to the current weapon, gain a shield equal to **120%/150%/180%/210%** of ATK for **4** seconds.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Upon using a discharge skill to switch to the current weapon, gain a shield equal to **150%/200%/250%/300%** of ATK for **6** seconds.`,

        set4: `While the shield is active, you and your teammates deal **16%/20%/24%/28%** more damage.`
    },

    awakening: {
        trait1200: `When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **1.5** seconds. Can only activate for the same weapon **1** time every **5** seconds.`,

        trait4000: `When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **3** seconds. Can only activate for the same weapon **1** time every **5** seconds.`,

        giftCategories: ['limited-time-items', 'games'],

        gifts: [
            [80, "psp"],
            [60, "goldCoin", "tataCards", "pearl", "catFigure", "ufo", "tataFigure"],
            [30, "chessSet", "diary"],
            [15, "tradingCard", "snackBox"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '155 cm',
        birthplace: 'Banges',
        horoscope: 'Gemini',
        birthday: '6 Jun'
    }
}

export default zero;