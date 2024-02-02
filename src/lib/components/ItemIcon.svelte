<script>
    import Popper from "$components/Popper.svelte";

    export let item;
    export let imgSize = 96;
    export let wrapperSize = "78px";
</script>

{#if item.name}
    <Popper>
        <div
            class="item-icon-wrapper grid"
            style:background="var(--rarity-{item.rarity})"
            style:width={wrapperSize}
            style:height={wrapperSize}
        >
            <img
                src={item.icon}
                alt={item.name ? item.name : ""}
                width={imgSize}
                height={imgSize}
            />
            {#if item.amount?.toString()}
                <span>{item.amount}</span>
            {/if}
        </div>
        <p slot="tooltip">{item.name}</p>
    </Popper>
{:else}
    <div
        class="item-icon-wrapper grid"
        style:background="var(--rarity-{item.rarity})"
        style:width={wrapperSize}
        style:height={wrapperSize}
    >
        <img src={item.icon} alt="" width={imgSize} height={imgSize} />
    </div>
{/if}

<style lang="scss">
    .item-icon-wrapper {
        --rarity-1: radial-gradient(#97a9c8, 30%, #93a2c6);
        --rarity-2: radial-gradient(#6bbaad, 30%, #6bb9a7);
        --rarity-3: radial-gradient(#65a7d6, 30%, #65a2d3);
        --rarity-4: radial-gradient(#b894ce, 30%, #b894ce);
        --rarity-5: radial-gradient(#e7be7d, 30%, #efc379);
        border-radius: 0.5rem;
        place-content: center;
        width: fit-content;
        overflow: hidden;
        position: relative;

        span {
            position: absolute;
            right: 0.3ch;
            bottom: 0.3ch;
            line-height: 1;
            font-weight: 700;
            text-shadow: 0 1px 3px #000;
            font-size: var(--step-1);
            color: #fff;
        }
    }
</style>
