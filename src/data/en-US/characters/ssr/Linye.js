const linye = {
    name: "Linye",
    rarity: "SSR",
    chinaOnly: true,
    weapon: {
        name: "Shadow Weaver",
        element: "supernatural",
        type: "dps",
        baseStats: ["attack", "", ""],
        shatter: [],
        charge: [],
        materials: [],
        bonusEffect: `**Nightblooms** will appear in an area around the target, randomly exploding after **2-4** seconds and dealing AoE damage.`,
        advancement: {
            star1: `Normal attacks trigger AoE explosions. When **Nightblooms** are in explosion range of **each other**, increase their subsequent explosion damage by **10%** (up to **50%**).`,

            star2: ``,

            star3: `Passive: **Gravity Field** creates **1 Nightbloom** near the target every **second**. The **Nightbloom** will attack to the target.`,

            star4: ``,

            star5: `While inside **Gravity Field**, gain **50** weapon charge per second and increase damage of discharge skills by **15%**.`,

            star6: `**Gravity Field** can be activated **twice** (up to once from skill cooldown, and once from filling weapon charge). Using discharge skills **2** times will grant **1** more charge of **Gravity Field** (effective in the background). **Gravity Field**'s damage amplification is increased to **20%**.`
        },
        skills: [
            {
                name: "",
                type: "normal",
                desc: `An air burst is formed at the target position, a range diffusion wave is formed on the ground, and the target is knocked down. Passive: Continue clicking basic attack after releasing the branch attack to immediately release a max [Hold] attack.`
            },
            {
                name: "",
                type: "normal",
                desc: `Sends a large spiral sphere (which can be charged and increases with the charging time), inflicting multiple hits on impact.`
            },
            {
                name: "",
                type: "normal",
                desc: `Falling quickly from the air, causes AoE damage after landing and knocks down targets.`
            },
            {
                name: "",
                type: "dodge",
                desc: `Launch an attack on the target while dodging midair. The hit generates **1-3 Nightblooms**, and at the same time forms a field that lasts for **5** seconds. When an enemy moves against the direction in the field, their movement speed is reduced by **50%**. Passive: can be released both on the ground and in the air; when under control effects, immediately break out and release the wind field (automatically use a dodge attack without consuming dodge count), cooldown **20** seconds.`
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
            },
            {
                name: "Gravity Field",
                type: "skill",
                desc: `A gravity field is formed around yourself for **15** seconds. In the gravity field, you gain a **15%** damage bonus, and can double jump multiple times and has **20%%** increased jumping ability and reducing stamina consumption by **50%**. Aerial falling speed is also reduced. When using **Shadow Weaver** in the gravity field, gain the **Cold Air** state: using a joystick and jumping in the air will create a gust and release an attack at the target, which will generate **Nightblooms**.  

                Passive: In the gravity field, a **Nightbloom** will be generated near the target every **1.5** seconds.  

                Passive: When **Nightblooms** detonate in the gravity field, they instantly kill targets with less than **10%** of their HP.  

                Passive: When in the gravity field, flash away from the target when you are about to take damage, cooldown **10** seconds.  

                Passive: Weapons Master:

                When paired with two **Flame weapons**, the wind field is transformed into a flame wind field. When the burning BUFF is added in the wind field, the duration is increased by **5** seconds, and the player's own fire damage to the shielded target in the wind field is increased by **50%**.

                When paired with two **Volt weapons**, the wind field is transformed into a lightning wind field. Dodges have a **65%** chance of not being consumed while in the wind field. Each dodge will add **300%** AoE damage to the next Discharge skill, stacking up to **3** times for **900%** damage.

                When paired with two **Ice weapons**, the wind field is transformed into an ice wind field. When enemies in the field receive ice damage **10** times, they enter a state of frostbite for **15** seconds, receiving **20%** more ice damage. The number of hits to activate frostbite does not accumulate during the effect.

                When paired with two **Physical weapons**, the wind field is transformed into a physical wind field. Every time the target loses **1%** of its max HP in the wind field, you gain the corresponding health in shields within **3** seconds, can be stacked.

                When paired with two **weapons of different elements**, the wind field is not transformed. Gain **15%** attack for all elements while in the wind field.`
            },
            {
                name: "",
                type: "discharge",
                desc: `When switching to this weapon will full charge or when Phantasia is triggered, clear all debuffs and converges to form a spiral energy sphere with strong suction (all movable targets can be sucked), and explodes after a short time (1-2 seconds). Formation of a range of wind pressure diffusion wave.`
            }
        ],
        recommendedMatrix: {
            set2: [],
            set4: [],
            set3: []
        }
    },

    matrix: {
        set2: `Aerial attacks increase your attack power by **3%/3.7%/4.3%/5%** for **18** seconds. This effect can stack up to **5** times.`,

        set4: `Traveling **5** meters within Gravity Field will grant **1** stack of [Wind's Wish], increasing your total damage by **7.5%/9%/10.5%/12%** for 15 seconds. This effect can stack up to **3** times. Effect is active in the background.`
    },

    awakening: {
        trait1200: `Nightbloom's explosion damage increased by **15%**`,

        trait4000: `Nightbloom's explosion damage increased by **20%**. Nightbloom explosions reduce all elemental resistances of the affected targets by **7%** for **7** seconds. This effect cannot stack.`,

        giftPrefs: [],

        gifts: [],
    },

    bio: {
        gender: 'Female',
        height: '',
        birthplace: 'Mirror City',
        horoscope: 'Virgo',
        birthday: '3 Sep'
    }
}

export default linye;