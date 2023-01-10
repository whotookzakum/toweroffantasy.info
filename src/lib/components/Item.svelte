<script>
    export let amount = 0;
    export let rarity = 1;
</script>

<div class={`item-wrapper rarity-${rarity}`}>
    <slot />
    {#if amount}
        <span class="amount">{amount}</span>
    {/if}
</div>

<style global lang="scss">
    .item-wrapper {
        position: relative;
        box-shadow: 0 2px 4px var(--surface-shadow);
        border-radius: 3px;

        img {
            display: block;
        }

        .amount {
            position: absolute;
            right: 0.3ch;
            bottom: 0.3ch;
            line-height: 1;
            font-weight: 700;
            text-shadow: 0 1px 3px black;
            font-size: var(--step-1);
            color: white;
        }
    }

    .rarity-1 {
        background: radial-gradient(#97a9c8, 30%, #93a2c6);
    }
    .rarity-2 {
        background: radial-gradient(#6bbaad, 30%, #6bb9a7);
    }
    .rarity-3 {
        background: radial-gradient(#65a7d6, 30%, #65a2d3);
    }
    .rarity-4 {
        background: radial-gradient(#b894ce, 30%, #b894ce);
    }
    .rarity-5 {
        background: radial-gradient(#e7be7d, 30%, #efc379);
    }
</style>
