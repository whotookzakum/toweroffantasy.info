 const pepper = {
    name: "Пеппер",
    rarity: "SR",
    chinaOnly: false,
    weapon: {
        name: "Посох со стигматами",
        element: "volt",
        type: "support",
        baseStats: ["attack", "defense", "health"],
        shatter: ["B", "4.00"],
        charge: ["A", "10.00"],
        materials: ["volt", "red", "black"],
        advancement: {
            star1: "При применении навыка уклонения лечит всех союзников в радиусе **10** метров на **100%** от АТК.",
            
            star2: "Базовый прирост к здоровью от оружия увеличивается на **10%**.",
            
            star3: "Обычные атаки запускают два снаряда, каждый из которых при попадании восстанавливает **5** очков заряда и наносит урон, равный **5%** от АТК.",
            
            star4: "Базовый прирост к здоровью от оружия увеличивается на **20%**.",
            
            star5: "Скорость получения заряда оружия увеличивается на **20%** (эффект не распространяется на выпущенные снаряды).",
            
            star6: "В радиусе действия активного навыка все союзники получают **60%** сопротивления к урону и иммунитет к эффектам контроля."
        },
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
        ],
        recommendedMatrix: {
            set2: ["cocoritter"],
            set4: ["cocoritter"],
            set3: ["pepper"]
        }
    },
    
    matrix: {
        set3: "Увеличивает скорость получения заряда оружия на **10%/12,5%/15%**."
    },

    awakening: {
        trait1200: "Когда Пеппер использует еду для восстановления здоровья, увеличивает получаемое от неё лечение на **100%**.",

        trait4000: "Когда Пеппер использует еду для восстановления здоровья, увеличивает получаемое от неё лечение на **200%**.",

        giftCategories: ['everyday-items', 'decorations', 'collectibles'],

        gifts: [
            [80, "peppaFigure"],
            [60, "seal", "tataCards", "foxFigure", "catFigure", "goldCoin", "snowglobe", "kitchenware", "princeTataFigure", "linyeFigure"],
            [30, "suit", "juicePouch", "necklace", "perfume", "spiderFigure", "elfFigure"],
            [15, "photoAlbum", "flowers", "plant", "scarf", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '160 см',
        birthplace: 'Бангис',
        horoscope: 'Рак',
        birthday: '9 Июля',
        voiceActors: {
            jp: "能登麻美子 (Мамико Ното)",
            en: "Kayli Mills (Кейли Миллс)",
            cn: ""
        }
    }
}

export default pepper;