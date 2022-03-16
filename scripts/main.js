// TO DO
// Food, Gadgets, Mounts
// About
// World map with passcodes, world bosses (and their drops)
// Joint op day-of-the-week dungeon rewards
// Shield break and energy rechard tier should change with the corresponding values


jQuery(document).ready(function ($){
    // toweroffantasy.info
    // tof.wiki
    var mimic = null;
    
    $(".mimic-button").click(function(){
        
        
        
        if ($(this).children().is("#btn-samir")) { mimic = samir; }
        else if ($(this).children().is("#btn-coco")) { mimic = coco; }
        else if ($(this).children().is("#btn-king")) { mimic = king; }
        else if ($(this).children().is("#btn-shiro")) { mimic = shiro; }
        else if ($(this).children().is("#btn-cobalt")) { mimic = cobalt; }
        else if ($(this).children().is("#btn-claudia")) { mimic = claudia; }
        else if ($(this).children().is("#btn-baiyuekui")) { mimic = baiyuekui; }
        else if ($(this).children().is("#btn-meryl")) { mimic = meryl; }
        else if ($(this).children().is("#btn-huma")) { mimic = huma; }
        else if ($(this).children().is("#btn-hane")) { mimic = hane; }
        else if ($(this).children().is("#btn-karasuma")) { mimic = karasuma; }
        else if ($(this).children().is("#btn-zero")) { mimic = zero; }

        $("#mimic-name").html(mimic.name);
        $("#wep-name").html(mimic.wepName);
        $("#wep-type-img").attr('src',mimic.resoImg);
        $("#wep-element-img").attr('src',mimic.eleImg);
        $("#mimic-pane").attr('src',mimic.paneImg);
        $("#wep-img").attr('src',mimic.wepImg);
        $("#wep-effect").html(mimic.wepEffect);
        $("#energy-charge").html(mimic.energyCharge);
        $("#shield-break").html(mimic.shieldBreak);
        $("#star-1").html(mimic.awakening[0]);
        $("#star-2").html(mimic.awakening[1]);
        $("#star-3").html(mimic.awakening[2]);
        $("#star-4").html(mimic.awakening[3]);
        $("#star-5").html(mimic.awakening[4]);
        $("#star-6").html(mimic.awakening[5]);
        $("#chip-2").html(mimic.chipEffect[0]);
        $("#chip-4").html(mimic.chipEffect[1]);
        $("#affinity-200").html(mimic.mimicEffect[0]);
        $("#affinity-600").html(mimic.mimicEffect[1]);
        $("#affinity-1200").html(mimic.mimicEffect[2]);
        $("#affinity-2000").html(mimic.mimicEffect[3]);
        $("#affinity-3000").html(mimic.mimicEffect[4]);
        $("#affinity-4000").html(mimic.mimicEffect[5]);
        
        $("#mimic-gender").html(mimic.traits[0]);
        $("#mimic-height").html(mimic.traits[1]);
        $("#mimic-birthplace").html(mimic.traits[2]);
        $("#mimic-horoscope").html(mimic.traits[3]);
        $("#mimic-birthday").html(mimic.traits[4]);
        $("#mimic-pic").attr('src',mimic.pic);
        $("#banner-character").attr('src',mimic.pic);
        
    });
    
    
});
