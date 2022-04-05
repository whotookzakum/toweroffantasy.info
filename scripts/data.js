var attack, defense, health, crit;

// 1-15 purple
// 16-30 blue
// 31-40 green
var psp = 'images/affinity/1.jpg';
var snowglobe = 'images/affinity/2.jpg';
var pearl = 'images/affinity/3.jpg';
var kitchenware = 'images/affinity/4.jpg';
var tataCards = 'images/affinity/5.jpg';
var present = 'images/affinity/6.jpg';
var ufo = 'images/affinity/7.jpg';
var seal = 'images/affinity/8.jpg';
var goldCoin = 'images/affinity/9.jpg';
var tataFigure = 'images/affinity/10.jpg';
var bearFigure = 'images/affinity/11.jpg';
var foxFigure = 'images/affinity/12.jpg';
var catFigure = 'images/affinity/13.jpg';
var miaFigure = 'images/affinity/14.jpg';
var peppaFigure = 'images/affinity/15.jpg';
var toolbox = 'images/affinity/16.jpg';
var chessSet = 'images/affinity/17.jpg';
var tataPlush = 'images/affinity/18.jpg';
var suit = 'images/affinity/19.jpg';
var juicePouch = 'images/affinity/20.jpg';
var necklace = 'images/affinity/21.jpg';
var catPlush = 'images/affinity/22.jpg';
var diary = 'images/affinity/23.jpg';
var vial = 'images/affinity/24.jpg';
var perfume = 'images/affinity/25.jpg';
var spiderFigure = 'images/affinity/26.jpg';
var elfFigure = 'images/affinity/27.jpg';
var pumpkinFigure = 'images/affinity/28.jpg';
var robotFigure = 'images/affinity/29.jpg';
var androidFigure = 'images/affinity/30.jpg';
var flowers = 'images/affinity/31.jpg';
var dumbbells = 'images/affinity/32.jpg';
var photoAlbum = 'images/affinity/33.jpg';
var photo = 'images/affinity/34.jpg';
var scarf = 'images/affinity/35.jpg';
var tradingCard = 'images/affinity/36.jpg';
var plant = 'images/affinity/37.jpg';
var harmonica = 'images/affinity/38.jpg';
var pinwheel = 'images/affinity/39.jpg';
var snackBox = 'images/affinity/40.jpg';

var samir = 
    {
        name:"Samir",
        rarity: "SSR",
        pic:"images/samir_nobg.png",
        artwork:"images/art/samir.png",
        wepName:"Supermagnetism Double Star",
        wepImg:"images/wep/samir.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
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
        energyCharge:["10.70","s"],
        shieldBreak:["6.00","b"],
        materials:["electric","red","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/samir.png",
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
            'For every 4 seconds that Samir does not take damage, she gains 1 stack of Focus, which increases damage by <span class="text-blue">3%</span>, up to <span class="text-blue">4</span> stacks. Each time you take damage, you lose 1 stack of Focus, only once within <span class="text-blue">1</span> sec.',
            // 2000 affinity
            "Unlock communication [Resonance]",
            // 3000 affinity
            "Unlock communication [Concerto]",
            // 4000 affinity
            'For every 4 seconds that Samir does not take damage, she gains 1 stack of Focus, which increases damage by <span class="text-blue">4%</span>, up to <span class="text-blue">5</span> stacks. Each time you take damage, you lose 1 stack of Focus, only once within <span class="text-blue">2</span> sec.'
        ],
        traits: ['Female','171 cm','???','Taurus','20 May'],
        gifts: [
            foxFigure,'+60', // pink fox
            psp,'+60', // psp
            present,'+60', // pink present
            ufo,'+60', // ufo
            pearl,'+60', // pearl
            tataPlush,'+30', // tata plush
            chessSet,'+30', // chessboard
            catPlush,'+30', // cat plush
            diary,'+30', // diary
            robotFigure,'+30', //r2d2 figure
            tradingCard,'+15', // trading card
            pinwheel,'+15' // pinwheel
        ]
    }

var coco = 
    {
        name:"Coco Ritter",
        rarity: "SSR",
        pic:"images/coco_nobg.png",
        artwork:"images/art/coco.png",
        wepName:"Zero Pointer",
        wepImg:"images/wep/coco.png",
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
        energyCharge:["12.50","s"],
        shieldBreak:["4.00","b"],
        materials:["ice", "green", "blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/coco.png",
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
            "When Coco uses a secondary weapon, the healing effect is increased 20%",
            // 2000 affinity
            "Unlock communication [Some Obsessions]",
            // 3000 affinity
            "Unlock communication [Some Companionship]",
            // 4000 affinity
            "When Coco uses a secondary weapon, the healing effect is increased 20% and attack power of surrounding allies is increased 15% for 3 seconds when using a secondary weapon's combo or weapon skill"
        ],
        traits: ['Female','147 cm','Hagarde','Gemini','1 Jun'],
        gifts: [
            foxFigure,'+60', // pink fox figure
            catFigure,'+60', // cat figure
            present,'+60', // pink present
            ufo,'+60', // ufo
            miaFigure,'+60', // mia figure
            seal,'+60', // seal
            
            tataPlush,'+30', // tata plush
            spiderFigure, '+30',
            vial, '+30',
            elfFigure, '+30',
            catPlush,'+30', // cat plush
            robotFigure,'+30', //r2d2 figure
            
            photoAlbum, '+15',
            photo, '+15',
            plant, '+15',
            harmonica, '+15',
            pinwheel, '+15'
        ]
    }

var king = 
    {
        name:"KING",
        rarity: "SSR",
        pic:"images/king_nobg.png",
        artwork:"images/art/king.png",
        wepName:"Black Crow Scythe",
        wepImg:"images/wep/king.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
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
        energyCharge:["5.00","b"],
        shieldBreak:["12.50","s"],
        materials:["fire", "green", "blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/king.png",
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
            "King restores <span class='text-blue'>8%</span> HP for every <span class='text-blue'>7</span> enemies he defeats",
            // 2000 affinity
            "Unlock communication [Peer-to-peer Contract]",
            // 3000 affinity
            "Unlock communication [Betting]",
            // 4000 affinity
            "King restores <span class='text-blue'>10%</span> HP for every <span class='text-blue'>5</span> enemies he defeats"
        ],
        traits: ['Male','190 cm','Krohn','Scorpio','3 Nov'],
        gifts: [
            seal, '+80',
            goldCoin, '+80',
            
            kitchenware, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            miaFigure, '+60',
            tataFigure, '+60',
            ufo, '+60',
            psp, '+60',
            snowglobe, '+60',
            
            necklace, '+30',
            vial, '+30',
            
            photo, '+15',
            snackBox, '+15',
            harmonica, '+15'
        ]
    }

var shiro = 
    {
        name:"Shiro",
        rarity: "SSR",
        pic:"images/shiro_nobg.png",
        artwork:"images/art/shiro.png",
        wepName:"Ring Blade of the Sea",
        wepImg:"images/wep/shiro.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
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
        energyCharge:["6.00","b"],
        shieldBreak:["10.00","a"],
        materials:["physical","green","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/shiro.png",
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
            "When Shiro releases her weapon skill or combo skill, her full attack is increased by <span class='text-blue'>10%</span>, and her physical attack is increased by <span class='text-blue'>7%</span> for 8 seconds, cooldown 16 sec.",
            // 2000 affinity
            "Unlock communication [Sea Waves]",
            // 3000 affinity
            "Unlock communication [Song of the Secret Collection]",
            // 4000 affinity
            "When Shiro releases her weapon skill or combo skill, her full attack is increased by <span class='text-blue'>16%</span>, and her physical attack is increased by <span class='text-blue'>10%</span> for 8 seconds, cooldown 16 sec."
        ],
        traits: ['Female','163 cm','Volan','Virgo','22 Sep'],
        gifts: [
            kitchenware, '+80',
            seal, '+80',
            
            miaFigure, '+60',
            goldCoin, '+60',
            foxFigure, '+60',
            ufo, '+60',
            bearFigure, '+60',
            snowglobe, '+60',
            present, '+60',
            pearl, '+60',
            
            vial, '+30',
            necklace, '+30',
            toolbox, '+30',
            
            dumbbells, '+15',
            harmonica, '+15',
            photo, '+15'
        ]
    }

var cobalt = 
    {
        name:"Cobalt-B",
        rarity: "SSR",
        pic:"images/cobalt_nobg.png",
        artwork:"images/art/cobalt.png",
        wepName:"Blazing Revolver",
        wepImg:"images/wep/cobalt.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
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
        energyCharge:["10.00","a"],
        shieldBreak:["6.50","b"],
        materials:["fire", "red", "black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/cobalt.png",
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
            "When Cobalt-B releases a combo, it restores <span class='text-blue'>50-120</span> points of energy charge at random.",
            // 2000 affinity
            "Unlock communication [Pleasant Cooperation]",
            // 3000 affinity
            "Unlock communication [Comapnions & Weapons]",
            // 4000 affinity
            "When Cobalt-B releases a combo, it restores <span class='text-blue'>90-180</span> points of energy charge at random."
        ],
        traits: ['Female','157 cm','Krohn','Cancer','26 Jun'],
        gifts: [
            kitchenware, '+80',
            goldCoin, '+80',
            
            seal, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            bearFigure, '+60',
            tataFigure, '+60',
            present, '+60',
            psp, '+60',
            pearl, '+60',
            
            necklace, '+30',
            toolbox, '+30',
            
            dumbbells, '+15',
            snackBox, '+15'            
        ]
    }

var claudia = 
    {
        name:"Claudia",
        rarity: "SSR",
        pic:"images/claudia_nobg.png",
        artwork:"images/art/claudia.png",
        wepName:"Red Lotus Blade",
        wepImg:"images/wep/claudia.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
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
        energyCharge:["12.00","s"],
        shieldBreak:["7.50","a"],
        materials:["physical", "red", "blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/claudia.png",
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
            "Stealth for <span class='text-blue'>1s</span> after dodging",
            // 2000 affinity
            "Unlock communication [Enthusiasm]",
            // 3000 affinity
            "Unlock communication [Engagement]",
            // 4000 affinity
            "Stealth for <span class='text-blue'>1.5s</span> after dodging"
        ],
        traits: ['Female','170 cm','Hagarde','Capricorn','16 Jan'],
        gifts: [
            snowglobe, '+80',
            peppaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            miaFigure, '+60',
            catFigure, '+60',
            ufo, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            vial, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            photo, '+15',
            scarf, '+15',
            plant, '+15',
            harmonica, '+15'
        ]
    }

var baiyuekui = 
    {
        name:"Baiyuekui",
        rarity: "SSR",
        pic:"images/baiyuekui_nobg.png", 
        artwork:"images/art/baiyuekui.png",
        wepName:"Eighth Consciousness", //Alaya Vijnana "Base [of] Consciousness"
        wepImg:"images/wep/baiyuekui.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deal (144.00% x ATK) damage, and preventing them from gaining any buffs for 6 seconds. (Also applies electro charged for 6 seconds).",
        exclusiveEffect:"When entering combat, turn on Battle Spirit and increase your final damage by 15%. and your cellular aging is accelerated (reducing your current life by 1% every 5 seconds), which clears when you leave combat [the effect of switching weapons disappears]. If your life drops below 50%, cellular aging stops and the Battle Intent booster effect remains (the effect of switching weapons disappears).",
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
        energyCharge:["8.00","a"],
        shieldBreak:["12.50","s"],
        materials:["electric","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/baiyuekui.png",
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
            "When Bai Yuekui enters combat, the electric attack power is increased by <span class='text-blue'>21%</span>, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.",
            // 2000 affinity
            "Unlock communication [Knowing the New World]",
            // 3000 affinity
            "Unlock communication [I Have Many Stories]",
            // 4000 affinity
            'When Bai Yuekui enters combat, the electric attack power is increased by <span class="text-blue">33%</span>, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.'
        ],
        traits: ['Female','172 cm','???','???','???'],
        gifts: [
            goldCoin, '+80',
            catFigure, '+80',
            
            kitchenware, '+60',
            tataFigure, '+60',
            tataCards, '+60',
            peppaFigure, '+60',
            snowglobe, '+60',
            psp, '+60',
            foxFigure, '+60',
            seal, '+60',
            
            necklace, '+30',
            elfFigure, '+30',
            spiderFigure, '+30',
            
            photoAlbum, '+15',
            snackBox, '+15',
            plant, '+15'
        ]
    }

var meryl = 
    {
        name:"Meryl",
        rarity: "SSR",
        pic:"images/meryl_nobg.png",
        artwork:"images/art/meryl.png",
        wepName:"Rose's Edge",
        wepImg:"images/wep/meryl.png",
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
        energyCharge:["4.00","b"],
        shieldBreak:["12.00","s"],
        materials:["ice", "red", "black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/meryl.png",
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
            "Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time.",
            // 2000 affinity
            "Unlock communication [Severe Cold Daily]",
            // 3000 affinity
            "Unlock communication [Melting Ice]",
            // 4000 affinity
            "Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time. Meryl's surroundings will freeze."
        ],
        traits: ['Female','170 cm','???','Libra','10 October'],
        gifts: [
            seal, '+80',
            
            goldCoin, '+60',
            miaFigure, '+60',
            foxFigure, '+60',
            snowglobe, '+60',
            kitchenware, '+60',
            ufo, '+60',
            
            necklace, '+30',
            vial, '+30',
            
            photo, '+15',
            harmonica, '+15'
        ]
    }

var hane = 
    {
        name:"Hane",
        rarity: "SSR",
        pic:"images/hane_nobg.png",
        artwork:"images/art/hane.png",
        wepName:"Ice Wind Vector",
        wepImg:"images/wep/hane.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
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
        energyCharge:["11.50","s"],
        shieldBreak:["4.00","b"],
        materials:["ice","red","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/hane.png",
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
            "Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to <span class='text-blue'>15</span> stacks). Each stack increases attack by <span class='text-blue'>0.5%</span> and refreshes buff duration.",
            // 2000 affinity
            "Unlock communication [Cooling Alarm]",
            // 3000 affinity
            "Unlock communication [Hot and Cold]",
            // 4000 affinity
            "Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to <span class='text-blue'>30</span> stacks). Each stack increases attack by <span class='text-blue'>0.6%</span> and refreshes buff duration."
        ],
        traits: ['Female','169 cm','Star Island','Aries','24 Mar'],
        gifts: [
            tataPlush, '+80',
            miaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            bearFigure, '+60',
            catFigure, '+60',
            ufo, '+60',
            psp, '+60',
            goldCoin, '+60',
            snowglobe, '+60',
            
            vial, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            photo, '+15',
            snackBox, '+15',
            harmonica, '+15'
        ]
    }

var huma = 
    {
        name:"Huma",
        rarity: "SSR",
        pic:"images/huma_nobg.png",
        artwork:"images/art/huma.png",
        wepName:"V2 Meltdown Shield",
        wepImg:"images/wep/huma.png",
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
        energyCharge:["10.00","a"],
        shieldBreak:["10.00","a"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/huma.png",
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
            "Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain <span class='text-blue'>x0.4%</span> of your life.",
            // 2000 affinity
            "Unlock communication [Echo]",
            // 3000 affinity
            "Unlock communication [Symphony]",
            // 4000 affinity
            "Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain <span class='text-blue'>x0.6%</span> of your life."
        ],
        traits: ['Female','167 cm','???','Capricorn','12 Jan'],
        gifts: [
            peppaFigure, '+80',
            
            catFigure, '+60',
            tataCards, '+60',
            ufo, '+60',
            psp, '+60',
            pearl, '+60',
            snowglobe, '+60',
            
            chessSet, '+30',
            diary, '+30',
            juicePouch, '+30',
            suit, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            scarf, '+15',
            tradingCard, '+15',
            plant, '+15'
        ]
    }

var karasuma = 
    {
        name:"Karasuma",
        rarity: "SSR",
        pic:"images/karasuma_nobg.png",
        artwork:"images/art/karasuma.png",
        wepName:"Lightning Blades",
        wepImg:"images/wep/karasuma.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
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
            "When releasing a skill, the target receives 20% more damage from the electric element for 20 seconds."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["6.00","b"],
        materials:["electric", "red", "blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/karasuma.png",
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
            "When not in a group, Karasuma's damage is increased by 6% and damage taken is reduced by 4%.",
            // 2000 affinity
            "Unlock communication [Happy-go-lucky]",
            // 3000 affinity
            "Unlock communication [Jokes]",
            // 4000 affinity
            "When not in a group, Karasuma's damage is increased by 10% and damage taken is reduced by 6%. When Karasuma starts a fight, damage is increased by 12% for 12 seconds."
        ],
        traits: ['Male','162 cm','Star Island','Sagittarius','17 Dec'],
        gifts: [
            tataCards, '+80',
            tataFigure, '+80',
            
            goldCoin, '+60',
            catFigure, '+60',
            miaFigure, '+60',
            peppaFigure, '+60',
            bearFigure, '+60',
            psp, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            perfume, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            flowers, '+15',
            snackBox, '+15',
            scarf, '+15'
        ]
    }

var zero = 
    {
        name:"Zero",
        rarity: "SSR",
        pic:"images/zero_nobg.png",
        artwork:"images/art/zero.png",
        wepName:"Veto Cube",
        wepImg:"images/wep/zero.png",
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
        energyCharge:["13.00","s"],
        shieldBreak:["5.00","b"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/zero.png",
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
            "Zero reduces the cooldown of gadgets by <span class='text-blue'>1.5s</span> when releasing a weapon skill.",
            // 2000 affinity
            "Unlock communication [Rules]",
            // 3000 affinity
            "Unlock communication [Zero]",
            // 4000 affinity
            "Zero reduces the cooldown of gadgets by <span class='text-blue'>3s</span> when releasing a weapon skill."
        ],
        traits: ['Male','155 cm','Bengis','Gemini','6 Jun'],
        gifts: [
            psp, '+80',
            
            goldCoin, '+60',
            tataCards, '+60',
            pearl, '+60',
            catFigure, '+60',
            ufo, '+60',
            tataFigure, '+60',
            
            chessSet, '+30',
            diary, '+30',
            
            tradingCard, '+15',
            snackBox, '+15'
        ]
    }

var marc = 
    {
        name:"Marc",
        rarity: "SSR",
        pic:"images/marc_nobg.png",
        artwork:"images/art/marc.png",
        wepName:"Breaking Dawn",
        wepImg:"images/wep/marc.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will inflicted 'Heavily Wounded' on enemies for 7 seconds. Enemies will receive 20% extra damage, and deals (137% x ATK) damage.",
        exclusiveEffect:"In group status (Guardian): When releasing Re-entry, Form Switch or Full Shot, it will damage a friendly player with the lowest life for 60% for 10 seconds, and restore 10% of lost blood after the damage. The effect will not be removed and cannot be triggered again until the end of time. When not in a team (increase): 50% physical damage reduction in Heavy Form. Heavy Dimensional Shield: 1 point of Heavy Dimensional Energy is awarded for Heavy Dimensional Punch/Double Slash/Impact Slash hits. Converts 20% of your current life into 1.5 times your maximum life (up to 1.5 times your maximum life, healing is reduced by 50%), shield lasts 15 seconds, cannot be gained if you are below 10% of your life. At the end of the shield, 66.7% of the remaining shield value is converted to life, and 2 points of energy are gained on a hit to a weakened target. (Heavy Shield) is gained by converting other life shield values into (Heavy Shield) and is immune to life shield additions.",
        awakening:[
            // 1 star
            "Immediately gains [Heavy Shield] when releasing Heavy Dimensional Entry, Form Switch or Full Shot",
            // 2 star
            "+16% base health increase.",
            // 3 star
            "1 level of 35% final damage boost at the end of [Heavy Shield] and when it breaks and refreshes. Lasts for 20 seconds, does not stack ",
            // 4 star
            "+32% base health increase.",
            // 5 star
            "[Heavy Shield] deals (160%*Current Attack + 5%*Loss of Life) damage to nearby targets at the end of [Heavy Shield] when it breaks and refreshes, and gains 50 weapon charge points on hit. ",
            // 6 star
            "Physical resistance is increased by 1x during [Heavy Shield] with a Heavily Wounded effect, and [Heavy Shield] is also obtained when another weapon's skill hits the target during [Heavy Shield] or when using a combo."
        ],
        energyCharge:["12.00","s"],
        shieldBreak:["9.00","a"],
        materials:["physical","red","black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/marc.png",
        chipEffect:[
            // 2 set
            "Adds a life shield of 15% of your current HP to all teammates after  attacking an enemy for 15 seconds, resetting 10 seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by 11%/13%/15%/17% for 15 seconds and is not stackable. This effect is also active in the background, and is effective for multiple sets up to the maximum star level. ",
            // 4 set
            "Increases attack power by 6%/7.5%/9%/11.5% and teammates attack power by 3%/3.5%/4.5%/5.75% for 15 seconds when life shield is granted, stacks up to 3 levels. This will effect is also active in the background, with multiple sets of equipment taking effect up to the maximum star level."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Marc"',
            // 600 affinity
            "Unlock communication [Doomsday Hunters]",
            // 1200 affininty
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'revived' and taunts the surrounding enemies for 5 seconds. While 'revived', you do not take damage, but you cannot perform actions, while recovering <span class='text-blue'>1%</span> of his maximum life every second and healing received is increased by <span class='text-blue'>20%</span>. This effect has a cooldown of <span class='text-blue'>10</span> minutes. Damage from Stinging Eel and Ground Roar is reduced by 50%.",
            // 2000 affinity
            "Unlock communication [Reality and the Law]",
            // 3000 affinity
            "Unlock communication [Thinking about the present]",
            // 4000 affinity
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'Nirvana' and taunts the surrounding enemies for 5 seconds. While in 'Nirvana', you do not take damage, but you cannot perform actions, while recovering <span class='text-blue'>2%</span> of his maximum life every second and healing received is increased by <span class='text-blue'>50%</span>. This effect has a cooldown of <span class='text-blue'>5</span> minutes. Damage from Stinging Eel and Ground Roar is reduced by 50%."
        ],
        traits: ['Male','192 cm','???','???','???'],
        gifts: [
            
            kitchenware, '+60',
            present, '+60',
            pearl, '+60',
            bearFigure, '+60',
            
            toolbox, '+30',
            
            dumbbells, '+15',
        ]
    }

var nemesis = 
    {
        name:"Nemesis",
        rarity: "SSR",
        pic:"images/nemesis_nobg.png",
        artwork:"images/art/nemesis.png",
        wepName:"Enlightenment",
        wepImg:"images/wep/nemesis.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deal (144.00% x ATK) damage, and preventing them from gaining any buffs for 6 seconds. (Also applies electro charged for 6 seconds).",
        exclusiveEffect:"electric resonance; triggered by equipping 2 or more electric weapons, boosts electric attack by 20% and electric resistance by 40%, also effective on the backstage.",
        awakening:[
            // 1 star
            "When releasing the weapon skill or QTE skill, creates 1 electrode and immediately gains 5 levels of healing chain reinforcement, and releases a healing chain that heals nearby friendly units (= 135% of the Pathfinder's attack power). The healing chain heals nearby units (= 135%*attack).",
            // 2 star
            "+16% base attack on the current weapon.",
            // 3 star
            "The electrode releases a ring every 6 seconds, dealing up to 389%*Attack of ranged damage.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "After releasing the weapon skill, it increases its own electric attack by (10+its own electrode number*10)% for 25 seconds.",
            // 6 star
            "Up to 2 electrodes are present at the same time. When a new electrode appears, it replaces the one at a greater distance from you."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["6.00","b"],
        materials:["electric","green","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/nemesis.png",
        chipEffect:[
            // 2 set
            "When healing a target, the healed target's electric attack power is increased by 15%/18%/21%/25% for 20 seconds, non-stackable, only the highest level is in effect when repeated.",
            // 4 set
            "When healing yourself or your own electrodes, the healed target gains a electric Strike which gives the next attack within 30 seconds an extra damage boost of 300%/375%/450%/525% electric damage to the first target hit. The electric damage (half the damage caused by  electrodes), can only be casted with an interval of not less than 10 seconds. The electric Strike mechanism is not stackable, and only the highest level is in effect when repeatedly acquired."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Nemesis"',
            // 600 affinity
            "Unlock communication [New Life and Symbiosis]",
            // 1200 affininty
            "When an electrode is summoned, all enemies within 30 metres of the electrode take <span class='text-blue'>60%</span> electric damage and all allies (including yourself) are healed for <span class='text-blue'>120%</span> of their attack power.",
            // 2000 affinity
            "Unlock communication [Experimental Operation]",
            // 3000 affinity
            "Unlock communication [Ahead of the Righteous Eye]",
            // 4000 affinity
            "When an electrode is summoned, all enemies within 30 metres of the electrode take <span class='text-blue'>100%</span> electric damage and all allies (including yourself) are healed for <span class='text-blue'>200%</span> of their attack power."
        ],
        traits: ['Female','165 cm','???','Gemini','25 May'],
        gifts: [
            peppaFigure, '+80',
            
            tataCards, '+60',
            present, '+60',
            snowglobe, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            
            tataPlush, '+30',
            suit, '+30',
            catPlush, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            robotFigure, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            plant, '+15',
            scarf, '+15',
            pinwheel, '+15',
        ]
    }

var frigg = 
    {
        name:"Frigg",
        rarity: "SSR",
        pic:"images/frigg_nobg.png",
        artwork:"images/art/frigg.png",
        wepName:"Ice Balmung",
        wepImg:"images/wep/frigg.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will freeze the enemy for 2 seconds, cause frostbite for 6 seconds, and deal (151.00% x ATK) damage when the freeze breaks. The target's energy recharge speed will be reduced by 50% during frostbite.",
        exclusiveEffect:"After releasing the skill “Fimbulwinter” a large area of ice is formed, inside this area dodges are not consumed up to 3 times? 15% damage increase while in the ice domain. Domain lasts 25s and using the skill again will replace the old one.",
        awakening:[
            // 1 star
            "Gain 1 Ice point for every 550%*Ice Attack of any elemental damage dealt by yourself in the ice area, up to a maximum of 10 ice points. At the end of the Ice area, it will cause explosive field damage to all enemy targets within the ice area with ice value points*95%*ice attack. After leaving the ice area, you lose 1 ice point every 3 seconds.",
            // 2 star
            "+16% increase in HP growth.",
            // 3 star
            "Ice points limit increased to 15, any Ice element weapon attacks released in the ice area deals (+5) *25%* Ice Attack damage to all targets in the ice area.",
            // 4 star
            "+32% base attack on the current weapon.",
            // 5 star
            "Using an ice weapon to break a shield in the ice field freezes the target for 2 seconds and deals an additional 2 ice points*35%*Ice Attack damage (doubled if the target cannot be frozen).",
            // 6 star
            "When you reach 15 Ice Points, you gain an additional Ice Domain (2) buff. When you are in the Ice Domain: your Ice Attack is increased by 25% when using an Ice weapon."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["8.00","a"],
        materials:["ice","red","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/frigg.png",
        chipEffect:[
            // 2 set
            "When switching from ice weapon to ice weapon, the ice attack power is increased by 15%/18%/21%/25% for 10 seconds. This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when  multiple sets are equipped.",
            // 4 set
            "When the ice field is released by the weapon 'Balmung', the enemy targets within the ice field take 60%/75%/90%/105% ice damage per second. "
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Frigg"',
            // 600 affinity
            "Unlock communication []",
            // 1200 affininty
            "When entering combat, gain <span class='text-blue'>+1.5%</span> ice attribute attack power every 3 seconds, stack up to 10 times for <span class='text-blue'>2</span> seconds.",
            // 2000 affinity
            "Unlock communication []",
            // 3000 affinity
            "Unlock communication []",
            // 4000 affinity
            "When entering battle gain <span class='text-blue'>2.4%</span> ice attribute damage every 3 seconds up to 10 stacks, lasts for <span class='text-blue'>5</span> seconds. Immune to CC effects in the ice domain."
        ],
        traits: ['Female','190 cm','???','Aquarius','1 February'],
        gifts: [
        ]
    }



var bailing = 
    {
        name:"Bai Ling",
        rarity: "SR",
        pic:"images/bailing_nobg.png",
        artwork:"images/art/bailing.png",
        wepName:"Nightbird's Feather",
        wepImg:"images/wep/bailing.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will inflicted 'Heavily Wounded' on enemies for 7 seconds. Enemies will receive 20% extra damage, and deals (100% x ATK) damage.",
        awakening:[
            // 1 star
            "The fifth hit of a normal attack or when using weapon skill, restores one dodge.",
            // 2 star
            "+10% to the base attack growth of the current weapon.",
            // 3 star
            "+30% increase in headshot damage.",
            // 4 star
            "+20% to the base attack growth of the current weapon.",
            // 5 star
            "A dodge attack applies Heavily Wounded to the target for 7 seconds.",
            // 6 star
            "+30% crit rate and +50% higher crit damage to Heavily Wounded targets."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["6.00","b"],
        materials:["physical", "green", "blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/bailing.png",
        chipEffect:[
            //
            "",
            // 3 set
            "12%/15%/18% increase in damage to heavily injured targets"
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Bai Ling retracts her Jetpack or Jet Skis, her movement speed is increased by <span class='text-blue'>8%</span> for 12 seconds, with a cooldown time of 60 seconds",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Bai Ling retracts her Jetpack or Jet Skis, her movement speed is increased by <span class='text-blue'>15%</span> for 12 seconds, with a cooldown time of 60 seconds"
        ],
        traits: ['Female','163 cm','HT201 Sanctuary','Taurus','8 May'],
        gifts: [
            snowglobe, '+80',
            seal, '+80',
            
            miaFigure, '+60',
            goldCoin, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            ufo, '+60',
            peppaFigure, '+60',
            kitchenware, '+60',
            
            necklace, '+30',
            vial, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            photoAlbum, '+15',
            harmonica, '+15',
            photo, '+15',
            plant, '+15'
        ]
}

var hilda = 
    {
        name:"Hilda",
        rarity: "SR",
        pic:"images/hilda_nobg.png",
        artwork:"images/art/hilda.png",
        wepName:"The Terminator",
        wepImg:"images/wep/hilda.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"The next attack freezes the enemy for 2 seconds when the weapon is fully charged and causes frostbite for 6 seconds, and deals 111.00%*attack damage when the freeze breaks.The target's weapon recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "Each hit on a normal attack increases damage by 1% for 2 seconds, stacking up to 15 levels, and increases the number of ammunition rounds to 60.",
            // 2 star
            "+10% to the base attack growth of the current weapon.",
            // 3 star
            "+30% increase in damage and shield breaking for 10 seconds after switching to this weapon, 25 seconds cooldown time and increases the number of ammunition rounds to 80.",
            // 4 star
            "+20% to the base attack growth of the current weapon.",
            // 5 star
            "Cooldown time for normal attack in turret form is reduced to 2 seconds. ",
            // 6 star
            "+60% increase in normal attack damage and shield breaking efficiency for 10 seconds after switching to this weapon, 25 seconds cooldown time."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["10.00","a"],
        materials:["ice","red","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/hilda.png",
        chipEffect:[
            //
            "",
            // 3 set
            "Attack power is increased by 15%/19%/22.5% when no enemy unit is within 6 meters."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "Hilda's movement speed is increased by <span class='text-blue'>7%</span> when riding on a mount",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "Hilda's movement speed is increased by <span class='text-blue'>10%</span> when riding on a mount"
        ],
        traits: ['Female','165 cm','???','Aries','11 Apr'],
        gifts: [
            tataFigure, '+80',
            
            goldCoin, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            bearFigure, '+60',
            miaFigure, '+60',
            present, '+60',
            psp, '+60',
            
            tataPlush, '+30',
            catPlush, '+30',
            robotFigure, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            pinwheel, '+15',
            snackBox, '+15'
        ]
}

var manaka = 
    {
        name:"Manaka",
        rarity: "SR",
        pic:"images/manaka_nobg.png",
        artwork:"images/art/manaka.png",
        wepName:"Thunderbolt",
        wepImg:"images/wep/manaka.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deals 106.00%* attack damage, They cannot gain any buffs for 6 seconds. (Also applies electro charged for 6 seconds)",
        awakening:[
            // 1 star
            "+15% more shield breaking efficiency, +15% more attack for the whole team when the shield is breached, does not stack, lasts 30 seconds.",
            // 2 star
            "+10% base health growth.",
            // 3 star
            "When the weapon skill hits a target, it reduces the target's attack by 5% while increasing your own attack by 5% for 15 seconds, stacks when hitting multiple targets, up to 3 stacks. The effect is doubled when hitting Heavily Wounded targets.",
            // 4 star
            "+20% to the base attack growth of the current weapon.",
            // 5 star
            "Doubles the stun duration of the forward dodge attack.",
            // 6 star
            "The longer the throw distance of the QTE skill, the higher the damage, up to 100% more damage."
        ],
        energyCharge:["7.00","b"],
        shieldBreak:["12.60","s"],
        materials:["electric", "red", "black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/manaka.png",
        chipEffect:[
            //
            "",
            // 3 set
            "Gains 80/100/120 weapon charge points after releasing a combo."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When teaming up with Manaka, all teammates within 10m of Manaka receive a <span class='text-blue'>4%</span> damage boost (excluding yourself).",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When teaming up with Manaka, all teammates within 10m of Manaka receive a <span class='text-blue'>6%</span> damage boost (excluding yourself)."
        ],
        traits: ['Female','162 cm','Volan','Leo','14 Aug'],
        gifts: [
            psp, '+80',
            tataCards, '+80',
            
            goldCoin, '+60',
            ufo, '+60',
            peppaFigure, '+60',
            catFigure, '+60',
            pearl, '+60',
            tataFigure, '+60',
            
            chessSet, '+30',
            suit, '+30',
            juicePouch, '+30',
            diary, '+30',
            perfume, '+30',
            
            flowers, '+15',
            snackBox, '+15',
            tradingCard, '+15',
            harmonica, '+15',
            scarf, '+15'
        ]
}

var peppa = 
    {
        name:"Peppa",
        rarity: "SR",
        pic:"images/peppa_nobg.png",
        artwork:"images/art/peppa.png",
        wepName:"Sceptre of the Stigmata",
        wepImg:"images/wep/peppa.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next basic attack will shock/stun the enemy for 1 second, removing their current buffs and deals 106.00%* attack damage, They cannot gain any buffs for 6 seconds. (Also applies electro charged for 6 seconds)",
        awakening:[
            // 1 star
            "Heals all teammates within 10 metres of the weapon when the dodge attack is released, healing 100 % of the attack.",
            // 2 star
            "+10% base health growth.",
            // 3 star
            "Two missiles are fired to each normal attack, each dealing 5% attack damage to the target and gaining 5 points of weapon power.",
            // 4 star
            "+20% base health growth.",
            // 5 star
            "20% increase in weapon recharge rate. (Missile attacks do not receive this bonus) ",
            // 6 star
            "The skill removes crowd control effects from the target and gives 60% damage reduction to friendly units within the range of the skill."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["4.00","b"],
        materials:["electric", "red", "black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/peppa.png",
        chipEffect:[
            //
            "",
            // 3 set
            "Increase the speed of acquiring weapon recharge by 10%/12.5%/15%."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Peppa uses satiety (Hunger) to restore life, the recovery effect is increased by <span class='text-blue'>100%</span>",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Peppa uses satiety (Hunger) to restore life, the recovery effect is increased by <span class='text-blue'>200%</span>"
        ],
        traits: ['Female','160 cm','Bengis','Cancer','9 Jul'],
        gifts: [
            peppaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            goldCoin, '+60',
            snowglobe, '+60',
            kitchenware, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            necklace, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            photoAlbum, '+15',
            flowers, '+15',
            plant, '+15',
            scarf, '+15'
        ]
}

var xi = 
    {
        name:"Xi",
        rarity: "SR",
        pic:"images/xi_nobg.png",
        artwork:"images/art/xi.png",
        wepName:"Initial Strike",
        wepImg:"images/wep/xi.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"The next attack freezes the enemy for 2 seconds when the weapon is fully charged and causes frostbite for 6 seconds, and deals 111.00%*attack damage when the freeze breaks.The target's weapon recharge speed will be reduced by 50% during frostbite.",
        awakening:[
            // 1 star
            "Taunts nearby enemies when switching to this weapon, and gains invulnerability for 1 hit (lasts 4 seconds) and gain super armor (lasts 8 seconds). 15 seconds cooldown.",
            // 2 star
            "+10% base health growth.",
            // 3 star
            "Damage received is reduced by 50% after taking damage, for the next 6 seconds, cooldown 20 seconds. ",
            // 4 star
            "+20% base health growth.",
            // 5 star
            "Apply 2.5 seconds stun effect on normal attacks, 20 seconds cooldown.",
            // 6 star
            "QTE skill makes target take 10% more damage and if it's Ice damage, increases damage by another 10% for 25 seconds."
        ],
        energyCharge:["6.00","b"],
        shieldBreak:["10.00","a"],
        materials:["ice","green","black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/xi.png",
        chipEffect:[
            //
            "",
            // 3 set
            "When causing damage higher than 100% attack power, an additional 60%/75%/90%* attack damage will be reconstituted, and the cooldown is 3 seconds"
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "Reduces stamina consumption by <span class='text-blue'>12%</span> when swimming, climbing or gliding.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "Reduces stamina consumption by <span class='text-blue'>20%</span> when swimming, climbing or gliding."
        ],
        traits: ['Female','145 cm','Krohn','Leo','17 Aug'],
        gifts: [
            peppaFigure, '+60',
            ufo, '+60',
            foxFigure, '+60',
            catFigure, '+60',
            present, '+60',
            psp, '+60',
            pearl, '+60',
            snowglobe, '+60',
            
            chessSet, '+30',
            diary, '+30',
            catPlush, '+30',
            tataPlush, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            robotFigure, '+30',
            
            photoAlbum, '+15',
            tradingCard, '+15',
            pinwheel, '+15',
            plant, '+15'
        ]
}

// Chip exclusives
var roberag = {
    name:"Roberag",
    rarity:"SR",
    chipImg:"images/chip/roberag.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Poison the target when breaking shields, dealing 45%/56%/67.5%"
        ]
}
var apophis = {
    name:"Apophis",
    rarity:"SR",
    chipImg:"images/chip/apophis.png",
    chipEffect:[
            //
            "",
            // 3 set
            "The lower your health, the more damage you can do, at 20% health, the maximum value is reached and the maximum damage increased by 20%/25%/30%."
        ]
}
var frozenmech = {
    name:"Frozen Mech",
    rarity:"SR",
    chipImg:"images/chip/frozenmech.png",
    chipEffect:[
            //
            "",
            // 3 set
            "When the health is lower than 40%, cast a combo technique to restore the health value of 160%/200%/240% of the attack power."
        ]
}
var sobek = {
    name:"Sobek",
    rarity:"SR",
    chipImg:"images/chip/sobek.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Increases damage by 6%/7.5%/9% for each enemy unit that is around, up to 3 levels."
        ]
}
var barbarossa = {
    name:"Barbarossa",
    rarity:"SR",
    chipImg:"images/chip/barbarossa.png",
    chipEffect:[
            //
            "",
            // 3 set
            "when switching to (this) weapon, get 50%/62.5%/75% counter damage that last for 3 seconds, cool down for 30 seconds; when switch to other weapons, get 20%/25%/30% damage increase, lasting 5 seconds, with a cooldown time of 30 seconds."
        ]
}
var burstingcore = {
    name:"Bursting Core",
    rarity:"R",
    chipImg:"images/chip/burstingcore.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Fire weapon damage increased by 6%"
        ]
}
var transportthinking = {
    name:"Transport Thinking",
    rarity:"R",
    chipImg:"images/chip/transportthinking.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Ice weapon damage increased by 6%"
        ]
}
var guardscode = {
    name:"Guard's Code",
    rarity:"R",
    chipImg:"images/chip/guardscode.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Electricity weapon damage increased by 6%"
        ]
}
var arrogantprovocation = {
    name:"Arrogant Provocation",
    rarity:"R",
    chipImg:"images/chip/arrogantprovocation.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Physical weapon damage increased by 6%"
        ]
}
var cleanupagreement = {
    name:"Cleanup Agreement",
    rarity:"R",
    chipImg:"images/chip/cleanupagreement.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Damage taken reduced by 6%"
        ]
}
var offensivelogic = {
    name:"Offensive Logic",
    rarity:"SR",
    chipImg:"images/chip/offensivelogic.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Shield breaking efficiency increased by 18%"
        ]
}



var gadgets = [
    
    // SSR Giant arms
    {
        name: "Giant Arms",
        description: "Uses the arms to fight for 20 seconds, cooldown 300 seconds, immune to hardness, click again to cancel. Deals a total of 1,387.7% attack damage from normal attacks; 453.5% attack damage from skills which has a 10 sec cooldown.",
        awakening: [
            // 1 star
            "Each attack shoots 2 missiles at the target, each dealing 34.8% attack damage.",
            // 2 star
            "Cooldown reduced to 200 seconds.",
            // 3 star
            "4 missiles can be fired per attack to deal damage to the target, each missile deals 34.8% attack damage.",
            // 4 star
            "Reduces physical damage by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Giant Arm lasts for 30 seconds, all damage taken is reduced by 20% for the duration."
        ],
        pic: "images/gadget/giantarms.png",
        rarity:"SSR"
    },
    
    // SSR Atomic Shield
    {
        name: "Atomic Shield",
        description: "A shield of raw energy is assembled for 10 seconds, blocking bullet penetration. The shield has 200% of the Pioneer's maximum life and has a cooldown of 90 seconds.",
        awakening: [
            // 1 star
            "If an enemy target passes through the shield, the speed is reduced by 50% for 2 seconds.",
            // 2 star
            "Cooldown time reduced to 60 seconds",
            // 3 star
            "Duration extended to 20 seconds",
            // 4 star
            "Reduces ice damage taken by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "You and friendly team-members will receive a 25% damage boost for 7 seconds when they pass through the energy shield."
        ],
        pic: "images/gadget/atomicshield.png",
        rarity:"SSR"
    },
    
    // SSR V-Mech
    {
        name: "V-Mech",
        description: "Drive a robot into battle, lasts 30 seconds, cooldown 200 seconds. Immune to hardness, click again to cancel. V-Mech possesses the skill: Aimed Shot. Aimed Shot: Fires flaming bullets at high frequency, dealing 44.4%*attack damage per hit.",
        awakening: [
            // 1 star
            "Immune to fire damage and crowd control when driving the mech.",
            // 2 star
            "Gains new skill: 'Barrage': Fires 6 barrages at the target, dealing 155.2%*attack damage per hit.",
            // 3 star
            "Add Burning effect when driving a mech.",
            // 4 star
            "Increases fire element damage by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "New skill: 'Flame Field': Releases a large flame field in place, dealing up to 1146.8%* attack damage"
        ],
        pic: "images/gadget/vmech.png",
        rarity:"SSR"
    },
    
    // SSR Time Rift
    {
        name: "Time Rift",
        description: "Using a proton bomb, it collapses the space in front of it and continues to attract targets within its range for 10 seconds, After a delay of 1.5 seconds, dealing 39.6%*attack damage every 0.5 seconds to the central area, with a cooldown time of 100 seconds.",
        awakening: [
            // 1 star
            "Enemies in the collapsed space cannot use dodge, and the absorption time is extended to 15 seconds.",
            // 2 star
            "Damage range is increased by a factor of 1.",
            // 3 star
            "20% more damage to targets in the area.",
            // 4 star
            "Reduces fire elemental damage by 2%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Enemy units in the collapsed space cannot be healed."
        ],
        pic: "images/gadget/timerift.png",
        rarity:"SSR"
    },
    
    // SSR Confined Space
    {
        name: "Confined Space",
        description: "Creates a confined space with a radius of 7m for 10 seconds, with constant energy fluctuations on the ground, dealing 73.4%*Attack of the current weapon elemental damage per second to ground targets; if the target touches the edge of the area, a strong control stun effect is applied for 2 seconds, with a cooldown of 240 seconds.",
        awakening: [
            // 1 star
            "Stun extended to 3 seconds, cooldown reduced to 180 seconds.",
            // 2 star
            "Energy Wave deals an additional 30% more damage.",
            // 3 star
            "Cooldown time reduced to 120 seconds.",
            // 4 star
            "Increases physical damage by 2%, even when not in combat, but not in peak leagues",
            // 5 star
            "Extra seismic waves are triggered every 3 seconds, every hit floats the targets (can be dodged by jumping)."
        ],
        pic: "images/gadget/confinedspace.png",
        rarity:"SSR"
    },
    
    // SSR Drone
    {
        name: "Drone",
        description: "Summons a drone for 15 seconds, increases your final damage by 5% every 5 seconds, cooldown 120 seconds.",
        awakening: [
            // 1 star
            "Apply crowd control immunity for the first 5 seconds.",
            // 2 star
            "Duration extended to 25 seconds.",
            // 3 star
            "Adds an additional 5% damage boost to the Pioneer every 5 seconds.",
            // 4 star
            "Adds an additional 5% damage boost to the Pioneer every 5 seconds.",
            // 5 star
            "During the duration of the drone, the Pioneer receives an attack recovery effect, converting 20% of the damage value to its own life."
        ],
        pic: "images/gadget/drone.png",
        rarity:"SSR"
    },
    
    // SSR Holographic Projection
    {
        name: "Holographic Projection",
        description: "Unleashes a holographic projection based on yourself, which synchronises with the character's weapon attacks and deals 50% of the damage dealt by the character for 15 seconds, with a cooldown of 180 seconds.",
        awakening: [
            // 1 star
            "Duration extended to 20 seconds.",
            // 2 star
            "Projection damage is increased to 75% of the character's damage.",
            // 3 star
            "Click again to shift yourself to the position of the projection.",
            // 4 star
            "Increases electric damage by 2%, even if you are not in combat, but not in the peak league (PvP)",
            // 5 star
            "Projected damage is increased to 100% of the character's damage, and you are self-controlled when shifting."
        ],
        pic: "images/gadget/holographicprojection.png",
        rarity:"SSR"
    },
    
    // SSR Death Suppressor
    {
        name: "Death Suppressor",
        description: "Creates a space that lasts for 8 seconds, in which you have the effect of hegemony and you cannot go lower than 20% of your health regardless of any damage you take, with a cooldown time of 90 seconds. After 8 seconds in space, you cannot regain the same space effect for 45 seconds.",
        awakening: [
            // 1 star
            "After 8 seconds, you regain 15% of your health in the space.",
            // 2 star
            "Adds a 25% blood-suck effect while in space.",
            // 3 star
            "Immune to all controls while in space.",
            // 4 star
            "Increases ice damage by 2%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "When you are below or equal to 40% of your life in space, your blood-suck effect is doubled until the space disappears."
        ],
        pic: "images/gadget/deathsuppressor.png",
        rarity:"SSR"
    },
    
    // SSR Counter 2
    {
        name: "Counter 2",
        description: "Gain a shield that lasts for 5 seconds. After 1 attack it disappears, knocking surrounding enemies and deal 100% of attack power+50 points of damage. When the shield is broken within 1 second of generating, it stuns the enemy for 2 seconds and you will receive a damage boost by a percentage of your current life for 10 seconds (up to 60%).",
        awakening: [
            // 1 star
            "Immediately gain 100 energy if your HP is more than 90%. Immediately gain 50 energy if your HP is less than 90%. Immediately gain another 50 energy when the damage boost ends.",
            // 2 star
            "Damage booster time is increased by 1 second.",
            // 3 star
            "Increase the damage boost limit to 70%",
            // 4 star
            "Increases fire damage by 2%, even if you are not in combat, but not in Apex league (PvP)",
            // 5 star
            "If the HP loss is greater than the current HP loss, the damage increase is based on the percentage of HP lost (up to 70%)."
        ],
        pic: "images/gadget/counter2.png",
        rarity:"SSR"
    },
    
    // SR Jetpack 
    {
        name: "Jetpack",
        description: "Press and hold the Jetpack gadget in the direction of the arrow to enter the gliding state. Consumes 10 points of stamina per second. Jetpack cooldown 150 seconds. Stagnant gliding is not affected by the cooldown.Jetpack can be used 2 times before going on cooldown.",
        awakening: [
            // 1 star
            "Cooldown reduced to 100 seconds, gliding does not consume stamina anymore.",
            // 2 star
            "Glide for more than 3 seconds to gain a critical hit enhancement and a strong control state to stun the target for 2 seconds at the moment your Jetpack hits the target.",
            // 3 star
            "Cooldown reduced to 60 seconds.",
            // 4 star
            "Reduces Physical damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Jetpack can be used up to 3 times."
        ],
        pic: "images/gadget/jetpack.png",
        rarity:"SR"
    },
    
    // SR Quantum Cloak
    {
        name: "Quantum Cloak",
        description: "Enters a quantum state, making yourself invisible to enemies by optical means for 10 seconds. Launching an attack removes this effect and has a 120 second cooldown.",
        awakening: [
            // 1 star
            "Quantum state lasts for 20 seconds.",
            // 2 star
            "Cooldown reduced to 80 seconds.",
            // 3 star
            "100% more damage to attacks launched in Quantum state, this effect is removed after 1 attack.",
            // 4 star
            "Increases electric damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "100% more damage to attacks launched in Quantum state, this effect is removed after 3 attacks."
        ],
        pic: "images/gadget/quantumcloak.png",
        rarity:"SR"
    },
    
    // SR Floating Ice Cannon
    {
        name: "Floating Ice Cannon",
        description: "Summons a floating ice cannon that lasts for 20 seconds and has a cooldown of 240 seconds. The Floating Cannon has the skill: Laser Beam, which deals 5.6%*attack damage to the target each time.",
        awakening: [
            // 1 star
            "Floating ice cannon lasts for 24 seconds.",
            // 2 star
            "New skill: 'Laser array', freezes the target by damaging it 4 times in a row, dealing up to 93.2%*attack damage to the target.",
            // 3 star
            "Cooldown time reduced to 150 seconds.",
            // 4 star
            "Increases ice damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "New skill: 'Shock', which deals 55.9%*attack damage to the target and stuns the target for 0.5 seconds"
        ],
        pic: "images/gadget/floatingicecannon.png",
        rarity:"SR"
    },
    
    // SR Jet Ski
    {
        name: "Jet Ski",
        description: "When used, it dashes forward a distance and slowly decelerates  until it stops, dealing 380% of current attack damage to colliding targets and inflicting a knockback effect during the dash, with a 90-second cooldown. The ability to use the Jet ski is possible while in swimming state.",
        awakening: [
            // 1 star
            "10 weapon points charges per second during glide.",
            // 2 star
            "Cooldown time reduced to 60 seconds.",
            // 3 star
            "100% more damage from Jet skis collisions, cooldown time reduced to 45 seconds.",
            // 4 star
            "Reduces ice damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "Immune to crowd control while using Jet skis, 5-second stun effect on colliding targets"
        ],
        pic: "images/gadget/jetski.png",
        rarity:"SR"
    },
    
    // SR Magnetic Storm
    {
        name: "Magnetic Storm",
        description: "Twisted Magnetic Field, releases 1 whirlwind with an electric core that moves in a random path around the scene for 10 seconds, sweeping surrounding targets into the air, dealing 186.3% of current attack damage per second, cooldown 100 seconds.",
        awakening: [
            // 1 star
            "Releases 2 whirlwinds with electric cores.",
            // 2 star
            "20% more damage to the whirlwind.",
            // 3 star
            "Releases 3 whirlwinds with electric cores.",
            // 4 star
            "Increases electric damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "units in the whirlwind have a 50% chance of being confused for 3 seconds every time they take damage (moving in the opposite direction of the joystick/keybinds)."
        ],
        pic: "images/gadget/magneticstorm.png",
        rarity:"SR"
    },
    
    // SR Multiple Missile
    {
        name: "Multiple Missile",
        description: "Throws a missile launcher behind you for 8 seconds, with a cooldown of 60 seconds. Releases multiple missiles to attack nearby enemy units, each dealing 34.8% of current attack damage.",
        awakening: [
            // 1 star
            "Increases the number of missiles released per second",
            // 2 star
            "20% more damage from Multiple Missile",
            // 3 star
            "Multiple Missile last for 12 seconds.",
            // 4 star
            "Increases Physical damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "the number of missiles released per second is increased again."
        ],
        pic: "images/gadget/multiplemissile.png",
        rarity:"SR"
    },
    
    // SR Shielding Robot
    {
        name: "Shielding Robot",
        description: "The summoned robot opens a shield that lasts 5 seconds. The shield disappears after 5 seconds or when you take an attack, knocking back the surrounding enemies and deals 100% attack +50 damage. If the shield is broken within 1 second of being created, it stuns the enemy for an additional 2 seconds. Cooldown time of 30 seconds.",
        awakening: [
            // 1 star
            "When the shield is broken, it reduces the movement speed of the attacker and nearby enemies by 35% for 6 seconds.",
            // 2 star
            "When the shield ends (shattered), the final damage is increased by an equal percentage of the blood lost, for 10 seconds, with a minimum of 30%.",
            // 3 star
            "After the shield ends (shattered), it increases your movement speed by 30% for 5 seconds.",
            // 4 star
            "Reduces fire damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "When the shield is broken, it gains 5 seconds of anti-damage effect, returning 0.6 times the damage taken to the attacker."
        ],
        pic: "images/gadget/shieldingrobot.png",
        rarity:"SR"
    },
    
    // SR Singularity Magic Cube
    {
        name: "Singularity Magic Cube",
        description: "Use the Cube to change the gravitational pull around you, causing the enemy to take 100% attack damage, then grab the enemy to make them float and send them flying and deal 120% attack damage again. Cooldown of 30 seconds.",
        awakening: [
            // 1 star
            "When the Cube is activated, increases your damage by 10% for 10 seconds.",
            // 2 star
            "When the Cube is activated, 200 points of weapon charge are deducted from surrounding enemies.",
            // 3 star
            "The number of uses of the Cube is increased to 2.",
            // 4 star
            "Increases elemental damage by 1.5%, even if you are not in combat, but not in peak league (PvP)",
            // 5 star
            "When the Cube is activated, the weapon gains power based on the amount of blood lost. For every 1% of blood lost, 10 points of weapon power are gained."
        ],
        pic: "images/gadget/singularitymagiccube.png",
        rarity:"SR"
    },
    
    // SR Atomic Hand Cannon
    {
        name: "Atomic Hand Cannon",
        description: "Fires 1 mechanical energy projectile at the designated target, hits the ground or water to create a climbable mechanical cylinder for a maximum of 20 seconds. A maximum of 2 projectiles can be used. Each with a cooldown time of 50 seconds.",
        awakening: [
            // 1 star
            "The mechanical projectile of energy is increased to 30 seconds.",
            // 2 star
            "When using the Atomic Hand Cannon, the stamina recovery will be 30% faster for 20 seconds",
            // 3 star
            "Stores up to 3 rounds of ammunition",
            // 4 star
            "1.5% more fire elemental damage, even when not in a combat, but not in peak league (PvP)",
            // 5 star
            "Cooldown time reduced to 40 seconds."
        ],
        pic: "images/gadget/atomichandcannon.png",
        rarity:"SR"
    },
    
    // SR Lava Grenade
    {
        name: "Lava Grenade",
        description: "Throws lava bombs in front of the target, dealing 567% of current attack damage with knockback, 45 sec cooldown.",
        awakening: [
            // 1 star
            "Added 2 seconds stun and ignition on hit.",
            // 2 star
            "50% more blast range.",
            // 3 star
            "Cooldown time reduced to 30 seconds.",
            // 4 star
            "Increases fire damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "3 seconds stun on hit, 10 seconds stamina burn added to target, 100 stamina points deducted per use."
        ],
        pic: "images/gadget/lavagrenade.png",
        rarity:"SR"
    },
    
    // SR Mechanical Arm
    {
        name: "Mechanical Arm",
        description: "Ejects a robotic arm, pulling a given target to it, or pulling itself to it, causing 100% damage and floating on a hit, while returning 300 points of weapon charge to yourself; can also be used to reach hard-to-reach places, can be used 2 times, restoring 1 charge every 30 seconds.",
        awakening: [
            // 1 star
            "Gives you an electromagnetic shield that reduces your damage taken by 20% for 7 seconds.",
            // 2 star
            "1 recovery every 15 seconds",
            // 3 star
            "can be used up to 3 times.",
            // 4 star
            "Increases ice damage by 1.5%, even when not in combat, but not in peak league (PvP)",
            // 5 star
            "Reduce 30% of final damage to the target for 7 seconds on hit."
        ],
        pic: "images/gadget/mechanicalarm.png",
        rarity:"SR"
    },
    
    // SR Magneto Pulse
    {
        name: "Magneto Pulse",
        description: "The Pioneer detonates a magnetic bomb, knocking the target back, dealing 38.8% of current attack damage to the target and making himself immune to hard effects for 5 seconds, with a 35 second cooldown.",
        awakening: [
            // 1 star
            "Can be used while in cc (crowd controlled).",
            // 2 star
            "Immune to crowd control for 5 seconds after use.",
            // 3 star
            "adds a 7-second magnetic bomb to the target after hitting it, which will detonate immediately after the target uses attack/dodge/skill, causing a 40% slow that will disappear after triggering.",
            // 4 star
            "Reduces electric element damage by 1.5%, even if not in combat, but not in peak league (PvP)",
            // 5 star
            "When the target detonates the magnetic bomb, it removes all of the target's current buffs."
        ],
        pic: "images/gadget/magnetopulse.png",
        rarity:"SR"
    }
    
]