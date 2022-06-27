const king = {
    name: "KING",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Scythe of the Crow",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "defense", "health"],
        shatter: ["S", "12.50"],
        charge: ["B", "5.00"],
        materials: ["flame", "green", "blue"],
        advancement: {
            star1: `Increase shatter by **15%**. After shattering the target's shield, deal damage equal to **120%** of ATK to the target every second for **15** seconds.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `Increase damage dealt by **6%** for each enemy within **6** meters, up to a maximum of **30%**.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `Increase damage dealt against HP shields or shielded enemies by **100%**.`,

            star6: `Increase damage dealt by **10%** for each enemy slain for **30** seconds (stack up to **3** times).`
        },
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: `While on the ground, swing the scythe to launch 5 consecutive attacks.  
                            First Attack: Deal damage equal to **51.9%** of ATK + **3** and knock the target back a short distance.  
                            Second Attack: Deal damage equal to **44.7%** of ATK + **2** and knock the target back a short distance.  
                            Third Attack: Deal damage equal to **97.2%** of ATK + **5** and knock the target back a short distance.  
                            Fourth Attack: Deal damage equal to **99.6%** of ATK + **5** and knock the target back a short distance.  
                            Fifth Attack: Deal damage equal to **94.7%** of ATK + **5**, knock the target **into the air**, and cause the Wanderer to go airborne.`
            },
            {
                name: "Rising Scythe",
                type: "normal",
                desc: `While airborne or after jumping once, attack 5 times in a row.  
                            First Attack: Deal damage equal to **57.6%** of ATK + **3**.  
                            Second Attack: Deal damage equal to **62.6%** of ATK + **3**.  
                            Third Attack: Deal damage equal to **173%** of ATK + **9**.  
                            Fourth Attack: Deal damage equal to **194.4%** of ATK + **10**.  
                            Fifth Attack: Deal damage equal to **158.1%** of ATK + **8** and knock the target down. The higher the target is from the ground, the more damage is dealt, up to **600%** of ATK.`
            },
            {
                name: "Asunder",
                type: "normal",
                desc: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Asunder. While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **65.4%** of ATK + **3** and deliver a **knockdown**. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.`
            },
            {
                name: "Returning Chainblade",
                type: "normal",
                desc: `After the fourth normal attack, hold the normal attack button to trigger Returning Chainblade. Transform into a chainblade, dealing damage equal to **124.9%** of ATK + **7** to nearby targets and pulling them in.`
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`
            },
            {
                name: "Returning Chainblade",
                type: "dodge",
                desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Rapid Lunge. Deal up to **115.5%** of ATK + **6** damage and pull in nearby enemies.`
            },
            {
                name: "Domain of the Bat",
                type: "dodge",
                desc: `When dodging, summon a group of bats that pulls the target into the center. Tap normal attack during the short period after dodging to swing the scythe, dealing up to **103.8%** of ATK + **5** damage to the target.`
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
            },
            {
                name: "Mortal Coil",
                type: "skill",
                desc: `Swing the scythe, dealing damage equal to **284%** of ATK + **15**. **45** second cooldown.`
            },
            {
                name: "Flaming Scythe",
                type: "discharge",
                desc: `When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, **remove all debuffs from the wielder** and create a Flaming Scythe upon switching to this weapon, dealing damage equal to **277%** of ATK + **15** and lasts for **10** seconds. Additionally, spawn Flaming Scythes every **2** seconds. The scythes summon volcanic eruptions from the ground, which deal damage equal to **60%** of ATK + **3** to targets and knock them into the air.`
            }
        ],
        recommendMatrix: {
            set2: ["king", "shiro"],
            set3: ["sobek", "offensivelogic"]
        }
    },

    matrix: {
        set2: `When a target is shattered, grant **8%/10%/12%/14%** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> For every 10% of shield broken, gain a **4%/5%/6%/7%** damage buff, up to **3** stacks, lasting **25** seconds.`,

        set4: `When there are more than 2 enemies around, hits restore HP equal to **10%/12%/13%/14%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **30%/33%/34.5%/36%** of ATK.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> When there are more than 2 enemies around, hits restore HP equal to **14%/18%/22%/26%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **36%/42%/48%/54%** of ATK.`
    },

    awakening: {
        trait1200: "Every **7** enemies killed by KING restores HP equal to **8%** of Max HP.",

        trait4000: "Every **5** enemies killed by KING restores HP equal to **10%** of Max HP.",

        giftPrefs: ['collectibles', 'rare-items', 'limited-edition'],

        gifts: [
            [80, "seal", "goldCoin"],
            [60, "kitchenware", "tataCards", "foxFigure", "catFigure", "miaFigure", "tataFigure", "ufo", "psp", "snowglobe", "linyeFigure"],
            [30, "necklace", "vial"],
            [15, "photo", "snackBox", "harmonica", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '190 cm',
        birthplace: 'Crown',
        horoscope: 'Scorpio',
        birthday: '3 Nov'
    }
}

export default king;