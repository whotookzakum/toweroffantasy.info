const samir = {
    name: "Samir",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        wepName: "Dual EM Stars",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["S", "10.70"],
        materials: ["volt", "red", "black"],
        advancement: {
            star1: `Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to **30%** of ATK to the target and nearby enemies. Cooldown: **0.5** seconds.`,
            
            star2: `Increase the current weapon's base ATK growth by **16%**.`,
            
            star3: `Increase crit rate to electrified targets by **40%**. Electrical explosions extend the duration of electrified effects by **0.5** seconds, up to a maximum of **5** seconds.`,
            
            star4: `Increase the current weapon's base ATK growth by **32%**.`,
            
            star5: `Double the duration of Electro Field and pull targets into the center of the attack.`,
            
            star6: `Triggering an electrical explosion reduces skill cooldowns by 1 second.`
        },
        skills: [
            {
                name: "Dual Fire",
                type: "normal",
                desc: `While on the ground, tap normal attack to attack 5 times in a row.  
                        First Attack: Deal total damage equal to **47.1%** of ATK + **2**.  
                        Second Attack: Deal total damage equal to **35.8%** of ATK + **2**.  
                        Third Attack: Deal total damage equal to **119.7%** of ATK + **6**.  
                        Fourth Attack: Deal total damage equal to **113.1%** of ATK + **6**.  
                        Fifth Attack: Deal total damage equal to **154%** of ATK + **8** and **launch** the target.`
            },
            {
                name: "Bullet Rain",
                type: "normal",
                desc: `While airborne, tap normal attack to fire continuously at the ground, dealing damage equal to ??% of ATK + ?? each hit. Consumes 150 Endurance.`
            },
            {
                name: "Energy Burst",
                type: "normal",
                desc: `Hold attack button to maintain constant fire, each hit dealing **23%** x ATK + **1** base damage.`
            },
            {
                name: "Phantom Kick",
                type: "normal",
                desc: `While airborne, tap and hold normal attack to trigger Phantom Kick. Knock the target down and deal damage equal to **70.5%** of ATK + **4**. Upon landing, deal damage equal to **98.7%** of ATK + **5** to nearby targets and **launch** them.`
            },
            {
                name: "Rising Lightning Kick",
                type: "dodge",
                desc: `Tap normal attack after dodging to **knock targets into the air** and deal damage equal to **122.6%** of ATK + **6**.`
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
            },
            {
                name: "Electro Field",
                type: "skill",
                desc: `Fire an energy field at the target location, reflecting beams within the barrier. Deal damage equal to **269.8%** of ATK + **14**, and the last hit launches targets **into the air**. **45**-second cooldown.`
            },
            {
                name: "Domain of Thunder",
                type: "discharge",
                desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder**, and create a Domain of Thunder at the target location upon switching to this weapon, dealing a total of **238.3%** of ATK + **13** damage over 3 attacks to enemies **within the area** and dispelling their buffs. The domain lasts for **3.5** seconds and deals damage equal to **42.4%** of ATK + **2** to a target every **0.5** seconds.`
            }
        ],
        recommendedMatrix: {
            set2: ["samir", "claudia", "crow"],
            set4: ["samir"],
            set3: ["sobek", "pepper"]
        },
    },

    matrix: {
        set2: `Increase damage progressively by **1%** upon hitting a target. Stack up to **10/13/16/20** times. Lasts **1.5** seconds.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase damage progressively by **1.5%** upon hitting a target. Stack up to **10/13/16/20** times. Lasts **2** seconds.`,

        set4: `Increase Dual EM Stars' electrical explosion damage by **16%/22%/30%/40%** of ATK.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Adds an extra hit to the locked on target for every attack for **10%/12.5%/15%/17.5%** damage (can not crit).`
    },

    awakening: {
        trait1200: "Grant **1** stack of Concentration for every **4** seconds when Samir receives no damage. Each stack increases damage dealt by **3%**, and can stack up to **4** times. After being hit, Samir loses **1** stack of Concentration, up to **1** stack per **1** second.",

        trait4000: "Grant **1** stack of Concentration for every **4** seconds when Samir receives no damage. Each stack increases damage dealt by **4%**, and can stack up to **5** times. After being hit, Samir loses **1** stack of Concentration, up to **1** stack per **2** second.",

        giftCategories: ['games', 'toys'],

        gifts: [
            [60, "foxFigure", "psp", "present", "ufo", "pearl", "princeTataFigure"],
            [30, "tataPlush", "chessSet", "catPlush", "diary", "robotFigure", "bunnyDoll"],
            [15, "tradingCard", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '171 cm',
        birthplace: '???',
        horoscope: 'Taurus',
        birthday: '20 May'
    }
}

export default samir;
