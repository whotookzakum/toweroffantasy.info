const cobalt = {
    name: "Cobalt-B",
    rarity: "SSR",
    wepName: "Blazing Revolver",
    element: "flame",
    reso: "damage",
    shieldBreak: ["6.50", "b"],
    energyCharge: ["10.00", "a"],
    materials: function() { return [this.element, "red", "black"] },
    // wepBaseStats: [attack, health, crit],

    awakening: [
            // 1 star
            "Each hit of the skill returns **2%** of damage dealt as health, up to **200%** of ATK.",
            // 2 star
            "Increase the current weapon's base ATK growth by **16%**.",
            // 3 star
            'The skill Blast Grenade and dodge attack Melee Break will apply <strong class="text-green">Ionic Burn</strong> to targets, dealing **90%** of ATK every second for **10** seconds.',
            // 4 star
            "Increase the current weapon's base ATK growth by **32%**.",
            // 5 star
            "<strong class='text-green'>Ionic Burn** damage increased to **140%** and dodge attacks from any weapon will refresh the burn's duration.",
            // 6 star
            "The skill <strong class='text-green'>Barrage</strong> has a burning effect that lasts for **15** seconds. Hitting a target with any weapon's dodge attack reduces the cooldown of <strong class='text-green'>Barrage</strong> by **4** seconds, up to once every **1.5** seconds. Damage over time effects trigged from a dodge attack can also trigger the effect."
        ],
    
    chipEffect: [
            // 2 set
            `Restore 1 dodge every **4** dodges. Dodge attacks add burn to the target, dealing **13%/17%/21%/25%** attack damage per second for **10** seconds.`,
            // 4 set
            `Increases damage by **13%/17%/21%/25%** to targets with abnormal statuses.`
        ],

    mimicEffect: [
            // 1200 affininty
            `When Cobalt-B releases a combo, it restores **50** - **120** points of energy charge at random.`,

            // 4000 affinity
            `When Cobalt-B releases a combo, it restores **90** - **180** points of energy charge at random.`
        ],
    
    traits: {
        gender: 'Female',
        height: '157 cm',
        birthplace: 'Crown',
        horoscope: 'Cancer',
        birthday: '26 Jun'
    },
    
    // gifts: [
    //     [80, kitchenware, goldCoin],
    //     [60, seal, tataCards, foxFigure, catFigure, bearFigure, tataFigure, present, psp, linyeFigure, pearl],
    //     [30, necklace, toolbox, strangeFragment],
    //     [15, dumbbells, snackBox, strangePlant]
    // ],
    giftPrefs: ['metalware', 'collectibles', 'limited-time-items'],
    
    recChips: [
            ['cobalt', 4],
            ['samir', 2],
            ['samir', 4],
            ['karasuma', 2],
            ['burstingcore', 3]
        ]
}

export default cobalt;