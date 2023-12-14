<script>
    export let rarity;
    export let id = "";
    export let style = "";
</script>

{#if id !== "imitation_33"}
    <img
        class="rarity {rarity}"
        src="https://api.toweroffantasy.info/assets/UI/yizhi/yizhi_tips_zi_{rarity.toLowerCase()}?format=webp"
        alt=""
        width="63"
        height="36"
        {style}
    />
{/if}

<style>
    .rarity {
        width: 28px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.8));
        margin: 0.1rem;
    }

    .SR {
        margin-inline: -3px;
    }

    .R,
    .N {
        margin-inline: -8px;
    }
</style>
