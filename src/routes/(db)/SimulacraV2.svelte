<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Tier from "./Tier.svelte";
    export let entry;
</script>

<img
    class="avatar"
    src="https://api.toweroffantasy.info{entry.assets.painting}?format=webp"
    alt=""
    width="260"
    height="349"
/>

<!-- {#if entry.weapon}
    <div class="bottom flex">
        <div class="flex">
            <CategoryIcon type={entry.weapon.element} width="30px" />
            <CategoryIcon type={entry.weapon.type} width="30px" />
        </div>
        <EntryItemRarity rarity={entry.weapon.rarity} />
    </div>

    <dl class="hover-details grid">
        <dt>Shatter</dt>
        <dd class="flex g-25">
            <Tier style="padding-block: 0" tier={entry.weapon.shatter.tier} />
            <span>{entry.weapon.shatter.value.toFixed(2)}</span>
        </dd>
        <dt>Charge</dt>
        <dd class="flex g-25">
            <Tier style="padding-block: 0" tier={entry.weapon.charge.tier} />
            <span>{entry.weapon.charge.value.toFixed(2)}</span>
        </dd>
        <dt class="coin-wrapper flex">
            {#if entry.banners.length > 0}
                <img
                    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem005?format=webp"
                    alt="Limited-banner Simulacrum"
                    width="30"
                    height="30"
                />
            {:else}
                <img
                    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem004?format=webp"
                    alt="Standard Banner Simulacrum"
                    width="30"
                    height="30"
                />
                <img
                    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem003?format=webp"
                    alt=""
                    width="30"
                    height="30"
                />
            {/if}
        </dt>
    </dl>
{/if} -->

<style lang="scss">
    .avatar {
        // inset: 0;
    }
</style>
