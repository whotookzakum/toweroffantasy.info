const couant = {
    name: "Couant",
    description: "Summon a droid and generate a shield for **5** seconds. The shield disappears after **5** seconds or after being struck once. When it disappears, it knocks back nearby enemies, dealing damage equal to **100%** of ATK + **50**. If broken within **1** second of being created, the shield will stun enemies for **2** seconds. Cooldown: **30** seconds. Shares cooldown with Couant II.",
    awakening: [
            // 1 star
            "When the shield is broken, reduce the speed of the attacker by **35%** for **6** seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> When the shield is broken, reduce the speed of the attacker and nearby enemies by **35%** for **6** seconds.",
            // 2 star
            "After shield breaks, increase final damage by **20%** for **10** seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> After shield breaks, increase final damage equal to the percentage of HP lost with a minimum of **30%**, for **10** seconds.",
            // 3 star
            "After the shield ends (shattered), it increases your movement speed by 30% for 5 seconds.",
            // 4 star
            "Reduce flame damage by **1.5%**, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "if the shield breaks, gain a **5**-second damage reflection effect, reflecting **0.6**x damage taken back at the attacker."
        ],
    rarity: "SR"
}

export default couant;