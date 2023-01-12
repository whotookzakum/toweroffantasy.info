<script>
    export let label = false;
</script>

<label>
    <slot name="input" />
    <span>
        <span class="icon-container">
            <slot name="icon" />
        </span>
    </span>
    {#if label}
        <span class="visually-hidden">{label}</span>
    {/if}
</label>

<style lang="scss">
    label {
        margin: 2px;
    }

    span {
        display: block;
        transition: opacity 0.1s ease;
    }

    label :global(input + *) {
        border: 1px solid transparent;
        box-sizing: content-box;
        cursor: pointer;
        padding: 1px;
    }

    label :global(input:hover + *) {
        background: var(--surface3);
    }

    label :global(input:focus-visible + *) {
        outline: 2px solid white;
    }

    label :global(input:checked + *) {
        background: var(--surface3);
        border-color: var(--accent);
        box-shadow: 0 0 3px var(--surface-shadow);
    }
</style>
