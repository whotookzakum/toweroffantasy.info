jQuery(document).ready(function ($) {
    
    
    
    
    
    // Damage Calculator
    
    
    

    
    // noncrits damage
    
    
    
    
    var resoBuffTypes = new Map([
        ['none', 0],
        ['balancedSolo', 0.05],
        ['balancedGroup', 0.25],
        ['attackerSolo', 0.10],
        ['attackerGroup', 0.50]
    ]);
    var wepBuffTypes = new Map([
        ['none', 0],
        ['hane1', 0.24],
        ['hane6', 0.40],
        ['claudia1', 0.24],
        ['marc3', 0.35]
    ]);
    var bonusWepEffectTypes = new Map([
        ['none', 0],
        ['baiyuekui', 0.15],
        ['frigg', 0.15]
    ]);
    var mimicBuffTypes = new Map([
        ['none', 0],
        ['samir', 0.20],
        ['karasuma', 0.10] // +12% for 12 seconds when entering combat
    ]);
    
    var chipBuffTypes = new Map([
        ['none', [0, 0, 0, 0]],
        ['cobalt4', [0.12, 0.15, 0.18, 0.21]], // on abnormal status inflicted enemies
        ['claudia2', [0.13, 0.17, 0.20, 0.23]], // while airborne
        ['claudia4', [0.36, 0.45, 0.54, 0.63]], // on combo skills for 15s
        ['karasuma4', [0.33, 0.42, 0.50, 0.58]], // crit damage on targets below 60% hp
        ['king2', [0.12, 0.15, 0.18, 0.21]], // with 3 stacks for 25s
        ['samir2', [0.15, 0.195, 0.24, 0.30]],
        ['samir4', [0.10, 0.125, 0.15, 0.175]], // can not crit
        ['shiro2', [0.15, 0.19, 0.225, 0.26]], // targets above 50% hp
        ['shiro4', [0.20, 0.25, 0.30, 0.35]], // when entering combat, for 20s
        ['hane2', [0.10, 0.125, 0.15, 0.175]] // if no enemy within 4m
    ]);
    
    var wepBuff = 1;
    var wepBuffCheckCount = 0;
    var chipBuffOne = 0;
    
    function calculateTotalDmgPercent() {
        var critRate = parseFloat(document.getElementById('critRate').value) * .01;
        var critDmg = parseFloat(document.getElementById('critDmg').value) * .01;
        var dmgFromNoncrit = 1 * ( 1 - critRate );
        var dmgFromCrit = ( 1 + critDmg ) * critRate;
        var arcCore = 1 + (parseFloat(document.getElementById('arcCore').value) * .01);
        var enemyEleResist = parseFloat(document.getElementById('enemyEleResist').value);
        if (enemyEleResist > 0) {
            if (enemyEleResist == 1) {
                enemyEleResist = 0.5;
            }
            else {
                enemyEleResist = 0.65;
            }
        } 
        var enemyEleWeakness = parseFloat(document.getElementById('enemyEleWeakness').value);
        if (enemyEleWeakness > 0) {
            enemyEleWeakness = 0.3;
        }
        var otherMultipliers = parseFloat(document.getElementById('otherMultipliers').value) * .01;
        var resoBuff = resoBuffTypes.get(document.getElementById('resoBuffDropdown').value);
        var bonusWepEffect = bonusWepEffectTypes.get(document.getElementById('bonusWepEffectDropdown').value);
        // if using a bonus effect, disable 3rd wep buff
        var mimicBuff = mimicBuffTypes.get(document.getElementById('mimicBuffDropdown').value);
        
        
        
        // Calculate chip buff from selected chip and selected constellation
        // Find selected chip
        var chipSet1 = chipBuffTypes.get(document.getElementById('chipSet1Dropdown').value);
        // Constellation level is the index for [chip values]
        chipBuffOne = chipSet1[parseInt(document.querySelector('input[name="chipSet1StarOptions"]:checked').value)];
        
        
        var totalDmg = 1 * (dmgFromNoncrit + dmgFromCrit) * (1 - enemyEleResist) * (1 + enemyEleWeakness) * (wepBuff) * (1 + bonusWepEffect) * arcCore * (1 + mimicBuff) * (1 + resoBuff) * (1 + chipBuffOne) * (1 + otherMultipliers);
        
        $("#totalDmgOutput").html(Math.round(totalDmg * 100) + "%");
    }
        
    
    
    $("#arcCore").on('keyup', function(){
        calculateTotalDmgPercent();
    });
    $("#critRate").on('keyup', function(){
        calculateTotalDmgPercent();
    });
    $("#enemyEleResist").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#enemyEleWeakness").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#mimicBuffDropdown").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#resoBuffDropdown").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#wepBuffOptions").on('input', function(){
        
        // If hane1 is enabled, disable hane6
        if (document.getElementById("wepBuffHane1").checked == true) {
            document.getElementById("wepBuffHane6").disabled = true;
        }
        else {
            document.getElementById("wepBuffHane6").disabled = false;
        }
        // If hane6 is enabled, disable hane1
        if (document.getElementById("wepBuffHane6").checked == true) {
            document.getElementById("wepBuffHane1").disabled = true;
        }
        else {
            document.getElementById("wepBuffHane1").disabled = false;
        }
        
        wepBuff = 1;
        wepBuffCheckCount = 0;
        $("#wepBuffOptions input:checked").each(function(){
            wepBuffCheckCount += 1;
            wepBuff *= 1 + wepBuffTypes.get(this.value);
        });
        
        // If 3 weapon buffs are selected, disable Bonus Weapon Effect because buffers =/= bai/frigg
        if (wepBuffCheckCount >= 3) {
            document.getElementById("bonusWepEffectDropdown").disabled = true;
            document.getElementById("bonusWepEffectDropdown").value = 'none';
        } else {
            document.getElementById("bonusWepEffectDropdown").disabled = false;
        }
        
        // If 3 are selected, disable the others (may be useful when more %dmg buffers arrive)

        calculateTotalDmgPercent();
    });
    $("#bonusWepEffectDropdown").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#otherMultipliers").on('keyup', function(){
        calculateTotalDmgPercent();
    });
    $("#chipSet1Dropdown").on('input', function(){
        
        // Hide constellation level selector
        if (document.getElementById("chipSet1Dropdown").value == 'none') {
            $("#chipSet1StarOptions").addClass("d-none");
        }
        else {
            $("#chipSet1StarOptions").removeClass("d-none");
        }
        
        // Add lemma to the total damage value
        if (document.getElementById("chipSet1Dropdown").value == 'claudia2') {
            $("#additionalText").html("while airborne");
        }
        else if (document.getElementById("chipSet1Dropdown").value == 'hane2') {
            $("#additionalText").html("while no enemies are within 4 meters");
        }
        else if (document.getElementById("chipSet1Dropdown").value == 'cobalt4') {
            $("#additionalText").html("to targets inflicted with an abnormal status");
        }
        else if (document.getElementById("chipSet1Dropdown").value == 'king2') {
            $("#additionalText").html("with 3 stacks of KING's chip buff");
        }
        else {
            $("#additionalText").html(" ");
        }
        
        
        calculateTotalDmgPercent();
    });
    
    $("#chipSet1StarOptions").on('input', function(){

        calculateTotalDmgPercent();
    });
    
});