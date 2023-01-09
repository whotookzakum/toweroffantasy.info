<script>
    import EffectIcon from "./EffectIcon.svelte";
    let recoveryFilters = [];
    let buffFilters = [];
    let rarityFilters = [];

    export let filters;
    $: filters = {
        rarityFilters,
        recoveryFilters,
        buffFilters
    };
    const rarities = [1, 2, 3, 4, 5];
    const recoveryEffects = ["health", "endurance"];
    const buffs = ["iceDEF", "fireDEF", "voltDEF", "physDEF", "iceATK", "fireATK", "voltATK", "physATK"];

    function resetFilters() {
        rarityFilters = [];
        recoveryFilters = [];
        buffFilters = [];
    }
</script>

<header>
    <h2 style="margin: 0; font-size: var(--step--0)">Filters</h2>
    <button class="reset" on:click={resetFilters}>Reset</button>
</header>
<form action="" method="get" class="filters full-bleed">
    <section>
        <small class="section-header">Rarity</small>
        <div class="filter-group">
            {#each rarities as rarity}
                <input
                    type="checkbox"
                    name="type"
                    id={`rarity-${rarity}`}
                    value={rarity}
                    bind:group={rarityFilters}
                />
                <label for={`rarity-${rarity}`}>
                    <div class={`box rarity-${rarity}`} />
                </label>
            {/each}
        </div>
    </section>

    <section>
        <small class="section-header">Recovery</small>
        <div class="filter-group">
            {#each recoveryEffects as effect}
                <input
                    type="checkbox"
                    name="type"
                    id={effect}
                    value={effect}
                    bind:group={recoveryFilters}
                />
                <label for={effect}>
                    <EffectIcon {effect} width="24" />
                </label>
            {/each}
        </div>
    </section>

    <section>
        <small class="section-header">Buff</small>
        <div class="filter-group">
            {#each buffs as buff}
                <input
                    type="checkbox"
                    name="element"
                    id={buff}
                    value={buff}
                    bind:group={buffFilters}
                />
                <label for={buff}>
                    <EffectIcon effect={buff} width="24" />
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
    .box {
        width: 20px; 
        height: 20px;
        border-radius: 3px;
        margin-block: 2px;
    }
</style>
