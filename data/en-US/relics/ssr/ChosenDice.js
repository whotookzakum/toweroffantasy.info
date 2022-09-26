const chosendice = {
    name: "Chosen Dice",
    uri: "chosen-dice",
    imgSrc: "chosendice.webp",
    rarity: "SSR",
    chinaOnly: true,
    description: 
        `Throw all the dice in your hand, with different numbers resulting in different effects. Throwing dice while in combat will grant you **1** of **10** buffs at random, and will be cleared once you leave combat. Possible effects include **5%** Elemental Damage (Ice, Flame, Volt, Physical, Aberrant) and **5%** Reduced Elemental Damage Received (Ice, Flame, Volt, Physical, Aberrant). Each unique effect can only stack **1** time. Gain **1** die every **30** seconds, up to **3** dice. Cannot be used with **Couant** or **Couant II**.  
        &nbsp;  
        When rolling **1** die, immediately gain **180** weapon charge. Rolling **1** or **6** will grant the Thermonuclear buff: **20%** damage increase for **35** seconds.  
        When rolling **2** dice, immediately gain **180** weapon charge and gain the Thermonuclear buff. If both dice land on the same number, gain the **Fusion** effect: clear all weapon skill cooldowns.  
        When rolling **3** dice, immediately gain **180** weapon charge, gain the Thermonuclear buff and Fusion effect, and if all dice land on the same number, gain the **Overclock** effect: for the next **6** seconds, discharge skills will not consume weapon charge.  
        &nbsp;  
        When unequipping the Chosen Dice relic, the random effect and thermonuclear effect are removed.`,
    advancement: {
        star1: "Reduce time to gain a new die to **20** seconds.",

        star2: "Increase **Thermonuclear** buff's damage boost to **25%** and duration to **45** seconds.",

        star3: "After every dice roll, there is a **50%** chance to gain a new die, cooldown **15** seconds.",

        star4: "Increase frost damage by **2%**, even if not deployed. Unavailable in Apex League.",

        star5: "The **Overclock** effect can be obtained if the sum of the **3** dice is **14** or higher."
    },
}

export default chosendice;