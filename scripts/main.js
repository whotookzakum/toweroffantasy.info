jQuery(document).ready(function ($){
    // toweroffantasy.info
    // tof.wiki
    let mimic = null;
    
    $(".mimic-button").click(function(){
        
        
        
        if ($(this).is("#btn-samir")) { mimic = samir; }
        else if ($(this).is("#btn-coco")) { mimic = coco; }
        else if ($(this).is("#btn-king")) { mimic = king; }
        else if ($(this).is("#btn-shiro")) { mimic = shiro; }
        else if ($(this).is("#btn-cobalt")) { mimic = cobalt; }
        else if ($(this).is("#btn-claudia")) { mimic = claudia; }
        else if ($(this).is("#btn-baiyuekui")) { mimic = baiyuekui; }
        else if ($(this).is("#btn-meryl")) { mimic = meryl; }
        else if ($(this).is("#btn-huma")) { mimic = huma; }
        else if ($(this).is("#btn-hane")) { mimic = hane; }
        else if ($(this).is("#btn-karasuma")) { mimic = karasuma; }
        else if ($(this).is("#btn-zero")) { mimic = zero; }
        /* 
        $("#mimic-info").toggleClass("showing");
        $("#mimic-info").toggleClass("hidden"); */
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
    /*
    $(".content-tab-1").click(function(){
        
        if ($(this).is("#star-1")) {
            $("#awakening-effects").html(mimic.awakening[0]);
        }
        else if ($(this).is("#star-2")) {
            $("#awakening-effects").html(mimic.awakening[1]);
        }
        else if ($(this).is("#star-3")) {
            $("#awakening-effects").html(mimic.awakening[2]);
        }
        else if ($(this).is("#star-4")) {
            $("#awakening-effects").html(mimic.awakening[3]);
        }
        else if ($(this).is("#star-5")) {
            $("#awakening-effects").html(mimic.awakening[4]);
        }
        else if ($(this).is("#star-6")) {
            $("#awakening-effects").html(mimic.awakening[5]);
        }
        
    }); */
    
});
