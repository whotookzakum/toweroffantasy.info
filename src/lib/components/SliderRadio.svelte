<script>
    export let inset = false;
</script>

<div class="slider-radio" class:inset>
    <slot />
    <div class="slider" />
</div>

<style global lang="scss">
    .slider-radio {
        --inset: 3px;
        --gap: 0.5rem;
        width: fit-content;
        background: var(--surface2);
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: var(--step--2);
        z-index: 0;
        user-select: none;
        box-shadow: 0 2px 4px var(--surface-shadow);

        label {
            cursor: pointer;
            display: block;
            text-align: center;
            line-height: 2.25rem;
            padding: 0 calc(var(--gap) / 2);
            position: relative;
            white-space: nowrap;
            width: 4.75rem;

            &:first-of-type {
                padding-left: calc(var(--inset) + var(--gap) / 2);

                &::before {
                    right: 0;
                }
            }

            &:last-of-type {
                padding-right: calc(var(--inset) + var(--gap) / 2);

                &::before {
                    left: 0;
                }
            }

            &::before {
                content: "";
                inset: var(--inset);
                outline-offset: var(--inset);
                position: absolute;
            }
        }

        input:focus-visible + label::before {
            outline: 2px solid white;
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
            top: var(--inset);
            left: var(--inset);
            width: calc(50% - var(--inset));
            height: calc(100% - var(--inset) * 2);
            box-shadow: 0 1px 2px var(--surface-shadow);
            transition: transform 0.2s ease;
            border: 1px solid var(--accent);
        }

        input:nth-of-type(2):checked ~ .slider {
            transform: translateX(100%);
        }
    }

    .inset {
        background: var(--surface1);
        box-shadow: inset 0 2px 4px var(--surface-shadow);
        box-shadow: inset 0 0 2px var(--surface-shadow);
    }
</style>
