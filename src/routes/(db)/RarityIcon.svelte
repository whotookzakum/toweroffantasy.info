<script>
    export let rarity;
    export let style = "";
    let src =
        "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/UI/yizhi/yizhi_tips_zi_ssr.webp";

    switch (rarity) {
        case "EPIC":
        case "SR":
            src =
                "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/UI/yizhi/yizhi_tips_zi_sr.webp";
            break;
        case "R":
            src =
                "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/UI/yizhi/yizhi_tips_zi_r.webp";
            break;
        case "N":
            src =
                "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/UI/yizhi/yizhi_tips_zi_n.webp";
            break;
    }
</script>

<img class="rarity {rarity}" {src} alt="" width="63" height="36" {style} />

<style>
    .rarity {
        width: 28px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.8));
        margin: 0.1rem;
    }

    .EPIC,
    .SR {
        margin-inline: -3px;
    }

    .R,
    .N {
        margin-inline: -8px;
    }
</style>
