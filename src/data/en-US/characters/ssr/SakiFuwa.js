const saki = {
    // 流泉彻心
    name: "Saki Fuwa",
    rarity: "SSR",
    wepName: "Ryusen Toshin",
    element: "ice",
    reso: "tank",
    shieldBreak: ["13.90", "s"],
    energyCharge: ["8.00", "a"],
    materials: function() { return [this.element, "red", "black"] },
    // wepBaseStats: [attack, defense, health],
    exclusiveEffect: `**Ice Resonance**: When equipped with **2** or more Ice weapons, increase Ice ATK by **20%** and Ice Resistance by **40%**, taking effect in the background.`,
    
    awakening: [
            // 1 star
            `When Ice Resonance is active, release any weapon skill **5** times in total to clear the cooldown of all weapon skills, and **double** the damage of [Circulation] and [Counterattack] for **25** seconds.`,
            // 2 star
            `Increase the current weapon's base ATK growth by **16%**.`,
            // 3 star
            `Flowing Heart: Sword Shadow [Surge] damage increased to **900%** of Ice ATK.  
            Silent Flow: Sword Shadow [Surge] cooldown reduced to **5** seconds.`,
            // 4 star
            `Increase the current weapon's base HP growth by **32%**.`,
            // 5 star
            `Sword Shadow's [Surge] triggers Phantasia upon hitting a target, shares cooldown with Phantasia trigged by dodging.`,
            // 6 star
            `Sword Shadow's [Surge] increases your ice damage by **20%** for **15** seconds upon hitting a target. Activating Sword Shadow's block reduces surrounding enemies' ice damage by **25%** for **12** seconds.`
        ],
    
    chipEffect: [
            // 2 set
            `While Ice Resonance is active: Every **3** seconds, deal **60%/100%/150%/220%** * Ice ATK to enemies within 10 meters of the surrounding area and apply [Frost] effect: 5% slowing effect for **3.5** seconds, after 3 stacks Freeze the target for **3** seconds (excluding bosses) and increase the target's Ice Damage by **12%** (lasts **18** seconds). These matrices work in the background, and for multiple sets the highest star set will be used.`,
        
            // 4 set
            `Attack the target **10** times and add a 12-second [Frozen] mark: Attack the marked target to increase the ice element damage by **25%/28%/31%/34%**. These matrices work in the background, and for multiple sets the highest star set will be used.`
        ],

    mimicEffect: [
            // 1200 affininty
            `When health is below **70%**, gain **40%** all-element resistance.`,

            // 4000 affinity
            `When health is below **70%**, gain **40%** all-element resistance and an additional **60%** ice resistance.  
            When blocking with Silent Flow [Surge], provide 3 blocks to the teammate with the lowest health (excluding yourself). Lasting **10** seconds, the block amount will not exceed **15%** of the teammate's maximum health.`
        ],
    
    traits: {
        gender: 'Female',
        height: '157 cm',
        birthplace: 'Mirror City',
        horoscope: 'Libra',
        birthday: '11 October'
    },
    
    // gifts: [
    //     [60, princeTataFigure, linyeFigure],
    //     [40, strangeFragment],
    //     [15, strangePlant]
    // ],
    giftPrefs: ['metalware', 'everyday-items', 'vera'],
    
    recChips: [
        ['saki', 4]
        ['saki', 2],
        ['samir', 2]
    ]
}

export default saki;
