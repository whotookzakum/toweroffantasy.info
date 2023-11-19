<script>
    export let rarity;
</script>

<img
    class="rarity {rarity}"
    src="https://api.toweroffantasy.info/assets/UI/yizhi/yizhi_tips_zi_{rarity.toLowerCase()}?format=webp"
    alt=""
    width="63"
    height="36"
/>

<style>
    .rarity {
        width: 28px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.8));
        margin: 0.1rem;
        margin-left: auto;
        z-index: 5;
    }

    .SR {
        margin-right: -3px;
    }

    .R,
    .N {
        margin-right: -8px;
    }

    :global(.MatriceType .rarity) {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
    }
</style>
