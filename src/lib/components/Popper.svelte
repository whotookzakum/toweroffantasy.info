<script>
    import { createPopperActions } from "svelte-popperjs";

    // Might be better with context but works well with slot props for now
    // https://joyofcode.xyz/svelte-context-with-stores

    export let hideArrow = false;
    export let placement = "top";
    export let offset = { name: "offset", options: { offset: [0, 8] } };

    const [popperRef, popperContent] = createPopperActions({
        placement,
        strategy: "fixed",
    });

    const extraOpts = {
        modifiers: [offset],
    };

    let hovering = false;
    let focused = false;

    function setFocused(value) {
        focused = value
    }
</script>

<div
    use:popperRef
    on:mouseenter={() => hovering = true}
    on:mouseleave={() => hovering = false}
    role="tooltip"
>
    <slot {setFocused} />
    {#if hovering || focused}
        <div use:popperContent={extraOpts}>
            <div class="tooltip" > <!-- in:fly={{ y: 12, duration: 200 }} -->
                <slot name="tooltip" />
                {#if !hideArrow}
                    <div class="arrow" data-popper-arrow />
                {/if}
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .tooltip {
        padding: 0.4rem 0.65rem;
        background: rgba(0, 0, 0, 0.89);
        border-radius: 0.5rem;
        font-size: var(--step--2);
        color: var(--text1);
        font-weight: 600;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
        backdrop-filter: blur(5px);

        :global(*) {
            margin: 0;
            line-height: normal;
        }
    }

    .arrow,
    .arrow::before {
        position: absolute;
        width: 12px;
        height: 12px;
        background: inherit;
    }

    .arrow {
        visibility: hidden;
    }

    .arrow::before {
        visibility: visible;
        content: "";
        transform: rotate(45deg);
    }

    .tooltip[data-popper-placement^="top"] > .arrow {
        bottom: -4px;
    }

    .tooltip[data-popper-placement^="bottom"] > .arrow {
        top: -4px;
    }

    .tooltip[data-popper-placement^="left"] > .arrow {
        right: -4px;
    }

    .tooltip[data-popper-placement^="right"] > .arrow {
        left: -4px;
    }
</style>
