<svelte:options immutable={true} />

<script>
    export let effects = 2;
    export let ingredients = 1;
    export let nameLength = 2;
</script>

<tr aria-hidden="true">
    <td>
        <div class="img-and-name">
            <div class="placeholder icon" />
            <div class="h3">
                {#each [...Array(nameLength)] as _}
                    <span class="placeholder text" />
                {/each}
            </div>
        </div>
    </td>
    <td>
        <div class="copy">
            {#each [...Array(effects)] as _}
                <div class="placeholder text" />
            {/each}
        </div>
    </td>
    <td class="stack">
        {#each [...Array(ingredients)] as _}
            <div class="flex">
                <span class="placeholder icon small" />
                <span class="text space" />
                <span class="copy short">
                    <span class="placeholder text inline ml" />
                </span>
            </div>
        {/each}
    </td>
</tr>

<style lang="scss">
    @keyframes sheen {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(100%);
        }
    }

    td {
        white-space: nowrap;
        vertical-align: middle;

        &:first-of-type {
            width: clamp(8rem, 5rem + 8vw, 14rem);
        }

        &:last-of-type {
            width: clamp(10rem, 8rem + 8vw, 16rem);
        }

        &:nth-of-type(2) .placeholder {
            animation-delay: 1s;
        }

        &:nth-of-type(3) .placeholder {
            animation-delay: 2s;
        }
    }

    .stack > * + * {
        margin-top: 1em;
    }

    .flex {
        align-items: center;
        display: flex;
    }

    .placeholder {
        background-color: var(--text2);
        border-radius: 3px;
        opacity: 0.15;
        overflow: hidden;
        overflow: -moz-hidden-unscrollable;
        overflow: clip;
        position: relative;

        &::before {
            animation: 2s linear infinite forwards sheen;
            background-image: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0)
            );
            content: "";
            top: 0;
            right: -100%;
            bottom: 0;
            left: -100%;
            position: absolute;
        }
    }

    .icon {
        height: 96px;
        width: 96px;

        &.small {
            height: 48px;
            width: 48px;
        }
    }

    .copy {
        width: 16rem;
        white-space: normal;

        &.short {
            width: 9rem;
        }
    }

    .text {
        display: inline-block;
        height: 1em;
        width: 12rem;

        &:nth-of-type(2) {
            width: 10rem;
        }

        &.inline {
            width: 6.5rem;
        }

        &.space {
            width: 1ch;
        }
    }

    .img-and-name {
        row-gap: 0.75rem;
        text-align: center;
        white-space: normal;
    }

    .h3 {
        font-size: var(--step-0);
        line-height: 1.5;

        & .text:not(.space) {
            width: calc(var(--space-l-xl) * 2);

            &:nth-of-type(2n) {
                width: calc(var(--space-l-xl) * 1.4);
            }
        }
    }

    span {
        display: inline-block;
    }
</style>
