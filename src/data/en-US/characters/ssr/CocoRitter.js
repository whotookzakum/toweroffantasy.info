const coco = {
    name: "Coco Ritter",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Absolute Zero",
        element: "ice",
        type: "support",
        baseStats: ["attack", "defense", "health"],
        shatter: ["B", "4.00"],
        charge: ["S", "12.50"],
        materials: ["ice", "green", "blue"],
        advancement: {
            star1: `After dodging, summon a healing bee that follows the user and heals the ally with the lowest percentage of HP within **15** meters. Heal for **25%** of ATK and restore **50** weapon charge points each time and last for **25** seconds. Cooldown: **25** seconds.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `Use <strong class='text-orange'>Sanctuary</strong>** or discharge skills to remove debuffs from targets, can be used while being affect by control effects. Increase shatter and damage dealt for all teammates within range by **20%**, and grant them immunity to control effects and shatter.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Increase healing effect by **15%**, plus an additional **20%** when healing targets with less than **60%** HP.`,

            star6: `Whenever a healing bee is summoned or disappears from battle, heal all allies for **100%** of the user's ATK. All allies within **6** meters of the healing bee also gain **10%** damage boost (cannot stack).`
        },
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: `While on the ground, swing the staff to attack 5 times in a row.  
                            First Attack: Deal damage equal to **41.9%** of ATK + **2**.  
                            Second Attack: Deal damage equal to **31.4%** of ATK + **2**.  
                            Third Attack: Deal damage equal to **50.6%** of ATK + **3**.  
                            Fourth Attack: Deal damage equal to **69%** of ATK + **4**.  
                            Fifth Attack: Deal damage equal to **122%** of ATK + **6**.`
            },
            {
                name: "Focused Assault",
                type: "normal",
                desc: `After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.  
                            First Attack: Pull in enemies in front of the user, knocking them **into the air** and dealing damage equal to **26.8%** of ATK + **1** every **0.3** seconds (up to **4** times).  
                            Second Attack: Deal damage equal to **31.1%** of ATK + **2** at the target location and to nearby enemies every **0.3** seconds.`
            },
            {
                name: "Soaring Barrage",
                type: "normal",
                desc: `While airborne or after jumping once, tap normal attack to attack 5 times in a row.  
                            First Attack: Deal damage equal to **54.2%** of ATK + **3**.  
                            Second Attack: Deal damage equal to **39.1%** of ATK + **2**.  
                            Third Attack: Deal damage equal to **42.4%** of ATK + **2**.  
                            Fourth Attack: Deal damage equal to **76.2%** of ATK + **4**.  
                            Fifth Attack: Deal damage equal to **79.4%** of ATK + **4**.`,
            },
            {
                name: "Moonfall",
                type: "normal",
                desc: `Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **95.2%** of ATK + **5** damage.`,
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
            },
            {
                name: "Surge",
                type: "dodge",
                desc: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **35.3%** of ATK + **2** to targets. Grant **75** weapon charge points upon use.`,
            },
            {
                name: "Tesseract",
                type: "dodge",
                desc: `Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **51.1%** of ATK + **3** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.`,
            },
            {
                name: "Sanctuary",
                type: "skill",
                desc: `Create a healing zone that moves with the Wanderer and heals nearby allies for **95%** of ATK + **5** once every **0.5** seconds for **6** seconds. **60**-second cooldown.`,
            },
            {
                name: "Swift Deliverance",
                type: "discharge",
                desc: `When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon **removes all debuffs from the wielder**, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for **118.8%** x ATK + **6** HP for **7** seconds.`,
            }
        ],
        recommendedMatrix: {
            set2: ["cocoritter", "meryl"],
            set4: ["cocoritter", "zero"],
            set3: ["pepper"]
        }
    },

    matrix: {
        set2: `Increase healing capability and healing received by **8%/10%/12%/14%**.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase healing capability and healing received by **10%/12%/14%/16%**.`,

        set4: `When you or your teammates are healed, increase ATK by **10%/12.5%/15%/17.5%** for **2** seconds.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> When you or your teammates are healed, increase ATK by **12.5%/15%/17.5%/20%** for **6** seconds.`
    },

    awakening: {
        trait1200: `When Cocoritter uses a support weapon, increase healing effects she inflicts on others and receives by **20%**.`,

        trait4000: `When Cocoritter uses a support type weapon, the effects of healing and receiving healing are increased by **20%**, and when the discharge skills or weapon skills of the support-type weapon are used, the ATK of the friendly armies around you will increase by **15%** and lasts for **5** seconds.`,

        giftCategories: ['toys', 'decorations', 'rare-items'],

        gifts: [
            [60, "foxFigure", "catFigure", "present", "ufo", "miaFigure", "seal"],
            [30, "tataPlush", "spiderFigure", "vial", "elfFigure", "bunnyDoll", "catPlush", "robotFigure"],
            [15, "photoAlbum", "photo", "plant", "harmonica", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '147 cm',
        birthplace: 'Hagarde',
        horoscope: 'Gemini',
        birthday: '1 Jun',
        voiceActors: {
            jp: "鬼頭明里 (Kito Akari)",
            en: "Lexi Fontaine",
            cn: "胡婷婷"
        }
    }
}

export default coco;
