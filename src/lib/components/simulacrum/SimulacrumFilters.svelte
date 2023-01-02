<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    let typeFilters = [];
    let elementFilters = [];
    let showWeapon;

    export let filters;
    $: filters = {
        typeFilters,
        elementFilters,
        showWeapon: showWeapon,
    };
    const types = ["dps", "defense", "support"];
    const elements = ["flame", "volt", "ice", "physical", "altered"];

    function resetFilters() {
        typeFilters = [];
        elementFilters = [];
        showWeapon = false;
    }
</script>

<header>
    <h2 style="margin: 0; font-size: var(--step--0)">Filters</h2>
    <button on:click={resetFilters}>Reset</button>
</header>
<form action="" method="get" class="filters">
    <section>
        <span class="section-header">Display</span>
        <input
            type="checkbox"
            name="showWeapon"
            id="show-weapon-toggle"
            bind:checked={showWeapon}
        />
        <label class="slider" for="show-weapon-toggle">
            <div>Avatar</div>
            <div>Weapon</div>
        </label>
    </section>

    <section>
        <span class="section-header">Type</span>
        {#each types as type}
            <input
                type="checkbox"
                name="type"
                id={type}
                value={type}
                bind:group={typeFilters}
            />
            <label for={type}>
                <CategoryIcon {type} width={30} />
            </label>
        {/each}
    </section>

    <section>
        <span class="section-header">Element</span>
        {#each elements as element}
            <input
                type="checkbox"
                name="element"
                id={element}
                value={element}
                bind:group={elementFilters}
            />
            <label for={element}>
                <CategoryIcon type={element} width={30} />
            </label>
        {/each}
    </section>
</form>

<!-- <div>{filters.typeFilters}{filters.elementFilters}{filters.showWeapon}</div> -->
<style lang="scss">
    header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .filters {
        background: var(--surface2);
        display: grid;
        grid-template-columns: auto auto auto;
        row-gap: 1rem;
        padding: 1rem;
        margin-block: var(--space-xs);
        box-shadow: 0 2px 4px var(--surface-shadow);
    }

    input {
        appearance: none;
        display: none;
    }

    // input:checked + label {
    //     background: hsla(226, 100%, 74%, 0.3);
    //     box-shadow: 0 0 3px var(--surface-shadow);
    // }

    // label {
    //     display: grid;
    //     padding: 0.2rem;
    //     border-radius: 3px;
    // }

    .section-header {
        text-transform: uppercase;
        font-size: var(--step--3);
        display: block;
        width: 100%;
        margin-bottom: 0.2rem;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        // gap: 0.2rem;
    }

    button {
        background: none;
        color: var(--accent);
        border: 2px solid var(--accent);
        padding: 0.4rem;
        font: inherit;
        font-size: var(--step--2);
        filter: drop-shadow(0 2px 2px var(--surface-shadow));
        font-weight: 500;

        &:hover {
            color: inherit;
            border-color: var(--text2);
        }
    }

    label.slider {
        background: var(--surface1);
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: var(--step--1);
        z-index: 0;
        gap: 0.5rem;
        padding: 0.5rem 0.4rem;
        user-select: none;
        box-shadow: inset 0 0 2px var(--surface-shadow);

        // Slider thumb
        &::before {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            background: var(--surface3);
            top: 3px;
            left: 3px;
            width: calc(50% - 8px);
            height: calc(100% - 8px);
            box-shadow: 0 1px 2px var(--surface-shadow);
            transition: all 0.2s ease;
            border: 1px solid var(--accent);
        }

        div {
            text-align: center;
            width: 8ch;
            transition: all 0.2s ease;

            &:nth-of-type(1) {
                color: var(--accent);
            }
        }
    }

    input:checked + label.slider {

        div {
            &:nth-of-type(1) {
                color: inherit;
            }
            &:nth-of-type(2) {
                color: var(--accent);
            }
        }

        &::before {
            transform: translateX(calc(99% + 6px));
        }
    }
</style>
