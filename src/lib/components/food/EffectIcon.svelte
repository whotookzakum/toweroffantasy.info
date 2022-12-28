<script>
    export let effect;

    function getImgSrc() {
        switch (effect) {
            case "health":
                return "icon_Item_hp";

            case "iceDEF":
                return "icon_Item_def_bing";
            case "fireDEF":
                return "icon_Item_def_huo";
            case "voltDEF":
                return "icon_Item_def_lei";
            case "physDEF":
                return "icon_Item_def";

            case "iceATK":
                return "icon_Item_bing";
            case "fireATK":
                return "icon_Item_huo";
            case "voltATK":
                return "icon_Item_lei";
            case "physATK":
                return "icon_Item_wu";

            case "endurance":
                return "icon_Item_energy";
        }
    }
</script>

<img
    class="effect-icon"
    src={`/images/UI/AttributeIcon/${getImgSrc()}.png`}
    alt={effect}
    width="32"
    height="32"
/>

<style lang="scss">
    .effect-icon {
        position: absolute;
        top: 0;
        right: 0;

        &[src*="energy"] {
            right: unset;
            left: 0;
        }
    }
</style>
