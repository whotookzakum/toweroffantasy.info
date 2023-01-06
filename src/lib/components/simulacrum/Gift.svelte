<script>
    import Item from "../Item.svelte";

    export let gift;
    let rarity = 0;

    function getImgSrc() {
        switch (gift.gift) {
            // Purples
            case "linyeFigure":
                rarity = 4;
                return "UI_jingdu_icon_xiaoyeye_256";
            case "princeTataFigure":
                rarity = 4;
                return "UI_jingdu_icon_jiujie_128";
            case "rarePhoto":
                rarity = 4;
                return "gift04";
            case "rareTradingCard":
                rarity = 4;
                return "gift41";
            case "miaFigure":
                rarity = 4;
                return "gift40";
            case "peppaFigure":
                rarity = 4;
                return "gift39";
            case "catFigure":
                rarity = 4;
                return "gift37";
            case "foxFigure":
                rarity = 4;
                return "gift36";
            case "bearFigure":
                rarity = 4;
                return "gift35";
            case "tataFigure":
                rarity = 4;
                return "gift34";
            case "goldCoin":
                rarity = 4;
                return "gift33";
            case "seal":
                rarity = 4;
                return "gift32";
            case "ufo":
                rarity = 4;
                return "gift31";
            case "present":
                rarity = 4;
                return "gift30";
            case "tataCards":
                rarity = 4;
                return "gift29";
            case "kitchenware":
                rarity = 4;
                return "gift28";
            case "pearl":
                rarity = 4;
                return "gift27";
            case "snowglobe":
                rarity = 4;
                return "gift26";
            case "psp":
                rarity = 4;
                return "gift25";

            // Blues
            case "androidFigure":
                rarity = 3;
                return "gift24";
            case "robotFigure":
                rarity = 3;
                return "gift23";
            case "pumpkinFigure":
                rarity = 3;
                return "gift22";
            case "elfFigure":
                rarity = 3;
                return "gift21";
            case "spiderFigure":
                rarity = 3;
                return "gift20";
            case "perfume":
                rarity = 3;
                return "gift19";
            case "vial":
                rarity = 3;
                return "gift18";
            case "diary":
                rarity = 3;
                return "gift17";
            case "catPlush":
                rarity = 3;
                return "gift16";
            case "necklace":
                rarity = 3;
                return "gift15";
            case "juicePouch":
                rarity = 3;
                return "gift14";
            case "suit":
                rarity = 3;
                return "gift13";
            case "tataPlush":
                rarity = 3;
                return "gift12";
            case "chessSet":
                rarity = 3;
                return "gift11";
            case "toolbox":
                rarity = 3;
                return "gift10";
            case "bunnyDoll":
                rarity = 3;
                return "UI_jingdu_icon_tuzi_256";
            case "strangeFragment":
                rarity = 3;
                return "UI_jingdu_icon_jimu_256";

            // Greens
            case "snackBox":
                rarity = 2;
                return "gift09";
            case "pinwheel":
                rarity = 2;
                return "gift08";
            case "harmonica":
                rarity = 2;
                return "gift07";
            case "plant":
                rarity = 2;
                return "gift06";
            case "scarf":
                rarity = 2;
                return "gift05";
            case "photo":
                rarity = 2;
                return "gift04";
            case "photoAlbum":
                rarity = 2;
                return "gift03";
            case "dumbbells":
                rarity = 2;
                return "gift02";
            case "flowers":
                rarity = 2;
                return "gift01";
            case "tradingCard":
                rarity = 2;
                return "gift41";
            case "strangePlant":
                rarity = 2;
                return "UI_jingdu_icon_hua_256";
        }
    }
</script>

<Item {rarity} amount={gift.points}>
    <img
        src={`/images/Icon/ImitationGift/${getImgSrc()}.png`}
        alt={gift}
        width="64"
        height="64"
    />
</Item>
