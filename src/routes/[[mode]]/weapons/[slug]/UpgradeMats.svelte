<script>
    import RangeSlider from "svelte-range-slider-pips";
    import ItemIcon from "$components/ItemIcon.svelte";
    import uniqBy from "lodash/uniqBy";

    export let items;

    // For some reason JS doesn't reset the acc array when using reduce so the values kept piling up instead of resetting on slider adjustment 🤷

    let includeFinalAugment = true;
    const uniqueItems = uniqBy(items?.flat(), (item) => item.matId);
    const uniqueItemIds = uniqueItems.map((item) => item.matId);
    let matAmountsObj = getAllMatsObj();

    function getAllMatsObj() {
        return uniqueItemIds.reduce((acc, curr) => {
            if (curr) acc[curr] = 0;
            return acc;
        }, {});
    }

    let levels = [0, 200];
    $: minLevel = Math.floor(levels[0] / 10);
    $: maxLevel = Math.floor(levels[1] / 10);
    $: itemsInLevelRange = items.filter(
        (_, index) => index >= minLevel && index < maxLevel,
    );

    function calculateMats(levels) {
        matAmountsObj = getAllMatsObj();

        levels.flat().forEach((mat) => {
            if (mat.matId) {
                matAmountsObj[mat.matId] += mat.amount;
            }
        });
    }

    let totalMats = [];

    $: {
        calculateMats(itemsInLevelRange);
        totalMats = Object.entries(matAmountsObj).map(([key, value]) => {
            const mat = uniqueItems.find((item) => item.matId === key);
            return {
                ...mat,
                amount: value,
            };
        });
        if (includeFinalAugment && levels[1] === 200) {
            totalMats = totalMats.map((mat) => {
                const finalAugmentMat = items[items.length - 1].find(
                    (item) => item.matId === mat.matId,
                );
                return {
                    ...mat,
                    amount: finalAugmentMat
                        ? mat.amount + finalAugmentMat.amount
                        : mat.amount,
                };
            });
        }
    }
</script>

{#if items}
    <h2 id="upgrade-materials">Upgrade Materials</h2>
    <RangeSlider
        bind:values={levels}
        min={0}
        max={200}
        step={10}
        range
        float
        pips
        first="label"
        last="label"
        rest
    />
    <h3>Augmentation</h3>
    <p>
        Increases max weapon level to <strong class="mint"
            >Lv. {levels[1]}</strong
        >
        and raises weapon skills to
        <strong class="mint">Lv. {maxLevel}</strong>.
        {#if levels[1] === 200}
            <br />
            A final augmentation exists at weapon level 200, raising weapon skills
            to <strong class="mint">Lv. {items.length}</strong>.
        {/if}
    </p>
    {#if levels[1] === 200}
        <label style="user-select: none">
            <input type="checkbox" bind:checked={includeFinalAugment} /> Include
            final augmentation
        </label>
    {/if}
    <ul class="big-list flex g-50">
        {#each totalMats as item}
            {#if item.amount > 0}
                <li class="flex">
                    <ItemIcon {item} />
                </li>
            {/if}
        {/each}
    </ul>
    <p>
        {#if levels[1] >= 20}
            Req. Wanderer Level
            <strong class="clay">{levels[1] / 2}</strong>.
        {/if}
    </p>

    <h3>Enhancement</h3>
    <p>
        Increases weapon level from <strong class="mint">Lv. {levels[0]}</strong
        >
        to
        <strong class="mint">Lv. {levels[1]}</strong>
    </p>
    <!-- TODO: Enhancement mats here -->
    <hr>
    <details>
        <summary>Upgrade materials (all levels)</summary>
        <div class="two-col grid g-50">
            {#each items as matsInLevel, level}
                {#if level < 20}
                    <h4>Level {level * 10} to {(level + 1) * 10}</h4>
                {:else}
                    <h4>Final</h4>
                {/if}
                {#if level > 0}
                    <div class="grid g-50">
                        <h5 class="mint">Augmentation</h5>
                        <ul class="flex g-50" style="margin: 0">
                            {#each matsInLevel as mat}
                                <li class="flex">
                                    <ItemIcon
                                        item={mat}
                                        imgSize="64"
                                        wrapperSize="64px"
                                    />
                                </li>
                            {/each}
                        </ul>
                        {#if level >= 1}
                            <p style="margin: 0;">
                                Req. Wanderer Level
                                <strong class="clay"
                                    >{((level + 1) * 10) / 2}</strong
                                >.
                            </p>
                        {/if}
                    </div>
                {/if}
                {#if level < 20}
                    <div class="{level > 0 ? 'margin-top' : ''} grid g-50">
                        <h5 class="mint">Enhancement</h5>
                        <!-- TODO: Enhancement mats here -->
                    </div>
                {/if}
            {/each}
        </div>
    </details>
{/if}

<style lang="scss">
    .big-list {
        flex-wrap: wrap;
    }

    ul {
        padding: 0;
    }

    .two-col {
        grid-template-columns: auto auto;
        align-items: start;
        justify-content: start;
        column-gap: 2rem;
    }

    h4 {
        grid-column: 1/-1;
        font-size: var(--step-0);
        margin-top: 1.5rem;
    }

    h5 {
        font-size: var(--step--1);
        margin: 0;
    }

    @media (max-width: 700px) {
        .two-col {
            grid-template-columns: auto;
        }

        h4 {
            margin-top: 2rem;
        }

        .margin-top {
            margin-top: 0.5rem;
        }
    }
</style>
