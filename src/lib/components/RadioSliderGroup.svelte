<script>
    export let group, groupName, data, name, inputFunction, style;
    // Note for Firefox: without "name" attribute, user must tab through all radio options. with "name", tabbing will skip the entire group and arrow keys must be used to select an option
    // The CSS transition supports up to 5 options
</script>

<div class="sliders-wrapper" style:--total-options={data.length} {style}>
    {#each data as { label, value }, index}
        <input
            class="visually-hidden"
            type="radio"
            {value}
            id="{groupName}-{label}"
            {name}
            bind:group
            on:input={inputFunction}
        />
        <label for="{groupName}-{label}">{label}</label>
    {/each}
    <div class="slider" />
</div>

<style lang="scss">
    .sliders-wrapper {
        --total-options: 2;
        $total-options: var(--total-options);

        background: var(--surface1);
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: repeat(var(--total-options), 1fr);
        align-items: center;
        position: relative;

        @for $i from 2 through 5 {
            input:nth-of-type(#{$i}):checked ~ .slider {
                transform: translateX(
                    calc($i * (100% + 0.5rem) - 100% - 0.25rem)
                ) !important;
            }
        }

        &:has(:focus-visible) {
            outline: 2px solid var(--accent);
        }
    }

    label {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        justify-content: center;
        position: relative;
        z-index: 10;
        padding: 0.5rem 1rem;

        cursor: pointer;
        border-radius: 0.25rem;
    }

    .slider {
        background: var(--surface2);
        z-index: 2;
        width: calc(100% / var(--total-options) - 0.5rem);
        height: calc(100% - 0.5rem);
        transform: translateX(0.25rem);
        position: absolute;
        transition: all 0.2s ease;
        border-radius: 0.25rem;
    }

    input:checked + label,
    input:focus-visible + label,
    label:hover {
        color: var(--accent);
    }

    @supports not selector(:has(*)) {
        .sliders-wrapper:focus-within,
        .sliders-wrapper:active {
            outline: 2px solid var(--accent);
        }
    }
</style>
