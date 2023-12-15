<script>
    export let entry;
    let nucleusIcons = [];
    let pastNucleusIcons = [];

    const hasBanners = entry.banners?.length > 0;
    const movedToStandardBanner = entry.banners?.some(
        (banner) => banner.isFinalBanner,
    );

    switch (entry.__typename) {
        case "Simulacra":
        case "SimulacraV2":
        case "Weapon":
            if (hasBanners && !movedToStandardBanner) {
                nucleusIcons.push("/assets/Icon/huobi/Gem005");
            } else {
                nucleusIcons.push("/assets/Icon/huobi/Gem004");
                nucleusIcons.push("/assets/Icon/huobi/Gem003");
            }
            break;
        case "Matrice":
            if (entry.rarity !== "N") {
                if (hasBanners && !movedToStandardBanner) {
                    nucleusIcons.push("/assets/Icon/huobi/item_ticket_02");
                } else {
                    nucleusIcons.push("/assets/Icon/huobi/item_ticket_01");
                }
            }
            break;
    }
</script>

<div class="flex coins">
    <div>
        {#if hasBanners && !movedToStandardBanner}
            {entry.banners.length}
            <span class="visually-hidden">limited</span>
            {entry.banners.length > 1 ? "banners" : "banner"}
        {:else}
            Standard
            <span class="visually-hidden">banner</span>
        {/if}
    </div>
    <div class="flex">
        {#each nucleusIcons as uri}
            <img
                src="https://api.toweroffantasy.info{uri}?format=webp"
                alt=""
                width="30"
                height="30"
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .coins {
        gap: 0.3rem;
        align-items: center;
        font-size: 0.7rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background: var(--surface3);
        border-radius: 1rem;
        padding: 0.35rem 0.45rem 0.35rem 0.45rem;
        margin-left: auto;
    }

    img {
        margin: -0.4rem;
        width: 28px;
        height: auto;

        &:not(:first-child) {
            margin-left: -0.8rem;
        }
    }
</style>
