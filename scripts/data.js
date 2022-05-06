var attack, defense, health, crit;

// 1-15 purple
// 16-30 blue
// 31-40 green
var psp = 'images/affinity/1.png';
var snowglobe = 'images/affinity/2.png';
var pearl = 'images/affinity/3.png';
var kitchenware = 'images/affinity/4.png';
var tataCards = 'images/affinity/5.png';
var present = 'images/affinity/6.png';
var ufo = 'images/affinity/7.png';
var seal = 'images/affinity/8.png';
var goldCoin = 'images/affinity/9.png';
var tataFigure = 'images/affinity/10.png';
var bearFigure = 'images/affinity/11.png';
var foxFigure = 'images/affinity/12.png';
var catFigure = 'images/affinity/13.png';
var miaFigure = 'images/affinity/14.png';
var peppaFigure = 'images/affinity/15.png';
var toolbox = 'images/affinity/16.png';
var chessSet = 'images/affinity/17.png';
var tataPlush = 'images/affinity/18.png';
var suit = 'images/affinity/19.png';
var juicePouch = 'images/affinity/20.png';
var necklace = 'images/affinity/21.png';
var catPlush = 'images/affinity/22.png';
var diary = 'images/affinity/23.png';
var vial = 'images/affinity/24.png';
var perfume = 'images/affinity/25.png';
var spiderFigure = 'images/affinity/26.png';
var elfFigure = 'images/affinity/27.png';
var pumpkinFigure = 'images/affinity/28.png';
var robotFigure = 'images/affinity/29.png';
var androidFigure = 'images/affinity/30.png';
var flowers = 'images/affinity/31.png';
var dumbbells = 'images/affinity/32.png';
var photoAlbum = 'images/affinity/33.png';
var photo = 'images/affinity/34.png';
var scarf = 'images/affinity/35.png';
var tradingCard = 'images/affinity/36.png';
var plant = 'images/affinity/37.png';
var harmonica = 'images/affinity/38.png';
var pinwheel = 'images/affinity/39.png';
var snackBox = 'images/affinity/40.png';
var strangePlant = 'images/affinity/41.png';
var strangeFragment = 'images/affinity/42.png';
var princeTataFigure = 'images/affinity/43.png';
var bunnyDoll = 'images/affinity/44.png';
var linyeFigure = 'images/affinity/45.png';


var samir = 
    {
        name:"Samir",
        rarity: "SSR",
        pic:"images/samir_nobg.png",
        artwork:"images/art/samir.png",
        wepName:"Dual EM Stars",
        wepImg:"images/wep/samir.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next attack will <strong>paralyze</strong> targets for <strong>1</strong> second and electrify them for <strong>6</strong> seconds, negating all buffs and dealing damage equal to <strong>144.00%</strong> of ATK. Targets can't receive any buffs for the next <strong>6</strong> seconds.",
        awakening:[
            // 1 star
            "Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to <strong>30%</strong> of ATK to the target and nearby enemies. Cooldown: <strong>0.5</strong> seconds.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Increase crit rate to electrified targets by <strong>40%</strong>. Electrical explosions extend the duration of electrified effects by <strong>0.5</strong> seconds, up to a maximum of <strong>5</strong> seconds.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "Double the duration of Electro Field and pull targets into the center of the attack.",
            // 6 star
            "Triggering an electrical explosion reduces skill cooldowns by 1 second."
        ],
        energyCharge:["10.70","s"],
        shieldBreak:["6.00","b"],
        materials:["electric","red","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/samir.png",
        chipEffect:[
            // 2 set
            "Increase damage progressively by <strong>1%</strong> upon hitting a target. Stack up to <strong>10/13/16/20</strong> times. Lasts <strong>1.5</strong> seconds.<br><img class='flag' src='images/cn.svg'> Each hit increases attack by <strong>1.5%</strong>, up to <strong>10/13/16/20</strong> stacks, lasting <strong>2</strong> seconds and refreshing with each hit.",
            // 4 set
            "Increase Dual EM Stars' electrical explosion damage by <strong>16%/22%/30%/40%</strong> of ATK.<br><img class='flag' src='images/cn.svg'> Adds an extra hit to every attack for <strong>10%/12.5%/15%/17.5%</strong> damage (can not crit)."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Samir"',
            // 600 affinity
            "Unlock communication [Solo Dance]",
            // 1200 affininty
            "Grant <strong>1</strong> stack of Concentration for every <strong>4</strong> seconds when Samir receives no damage. Each stack increases damage dealt by <strong>3%</strong>, and can stack up to <strong>4</strong> times. After being hit, Samir loses <strong>1</strong> stack of Concentration, up to <strong>1</strong> stack per <strong>1</strong> second.",
            // 2000 affinity
            "Unlock communication [Resonance]",
            // 3000 affinity
            "Unlock communication [Concerto]",
            // 4000 affinity
            "Grant <strong>1</strong> stack of Concentration for every <strong>4</strong> seconds when Samir receives no damage. Each stack increases damage dealt by <strong>4%</strong>, and can stack up to <strong>5</strong> times. After being hit, Samir loses <strong>1</strong> stack of Concentration, up to <strong>1</strong> stack per <strong>2</strong> second."
        ],
        traits: ['Female','171 cm','???','Taurus','20 May'],
        gifts: [
            foxFigure,'+60', // pink fox
            psp,'+60', // psp
            present,'+60', // pink present
            ufo,'+60', // ufo
            pearl,'+60', // pearl
            princeTataFigure, '+60',
            
            tataPlush,'+30', // tata plush
            chessSet,'+30', // chessboard
            catPlush,'+30', // cat plush
            diary,'+30', // diary
            robotFigure,'+30', //r2d2 figure
            bunnyDoll, '+30',
            
            tradingCard,'+15', // trading card
            pinwheel,'+15' // pinwheel
        ],
        giftPrefs: ['games','toys'],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['samir', 4],
            ['guardscode', 3],
            ['peppa', 3]
        ]
    }

var coco = 
    {
        name:"Coco Ritter",
        rarity: "SSR",
        pic:"images/coco_nobg.png",
        artwork:"images/art/coco.png",
        wepName:"Absolute Zero",
        wepImg:"images/wep/coco.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_support.png",
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>151.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        awakening:[
            // 1 star
            "After dodging, summon a healing bee that follows the user and heals the ally with the lowest percentage of HP within <strong>15</strong> meters. Heal for <strong>25%</strong> of ATK and restore <strong>50</strong> weapon charge points each time and last for <strong>25</strong> seconds. Cooldown: <strong>25</strong> seconds.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "Use <strong class='text-orange'>Sanctuary</strong> or discharge skills to remove debuffs from targets, can be used while being affect by control effects. Increase shatter and damage dealt for all teammates within range by <strong>20%</strong>, and grant them immunity to control effects and shatter.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Increase healing effect by <strong>15%</strong>, plus an additional <strong>20%</strong> when healing targets with less than <strong>60%</strong> HP.",
            // 6 star
            "Whenever a healing bee is summoned or disappears from battle, heal all allies for <strong>100%</strong> of the user's ATK. All allies within <strong>6</strong> meters of the healing bee also gain <strong>10%</strong> damage boost (cannot stack)."
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
            bunnyDoll, '+30',
            catPlush,'+30', // cat plush
            robotFigure,'+30', //r2d2 figure
            
            photoAlbum, '+15',
            photo, '+15',
            plant, '+15',
            harmonica, '+15',
            pinwheel, '+15'
        ],
        giftPrefs: ['toys','decorations','rare-items'],
        recChips: [
            ['coco', 2],
            ['coco', 4],
            ['meryl', 2],
            ['zero', 4],
            ['peppa', 3],
            ['transportthinking', 3]
        ]
    }

var king = 
    {
        name:"KING",
        rarity: "SSR",
        pic:"images/king_nobg.png",
        artwork:"images/art/king.png",
        wepName:"Scythe of the Crow",
        wepImg:"images/wep/king.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will set the target on fire for <strong>8</strong> seconds with the next attack, causing ongoing damage of <strong>58.00%</strong> of ATK every second. Ignited targets receive <strong>50%</strong> efficacy from healing.",
        awakening:[
            // 1 star
            "Increase shatter by <strong>15%</strong>. After shattering the target's shield, deal damage equal to <strong>120%</strong> of ATK to the target every second for <strong>15</strong> seconds.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "Increase damage dealt by <strong>6%</strong> for each enemy within <strong>6</strong> meters, up to a maximum of <strong>30%</strong>.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "Increase damage dealt against HP shields or shielded enemies by <strong>100%</strong>.",
            // 6 star
            "Increase damage dealt by <strong>10%</strong> for each enemy slain for <strong>30</strong> seconds (stack up to <strong>3</strong> times)."
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
            "King restores <strong>8%</strong> HP for every <strong>7</strong> enemies he defeats",
            // 2000 affinity
            "Unlock communication [Peer-to-peer Contract]",
            // 3000 affinity
            "Unlock communication [Betting]",
            // 4000 affinity
            "King restores <strong>10%</strong> HP for every <strong>5</strong> enemies he defeats"
        ],
        traits: ['Male','190 cm','Crown','Scorpio','3 Nov'],
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
            linyeFigure, '+60',
            
            necklace, '+30',
            vial, '+30',
            
            photo, '+15',
            snackBox, '+15',
            harmonica, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['collectibles','rare-items','limited-time-items'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['burstingcore', 3],
            ['offensivelogic', 3]
        ]
    }

var shiro = 
    {
        name:"Shiro",
        rarity: "SSR",
        pic:"images/shiro_nobg.png",
        artwork:"images/art/shiro.png",
        wepName:"Chakram of the Seas",
        wepImg:"images/wep/shiro.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will inflict damage equal to <strong>137.00%</strong> of ATK with the next attack, and make the target grievous for <strong>7</strong> seconds, taking <strong>20%</strong> extra damage.",
        awakening:[
            // 1 star
            "Increase damage dealt to and all elemental shattering effects on targets within <strong class='text-green'>Full Bloom</strong>'s range by <strong>30%</strong>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Increase shatter by <strong>15%</strong> and reset all weapon skill cooldowns upon shattering the target's shield. Can only be triggered once every <strong>30</strong> seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Attacking a grievous target extends the duration of grievous by an additional <strong>7</strong> seconds (only take effect once for the same effect).",
            // 6 star
            "After using <strong class='text-green'>Full Bloom</strong>, grant a 100% crit chance for the next <strong>8</strong> seconds."
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
            "When Shiro releases her weapon skill or combo skill, her full attack is increased by <strong>10%</strong>, and her physical attack is increased by <strong>7%</strong> for 8 seconds, cooldown 16 sec.",
            // 2000 affinity
            "Unlock communication [Sea Waves]",
            // 3000 affinity
            "Unlock communication [Song of the Secret Collection]",
            // 4000 affinity
            "When Shiro releases her weapon skill or combo skill, her full attack is increased by <strong>16%</strong>, and her physical attack is increased by <strong>10%</strong> for 8 seconds, cooldown 16 sec."
        ],
        traits: ['Female','163 cm','Warren','Virgo','22 Sep'],
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
            linyeFigure, '+60',
            
            vial, '+30',
            necklace, '+30',
            toolbox, '+30',
            strangeFragment, '+30',
            
            dumbbells, '+15',
            harmonica, '+15',
            photo, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['metalware','collectibles','rare-items'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['samir', 2],
            ['arrogantprovocation', 3],
            ['offensivelogic', 3]
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
        wepEffect:"Fully charged weapons will set the target on fire for <strong>8</strong> seconds with the next attack, causing ongoing damage of <strong>58.00%</strong> of ATK every second. Ignited targets receive <strong>50%</strong> efficacy from healing.",
        awakening:[
            // 1 star
            "3% of the target's current life is added to each attack, up to a maximum of 180% of the attack.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "the skill Blast Grenade applies a powerful burn to the target in ignition state, dealing 1% of the target's current life per second, up to a maximum of 60% of the attack, for 10 seconds.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
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
            "When Cobalt-B releases a combo, it restores <strong>50-120</strong> points of energy charge at random.",
            // 2000 affinity
            "Unlock communication [Pleasant Cooperation]",
            // 3000 affinity
            "Unlock communication [Comapnions & Weapons]",
            // 4000 affinity
            "When Cobalt-B releases a combo, it restores <strong>90-180</strong> points of energy charge at random."
        ],
        traits: ['Female','157 cm','Crown','Cancer','26 Jun'],
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
            linyeFigure, '+60',
            pearl, '+60',
            
            necklace, '+30',
            toolbox, '+30',
            strangeFragment, "+30",
            
            dumbbells, '+15',
            snackBox, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['metalware','collectibles','limited-time-items'],
        recChips: [
            ['cobalt', 4],
            ['samir', 2],
            ['samir', 4],
            ['karasuma', 2],
            ['burstingcore', 3]
        ]
    }

var claudia = 
    {
        name:"Claudia",
        rarity: "SSR",
        pic:"images/claudia_nobg.png",
        artwork:"images/art/claudia.png",
        wepName:"Guren Blade",
        wepImg:"images/wep/claudia.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will inflict damage equal to <strong>137.00%</strong> of ATK with the next attack, and make the target grievous for <strong>7</strong> seconds, taking <strong>20%</strong> extra damage.",
        awakening:[
            // 1 star
            "After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by <strong>8%</strong> for <strong>25</strong> seconds (stacks up to <strong>3</strong> times; each successful skill or discharge use can only grant a single stack).",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by <strong>10%</strong> for <strong>15</strong> seconds. Stack up to <strong>1</strong> time.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by <strong>20%</strong> for <strong>15</strong> seconds (cannot stack).",
            // 6 star
            "Hitting the same target no longer reduces the damage dealt. After using Guren Blade or a discharge skill, applies <strong>1</strong> stack of War Wounds to all targets within 8 meters."
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
            "Stealth for <strong>1s</strong> after dodging",
            // 2000 affinity
            "Unlock communication [Enthusiasm]",
            // 3000 affinity
            "Unlock communication [Engagement]",
            // 4000 affinity
            "Stealth for <strong>1.5s</strong> after dodging"
        ],
        traits: ['Female','170 cm','Hagarde','Capricorn','16 Jan'],
        gifts: [
            snowglobe, '+80',
            peppaFigure, '+80',
            
            seal, '+60',
            tataCards, '+60',
            miaFigure, '+60',
            catFigure, '+60',
            princeTataFigure, '+60',
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
        ],
        giftPrefs: ['everyday-items','rare-items','decorations'],
        recChips: [
            ['claudia', 2],
            ['claudia', 4],
            ['samir', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['arrogantprovocation', 3]
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
        wepEffect:"When the weapon is fully charged, the next attack will <strong>paralyze</strong> targets for <strong>1</strong> second and electrify them for <strong>6</strong> seconds, negating all buffs and dealing damage equal to <strong>144.00%</strong> of ATK. Targets can't receive any buffs for the next <strong>6</strong> seconds.",
        exclusiveEffect:"When entering combat, turn on Battle Spirit and increase your final damage by 15%. and your cellular aging is accelerated (reducing your current life by 1% every 5 seconds), which clears when you leave combat [the effect of switching weapons disappears]. If your life drops below 50%, cellular aging stops and the Battle Intent booster effect remains (the effect of switching weapons disappears).",
        awakening:[
            // 1 star
            "Dodge attacks hits for an additional 80% attack + 2.5% of your lost life. The weapon skill explodes with additional 160% attack + 5% damage to your lost life. The Force Field release hits with an additional 160% attack + 5% of your lost life (continuous damage does not trigger).",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
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
            "When Bai Yuekui enters combat, the electric attack power is increased by <strong>21%</strong>, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.",
            // 2000 affinity
            "Unlock communication [Knowing the New World]",
            // 3000 affinity
            "Unlock communication [I Have Many Stories]",
            // 4000 affinity
            'When Bai Yuekui enters combat, the electric attack power is increased by <strong>33%</strong>, the effect decays over time and lasts for 120 seconds. The effect can be reset after 5 seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by 50%.'
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
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            necklace, '+30',
            elfFigure, '+30',
            spiderFigure, '+30',
            
            photoAlbum, '+15',
            snackBox, '+15',
            plant, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['collectibles','limited-time-items','decorations'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['samir', 2],
            ['karasuma', 2],
            ['guardscode', 3],
            ['offensivelogic', 3]
        ]
    }

var meryl = 
    {
        name:"Meryl",
        rarity: "SSR",
        pic:"images/meryl_nobg.png",
        artwork:"images/art/meryl.png",
        wepName:"Rosy Edge",
        wepImg:"images/wep/meryl.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>151.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        awakening:[
            // 1 star
            "Increase shatter by <strong>15%</strong> and restore <strong>10%</strong> of HP after shattering the target's shield.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "Obtain Health Ice Shield with <strong>10%</strong> maximum health value when the weapon is switched; cooldown takes <strong>20</strong> seconds; Ice Shield lasts up to <strong>10</strong> seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Increase damage and shatter by <strong>50%</strong> while the shield is active.",
            // 6 star
            "Health Ice Shield with a health value of up to <strong>20%</strong> is obtained when switched to the weapon. The shield provides immunity to control effects; cooldown takes <strong>20</strong> seconds; Ice Shield lasts up to <strong>10</strong> seconds."
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
            linyeFigure, '+60',
            
            necklace, '+30',
            vial, '+30',
            
            photo, '+15',
            harmonica, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['metal-items','rare-items'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 3],
            ['cleanupagreement', 3]
        ]
    }

var hane = 
    {
        name:"Tsubasa",
        rarity: "SSR",
        pic:"images/hane_nobg.png",
        artwork:"images/art/hane.png",
        wepName:"Icewind Arrow",
        wepImg:"images/wep/hane.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>151.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        awakening:[
            // 1 star
            "Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by <strong>8%</strong> for <strong>15</strong> seconds. Stack up to <strong>3</strong>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Launching a Dodge attack fires <strong>3</strong> Charged Arrows.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "Double duration of Arrow Rain and slow targets by <strong>25%</strong>.",
            // 6 star
            "Sharp Arrow stacks up to <strong>5</strong> times. Hitting a target with Charged Arrow immediately grants <strong>3</strong> stacks, headshots grant <strong>5</strong> stacks."
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
            "Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to <strong>15</strong> stacks). Each stack increases attack by <strong>0.5%</strong> and refreshes buff duration.",
            // 2000 affinity
            "Unlock communication [Cooling Alarm]",
            // 3000 affinity
            "Unlock communication [Hot and Cold]",
            // 4000 affinity
            "Each time Hane deals damage, gain 1 stack of Strong Strike (can stack 1 stack every 1 sec, up to <strong>30</strong> stacks). Each stack increases attack by <strong>0.6%</strong> and refreshes buff duration."
        ],
        traits: ['Female','169 cm','Astra','Aries','24 Mar'],
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
            linyeFigure, '+60',
            
            vial, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            photo, '+15',
            snackBox, '+15',
            harmonica, '+15'
        ],
        giftPrefs: ['figurines','limited-time-items','rare-items'],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['transportthinking', 3]
        ]
    }

var huma = 
    {
        name:"Huma",
        rarity: "SSR",
        pic:"images/huma_nobg.png",
        artwork:"images/art/huma.png",
        wepName:"Molten Shield V2",
        wepImg:"images/wep/huma.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will set the target on fire for <strong>8</strong> seconds with the next attack, causing ongoing damage of <strong>58.00%</strong> of ATK every second. Ignited targets receive <strong>50%</strong> efficacy from healing.",
        awakening:[
            // 1 star
            "Using a Dodge skill or branch skill while in shield form grants a stack of Strong Shield, which grants <strong>10%</strong> damage reduction for <strong>15</strong> seconds and stacks up to <strong>3</strong> times. Switching to axe form converts all Strong Shield stacks to Sharp Axe stacks, each of which increases damage dealt by <strong>15%</strong> for <strong>15</strong> seconds. Switching to a different weapon cancels this effect.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "While in shield form, branch/dodge attacks deal additional damage to targets equal to <strong>4%</strong> of the user's current HP.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "After switching to a shield axe, immediately grant <strong>30%</strong> damage reduction that diminishes by <strong>10%</strong> every <strong>3</strong> seconds, down to a minimum of <strong>10%</strong>. Switching weapons cancels this effect. Cooldown: <strong>30</strong> seconds.",
            // 6 star
            "Enhance conversion skills.<br>Shield Enhancement: Increase damage dealt by <strong>60%</strong> and expand the radius of the flame zome by <strong>30%</strong>.<br>Axe Enhancement: For the next <strong>5</strong> seconds after using this ability, turn all damage received into HP (up to a maximum of <strong>15%</strong> of the user's Max HP)."
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
            "Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain <strong>x0.4%</strong> of your life.",
            // 2000 affinity
            "Unlock communication [Echo]",
            // 3000 affinity
            "Unlock communication [Symphony]",
            // 4000 affinity
            "Huma gains 1 Marker of Fortitude per damage, 1 additional Marker if she takes fire damage, up to 1 per second, up to a total of 12. When releasing a weapon skill, all Markers are consumed and you gain <strong>x0.6%</strong> of your life."
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
            princeTataFigure, '+60',
            
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
        ],
        giftPrefs: ['everyday-items','games','decorations'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['huma', 4],
            ['burstingcore', 3],
            ['offensivelogic', 3],
            ['cleanupagreement', 3]
        ]
    }

var karasuma = 
    {
        name:"Crow",
        rarity: "SSR",
        pic:"images/karasuma_nobg.png",
        artwork:"images/art/karasuma.png",
        wepName:"Thunderblades",
        wepImg:"images/wep/karasuma.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next attack will <strong>paralyze</strong> targets for <strong>1</strong> second and electrify them for <strong>6</strong> seconds, negating all buffs and dealing damage equal to <strong>144.00%</strong> of ATK. Targets can't receive any buffs for the next <strong>6</strong> seconds.",
        awakening:[
            // 1 star
            "Attacking targets from behind increases crit rate of all dual blades attacks by <strong>40%</strong>. Attacking an electrified target from behind increases crit rate by <strong>100%</strong> and crit damage by <strong>30%</strong>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Increase damage by <strong>30%</strong> to targets with less than <strong>60%</strong> HP.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Triggering a Back Attack grants a 100% crit chance for the next <strong>4</strong> seconds and increases crit damage by <strong>50%</strong>. Cooldown: <strong>10</strong> seconds.",
            // 6 star
            "After using a skill, increase volt damage dealt to the target by <strong>20%</strong> for <strong>20</strong> seconds."
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
            "When not in a group, Crow's damage is increased by 6% and damage taken is reduced by 4%.",
            // 2000 affinity
            "Unlock communication [Happy-go-lucky]",
            // 3000 affinity
            "Unlock communication [Jokes]",
            // 4000 affinity
            "When not in a group, Crow's damage is increased by 10% and damage taken is reduced by 6%. When Crow starts a fight, damage is increased by 12% for 12 seconds."
        ],
        traits: ['Male','162 cm','Astra','Sagittarius','17 Dec'],
        gifts: [
            tataCards, '+80',
            tataFigure, '+80',
            
            goldCoin, '+60',
            catFigure, '+60',
            miaFigure, '+60',
            peppaFigure, '+60',
            bearFigure, '+60',
            psp, '+60',
            linyeFigure, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            perfume, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            
            flowers, '+15',
            snackBox, '+15',
            scarf, '+15'
        ],
        giftPrefs: ['everyday-items','figurines','limited-time-items'],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['samir', 4],
            ['karasuma', 2],
            ['peppa', 3],
            ['guardscode', 3]
        ]
    }

var zero = 
    {
        name:"Zero",
        rarity: "SSR",
        pic:"images/zero_nobg.png",
        artwork:"images/art/zero.png",
        wepName:"Negating Cube",
        wepImg:"images/wep/zero.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_support.png",
        wepEffect:"Fully charged weapons will set the target on fire for <strong>8</strong> seconds with the next attack, causing ongoing damage of <strong>58.00%</strong> of ATK every second. Ignited targets receive <strong>50%</strong> efficacy from healing.",
        awakening:[
            // 1 star
            "Deal damage and produce a healing orb, which lasts for <strong>20</strong> seconds and restore HP of any teammate who picks it up equal to <strong>60%</strong> of ATK. <strong>2</strong>-second cooldown.",
            // 20% chance of generating a healing sphere when dealing damage, lasts 20 seconds and restores 60% of attack power as health to the player who picks up the healing sphere.
            
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Reduce skill cooldown from <strong>90</strong> seconds to <strong>45</strong> seconds. Restore HP equal to <strong>30%</strong> of ATK every second while the shield is active.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Deal damage and produce a damage orb, which lsts for <strong>20</strong> seconds and increases ATK of any teammate who picks it up by <strong>1.5%</strong>. Stacks up to <strong>10</strong> times and lasts for <strong>45</strong> seconds. <strong>2.5</strong>-second cooldown.<br><img class='flag' src='images/cn.svg'> Deal damage and produce a damage orb, which lsts for <strong>20</strong> seconds and increases ATK of any teammate who picks it up by <strong>2%</strong>. Stacks up to <strong>10</strong> times and lasts for <strong>45</strong> seconds. <strong>2.5</strong>-second cooldown.",
            // 2% IN CHINA
            
            // 6 star
            "Using an ability grants allies healing orbs and damage orbs equal to the number of Omnium Cubes."
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
            "Zero reduces the cooldown of gadgets by <strong>1.5s</strong> when releasing a weapon skill.",
            // 2000 affinity
            "Unlock communication [Rules]",
            // 3000 affinity
            "Unlock communication [Zero]",
            // 4000 affinity
            "Zero reduces the cooldown of gadgets by <strong>3s</strong> when releasing a weapon skill."
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
        ],
        giftPrefs: ['limited-time-items','games'],
        recChips: [
            ['samir', 4],
            ['coco', 2],
            ['coco', 4],
            ['peppa', 3],
            ['burstingcore', 3]
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
        wepEffect:"Fully charged weapons will inflict damage equal to <strong>137.00%</strong> of ATK with the next attack, and make the target grievous for <strong>7</strong> seconds, taking <strong>20%</strong> extra damage.",
        exclusiveEffect:"In group status (Guardian): When releasing Re-entry, Form Switch or Full Shot, it will damage a friendly player with the lowest life for 60% for 10 seconds, and restore 10% of lost blood after the damage. The effect will not be removed and cannot be triggered again until the end of time. When not in a team (increase): 50% physical damage reduction in Heavy Form. Heavy Dimensional Shield: 1 point of Heavy Dimensional Energy is awarded for Heavy Dimensional Punch/Double Slash/Impact Slash hits. Converts 20% of your current life into 1.5 times your maximum life (up to 1.5 times your maximum life, healing is reduced by 50%), shield lasts 15 seconds, cannot be gained if you are below 10% of your life. At the end of the shield, 66.7% of the remaining shield value is converted to life, and 2 points of energy are gained on a hit to a weakened target. (Heavy Shield) is gained by converting other life shield values into (Heavy Shield) and is immune to life shield additions.",
        awakening:[
            // 1 star
            "Immediately gains [Heavy Shield] when releasing Heavy Dimensional Entry, Form Switch or Full Shot",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "1 level of 35% final damage boost at the end of [Heavy Shield] and when it breaks and refreshes. Lasts for 20 seconds, does not stack ",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
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
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'revived' and taunts the surrounding enemies for 5 seconds. While 'revived', you do not take damage, but you cannot perform actions, while recovering <strong>1%</strong> of his maximum life every second and healing received is increased by <strong>20%</strong>. This effect has a cooldown of <strong>10</strong> minutes. Damage from Stinging Eel and Ground Roar is reduced by 50%.",
            // 2000 affinity
            "Unlock communication [Reality and the Law]",
            // 3000 affinity
            "Unlock communication [Thinking about the present]",
            // 4000 affinity
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'Nirvana' and taunts the surrounding enemies for 5 seconds. While in 'Nirvana', you do not take damage, but you cannot perform actions, while recovering <strong>2%</strong> of his maximum life every second and healing received is increased by <strong>50%</strong>. This effect has a cooldown of <strong>5</strong> minutes. Damage from Stinging Eel and Ground Roar is reduced by 50%."
        ],
        traits: ['Male','192 cm','???','???','???'],
        gifts: [
            
            kitchenware, '+60',
            present, '+60',
            pearl, '+60',
            bearFigure, '+60',
            
            toolbox, '+30',
            strangeFragment, '+30',
            
            dumbbells, '+15',
        ],
        giftPrefs: ['metalware'],
        recChips: [
            ['marc', 2],
            ['marc', 4],
            ['king', 2],
            ['shiro', 2],
            ['arrogantprovocation', 3],
            ['cleanupagreement', 3]
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
        wepEffect:"When the weapon is fully charged, the next attack will <strong>paralyze</strong> targets for <strong>1</strong> second and electrify them for <strong>6</strong> seconds, negating all buffs and dealing damage equal to <strong>144.00%</strong> of ATK. Targets can't receive any buffs for the next <strong>6</strong> seconds.",
        exclusiveEffect:"electric resonance; triggered by equipping 2 or more electric weapons, boosts electric attack by 20% and electric resistance by 40%, also effective on the backstage.",
        awakening:[
            // 1 star
            "When releasing the weapon skill or QTE skill, creates 1 electrode and immediately gains 5 levels of healing chain reinforcement, and releases a healing chain that heals nearby friendly units (= 135% of the Pathfinder's attack power). The healing chain heals nearby units (= 135%*attack).",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "The electrode releases a ring every 6 seconds, dealing up to 389%*Attack of ranged damage.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
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
            "When an electrode is summoned, all enemies within 30 metres of the electrode take <strong>60%</strong> electric damage and all allies (including yourself) are healed for <strong>120%</strong> of their attack power.",
            // 2000 affinity
            "Unlock communication [Experimental Operation]",
            // 3000 affinity
            "Unlock communication [Ahead of the Righteous Eye]",
            // 4000 affinity
            "When an electrode is summoned, all enemies within 30 metres of the electrode take <strong>100%</strong> electric damage and all allies (including yourself) are healed for <strong>200%</strong> of their attack power."
        ],
        traits: ['Female','165 cm','???','Gemini','25 May'],
        gifts: [
            peppaFigure, '+80',
            princeTataFigure, '+80',
            
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
            bunnyDoll, '+30',
            
            flowers, '+15',
            photoAlbum, '+15',
            plant, '+15',
            scarf, '+15',
            pinwheel, '+15',
        ],
        giftPrefs: ['toys','everyday-items','decorations'],
        recChips: [
            ['nemesis', 2],
            ['nemesis', 4],
            ['coco', 2],
            ['coco', 4],
            ['guardscode', 3]
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
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>151.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        exclusiveEffect:"After releasing the skill “Fimbulwinter” a large area of ice is formed, inside this area dodges are not consumed up to 3 times? 15% damage increase while in the ice domain. Domain lasts 25s and using the skill again will replace the old one.",
        awakening:[
            // 1 star
            "Gain 1 Ice point for every 550%*Ice Attack of any elemental damage dealt by yourself in the ice area, up to a maximum of 10 ice points. At the end of the Ice area, it will cause explosive field damage to all enemy targets within the ice area with ice value points*95%*ice attack. After leaving the ice area, you lose 1 ice point every 3 seconds.",
            // 2 star
            "+16% increase in HP growth.",
            // 3 star
            "Ice points limit increased to 15, any Ice element weapon attacks released in the ice area deals (+5) *25%* Ice Attack damage to all targets in the ice area.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
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
            "When entering combat, gain <strong>+1.5%</strong> ice attribute attack power every 3 seconds, stack up to 10 times for <strong>2</strong> seconds.",
            // 2000 affinity
            "Unlock communication []",
            // 3000 affinity
            "Unlock communication []",
            // 4000 affinity
            "When entering battle gain <strong>2.4%</strong> ice attribute damage every 3 seconds up to 10 stacks, lasts for <strong>5</strong> seconds. Immune to CC effects in the ice domain."
        ],
        traits: ['Female','190 cm','???','Aquarius','1 February'],
        gifts: [
            present, '+60',
            tataCards, '+60',
            pearl, '+60',
            peppaFigure, '+60',
            catFigure, '+60',
            kitchenware, '+60',
            
            juicePouch, '+30',
            suit, '+30',
            toolbox, '+30',
            perfume, '+30',
            strangeFragment, '+30',
            
            flowers, '+15',
            dumbbells, '+15',
            scarf, '+15'
        ],
        giftPrefs: ['metalware','everyday-items'],
        recChips: [
            ['samir', 2],
            ['karasuma', 2],
            ['samir', 4],
            ['frigg', 4],
            ['transportthinking', 3]
        ]
    }

var ruby = 
    {
        name:"Ruby",
        rarity: "SSR",
        pic:"images/ruby_nobg.png",
        artwork:"images/art/ruby.png",
        wepName:"White Rabbit",
        wepImg:"images/wep/ruby.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will set the target on fire for <strong>8</strong> seconds with the next attack, causing ongoing damage of <strong>58.00%</strong> of ATK every second. Ignited targets receive <strong>50%</strong> efficacy from healing.",
        exclusiveEffect:'Fire Resonance; triggered by equipping 2 or more fire element weapons, boosts fire attack by 20% and fire resistance by 40%, can take effect after equipping them in the background',
        awakening:[
            // 1 star
            "[Scorching Heat] increases Sparky's attack damage to 182%; skill cooldown is reduced to 24 seconds.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "[Scorching Heat] Incidental fire damage increased by 18%; scorch settlement multiplier increased to 150%",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "Each time Sparky's basic attack hits an enemy unit, it returns an additional 75 points to the weapon's charge value, and the cooldown will be 0.9 seconds; during [Ultimate Heat], the efficiency of shield breaking is increased by 25%. ",
            // 6 star
            "[Scorching Heat] increases Sparky's attack damage to 240%, and [Heat] doubles the efficiency; skill cooldown is reduced to 16 seconds."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["11.50","s"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/ruby.png",
        chipEffect:[
            // 2 set
            "After releasing weapon skill, fire attack is increased by 15%/18%/21%/25% for 25 seconds, the effect is triggered by different star levels, the effect is not stackable",
            // 4 set
            "After releasing the weapon skill, gain (mastery) for 15 seconds, cooldown 15 seconds (different of levels (mastery) shares the cooldown), (mastery) cannot be stacked. Each time the basic attack hits the target, the fire damage is increased by 4%/5%/6%/7% which lasts until the end of (mastery), stacks up to 6 levels, adding up to 1 level every 0.2 seconds, after 6 levels are added, you get a shield to resist 1 damage."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar ',
            // 600 affinity
            "Unlock communication ",
            // 1200 affininty
            "Within 5 meters of Dolly, monsters receive 8% more fire damage, not stackable",
            // 2000 affinity
            "Unlock communication ",
            // 3000 affinity
            "Unlock communication ",
            // 4000 affinity
            "Within 5 meters of Dolly, monsters receive 8% more fire damage, not stackable; after throwing Dolly, the fire attack increases for 10 seconds, not stackable"
        ],
        traits: ['Female','140 cm','???','Cancer','15 July'],
        gifts: [
            princeTataFigure, '+80', // prince tata figure
            
            //pearl,'+60',
            //ufo,'+60', 
            //present,'+60', 
            //psp,'+60',  
            //foxFigure,'+60', 
            linyeFigure,'+60', 
            
            bunnyDoll,'+40',
            
            //diary,'+30',
            //catPlush,'+30',
            //chessSet,'+30',
            //robotFigure,'+30',
            //tataPlush,'+30',
            strangeFragment,'+30',
            
            //pinwheel,'+15',
            //tradingCard,'+15',
            strangePlant,'+15',
        ],
        giftPrefs: ['games','toys','vera'],
        recChips: [
            ['ruby', 2],
            ['ruby', 4],
            ['samir', 2],
            ['hane', 2],
            ['karasuma', 2],
            ['sobek', 3]
        ]
    }




var bailing = 
    {
        name:"Bai Ling",
        rarity: "SR",
        pic:"images/bailing_nobg.png",
        artwork:"images/art/bailing.png",
        wepName:"Nightingale's Feather",
        wepImg:"images/wep/bailing.png",
        eleImg:"images/ele_physical.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will inflict damage equal to <strong>100.00%</strong> of ATK with the next attack, and make the target grievous for <strong>7</strong> seconds, taking <strong>20%</strong> extra damage.",
        awakening:[
            // 1 star
            "Restore 1 dodge attempt every fifth normal attack or after using <strong class='text-green'>Piercing Shot</strong>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>10%</strong>.",
            // 3 star
            "Increase headshot damage by <strong>30%</strong>.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>20%</strong>.",
            // 5 star
            "Dodge skills inflict grievous on targets for <strong>7</strong> seconds.",
            // 6 star
            "Increase crit rate by <strong>30%</strong> and crit damage by <strong>50%</strong> against grievous targets."
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
            "When Bai Ling retracts her Jetpack or Jet Skis, her movement speed is increased by <strong>8%</strong> for 12 seconds, with a cooldown time of 60 seconds",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Bai Ling retracts her Jetpack or Jet Skis, her movement speed is increased by <strong>15%</strong> for 12 seconds, with a cooldown time of 60 seconds"
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
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            necklace, '+30',
            vial, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            photoAlbum, '+15',
            harmonica, '+15',
            photo, '+15',
            plant, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['decorations','collectibles','rare-items'],
        recChips: [
            ['samir', 2],
            ['claudia', 2],
            ['karasuma', 2],
            ['peppa', 3],
            ['arrogantprovocation', 3]
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
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>111.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        awakening:[
            // 1 star
            "Every successful normal attack increases damage by <strong>1%</strong> for <strong>2</strong> seconds (stack up to <strong>15</strong> times). Increase ammo count to <strong>60</strong>.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>10%</strong>.",
            // 3 star
            "Within <strong>10</strong> seconds of switching to the weapon, increase damage of normal attacks and shatter by <strong>30%</strong>. Cooldown: <strong>25</strong> seconds. Increase ammo to <strong>80</strong>.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>20%</strong>.",
            // 5 star
            "Reduce cooldown of normal attacks while in turret mode to <strong>2</strong> seconds.",
            // 6 star
            "Within <strong>10</strong> seconds upon switching to the weapon, increase damage of normal attacks and shatter by <strong>60%</strong>. Cooldown: <strong>25</strong> seconds."
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
            "Hilda's movement speed is increased by <strong>7%</strong> when riding on a mount",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "Hilda's movement speed is increased by <strong>10%</strong> when riding on a mount"
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
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            tataPlush, '+30',
            catPlush, '+30',
            robotFigure, '+30',
            pumpkinFigure, '+30',
            androidFigure, '+30',
            bunnyDoll, '+30',
            
            pinwheel, '+15',
            snackBox, '+15'
        ],
        giftPrefs: ['toys','figurines','limited-time-items'],
        recChips: [
            ['samir', 2],
            ['king', 2],
            ['shiro', 2],
            ['peppa', 3],
            ['transportthinking', 3],
            ['offensivelogic', 3]
        ]
}

var manaka = 
    {
        name:"Echo",
        rarity: "SR",
        pic:"images/manaka_nobg.png",
        artwork:"images/art/manaka.png",
        wepName:"Thunderous Halberd",
        wepImg:"images/wep/manaka.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"When the weapon is fully charged, the next attack will <strong>paralyze</strong> targets for <strong>1</strong> second and electrify them for <strong>6</strong> seconds, negating all buffs and dealing damage equal to <strong>106.00%</strong> of ATK. Targets can't receive any buffs for the next <strong>6</strong> seconds.",
        awakening:[
            // 1 star
            "Increase shatter by <strong>15%</strong>. After shattering the target's shield, increase all teammates' ATK by <strong>15%</strong> for <strong>30</strong> seconds. This cannot be stacked.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>10%</strong>.",
            // 3 star
            "After hitting a target with <strong class='text-green'>Moonchase</strong>, reduce their ATK by <strong>5%</strong> and increase the user's ATK by <strong>5%</strong> for <strong>15</strong> seconds (effect can be stacked up to <strong>3</strong> times by hitting multiple targets). Effect is doubled to grievous targets.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>20%</strong>.",
            // 5 star
            "Double stun duration from dodge skills.<br><img class='flag' src='images/cn.svg'> Double stun duration from forward dodge skills.",
            // 6 star
            "Discharge deals more damage the further it travels, up to <strong>100%</strong> more damage."
        ],
        energyCharge:["7.00","b"],
        shieldBreak:["11.00","s"],
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
            "When teaming up with Manaka, all teammates within 10m of Manaka receive a <strong>4%</strong> damage boost (excluding yourself).",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When teaming up with Manaka, all teammates within 10m of Manaka receive a <strong>6%</strong> damage boost (excluding yourself)."
        ],
        traits: ['Female','162 cm','Warren','Leo','14 Aug'],
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
        ],
        giftPrefs: ['everyday-items','limited-time-items','games'],
        recChips: [
            ['samir', 2],
            ['king', 2],
            ['shiro', 2],
            ['guardscode', 2],
            ['offensivelogic', 2]
        ]
}

var peppa = 
    {
        name:"Pepper",
        rarity: "SR",
        pic:"images/peppa_nobg.png",
        artwork:"images/art/peppa.png",
        wepName:"Staff of Scars",
        wepImg:"images/wep/peppa.png",
        eleImg:"images/ele_electric.png",
        resoImg:"images/reso_support.png",
        wepEffect:"When the weapon is fully charged, the next attack will <strong>paralyze</strong> targets for <strong>1</strong> second and electrify them for <strong>6</strong> seconds, negating all buffs and dealing damage equal to <strong>106.00%</strong> of ATK. Targets can't receive any buffs for the next <strong>6</strong> seconds.",
        awakening:[
            // 1 star
            "Heal all teammates within <strong>10</strong> meters for <strong>100%</strong> of ATK after using a Dodge skill.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>10%</strong>.",
            // 3 star
            "Normal attacks also fire two missiles, each dealing damage equal to <strong>5%</strong> of ATK to the target and restoring <strong>5</strong> weapon charge points.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>20%</strong>.",
            // 5 star
            "Increase speed of obtaining weapon charge by <strong>20%</strong> (not applicable to missile attacks).",
            // 6 star
            "Grant all teammates within range of the skill <strong>60%</strong> damage reduction and immunity to crowd control effects."
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
            "When Peppa uses satiety (satiety) to restore life, the recovery effect is increased by <strong>100%</strong>",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Peppa uses satiety (satiety) to restore life, the recovery effect is increased by <strong>200%</strong>"
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
            princeTataFigure, '+60',
            linyeFigure, '+60',
            
            suit, '+30',
            juicePouch, '+30',
            necklace, '+30',
            perfume, '+30',
            spiderFigure, '+30',
            elfFigure, '+30',
            
            photoAlbum, '+15',
            flowers, '+15',
            plant, '+15',
            scarf, '+15',
            strangePlant, '+15'
        ],
        giftPrefs: ['everyday-items','decorations','collectibles'],
        recChips: [
            ['coco', 2],
            ['coco', 4],
            ['peppa', 3],
            ['guardscode', 3],
            ['cleanupagreement', 3],
        ]
}

var xi = 
    {
        name:"Ene",
        rarity: "SR",
        pic:"images/xi_nobg.png",
        artwork:"images/art/xi.png",
        wepName:"Pummeler",
        wepImg:"images/wep/xi.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>111.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        awakening:[
            // 1 star
            "Taunt nearby targets after switching to this weapon, preventing <strong>1</strong> instance of damage in the next <strong>8</strong> seconds and granting hyperbody for the next <strong>8</strong> seconds. Cooldown: <strong>15</strong> seconds.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>10%</strong>.",
            // 3 star
            "After taking damage, reduce all damage received by <strong>50%</strong> for the next <strong>6</strong> seconds. Cooldown: <strong>20</strong> seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>20%</strong>.",
            // 5 star
            "Normal attacks <strong>stun</strong> targets for <strong>2.5</strong> seconds. Cooldown: <strong>20</strong> seconds.",
            // 6 star
            "Discharge skills deal an additional <strong>10%</strong> damage to targets and increase frost damage by an additional <strong>10%</strong> for <strong>25</strong> seconds."
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
            "Reduces stamina consumption by <strong>12%</strong> when swimming, climbing or gliding.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "Reduces stamina consumption by <strong>20%</strong> when swimming, climbing or gliding."
        ],
        traits: ['Female','145 cm','Crown','Leo','17 Aug'],
        gifts: [
            princeTataFigure, '+80',
            
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
            bunnyDoll, '+30',
            
            photoAlbum, '+15',
            tradingCard, '+15',
            pinwheel, '+15',
            plant, '+15'
        ],
        giftPrefs: ['games','decorations','toys'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 2],
            ['cleanupagreement', 2],
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
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
        ],
    artwork:''
}



var gadgets = [
    
    // SSR Giant arms
    {
        name: "Colossus Arms",
        description: "Summon a colossus arm that is immune to hitstun to fight for you for the next 20 seconds. Tap again to cancel. <strong>300</strong> seconds. Normal attacks deal damage up to <strong>1,387.7%</strong> of ATK and <strong>launch</strong> enemies. Skills deal damage equal to <strong>453.5%</strong> of ATK and knock enemies <strong>into the air</strong. Cooldown: <strong>10</strong> seconds.",
        awakening: [
            // 1 star
            "Fire <strong>2</strong> missiles with each attack, delaing damage to the target. Each missile deals damage equal to <strong>34.8%</strong> of ATK.",
            // 2 star
            "Reduce cooldown to <strong>200</strong> seconds.",
            // 3 star
            "Fire 4 missiles with each attack, dealing damage to the target. Each missile deals damage equal to <strong>34.8%</strong> of ATK.",
            // 4 star
            "Reduce physical damage received by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Colossus Arm lasts for <strong>30</strong> seconds All damage taken for this duration is reduced by <strong>20%</strong>."
        ],
        pic: "images/gadget/giantarms.png",
        rarity:"SSR"
    },
    
    // SSR Atomic Shield
    {
        name: "Omnium Shield",
        description: "Generate an Omnium shield that stops projectiles for <strong>10</strong> seconds, with starting energy equal to <strong>200%</strong> of the Wanderer's max HP and <strong>90</strong>-second cooldown.",
        awakening: [
            // 1 star
            "Slow enemies that pass through the shield by <strong>50%</strong> for <strong>2</strong> seconds.",
            // 2 star
            "Reduce cooldown to <strong>60</strong> seconds",
            // 3 star
            "Extend duration to <strong>20</strong> seconds.",
            // 4 star
            "Reduces frost damage received by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "When wanderers or allies pass through the Omnium Shield, damage dealt increases by <strong>25%</strong> for <strong>7</strong> seconds."
        ],
        pic: "images/gadget/atomicshield.png",
        rarity:"SSR"
    },
    
    // SSR V-Mech
    {
        name: "Type V Armor",
        description: "Pilot a droid to fight for <strong>30</strong> seconds. Cooldown: <strong>200</strong> seconds. Immune to hitstun. Tap again to exit and blow up the droid. Skill: <strong class='text-orange'>Aimed Shot</strong>. <strong class='text-orange'>Aimed Shot</strong>: Shoot rapidly to deal damage equal to <strong>44.4%</strong> of ATK per hit.",
        awakening: [
            // 1 star
            "When piloting mecha, gain immunity to flame damage and control effects.",
            // 2 star
            "Gain the <strong class='text-orange'>Artillery Fire</strong> skill.<br><strong class='text-orange'>Artillery Fire</strong>: Fire 6 times at the locked-on target. Each hit deals damage equal to <strong>155.2%</strong> of ATK.",
            // 3 star
            "When piloting the armor, dealing damage also inflicts burn.",
            // 4 star
            "Increase flame damage by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Gain <strong class='text-orange'>Flame Domain</strong> skill.<br><strong class='text-orange'>Flame Domain</strong>: Erect a wide-range Flame Domain at the current location, dealing damage equal to a maximum of <strong>1,146.8%</strong> of ATK."
        ],
        pic: "images/gadget/vmech.png",
        rarity:"SSR"
    },
    
    // SSR Time Rift
    {
        name: "Spacetime Rift",
        description: "Launch a proton bomb at the target location, creating a collapse in time-space that sucks targets in for <strong>10</strong> seconds. After 1.5 seconds, the center of the collapse deals damage equal to <strong>39.6</strong> of ATK to targets caught in the area every 0.5 seconds. Cooldown: <strong>100</strong> seconds.",
        awakening: [
            // 1 star
            "Enemies caught within the rift who are close to the ground are unable to dodge, and the vacuum duration is increased to <strong>15</strong> seconds.",
            // 2 star
            "Increase the target area by <strong>100%</strong>.",
            // 3 star
            "Increase damage dealt to targets in the area by <strong>20%</strong>.",
            // 4 star
            "Reduce flame dmage received by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Enemies within the rift are unable to receive any healing."
        ],
        pic: "images/gadget/timerift.png",
        rarity:"SSR"
    },
    
    // SSR Confined Space
    {
        name: "Confinement",
        description: "Create an area of confinement with a radius of <strong>7</strong> meters for <strong>10</strong> seconds. Energy pulses within the area, dealing elemental damage equal to <strong>73.4%</strong> of ATK every second, based on the current weapon's element. Targets that touch the edge of the area are afflicted with a <strong>2</strong-second <strong>stun</strong> effect. <strong>240</strong>-second cooldown.",
        awakening: [
            // 1 star
            "Now stun targets for <strong>3</strong> seconds and have a <strong>180</strong>-second cooldown.",
            // 2 star
            "Increase damage dealt by energy pulses by <strong>30%</strong>.",
            // 3 star
            "Reduce cooldown to <strong>120</strong> seconds.",
            // 4 star
            "Increase physical damage by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Trigger an earthquake every <strong>3</strong> seconds, <strong>launching targets into the air</strong>. The waves can be dodged by jumping."
        ],
        pic: "images/gadget/confinedspace.png",
        rarity:"SSR"
    },
    
    // SSR Drone
    {
        name: "Drone",
        description: "Summon a drone for <strong>15</strong> seconds, increase damage reduction by <strong>5%</strong> every <strong>5</strong> seconds. Cooldown: <strong>120</strong> seconds.",
        awakening: [
            // 1 star
            "Grant immunity to control effects for the next <strong>5</strong> seconds.",
            // 2 star
            "Extend duration to <strong>25</strong> seconds.",
            // 3 star
            "Every <strong>5</strong> seconds, additionally grant Wanderers one stack of inspiration, increasing damage dealt by <strong>5%</strong> per stack.",
            // 4 star
            "Reduce volt damage received by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Within Drone's duration, Wanderers gain an attack recovery effect that converts <strong>20%</strong> of damage dealt into HP."
        ],
        pic: "images/gadget/drone.png",
        rarity:"SSR"
    },
    
    // SSR Holographic Projection
    {
        name: "Hologram Projector",
        description: "Project a hologram of the user that recreates their weapon attacks, dealing <strong>50%</strong> of the user's damage. Lasts for <strong>15</strong> seconds. Cooldown: <strong>180</strong> seconds.",
        awakening: [
            // 1 star
            "Extend duration to <strong>20</strong> seconds.",
            // 2 star
            "Increase damage dealt by holograms to <strong>75%</strong> of the Wanderer's damage.",
            // 3 star
            "Tap again to transpose to the hologram's position.",
            // 4 star
            "Increase volt damage by 2%, even if you are not in combat, but not in the peak league (PvP)",
            // 5 star
            "Increase damage dealt by the holograms to <strong>100%</strong> of the Wanderer's damage. Transposing removes control effects."
        ],
        pic: "images/gadget/holographicprojection.png",
        rarity:"SSR"
    },
    
    // SSR Death Suppressor
    {
        name: "Alternate Destiny",
        description: "Generate a pocket dimension for <strong>8</strong> seconds. Allies gain immunity to hitstun effects in the dimension, and HP will not drop below <strong>20%</strong> from enemy attacks. Cooldown: <strong>90</strong> seconds. Leaving the dimension removes all buffs. Once you have spent <strong>8</strong> seconds in the dimension, you cannot be buffed by it for <strong>45</strong> seconds.",
        awakening: [
            // 1 star
            "Allied Wanderers in the dimension recovers <strong>15%</strong> HP <strong>8</strong> seconds later.",
            // 2 star
            "Friendly units in the dimension gain <strong>25%</strong> lifesteal.",
            // 3 star
            "Allied Wanderers in the dimension gain immunity to all mind control.",
            // 4 star
            "Increase frost damage by <strong>2%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Until the Relic disappears, allied Wanderers in the dimension double all lifesteal effects when HP drops to <strong>40%</strong> or below."
        ],
        pic: "images/gadget/deathsuppressor.png",
        rarity:"SSR"
    },
    
    // SSR Counter 2
    {
        name: "Couant 2",
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
        description: "Tap and hold to dash in the direction of the arrow for a short distance before becoming airborne and gliding. Reduce endurance by <strong>10</strong> every second. Cooldown: <strong>120</strong> seconds (gliding is not affected by the cooldown timer). Jetpack can hold up to <strong>2</strong> charges.",
        awakening: [
            // 1 star
            "Replenish 1 charge every <strong>100</strong> seconds. Gliding no longer expends endurance.",
            // 2 star
            "Gliding for longer than 3 seconds empowers the user's next gliding attack to stun the target for 2 seconds.",
            // 3 star
            "Replenish <strong>1</strong> charge every 60 seconds.",
            // 4 star
            "Reduces physical damage received by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Store up to <strong>3</strong> charges."
        ],
        pic: "images/gadget/jetpack.png",
        rarity:"SR"
    },
    
    // SR Quantum Cloak
    {
        name: "Quantum Cloak",
        description: "Enter a quantum state for <strong>10</strong> seconds, during which enemies cannot detect the wearer. The wearer exits quantum state after attacking once. <strong>120</strong-second cooldown.",
        awakening: [
            // 1 star
            "Quantum state lasts for <strong>20</strong> seconds.",
            // 2 star
            "Reduce cooldown to <strong>80</strong> seconds.",
            // 3 star
            "+<strong>100%</strong> damage in Quantum state, negated after <strong>1</strong> successful attack.",
            // 4 star
            "Increase volt damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "+<strong>100%</strong> damage for <strong>3</strong> successful attacks in Quantum state."
        ],
        pic: "images/gadget/quantumcloak.png",
        rarity:"SR"
    },
    
    // SR Floating Ice Cannon
    {
        name: "Hovering Cannon",
        description: "Summon a Hovering Cannon for <strong>20</strong> seconds. <strong>240</strong>-second cooldown. The Hovering Cannon has the skill: Laser Beam, which deals <strong>5.6%</strong> ATK damage to the target each time.",
        awakening: [
            // 1 star
            "Hovering Cannon lasts for <strong>24</strong> seconds.",
            // 2 star
            "Grant the <strong class='text-orange'>Laser Array</strong> skill: Freeze targets after dealing damage to them <strong>4</strong> times in a row. Deal up to <strong>93.2%</strong> ATK damage to the target.",
            // 3 star
            "Reduce cooldown to <strong>150</strong> seconds.",
            // 4 star
            "Increase frost damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Grant the <strong class='text-orange'>Crash</strong> skill: Deal damage to the target equal to <strong>55.9%</strong> of ATK and stun them for <strong>0.5</strong> seconds."
        ],
        pic: "images/gadget/floatingicecannon.png",
        rarity:"SR"
    },
    
    // SR Jet Ski
    {
        name: "Jetboard",
        description: "Dash forward a set distance before gradually slowing down to a halt, dealing damage equal to <strong>380%</strong> of ATK to targets along the way and <strong>launching</strong> them. Can be used <strong>while swimming</strong>. Cooldown: <strong>90</strong> seconds.",
        awakening: [
            // 1 star
            "Gain <strong>10</strong> weapon charge points ever second while gliding.",
            // 2 star
            "Recude charge time to <strong>60</strong> seconds.",
            // 3 star
            "Wayboard collision damage is increased by <strong>100%</strong>, and charge time is reduced to <strong>45</strong> seconds.",
            // 4 star
            "Reduce frost damage received by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Immune to control effects while using Wayboard. Using the Wayboard to attack and hit targets <strong>stuns</strong> them for <strong>5</strong> seconds. Charge time is reduced to <strong>30</strong> seconds."
        ],
        pic: "images/gadget/jetski.png",
        rarity:"SR"
    },
    
    // SR Magnetic Storm
    {
        name: "Magnetic Storm",
        description: "Warp the magnetic field to unleash <strong>1</strong> electric tornado that travels through the battlefield at random for <strong>10</strong> seconds, throwing nearby enemies into the air and dealing damage equal to <strong>186.3%</strong> of ATK every second. Cooldown: <strong>100</strong> seconds.",
        awakening: [
            // 1 star
            "Unleash <strong>2</strong> electric tornadoes.",
            // 2 star
            "Increase tornado damage by <strong>20%</strong>.",
            // 3 star
            "Unleash <strong>3</strong> electric tornadoes.",
            // 4 star
            "Increase volt damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Those caught in tornadoes have a <strong>50%</strong> chance to be disoriented for <strong>3</strong> seconds each time they take damage. Movement direction inputs will also be swapped."
        ],
        pic: "images/gadget/magneticstorm.png",
        rarity:"SR"
    },
    
    // SR Multiple Missile
    {
        name: "Missile Barrage",
        description: "Place a missile launcher behind the user for <strong>8</strong> seconds. Fire multiple missiles at nearby enemies, dealing damage equal to <strong>34.8%</strong> of ATK with each strike. Cooldown: <strong>60</strong> seconds.",
        awakening: [
            // 1 star
            "Fire more missiles every second.",
            // 2 star
            "Increase Missile Barrage damage by <strong>20%</strong>.",
            // 3 star
            "Missile Barrage last for <strong>12</strong> seconds.",
            // 4 star
            "Increase physical damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Launch more missiles after every second."
        ],
        pic: "images/gadget/multiplemissile.png",
        rarity:"SR"
    },
    
    // SR Shielding Robot
    {
        name: "Couant",
        description: "Summon a droid and generate a shield for <strong>5</strong> seconds. The shield disappears after <strong>5</strong> seconds or after being struck once. When it disappears, it knocks back nearby enemies, dealing damage equal to <strong>100%</strong> of ATK + <strong>50</strong>. If broken within <strong>1</strong> second of being created, the shield will stun enemies for <strong>2</strong> seconds. Cooldown: <strong>30</strong> seconds. Shares cooldown with Couant II.",
        awakening: [
            // 1 star
            "When the shield is broken, reduce the speed of the attacker by <strong>35%</strong> for <strong>6</strong> seconds.<br><img class='flag' src='images/cn.svg'> When the shield is broken, reduce the speed of the attacker and nearby enemies by <strong>35%</strong> for <strong>6</strong> seconds.",
            // 2 star
            "After shield breaks, increase final damage by <strong>20%</strong> for <strong>10</strong> seconds.<br><img class='flag' src='images/cn.svg'> After shield breaks, increase final damage equal to the percentage of HP lost with a minimum of <strong>30%</strong>, for <strong>10</strong> seconds.",
            // 3 star
            "After the shield ends (shattered), it increases your movement speed by 30% for 5 seconds.",
            // 4 star
            "Reduce flame damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "if the shield breaks, gain a <strong>5</strong>-second damage reflection effect, reflecting <strong>0.6</strong>x damage taken back at the attacker."
        ],
        pic: "images/gadget/shieldingrobot.png",
        rarity:"SR"
    },
    
    // SR Singularity Magic Cube
    {
        name: "Strange Cube",
        description: "Use the cube to alter the surrounding gravity, dealing damage equal to <strong>100%</strong> of ATK to enemies and suspending them in midair. Afterwards, dealing damage equal to <strong>120%</strong> of ATK. Cooldown: <strong>30</strong> seconds.",
        awakening: [
            // 1 star
            "Activating the Strange Cube increases damage dealt by <strong>10%</strong> for <strong>10</strong> seconds.",
            // 2 star
            "After activating a Strange Cube, reduce weapon charge of nearby enemies by <strong>200</strong>.",
            // 3 star
            "Increase Strange Cube's uses to <strong>2</strong>",
            // 4 star
            "Increase volt damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "After activating the Strange Cube, gain weapon charge based on HP lost. For every <strong>1%</strong> of HP lost, gain <strong>10</strong> weapon charge."
        ],
        pic: "images/gadget/singularitymagiccube.png",
        rarity:"SR"
    },
    
    // SR Atomic Hand Cannon
    {
        name: "Omnium Handcannon",
        description: "Launch <strong>1</strong> Omnium bomb at target location and create a scalable energy pillar upon striking the ground or water surface for up to <strong>20</strong> seconds. Cooldown: <strong>50</strong> seconds. Maximum <strong>2</strong> charges.",
        awakening: [
            // 1 star
            "Increase duration of energy pillars to <strong>30</strong> seconds.",
            // 2 star
            "Increase endurance regen speed by 30% for <strong>20</strong> seconds after switching to the Omnium Handcannon.",
            // 3 star
            "Stores up to <strong>3</strong> charges.",
            // 4 star
            "Increase flame damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Reduce charge time to <strong>40</strong> seconds."
        ],
        pic: "images/gadget/atomichandcannon.png",
        rarity:"SR"
    },
    
    // SR Lava Grenade
    {
        name: "Lava Bomb",
        description: "Toss a Lava Bomb at a target location, dealing damage equal to <strong>567%</strong> of ATK and launching the target <strong>into the air</strong>. Cooldown: <strong>45</strong> seconds.",
        awakening: [
            // 1 star
            "<strong>Stun</strong> targets for <strong>2</strong> seconds on hit, and ignite them.",
            // 2 star
            "Increase blast radius by <strong>50%</strong>.",
            // 3 star
            "Reduce cooldown to <strong>30</strong> seconds.",
            // 4 star
            "Increase flame damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "<strong>Stun</strong> targets for <strong>3</strong> seconds on hit and burn their endurance for <strong>10</strong> seconds, causing targets to lose <strong>100</strong> endurance after every ability use."
        ],
        pic: "images/gadget/lavagrenade.png",
        rarity:"SR"
    },
    
    // SR Mechanical Arm
    {
        name: "Cybernetic Arm",
        description: "Launch a Cybernetic Arm to pull selected target to you, or you to the target. Deal <strong>100%</strong> damage on hit, and <strong>strongly suspend</strong> the target, then launch the target into the air (or idle the target if unable). Also regenerate weapon charge by <strong>300</strong>. Can be used to access hard-to-reach areas, and hold up to <strong>2</strong> charges at a time. Regain <strong>1</strong> charge every <strong>30</strong> seconds.",
        awakening: [
            // 1 star
            "Produce an EM shield that reduces damage taken by <strong>20%</strong> for 7 seconds.",
            // 2 star
            "Regain <strong>1</strong> charge every <strong>15</strong> seconds.",
            // 3 star
            "Store up to <strong>3</strong> charges.",
            // 4 star
            "Increase frost damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Reduce final damage of targets hit by <strong>30%</strong> for <strong>7</strong> seconds."
        ],
        pic: "images/gadget/mechanicalarm.png",
        rarity:"SR"
    },
    
    // SR Magneto Pulse
    {
        name: "Magnetic Pulse",
        description: "Detonate a Magnetic Bomb, dealing volt damage equal to <strong>38.8%</strong> of ATK and <strong>launching</strong> targets. Grant the user immunity to hitstun for <strong>5</strong> seconds, Cooldown: <strong>35</strong> seconds.",
        awakening: [
            // 1 star
            "Can be used while under control effects.",
            // 2 star
            "Grant immunity to control effects for the next <strong>5</strong> seconds.",
            // 3 star
            "Hitting the target and planting a <strong>7</strong>-second Magnetic Bomb detonates if the target uses normal attacks/dodges/skills, causing <strong>40%</strong> slowdown for <strong>5</strong> seconds, and disappears after detonation.",
            // 4 star
            "Reduce volt damage by <strong>1.5%</strong>, even if not deployed. Unavailable in Apex League.",
            // 5 star
            "Detonating the Magnetic Bomb removes all current buffs from the target."
        ],
        pic: "images/gadget/magnetopulse.png",
        rarity:"SR"
    }
    
]

var mushroom = {
    name: 'Mushroom',
    imgSrc: 'mushroom.png',
    rarity: 1,
    source: "Found on Astra (around giant mushrooms) and in Crown"
};
var silverperch = {
    name: 'Silver Bass',
    imgSrc: 'silverperch.png',
    rarity: 1,
    source: 'Found in rivers'
}
var wheat = {
    name: 'Homi Grain',
    imgSrc: 'wheat.png',
    rarity: 1,
    source: 'Found on Astra (meadows) and Banges (meadows)'
}
var meat = {
    name: 'Game Meat',
    imgSrc: 'meat.png',
    rarity: 1,
    source: 'Obtained by hunting wild animals'
}
var lettuce = {
    name: 'Lettuce',
    imgSrc: 'lettuce.png',
    rarity: 1,
    source: 'Found on Astra (meadows)'
}
var dressing = {
    name: 'Salad Dressing',
    imgSrc: 'dressing.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var egg = {
    name: 'Poultry Egg',
    imgSrc: 'egg.png',
    rarity: 1,
    source: 'Found in bird nests (high elevations)'
}
var seaweed = {
    name: 'Laver',
    imgSrc: 'seaweed.png',
    rarity: 2,
    source: 'Found in Banges (North Sea Beach)'
}
var milk = {
    name: 'Milk',
    imgSrc: 'milk.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var drumstick = {
    name: 'Poultry Meat',
    imgSrc: 'drumstick.png',
    rarity: 1,
    source: 'Obtained by hunting birds'
}
var rice = {
    name: 'Rice',
    imgSrc: 'rice.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var tomato = {
    name: 'Thornmato',
    imgSrc: 'tomato.png',
    rarity: 2,
    source: 'Found on Astra (around alpine shrubs) and in Navia (around trees)'
}
var hornedconch = {
    name: 'Conch',
    imgSrc: 'hornedconch.png',
    rarity: 2,
    source: 'Found in Bangis (South Sea Beach) and Navia (beach)'
}
var potato = {
    name: 'Potato',
    imgSrc: 'potato.png',
    rarity: 2,
    source: 'Found in Banges (around bushes)'
}
var fruitdrop = {
    name: 'Fallen Fruit',
    imgSrc: 'fruitdrop.png',
    rarity: 2,
    source: 'Found on Astra (around trees) and in Banges (around trees)'
}
var honey = {
    name: 'Honey',
    imgSrc: 'honey.png',
    rarity: 2,
    source: 'Obtained from hives and bees'
}
var ghostmushroom = {
    name: 'Ghost Mushroom',
    imgSrc: 'ghostmushroom.png',
    rarity: 2,
    source: 'Found on Astra (Keel, Graveyard)'
}
var broccoli = {
    name: 'Broccoli',
    imgSrc: 'broccoli.png',
    rarity: 2,
    source: 'Found on Astra (meadows)'
}
var dandelion = {
    name: 'Dandelion Seed',
    imgSrc: 'dandelion.png',
    rarity: 1,
    source: 'Obtained from dandelion pom-poms'
}
var sturgeon = {
    name: "Darby's Sturgeon",
    imgSrc: 'sturgeon.png',
    rarity: 2,
    source: 'Found in rivers of Astra, Navia, and Warren'
}
var redwheat = {
    name: 'Brown Rice',
    imgSrc: 'redwheat.png',
    rarity: 2,
    source: 'Found in Navia (meadows)'
}
var fireear = {
    name: 'Firecap',
    imgSrc: 'fireear.png',
    rarity: 2,
    source: 'Found in Crown'
}
var blackmoss = {
    name: 'Black Moss',
    imgSrc: 'blackmoss.png',
    rarity: 2,
    source: 'Found in Crown'
}
var seaconch = {
    name: 'Scallop',
    imgSrc: 'seaconch.png',
    rarity: 3,
    source: 'Found in Banges (South Sea Beach)'
}
var hindleg = {
    name: 'Rear Hock',
    imgSrc: 'hindleg.png',
    rarity: 3,
    source: 'Obtained by hunting rabbits, mountain hares, boars, bears, wolves, and honey badgers'
}
var shuttlecrab = {
    name: 'Portunid',
    imgSrc: 'shuttlecrab.png',
    rarity: 3,
    source: 'Found on the beaches of Astra, Banges, and Crown'
}
var strawberry = {
    name: 'Strawberry',
    imgSrc: 'strawberry.png',
    rarity: 3,
    source: 'Found in Navia (around bushes)'
}
var blueberry = {
    name: 'Small Blueberry Jar',
    imgSrc: 'blueberry.png',
    rarity: 3,
    source: 'Obtained from defeating the Sons of Aida (robotic enemies)'
}
var sparklingwater = {
    name: 'Carbonated Water',
    imgSrc: 'sparklingwater.png',
    rarity: 1,
    source: 'Purchased at food vendor'
}
var seaurchin = {
    name: 'Sea Urchin',
    imgSrc: 'seaurchin.png',
    rarity: 3,
    source: 'Found in Banges (North Sea Beach) and Crown (beach)'
}
var spinach = {
    name: 'Fiddlehead',
    imgSrc: 'spinach.png',
    rarity: 3,
    source: 'Found near the Banges factory'
}
var cocoabeans = {
    name: 'Cocoa Beans',
    imgSrc: 'cocoabeans.png',
    rarity: 3,
    source: 'Found in Navia (Minyu Island)'
}
var balloonfruit = {
    name: 'Balloon Fruit',
    imgSrc: 'balloonfruit.png',
    rarity: 3,
    source: 'Found on Astra and in Navia'
}
var thundereel = {
    name: 'Electric Eel',
    imgSrc: 'thundereel.png',
    rarity: 3,
    source: 'Found in the rivers of Banges, Navia, and Warren'
}
var hermitcrab = {
    name: 'Hermit Crab',
    imgSrc: 'hermitcrab.png',
    rarity: 3,
    source: 'Found on the beaches of Banges, Navia, and Crown'
}
var pomegranate = {
    name: 'Phosphogranate',
    imgSrc: 'pomegranate.png',
    rarity: 3,
    source: 'Found in Navia (around rocks)'
}
var dragonfruit = {
    name: 'Firedragon Fruit',
    imgSrc: 'dragonfruit.png',
    rarity: 3,
    source: 'Found near rivers in Navia and Crown'
}
var barnacle = {
    name: 'Barnacle',
    imgSrc: 'barnacle.png',
    rarity: 3,
    source: 'Found near the sea in Warren'
}
var onion = {
    name: 'Onion',
    imgSrc: 'onion.png',
    rarity: 3,
    source: 'Purchased at food vendor'
}
var snowblossom = {
    name: 'Snow Azalea',
    imgSrc: 'snowblossom.png',
    rarity: 3,
    source: 'Found in Warren'
}
var pinecone = {
    name: 'Pinecone',
    imgSrc: 'pinecone.png',
    rarity: 3,
    source: 'Found in Warren (around pine trees)'
}
var caviar = {
    name: 'Caviar',
    imgSrc: 'caviar.png',
    rarity: 3,
    source: 'Obtained from raider camp enemies'
}
var nut = {
    name: 'Hazelnut',
    imgSrc: 'nut.png',
    rarity: 4,
    source: 'Found in Navia'
}
var birdpotato = {
    name: "Purple Yam",
    imgSrc: 'birdpotato.png',
    rarity: 4,
    source: 'Found in Warren'
}
var snowlotus = {
    name: 'Snow Lotus',
    imgSrc: 'snowlotus.png',
    rarity: 4,
    source: 'Found in Warren'
}
var blacktruffle = {
    name: 'Black Truffle',
    imgSrc: 'blacktruffle.png',
    rarity: 4,
    source: 'Found in Warren'
}
var cordyceps = {
    name: 'Caterpillar Fungus',
    imgSrc: 'cordyceps.png',
    rarity: 4,
    source: 'Found in Warren'
}
var firmmeat = {
    name: 'Prime Cut',
    imgSrc: 'firmmeat.png',
    rarity: 4,
    source: 'Obtained by hunting wild animals'
}
var fattymeat = {
    name: 'Fatty Cut',
    imgSrc: 'fattymeat.png',
    rarity: 4,
    source: 'Obtained by hunting wild animals'
}
var salmon = {
    name: 'Lake Bass',
    imgSrc: 'salmon.png',
    rarity: 4,
    source: 'Found in rivers in Crown and Warren'
}
var snail = {
    name: 'Carrion Snail',
    imgSrc: 'snail.png',
    rarity: 4,
    source: 'Found in Navia (beach)'
}

var food = [
    {
        id: 0,
        name: 'Fried Mushrooms',
        imgSrc: 'friedmushroom.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <strong>5</strong> satiety<br>Recovers <strong>10% + 1,500</strong> HP',
        ingredients: [
            [mushroom, 2]
        ]
    },
    {
        id: 1,
        name: 'Crispy Grilled Fish',
        imgSrc: 'crispygrilledfish.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety',
        ingredients: [
            [silverperch, 1]
        ]
    },
    {
        id: 2,
        name: 'Wholegrain Bread',
        imgSrc: 'wheatbread.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety',
        ingredients: [
            [wheat, 2]
        ]
    },
    {
        id: 3,
        name: 'Sizzling Meat',
        imgSrc: 'sizzledbarbecuedmeat.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety',
        ingredients: [
            [meat, 2]
        ]
    },
    {
        id: 4,
        name: 'Lettuce Salad',
        imgSrc: 'lettucesalad.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <strong>5</strong> satiety<br>Recovers <strong>10% + 1,500</strong> HP',
        ingredients: [
            [lettuce, 2],
            [dressing, 1]
        ]
    },
    {
        id: 5,
        name: 'Fried Egg',
        imgSrc: 'friedegg.png',
        rarity: 1,
        stars: 1,
        effect: 'Recovers <strong>5</strong> satiety<br>Recovers <strong>10% + 1,500</strong> HP',
        ingredients: [
            [egg, 2]
        ]
    },
    {
        id: 6,
        name: 'Seaweed and Egg Soup',
        imgSrc: 'vegetableeggsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [seaweed, 2],
            [egg, 1]
        ]
    },
    {
        id: 7,
        name: 'Breakfast Cereal',
        imgSrc: 'milkoat.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>14</strong> satiety',
        ingredients: [
            [wheat, 2],
            [milk, 1]
        ]
    },
    {
        id: 8,
        name: 'Crispy Chicken Burger',
        imgSrc: 'crispychickendrumstickburger.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [wheat, 1],
            [drumstick, 1],
            [lettuce, 1]
        ]
    },
    {
        id: 9,
        name: 'Egg Fried Rice',
        imgSrc: 'eggfriedrice.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>14</strong> satiety',
        ingredients: [
            [rice, 2],
            [egg, 1]
        ]
    },
    {
        id: 10,
        name: 'Golden Egg and Tomato',
        imgSrc: 'goldenchoppedtomato.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [tomato, 2],
            [egg, 2]
        ]
    },
    {
        id: 11,
        name: 'Mushroom Soup',
        imgSrc: 'mushroomsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [mushroom, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 12,
        name: 'Steamed Conch',
        imgSrc: 'steamedsnails.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [hornedconch, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 13,
        name: 'Meat and Potato Stew',
        imgSrc: 'potatostew.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>14</strong> satiety',
        ingredients: [
            [potato, 1],
            [meat, 1]
        ]
    },
    {
        id: 14,
        name: 'Fries',
        imgSrc: 'frenchfries.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>14</strong> satiety',
        ingredients: [
            [potato, 1],
            [dressing, 1]
        ]
    },
    {
        id: 15,
        name: 'Vegetable Salad',
        imgSrc: 'vegetablesalad.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [fruitdrop, 1],
            [tomato, 1],
            [lettuce, 1],
            [dressing, 1]
        ]
    },
    {
        id: 16,
        name: 'Fried Chicken',
        imgSrc: 'friedchicken.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [drumstick, 2],
            [wheat, 1]
        ]
    },
    {
        id: 17,
        name: 'Honeyed Fruit Juice',
        imgSrc: 'honeyfruitjuice.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>300</strong> stamina<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [fruitdrop, 2],
            [honey, 1],
            [sparklingwater, 1]
        ]
    },
    {
        id: 18,
        name: 'Iced Orchid Surprise',
        imgSrc: 'cocktail.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>300</strong> stamina<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [ghostmushroom, 2],
            [milk, 1],
            [sparklingwater, 1]
        ]
    },
    {
        id: 19,
        name: 'Stir-Fried Broccoli',
        imgSrc: 'stirfriedbroccoli.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>14</strong> satiety',
        ingredients: [
            [broccoli, 2]
        ]
    },
    {
        id: 20,
        name: 'Meat Bun',
        imgSrc: 'meatbuns.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>14</strong> satiety',
        ingredients: [
            [wheat, 2],
            [meat, 1]
        ]
    },
    {
        id: 21,
        name: 'Sliced Fish with Mushroom',
        imgSrc: 'mushroomfillet.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [mushroom, 2],
            [silverperch, 1]
        ]
    },
    {
        id: 22,
        name: 'Dandelion Mushroom Soup',
        imgSrc: 'dandelionmushroomsoup.png',
        rarity: 2,
        stars: 1,
        effect: 'Recovers <strong>7</strong> satiety<br>Recovers <strong>12% + 3,300</strong> HP',
        ingredients: [
            [dandelion, 1],
            [mushroom, 2]
        ]
    },
    {
        id: 23,
        name: 'Surf and Turf',
        imgSrc: 'pearlfish.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <strong>8</strong> satiety<br>Recovers <strong>13% + 10,000</strong> HP',
        ingredients: [
            [sturgeon, 1],
            [egg, 2]
        ]
    },
    {
        id: 24,
        name: 'Red Wheat Bread',
        imgSrc: 'redwheatbread.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <strong>16</strong> satiety',
        ingredients: [
            [redwheat, 2]
        ]
    },
    {
        id: 25,
        name: 'Firecap Mushroom Soup',
        imgSrc: 'fireearmushroomsoup.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <strong>400</strong> stamina<br>Recovers <strong>13% + 10,000</strong> HP',
        ingredients: [
            [fireear, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 26,
        name: 'Black Moss Soup',
        imgSrc: 'blackmosssoup.png',
        rarity: 2,
        stars: 2,
        effect: 'Recovers <strong>8</strong> satiety<br>Recovers <strong>13% + 10,000</strong> HP',
        ingredients: [
            [blackmoss, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 27,
        name: 'Seafood Soup',
        imgSrc: 'seafoodsoup.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Ice Damage +1%<br>
            Ice Damage +45</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [hornedconch, 3],
            [seaconch, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 28,
        name: 'Spicy Burger',
        imgSrc: 'spicythickmeatburger.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Physical Damage +1%<br>
            Physical Damage +45</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [wheat, 3],
            [hindleg, 2],
            [lettuce, 1]
        ]
    },
    {
        id: 29,
        name: 'Steamed Crab',
        imgSrc: 'steamedcrab.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>15% + 20,000</strong> HP',
        ingredients: [
            [shuttlecrab, 2],
            [lettuce, 2]
        ]
    },
    {
        id: 30,
        name: 'Iced Strawberry Soda',
        imgSrc: 'strawberryicedsoda.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Fire Resistance +10%<br>
            Fire Resistance +170</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [strawberry, 2],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 31,
        name: 'Thundercloud Blueberry Soda',
        imgSrc: 'lightningblueberrysoda.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Electric Resistance +10%<br>
            Electric Resistance +170</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [blueberry, 1],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 32,
        name: 'Simple Power Salad',
        imgSrc: 'energysalad.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Physical Resistance +10%<br>
            Physical Resistance +170</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [broccoli, 1],
            [tomato, 1],
            [lettuce, 1],
            [egg, 1],
            [dressing, 1]
        ]
    },
    {
        id: 33,
        name: 'Steamed Egg with Sea Urchin',
        imgSrc: 'seaurchinomelette.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>15% + 20,000</strong> HP',
        ingredients: [
            [seaurchin, 2],
            [egg, 2]
        ]
    },
    {
        id: 34,
        name: 'Jam on Toast',
        imgSrc: 'doubleberrysaucetoast.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Electric Damage +1%<br>
            Electric Damage +45</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [blueberry, 1],
            [strawberry, 1],
            [wheat, 3]
        ]
    },
    {
        id: 35,
        name: 'Tomato and Fried Egg Pasta',
        imgSrc: 'tomatospaghettiomelette.png',
        rarity: 3,
        stars: 1,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Fire Damage +1%<br>
            Fire Damage +45</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [tomato, 4],
            [wheat, 3],
            [egg, 1]
        ]
    },
    {
        id: 36,
        name: 'Fruit Cake',
        imgSrc: 'fruitcake.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>15% + 20,000</strong> HP',
        ingredients: [
            [strawberry, 2],
            [wheat, 1],
            [fruitdrop, 1],
            [egg, 1]
        ]
    },
    {
        id: 37,
        name: 'Boiled Scallops',
        imgSrc: 'boiledseaconch.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>15% + 20,000</strong> HP',
        ingredients: [
            [seaconch, 2],
            [lettuce, 3]
        ]
    },
    {
        id: 38,
        name: 'Roast Rump',
        imgSrc: 'roastedham.png',
        rarity: 3,
        stars: 1,
        effect: 'Recovers <strong>500</strong> stamina<br>Recovers <strong>15% + 20,000</strong> HP',
        ingredients: [
            [hindleg, 2]
        ]
    },
    {
        id: 39,
        name: 'Fiddlehead Pie',
        imgSrc: 'spinachpie.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [spinach, 2],
            [redwheat, 2]
        ]
    },
    {
        id: 40,
        name: 'Chocolate Bread',
        imgSrc: 'chocolatebun.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [cocoabeans, 2],
            [redwheat, 2]
        ]
    },
    {
        id: 41,
        name: 'Balloon Fruit Salad',
        imgSrc: 'balloonfruitsalad.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [balloonfruit, 2],
            [tomato, 2],
            [dressing, 1]
        ]
    },
    {
        id: 42,
        name: 'Fiddlehead Soup',
        imgSrc: 'spinachsoup.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [spinach, 2],
            [lettuce, 4]
        ]
    },
    {
        id: 43,
        name: 'Spicy Eel',
        imgSrc: 'spicyeel.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Electric Resistance +10%<br>
            Electric Resistance +290</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [thundereel, 1]
        ]
    },
    {
        id: 44,
        name: 'Eel and Mushroom Soup',
        imgSrc: 'mushroomeelsoup.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Electric Damage +1%<br>
            Electric Damage +80</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [thundereel, 1],
            [fireear, 2]
        ]
    },
    {
        id: 45,
        name: 'Sea Crab Soup',
        imgSrc: 'seacrabsoup.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Fire Resistance +10%<br>
            Fire Resistance +290</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [hermitcrab, 2],
            [mushroom, 4]
        ]
    },
    {
        id: 46,
        name: 'Sweet Pomegranate Juice',
        imgSrc: 'sweetpomegranatejuice.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>600</strong> stamina<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [pomegranate, 2],
            [honey, 2],
            [sparklingwater, 1]
        ]
    },
    {
        id: 47,
        name: 'Cocoa Milk',
        imgSrc: 'cocoamilk.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Ice Resistance +10%<br>
            Ice Resistance +290</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [cocoabeans, 2],
            [honey, 2],
            [milk, 1]
        ]
    },
    {
        id: 48,
        name: 'Firedragon Fruit Tea',
        imgSrc: 'dragonfruittea.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Fire Damage +1%<br>
            Fire Damage +80</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [dragonfruit, 2],
            [honey, 2]
        ]
    },
    {
        id: 49,
        name: 'Barnacle Stew',
        imgSrc: 'barnaclestew.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Physical Resistance +10%<br>
            Physical Resistance +290</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [barnacle, 2],
            [lettuce, 4]
        ]
    },
    {
        id: 50,
        name: 'Barnacle Seafood Pizza',
        imgSrc: 'barnacleseafoodpizza.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [barnacle, 1],
            [redwheat, 2],
            [onion, 1]
        ]
    },
    {
        id: 51,
        name: 'Snow Azalea Tea',
        imgSrc: 'snowcuckootea.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Ice Damage +1%<br>
            Ice Damage +80</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [snowblossom, 1],
            [milk, 1],
            [honey, 2]
        ]
    },
    {
        id: 52,
        name: 'Pine Cocoa',
        imgSrc: 'pinenutcocoa.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [pinecone, 1],
            [cocoabeans, 1],
            [milk, 2]
        ]
    },
    {
        id: 53,
        name: 'Caviar Sushi',
        imgSrc: 'caviarsushi.png',
        rarity: 3,
        stars: 2,
        effect: 'Recovers <strong>10</strong> satiety<br>Recovers <strong>16% + 34,000</strong> HP',
        ingredients: [
            [caviar, 1],
            [rice, 2],
            [seaweed, 2]
        ]
    },
    {
        id: 54,
        name: 'Caviar Potato Balls',
        imgSrc: 'caviarpotatoballs.png',
        rarity: 3,
        stars: 2,
        effect: `
            Recovers <strong>10</strong> satiety<br>
            <strong>Physical Damage +1%<br>
            Physical Damage +80</strong><br>
            Duration <strong>900</strong> sec`,
        ingredients: [
            [caviar, 1],
            [potato, 2]
        ]
    },
    {
        id: 55,
        name: 'Nut Tea',
        imgSrc: 'nuttea.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers <strong>20</strong> satiety<br>Recovers <strong>20% + 60,000</strong> HP',
        ingredients: [
            [nut, 1],
            [pinecone, 2],
            [honey, 2]
        ]
    },
    {
        id: 56,
        name: "Purple Yam Pie",
        imgSrc: 'birdsheadpotatocake.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Electric Damage +2%<br>
            Electric Damage +150</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [birdpotato, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 57,
        name: 'Snow Lotus Soup',
        imgSrc: 'snowlotussoup.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers <strong>800</strong> stamina<br>Recovers <strong>20% + 60,000</strong> HP',
        ingredients: [
            [snowlotus, 1],
            [honey, 2]
        ]
    },
    {
        id: 58,
        name: 'Truffle Fried Rice',
        imgSrc: 'trufflefriedrice.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Physical Damage +2%<br>
            Physical Damage +150</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [blacktruffle, 1],
            [onion, 1],
            [rice, 2]
        ]
    },
    {
        id: 59,
        name: 'Catepillar Fungus Noodles',
        imgSrc: 'cordycepsnoodles.png',
        rarity: 4,
        stars: 2,
        effect: 'Recovers <strong>20</strong> satiety<br>Recovers <strong>20% + 60,000</strong> HP',
        ingredients: [
            [cordyceps, 1],
            [redwheat, 3]
        ]
    },
    {
        id: 60,
        name: 'Grilled Steak',
        imgSrc: 'barbequesteak.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Electric Resistance +15%<br>
            Electric Resistance +675</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [firmmeat, 1]
        ]
    },
    {
        id: 61,
        name: 'Steak w/ Sauce',
        imgSrc: 'mushroomsteak.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Fire Damage +2%<br>
            Fire Damage +150</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [firmmeat, 1],
            [fireear, 3]
        ]
    },
    {
        id: 62,
        name: 'Braised Meat',
        imgSrc: 'braisedpork.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Ice Resistance +15%<br>
            Ice Resistance +675</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [fattymeat, 1]
        ]
    },
    {
        id: 63,
        name: 'Juicy BLT',
        imgSrc: 'juicymeatsandwich.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Fire Resistance +15%<br>
            Fire Resistance +675</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [fattymeat, 1],
            [redwheat, 2],
            [egg, 2]
        ]
    },
    {
        id: 64,
        name: 'Salmon Sashimi',
        imgSrc: 'salmonsashimi.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Ice Damage +2%<br>
            Ice Damage +150</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [salmon, 1]
        ]
    },
    {
        id: 65,
        name: 'Snail Baked Rice',
        imgSrc: 'snailbakedrice.png',
        rarity: 4,
        stars: 2,
        effect: `
            Recovers <strong>20</strong> satiety<br>
            <strong>Physical Resistance +15%<br>
            Physical Resistance +675</strong><br>
            Duration <strong>1200</strong> sec`,
        ingredients: [
            [snail, 1],
            [rice, 2]
        ]
    }
]