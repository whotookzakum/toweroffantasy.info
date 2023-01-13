<script>
    export let controls = false;
    export let reset = true;
</script>

<form aria-controls={controls} on:reset|preventDefault>
    <header>
        <h2>Filters</h2>
        {#if reset}
            <button class="reset" type="reset">Reset</button>
        {/if}
    </header>
    <div class="filters full-bleed">
        <slot />
    </div>
</form>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }

    h2 {
        font-size: var(--text-step-2);
        margin: 0;
    }

    .filters {
        background: var(--surface2);
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 1.5rem;
        margin: 0 auto;
        padding: 1rem;
        margin-block: var(--space-2xs);
        box-shadow: 0 2px 4px var(--surface-shadow);
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
