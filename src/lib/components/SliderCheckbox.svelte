<script>
    export let checked, name, id, firstValue, secondValue;
</script>

<input
    type="checkbox"
    {name}
    {id}
    bind:checked={checked}
/>
<label class="slider" for={id}>
    <div>{firstValue}</div>
    <div>{secondValue}</div>
</label>

<style lang="scss">
    input {
        appearance: none;
        display: none;
    }
    
    label.slider {
        background: var(--surface1);
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: var(--step--2);
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