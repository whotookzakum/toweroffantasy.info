const coco = {
    name: "Коко Риттер",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Абсолютный ноль",
        element: "ice",
        type: "support",
        baseStats: ["attack", "defense", "health"],
        shatter: ["B", "4.00"],
        charge: ["S", "12.50"],
        materials: ["ice", "green", "blue"],
        advancement: {
            star1: `При уклонении призывает исцеляющую пчелу, которая следует за персонажем и лечит союзника с самым меньшим запасом здоровья в радиусе **15** метров на **25%** от АТК, также восстанавливая **50** очков заряда оружия. Пчела существует **25** секунд. Перезарядка: **25** секунд.`,

            star2: `Базовый прирост к здоровью от оружия увеличивается на **16%**.`,

            star3: `Применение <strong class='text-orange'>Святилища</strong>** или навыка высвобождения сбрасывает негативные эффекты с целей. Эти навыки можно использовать под активными эффектами контроля. Эффективность пробивания и наносимый урон союзников в радиусе действия навыков увеличивается на **20%**. В радиусе действия навыков союзники получают неуязвимость к эффектам контроля и пробиванию.`,

            star4: `Базовый прирост к здоровью от оружия увеличивается на **32%**.`,

            star5: `Увеличивает исходящее лечение на **15%** и на **20%** дополнительно, когда у цели исцеления меньше **60%** здоровья.`,

            star6: `Когда исцеляющая пчела появляется или исчезает, лечит всех союзников на **100%** от АТК. Все союзники в радиусе **6** метров от исцеляющей пчелы получают увеличение наносимого урона в **10%**. Эффект не складывается.`
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
                name: "Святилище",
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
        set2: `Увеличивает получаемое и исходящее лечение на **8%/10%/12%/14%**.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Увеличивает получаемое и исходящее лечение на **10%/12%/14%/16%**.`,

        set4: `Когда персонаж или союзник исцеляется, АТК увеличивается на **10%/12,5%/15%/17,5%** в течение **2** секунд.  
            <abbr title='China Exclusive' class='cn-flag'>CN</abbr> Когда персонаж или союзник исцеляется, АТК увеличивается на **12,5%/15%/17,5%/20%** в течение **6** секунд.`
    },

    awakening: {
        trait1200: `Когда Коко Риттер использует оружие поддержки, её получаемое и исходящее лечение увеличивается на **20%**.`,

        trait4000: `Когда Коко Риттер использует оружие поддержки, её получаемое и исходящее лечение увеличивается на **20%**. При применении активных навыков или навыков высвобождения оружия поддержки АТК союзников поблизости увеличивается на **15%** в течение **5** секунд.`,

        giftCategories: ['toys', 'decorations', 'rare-items'],

        gifts: [
            [60, "foxFigure", "catFigure", "present", "ufo", "miaFigure", "seal"],
            [30, "tataPlush", "spiderFigure", "vial", "elfFigure", "bunnyDoll", "catPlush", "robotFigure"],
            [15, "photoAlbum", "photo", "plant", "harmonica", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '147 см',
        birthplace: 'Хайкрос',
        horoscope: 'Близнецы',
        birthday: '1 Июня',
        voiceActors: {
            jp: "鬼頭明里 (Акари Кито)",
            en: "Lexi Fontaine (Лекси Фонтэйн)",
            cn: "胡婷婷 (Ху Тинтин)"
        }
    }
}

export default coco;
