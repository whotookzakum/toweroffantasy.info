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
        $("#mimic-name-2").html(m.name);
        if (m.name === "Manaka" || m.name === "Hilda" || m.name === "Peppa" || m.name === "Bai Ling" || m.name === "Xi") {
            $("#mimic-tier").removeClass("wep-tier-s");
            $("#mimic-tier").addClass("wep-tier-a");
            $("#mimic-tier").html("SR");
        } else {
            $("#mimic-tier").removeClass("wep-tier-a");
            $("#mimic-tier").addClass("wep-tier-s");
            $("#mimic-tier").html("SSR");
        }
        $("#wep-name").html(m.wepName);
        $("#wep-type-img").attr('src',m.resoImg);
        $("#wep-element-img").attr('src',m.eleImg);
        $("#mimic-bg-modal").attr('src', m.artwork);
        $("#wep-img").attr('src',m.wepImg);
        $("#wep-effect").html(m.wepEffect);
        if (m.hasOwnProperty('exclusiveEffect')) {
            $("#exclusive-effect-wrapper").removeClass("d-none");
            $("#exclusive-effect").html(m.exclusiveEffect);
        } else {
            $("#exclusive-effect-wrapper").addClass("d-none");
        }
        $("#energy-charge").html(m.energyCharge[0]);
        $("#energy-charge-tier").html(m.energyCharge[1]);
        $("#shield-break").html(m.shieldBreak[0]);
        $("#shield-break-tier").html(m.shieldBreak[1]);
        $("#energy-charge-tier").removeClass("wep-tier-a");
        $("#energy-charge-tier").removeClass("wep-tier-s");
        $("#shield-break-tier").removeClass("wep-tier-a");
        $("#shield-break-tier").removeClass("wep-tier-s");
        if (m.energyCharge[1] === "s") {$("#energy-charge-tier").addClass("wep-tier-s");} 
        else if (m.energyCharge[1] === "a") {$("#energy-charge-tier").addClass("wep-tier-a");}
        if (m.shieldBreak[1] === "s") {$("#shield-break-tier").addClass("wep-tier-s");} 
        else if (m.shieldBreak[1] === "a") {$("#shield-break-tier").addClass("wep-tier-a");}
        var mimicEle = m.eleImg.slice(m.eleImg.indexOf("_")+1, m.eleImg.indexOf("."));
        $("#mimic-element").html(mimicEle.charAt(0).toUpperCase() + mimicEle.slice(1));
        var mimicReso = m.resoImg.slice(m.resoImg.indexOf("_")+1, m.resoImg.indexOf("."));
        $("#mimic-reso").html(mimicReso.charAt(0).toUpperCase() + mimicReso.slice(1));
        
        $(".btmat-1").each(function(index){
            $(this).attr("src","images/mat/" + m.materials[0] + (index+1) + ".png");
        });
        $(".btmat-2").each(function(index){
            $(this).attr("src","images/mat/" + m.materials[1] + (index+1) + ".png");
        });
        $(".btmat-3").each(function(index){
            $(this).attr("src","images/mat/" + m.materials[2] + (index+1) + ".png");
        });
        
        $("#star-1").html(m.awakening[0]);
        $("#star-2").html(m.awakening[1]);
        $("#star-3").html(m.awakening[2]);
        $("#star-4").html(m.awakening[3]);
        $("#star-5").html(m.awakening[4]);
        $("#star-6").html(m.awakening[5]);
        $("#star-all-1").html(m.awakening[0]);
        $("#star-all-2").html(m.awakening[1]);
        $("#star-all-3").html(m.awakening[2]);
        $("#star-all-4").html(m.awakening[3]);
        $("#star-all-5").html(m.awakening[4]);
        $("#star-all-6").html(m.awakening[5]);
        $("#chip-img").attr("src","images/chip/" + m.name + ".png");
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
    
    $(".gadget-button").click(function(){
        
        if ($(this).children().is("#btn-giantarms")) { setGadgetInfo(gadgets[0]); }
        else if ($(this).children().is("#btn-atomicshield")) { setGadgetInfo(gadgets[1]); }
        else if ($(this).children().is("#btn-vmech")) { setGadgetInfo(gadgets[2]); }
        else if ($(this).children().is("#btn-timerift")) { setGadgetInfo(gadgets[3]); }
        else if ($(this).children().is("#btn-confinedspace")) { setGadgetInfo(gadgets[4]); }
        else if ($(this).children().is("#btn-drone")) { setGadgetInfo(gadgets[5]); }
        else if ($(this).children().is("#btn-holographicprojection")) { setGadgetInfo(gadgets[6]); }
        else if ($(this).children().is("#btn-deathsuppressor")) { setGadgetInfo(gadgets[7]); }
        else if ($(this).children().is("#btn-counter2")) { setGadgetInfo(gadgets[8]); }
        else if ($(this).children().is("#btn-jetpack")) { setGadgetInfo(gadgets[9]); }
        else if ($(this).children().is("#btn-quantumcloak")) { setGadgetInfo(gadgets[10]); }
        else if ($(this).children().is("#btn-floatingicecannon")) { setGadgetInfo(gadgets[11]); }
        else if ($(this).children().is("#btn-jetski")) { setGadgetInfo(gadgets[12]); }
        else if ($(this).children().is("#btn-magneticstorm")) { setGadgetInfo(gadgets[13]); }
        else if ($(this).children().is("#btn-multiplemissile")) { setGadgetInfo(gadgets[14]); }
        else if ($(this).children().is("#btn-shieldingrobot")) { setGadgetInfo(gadgets[15]); }
        else if ($(this).children().is("#btn-singularitymagiccube")) { setGadgetInfo(gadgets[16]); }
        else if ($(this).children().is("#btn-atomichandcannon")) { setGadgetInfo(gadgets[17]); }
        else if ($(this).children().is("#btn-lavagrenade")) { setGadgetInfo(gadgets[18]); }
        else if ($(this).children().is("#btn-mechanicalarm")) { setGadgetInfo(gadgets[19]); }
        else if ($(this).children().is("#btn-magnetopulse")) { setGadgetInfo(gadgets[20]); }
        
    });
    
    function setGadgetInfo(g) {
        $("#gadget-name").html(g.name);
        $("#gadget-tier").html(g.rarity);
        if (g.rarity === "SR") {
            $("#gadget-tier").removeClass("wep-tier-s");
            $("#gadget-tier").addClass("wep-tier-a");
        } else {
            $("#gadget-tier").addClass("wep-tier-s");
            $("#gadget-tier").removeClass("wep-tier-a");
        }
        $("#gadget-img").attr("src", g.pic);
        $("#gadget-desc").html(g.description);
        $("#star-1").html(g.awakening[0]);
        $("#star-2").html(g.awakening[1]);
        $("#star-3").html(g.awakening[2]);
        $("#star-4").html(g.awakening[3]);
        $("#star-5").html(g.awakening[4]);
        $("#star-all-1").html(g.awakening[0]);
        $("#star-all-2").html(g.awakening[1]);
        $("#star-all-3").html(g.awakening[2]);
        $("#star-all-4").html(g.awakening[3]);
        $("#star-all-5").html(g.awakening[4]);
    }
    
    $(".chip-button").click(function(){
        if ($(this).children().is("#btn-samir")) { setChipInfo(samir); }
        else if ($(this).children().is("#btn-coco")) { setChipInfo(coco); }
        else if ($(this).children().is("#btn-king")) { setChipInfo(king); }
        else if ($(this).children().is("#btn-shiro")) { setChipInfo(shiro); }
        else if ($(this).children().is("#btn-meryl")) { setChipInfo(meryl); }
        else if ($(this).children().is("#btn-huma")) { setChipInfo(huma); }
        else if ($(this).children().is("#btn-hane")) { setChipInfo(hane); }
        else if ($(this).children().is("#btn-karasuma")) { setChipInfo(karasuma); }
        else if ($(this).children().is("#btn-zero")) { setChipInfo(zero); }
        else if ($(this).children().is("#btn-claudia")) { setChipInfo(claudia); }
        else if ($(this).children().is("#btn-cobalt")) { setChipInfo(cobalt); }
        else if ($(this).children().is("#btn-baiyuekui")) { setChipInfo(baiyuekui); }
        else if ($(this).children().is("#btn-marc")) { setChipInfo(marc); }
        else if ($(this).children().is("#btn-nemesis")) { setChipInfo(nemesis); }
        else if ($(this).children().is("#btn-frigg")) { setChipInfo(frigg); }
        else if ($(this).children().is("#btn-peppa")) { setChipInfo(peppa); }
        else if ($(this).children().is("#btn-hilda")) { setChipInfo(hilda); }
        else if ($(this).children().is("#btn-xi")) { setChipInfo(xi); }
        else if ($(this).children().is("#btn-bailing")) { setChipInfo(bailing); }
        else if ($(this).children().is("#btn-manaka")) { setChipInfo(manaka); }
    });
    
    function setMimicInfo (m) {
        $("#mimic-name").html(m.name);
        $("#mimic-name-2").html(m.name);
        if (m.name === "Manaka" || m.name === "Hilda" || m.name === "Peppa" || m.name === "Bai Ling" || m.name === "Xi") {
            $("#mimic-tier").removeClass("wep-tier-s");
            $("#mimic-tier").addClass("wep-tier-a");
            $("#mimic-tier").html("SR");
        } else {
            $("#mimic-tier").removeClass("wep-tier-a");
            $("#mimic-tier").addClass("wep-tier-s");
            $("#mimic-tier").html("SSR");
        }

        $("#chip-img").attr("src","images/chip/" + m.name + ".png");
        $("#chip-2").html(m.chipEffect[0]);
        $("#chip-4").html(m.chipEffect[1]);

    }
    
    var mimicModal = document.getElementById("mimic-modal");
    mimicModal.addEventListener('hide.bs.modal', function(){
        $("#mimic-list").css("opacity","1");
    });
    mimicModal.addEventListener('show.bs.modal', function(){
        $("#mimic-list").css("opacity","0");
    });
    var gadgetModal = document.getElementById("gadget-modal");
    gadgetModal.addEventListener('hide.bs.modal', function(){
        $("#gadget-list").css("opacity","1");
    });
    gadgetModal.addEventListener('show.bs.modal', function(){
        $("#gadget-list").css("opacity","0");
    });
});
