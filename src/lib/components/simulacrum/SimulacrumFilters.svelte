<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import SliderRadio from "../SliderRadio.svelte";
    import SliderRadioInput from "../SliderRadioInput.svelte";
    
    let displayToggle = "Avatar";

    export let filters;
    $: filters = {
        weapon: {
            type: [],
            element: []
        },
        showWeapon: displayToggle === "Weapon",
    };
    const wepTypes = ["dps", "defense", "support"];
    const wepElements = ["flame", "volt", "ice", "physical", "altered"];

    function resetFilters() {
        filters.weapon.type = [];
        filters.weapon.element = [];
        displayToggle = "Avatar";
    }
</script>

<header>
    <h2 style="margin: 0; font-size: var(--step--0)">Filters</h2>
    <button class="reset" on:click={resetFilters}>Reset</button>
</header>
<form action="" method="get" class="filters full-bleed">
    <section>
        <small class="section-header">Display</small>
        <div class="filter-group">
            <SliderRadio inset>
                <SliderRadioInput
                    name="displayToggle"
                    value="Avatar"
                    bind:group={displayToggle}
                />
                <SliderRadioInput
                    name="displayToggle"
                    value="Weapon"
                    bind:group={displayToggle}
                />
            </SliderRadio>
        </div>
    </section>

    <section>
        <small class="section-header">Type</small>
        <div class="filter-group">
            {#each wepTypes as wepType}
                <input
                    type="checkbox"
                    name="type"
                    id={wepType}
                    value={wepType}
                    bind:group={filters.weapon.type}
                />
                <label for={wepType}>
                    <CategoryIcon type={wepType} width={30} />
                </label>
            {/each}
        </div>
    </section>

    <section>
        <small class="section-header">Element</small>
        <div class="filter-group">
            {#each wepElements as wepElement}
                <input
                    type="checkbox"
                    name="element"
                    id={wepElement}
                    value={wepElement}
                    bind:group={filters.weapon.element}
                />
                <label for={wepElement}>
                    <CategoryIcon type={wepElement} width={30} />
                </label>
            {/each}
        </div>
    </section>
</form>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }

    form.filters {
        background: var(--surface2);
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 1.5rem;
        margin: 0 auto;
        padding: 1rem;
        margin-block: var(--space-2xs);
        box-shadow: 0 2px 4px var(--surface-shadow);
    }

    .filter-group {
        display: flex;
    }

    small {
        color: inherit;
    }

    input {
        appearance: none;
        position: fixed;
        opacity: 0;
        pointer-events: none;
    }

    input:focus + label {
        outline: 2px solid white;
    }

    label {
        display: grid;
        padding: 2px;
        margin: auto 1px;
        border: 1px solid transparent;
    }

    input:checked + label {
        background: var(--surface3);
        border: 1px solid var(--accent);
        box-shadow: 0 0 3px var(--surface-shadow);
    }

    button.reset {
        background: none;
        color: var(--accent);
        border: 1px solid var(--accent);
        padding-block: calc(0.5rem - 4px);
        width: 8ch;
        font: inherit;
        font-size: var(--step--2);
        filter: drop-shadow(0 2px 2px var(--surface-shadow));
        background: var(--surface2);

        &:hover {
            color: inherit;
            border-color: var(--text2);
        }
    }
</style>
