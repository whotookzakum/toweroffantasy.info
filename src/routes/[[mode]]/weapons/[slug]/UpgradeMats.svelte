<script>
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import RangeSlider from "svelte-range-slider-pips";
    import ItemIcon from "$components/ItemIcon.svelte";
    import uniqBy from "lodash/uniqBy";

    export let levels;
    let viewMode = "compact";

    // For some reason JS doesn't reset the acc array when using reduce so the values kept piling up instead of resetting on slider adjustment 🤷

    const items = levels.map((level) => level.mats);

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

    let sliderLevels = [0, 200];
    $: minLevel = Math.floor(sliderLevels[0] / 10);
    $: maxLevel = Math.floor(sliderLevels[1] / 10);
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
        if (includeFinalAugment && sliderLevels[1] === 200) {
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

    $: totalExp = levels.reduce((acc, curr, index) => {
        if (index > minLevel && index <= maxLevel) acc += curr.requiredExp;
        return acc;
    }, 0);
</script>

{#if items}
    <h2 id="upgrade-materials">Upgrade Materials</h2>
    <RangeSlider
        bind:values={sliderLevels}
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
    <RadioSliderGroup
        bind:group={viewMode}
        groupName="upgrade-mats-viewmode"
        name="upgradeMatsViewMode"
        data={[
            { label: "Compact View", value: "compact" },
            { label: "Breakdown View", value: "per-level" },
        ]}
        style="margin: 1rem 0; max-width: 320px"
    />
{/if}

{#if items && viewMode === "compact"}
    <h3 id="augmentation" style="margin: 0">Augmentation</h3>
    <p>
        Increases max weapon level to <strong class="mint"
            >Lv. {sliderLevels[1]}</strong
        >
        and raises weapon skills to
        <strong class="mint">Lv. {maxLevel}</strong>.
        {#if sliderLevels[1] === 200}
            <br />
            A final augmentation exists at weapon level 200, raising weapon skills
            to <strong class="mint">Lv. {items.length}</strong>.
        {/if}
    </p>
    {#if sliderLevels[1] === 200}
        <label style="user-select: none">
            <input type="checkbox" bind:checked={includeFinalAugment} /> Include
            final augmentation
        </label>
    {/if}
    <ul class="flex-wrap flex g-50">
        {#each totalMats as item}
            {#if item.amount > 0}
                <li class="flex">
                    <ItemIcon {item} />
                </li>
            {/if}
        {/each}
    </ul>
    <p>
        {#if sliderLevels[1] >= 20}
            Req. Wanderer Level
            <strong class="clay">{sliderLevels[1] / 2}</strong>.
        {/if}
    </p>

    <h3 id="enhancement" style="margin-top: 2rem">Enhancement</h3>
    <p>
        Increases weapon level from <strong class="mint"
            >Lv. {sliderLevels[0]}</strong
        >
        to
        <strong class="mint">Lv. {sliderLevels[1]}</strong>
    </p>

    <ul class="flex-wrap flex g-50">
        <li class="flex">
            <ItemIcon
                item={{
                    amount: totalExp,
                    icon: "/Hotta/Content/Resources/Icon/huobi/jinbi.webp",
                    name: "Gold",
                    rarity: 3,
                }}
            />
        </li>
        <li class="flex">
            <ItemIcon
                item={{
                    amount: totalExp,
                    icon: "/Hotta/Content/Resources/Icon/huobi/jingyan.webp",
                    name: "EXP",
                    rarity: 1,
                }}
                imgSize={78}
            />
        </li>
    </ul>
{/if}

{#if items && viewMode === "per-level"}
    <div class="table-wrapper">
        <table class="bg-alternate">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Augmentation</th>
                    <th>Enhancement</th>
                </tr>
            </thead>
            <tbody>
                {#each items as matsInLevel, level}
                    {#if level >= minLevel && (level < maxLevel || (maxLevel === 20 && level <= maxLevel))}
                        <tr>
                            {#if level < 20}
                                <td style="white-space: nowrap;">
                                    {level * 10} → {(level + 1) * 10}
                                </td>
                            {:else}
                                <td style="white-space: nowrap;"> Final </td>
                            {/if}
                            <td>
                                {#if level > 0}
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
                                    {#if level < 20}
                                        <p>
                                            Req. Wanderer Level
                                            <strong class="clay"
                                                >{((level + 1) * 10) /
                                                    2}</strong
                                            >.
                                        </p>
                                    {:else}
                                        <p>
                                            Req. Wanderer Level
                                            <strong class="clay">100</strong>.
                                        </p>
                                    {/if}
                                {/if}
                            </td>
                            <td>
                                {#if level < 20}
                                    <ul
                                        class="flex g-50"
                                        style="margin: 0"
                                    >
                                        <li class="flex">
                                            <ItemIcon
                                                item={{
                                                    amount: levels[level + 1]
                                                        .requiredExp,
                                                    icon: "/Hotta/Content/Resources/Icon/huobi/jinbi.webp",
                                                    name: "Gold",
                                                    rarity: 3,
                                                }}
                                                imgSize="64"
                                                wrapperSize="64px"
                                            />
                                        </li>
                                        <li class="flex">
                                            <ItemIcon
                                                item={{
                                                    amount: levels[level + 1]
                                                        .requiredExp,
                                                    icon: "/Hotta/Content/Resources/Icon/huobi/jingyan.webp",
                                                    name: "EXP",
                                                    rarity: 1,
                                                }}
                                                imgSize="58"
                                                wrapperSize="64px"
                                            />
                                        </li>
                                    </ul>
                                {/if}
                            </td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style lang="scss">
    ul {
        padding: 0;
    }

    tbody td {
        // padding-bottom: 0;
        vertical-align: baseline;

        &:first-of-type {
            font-size: var(--step-1);
            font-weight: bold;
            vertical-align: middle;
        }

        p {
            margin-top: 0.5rem;
            font-size: var(--step--2);
            line-height: 1;
        }
    }
</style>
