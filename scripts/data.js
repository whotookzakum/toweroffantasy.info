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
            "Increase damage progressively by <strong>1%</strong> upon hitting a target. Stack up to <strong>10/13/16/20</strong> times. Lasts <strong>1.5</strong> seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase damage progressively by <strong>1.5%</strong> upon hitting a target. Stack up to <strong>10/13/16/20</strong> times. Lasts <strong>2</strong> seconds.",
            // 4 set
            "Increase Dual EM Stars' electrical explosion damage by <strong>16%/22%/30%/40%</strong> of ATK.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Adds an extra hit to the locked on target for every attack for <strong>10%/12.5%/15%/17.5%</strong> damage (can not crit)."
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
        ],
        skills: [
            {
                name: "Dual Fire",
                type: "normal",
                desc: "While on the ground, tap normal attack to attack 5 times in a row.<br>First Attack: Deal total damage equal to <strong>47.1%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal total damage equal to <strong>35.8%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal total damage equal to <strong>119.7%</strong> of ATK + <strong>6</strong>.<br>Fourth Attack: Deal total damage equal to <strong>113.1%</strong> of ATK + <strong>6</strong>.<br>Fifth Attack: Deal total damage equal to <strong>154%</strong> of ATK + <strong>8</strong> and <strong>launch</strong> the target."
            },
            {
                name: "Bullet Rain",
                type: "normal",
                desc: "While airborne, tap normal attack to fire continuously at the ground, dealing damage equal to ??% of ATK + ?? each hit. Consumes 150 Endurance."
            },
            {
                name: "Energy Burst",
                type: "normal",
                desc: "Hold attack button to maintain constant fire, each hit dealing <strong>23%</strong> x ATK + <strong>1</strong> base damage."
            },
            {
                name: "Phantom Kick",
                type: "normal",
                desc: "While airborne, tap and hold normal attack to trigger Phantom Kick. Knock the target down and deal damage equal to <strong>70.5%</strong> of ATK + <strong>4</strong>. Upon landing, deal damage equal to <strong>98.7%</strong> of ATK + <strong>5</strong> to nearby targets and <strong>launch</strong> them."
            },
            {
                name: "Rising Lightning Kick",
                type: "dodge",
                desc: "Tap normal attack after dodging to <strong>knock targets into the air</strong> and deal damage equal to <strong>122.6%</strong> of ATK + <strong>6</strong>."
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for <strong>0.5</strong> seconds while dodging."
            },
            {
                name: "Electro Field",
                type: "skill",
                desc: "Fire an energy field at the target location, reflecting beams within the barrier. Deal damage equal to <strong>269.8%</strong> of ATK + <strong>14</strong>, and the last hit launches targets <strong>into the air</strong>. <strong>45</strong>-second cooldown."
            },
            {
                name: "Domain of Thunder",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong>, and create a Domain of Thunder at the target location upon switching to this weapon, dealing a total of <strong>238.3%</strong> of ATK + <strong>13</strong> damage over 3 attacks to enemies <strong>within the area</strong> and dispelling their buffs. The domain lasts for <strong>3.5</strong> seconds and deals damage equal to <strong>42.4%</strong> of ATK + <strong>2</strong> to a target every <strong>0.5</strong> seconds."
            }
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
            "Increase healing capability and healing received by <strong>8%/10%/12%/14%</strong>.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase healing capability and healing received by <strong>10%/12%/14%/16%</strong>.",
            // 4 set
            "When you or your teammates are healed, increase ATK by <strong>10%/12.5%/15%/17.5%</strong> for <strong>2</strong> seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> When you or your teammates are healed, increase ATK by <strong>12.5%/15%/17.5%/20%</strong> for <strong>6</strong> seconds."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Coco Ritter"',
            // 600 affinity
            "Unlock communication [Some Memories]",
            // 1200 affininty
            "When Cocoritter uses a support weapon, increase healing effects she inflicts on others and receives by <strong>20%</strong>.",
            // 2000 affinity
            "Unlock communication [Some Obsessions]",
            // 3000 affinity
            "Unlock communication [Some Companionship]",
            // 4000 affinity
            "When Cocoritter uses a support type weapon, the effects of healing and receiving healing are increased by <strong>20%</strong>, and when the discharge skills or weapon skills of the support-type weapon are used, the ATK of the friendly armies around you will increase by <strong>15%</strong> and lasts for <strong>5</strong> seconds."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "While on the ground, swing the staff to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>41.9%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal damage equal to <strong>31.4%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal damage equal to <strong>50.6%</strong> of ATK + <strong>3</strong>.<br>Fourth Attack: Deal damage equal to <strong>69%</strong> of ATK + <strong>4</strong>.<br>Fifth Attack: Deal damage equal to <strong>122%</strong> of ATK + <strong>6</strong>."
            },
            {
                name: "Focused Assault",
                type: "normal",
                desc: "After the third normal attack, hold the normal attack button to trigger branch attacks, consuming <strong>300</strong> points of endurance.<br>First Attack: Pull in enemies in front of the user, knocking them <strong>into the air</strong> and dealing damage equal to <strong>26.8%</strong> of ATK + <strong>1</strong> every <strong>0.3</strong> seconds (up to <strong>4</strong> times).<br>Second Attack: Deal damage equal to <strong>31.1%</strong> of ATK + <strong>2</strong> at the target location and to nearby enemies every <strong>0.3</strong> seconds."
            },
            {
                name: "Soaring Barrage",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>54.2%</strong> of ATK + <strong>3</strong>.<br>Second Attack: Deal damage equal to <strong>39.1%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal damage equal to <strong>42.4%</strong> of ATK + <strong>2</strong>.<br>Fourth Attack: Deal damage equal to <strong>76.2%</strong> of ATK + <strong>4</strong>.<br>Fifth Attack: Deal damage equal to <strong>79.4%</strong> of ATK + <strong>4</strong>.",
            },
            {
                name: "Moonfall",
                type: "normal",
                desc: "Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every <strong>0.2</strong> seconds, for a total of <strong>95.2%</strong> of ATK + <strong>5</strong> damage.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Surge",
                type: "dodge",
                desc: "Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to <strong>35.3%</strong> of ATK + <strong>2</strong> to targets. Grant <strong>75</strong> weapon charge points upon use.",
            },
            {
                name: "Tesseract",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to <strong>51.1%</strong> of ATK + <strong>3</strong> to targets in its path every <strong>0.3</strong> seconds (up to 5 times). Grant <strong>75</strong> weapon charge points upon use.",
            },
            {
                name: "Sanctuary",
                type: "skill",
                desc: "Create a healing zone that moves with the Wanderer and heals nearby allies for <strong>95%</strong> of ATK + <strong>5</strong> once every <strong>0.5</strong> seconds for <strong>6</strong> seconds. <strong>60</strong>-second cooldown.",
            },
            {
                name: "Swift Deliverance",
                type: "discharge",
                desc: "When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon <strong>removes all debuffs from the wielder</strong>, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for <strong>118.8%</strong> x ATK + <strong>6</strong> HP for <strong>7</strong> seconds.",
            }
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
            "When a target is shattered, grant <strong>8%/10%/12%/14%</strong> damage boost for <strong>25</strong> seconds. Only the highest level is applied when the effect is obtained repeatedly.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> For every 10% of shield broken, gain a <strong>4%/5%/6%/7%</strong> damage buff, up to <strong>3</strong> stacks, lasting <strong>25</strong> seconds.",
            // 4 set
            "When there are more than 2 enemies around, hits restore HP equal to <strong>10%/12%/13%/14%</strong> of damage dealt upon attacking. The maximum HP restored every <strong>0.5</strong> seconds must not exceed <strong>30%/33%/34.5%/36%</strong> of ATK.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> When there are more than 2 enemies around, hits restore HP equal to <strong>14%/18%/22%/26%</strong> of damage dealt upon attacking. The maximum HP restored every <strong>0.5</strong> seconds must not exceed <strong>36%/42%/48%/54%</strong> of ATK."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "KING"',
            // 600 affinity
            "Unlock communication [Trading Fiction]",
            // 1200 affininty
            "Every <strong>7</strong> enemies killed by KING restores HP equal to <strong>8%</strong> of Max HP.",
            // 2000 affinity
            "Unlock communication [Peer-to-peer Contract]",
            // 3000 affinity
            "Unlock communication [Betting]",
            // 4000 affinity
            "Every <strong>5</strong> enemies killed by KING restores HP equal to <strong>10%</strong> of Max HP."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "While on the ground, swing the scythe to launch 5 consecutive attacks.<br>First Attack: Deal damage equal to <strong>51.9%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>44.7%</strong> of ATK + <strong>2</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>97.2%</strong> of ATK + <strong>5</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>99.6%</strong> of ATK + <strong>5</strong> and knock the target back a short distance.<br>Fifth Attack: Deal damage equal to <strong>94.7%</strong> of ATK + <strong>5</strong>, knock the target <strong>into the air</strong>, and cause the Wanderer to go airborne.",
            },
            {
                name: "Rising Scythe",
                type: "normal",
                desc: "While airborne or after jumping once, attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>57.6%</strong> of ATK + <strong>3</strong>.<br>Second Attack: Deal damage equal to <strong>62.6%</strong> of ATK + <strong>3</strong>.<br>Third Attack: Deal damage equal to <strong>173%</strong> of ATK + <strong>9</strong>.<br>Fourth Attack: Deal damage equal to <strong>194.4%</strong> of ATK + <strong>10</strong>.<br>Fifth Attack: Deal damage equal to <strong>158.1%</strong> of ATK + <strong>8</strong> and knock the target down. The higher the target is from the ground, the more damage is dealt, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Asunder",
                type: "normal",
                desc: "Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Asunder. While falling, deal damage equal to <strong>12.5%</strong> of ATK + <strong>1</strong> each hit. Upon landing, deal damage equal to <strong>65.4%</strong> of ATK + <strong>3</strong> and deliver a <strong>knockdown</strong>. The higher the location is when triggered, the higher the damage dealt, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Returning Chainblade",
                type: "normal",
                desc: "After the fourth normal attack, hold the normal attack button to trigger Returning Chainblade. Transform into a chainblade, dealing damage equal to <strong>124.9%</strong> of ATK + <strong>7</strong> to nearby targets and pulling them in.",
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to <strong>570%</strong> of ATK + <strong>30</strong>.",
            },
            {
                name: "Returning Chainblade",
                type: "dodge",
                desc: "Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Rapid Lunge. Deal up to <strong>115.5%</strong> of ATK + <strong>6</strong> damage and pull in nearby enemies.",
            },
            {
                name: "Domain of the Bat",
                type: "dodge",
                desc: "When dodging, summon a group of bats that pulls the target into the center. Tap normal attack during the short period after dodging to swing the scythe, dealing up to <strong>103.8%</strong> of ATK + <strong>5</strong> damage to the target.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for <strong>0.5</strong> seconds while dodging.",
            },
            {
                name: "Mortal Coil",
                type: "skill",
                desc: "Swing the scythe, dealing damage equal to <strong>284%</strong> of ATK + <strong>15</strong>. <strong>45</strong> second cooldown.",
            },
            {
                name: "Flaming Scythe",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong> and create a Flaming Scythe upon switching to this weapon, dealing damage equal to <strong>277%</strong> of ATK + <strong>15</strong> and lasts for <strong>10</strong> seconds. Additionally, spawn Flaming Scythes every <strong>2</strong> seconds. The scythes summon volcanic eruptions from the ground, which deal damage equal to <strong>60%</strong> of ATK + <strong>3</strong> to targets and knock them into the air.",
            }
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
            "Increase both damage and shatter to targets with more than <strong>50%</strong> HP by <strong>15%/19%/22.5%/26%</strong>.",
            // 4 set
            "Upon entering battle, gain a <strong>20%/25%/30%/35%</strong> damage boost for <strong>20</strong> seconds. Reset <strong>5</strong> seconds after exiting battle.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Upon entering battle, gain a <strong>20%/25%/30%/35%</strong> damage boost for <strong>35</strong> seconds. Reset <strong>5</strong> seconds after exiting battle."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Shiro"',
            // 600 affinity
            "Unlock communication [Passive Partner]",
            // 1200 affininty
            "When Shiro uses a weapon skill/discharge skill, increase all kinds of ATK by <strong>10%</strong> and physical ATK by an additional <strong>7%</strong> for <strong>8</strong> seconds. Cooldown: <strong>16</strong> seconds.",
            // 2000 affinity
            "Unlock communication [Sea Waves]",
            // 3000 affinity
            "Unlock communication [Song of the Secret Collection]",
            // 4000 affinity
            "When Shiro uses a weapon skill/discharge skill, increase all kinds of ATK by <strong>16%</strong> and physical ATK by an additional <strong>10%</strong> for <strong>8</strong> seconds. Cooldown: <strong>16</strong> seconds."
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
        ],
        skills: [
            {
                name: "Rapid Throw",
                type: "normal",
                desc: "While on the ground, swing the chakram to unleash 5 spinning attacks.<br>First Attack: Deal damage equal to <strong>23.6%</strong> of ATK + <strong>1</strong>.<br>Second Attack: Deal damage equal to <strong>18.3%</strong> of ATK + <strong>1</strong>.<br>Third Attack: Deal damage equal to <strong>26.2%</strong> of ATK + <strong>1</strong>.<br>Fourth Attack: Deal damage equal to <strong>23.6%</strong> of ATK + <strong>1</strong>.<br>Fifth Attack: Deal damage equal to <strong>41.4%</strong> of ATK + <strong>2</strong> and knock the target back a short distance."
            },
            {
                name: "Aerial Discharge",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to unleash 3 spinning attacks in a row.<br>First Attack: Deal damage equal to <strong>20.1%</strong> of ATK + <strong>1</strong>.<br>Second Attack: Deal damage equal to <strong>22.5%</strong> of ATK + <strong>1</strong>.<br>Third Attack: Deal damage equal to <strong>28.6%</strong> of ATK + <strong>2</strong>."
            },
            {
                name: "Scatter",
                type: "normal",
                desc: "After the second normal attack, hold attack button to activate Scatter. Fire five penetrating chakrams forward, each hit dealing <strong>33.5%</strong> x ATK + <strong>2</strong> damage, with minor knockback."
            },
            {
                name: "Air Spin",
                type: "normal",
                desc: "Tap and hold normal attack while airborne to trigger Air Spin. Unleash a powerful strike, dealing damage equal to <strong>147.3%</strong> of ATK + <strong>8</strong> to the target and nearby enemies, and knocking them into the air."
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to <strong>427.5%</strong> of ATK + <strong>23</strong>."
            },
            {
                name: "Waning Moon",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger Waning Moon. Toss a spinning chakram forward, dealing damage equal to <strong>102.2%</strong> of ATK + <strong>5</strong> to the target and inflicting a <strong>stun</strong> effect for <strong>0.5</strong> seconds. The chakram then splits into <strong>3</strong> and keeps traveling, dealing damage equal to <strong>14.6%</strong> of ATK + <strong>1</strong> to targets along their path. <b>Split chakrams will bounce during Full Bloom</b>."
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for <strong>0.5</strong> seconds while dodging."
            },
            {
                name: "Full Bloom",
                type: "skill",
                desc: "Create a Chakram Domain with the Wanderer at the center for <strong>8</strong> seconds. For <strong>8</strong> seconds after unleashing, pull in targets and reduce their speed by <strong>30%</strong>. Also fire <strong>5</strong> chakrams that bounce between enemies, dealing damage equal to <strong>14.3%</strong> of ATK + <strong>1</strong> to targets on their paths, bouncing up to <strong>5</strong> times. <b>The split chakrams triggered by Waning Moon also bounce up to 5 times</b>. <strong>60</strong>-second cooldown."
            },
            {
                name: "Spirit of the Air",
                type: "discharge",
                desc: "When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon <strong>removes all debuffs from the wielder</strong> and unleashes Chakram of the Seas at a target. Struck target causes AOE <strong>stun</strong> for <strong>1</strong> second, plus <strong>1</strong> attack each against up to <strong>3</strong> units every second (each attack has <strong>10%</strong> chance of <strong>stunning</strong> the target for <strong>1.5</strong> seconds), dealing <strong>31.8%</strong> x ATK + <strong>2</strong> damage for <strong>10</strong> seconds."
            }
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
            "If HP is less than <strong>30%</strong> after being attacked, gain a shield equal to <strong>15%/19%/22.5%/26%</strong> of Max HP for <strong>10</strong> seconds. Cooldown: <strong>120</strong> seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> If HP is less than <strong>30%</strong> after being attacked, gain a shield equal to <strong>20%/26%/32%/40%</strong> of Max HP for <strong>10</strong> seconds. Cooldown: <strong>90</strong> seconds.",
            // 4 set
            "Increase Whirlwind's damage by <strong>36%/45%/54%/63%</strong> and restore HP equal to <strong>30%/38%/44%/50%</strong> of the damage dealt while Whirlwind is active. The maximum HP restored every <strong>0.5</strong> seconds cannot exceed <strong>60%/72%/81%/90%</strong> of ATK.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Converts <strong>60%/75%/90%/105%</strong> of damage dealth during shield to health, restores no more than <strong>105%/127.5%/150%/172.5%</strong> of attack power every 0.5 seconds"
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Meryl"',
            // 600 affinity
            "Unlock communication [Cold Conversation]",
            // 1200 affininty
            "Reduce frost damage received by Meryl by <strong>20%</strong>, gain immunity to the frostbitten effect, and reduce duration of being frozen by <strong>50%</strong>.",
            // 2000 affinity
            "Unlock communication [Severe Cold Daily]",
            // 3000 affinity
            "Unlock communication [Melting Ice]",
            // 4000 affinity
            "Reduce frost damage received by Meryl by <strong>25%</strong>, gain immunity to the frostbitten effect, and reduce duration of being frozen by <strong>50%</strong>.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Meryl takes 20% less ice damage, is immune to frostbite, and is frozen for 50% less time. Meryl's surroundings will freeze."
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
        giftPrefs: ['metalware','rare-items'],
        recChips: [
            ['king', 2],
            ['shiro', 2],
            ['transportthinking', 2],
            ['offensivelogic', 3],
            ['cleanupagreement', 3]
        ],
        skills: [
            {
                name: "Heavy Cleave",
                type: "normal",
                desc: "While on the ground, swing a greatsword to attack 4 times in a row.<br>First Attack: Deal damage equal to <strong>60.7%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>50.1%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>87.9%</strong> of ATK + <strong>5</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>130.3%</strong> of ATK + <strong>7</strong>, knock the target <strong>into the air</strong>, then launch them upon landing.",
            },
            {
                name: "Aerial Strike",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to attack 4 times in a row.<br>First Attack: Deal damage equal to <strong>88.7%</strong> of ATK + <strong>5</strong>.<br>Second Attack: Deal damage equal to <strong>72.9%</strong> of ATK + <strong>4</strong>.<br>Third Attack: Deal damage equal to <strong>130%</strong> of ATK + <strong>7</strong>.<br>Fourth Attack: Deal damage equal to <strong>117.1%</strong> of ATK + <strong>6</strong> and deliver a <strong>knockdown</strong>, launch the target upon landing.",
            },
            {
                name: "Rising Slash",
                type: "normal",
                desc: "After the third normal attack, hold normal attack to trigger Rising Slash. Knock the target <strong>into the air</strong> and go airborne, dealing damage equal to <strong>53.6%</strong> of ATK + <strong>3</strong>.",
            },
            {
                name: "Moonset Slash",
                type: "normal",
                desc: "Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Moonset Slash. While falling, each hit deals damage equal to <strong>12.5%</strong> of ATK + <strong>1</strong>. Upon landing, deal damage equal to <strong>117.1%</strong> of ATK + <strong>6</strong> and launch targets. Deal greater damage depending on the user's altitude when Moonset Slash triggered, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to <strong>570%</strong> of ATK + <strong>30</strong>.",
            },
            {
                name: "Whirlwind",
                type: "normal",
                desc: "While standing still or moving, tap and hold normal attack to trigger Whirlwind, dealing damage equal to <strong>82%</strong> of ATK + <strong>4</strong> every <strong>0.5</strong> seconds to the target. Grant hitstun immunity while in use.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Devastate",
                type: "dodge",
                desc: "Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Devastate. Deal damage equal to <strong>55%</strong> of ATK + <strong>3</strong> each hit and <strong>launch</strong> targets.",
            },
            {
                name: "Crescent Slash",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger Crescent Slash. Swing the blade to unleash sword auras forward, each dealing damage equal to <strong>41.3%</strong> of ATK + <strong>2</strong>.",
            },
            {
                name: "Blizzard",
                type: "skill",
                desc: "Swing the blade to launch sword auras forward, each dealing damage equal to <strong>90.8%</strong> of ATK + <strong>5</strong> and increasing damage dealt by <strong>5%</strong> with each hit. While active, immune to control effects. <strong>45</strong>-second cooldown.",
            },
            {
                name: "Frost Barrier",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong>, and smash the ground to form a barrier upon switching to this weapon, dealing damage equal to <strong>419.3%</strong> of ATK + <strong>22</strong> to nearby enemies, knocking enemies into the air. This reduces their speed by <strong>50%</strong> and stops them from dodge or jump. The barrier lasts <strong>5</strong> seconds and blocks projectiles.",
            }
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
            "Increase damage dealt by <strong>10%/12.5%/15%/17.5%</strong> when there are no enemies within 4 meters.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase damage dealt by <strong>12.5%/15%/17.5%/20%</strong> when there are no enemies within 4 meters.",
            // 4 set
            "Upon a headshot, increase ATK by <strong>12%/15%/18%/21%</strong> for 8 seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Upon a headshot or Icewind Arrow Skill - Piercing Arrow hitting a target, increase ATK by <strong>15%/18%/21%/25%</strong> for 8 seconds."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Hane"',
            // 600 affinity
            "Unlock communication [Natural Warmth]",
            // 1200 affininty
            "Each time Tsubasa deals damage, gain <strong>1</strong> stack of Fierce Strike, up to <strong>1</strong> stack per <strong>1</strong> second. Each stack adds <strong>0.5%</strong> ATK, up to <strong>15</strong> stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for <strong>30</strong> seconds.",
            // 2000 affinity
            "Unlock communication [Cooling Alarm]",
            // 3000 affinity
            "Unlock communication [Hot and Cold]",
            // 4000 affinity
            "Each time Tsubasa deals damage, gain <strong>1</strong> stack of Fierce Strike, up to <strong>1</strong> stack per <strong>1</strong> second. Each stack adds <strong>0.6%</strong> ATK, up to <strong>30</strong> stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for <strong>30</strong> seconds."
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
        ],
        skills: [
            {
                name: "Quickdraw",
                type: "normal",
                desc: "While on the ground, draw the bow repeatedly to attack 5 times.<br>First Attack: Deal damage equal to <strong>48.8%</strong> of ATK + <strong>3</strong>.<br>Second Attack: Deal damage equal to <strong>43.7%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal damage equal to <strong>78.6%</strong> of ATK + <strong>4</strong>.<br>Fourth Attack: Deal damage equal to <strong>121.2%</strong> of ATK + <strong>6</strong>.<br>Fifth Attack: Deal damage equal to <strong>112.5%</strong> of ATK + <strong>6</strong> and knock the target back a short distance."
            },
            {
                name: "Charged Arrow",
                type: "normal",
                desc: "Tap and hold normal attack to charge the weapon. Deal basic damage equal to <strong>87.8%</strong> of ATK + <strong>5</strong>, and <strong>50%</strong> more for each 1 second spent charging, up to <strong>3</strong> seconds. Deal double damage when scoring a headshot or when hitting an enemy's weakness, knocking them down (headshots are ineffective against Wanderers)."
            },
            {
                name: "Arrow Rain",
                type: "normal",
                desc: "After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to <strong>287.2%</strong> of ATK + <strong>15</strong> area damage to targets."
            },
            {
                name: "Air Volley",
                type: "normal",
                desc: "While airborne, tap normal attack to attack 4 times in a row in the air.<br>First Attack: Deal damage equal to <strong>56.3%</strong> of ATK + <strong>3</strong>.<br>Second Attack: Deal damage equal to <strong>74%</strong> of ATK + <strong>4</strong>.<br>Third Attack: Deal damage equal to <strong>112.7%</strong> of ATK + <strong>6</strong>.<br>Fourth Attack: Deal damage equal to <strong>169.8%</strong> of ATK + <strong>9</strong>."
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds."
            },
            {
                name: "Loaded Arrow",
                type: "dodge",
                desc: "Tap attack after dodging to trigger a Loaded Arrow, which <strong>knocking the target back</strong> and dealing damage equal to <strong>124%</strong> of ATK + <strong>7</strong>."
            },
            {
                name: "Piercing Arrow",
                type: "skill",
                desc: "Perform a backflip and fire <strong>3</strong> piercing arrows, with the main arrow deals damage equal to <strong>224.6%</strong> of ATK + <strong>12</strong>, and the other two arrows deal 60% damage. In addition, <strong>knock targets back</strong> and stun them for <strong>5</strong> seconds if they collide with an obstacle. Cooldown: <strong>12</strong> seconds."
            },
            {
                name: "Explosive Barrage",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong>, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to <strong>570%</strong> of ATK + <strong>30</strong>. The storm has a <strong>10%</strong> chance to inflict a <strong>2</strong> seconds <strong>freeze effect</strong>. Gain cold front, increasing damage dealt by <strong>15%</strong>, and speed by <strong>45%</strong> for <strong>7</strong> seconds."
            }
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
            "Hitting targets with dodge skills inflicts bleed, dealing damage equal to <strong>15%/19%/22.5%/26%</strong> of ATK every second for <strong>5</strong> seconds.",
            // 4 set
            "Reduce ATK of all targets within 8 meters that are taking damage over time by <strong>10%/12%/13%/15%</strong>."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Huma"',
            // 600 affinity
            "Unlock communication [Acquaintance]",
            // 1200 affininty
            "Each time Huma receives damage, gain <strong>1</strong> Fortitude mark and gain <strong>1</strong> more Fortitude mark if it is flame damage, up to <strong>1</strong> time per <strong>1</strong> second and <strong>12</strong> stacks in total. Upon using a weapon skill, use all Fortitude marks and gain an HP shield equal to the number of marks x <strong>0.4%</strong> HP for <strong>12</strong> seconds. If Fortitude marks are used when the effect is stacked up to the maximum, then gain an HP shield equal to the number of marks x <strong>0.6%</strong> HP.",
            // 2000 affinity
            "Unlock communication [Echo]",
            // 3000 affinity
            "Unlock communication [Symphony]",
            // 4000 affinity
            "Each time Huma receives damage, gain <strong>1</strong> Fortitude mark and gain <strong>1</strong> more Fortitude mark if it is flame damage, up to <strong>1</strong> time per <strong>1</strong> second and <strong>12</strong> stacks in total. Upon using a weapon skill, use all Fortitude marks and gain an HP shield equal to the number of marks x <strong>0.6%</strong> HP for <strong>12</strong> seconds. If Fortitude marks are used when the effect is stacked up to the maximum, then gain an HP shield equal to the number of marks x <strong>0.9%</strong> HP."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "While on the ground, swing the shield axe to attack 4 times in a row.<br>First Attack in Shield Form: Deal damage equal to <strong>70.6%</strong> of ATK + <strong>4</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>51.7%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>57.1%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>167.3%</strong> of ATK + <strong>9</strong> and launch the target into the air.<br>First Attack in Axe Form: Deal damage equal to <strong>122.9%</strong> of ATK + <strong>6</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>72.2%</strong> of ATK + <strong>4</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>109%</strong> of ATK + <strong>6</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>201.1%</strong> of ATK + <strong>11</strong> and knock the target back.",
            },
            {
                name: "Aerial Strike",
                type: "normal",
                desc: "While airborne or after jumping once, attack 3 times in a row.<br>First Attack in Shield Form: Deal damage equal to <strong>69%</strong> of ATK + <strong>4</strong>.<br>Second Attack: Deal damage equal to <strong>72.9%</strong> of ATK + <strong>4</strong>.<br>Third Attack: Deal damage equal to <strong>93.7%</strong> of ATK + <strong>5</strong>.<br>First Attack in Axe Form: Deal damage equal to <strong>107.8%</strong> of ATK + <strong>6</strong>.<br>Second Attack: Deal damage equal to <strong>82.8%</strong> of ATK + <strong>4</strong>.<br>Third Attack: Deal damage equal to <strong>252.7%</strong> of ATK + <strong>13</strong>.",
            },
            {
                name: "Anticipation",
                type: "normal",
                desc: "Shield Form: While on the ground, tap and hold normal attack to enter shield form (release to exit) for <strong>3</strong> seconds, during which the Wanderer is unable to move, and all damage taken is reduced by <strong>50%</strong>. While in shield form, releasing the normal attack button after taking damage or after holding the button for <strong>3</strong> seconds, unleash fire crash, dealing damage equal to <strong>152.1%</strong> of ATK + <strong>8</strong> and inflicting a <strong>1</strong>-second <strong>stun</strong> effect on the target.<br>Axe Form: Smash the target, dealing damage equal to <strong>111.1%</strong> of ATK + <strong>6</strong> and knocking the target into the air.",
            },
            {
                name: "Valor",
                type: "normal",
                desc: "Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Air Branch attacks.<br>Shield Form: While falling, deal damage equal to <strong>12.5%</strong> of ATK + <strong>1</strong> each hit. Upon landing, deal damage equal to <strong>81.1%</strong> of ATK + <strong>4</strong> and knock the target into the air.<br>Axe Form: While falling, deal damage equal to <strong>12.5%</strong> of ATK + <strong>1</strong> each hit. Upon landing, deal damage equal to <strong>116.6%</strong> of ATK + <strong>6</strong> and knock the target into the air. The higher the location is when triggered, the higher the damage dealt, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Erupt",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger a Dodge Attack.<br>Shield Form: Unleash a flaming shield, dealing damage equal to <strong>50.7%</strong> of ATK + <strong>3</strong> and knocking back targets. In addition, trigger an explosion that deals damage equal to <strong>50.7%</strong> of ATK + <strong>3</strong>, stun targets for <strong>0.5</strong> seconds, and reduce incoming healing effects on targets by <strong>30%</strong> for <strong>10</strong> seconds.<br>Axe Form: Swing an axe to deal damage equal to <strong>205.8%</strong> of ATK + <strong>11</strong>, and reduce incoming healing effects on targets by <strong>30%</strong> for <strong>10</strong> seconds.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Fission",
                type: "skill",
                desc: "Shield Conversion: Switch from shield form to axe form and smash the ground, dealing damage equal to <strong>339.9%</strong> of ATK + <strong>18</strong> and knocking the target <strong>into the air</strong>. Leave a flame zone for <strong>5</strong> seconds that burns the target, dealing continuous damage equal to <strong>212.4%</strong> of ATK + <strong>11</strong>.<br>Axe Conversion: Switch from axe form to shield form and slam it to the ground, dealing damage equal to <strong>281.4%</strong> of ATK + <strong>15</strong> to the target and knocking them back. Prevent the target from switching weapons for <strong>5</strong> seconds. <strong>45</strong>-second cooldown, Shield Conversion and Axe Conversion share a cooldown.",
            },
            {
                name: "Seething Rage",
                type: "discharge",
                desc: "When <b>weapon charge</b> is full or when <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong> and unleash a flame shockwave upon switching to this weapon, dealing damage equal to <strong>320%</strong> of ATK + <strong>17</strong>. Taunt enemies for <strong>5</strong> seconds, during which gain <strong>15%</strong> damage reduction. Scatter shield-shaped objects based on the number of targets taunted. Objects last <strong>20</strong> seconds and provide <strong>10</strong> seconds of <strong>5%</strong> damage reduction (stackable), restoring dodge by 1.",
            }
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
            "Increase crit damage to targets with less than <strong>60%</strong> HP by <strong>24%/30%/36%/42%</strong>.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Increase crit damage to targets with less than <strong>60%</strong> HP by <strong>33%/42%/50%/58%</strong>.",
            // 4 set
            "Crits deal additional damage over time equal to <strong>18%/22%/26%/30%</strong> of ATK every second for <strong>5</strong> seconds. Does not stack.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Crits deal additional damage over time equal to <strong>12%/15%/18%/21%</strong> of ATK every second for <strong>5</strong> seconds. Does not stack."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Karasuma"',
            // 600 affinity
            "Unlock communication [Friendship Achieved]",
            // 1200 affininty
            "When Crow is not in team play, increase damage dealt by <strong>6%</strong> and reduce damage received by <strong>4%</strong>.",
            // 2000 affinity
            "Unlock communication [Happy-go-lucky]",
            // 3000 affinity
            "Unlock communication [Jokes]",
            // 4000 affinity
            "When Crow is not in team play, increase damage dealt by <strong>10%</strong> and reduce damage received by <strong>6%</strong> When Crow enters combat, increase damage dealt by <strong>12%</strong> for <strong>12</strong> seconds."
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
        ],
        skills: [
            {
                name: "Twin Blades",
                type: "normal",
                desc: "While on the ground, swing the blades to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>42.9%</strong> of ATK + <strong>2</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>52.2%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>64.8%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>69.2%</strong> of ATK + <strong>4</strong> and knock the target back a short distance.<br>Fifth Attack: Deal damage equal to <strong>144.3%</strong> of ATK + <strong>8</strong> and knock the target back a short distance.",
            },
            {
                name: "Sky Flurry",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to attack 4 times in a row.<br>First Attack: Deal damage equal to <strong>46.8%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal damage equal to <strong>27.5%</strong> of ATK + <strong>1</strong>.<br>Third Attack: Deal damage equal to <strong>65.8%</strong> of ATK + <strong>3</strong>.<br>Fourth Attack: Deal damage equal to <strong>98.5%</strong> of ATK + <strong>5</strong>.",
            },
            {
                name: "Rapid Lunge",
                type: "normal",
                desc: "After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Strike the target and knock them <strong>into the air</strong>, dealing total damage equal to <strong>83.4%</strong> of ATK + <strong>4</strong>.",
            },
            {
                name: "Spiral Drive",
                type: "normal",
                desc: "Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Spiral Drive. While falling, deal damage equal to <strong>42%</strong> of ATK + <strong>2</strong> each hit.",
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to <strong>570%</strong> of ATK + <strong>30</strong>.",
            },
            {
                name: "Flying Blades",
                type: "dodge",
                desc: "Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target <strong>5</strong> times, each dealing damage equal to <strong>18.8%</strong> of ATK + <strong>1</strong>. Grant immunity to control effects while phasing.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the red area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Returning Blades",
                type: "skill",
                desc: "Fires 6 returning blades, each dealing damage equal to <strong>20.7%</strong> of ATK + <strong>1</strong>. Gains <strong>hyperbody</strong> for up to <strong>8</strong> seconds, and the effect is removed when the blades return. <strong>45</strong>-second cooldown. ",
            },
            {
                name: "Orbiting Blades",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong> and blink to the target location upon switching to this weapon and attack, dealing damage equal to <strong>62.1%</strong> of ATK + <strong>3</strong> and electrocuting the target (after <strong>5</strong> seconds, deals volt damage equal to <strong>15%</strong> of damage dealt, up to <strong>350%</strong> of the Wanderer's ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to <strong>46.5%</strong> of ATK + <strong>2</strong> to those that touch them.",
            }
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
            "Deal damage and produce a damage orb, which lsts for <strong>20</strong> seconds and increases ATK of any teammate who picks it up by <strong>1.5%</strong>. Stacks up to <strong>10</strong> times and lasts for <strong>45</strong> seconds. <strong>2.5</strong>-second cooldown.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Deal damage and produce a damage orb, which lsts for <strong>20</strong> seconds and increases ATK of any teammate who picks it up by <strong>2%</strong>. Stacks up to <strong>10</strong> times and lasts for <strong>45</strong> seconds. <strong>2.5</strong>-second cooldown.",
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
            "Upon using a discharge skill to switch to the current weapon, gain a shield equal to <strong>120%/150%/180%/210%</strong> of ATK for <strong>4</strong> seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Upon using a discharge skill to switch to the current weapon, gain a shield equal to <strong>150%/200%/250%/300%</strong> of ATK for <strong>6</strong> seconds.",
            // 4 set
            "While the shield is active, you and your teammates deal <strong>16%/20%/24%/28%</strong> more damage."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Zero"',
            // 600 affinity
            "Unlock communication [Unintelligible Dialogue]",
            // 1200 affininty
            "When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by <strong>1.5</strong> seconds. Can only activate for the same weapon <strong>1</strong> time every <strong>5</strong> seconds.",
            // 2000 affinity
            "Unlock communication [Rules]",
            // 3000 affinity
            "Unlock communication [Zero]",
            // 4000 affinity
            "When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by <strong>3</strong> seconds. Can only activate for the same weapon <strong>1</strong> time every <strong>5</strong> seconds."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "While on the ground, manipulate the cube to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>35.9%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal damage equal to <strong>29.4%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal damage equal to <strong>91.5%</strong> of ATK + <strong>5</strong>.<br>Fourth Attack: Deal damage equal to <strong>61.2%</strong> of ATK + <strong>3</strong>.<br>Fifth Attack: Deal damage equal to <strong>62.3%</strong> of ATK + <strong>3</strong> up to 3 times and <strong>launch</strong> the target.<br><strong>Passive: If normal attacks hit targets 6 times, gain 1 cube. Up to 5 cubes can be stored</strong>."
            },
            {
                name: "Omnium Missile",
                type: "normal",
                desc: "While airborne, tap normal attack to activate the energy within the cube, firing up to <strong>5</strong> missiles and dealing total damage equal to <strong>45.6%</strong> of ATK + <strong>2</strong>. Consume up to <strong>250</strong> endurance.<br><strong>Passive: If the Wanderer has any stored cubes, consume all cubes to fire Omnium Missiles at targets to deal damage</strong>."
            },
            {
                name: "Energy Overflow",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to trigger Energy Overflow. Upon landing, fire a shockwave that travels forward, dealing up to <strong>18%</strong> of ATK + <strong>1</strong> damage to targets in its path."
            },
            {
                name: "Omnium Shock",
                type: "normal",
                desc: "On the third normal attack, hold the normal attack button to trigger Omnium Shock. A pillar of energy launches nearby targets into the air, dealing damage equal to <strong>52.8%</strong> of ATK + <strong>3</strong>. The pillar lasts 5 seconds and deals damage equal to <strong>22%</strong> of ATK + <strong>1</strong> to nearby targets every second."
            },
            {
                name: "Energy Sentinel",
                type: "normal",
                desc: "Cubes orbiting the Wanderer deal damage equal to <strong>7.5%</strong> of ATK + <strong>1</strong> to enemies."
            },
            {
                name: "Energy Missile",
                type: "normal",
                desc: "When the Wanderer casts Omnium Missiles and Energy Overflow, their orbiting cubes are fired as well, dealing damage equal to <strong>37.3%</strong> of ATK + <strong>2</strong> to the target."
            },
            {
                name: "Soul Surge",
                type: "dodge",
                desc: "Dodge right before getting hit to trigger a Phantasia, which reduces speed of enemies within range and grants hitstun immunity for <strong>0.5</strong> seconds. If the Wanderer has less than <strong>5</strong> cubes, each successful dodge has a <strong>40%</strong> chance to restore 1 dodge attempt. Successful dodges do not interrupt normal attack combos.<br><strong>Passive: Gain a cube for every successful aerial dodge</strong>."
            },
            {
                name: "Omnium Shield",
                type: "skill",
                desc: "Create shielding for self and nearby allies to block up to <strong>800%</strong> x ATK in damage for <strong>10</strong> seconds, and deal <strong>109.9%</strong> x ATK + <strong>6</strong> damage to nearby targets and <strong>launch</strong> them. Each cube in possession when this skill is used adds <strong>160%</strong> of ATK to max shielding and exhaust the cube. Cooldown: <strong>90</strong> seconds."
            },
            {
                name: "Omnium Wave",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong> and gain 5 cubes upon switching to this weapon, then unleash the <strong>5</strong> cubes along with a Shockwave. This Shockwave deals damage equal to <strong>131.5%</strong> of ATK + <strong>7</strong> to nearby targets, and <strong>launches</strong> them into the air. Each cube also deals damage equal to <strong>37.3%</strong> of ATK + <strong>2</strong>. If allies are in the vicinity, they gain damage immunity for <strong>3</strong> seconds."
            },
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
            "Increase damage by <strong>13%/17%/20%/23%</strong> when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.",
            // 4 set
            "Hitting an enemy with a skill reduces the cooldowns of all weapon skills by <strong>1.5/2/2.5/3</strong> seconds and increases the damage of discharge skills by <strong>36%/45%/54%/63%</strong> for <strong>15</strong> seconds."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Claudia"',
            // 600 affinity
            "Unlock communication [Please Tell Me More]",
            // 1200 affininty
            "Hide for <strong>1</strong> seconds upon dodging.",
            // 2000 affinity
            "Unlock communication [Enthusiasm]",
            // 3000 affinity
            "Unlock communication [Engagement]",
            // 4000 affinity
            "Hide for <strong>1.5</strong> seconds upon dodging."
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
        ],
        skills: [
            {
                name: "Quick Slash",
                type: "normal",
                desc: "While on the ground, swing the blade to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>39%</strong> of ATK + <strong>2</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>54.6%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>49.4%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>87%</strong> of ATK + <strong>5</strong> and knock the target back a short distance.<br>Fifth Attack: Deal damage equal to <strong>148.1%</strong> of ATK + <strong>8</strong> and <strong>launch</strong> the target.",
            },
            {
                name: "Jumping Strike",
                type: "normal",
                desc: "While airborne, tap normal attack to attack 4 times in a row.<br>First Attack: Deal damage equal to <strong>23.2%</strong> of ATK + <strong>1</strong>.<br>Second Attack: Deal damage equal to <strong>40.3%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal damage equal to <strong>95.4%</strong> of ATK + <strong>5</strong>.<br>Fourth Attack: Deal damage equal to <strong>115.8%</strong> of ATK + <strong>6</strong> and deliver a <strong>knockdown</strong>.",
            },
            {
                name: "Cyclone",
                type: "normal",
                desc: "Hold the normal attack button after normal attacks to trigger Cyclone. Knock the target, suspending them in mid-air and deal <strong>39.8%</strong> of ATK + <strong>2</strong> to a single target.",
            },
            {
                name: "Diving Edge",
                type: "normal",
                desc: "Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to <strong>10%</strong> of ATK + <strong>1</strong> each hit. Upon landing, deal damage equal to <strong>63.6%</strong> of ATK + <strong>3</strong> and knock the target back. The higher you are when cast, the higher the damage dealt, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to <strong>570%</strong> of ATK + <strong>30</strong>.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Leap Attack",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to 31.6% of ATK + 2, knocking the target into the air and becoming airborne, then deal additional damage equal to 47.3% of ATK + 2.",
            },
            {
                name: "Roam",
                type: "skill",
                desc: "Dance through targets while swinging the blade, dealing damage equal to <strong>348.5%</strong> of ATK + <strong>18</strong> in total to up to <strong>5</strong> targets (attacks on the same target deal <strong>20%</strong> less damage). At the end of the ability, slash the space in front, dealing damage equal to <strong>264%</strong> of ATK + <strong>14</strong> to targets and knocking them into the air. Immune to crowd-control effects while ability is in use. Cooldown: <strong>15</strong> seconds.",
            },
            {
                name: "Unbridled Flurry",
                type: "discharge",
                desc: "When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon <strong><strong>removes all debuffs from the wielder</strong></strong>, who charges and <strong>airbornes</strong> a target to deal <strong>436.2%</strong> x ATK + <strong>23</strong> damage, leaving behind a bladestorm that deals <strong>174.4%</strong> x ATK + <strong>9</strong> damage to the target, while immunizing self to grievous/freeze/burn/electrify effects for <strong>5</strong> seconds.",
            }
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
            "Each hit of the skill returns <strong>2%</strong> of damage dealt as health, up to <strong>200%</strong> of ATK.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            'The skill Blast Grenade and dodge attack Melee Break will apply <strong class="text-green">Ionic Burn</strong> to targets, dealing <strong>90%</strong> of ATK every second for <strong>10</strong> seconds.',
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "<strong class='text-green'>Ionic Burn</strong> damage increased to <strong>140%</strong> and dodge attacks from any weapon will refresh the burn's duration.",
            // 6 star
            "The skill <strong class='text-green'>Barrage</strong> has a burning effect that lasts for <strong>15</strong> seconds. Hitting a target with any weapon's dodge attack reduces the cooldown of <strong class='text-green'>Barrage</strong> by <strong>4</strong> seconds, up to once every <strong>1.5</strong> seconds. Damage over time effects trigged from a dodge attack can also trigger the effect."
        ],
        energyCharge:["10.00","a"],
        shieldBreak:["6.50","b"],
        materials:["fire", "red", "black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/cobalt.png",
        chipEffect:[
            // 2 set
            "Restore 1 dodge every <strong>4</strong> dodges. Dodge attacks add burn to the target, dealing <strong>13%/17%/21%/25%</strong> attack damage per second for <strong>10</strong> seconds.",
            // 4 set
            "Increases damage by <strong>13%/17%/21%/25%</strong> to targets with abnormal statuses."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Cobalt-B"',
            // 600 affinity
            "Unlock communication [Respect]",
            // 1200 affininty
            "When Cobalt-B releases a combo, it restores <strong>50</strong> - <strong>120</strong> points of energy charge at random.",
            // 2000 affinity
            "Unlock communication [Pleasant Cooperation]",
            // 3000 affinity
            "Unlock communication [Comapnions & Weapons]",
            // 4000 affinity
            "When Cobalt-B releases a combo, it restores <strong>90</strong> - <strong>180</strong> points of energy charge at random."
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
        exclusiveEffect:"When entering combat, trigger War Intent, increasing your final damage by <strong>15%</strong> but accelerating your cellular aging (lose <strong>1%</strong> of your current HP every <strong>5</strong> seconds). The effect disappears when leaving battle or switching weapons. If your HP drops below <strong>50%</strong>, cellular aging stops but the damage boost from War Intent remains (switching weapons causes the effect to disappear).",
        awakening:[
            // 1 star
            "<strong>Dodge attacks</strong> gain an additional hit dealing <strong>80%</strong> of ATK + <strong>2.5%</strong> of HP lost.<br>The <strong>Weapon Skill</strong> explodes for an additional <strong>160%</strong> of ATK + <strong>5%</strong> of HP lost.<br>The <strong>Discharge Skill</strong> deals an additional <strong>160%</strong> of ATK + <strong>5%</strong> of lost HP (does not apply to the DoT).",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Increase shatter by <strong>15%</strong>. Breaking a shield releases an instant burst of damage at the target's location, dealing <strong>680%</strong> of ATK to targets within range, or <strong>1500%</strong> of ATK if there is only one target within range.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "When attacked, automatically trigger a <strong>1</strong> second block (immediately negates crowd control), blocking one hit up to <strong>20%</strong> of your max HP. Performing a basic attack during the block period will initiate a <strong>counter attack</strong>, dealing <strong>240%</strong> of ATK and <strong>launching the target airborne</strong>, cooldown <strong>18</strong> seconds. ",
            // 6 star
            "While inside the area of the <strong>Discharge Skill</strong> or <strong>Phantasia</strong>, trigger War Intent for <strong>7</strong> seconds, increasing your final damage by <strong>40%</strong> and halting cellular aging (switching weapons causes the effect to disappear)."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["12.50","s"],
        materials:["electric","green","blue"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/baiyuekui.png",
        chipEffect:[
            // 2 set
            "If you have <strong>200~999</strong> charge when switching to this weapon, use <strong>200</strong> points to gain a <strong>15%/18%/21%/25%</strong> attack boost for <strong>15</strong> seconds, cooldown <strong>5</strong> seconds, does not stack.",
            // 4 set
            "For every <strong>0.6</strong> seconds that a combo is released, the <strong>next</strong> combo will hit the <strong>first</strong> enemy for <strong>106%/122%/140%/160%</strong> ranged damage (5m radius), up to <strong>530%/610%/700%/800%</strong>; shatter increases by <strong>7%/14%/21%/28%</strong> for <strong>4</strong> seconds, does not stack. This effect works in the background, and if multiple sets are used, the highest star set will take effect."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Baiyuekui"',
            // 600 affinity
            "Unlock communication [I am Baiyuekui]",
            // 1200 affininty
            "When Bai Yuekui enters combat, the electric attack power is increased by <strong>21%</strong>, the effect decays over time and lasts for <strong>120</strong> seconds. The effect can be reset after <strong>5</strong> seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by <strong>50%</strong>.",
            // 2000 affinity
            "Unlock communication [Knowing the New World]",
            // 3000 affinity
            "Unlock communication [I Have Many Stories]",
            // 4000 affinity
            'When Bai Yuekui enters combat, the electric attack power is increased by <strong>33%</strong>, the effect decays over time and lasts for <strong>120</strong> seconds. The effect can be reset after <strong>5</strong> seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by <strong>50%</strong>.'
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
        // Omni Shield? Mecha Shield? Heavy Dimensional/3D Shield?????
        exclusiveEffect:'<strong>Group Play [Guardian]</strong>: When using Re-entry, Form Switch, or Full Shot, inflict <strong>40%</strong> damage to the lowest HP ally for <strong>10</strong> seconds, afterwards restoring <strong>10%</strong> of lost HP, only triggered while using Perseverance Resonance, the effect will not be removed and cannot be triggered again until the end of time.<br><br><strong>Solo Play [Amplify]</strong>: Mecha Form gains <strong>50%</strong> physical damage reduction.<br><strong>Omni Shield</strong>: Mecha basic attack/Double Smash/Impact Slash will give <strong>1</strong> point of Mecha Energy. At <strong>20</strong> points, convert <strong>20%</strong> of your current HP into a [Omni Shield] with <strong>1.5x</strong> your max HP (cannot exceed 1.5x max HP and healing is reduced by 50% while active). The shield lasts for <strong>15</strong> seconds and cannot be gained if you are below <strong>10%</strong> HP. After the duration, <strong>66.7%</strong> of the remaining shield value is converted to HP, and hitting a weak target nets <strong>2</strong> points of energy. When triggering the effect, convert active HP shields into [Omni Shield]. Other HP shields cannot be obtained while active.',
        awakening:[
            // 1 star
            "Activating Re-entry, Form Switch, or Full Shot will instantly grant [Omni Shield].",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "When [Omni Shield] breaks or refreshes, increase final damage by <strong>35%</strong> for <strong>20</strong> seconds, does not stack.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "When [Omni Shield] breaks or refreshes, inflict <strong>160%</strong> of ATK + <strong>5%</strong> of lost HP to nearby targets and gains <strong>50</strong> weapon charge points on hit.",
            // 6 star
            "While [Omni Shield] is active, Physical Resistance is <strong>doubled</strong> and provides Dominance effect. [Omni Shield] can be obtained when another Weapon Skill or Discharge Skill hits the target while the shield is active."
        ],
        energyCharge:["12.00","s"],
        shieldBreak:["9.00","a"],
        materials:["physical","red","black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/marc.png",
        chipEffect:[
            // 2 set
            "Adds a life shield of <strong>15%</strong> of your current HP to all teammates after attacking an enemy for <strong>15</strong> seconds, resetting <strong>10</strong> seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by <strong>11%/13%/15%/17%</strong> for <strong>15</strong> seconds and is not stackable. This effect is also active in the background, and is effective for multiple sets up to the maximum star level. ",
            // 4 set
            "Increases attack power by <strong>6%/7.5%/9%/11.5%</strong> and teammates attack power by <strong>3%/3.5%/4.5%/5.75%</strong> for <strong>15</strong> seconds when life shield is granted, stacks up to <strong>3</strong> levels. This will effect is also active in the background, with multiple sets of equipment taking effect up to the maximum star level."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Marc"',
            // 600 affinity
            "Unlock communication [Doomsday Hunters]",
            // 1200 affininty
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'revived' and taunts the surrounding enemies for <strong>5</strong> seconds. While 'revived', you do not take damage, but you cannot perform actions, while recovering <strong>1%</strong> of his maximum life every second and healing received is increased by <strong>20%</strong>. This effect has a cooldown of <strong>10</strong> minutes. Damage from Stinging Eel and Ground Roar is reduced by <strong>50%</strong>.",
            // 2000 affinity
            "Unlock communication [Reality and the Law]",
            // 3000 affinity
            "Unlock communication [Thinking about the present]",
            // 4000 affinity
            "When Marc takes lethal damage from an enemy, he does not die and obtains a buff: 'Nirvana' and taunts the surrounding enemies for <strong>5</strong> seconds. While in 'Nirvana', you do not take damage, but you cannot perform actions, while recovering <strong>2%</strong> of his maximum life every second and healing received is increased by <strong>50%</strong>. This effect has a cooldown of <strong>5</strong> minutes. Damage from Stinging Eel and Ground Roar is reduced by <strong>50%</strong>."
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
        exclusiveEffect:"<strong>Volt Resonance</strong>: When equipped with <strong>2</strong> or more Volt weapons, increase Volt ATK by <strong>20%</strong> and Volt Resistance by <strong>40%</strong>, taking effect in the background.",
        awakening:[
            // 1 star
            "Activating the <strong>Weapon Skill</strong> or <strong>Discharge Skill</strong> creates <strong>1</strong> Electrode, immediately grants <strong>5</strong> levels of Chain Heal Enhancement, and releases a healing chain that heals nearby friendly units for <strong>135%</strong> of ATK.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Electrodes release an <strong>electric current</strong> every <strong>6</strong> seconds, dealing up to <strong>389%</strong> of ATK within its range.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "After using the <strong>Weapon Skill</strong>, increase Volt ATK by ( <strong>10</strong> + Your Electrode Count &times; <strong>10</strong> ) % for <strong>25</strong> seconds.",
            // 6 star
            "Up to <strong>2</strong> Electrodes can be created. When a new electrode appears, it replaces the one furthest from you."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["6.00","b"],
        materials:["electric","green","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/nemesis.png",
        chipEffect:[
            // 2 set
            "When healing a target, the healed target's Volt ATK is increased by <strong>15%/18%/21%/25%</strong> for <strong>20</strong> seconds. The effect does not stack, and only the highest level will take effect when using multiple sets.",
            // 4 set
            "When healing yourself or your own electrodes, the healed target gains a chance to Lightning Strike; the next attack within <strong>30</strong> seconds deals <strong>300%/375%/450%/525%</strong> of Volt ATK (half for electrodes) as Volt damage to the first target hit. Can only be triggered again after <strong>10</strong> seconds. Lightning Strike is not stackable, and only the highest level will take effect when using multiple sets."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Nemesis"',
            // 600 affinity
            "Unlock communication [New Life and Symbiosis]",
            // 1200 affininty
            "When an electrode is summoned, all enemies within <strong>30</strong> metres of the electrode take <strong>60%</strong> electric damage and all allies (including yourself) are healed for <strong>120%</strong> of their attack power.",
            // 2000 affinity
            "Unlock communication [Experimental Operation]",
            // 3000 affinity
            "Unlock communication [Ahead of the Righteous Eye]",
            // 4000 affinity
            "When an electrode is summoned, all enemies within <strong>30</strong> metres of the electrode take <strong>100%</strong> electric damage and all allies (including yourself) are healed for <strong>200%</strong> of their attack power."
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
        wepName:"Balmung",
        wepImg:"images/wep/frigg.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>151.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        exclusiveEffect:"After using the Weapon Skill <strong>“Fimbulwinter”</strong>, a large ice field will be placed at your position, lasting  <strong>25</strong> seconds. Inside the ice field, dodges will not be consumed while using Frigg's weapon, and gain the effect “Frozen Domain I”: when using Ice weapons, increase Ice ATK by <strong>15%</strong> and Shatter by <strong>25%</strong>.",
        awakening:[
            // 1 star
            "Gain <strong>1</strong> point of Frost every time you deal <strong>550%</strong> of Ice ATK with any element while inside the ice field, up to <strong>10</strong> points. When the ice field expires, inflict burst damage for ( Frost points &times; <strong>95%</strong> &times; Ice ATK ) to all enemies within the area. Lose <strong>1</strong> Frost point every <strong>3</strong> seconds that you are outside of the field.",
            // 2 star
            "Increase the current weapon's base HP growth by <strong>16%</strong>.",
            // 3 star
            "Maximum Frost points increased to <strong>15</strong>. Using an Ice weapon's Discharge Skill inside the ice field inflicts ( Frost points + 5 ) &times; <strong>25%</strong> &times Ice ATK to all enemies in the field.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "Using an Ice weapon to break a shield inside the ice field will freeze the target for <strong>2</strong> seconds and deal an additional ( Frost points &times; <strong>35%</strong> &times; Ice ATK ) damage (doubled if the target cannot be frozen).",
            // 6 star
            "Reaching <strong>15</strong> Frost points while inside the ice field will grant the additional effect “Frozen Domain II”: when using Ice weapons, increase Ice ATK by <strong>25%</strong>."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["8.00","a"],
        materials:["ice","red","black"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/frigg.png",
        chipEffect:[
            // 2 set
            "When switching from ice weapon to ice weapon, the ice attack power is increased by <strong>15%/18%/21%/25%</strong> for <strong>10</strong> seconds. This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when  multiple sets are equipped.",
            // 4 set
            "When the ice field is released by the weapon 'Balmung', the enemy targets within the ice field take <strong>60%/75%/90%/105%</strong> ice damage per second. "
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar "Frigg"',
            // 600 affinity
            "Unlock communication []",
            // 1200 affininty
            "When entering combat, gain <strong>1.5%</strong> ice ATK every <strong>3</strong> seconds, stack up to <strong>10</strong> times for <strong>5</strong> seconds.",
            // 2000 affinity
            "Unlock communication []",
            // 3000 affinity
            "Unlock communication []",
            // 4000 affinity
            "When entering battle gain <strong>2.4%</strong> ice ATK every <strong>3</strong> seconds up to <strong>10</strong> stacks, lasts for <strong>5</strong> seconds. Immune to CC effects in the ice domain."
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
        wepName:"Sparky",
        wepImg:"images/wep/ruby.png",
        eleImg:"images/ele_fire.png",
        resoImg:"images/reso_damage.png",
        wepEffect:"Fully charged weapons will set the target on fire for <strong>8</strong> seconds with the next attack, causing ongoing damage of <strong>58.00%</strong> of ATK every second. Ignited targets receive <strong>50%</strong> efficacy from healing.",
        exclusiveEffect:'<strong>Flame Resonance</strong>: When equipped with <strong>2</strong> or more Flame weapons, increase Flame ATK by <strong>20%</strong> and Flame Resistance by <strong>40%</strong>, taking effect in the background.',
        awakening:[
            // 1 star
            "[Scorching Heat] Increases Sparky's basic attack damage to <strong>182%</strong>. Weapon Skill cooldown reduced to <strong>24</strong> seconds.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "[Scorching Heat] Incidental fire damage increased by <strong>18%</strong>; scorch settlement multiplier increased to <strong>150%</strong>.",
            // 4 star
            "Increase the current weapon's base ATK growth by <strong>32%</strong>.",
            // 5 star
            "Each time Sparky's basic attack hits an enemy unit <strong>75</strong> weapon charge is restored, cooldown 0.9 seconds. During [Ultimate Heat], Shatter is increased by <strong>25%</strong>.",
            // 6 star
            "[Scorching Heat] Increases Sparky's basic attack damage to <strong>240%</strong> and doubles the effectiveness of [Heat]. Weapon Skill cooldown reduced to <strong>16</strong> seconds."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["11.50","s"],
        materials:["fire","green","blue"],
        wepBaseStats: [attack, health, crit],
        
        chipImg:"images/chip/ruby.png",
        chipEffect:[
            // 2 set
            "After releasing weapon skill, fire attack is increased by <strong>15%/18%/21%/25%</strong> for <strong>25</strong> seconds, the effect is triggered by different star levels, the effect is not stackable.",
            // 4 set
            "After releasing the weapon skill, gain (mastery) for <strong>15</strong> seconds, cooldown <strong>15</strong> seconds (different of levels (mastery) shares the cooldown), (mastery) cannot be stacked. Each time the basic attack hits the target, the fire damage is increased by <strong>4%/5%/6%/7%</strong> which lasts until the end of (mastery), stacks up to <strong>6</strong> levels, adding up to <strong>1</strong> level every <strong>0.2</strong> seconds, after <strong>6</strong> levels are added, you get a shield to resist <strong>1</strong> damage."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar ',
            // 600 affinity
            "Unlock communication ",
            // 1200 affininty
            "Within <strong>5</strong> meters of Dolly, monsters receive <strong>8%</strong> more fire damage, not stackable",
            // 2000 affinity
            "Unlock communication ",
            // 3000 affinity
            "Unlock communication ",
            // 4000 affinity
            "Within <strong>5</strong> meters of Dolly, monsters receive <strong>8%</strong> more fire damage, not stackable; after throwing Dolly, increase fire ATK by <strong>12%</strong> increases for <strong>10</strong> seconds, not stackable"
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

var fuwasaki = 
    {
        // 流泉彻心
        name:"Saki Fuwa",
        rarity: "SSR",
        pic:"images/fuwasaki_nobg.png",
        artwork:"images/art/fuwasaki.png",
        wepName:"Ryusen Toshin",
        wepImg:"images/wep/fuwasaki.png",
        eleImg:"images/ele_ice.png",
        resoImg:"images/reso_tank.png",
        wepEffect:"Fully charged weapons will <strong>freeze</strong> the target for <strong>2</strong> seconds and leave it frostbitten for <strong>6</strong> seconds. Breaking the ice shell causes additional damage equal to <strong>151.00%</strong> of ATK. While frostbitten, the target's weapon charge rate is reduced by <strong>50%</strong>.",
        exclusiveEffect:'<strong>Ice Resonance</strong>: When equipped with <strong>2</strong> or more Ice weapons, increase Ice ATK by <strong>20%</strong> and Ice Resistance by <strong>40%</strong>, taking effect in the background.',
        awakening:[
            // 1 star
            "When Ice Resonance is active, release any weapon skill <strong>5</strong> times in total to clear the cooldown of all weapon skills, and <strong>double</strong> the damage of [Circulation] and [Counterattack] for <strong>25</strong> seconds.",
            // 2 star
            "Increase the current weapon's base ATK growth by <strong>16%</strong>.",
            // 3 star
            "Flowing Heart: Sword Shadow [Surge] damage increased to <strong>900%</strong> of Ice ATK.<br>Silent Flow: Sword Shadow [Surge] cooldown reduced to <strong>5</strong> seconds.",
            // 4 star
            "Increase the current weapon's base HP growth by <strong>32%</strong>.",
            // 5 star
            "Sword Shadow's [Surge] triggers Phantasia upon hitting a target, shares cooldown with Phantasia trigged by dodging.",
            // 6 star
            "Sword Shadow's [Surge] increases your ice damage by <strong>20%</strong> for <strong>15</strong> seconds upon hitting a target. Activating Sword Shadow's block reduces surrounding enemies' ice damage by <strong>25%</strong> for <strong>12</strong> seconds."
        ],
        energyCharge:["8.00","a"],
        shieldBreak:["13.90","s"],
        materials:["ice","red","black"],
        wepBaseStats: [attack, defense, health],
        
        chipImg:"images/chip/fuwasaki.png",
        chipEffect:[
            // 2 set
            "While Ice Resonance is active: Every <strong>3</strong> seconds, deal <strong>60%/100%/150%/220%</strong> * Ice ATK to enemies within 10 meters of the surrounding area and apply [Frost] effect: 5% slowing effect for <strong>3.5</strong> seconds, after 3 stacks Freeze the target for <strong>3</strong> seconds (excluding bosses) and increase the target's Ice Damage by <strong>12%</strong> (lasts <strong>18</strong> seconds). These matrices work in the background, and for multiple sets the highest star set will be used.",
            // 4 set
            "Attack the target <strong>10</strong> times and add a 12-second [Frozen] mark: Attack the marked target to increase the ice element damage by <strong>25%/28%/31%/34%</strong>. These matrices work in the background, and for multiple sets the highest star set will be used."
        ],
        
        mimicEffect:[
            // 200 affinity
            'Unlock profile avatar ',
            // 600 affinity
            "Unlock communication ",
            // 1200 affininty
            "When health is below <strong>70%</strong>, gain <strong>40%</strong> all-element resistance.",
            // 2000 affinity
            "Unlock communication ",
            // 3000 affinity
            "Unlock communication ",
            // 4000 affinity
            "When health is below <strong>70%</strong>, gain <strong>40%</strong> all-element resistance and an additional <strong>60%</strong> ice resistance.<br>When blocking with Silent Flow [Surge], provide 3 blocks to the teammate with the lowest health (excluding yourself). Lasting <strong>10</strong> seconds, the block amount will not exceed <strong>15%</strong> of the teammate's maximum health."
        ],
        traits: ['Female','157 cm','Mirror City','Libra','11 October'],
        gifts: [
            princeTataFigure, '+60',
            linyeFigure, '+60',
            strangeFragment, '+40',
            strangePlant, '+15'
        ],
        giftPrefs: ['metalware','everyday-items','vera'],
        recChips: [
            
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
            "Increase damage dealt to grievous targets by <strong>12%/15%/18%</strong>."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Bai Ling puts the Glider or the Wayboard away, increase speed by <strong>8%</strong> for <strong>12</strong> seconds. Cooldown: <strong>60</strong> seconds.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Bai Ling puts the Glider or the Wayboard away, increase speed by <strong>15%</strong> for <strong>12</strong> seconds. Cooldown: <strong>60</strong> seconds."
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
        ],
        skills: [
            {
                name: "Quickdraw",
                type: "normal",
                desc: "While on the ground, draw the bow repeatedly to attack 5 times.<br>First Attack: Deal damage equal to <strong>33.7%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal damage equal to <strong>30.2%</strong> of ATK + <strong>2</strong>.<br>Third Attack: Deal damage equal to strong>54.3%</strong> of ATK + <strong>3</strong>.<br>Fourth Attack: Deal damage equal to <strong>83.5%</strong> of ATK + <strong>4</strong>.<br>Fifth Attack: Deal damage equal to <strong>77.7%</strong> of ATK + <strong>4</strong> and knock the target back a short distance.",
            },
            {
                name: "Charged Arrow",
                type: "normal",
                desc: "Tap and hold normal attack to charge the weapon. Deal basic damage equal to <strong>60.5%</strong> of ATK + <strong>3</strong>, and <strong>50%</strong> more for each <strong>1</strong> second spent charging, up to <strong>3</strong> seconds. Deal double damage when scoring a headshot or when hitting an enemy's weakness, knocking them down (headshots are ineffective against Wanderers).",
            },
            {
                name: "Arrow Rain",
                type: "normal",
                desc: "After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to <strong>198.7%</strong> of ATK + <strong>10</strong> area damage to targets.",
            },
            {
                name: "Air Volley",
                type: "normal",
                desc: "While airborne, tap normal attack to attack 4 times in a row in the air.<br>First Attack: Deal damage equal to <strong>38.8%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal damage equal to <strong>51%</strong> of ATK + <strong>3</strong>.<br>Third Attack: Deal damage equal to <strong>77.7%</strong> of ATK + <strong>4</strong>.<br>Fourth Attack: Deal damage equal to <strong>117%</strong> of ATK + <strong>6</strong>.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Loaded Arrow",
                type: "dodge",
                desc: "Tap attack after dodging to trigger Loaded Arrow, knocking the target back by a short distance and dealing damage equal to <strong>85.5%</strong> of ATK + <strong>5</strong>.",
            },
            {
                name: "Piecing Shot",
                type: "skill",
                desc: "Backflips and fires <strong>1</strong> piercing arrow forward, dealing damage equal to <strong>154.8%</strong> of ATK + <strong>8</strong> and knocking the target back. <strong>12</strong>-second cooldown.",
            },
            {
                name: "Explosive Barrage",
                type: "discharge",
                desc: "When <b>weapon charge</b> is full or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong>, and unleashes Explosive Barrage on the target upon switching to this weapon, dealing damage equal to <strong>486.6%</strong> of ATK + <strong>26</strong>.",
            }
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
            "Increase ATK by <strong>15%/19%/22.5%</strong> when there are no enemies within 6 meters."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Hilda uses a vehicle, increase speed by <strong>7%</strong>.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Hilda uses a vehicle, increase speed by <strong>10%</strong>."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "Tap normal attack to enter aiming mode. Hold normal attack to fire continuously, up to <strong>40</strong> rounds. Each shot deals damage equal to <strong>11.4%</strong> of ATK + <strong>1</strong>. Deal double damage when scoring a headshot or hitting the enemy's weakness, knocking them down (headshots are ineffective against Wanderers).",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Turret",
                type: "skill",
                desc: "Enable turret mode and fire large energy orbs, each dealing damage equal to <strong>213.3%</strong> of ATK + <strong>11</strong> and launching the target into the air. Become immune to hitstun and control effects while setting up the turret. <strong>3.5</strong>-second cooldown.",
            },
            {
                name: "Arctic Beam",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong> and fire an arctic beam upon switching to this weapon, dealing damage equal to <strong>329.2%</strong> of ATK + <strong>17</strong> and inflict a <strong>3</strong>-second <strong>freeze</strong> effect. Also reduce the target's frost resistance by <strong>50%</strong> for <strong>10</strong> seconds.",
            }
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
            "Double stun duration from dodge skills.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> Double stun duration from forward dodge skills.",
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
            "Using a discharge skill to switch to the current weapon grants <strong>80/100/120</strong> weapon charge."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When teamed up with Echo, allies within <strong>10</strong> meters around Echo gain a damage boost of <strong>4%</strong> (excluding Echo).",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When teamed up with Echo, allies within <strong>10</strong> meters around Echo gain a damage boost of <strong>6%</strong> (excluding Echo)."
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
        ],
        skills: [
            {
                name: "Thrust",
                type: "normal",
                desc: "While on the ground, swing the spear to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>24.7%</strong> of ATK + <strong>1</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>22.6%</strong> of ATK + <strong>1</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>47.2%</strong> of ATK + <strong>2</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>65.2%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Fifth Attack: Deal damage equal to <strong>114.95%</strong> of ATK + <strong>6</strong> and knock the target back a significant distance.",
            },
            {
                name: "Jumping Strike",
                type: "normal",
                desc: "While airborne, tap normal attack to attack 4 times in a row in the air.<br>First Attack: Deal damage equal to <strong>27.4%</strong> of ATK + <strong>1</strong>.<br>Second Attack: Deal damage equal to <strong>23.2%</strong> of ATK + <strong>1</strong>.<br>Third Attack: Deal damage equal to <strong>45.8%</strong> of ATK + <strong>2</strong>.<br>Fourth Attack: Deal damage equal to <strong>110%</strong> of ATK + <strong>6</strong>.",
            },
            {
                name: "Crashing Drive",
                type: "normal",
                desc: "Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Crashing Drive. While falling, deal damage equal to <strong>8%</strong> of ATK + <strong>1</strong> each hit. Upon landing, deal damage equal to <strong>48.5%</strong> of ATK + <strong>3</strong> and knock the target down. The higher the location is when triggered, the higher the damage dealt, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Spear Flurry",
                type: "normal",
                desc: "After the third normal attack, hold the normal attack button to trigger Spear Flurry. Strike the target and knock them <strong>into the air</strong>, dealing damage equal to <strong>49.2%</strong> of ATK + <strong>3</strong>. Tap again to continue attacking the airborne target, dealing up to <strong>98%</strong> of ATK + <strong>5</strong> damage to a single target.",
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Thrust the spear forward, dealing damage equal to <strong>570%</strong> of ATK + <strong>30</strong>.",
            },
            {
                name: "Flying Kick",
                type: "dodge",
                desc: "Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Kick. Once hit the target, deal damage equal to <strong>72%</strong> of ATK + <strong>4</strong>, knock the target back significantly, and stun them for <strong>1</strong> second (non-Wanderer targets) or <strong>0.5</strong> seconds (Wanderers).",
            },
            {
                name: "Lunging Smash",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger Lunging Smash. Slam the long spear into the ground, dealing damage equal to <strong>52.8%</strong> of ATK + <strong>3</strong> and knocking targets <strong>into the air</strong>.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for <strong>0.5</strong> seconds while dodging.",
            },
            {
                name: "Moonchaser",
                type: "skill",
                desc: "Launch the target into the air and go airborne, dealing damage equal to <strong>127.5%</strong> of ATK + <strong>7</strong>. <strong>25</strong>-second cooldown.",
            },
            {
                name: "Thunderclap",
                type: "discharge",
                desc: "When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon <strong>removes all debuffs from the wielder</strong>, who jumps in the air and throws a lightning spear that causes area explosion to deal <strong>296.7%</strong> x ATK + <strong>16</strong> damage plus <strong>paralyzing</strong> the target for <strong>1</strong> second.",
            }
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
            "Increase speed of obtaining weapon charge by <strong>10%/12.5%/15%</strong>."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Pepper spends satiety to restore HP, increase restoration effect by <strong>100%</strong>.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Pepper spends satiety to restore HP, increase restoration effect by <strong>200%</strong>."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "While on the ground, swing the staff to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>25.1%</strong> of ATK + <strong>1</strong>.<br>Second Attack: Deal damage equal to <strong>18.8%</strong> of ATK + <strong>1</strong>.<br>Third Attack: Deal damage equal to <strong>30.4%</strong> of ATK + <strong>2</strong>.<br>Fourth Attack: Deal damage equal to <strong>41.4%</strong> of ATK + <strong>2</strong>.<br>Fifth Attack: Deal damage equal to <strong>73.2%</strong> of ATK + <strong>4</strong>."
            },
            {
                name: "Soaring Barrage",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to attack 5 times in a row.<br>First Attack: Deal damage equal to <strong>32.5%</strong> of ATK + <strong>2</strong>.<br>Second Attack: Deal damage equal to <strong>23.5%</strong> of ATK + <strong>1</strong>.<br>Third Attack: Deal damage equal to <strong>25.5%</strong> of ATK + <strong>1</strong>.<br>Fourth Attack: Deal damage equal to <strong>45.6%</strong> of ATK + <strong>2</strong>.<br>Fifth Attack: Deal damage equal to <strong>47.7%</strong> of ATK + <strong>3</strong>."
            },
            {
                name: "Moonfall",
                type: "normal",
                desc: "Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every <strong>0.2</strong> seconds, for a total of <strong>57.2%</strong> of ATK + <strong>3</strong> damage."
            },
            {
                name: "Focused Assault",
                type: "normal",
                desc: "After the third normal attack, hold the normal attack button to trigger branch attacks, consuming <strong>300</strong> points of endurance.<br>First Attack: Pull in enemies in front of the user, knocking them <strong>into the air</strong> and dealing damage equal to <strong>16.1%</strong> of ATK + <strong>1</strong> every <strong>0.3</strong> seconds (up to <strong>4</strong> times).<br>Second Attack: Deal damage equal to <strong>18.6%</strong> of ATK + <strong>1</strong> at the target location and to nearby enemies every <strong>0.3</strong> seconds."
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds."
            },
            {
                name: "Surge",
                type: "dodge",
                desc: "Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to <strong>22.6%</strong> of ATK + <strong>1</strong> to targets. Grant <strong>75</strong> weapon charge points upon use."
            },
            {
                name: "Tesseract",
                type: "dodge",
                desc: "Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to <strong>32.1%</strong> of ATK + <strong>2</strong> to targets in its path every <strong>0.3</strong> seconds (up to 5 times). Grant <strong>75</strong> weapon charge points upon use."
            },
            {
                name: "Sanctuary",
                type: "skill",
                desc: "Create an energy shield at the Wanderer's location. Heal allies within the shield for <strong>81.7%</strong> of ATK + <strong>4</strong> every second and reduce their damage taken by <strong>3%</strong> for <strong>10</strong> seconds. <strong>60</strong>-second cooldown."
            },
            {
                name: "Swift Deliverance",
                type: "discharge",
                desc: "When a <b>weapon is fully charged</b> or triggers <b>Phantasia</b>, switching to this weapon from another weapon <strong>removes all debuffs from the wielder</strong>, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for <strong>79%</strong> x ATK + <strong>4</strong> HP for <strong>7</strong> seconds."
            }
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
            "When dealing damage greater than <strong>100%</strong> of ATK, deal additional damage equal to <strong>60%/75%/90%</strong> of ATK. Cooldown: <strong>3</strong> seconds."
        ],
        
        mimicEffect:[
            // 200 affinity
            '',
            // 600 affinity
            "",
            // 1200 affininty
            "When Ene swims, climbs, or glides, reduce endurance consumption by <strong>12%</strong>.",
            // 2000 affinity
            "",
            // 3000 affinity
            "",
            // 4000 affinity
            "When Ene swims, climbs, or glides, reduce endurance consumption by <strong>20%</strong>."
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
        ],
        skills: [
            {
                name: "Normal Attack",
                type: "normal",
                desc: "While on the ground, swing the hammer to attack 4 times in a row.<br>First Attack: Deal damage equal to <strong>76.3%</strong> of ATK + <strong>4</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>62.1%</strong> of ATK + <strong>3</strong> and knock the target back a short distance.<br>Third Attack: Deal damage equal to <strong>157.4%</strong> of ATK + <strong>8</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>263.8%</strong> of ATK + <strong>14</strong> and launch the target.<br>While Outburst is active, swing the hammer to attack 4 times in a row.<br>First Attack: Deal damage equal to <strong>75.5%</strong> of ATK + <strong>4</strong> and knock the target back a short distance.<br>Second Attack: Deal damage equal to <strong>65%</strong> of ATK + <strong>3</strong> and knock the ed target back a short distance.<br>Third Attack: Deal damage equal to <strong>171.3%</strong> of ATK + <strong>9</strong> and knock the target back a short distance.<br>Fourth Attack: Deal damage equal to <strong>315.3%</strong> of ATK + <strong>17</strong> and knock the target <strong>into the air</strong>.",
            },
            {
                name: "Pummel",
                type: "normal",
                desc: "While airborne or after jumping once, tap normal attack to trigger Jumping Blast. Deal damage equal to <strong>121.7%</strong> of ATK + <strong>6</strong> and knock the target into the air.<br>While Outburst is active, deal damage equal to <strong>133.9%</strong> of ATK + <strong>7</strong> and knock the target <strong>into the air</strong>. Deal greater damage depending on the user's altitude when the ability is triggered, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Shockwave",
                type: "normal",
                desc: "Tapping and holding while airborne, Double-jumping, short tapping in the air when there are targets nearby, climbing, jumping backward, or attacking while using the Jetpack will trigger a Shockwave. Knock the target <strong>into the air 4</strong> times, dealing damage equal to <strong>34.8%</strong> of ATK + <strong>2</strong> each time. Cost <strong>250</strong> endurance.<br>While Outburst is active, Shockwave knocks the target <strong>into the air 5</strong> times, dealing damage equal to <strong>38.3%</strong> of ATK + <strong>2</strong> each time. Deal greater damage depending on the user's altitude when the ability is triggered, up to <strong>600%</strong> of ATK.",
            },
            {
                name: "Sneak Attack",
                type: "normal",
                desc: "Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to <strong>427.5%</strong> of ATK + <strong>23</strong>.",
            },
            {
                name: "Focus Smash",
                type: "normal",
                desc: "Tap and hold normal attack to trigger Focus Smash (can be charged up to 3 stacks). Grant immunity to all control effects and hyperbody while charging.<br>First Stack: Deal damage equal to <strong>110%</strong> of ATK + <strong>6</strong> and knock the target into the air.<br>Second Stack: Deal damage equal to <strong>276%</strong> of ATK + <strong>15</strong> and knock the target <strong>into the air</strong>.<br>Third Stack: Deal damage equal to <strong>518%</strong> of ATK + <strong>27</strong> and knock the target <strong>into the air</strong>.<br>While Outburst is active, tap and hold normal attack to trigger Furious Strikes, dealing damage equal to <strong>501.6%</strong> of ATK + <strong>26</strong> and knocking the target <strong>into the air</strong>.",
            },
            {
                name: "Jumping Smash",
                type: "dodge",
                desc: "Use the arrow buttons and the dodge button to trigger Jumping Smash, unleashing a Shockwave that knocks the enemy into the air <strong>4</strong> times, dealing damage equal to <strong>161.6%</strong> of ATK + <strong>9</strong>.",
            },
            {
                name: "Worldsplitter",
                type: "dodge",
                desc: "Tap normal attack during the short period of time after a dodge to trigger Worldsplitter, unleashing <strong>3</strong> shockwaves forward, each dealing damage equal to <strong>52.4%</strong> of ATK + <strong>3</strong>, and knocking enemies into the air.<br>While in Outburst mode, fire <strong>5</strong> shockwaves forward, each dealing damage equal to <strong>52.4%</strong> of ATK + <strong>3</strong> and knocking the target into the air.",
            },
            {
                name: "Dodge",
                type: "dodge",
                desc: "Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for <strong>0.5</strong> seconds.",
            },
            {
                name: "Outburst",
                type: "skill",
                desc: "Switch to activate Outburst, increasing damage dealt for <strong>25</strong> seconds. While Outburst is active, skills trigger Windfury, dealing damage equal to <strong>219%</strong> of ATK + <strong>12</strong>, knock the target <strong>into the air</strong>, and create an air current on the ground. While standing in the current, dodging has no cost. Cooldown: <strong>45</strong> seconds (Windfury's cooldown: <strong>10</strong> seconds).",
            },
            {
                name: "Overwhelming Maul",
                type: "discharge",
                desc: "When <b>weapon charge is full</b> or <b>Phantasia</b> is triggered, <strong>remove all debuffs from the wielder</strong> and knock nearby targets <strong>into the air</strong> upon switching to this weapon, dealing damage equal to <strong>153.3%</strong> of ATK + <strong>8</strong>. Also summon a hammer to fall on nearby targets, dealing damage equal to <strong>153.3%</strong> of ATK + <strong>8</strong>.",
            }
        ]
}

// Chip exclusives
var roberag = {
    name:"Robarg",
    rarity:"SR",
    chipImg:"images/chip/roberag.png",
    chipEffect:[
            //
            "",
            // 3 set
            "When a target is shattered, poison the target and deal damage equal to <strong>45%/56%/67.5%</strong> of ATK every second for <strong>10</strong> seconds."
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
            "Deal higher damage at lower HP. Deal maximum damage when HP is <strong>20%</strong>. The damage can be increased by up to <strong>20%/25%/30%</strong>."
        ],
    artwork:''
}
var frozenmech = {
    name:"Frost Bot",
    rarity:"SR",
    chipImg:"images/chip/frozenmech.png",
    chipEffect:[
            //
            "",
            // 3 set
            "When HP is below <strong>40%</strong>, using a discharge skill to switch to the current weapon restores HP equal to <strong>160%/200%/240%</strong> of ATK."
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
            "Increase damage dealt by <strong>6%/7.5%/9%</strong> for each enemy nearby. Up to 3 stacks."
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
            "Upon switching to the weapon, gain <strong>50%/62.5%/75%</strong> damage reflection for <strong>3</strong> seconds. Cooldown: <strong>30</strong> seconds. Upon switching to another weapon, gain a <strong>20%/25%/30%</strong> damage boost for <strong>5</strong> seconds. Cooldown: <strong>30</strong> seconds."
        ],
    artwork:''
}
var burstingcore = {
    name:"Explosive Core",
    rarity:"R",
    chipImg:"images/chip/burstingcore.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Increase damage dealt by flame weapons by <strong>6%</strong>."
        ],
    artwork:''
}
var transportthinking = {
    name:"Bullseye",
    rarity:"R",
    chipImg:"images/chip/transportthinking.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Increase damage dealt by frost weapons by <strong>6%</strong>."
        ],
    artwork:''
}
var guardscode = {
    name:"Tenet Guard",
    rarity:"R",
    chipImg:"images/chip/guardscode.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Increase damage dealt by volt weapons by <strong>6%</strong>."
        ],
    artwork:''
}
var arrogantprovocation = {
    name:"Provocateurs",
    rarity:"R",
    chipImg:"images/chip/arrogantprovocation.png",
    chipEffect:[
            //
            "",
            // 3 set
            "Increase damage dealt by physical weapons by <strong>6%</strong>."
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
            "When the shield is broken, reduce the speed of the attacker by <strong>35%</strong> for <strong>6</strong> seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> When the shield is broken, reduce the speed of the attacker and nearby enemies by <strong>35%</strong> for <strong>6</strong> seconds.",
            // 2 star
            "After shield breaks, increase final damage by <strong>20%</strong> for <strong>10</strong> seconds.<br><abbr title='China Exclusive' class='cn-flag'>CN</abbr> After shield breaks, increase final damage equal to the percentage of HP lost with a minimum of <strong>30%</strong>, for <strong>10</strong> seconds.",
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