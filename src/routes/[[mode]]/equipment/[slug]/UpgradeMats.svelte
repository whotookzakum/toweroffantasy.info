<script>
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import RangeSlider from "svelte-range-slider-pips";
    import ItemIcon from "$components/ItemIcon.svelte";
    import uniqBy from "lodash/uniqBy";

    export let advancement;
    export let gear;
    let levels = [0, gear.maxLevel];
    let viewMode = "compact";

    // For some reason JS doesn't reset the acc array when using reduce so the values kept piling up instead of resetting on slider adjustment 🤷

    const items = advancement.flat();

    const uniqueItems = uniqBy(items, (item) => item.matId);
    const uniqueItemIds = uniqueItems.map((item) => item.matId);
    let matAmountsObj = getAllMatsObj();

    function getAllMatsObj() {
        return uniqueItemIds.reduce((acc, curr) => {
            if (curr) acc[curr] = 0;
            return acc;
        }, {});
    }

    $: itemsInLevelRange = advancement.filter(
        (_, index) => index >= levels[0] && index < levels[1],
    );

    function calculateMats(arr) {
        matAmountsObj = getAllMatsObj();
        arr.flat().forEach((mat) => {
            if (mat.matId) {
                matAmountsObj[mat.matId] += mat.amount;
            }
        });
    }

    let totalMats = [];

    $: {
        calculateMats(itemsInLevelRange);
        totalMats = Object.entries(matAmountsObj).map(([matId, amount]) => {
            const mat = uniqueItems.find((item) => item.matId === matId);
            return {
                ...mat,
                amount,
            };
        });
    }
</script>

<div>
    <RangeSlider
        bind:values={levels}
        min={0}
        max={gear.maxLevel}
        step={1}
        range
        float
        pips
        pipstep={5}
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
        style="max-width: 320px"
    />
</div>

{#if viewMode === "compact"}
    <ul class="flex-wrap flex g-50">
        {#each totalMats as item}
            {#if item.amount > 0}
                <li class="flex">
                    <ItemIcon {item} />
                </li>
            {/if}
        {/each}
    </ul>
{/if}

{#if viewMode === "per-level"}
    <div class="table-wrapper">
        <table class="bg-alternate">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Materials</th>
                </tr>
            </thead>
            <tbody>
                {#each advancement as adv, level}
                    {#if level >= levels[0] - 1 && level < levels[1]}
                        <tr>
                            <td>{level + 1}</td>
                            <td>
                                <ul class="flex g-50" style="margin: 0">
                                    {#each adv as item}
                                        <li class="flex">
                                            <ItemIcon
                                                {item}
                                                imgSize="64"
                                                wrapperSize="64px"
                                            />
                                        </li>
                                    {/each}
                                </ul>
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
