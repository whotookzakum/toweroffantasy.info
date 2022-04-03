// TO DO
// World map with passcodes, world bosses (and their drops)
// Joint op day-of-the-week dungeon rewards
// Shield break and energy rechard tier should change with the corresponding values


jQuery(document).ready(function ($){
    
    // Popper Popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // Popper Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    setMimicInfo(meryl);
    
    $(".mimic-button").click(function(){
        if ($(this).children().is("#btn-samir")) { setMimicInfo(samir); }
        else if ($(this).children().is("#btn-coco")) { setMimicInfo(coco); }
        else if ($(this).children().is("#btn-king")) { setMimicInfo(king); }
        else if ($(this).children().is("#btn-shiro")) { setMimicInfo(shiro); }
        else if ($(this).children().is("#btn-meryl")) { setMimicInfo(meryl); }
        else if ($(this).children().is("#btn-huma")) { setMimicInfo(huma); }
        else if ($(this).children().is("#btn-hane")) { setMimicInfo(hane); }
        else if ($(this).children().is("#btn-karasuma")) { setMimicInfo(karasuma); }
        else if ($(this).children().is("#btn-zero")) { setMimicInfo(zero); }
        else if ($(this).children().is("#btn-claudia")) { setMimicInfo(claudia); }
        else if ($(this).children().is("#btn-cobalt")) { setMimicInfo(cobalt); }
        else if ($(this).children().is("#btn-baiyuekui")) { setMimicInfo(baiyuekui); }
        else if ($(this).children().is("#btn-marc")) { setMimicInfo(marc); }
        else if ($(this).children().is("#btn-nemesis")) { setMimicInfo(nemesis); }
        else if ($(this).children().is("#btn-frigg")) { setMimicInfo(frigg); }
        else if ($(this).children().is("#btn-peppa")) { setMimicInfo(peppa); }
        else if ($(this).children().is("#btn-hilda")) { setMimicInfo(hilda); }
        else if ($(this).children().is("#btn-xi")) { setMimicInfo(xi); }
        else if ($(this).children().is("#btn-bailing")) { setMimicInfo(bailing); }
        else if ($(this).children().is("#btn-manaka")) { setMimicInfo(manaka); }
    });
    
    function setMimicInfo (m) {
        $("#mimic-name").html(m.name);
        $("#wep-name").html(m.wepName);
        $("#wep-type-img").attr('src',m.resoImg);
        $("#wep-element-img").attr('src',m.eleImg);
        $("#m-pane").attr('src',m.paneImg);
        $("#wep-img").attr('src',m.wepImg);
        $("#wep-effect").html(m.wepEffect);
        $("#energy-charge").html(m.energyCharge[0]);
        $("#energy-charge-tier").html(m.energyCharge[1]);
        $("#shield-break").html(m.shieldBreak[0]);
        $("#shield-break-tier").html(m.shieldBreak[1]);
        $("#energy-charge-tier").removeClass("wep-tier-a");
        $("#energy-charge-tier").removeClass("wep-tier-s");
        $("#shield-break-tier").removeClass("wep-tier-a");
        $("#shield-break-tier").removeClass("wep-tier-s");
        if (m.energyCharge[1] === "s") {
            $("#energy-charge-tier").addClass("wep-tier-s");
        } 
        else if (m.energyCharge[1] === "a") {
            $("#energy-charge-tier").addClass("wep-tier-a");
        }
        if (m.shieldBreak[1] === "s") {
            $("#shield-break-tier").addClass("wep-tier-s");
        } 
        else if (m.shieldBreak[1] === "a") {
            $("#shield-break-tier").addClass("wep-tier-a");
        }
        $("#star-1").html(m.awakening[0]);
        $("#star-2").html(m.awakening[1]);
        $("#star-3").html(m.awakening[2]);
        $("#star-4").html(m.awakening[3]);
        $("#star-5").html(m.awakening[4]);
        $("#star-6").html(m.awakening[5]);
        $("#chip-2").html(m.chipEffect[0]);
        $("#chip-4").html(m.chipEffect[1]);
        $("#affinity-200").html(m.mimicEffect[0]);
        $("#affinity-600").html(m.mimicEffect[1]);
        $("#affinity-1200").html(m.mimicEffect[2]);
        $("#affinity-2000").html(m.mimicEffect[3]);
        $("#affinity-3000").html(m.mimicEffect[4]);
        $("#affinity-4000").html(m.mimicEffect[5]);
        
        $("#mimic-gender").html(m.traits[0]);
        $("#mimic-height").html(m.traits[1]);
        $("#mimic-birthplace").html(m.traits[2]);
        $("#mimic-horoscope").html(m.traits[3]);
        $("#mimic-birthday").html(m.traits[4]);
        $("#mimic-pic").attr('src',m.pic);
        $("#banner-character").attr('src',m.pic);
    }
    
    
});
