// TO DO
// World map with passcodes, world bosses (and their drops)
// Joint op day-of-the-week dungeon rewards
// Shield break and energy rechard tier should change with the corresponding values


jQuery(document).ready(function ($) {

    // Popper Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Navigation 
    $("#nav-toggler").click(function(){
        $(".sidenav .nav-body").addClass("nav-open");
    });
    
    $("#sidenav-btn-close").click(function(){
        $(".sidenav .nav-body").removeClass("nav-open");
    });
    
    $(".nav-backdrop").click(function(){
        $(".sidenav .nav-body").removeClass("nav-open");
    });
    
    $(window).resize(function(){
        if (window.innerWidth > 1440) {
            $(".sidenav .nav-body").removeClass("nav-open");
        }
    });
    
    
    // Gets the clicked #btn-... to pass into setModalData()
    $(".modal-menu-item").click(function () {
        
        let selectedItem = $(this).attr('id').replace('btn-','');
        
        // MIMICS & CHIPS PAGES
        if (document.URL.includes("simulacra") || document.URL.includes("matrices")) {
            setModalData(window[selectedItem]);
        }

        // GADGETS PAGE
        if (document.URL.includes("relics")) {
            
            // Get the index of the gadget inside gadgets[]
            let gadgetIndex = gadgets.findIndex(function(gadget){
                // Check if clicked #btn-"..." matches gadgets[index].name without spaces
                let gadgetName = gadget.name.replaceAll(' ','').toUpperCase();
                if (selectedItem.toUpperCase() === gadgetName) {
                    return true;
                }
            }); 

            setModalData(gadgets[gadgetIndex]);
        }

    });
    
    
    // Set data to be displayed inside modals for Simulacra, Matrices, and Relics
    function setModalData(i) {

        // Header
        $("#item-name").html(i.name);
        $("#item-tier").html(i.rarity);
        if (i.rarity === "SSR") {
            // show 2 and 4 set effects, hide 3-set
            $("#chip-sr-sets").addClass("d-none");
            $("#chip-ssr-sets").removeClass("d-none");
            $("#item-tier").css('color', "var(--color-tier-s)");
        } else if (i.rarity === "SR" || i.rarity === "R") {
            // show 3-set effect, hide 2 and 4 sets
            $("#chip-ssr-sets").addClass("d-none");
            $("#chip-sr-sets").removeClass("d-none");
            $("#item-tier").css('color', "var(--color-tier-a)");
            if (i.rarity === "R") {
                $("#item-tier").css('color', "var(--color-tier-b)");
            }
        }

        // MIMIC PAGE
        if (document.URL.includes("simulacra")) {
            // Weapon
            $("#wep-name").html(i.wepName);
            $("#wep-type-img").attr('src', i.resoImg);
            $("#wep-element-img").attr('src', i.eleImg);
            $("#modal-bg-img").attr('src', i.artwork);
            $("#wep-img").attr('src', i.wepImg);
            
            let wepEffectName = '';
            let wepEffectNameColor = '';
            
            switch (i.eleImg) {
                case "images/ele_fire.png":
                    wepEffectName = 'Flame';
                    wepEffectNameColor = 'flame';
                    break;
                case "images/ele_physical.png":
                    wepEffectName = 'Grievous';
                    wepEffectNameColor = 'phys';
                    break;
                case "images/ele_ice.png":
                    wepEffectName = 'Ice Shell';
                    wepEffectNameColor = 'ice';
                    break;
                case "images/ele_electric.png":
                    wepEffectName = 'Volt';
                    wepEffectNameColor = 'volt';
                    break;
                default:
                    wepEffectName = 'Elemental Efect';
                    wepEffectNameColor = 'blue';
            }
            
            $("#wep-effect-name").html(wepEffectName);
            $("#wep-effect-name").css('color', `var(--color-${wepEffectNameColor})`);
            
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
            $("#shield-break-tier").css('color', `var(--color-tier-${i.shieldBreak[1]})`);
            $("#energy-charge-tier").css('color', `var(--color-tier-${i.energyCharge[1]})`);
            var mimicEle = i.eleImg.slice(i.eleImg.indexOf("_") + 1, i.eleImg.indexOf("."));
            $("#mimic-element").html(mimicEle.charAt(0).toUpperCase() + mimicEle.slice(1));
            var mimicReso = i.resoImg.slice(i.resoImg.indexOf("_") + 1, i.resoImg.indexOf("."));
            $("#mimic-reso").html(mimicReso.charAt(0).toUpperCase() + mimicReso.slice(1));
            
            // Breakthrough mats
            let thisMat = 0;
            let imgNum = 1;
            // For each index (0-2), load images 1-3.png
            $("#breakthrough-mats .item-wrapper-with-bg").each(function() {
                // Each iteration increase the image number
                // If all 3 images loaded, increase index to switch to next material
                if (imgNum >= 4) {
                    imgNum = 1;
                    thisMat++;
                }
                $(this).children("img").attr("src", `images/mat/${i.materials[thisMat]}${imgNum}.png`);
                imgNum++;
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
            
            // Recommended chips
            $("#recommended-chips-for-wep").html(i.wepName);
            $("#recommended-chips-wrapper").html('');
            if (i.recChips) {
                for (let currentChip = 0; currentChip < i.recChips.length; currentChip++ ) {
                    // index 0 = name (string)
                    // index 1 = amount (int)
                    $("#recommended-chips-wrapper").append(
                        `<div class="chip-recommended col-2">
                            <img class="chip-img" src="images/chip/${i.recChips[currentChip][0]}.png">
                            <div class="badge">x${i.recChips[currentChip][1]}</div>
                        </div>`
                    );
                    // Tooltip to show set effect when chip:hover
                    // if amount > 2, show chipEffect[1]
                    // if amount <== 2, show chipEffect[0]
                }
            }
            

            // Affinity
            $("#affinity-1200").html(i.mimicEffect[2]);
            $("#affinity-4000").html(i.mimicEffect[5]);
            
            let giftTier = 1;
            
            // Gift categories
            $("#gift-category-wrapper").html('');
            // Remove dashes and store in new array to prevent nesting
            let catText = i.giftPrefs.map(text => text.replaceAll('-', ' '));
            for (let catIndex = 0; catIndex < i.giftPrefs.length; catIndex++) {
                $("#gift-category-wrapper").append(
                    `<span class="gift-category" style="background-color: var(--color-gift-category-${i.giftPrefs[catIndex]})">${catText[catIndex]}</span> `
                );
            } 
            
            // Gifts
            $("#gifts-wrapper").html('');
            for (let thisGift = 0; thisGift < i.gifts.length; thisGift+=2) {
                // Since the array is structured as [ gift, 'num', gift, 'num' ...] we need to skip loading the num.
                let giftPoints = thisGift + 1;
                
                if ( i.gifts[giftPoints] == '+60' || i.gifts[giftPoints] == '+80' ) { giftTier = 4; }
                else if ( i.gifts[giftPoints] == '+30' || i.gifts[giftPoints] == '+40' ) { giftTier = 3; }
                else if ( i.gifts[giftPoints] == '+15' ) { giftTier = 2; }
                
                $("#gifts-wrapper").append(
                    `<div class="item-wrapper-with-bg bg-rarity-${giftTier}">
                        <img src='${i.gifts[thisGift]}'>
                        <div class="badge">${i.gifts[giftPoints]}</div>
                    </div>`
                );
            }
            
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
        }

        // GADGET PAGE
        if (document.URL.includes("relics")) {
            $("#gadget-img").attr("src", i.pic);
            $("#modal-bg-img").attr('src', i.pic);
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
        if (document.URL.includes("matrices")) {
            $("#item-name").html(i.name + " Matrices");
            $("#modal-bg-img").attr('src', i.artwork);
            $("#chip-img").attr("src", i.chipImg);
            $("#chip-2").html(i.chipEffect[0]);
            $("#chip-3").html(i.chipEffect[1]);
            $("#chip-4").html(i.chipEffect[1]);
            // recomended weapons to use with
            // where to obtain
        }
        
    }
    

    // Load Food
    for (let i = 0; i < food.length; i++) {
        let recipe = '';
        for (let j = 0; j < food[i].ingredients.length; j++) {
            recipe += `
            <div class="col-2 mx-2 p-0 ingredient-group">
                <div class="item-wrapper-with-bg bg-rarity-${food[i].ingredients[j][0].rarity}">
                    <img class="item-img" src="images/food/${food[i].ingredients[j][0].imgSrc}">
                    <div class="badge">${food[i].ingredients[j][1]}</div>
                </div>
                ${food[i].ingredients[j][0].name}
            </div>
            `;
        }

        let starCount = `<i class="fa-solid fa-star" style="color: var(--color-rarity-${food[i].rarity}-text)"></i>`;
        if (food[i].stars === 2) {
            starCount += starCount;
        }

        $("#food-wrapper").append(`
        <div class="row food-group">

            <div class="col col-lg-2 text-center">
                <div class="item-wrapper-with-bg bg-rarity-${food[i].rarity}">
                    <img class="item-img" src="images/food/${food[i].imgSrc}">
                </div>
                <strong class="font-chakra" style="color: var(--color-rarity-${food[i].rarity}-text)">${food[i].name}</strong>
            </div>

            <div class="col p-0 align-self-center text-center">${starCount}</div>

            <div class="col-4 col-lg-3 text-center text-lg-start align-self-center">
                ${food[i].effect}
            </div>

            <div class="col-lg-6 align-self-center">
                <div class="row mt-4 mt-lg-0">
                    ${recipe}
                </div>
            </div>
        </div>
        `);
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
