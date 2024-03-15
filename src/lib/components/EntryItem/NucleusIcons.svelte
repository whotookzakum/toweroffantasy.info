<script>
    import { DateTime } from "luxon";

    export let entry;
    let nucleusIcons = [];

    const hasBanners = entry.banners?.length > 0;
    const movedToStandardBanner =
        entry.banners?.some((banner) => banner.isFinalBanner) &&
        entry.banners?.every(
            (banner) =>
                DateTime.fromISO(banner.endDate) <
                DateTime.now().setZone("UTC"),
        );

    switch (entry.__typename) {
        case "SimulacraType":
        case "SimulacraV2Type":
        case "WeaponType":
            if (hasBanners && !movedToStandardBanner) {
                nucleusIcons.push(
                    "/Hotta/Content/Resources/Icon/huobi/Gem005.webp",
                );
            } else {
                nucleusIcons.push(
                    "/Hotta/Content/Resources/Icon/huobi/Gem004.webp",
                );
                nucleusIcons.push(
                    "/Hotta/Content/Resources/Icon/huobi/Gem003.webp",
                );
            }
            break;
        case "MatriceType":
            if (entry.rarity !== "N") {
                if (hasBanners && !movedToStandardBanner) {
                    nucleusIcons.push(
                        "/Hotta/Content/Resources/Icon/huobi/item_ticket_02.webp",
                    );
                } else {
                    nucleusIcons.push(
                        "/Hotta/Content/Resources/Icon/huobi/item_ticket_01.webp",
                    );
                }
            }
            break;
    }
</script>

{#if ["SimulacraType", "SimulacraV2Type", "WeaponType", "MatriceType"].includes(entry.__typename)}
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
                <img src={uri} alt="" width="30" height="30" />
            {/each}
        </div>
    </div>
{/if}

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
