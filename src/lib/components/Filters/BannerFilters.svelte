<script>
    import { page } from "$app/stores";
    import { queryParam, ssp } from "sveltekit-search-params";

    // Default to nucleus icons for simulacra and weapons
    let limitedIcons = [
        "https://api.toweroffantasy.info/assets/Icon/huobi/Gem005",
    ];
    let standardIcons = [
        "https://api.toweroffantasy.info/assets/Icon/huobi/Gem004",
        "https://api.toweroffantasy.info/assets/Icon/huobi/Gem003",
    ];

    if ($page.url.pathname.includes("/matrices")) {
        limitedIcons = [
            "https://api.toweroffantasy.info/assets/Icon/huobi/item_ticket_02",
        ];
        standardIcons = [
            "https://api.toweroffantasy.info/assets/Icon/huobi/item_ticket_01",
        ];
    }

    const banners = queryParam("banners", ssp.string(), { showDefaults: false, pushHistory: false })

    let isLimited = $banners?.includes("limited") || false
    let isStandard = $banners?.includes("standard") || false

    $: if (isLimited || isStandard) {
        const limitedString = isLimited ? "limited" : ""
        const standardString = isStandard ? (isLimited ? " " : "" ) + "standard" : ""
        $banners = limitedString + standardString
    }
    else {
        $banners = null
    }
</script>

<div class="box flex">
    <input type="checkbox" id="toggle-banners-limited" class="visually-hidden" bind:checked={isLimited} />
    <label class="flex" for="toggle-banners-limited">
        <span class="visually-hidden">Limited banners</span>
        {#each limitedIcons as uri}
            <img src={uri} alt="" width="30" height="30" />
        {/each}
    </label>
    <input type="checkbox" id="toggle-banners-standard" class="visually-hidden" bind:checked={isStandard} />
    <label class="flex" for="toggle-banners-standard">
        <span class="visually-hidden">Standard banners</span>
        {#each standardIcons as uri}
            <img src={uri} alt="" width="30" height="30" />
        {/each}
    </label>
</div>

<style lang="scss">
    .box {
        padding: 0.125rem 0.25rem;
        align-items: center;
    }

    label {
        padding: 0.4rem;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
    }

    input:checked + label {
        background: var(--surface2);
        border-color: var(--accent);
    }

    img {
        margin: -0.6rem;
        width: 34px;
        height: auto;

        &:not(:first-of-type) {
            margin-left: -0.8rem;
        }
    }
</style>
