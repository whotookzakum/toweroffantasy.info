const nemesis = {
    name: "Немезида",
    uri: "nemesis",
    imgSrc: "nemesis.png",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 5,
                start: "05 Мар 2022",
                end: "24 Мар 2022",
                duration: "19д",
                week: "12~15"
            },
            {
                bannerNo: 13,
                subtext: "В сентябре уйдёт в стандарт",
                start: "23 Июн 2022",
                end: "9 Июл 2022",
                duration: "16д",
                week: "28~30"
            }
        ]
    },
    weapon: {
        name: "Венера",
        element: "volt",
        type: "support",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["A", "8.00"],
        materials: ["volt", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Громовой резонанс",
                description: "Срабатывает при ношении **2** или более громовых оружий, постоянно увеличивая АТК Напряжением на **20%** и Сопротивление Напряжению на **40%**."
            }
        },
        advancement: {
            star1: `При применении активного навыка оружия или навыка высвобождения создаётся **1** Электрод, сразу же дающий **5** эффектов улучшения Цепного исцеления и запускающий это самое Цепное исцеление, лечащее ближайших союзников на **135%** от АТК.`,

            star2: `Базовый прирост АТК оружия увеличивается на **16%**.`,

            star3: `Электроды каждые **6** секунд образуют электрокольцо, наносящее до **389%** от АТК в зависимости от дальности.`,

            star4: `Базовый прирост АТК оружия увеличивается на **32%**.`,

            star5: `При применении активного навыка оружия АТК Напряжением увеличивается на ( **10** + Кол-во Электродов &times; **10** ) % на **25** секунд.`,

            star6: `Теперь можно создать до **2** Электродов. Третий созданный Электрод заменяет собой самый дальний от персонажа Электрод.`
        },
        advancement: {
        recommendedMatrix: {
            set2: ["nemesis", "cocoritter"],
            set4: ["nemesis", "cocoritter"],
            set3: ["sobek"]
        }
    },

    matrix: {
        set2: `При лечении цели её АТК Напряжением увеличивается на **15%/18%/21%/25%** на **20** секунд. Эффект не может складываться и при наличии нескольких таких наборов матриц действовать будет лишь набор с самым большим числом звёзд.`,
        
        set4: `При лечении своих Электродов или самого себя, исцелённая цель получает эффект Удара молнии на **30** секунд, и при следующей своей атаке нанесёт дополнительно **300%/375%/450%/525%** от АТК Напряжением (вдвое меньше, если Электрод) урона цели. Эффект можно получить снова только через **10** секунд. Эффект Удара молнии не складывается, и при наличии нескольких таких наборов матриц действовать будет лишь набор с самым большим числом звёзд.`
    },

    awakening: {
        trait1200: `При создании Электрода все противники в радиусе **30** метров от него получат урон, равный **60%** от АТК Напряжением, а все союзники (включая самого персонажа) будут исцелены на **120%** от их АТК.`,

        trait4000: `При создании Электрода все противники в радиусе **30** метров от него получат урон, равный **100%** от АТК Напряжением, а все союзники (включая самого персонажа) будут исцелены на **200%** от их АТК.`,
        
        giftCategories: ['toys', 'everyday-items', 'decorations'],

        gifts: [
            [80, "peppaFigure", "princeTataFigure"],
            [60, "tataCards", "present", "snowglobe", "foxFigure", "catFigure"],
            [30, "tataPlush", "suit", "catPlush", "perfume", "spiderFigure", "elfFigure", "robotFigure", "bunnyDoll"],
            [15, "flowers", "photoAlbum", "plant", "scarf", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Женский',
        height: '165 см',
        birthplace: '???',
        horoscope: 'Близнецы',
        birthday: '25 Мая',
        voiceActors: {
            jp: "戸松遥 (Харука Томацу)",
            en: "",
            cn: "宋媛媛 (Сун Юаньюань)"
        }
    }
}

export default nemesis;
