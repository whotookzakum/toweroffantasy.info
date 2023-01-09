<script>
    export let stat;

    function getImgSrc(stat) {
        switch (stat) {
            // Weapon Base Stats
            case "attack":
                return "icon_atk";
            case "health":
                return "icon_hp";
            case "crit":
                return "icon_baoji";
            case "resistance":
                return "icon_resist_all";
        }
    }
</script>

<img
    src={`/images/UI/AttributeIcon/${getImgSrc(stat)}.png`}
    alt={stat}
    width="42"
    height="42"
    loading="lazy"
/>
{stat === "health"
    ? "hp"
    : stat === "resistance"
    ? "resist"
    : stat === "attack"
    ? "atk"
    : "crit"}

<style lang="scss">
    img {
        width: 24px;
        height: 24px;
        filter: brightness(3);
    }
</style>
