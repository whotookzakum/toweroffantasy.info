<script>
    export let rarity;
    export let style = "";
    let src =
        "/Hotta/Content/Resources/UI/yizhi/yizhi_tips_zi_ssr.webp";
    let alt = "SSR"

    // 6: RED
    // 5: SSR, LEGENDRY
    // 4: SR, EPIC
    // 3: R, RARE
    // 2: N, UNCOMMON, COMMON
    // 1: POOR

    switch (rarity) {
        case 6: 
            src = "/images/ssr_mini2.png"
            alt = "SSR+"
            break;
        case 4:
            src =
                "/Hotta/Content/Resources/UI/yizhi/yizhi_tips_zi_sr.webp";
            alt = "SR"
            break;
        case 3:
            src =
                "/Hotta/Content/Resources/UI/yizhi/yizhi_tips_zi_r.webp";
            alt ="R"
            break;
        case 2:
            src =
                "/Hotta/Content/Resources/UI/yizhi/yizhi_tips_zi_n.webp";
            alt = "N"
            break;
        case 1:
            src = "/images/N-.png"
            alt = "C"
            break
    }
</script>

<img class="rarity {rarity}" {src} alt="{alt} rarity" width="63" height="36" {style} />

<style>
    .rarity {
        width: 28px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.8));
        margin: 0.1rem;
    }

    [src*="zi_sr"] {
        margin-inline: -3px;
    }

    [src*="zi_r"],
    [src*="zi_n"] {
        margin-inline: -8px;
    }
</style>
