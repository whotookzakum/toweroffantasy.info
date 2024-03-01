<script>
    import { page } from "$app/stores";
    import { queryParam, ssp } from "sveltekit-search-params";
    import Popper from "$components/Popper.svelte";

    export let banners;
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
</script>

<div class="box icons-box flex">
    <Popper let:setFocused>
        <input
            type="checkbox"
            id="toggle-banners-limited"
            class="visually-hidden style-next-label"
            
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
