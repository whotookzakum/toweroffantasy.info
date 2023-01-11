<script>
    export let inset = false;
</script>

<div class="slider-radio" class:inset>
    <slot />
    <div class="slider" />
</div>

<style global lang="scss">
    .slider-radio {
        width: fit-content;
        background: var(--surface2);
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: var(--step--2);
        z-index: 0;
        gap: 0.5rem;
        padding: 0.5rem 0.4rem;
        user-select: none;
        box-shadow: 0 2px 4px var(--surface-shadow);

        &:focus-within,
        &:active {
            outline: 2px solid white;
        }

        input[type="radio"],
        input[type="radio"]:checked {
            appearance: none;
            position: fixed;
            opacity: 0;
            pointer-events: none;
        }

        label {
            text-align: center;
            width: 8ch;
            transition: all 0.2s ease;
        }

        input:checked + label {
            color: var(--accent);
        }

        // Slider thumb
        .slider {
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

        input:nth-of-type(2):checked ~ .slider {
            transform: translateX(calc(99% + 6px));
        }
    }

    .inset {
        background: var(--surface1);
        box-shadow: inset 0 2px 4px var(--surface-shadow);
        box-shadow: inset 0 0 2px var(--surface-shadow);
    }
</style>
