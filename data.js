var physical, lightning, fire, ice, red, green, blue, black;

var samir = 
    {
        name:"Samir",
        paneImg:"images/pane_samir.png",

        wepName:"Dual Guns",
        wepImg:"images/wep_samir.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deal (144.00% x ATK) damage, and preventing them from gaining any buffs for 6 seconds. (Also applies electro charged for 6 seconds).",
        awakening:[
            // 1 star
            "Causes an electrical explosion on crit, dealing an additional 30% attack damage to the target and nearby units.",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "+40% crit rate against shocked targets, and extends the duration of shocks by 0.5 seconds, with a cooldown time of 5 seconds.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "Double the duration of the weapon skill, and pull targets to the center of it.",
            // 6 star
            "1 second reduction in skill cooldown when triggering shock effects."
        ],
        energyCharge:"10.70",
        shieldBreak:"6.00",
        materials:[lightning,red,black],
        
        chipImg:"images/chip_samir.png",
        chipEffect:[
            // 2 set
            "Each hit increases attack by 1.5%, up to 10/13/16/20 stacks, lasting 2 seconds and refreshing with each hit.",
            // 4 set
            "Adds 10%/12.5%/15%/17.5% damage to every hit."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Samir"',
            // 600 affinity
            "Unlock communication [Solo Dance]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>For every 4 seconds that Samir does not take damage, she gains 1 stack of Focus, which increases damage by 3%, up to 4 stacks. Each time you take damage, you lose 1 stack of Focus, only once within 1 sec.',
            // 2000 affinity
            "Unlock communication [Resonance]",
            // 3000 affinity
            "Unlock communication [Concerto]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>For every 4 seconds that Samir does not take damage, she gains 1 stack of Focus, which increases damage by 4%, up to 5 stacks. Each time you take damage, you lose 1 stack of Focus, only once within 2 sec."
        ]
    }

var coco = 
    {
        name:"Coco Ritter",
        paneImg:"images/pane_coco.png",

        wepName:"Staff",
        wepImg:"images/wep_coco.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will freeze the enemy for 2 seconds, cause frostbite for 6 seconds, and deal (151.00% x ATK) damage when the freeze breaks. The target's energy recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "After dodging, summon a healing bee to follow you. The healing bee heals the lowest HP teammate within 15 meters, healing 25% of your attack and restoring 50 points to your energy charge.",
            // 2 star
            "+16% base health increase.",
            // 3 star
            "Using the skill Asylum removes debuffs from the target, can be released while under crowd control, all teammates within range gain a 20% damage and shield breaking buff, and are immune to crowd control and shield breaking effects.",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "Healing effect is increased by 15%, and by another 20% for targets with less than 60% health.",
            // 6 star
            "Heals all friendly units when the healing bee is summoned/disappears, for 100% of your attack power. All friendly units within 6 metres of the healing bee receive a 10% attack boost (does not stack)."
        ],
        energyCharge:"12.50",
        shieldBreak:"4.00",
        materials:[ice, green, blue],
        
        chipImg:"images/chip_coco.png",
        chipEffect:[
            // 2 set
            "Healing power and healing received increased by 8%/10%/12%/14%.",
            // 4 set
            "When allies and yourself receive healing effects, attack is increased by 10%/12.5%/15%/17.5% for 2 sec."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Coco Ritter"',
            // 600 affinity
            "Unlock communication [Some Memories]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>When Coco uses a secondary weapon, the healing effect is increased 20%',
            // 2000 affinity
            "Unlock communication [Some Obsessions]",
            // 3000 affinity
            "Unlock communication [Some Companionship]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>When Coco uses a secondary weapon, the healing effect is increased 20% and attack power of surrounding allies is increased 15% for 3 seconds when using a secondary weapon's combo or weapon skill"
        ]
    }

var king = 
    {
        name:"KING",
        paneImg:"images/pane_king.png",

        wepName:"Scythe",
        wepImg:"images/wep_king.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will ignite enemies for 8 seconds, dealing 58% damage per second and reducing their healing by 50% during the burn.",
        awakening:[
            // 1 star
            "Shield breaking power is increased by 15%, and after the shield breaks, the target receives a bleed that does 120% of attack damage per second for 15 seconds",
            // 2 star
            "+16% base health increase.",
            // 3 star
            "For every enemy target within 6 meters, damage is increased by 10%, up to 30%.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "Increases damage by 100% to targets with shields.",
            // 6 star
            "10% more damage for every target killed, up to 3 stacks, for 30 seconds."
        ],
        energyCharge:"5.00",
        shieldBreak:"12.50",
        materials:[fire, green, blue],
        
        chipImg:"images/chip_king.png",
        chipEffect:[
            // 2 set
            "For every 10% of shield broken, gain a 4%/5%/6%/7% damage buff, up to 3 stacks, lasting 25s",
            // 4 set
            "When surrounded by more than 2 enemies, attacks restore 10%/12%/13%/14% damage to HP--will not exceed 30%/33%/34.5%/36% attack power--every 0.5s."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "KING"',
            // 600 affinity
            "Unlock communication [Trading Fiction]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>King restores 8% HP for every 7 enemies he defeats',
            // 2000 affinity
            "Unlock communication [Peer-to-peer Contract]",
            // 3000 affinity
            "Unlock communication [Betting]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>King restores 10% HP for every 5 enemies he defeats"
        ]
    }

var shiro = 
    {
        name:"Shiro",
        paneImg:"images/pane_shiro.png",

        wepName:"Ring Blade",
        wepImg:"images/wep_shiro.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will inflicted 'Heavily Wounded' on enemies for 7 seconds. Enemies will receive 20% extra damage, and deals (137% x ATK) damage.",
        awakening:[
            // 1 star
            "While inside Shiro Skill area, damage and shield breaking efficiency is increased by 30%.",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "15% increase in shield breaking efficiency, clears the cooldown of all weapon skills when the shield is broken.",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "Every hit on targets with a Heavily wounded effect, will extend this debuff time by an additional 7 seconds, up to one time within the same effect (does not stack).",
            // 6 star
            "When using Shiro Skill, the critical rate will become 100% for basic damage, lasts for 8 seconds."
        ],
        energyCharge:"6.00",
        shieldBreak:"10.00",
        materials:[physical,green,black],
        
        chipImg:"images/chip_shiro.png",
        chipEffect:[
            // 2 set
            "15%/19%/22.5%/26% increase in damage and shield breaking to targets above 50% health",
            // 4 set
            "20%/25%/30%/35% damage boost when entering combat for 20 seconds, resets after 5 seconds out of combat."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Shiro"',
            // 600 affinity
            "Unlock communication [Passive Partner]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>When Shiro releases her weapon skill or combo skill, her full attack is increased by 10%, and her physical attack is increased by 7% for 8 seconds, cooldown 16 sec.',
            // 2000 affinity
            "Unlock communication [Sea Waves]",
            // 3000 affinity
            "Unlock communication [Song of the Secret Collection]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>When Shiro releases her weapon skill or combo skill, her full attack is increased by 16%, and her physical attack is increased by 10% for 8 seconds, cooldown 16 sec."
        ]
    }

var cobalt = 
    {
        name:"Cobalt-B",
        paneImg:"images/pane_cobalt.png",

        wepName:"Shotgun",
        wepImg:"images/wep_cobalt.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will ignite enemies for 8 seconds, dealing 58% damage per second and reducing their healing by 50% during the burn.",
        awakening:[
            // 1 star
            "3% of the target's current life is added to each attack, up to a maximum of 180% of the attack.",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "the skill Blast Grenade applies a powerful burn to the target in ignition state, dealing 1% of the target's current life per second, up to a maximum of 60% of the attack, for 10 seconds.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "The effect of Blast Grenade is increased to no more than 90% of the attack, and a hit from any weapon's Dodge attack refreshes the duration of Blast Grenade Debuff time.  ",
            // 6 star
            "The cooldown time of the Blast Grenade skill is reduced by 3 seconds after any weapon's Dodge attack hits the target. This ability has a 1.5 seconds cooldown time."
        ],
        energyCharge:"10.00",
        shieldBreak:"6.50",
        materials:[fire, red, black],
        
        chipImg:"images/chip_cobalt.png",
        chipEffect:[
            // 2 set
            "Restore 1 dodge every 4 dodges. Dodge attacks add burn to the target, dealing 12%/15%/18%/21% attack damage per second  for 6 seconds.",
            // 4 set
            "Increases damage by 12%/15%/18%/21% to targets with abnormal statuses."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Cobalt-B"',
            // 600 affinity
            "Unlock communication [Respect]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>When Cobalt-B releases a combo, it restores 50-120 points of energy charge at random.',
            // 2000 affinity
            "Unlock communication [Pleasant Cooperation]",
            // 3000 affinity
            "Unlock communication [Comapnions & Weapons]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>When Cobalt-B releases a combo, it restores 90-180 points of energy charge at random."
        ]
    }

var claudia = 
    {
        name:"Claudia",
        paneImg:"images/pane_claudia.png",

        wepName:"Sword",
        wepImg:"images/wep_claudia.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will inflicted 'Heavily Wounded' on enemies for 7 seconds. Enemies will receive 20% extra damage, and deals (137% x ATK) damage.",
        awakening:[
            // 1 star
            "Each time the weapon skill hits its target, it gains a damage increase of 8% for 25 seconds, up to 3 stacks (maximum of one stack per skill release).",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "When the skill hits the target, it increases the physical damage and shield breaking efficiency by 10% for 15 seconds, does not stack.",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "Every hit from the weapon skill, increases the damage of all weapon skills by 20% for 15 seconds (does not stack)",
            // 6 star
            "Damage does not decrease after hitting with weapon skill (overrides resistance)"
        ],
        energyCharge:"12.00",
        shieldBreak:"7.50",
        materials:[physical, red, blue],
        
        chipImg:"images/chip_claudia.png",
        chipEffect:[
            // 2 set
            "Aerial attack damage increased 13%/17%/20%/23% and double jump is reset after hitting a target in the air",
            // 4 set
            "After the skill hits, reduces all weapon skill cooldown by 1.5/2/2.5/3s, and increases combo skill damage by 36%/45%/54%/63% for 15s"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Claudia"',
            // 600 affinity
            "Unlock communication [Please Tell Me More]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>Stealth for 1s after dodging',
            // 2000 affinity
            "Unlock communication [Enthusiasm]",
            // 3000 affinity
            "Unlock communication [Engagement]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>Stealth for 1.5s after dodging"
        ]
    }

var baiyuekui = 
    {
        name:"Baiyuekui",
        paneImg:"images/pane_baiyuekui.png",

        wepName:"Sword",
        wepImg:"images/wep_baiyuekui.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deal (144.00% x ATK) damage, and preventing them from gaining any buffs for 6 seconds. (Also applies electro charged for 6 seconds).<br>Exclusive Effect: When entering combat, turn on Battle Spirit and increase your final damage by 15%. and your cellular aging is accelerated (reducing your current life by 1% every 5 seconds), which clears when you leave combat [the effect of switching weapons disappears]. If your life drops below 50%, cellular aging stops and the Battle Intent booster effect remains (the effect of switching weapons disappears).",
        awakening:[
            // 1 star
            "Dodge attacks hits for an additional 80% attack + 2.5% of your lost life. The weapon skill explodes with additional 160% attack + 5% damage to your lost life. The Force Field release hits with an additional 160% attack + 5% of your lost life (continuous damage does not trigger).",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "15% more shield break efficiency, and releases an instant burst canister at the target location, dealing 680% attack damage to targets within range, or 1500% attack damage to monsters if there is only one target within range.",
            // 4 star
            "+32% base health.",
            // 5 star
            "When you are attacked, you automatically trigger a 1 second block (when in crowd control, it will immediately release the crowd control), blocking one damage up to 20% of your maximum life, and when you click on a normal attack during the block, you can release a counter-attack slash, dealing 240% attack damage and forcing the target to airborne. ",
            // 6 star
            "When in the range of the Force Field or matrix, you get a 7-second Battle Spirit effect that increases your final damage to 40% and stops cellular aging (the effect of switching weapons disappears)."
        ],
        energyCharge:"8.00",
        shieldBreak:"12.50",
        materials:[lightning,green,blue],
        
        chipImg:"images/chip_baiyuekui.png",
        chipEffect:[
            // 2 set
            "If you have 300~999 charge when switching to this weapon, use 300 points to gain a 15%/18%/21%/25% attack boost for 10 seconds, cooldown 5 seconds, does not stack.",
            // 4 set
            "For every 1 second that a combo is released, the next combo will deal 106%/122%/140%/160% ranged damage (3m radius) to the first enemy, up to 530%/610%/700%/800%; and gain 4 seconds of shield breaking increase of 7%/14%/21%/28%, does not stack. This set also works in the background but only the highest star level set works when multiple sets are equipped."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Baiyuekui"',
            // 600 affinity
            "Unlock communication [I am Baiyuekui]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>When Bai Yuekui enters combat, the lightning attack power is increased by 21%, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.',
            // 2000 affinity
            "Unlock communication [Knowing the New World]",
            // 3000 affinity
            "Unlock communication [I Have Many Stories]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>When Bai Yuekui enters combat, the lightning attack power is increased by 33%, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%."
        ]
    }

var meryl = 
    {
        name:"Meryl",
        paneImg:"images/pane_meryl.png",

        wepName:"Rose's Edge",
        wepImg:"images/wep_meryl.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will freeze the enemy for 2 seconds, cause frostbite for 6 seconds, and deal (151.00% x ATK) damage when the freeze breaks. The target's energy recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "15% increase in shield breaking efficiency, gain 10% Health after breaking the target's shield.",
            // 2 star
            "+16% base health increase.",
            // 3 star
            "When switching to this weapon, it gains an ice shield of 10% of your maximum health, which has a cooldown of 60 seconds and lasts up to 10 seconds.",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "50% increase in damage and shield breaking efficiency during the ice shield state.",
            // 6 star
            "When switching to this weapon, it gains an ice shield of 20% of your maximum health, which makes you immune to crowd control, and has a cooldown time for 60 seconds (lasts up to 10 seconds)."
        ],
        energyCharge:"4.00",
        shieldBreak:"12.00",
        materials:[ice, red, black],
        
        chipImg:"images/chip_meryl.png",
        chipEffect:[
            // 2 set
            "When dropping below 30% health, gain a shield of 15%/19%/22.5%/26% of maximum life for 10 seconds, cooldown 120 seconds",
            // 4 set
            "Converts 60%/75%/90%/105% of damage dealth during shield to health, restores no more than 105%/127.5%/150%/172.5% of attack power every 0.5 seconds"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Meryl"',
            // 600 affinity
            "Unlock communication [Cold Conversation]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time.',
            // 2000 affinity
            "Unlock communication [Severe Cold Daily]",
            // 3000 affinity
            "Unlock communication [Melting Ice]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time. Meryl's surroundings will freeze."
        ]
    }

var hane = 
    {
        name:"Hane",
        paneImg:"images/pane_hane.png",

        wepName:"Ice Wind Vector",
        wepImg:"images/wep_hane.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will freeze the enemy for 2 seconds, cause frostbite for 6 seconds, and deal (151.00% x ATK) damage when the freeze breaks. The target's energy recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "For each arrow that hits the target with a dodge attack, you gain a Sharp Arrow effect that increases damage by 8% per stack, can be stacked 3 times, for 15 seconds.",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "Dodge attack shoots out 3 arrows.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "The duration of Sharp Arrow is doubled, and decreases the target's movement speed by 25%.",
            // 6 star
            "Sharp Arrow can be stacked to 5 levels. One arrow gains 3 levels immediately after hitting the target, and 5 levels if it hits the head."
        ],
        energyCharge:"11.50",
        shieldBreak:"4.00",
        materials:[ice,red,blue],
        
        chipImg:"images/chip_hane.png",
        chipEffect:[
            // 2 set
            "Increase damage by 10%/12.5%/15%/17.5% if no enemy unit is within 4 meters",
            // 4 set
            "Boosts your attack by 12%/15%/18%/21% for 8 seconds after a headshot."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Hane"',
            // 600 affinity
            "Unlock communication [Natural Warmth]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to 15 stacks). Each stack increases attack by 0.5% and refreshes buff duration.',
            // 2000 affinity
            "Unlock communication [Cooling Alarm]",
            // 3000 affinity
            "Unlock communication [Hot and Cold]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to 30 stacks). Each stack increases attack by 0.6% and refreshes buff duration."
        ]
    }

var huma = 
    {
        name:"Huma",
        paneImg:"images/pane_huma.png",

        wepName:"V2 Meltdown Shield",
        wepImg:"images/wep_huma.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will ignite enemies for 8 seconds, dealing 58% damage per second and reducing their healing by 50% during the burn.",
        awakening:[
            // 1 star
            "When dodging while in shield form, you gain a layer of Shield, up to 3 layers, each layer providing 5% damage reduction for 8 seconds.<br>When switching to Axe form, the Shield is transformed into an Axe, and each layer of Shield increases the damage of Axe by 15% each layer for 8 seconds. (Clears when switching to another weapon)",
            // 2 star
            "+16% base health increase.",
            // 3 star
            "In shield form, a dodging attack that hits the target adds an additional 4% of your current health to damage.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "Gain 30% damage reduction immediately when switching to Shield or Axe, the buff decreases by 10% every 3 seconds to a minimum of 10%. Disappears when switching to another weapon, 30 seconds cooldown.",
            // 6 star
            "Enhances switching skills.<br>Shield Change Enhancement: skill increases damage by 60% and extends the range of the Flame Zone by 30%.<br>Axe Change Enhancement: damage taken within 5 seconds is converted into HP (Converts up to 15% MAX HP)"
        ],
        energyCharge:"10.00",
        shieldBreak:"10.00",
        materials:[fire,green,blue],
        
        chipImg:"images/chip_huma.png",
        chipEffect:[
            // 2 set
            "After the dodge skill hits a target, applies bleed, causing 15%/19%/22.5%/26% * attack damage per sec for 5 sec.",
            // 4 set
            "Attack power of the target affected by bleed within 8 meters is reduced by 10%/12%/13%/15%."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Huma"',
            // 600 affinity
            "Unlock communication [Acquaintance]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain x0.4% of your life.',
            // 2000 affinity
            "Unlock communication [Echo]",
            // 3000 affinity
            "Unlock communication [Symphony]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain x0.6% of your life."
        ]
    }

var karasuma = 
    {
        name:"Karasuma",
        paneImg:"images/pane_karasuma.png",

        wepName:"Lightning Blades",
        wepImg:"images/wep_karasuma.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_dps.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deal (144.00% x ATK) damage, and preventing them from gaining any buffs for 6 seconds. (Also applies electro charged for 6 seconds).",
        awakening:[
            // 1 star
            "40% increase in crit rate of all attacks with the twin blades when they hit the target's back: 100% increase in the crit rate of back stabs against electrified targets. Crit damage is increased by 30%.",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "30% more damage to targets with less than 60% health.",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "When triggering the backstab effect, you will gain 100% crit rate that lasts for 4 seconds and crit damage is increased by 50%, with a cooldown time of 10 seconds.",
            // 6 star
            "When releasing a skill, the target receives 20% more damage from the lightning element for 20 seconds."
        ],
        energyCharge:"8.00",
        shieldBreak:"6.00",
        materials:[lightning, red, blue],
        
        chipImg:"images/chip_karasuma.png",
        chipEffect:[
            // 2 set
            "Crit damage is increased by 33%/42%/50%/58% against targets below 60% health",
            // 4 set
            "Continuous damage is added during a crit strike, causing 12%/15%/18%/21% attack damage to the target every second for 5 seconds (does not stack)"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Karasuma"',
            // 600 affinity
            "Unlock communication [Friendship Achieved]",
            // 1200 affininty
            "Unlock Mimic Passive:<br>When not in a group, Karasuma's damage is increased by 6% and damage taken is reduced by 4%.",
            // 2000 affinity
            "Unlock communication [Happy-go-lucky]",
            // 3000 affinity
            "Unlock communication [Jokes]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>When not in a group, Karasuma's damage is increased by 10% and damage taken is reduced by 6%. When Karasuma starts a fight, damage is increased by 12% for 12 seconds."
        ]
    }

var zero = 
    {
        name:"Zero",
        paneImg:"images/pane_zero.png",

        wepName:"Veto Cube",
        wepImg:"images/wep_zero.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will ignite enemies for 8 seconds, dealing 58% damage per second and reducing their healing by 50% during the burn.",
        awakening:[
            // 1 star
            "20% chance of generating a healing sphere when dealing damage, lasts 20 seconds and restores 60% of attack power as health to the player who picks up the healing sphere.",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "Skill cooldown reduced from 90 seconds to 45 seconds. Immunity to debuffs during the skill and gain a shield of 30% from current weapon power that regenerate health per second.",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "20% chance to create a damage energy sphere when dealing damage, lasts for 20 seconds, players who pick up the energy sphere receive a 1.5% attack boost, stacks up to 10 levels, lasts 45 seconds.",
            // 6 star
            "When the skill is released, it adds the same number of healing and damage orbs to friendly units from the amount of orbs you have."
        ],
        energyCharge:"13.00",
        shieldBreak:"5.00",
        materials:[fire,green,blue],
        
        chipImg:"images/chip_zero.png",
        chipEffect:[
            // 2 set
            "When you release a combo, you gain a shield of 120%/150%/180%/210% of your attack power for 4 seconds.",
            // 4 set
            "Increases the damage dealt by yourself and your teammates by 16%/20%/24%/28% during the shield period"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Zero"',
            // 600 affinity
            "Unlock communication [Unintelligible Dialogue]",
            // 1200 affininty
            'Unlock Mimic Passive:<br>Zero reduces the cooldown of gadgets by 1.5s when releasing a weapon skill',
            // 2000 affinity
            "Unlock communication [Rules]",
            // 3000 affinity
            "Unlock communication [Zero]",
            // 4000 affinity
            "Mimic Passive Upgrade:<br>Zero reduces the cooldown of gadgets by 3s when releasing a weapon skill"
        ]
    }