<script context="module">
    import { writable } from "svelte/store";
    export const filters = writable({
        weapon: {
            type: [],
            element: []
        },
        display: "Avatar"
    });
</script>

<script>
    import Filter from "$lib/components/Filter.svelte";
    import FilterGroup from "$lib/components/FilterGroup.svelte";
    import IconCheckbox from "$lib/components/IconCheckbox.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import SliderRadio from "../SliderRadio.svelte";
    import SliderRadioInput from "../SliderRadioInput.svelte";

    const wepTypes = ["dps", "defense", "support"];
    const wepElements = ["flame", "volt", "ice", "physical", "altered"];

    function resetFilters() {
        $filters.weapon.type = [];
        $filters.weapon.element = [];
        $filters.display = "Avatar";
    }
</script>

<Filter on:reset={resetFilters}>
    <fieldset>
        <legend class="section-header">Display</legend>
        <SliderRadio inset>
            <SliderRadioInput
                name="displayToggle"
                value="Avatar"
                bind:group={$filters.display}
            />
            <SliderRadioInput
                name="displayToggle"
                value="Weapon"
                bind:group={$filters.display}
            />
        </SliderRadio>
    </fieldset>

    <fieldset>
        <legend class="section-header">Type</legend>
        <FilterGroup filtered={Boolean($filters.weapon.type.length)}>
            {#each wepTypes as wepType}
                <IconCheckbox>
                    <input
                        slot="input"
                        class="visually-hidden"
                        type="checkbox"
                        name="type"
                        value={wepType}
                        bind:group={$filters.weapon.type}
                    />
                    <CategoryIcon slot="icon" type={wepType} width={30} />
                </IconCheckbox>
            {/each}
        </FilterGroup>
    </fieldset>

    <fieldset>
        <legend class="section-header">Element</legend>
        <FilterGroup filtered={Boolean($filters.weapon.element.length)}>
            {#each wepElements as wepElement}
                <IconCheckbox>
                    <input
                        slot="input"
                        class="visually-hidden"
                        type="checkbox"
                        name="element"
                        id={wepElement}
                        value={wepElement}
                        bind:group={$filters.weapon.element}
                    />
                    <CategoryIcon slot="icon" type={wepElement} width={30} />
                </IconCheckbox>
            {/each}
        </FilterGroup>
    </fieldset>
</Filter>

<style lang="scss">
    legend {
        color: inherit;
    }
</style>
