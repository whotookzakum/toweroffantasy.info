<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import EntryItemRarity from "./EntryItemRarity.svelte";
    export let entry;
</script>

<img
    class="avatar"
    src="https://api.toweroffantasy.info{entry.assets.painting}?format=webp"
    alt=""
    width="260"
    height="349"
/>
<div class="bottom flex">
    <div class="flex">
        <CategoryIcon type={entry.weapon.element} width="30px" />
        <CategoryIcon type={entry.weapon.type} width="30px" />
    </div>
    <EntryItemRarity rarity={entry.weapon.rarity} />
</div>

<!-- <img
    class="coin"
    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem005?format=webp"
    alt=""
/> -->

<style lang="scss">
    .bottom {
        justify-content: space-between;
        align-items: end;
        z-index: 5;
        color: white;
    }

    .coin {
        z-index: 8;
        width: 30px;
        height: auto;
        position: absolute;
        right: 2.3rem;
        bottom: 0.22rem;
    }
</style>