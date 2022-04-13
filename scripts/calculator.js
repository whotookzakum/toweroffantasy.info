jQuery(document).ready(function ($) {
    
    
    
    
    
    // Damage Calculator
    
    
    

    
    // noncrits damage
    
    
    
    
    
    
    
    
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
        
        
        var wepBuff = 0;
        var mimicBuff = 0;
        var resoBuff = 0;
        var bonusWepEffect = 0;
        var chipBuff = 0;
        
        console.log("CRIT RATE: " + critRate);
        console.log("CRIT DMG " + critDmg);
        console.log("DMG FROM NONCRITS " + dmgFromNoncrit);
        console.log("DMG FROM CRITS " + dmgFromCrit);
        console.log("ARC CORE " + arcCore);
        console.log("RESISTANCE MULTIPLIER " + enemyEleResist);
        console.log("WEAKNESS MULTIPLIER " + enemyEleWeakness);
        
        var totalDmgPercent = 1 * (dmgFromNoncrit + dmgFromCrit) * (1 - enemyEleResist) * (1 + enemyEleWeakness) * (1 + wepBuff) * (1 + bonusWepEffect) * arcCore * (1 + mimicBuff) * (1 + resoBuff) * (1 + chipBuff);
        console.log("TOTAL DAMAGE IS " + totalDmgPercent);
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
    
});