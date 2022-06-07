jQuery(document).ready(function ($) {
    
    var resoBuffTypes = new Map([
        ['other', 0],
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
        ['karasuma2', [0.33, 0.42, 0.50, 0.58]], // crit damage on targets below 60% hp
        ['king2', [0.12, 0.15, 0.18, 0.21]], // with 3 stacks for 25s
        ['samir2', [0.15, 0.195, 0.24, 0.30]],
        ['samir4', [0.10, 0.125, 0.15, 0.175]], // can not crit
        ['shiro2', [0.15, 0.19, 0.225, 0.26]], // targets above 50% hp
        ['hane2', [0.10, 0.125, 0.15, 0.175]] // if no enemy within 4m
    ]);
    
    var wepBuff = 1;
    var wepBuffsCheckedAmt = 0;
    var chipBuffOne = 0;
    var chipBuffTwo = 0;
    var heavilyWounded = 1;
    
    function calculateTotalDmgPercent() {
        var critRate = parseFloat(document.getElementById('critRate').value) * .01;
        var critDmg = parseFloat(document.getElementById('critDmg').value) * .01;
        var dmgFromNoncrit = ( 1 - critRate );
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
            if (enemyEleWeakness === 1) {
                enemyEleWeakness = 0.3;
            }
            else if (enemyEleWeakness === 2) {
                enemyEleWeakness = 0.5;
            }
            else if (enemyEleWeakness === 3) {
                enemyEleWeakness = 0.75;
            }
        }
        var otherMultipliers = parseFloat(document.getElementById('otherMultipliers').value) * .01;
        var resoBuff = resoBuffTypes.get(document.getElementById('resoBuffDropdown').value);
        var bonusWepEffect = bonusWepEffectTypes.get(document.getElementById('bonusWepEffectDropdown').value);
        var mimicBuff = mimicBuffTypes.get(document.getElementById('mimicBuffDropdown').value);
        
        
        // CHIP SET 1
        // Get selected chip
        var selectedChipSet = document.getElementById('chipSet1Dropdown').value;
        // Fetch the array containing values for that chip
        var chipSet1 = chipBuffTypes.get(selectedChipSet);
        // Calculate buff value based on constellation level
        chipBuffOne = chipSet1[parseInt(document.querySelector('input[name="chipSet1StarOptions"]:checked').value)];
        if (selectedChipSet == 'karasuma2') {
            dmgFromCrit = (( 1 + critDmg ) * critRate * 0.40) + (( 1 + critDmg + chipBuffOne ) * critRate * 0.60);
            chipBuffOne = 0;
        }
        else if (selectedChipSet == 'samir4') {
            // Calculate the damage from non crit for samir4
            dmgFromNoncrit *= (1 + chipBuffOne);
            
            // Set the buff value to samir2
            chipSet1 = chipBuffTypes.get('samir2');
            chipBuffOne = chipSet1[parseInt(document.querySelector('input[name="chipSet1StarOptions"]:checked').value)];
        }
        else if (selectedChipSet == 'shiro2') {
            chipBuffOne *= 0.5;
        }
        
        // CHIP SET 2
        // Get selected chip
        selectedChipSet = document.getElementById('chipSet2Dropdown').value;
        var chipSet2 = chipBuffTypes.get(selectedChipSet); // returns array
        // Calculate buff value based on constellation level
        chipBuffTwo = chipSet2[parseInt(document.querySelector('input[name="chipSet2StarOptions"]:checked').value)];
        if (selectedChipSet == 'karasuma2') {
            dmgFromCrit = (( 1 + critDmg ) * critRate * 0.40) + (( 1 + critDmg + chipBuffTwo ) * critRate * 0.60);
            chipBuffTwo = 0;
        }
        else if (selectedChipSet == 'samir4') {
            
            chipBuffTwo = 0;
        }
        else if (selectedChipSet == 'shiro2') {
            chipBuffTwo *= 0.5;
        }
        
        
        
        
        
        var totalDmg = 1 * (dmgFromNoncrit + dmgFromCrit) * (1 - enemyEleResist) * (1 + enemyEleWeakness) * (wepBuff) * (1 + bonusWepEffect) * arcCore * (1 + mimicBuff) * (1 + resoBuff) * (1 + chipBuffOne) * (1 + chipBuffTwo) * heavilyWounded * (1 + otherMultipliers);
        
        $("#totalDmgOutput").html( (Math.round(totalDmg * 100 * 100))/100 + "%");
    }
        
    
    
    $("#arcCore").on('keyup', function(){
        calculateTotalDmgPercent();
    });
    $("#critRate").on('keyup', function(){
        calculateTotalDmgPercent();
    });
    $("#critDmg").on('keyup', function(){
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
        validateWepBuffs();
        calculateTotalDmgPercent();
    });
    $("#bonusWepEffectDropdown").on('input', function(){
        validateWepBuffs();
        calculateTotalDmgPercent();
    });
    $("#otherMultipliers").on('keyup', function(){
        calculateTotalDmgPercent();
    });
    $("#chipSet1Dropdown").on('input', function(){
        /*
        // Disable and reset values for set 2; disable set 1 & 2 awakening
        if (document.getElementById("chipSet1Dropdown").value == 'none') {
            document.getElementById('chipSet2Dropdown').disabled = true;
            document.getElementById('chipSet2Dropdown').value = 'none';
            $("input[name='chipSet1StarOptions']").each(function(){
                this.disabled = true;
            });
            $("input[name='chipSet2StarOptions']").each(function(){
                this.disabled = true;
            });
        }
        // Enable set 2 & set 1 awakening
        else {
            document.getElementById('chipSet2Dropdown').disabled = false;
            $("input[name='chipSet1StarOptions']").each(function(){
                this.disabled = false;
            });
        }
        */
        
        // Disable and reset values for set 2; disable set 1 & 2 awakening
        if (document.getElementById("chipSet1Dropdown").value == 'samir4' || document.getElementById("chipSet1Dropdown").value == 'cobalt4') {
            
            document.getElementById('chipSet2Dropdown').disabled = true;
            document.getElementById('chipSet2Dropdown').value = 'none';
            $("input[name='chipSet2StarOptions']").each(function(){
                this.disabled = true;
            });
            
        }
        // Enable set 2 & set 1 awakening
        else {
            
            document.getElementById('chipSet2Dropdown').disabled = false;
            $("input[name='chipSet2StarOptions']").each(function(){
                this.disabled = false;
            });
            
        }
        
        chipSetFootnote('chipSet1Dropdown');
        
        calculateTotalDmgPercent();
    });
    
    $("#chipSet1StarOptions").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#chipSet2Dropdown").on('input', function(){
        /*
        // Disable set 2 awakening
        if (document.getElementById("chipSet2Dropdown").value == 'none') {
            $("input[name='chipSet2StarOptions']").each(function(){
                this.disabled = true;
            });
        }
        // Enable set 2 awakening
        else {
            $("input[name='chipSet2StarOptions']").each(function(){
                this.disabled = false;
            });
        }
        */
        
        chipSetFootnote('chipSet2Dropdown');
        
        calculateTotalDmgPercent();
    });
    
    $("#chipSet2StarOptions").on('input', function(){
        calculateTotalDmgPercent();
    });
    $("#heavilyWounded").on('input', function(){
        
        if (document.getElementById('heavilyWounded').checked == true) {
            heavilyWounded = 1.2;
        }
        else {
            heavilyWounded = 1.0;
        }
        
        
        
        calculateTotalDmgPercent();
    });
    
    
    function validateWepBuffs() {
        
        // If hane1 is enabled, disable hane6
        if (document.getElementById("wepBuffHane1").checked == true) {
            document.getElementById("wepBuffHane6").disabled = true;
        }
        else if ( !(document.getElementById("wepBuffHane1").checked == true) ) {
            document.getElementById("wepBuffHane6").disabled = false;
        }
        // If hane6 is enabled, disable hane1
        if (document.getElementById("wepBuffHane6").checked == true) {
            document.getElementById("wepBuffHane1").disabled = true;
        }
        else if ( !(document.getElementById("wepBuffHane6").checked == true) ) {
            document.getElementById("wepBuffHane1").disabled = false;
        }
        
        // Find amount of checked inputs
        wepBuff = 1;
        wepBuffsCheckedAmt = 0;
        $("#wepBuffOptions input:checked").each(function(){
            wepBuffsCheckedAmt += 1;
            wepBuff *= 1 + wepBuffTypes.get(this.value);
        });
        
        // If 3 weapon buffs are selected, disable bonus effect and other wep effects
        if (wepBuffsCheckedAmt >= 3) {
            // Disable bonus effect and reset value to none
            document.getElementById("bonusWepEffectDropdown").disabled = true;
            document.getElementById("bonusWepEffectDropdown").value = 'none';
            // Disable unchecked wep buffs
            $("#wepBuffOptions input").each(function(){
                if (!(this.checked == true)) {
                    this.disabled = true;
                }
            });
        } 
        // If 2 weapon buffs and a bonus wep effect are selected, disable other wep buffs
        else if (wepBuffsCheckedAmt === 2 && document.getElementById('bonusWepEffectDropdown').value !== 'none') {
            // Disable unchecked wep buffs
            $("#wepBuffOptions input").each(function(){
                if (!(this.checked == true)) {
                    this.disabled = true;
                }
            });
        }
        // Enable if only 2 or less options are selected
        else {
            // Enable bonus effect
            document.getElementById("bonusWepEffectDropdown").disabled = false;
            
            // if (bonus effect disabled), enable wep buffs BUT mitigate for duplicates of the same wep
        }
        
    }
    
    
    function chipSetFootnote(selectedChipSet) {
        
        // Select which footnote to amend based on which chip set was passed
        var selectedFootnote = $("#footnote-one");;
        if (selectedChipSet == 'chipSet2Dropdown') {
            selectedFootnote = $("#footnote-two");
        }
        
        // Add footnote based on chip
        
        switch (document.getElementById(selectedChipSet).value) {
            case 'claudia2':
                selectedFootnote.html("while airborne");
                break;
            case 'hane2':
                selectedFootnote.html("while no enemies are within 4 meters");
                break;
            case 'cobalt4':
                selectedFootnote.html("to targets inflicted with an abnormal status");
                $("#footnote-two").html("");
                break;
            case 'king2':
                selectedFootnote.html("with 3 stacks of KING's chip buff");
                break;
            case 'shiro2':
            case 'karasuma2':
                selectedFootnote.html("overall damage");
                break;
            case 'samir4':
                selectedFootnote.html("(Samir's 4 set does not crit)");
                $("#footnote-two").html("");
                break;
            default:
                selectedFootnote.html("");
        }
        
        // Warn user if chip sets are identical and set 1 is not "none"
        if (document.getElementById('chipSet1Dropdown').value === document.getElementById('chipSet2Dropdown').value && document.getElementById('chipSet1Dropdown').value != 'none') {
            $("#footnote-warning").html("Warning: Chip sets 1 and 2 are identical")
        }
        else {
            $("#footnote-warning").html("&nbsp;")
        }
        
    }
    
    $("#reset-button").click(function(){
        document.getElementById('critRate').value = 0;
        document.getElementById('critDmg').value = 50;
        document.getElementById('arcCore').value = 0;
        document.getElementById('enemyEleResist').value = 0;
        document.getElementById('enemyEleWeakness').value = 0;
        document.getElementById('otherMultipliers').value = 0;
        document.getElementById('resoBuffDropdown').value = 'other';
        document.getElementById('bonusWepEffectDropdown').value = 'none';
        document.getElementById('mimicBuffDropdown').value = 'none';
        document.getElementById('heavilyWounded').checked = false;
        heavilyWounded = 1;
        document.getElementById('chipSet1Dropdown').value = 'none';
        document.getElementById('chipSet1StarOptions').value = '0';
        document.getElementById('chipSet2Dropdown').value = 'none';
        document.getElementById('chipSet2StarOptions').value = '0';
        $("#wepBuffOptions input").each(function(){
            this.checked = false;
        });
        wepBuff = 1;
        $("#footnote-one").html("");
        $("#footnote-two").html("");
        
        calculateTotalDmgPercent();
    });
    
    
});