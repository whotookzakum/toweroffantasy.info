<script context="module">
    import { writable } from "svelte/store";
    export const filters = writable({
        rarity: [],
        recovery: [],
        buff: []
    });
</script>

<script>
    import Filter from "$lib/components/Filter.svelte";
    import FilterGroup from "$lib/components/FilterGroup.svelte";
    import IconCheckbox from "$lib/components/IconCheckbox.svelte";
    import EffectIcon from "./EffectIcon.svelte";

    const rarities = [1, 2, 3, 4, 5];
    const recoveryEffects = ["health", "endurance"];
    const buffs = [
        "iceDEF",
        "fireDEF",
        "voltDEF",
        "physDEF",
        "iceATK",
        "fireATK",
        "voltATK",
        "physATK"
    ];

    function resetFilters() {
        $filters.rarity = [];
        $filters.recovery = [];
        $filters.buff = [];
    }
</script>

<Filter controls="dishes-table" on:reset={resetFilters}>
    <fieldset>
        <legend class="section-header">Rarity</legend>
        <FilterGroup filtered={Boolean($filters.rarity.length)}>
            {#each rarities as rarity}
                <IconCheckbox label={`Rarity ${rarity}`}>
                    <input
                        slot="input"
                        class="visually-hidden"
                        type="checkbox"
                        name="rarity"
                        value={rarity}
                        bind:group={$filters.rarity}
                    />
                    <span slot="icon" class={`box rarity-${rarity}`} />
                </IconCheckbox>
            {/each}
        </FilterGroup>
    </fieldset>

    <fieldset>
        <legend class="section-header">Recovery</legend>
        <FilterGroup filtered={Boolean($filters.recovery.length)}>
            {#each recoveryEffects as effect}
                <IconCheckbox>
                    <input
                        slot="input"
                        class="visually-hidden"
                        type="checkbox"
                        name="recovery"
                        value={effect}
                        bind:group={$filters.recovery}
                    />
                    <span slot="icon"><EffectIcon {effect} width="24" /></span>
                </IconCheckbox>
            {/each}
        </FilterGroup>
    </fieldset>

    <fieldset>
        <legend class="section-header">Buff</legend>
        <FilterGroup filtered={Boolean($filters.buff.length)}>
            {#each buffs as buff}
                <IconCheckbox>
                    <input
                        slot="input"
                        class="visually-hidden"
                        type="checkbox"
                        name="element"
                        value={buff}
                        bind:group={$filters.buff}
                    />
                    <EffectIcon slot="icon" effect={buff} width="24" />
                </IconCheckbox>
            {/each}
        </FilterGroup>
    </fieldset>
</Filter>

<style lang="scss">
    legend {
        color: inherit;
    }

    .box {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        margin-block: 2px;
    }
</style>
