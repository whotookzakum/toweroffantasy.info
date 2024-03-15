<script>
    import Popper from "$components/Popper.svelte";
    import CategoryIcon from "./EntryItem/CategoryIcon.svelte";

    export let item; // name, icon, amount, rarity
    export let imgSize = 96;
    export let wrapperSize = "78px";
    export let isIngredient = false;
</script>

{#if isIngredient}
    <Popper let:toggleFocused>
        <button
            class="item-icon-wrapper grid"
            style:background="var(--rarity-{item.rarity})"
            style:width={wrapperSize}
            style:height={wrapperSize}
            on:click={toggleFocused}
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
        </button>
        <!-- TODO: replace description with source once available in the API -->
        <p slot="tooltip">{item.description}</p>
    </Popper>
{:else if item.name}
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
            {#if item.__typename === "FoodType"}
                {#each item.categories as category}
                    <div
                        class="foodbuff-wrapper"
                        class:top-left={category === "AddEnergyRecover"}
                        class:visually-hidden={(category.includes("Def") &&
                            item.categories.some((cat) => cat.includes("Atk"))) || category === "AddSatiety"}
                    >
                        <CategoryIcon type={category} style="width: 28px" />
                    </div>
                {/each}
                <div class="stars-wrapper">
                    {#each Array(item.stars) as _}
                        <img
                            src="/Hotta/Content/Resources/UI/common/star/STAR_NoLine.webp"
                            alt=""
                            width="22"
                            height="22"
                        />
                    {/each}
                </div>
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

    .foodbuff-wrapper {
        position: absolute;
        top: 0.3ch;
        right: 0.3ch;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));

        &.top-left {
            right: unset;
            left: 0.3ch;
        }
    }

    .stars-wrapper {
        position: absolute;
        display: flex;
        bottom: 2px;
        left: 1px;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 1));

        img:not(:first-of-type) {
            margin-left: -0.25rem;
        }
    }
</style>
