// TO DO
// World map with passcodes, world bosses (and their drops)
// Joint op day-of-the-week dungeon rewards
// Shield break and energy rechard tier should change with the corresponding values


jQuery(document).ready(function ($) {

    if (window.innerWidth >= 1440) {
        //$("#sidenav-shown").addClass("show");
    }

    // Popper Popovers
    

    // Popper Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    //setModalData(meryl);
    
    $(".modal-menu-item").click(function () {

        // MIMICS & CHIPS PAGES
        if (document.URL.includes("mimics") || document.URL.includes("chips")) {
            if ($(this).children().is("#btn-samir")) {
                setModalData(samir);
            } else if ($(this).children().is("#btn-coco")) {
                setModalData(coco);
            } else if ($(this).children().is("#btn-king")) {
                setModalData(king);
            } else if ($(this).children().is("#btn-shiro")) {
                setModalData(shiro);
            } else if ($(this).children().is("#btn-meryl")) {
                setModalData(meryl);
            } else if ($(this).children().is("#btn-huma")) {
                setModalData(huma);
            } else if ($(this).children().is("#btn-hane")) {
                setModalData(hane);
            } else if ($(this).children().is("#btn-karasuma")) {
                setModalData(karasuma);
            } else if ($(this).children().is("#btn-zero")) {
                setModalData(zero);
            } else if ($(this).children().is("#btn-claudia")) {
                setModalData(claudia);
            } else if ($(this).children().is("#btn-cobalt")) {
                setModalData(cobalt);
            } else if ($(this).children().is("#btn-baiyuekui")) {
                setModalData(baiyuekui);
            } else if ($(this).children().is("#btn-marc")) {
                setModalData(marc);
            } else if ($(this).children().is("#btn-nemesis")) {
                setModalData(nemesis);
            } else if ($(this).children().is("#btn-frigg")) {
                setModalData(frigg);
            } else if ($(this).children().is("#btn-peppa")) {
                setModalData(peppa);
            } else if ($(this).children().is("#btn-hilda")) {
                setModalData(hilda);
            } else if ($(this).children().is("#btn-xi")) {
                setModalData(xi);
            } else if ($(this).children().is("#btn-bailing")) {
                setModalData(bailing);
            } else if ($(this).children().is("#btn-manaka")) {
                setModalData(manaka);
            }
            // R chips
            else if (document.URL.includes("chips")) {
                if ($(this).children().is("#btn-burstingcore")) {
                    setModalData(burstingcore);
                } else if ($(this).children().is("#btn-transportthinking")) {
                    setModalData(transportthinking);
                } else if ($(this).children().is("#btn-guardscode")) {
                    setModalData(guardscode);
                } else if ($(this).children().is("#btn-arrogantprovocation")) {
                    setModalData(arrogantprovocation);
                } else if ($(this).children().is("#btn-offensivelogic")) {
                    setModalData(offensivelogic);
                } else if ($(this).children().is("#btn-cleanupagreement")) {
                    setModalData(cleanupagreement);
                }
            }
        }

        // GADGETS PAGE
        if (document.URL.includes("gadgets")) {
            if ($(this).children().is("#btn-giantarms")) {
                setModalData(gadgets[0]);
            } else if ($(this).children().is("#btn-atomicshield")) {
                setModalData(gadgets[1]);
            } else if ($(this).children().is("#btn-vmech")) {
                setModalData(gadgets[2]);
            } else if ($(this).children().is("#btn-timerift")) {
                setModalData(gadgets[3]);
            } else if ($(this).children().is("#btn-confinedspace")) {
                setModalData(gadgets[4]);
            } else if ($(this).children().is("#btn-drone")) {
                setModalData(gadgets[5]);
            } else if ($(this).children().is("#btn-holographicprojection")) {
                setModalData(gadgets[6]);
            } else if ($(this).children().is("#btn-deathsuppressor")) {
                setModalData(gadgets[7]);
            } else if ($(this).children().is("#btn-counter2")) {
                setModalData(gadgets[8]);
            } else if ($(this).children().is("#btn-jetpack")) {
                setModalData(gadgets[9]);
            } else if ($(this).children().is("#btn-quantumcloak")) {
                setModalData(gadgets[10]);
            } else if ($(this).children().is("#btn-floatingicecannon")) {
                setModalData(gadgets[11]);
            } else if ($(this).children().is("#btn-jetski")) {
                setModalData(gadgets[12]);
            } else if ($(this).children().is("#btn-magneticstorm")) {
                setModalData(gadgets[13]);
            } else if ($(this).children().is("#btn-multiplemissile")) {
                setModalData(gadgets[14]);
            } else if ($(this).children().is("#btn-shieldingrobot")) {
                setModalData(gadgets[15]);
            } else if ($(this).children().is("#btn-singularitymagiccube")) {
                setModalData(gadgets[16]);
            } else if ($(this).children().is("#btn-atomichandcannon")) {
                setModalData(gadgets[17]);
            } else if ($(this).children().is("#btn-lavagrenade")) {
                setModalData(gadgets[18]);
            } else if ($(this).children().is("#btn-mechanicalarm")) {
                setModalData(gadgets[19]);
            } else if ($(this).children().is("#btn-magnetopulse")) {
                setModalData(gadgets[20]);
            }
        }

    });
    
    
    

   
    
    function setModalData(i) {
        
        
        
        // Header
        $("#item-name").html(i.name);
        $("#item-tier").html(i.rarity);
        if (i.rarity === "SSR") {
            $("#chip-sr-sets").addClass("d-none");
            $("#chip-ssr-sets").removeClass("d-none");
            $("#item-tier").removeClass("wep-tier-a");
            $("#item-tier").removeClass("wep-tier-b");
            $("#item-tier").addClass("wep-tier-s");
        } else if (i.rarity === "SR") {
            $("#chip-ssr-sets").addClass("d-none");
            $("#chip-sr-sets").removeClass("d-none");
            $("#item-tier").removeClass("wep-tier-s");
            $("#item-tier").removeClass("wep-tier-b");
            $("#item-tier").addClass("wep-tier-a");
        } else if (i.rarity === "R") {
            $("#chip-ssr-sets").addClass("d-none");
            $("#chip-sr-sets").removeClass("d-none");
            $("#item-tier").removeClass("wep-tier-s");
            $("#item-tier").removeClass("wep-tier-a");
            $("#item-tier").addClass("wep-tier-b");
        }


        // MIMIC PAGE
        if (document.URL.includes("mimics")) {
            // Weapon
            $("#wep-name").html(i.wepName);
            $("#wep-type-img").attr('src', i.resoImg);
            $("#wep-element-img").attr('src', i.eleImg);
            $("#modal-bg-img").attr('src', i.artwork);
            $("#wep-img").attr('src', i.wepImg);
            $("#wep-effect").html(i.wepEffect);
            if (i.hasOwnProperty('exclusiveEffect')) {
                $("#exclusive-effect-wrapper").removeClass("d-none");
                $("#exclusive-effect").html(i.exclusiveEffect);
            } else {
                $("#exclusive-effect-wrapper").addClass("d-none");
            }
            $("#energy-charge").html(i.energyCharge[0]);
            $("#energy-charge-tier").html(i.energyCharge[1]);
            $("#shield-break").html(i.shieldBreak[0]);
            $("#shield-break-tier").html(i.shieldBreak[1]);
            $("#energy-charge-tier").removeClass("wep-tier-a");
            $("#energy-charge-tier").removeClass("wep-tier-s");
            $("#shield-break-tier").removeClass("wep-tier-a");
            $("#shield-break-tier").removeClass("wep-tier-s");
            if (i.energyCharge[1] === "s") {
                $("#energy-charge-tier").addClass("wep-tier-s");
            } else if (i.energyCharge[1] === "a") {
                $("#energy-charge-tier").addClass("wep-tier-a");
            }
            if (i.shieldBreak[1] === "s") {
                $("#shield-break-tier").addClass("wep-tier-s");
            } else if (i.shieldBreak[1] === "a") {
                $("#shield-break-tier").addClass("wep-tier-a");
            }
            var mimicEle = i.eleImg.slice(i.eleImg.indexOf("_") + 1, i.eleImg.indexOf("."));
            $("#mimic-element").html(mimicEle.charAt(0).toUpperCase() + mimicEle.slice(1));
            var mimicReso = i.resoImg.slice(i.resoImg.indexOf("_") + 1, i.resoImg.indexOf("."));
            $("#mimic-reso").html(mimicReso.charAt(0).toUpperCase() + mimicReso.slice(1));
            $(".btmat-1").each(function (index) {
                $(this).attr("src", "images/mat/" + i.materials[0] + (index + 1) + ".png");
            });
            $(".btmat-2").each(function (index) {
                $(this).attr("src", "images/mat/" + i.materials[1] + (index + 1) + ".png");
            });
            $(".btmat-3").each(function (index) {
                $(this).attr("src", "images/mat/" + i.materials[2] + (index + 1) + ".png");
            });

            // Stars
            $("#star-1").html(i.awakening[0]);
            $("#star-2").html(i.awakening[1]);
            $("#star-3").html(i.awakening[2]);
            $("#star-4").html(i.awakening[3]);
            $("#star-5").html(i.awakening[4]);
            $("#star-6").html(i.awakening[5]);
            $("#star-all-1").html(i.awakening[0]);
            $("#star-all-2").html(i.awakening[1]);
            $("#star-all-3").html(i.awakening[2]);
            $("#star-all-4").html(i.awakening[3]);
            $("#star-all-5").html(i.awakening[4]);
            $("#star-all-6").html(i.awakening[5]);

            // Chips
            $("#chip-img").attr("src", i.chipImg);
            $("#chip-2").html(i.chipEffect[0]);
            $("#chip-3").html(i.chipEffect[1]);
            $("#chip-4").html(i.chipEffect[1]);

            // Recommended chips

            // Affinity
            $("#affinity-1200").html(i.mimicEffect[2]);
            $("#affinity-4000").html(i.mimicEffect[5]);
            
            // Character Info
            const bsPopover = new bootstrap.Popover(document.querySelector('#popover-mimic'), {
                trigger: 'focus',
                html: true
            });
            bsPopover._config.content = 
                `<div class="traits p-4">
                    <div class="d-inline-block align-middle">
                        <span class="mt-0">GENDER</span>${i.traits[0]}<br>
                        <span>HEIGHT</span>${i.traits[1]}<br>
                        <span>BIRTHPLACE</span>${i.traits[2]}<br>
                        <span>HOROSCOPE</span>${i.traits[3]}<br>
                        <span>BIRTHDAY</span>${i.traits[4]}
                    </div>
                    <div class="d-inline-block"><img class="traits-img" src="images/charts/${i.artwork.slice(i.artwork.indexOf("art/") + 4)}"></div>
                </div>`;
            console.log("images/charts/" + i.artwork.slice(i.artwork.indexOf("art/") + 4));
        }

        // GADGET PAGE
        if (document.URL.includes("gadgets")) {
            $("#gadget-img").attr("src", i.pic);
            $("#gadget-desc").html(i.description);

            // Stars
            $("#star-1").html(i.awakening[0]);
            $("#star-2").html(i.awakening[1]);
            $("#star-3").html(i.awakening[2]);
            $("#star-4").html(i.awakening[3]);
            $("#star-5").html(i.awakening[4]);
            $("#star-6").html(i.awakening[5]);
            $("#star-all-1").html(i.awakening[0]);
            $("#star-all-2").html(i.awakening[1]);
            $("#star-all-3").html(i.awakening[2]);
            $("#star-all-4").html(i.awakening[3]);
            $("#star-all-5").html(i.awakening[4]);
            $("#star-all-6").html(i.awakening[5]);
        }

        // CHIP PAGE
        if (document.URL.includes("chips")) {
            $("#item-name").html(i.name + " Chip");
            $("#modal-bg-img").attr('src', i.artwork);
            $("#chip-img").attr("src", i.chipImg);
            $("#chip-2").html(i.chipEffect[0]);
            $("#chip-3").html(i.chipEffect[1]);
            $("#chip-4").html(i.chipEffect[1]);
            // recomended weapons to use with
            // where to obtain
        }
        
    }

    // Animate modal menu when modal is opened/closed
    const modalContent = document.getElementById("modal-content");
    modalContent.addEventListener('hide.bs.modal', function () {
        $("#modal-menu").css("opacity", "1");
        $("#page-bg-img").css("opacity", "1");
        $("#modal-bg-img").css("opacity", "0");
    });
    modalContent.addEventListener('show.bs.modal', function () {
        $("#modal-menu").css("opacity", "0");
        $("#page-bg-img").css("opacity", "0");
        $("#modal-bg-img").css("opacity", "1");
    });
});
