<script>
    import { page } from "$app/stores";
    import { queryParam, ssp } from "sveltekit-search-params";
    import Popper from "$components/Popper.svelte";

    // Default to nucleus icons for simulacra and weapons
    let limitedIcons = [
        "/Hotta/Content/Resources/Icon/huobi/Gem005",
    ];
    let standardIcons = [
        "/Hotta/Content/Resources/Icon/huobi/Gem004",
        "/Hotta/Content/Resources/Icon/huobi/Gem003",
    ];

    if ($page.url.pathname.includes("/matrices")) {
        limitedIcons = [
            "/Hotta/Content/Resources/Icon/huobi/item_ticket_02",
        ];
        standardIcons = [
            "/Hotta/Content/Resources/Icon/huobi/item_ticket_01",
        ];
    }

    const banners = queryParam("banners", ssp.string(), {
        showDefaults: false,
        pushHistory: false,
    });

    let isLimited = $banners?.includes("limited") || false;
    let isStandard = $banners?.includes("standard") || false;

    $: if (isLimited || isStandard) {
        const limitedString = isLimited ? "limited" : "";
        const standardString = isStandard
            ? (isLimited ? " " : "") + "standard"
            : "";
        $banners = limitedString + standardString;
    } else {
        $banners = null;
    }
</script>

<div class="box icons-box flex">
    <Popper let:setFocused>
        <input
            type="checkbox"
            id="toggle-banners-limited"
            class="visually-hidden style-next-label"
            bind:checked={isLimited}
            on:focus={() => setFocused(true)}
            on:blur={() => setFocused(false)}
        />
        <label class="flex" for="toggle-banners-limited">
            <span class="visually-hidden">Currently in Limited banner</span>
            {#each limitedIcons as uri}
                <img src={uri} alt="" width="30" height="30" />
            {/each}
        </label>
        <p slot="tooltip">Limited Banner</p>
    </Popper>
    <Popper let:setFocused>
        <input
            type="checkbox"
            id="toggle-banners-standard"
            class="visually-hidden style-next-label"
            bind:checked={isStandard}
            on:focus={() => setFocused(true)}
            on:blur={() => setFocused(false)}
        />
        <label class="flex" for="toggle-banners-standard">
            <span class="visually-hidden">Currently in Standard banner</span>
            {#each standardIcons as uri}
                <img src={uri} alt="" width="30" height="30" />
            {/each}
        </label>
        <p slot="tooltip">Standard Banner</p>
    </Popper>
</div>

<style lang="scss">
    img {
        margin: -0.6rem;
        width: 34px;
        height: auto;

        &:not(:first-of-type) {
            margin-left: -0.8rem;
        }
    }

    label {
        padding: 0.4rem;
    }
</style>
