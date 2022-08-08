const couant = {
    name: "Couant",
    uri: "couant",
    imgSrc: "couant.webp",
    rarity: "SR",
    chinaOnly: false,
    description: "Summon a droid and generate a shield for **5** seconds. The shield disappears after **5** seconds or after being struck once. When it disappears, it knocks back nearby enemies, dealing damage equal to **100%** of ATK + **50**. If broken within **1** second of being created, the shield will stun enemies for **2** seconds. Cooldown: **30** seconds. Shares cooldown with Couant II.",
    advancement: {
        star1: `When the shield is broken, reduce the speed of the attacker by **35%** for **6** seconds.`,

        star2: `After shield breaks, increase final damage by **20%** for **10** seconds.`,

        star3: "After the shield ends (shattered), it increases your movement speed by 30% for 5 seconds.",

        star4: "Reduce flame damage by **1.5%**, even if not deployed. Unavailable in Apex League.",

        star5: "if the shield breaks, gain a **5**-second damage reflection effect, reflecting **0.6**x damage taken back at the attacker."
    },
    videoSrc: "https://www.youtube.com/embed/PTXuEnUd8kY",
    starsInVideo: "4",

    cnData: {
        advancement: {
            star1: `<abbr title='China Exclusive'></abbr> When the shield is broken, reduce the speed of the attacker and nearby enemies by **35%** for **6** seconds.`,

            star2: `<abbr title='China Exclusive'></abbr> After shield breaks, increase final damage equal to the percentage of HP lost with a minimum of **30%**, for **10** seconds.`
        }
    }
}

export default couant;