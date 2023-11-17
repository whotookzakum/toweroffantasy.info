<script>
    import MatriceType from "./MatriceType.svelte";
    import SimulacraTypeV2 from "./SimulacraTypeV2.svelte";

    export let entry;

    const components = {
        SimulacraTypeV2,
        MatriceType,
    };

    let mainRoute = {
        SimulacraTypeV2: "simulacra",
        MatriceType: "matrices",
    };
</script>

<li class="item {entry.__typename}">
    <a href="/{mainRoute[entry.__typename]}/{entry.name.replace(" ", "-").toLowerCase()}">{entry.name}</a>
    <svelte:component this={components[entry.__typename]} {entry} />
</li>

<style lang="scss">
    .item {
        display: grid;
        background: var(--surface1);
        border-radius: 0.5rem;
        padding-bottom: 0.5rem;
        line-height: 1.2;
        overflow: hidden;
        padding: 0.5rem;
        position: relative;
        font-size: var(--step--1);
        font-weight: 600;
        background-size: cover;
        background-position: 50% 20%;
        min-height: 200px;
        outline: 3px solid transparent;
        transition: all 0.2s ease;
        align-content: end;
        gap: 0.25rem;
        color: white;

        &::before,
        &::after {
            content: "";
            position: absolute;
            transition: all 0.2s ease;
            z-index: 2;
            background: linear-gradient(transparent 30%, var(--surface1));
            opacity: 0.7;
            inset: 0;
        }

        &:hover {
            // Optional growing effect on the selected card
            // outline: 3px solid var(--accent);
            // transform: scale(1.05);

            &::before {
                opacity: 0;
            }
            &::after {
                bottom: -2rem;
            }
        }

        &:has(:focus-visible) {
            outline: 3px solid var(--accent);
            transform: scale(1.05);

            &::before {
                opacity: 0;
            }
            &::after {
                bottom: -2rem;
            }

            :global(.avatar) {
                transform: scale(1.1);
            }
        }

        :global(.avatar) {
            width: var(--img-width);
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 0%;
            position: absolute;
            transition: transform 0.2s ease;
            z-index: 1;
        }
    }

    a {
        z-index: 20;
        border: none;
        color: inherit;
        text-shadow: 0 2px 6px var(--bg);

        &::after {
            content: "";
            position: absolute;
            transition: all 0.2s ease;
            inset: 0;
            z-index: 10;
        }

        &:focus-visible {
            outline: none;
        }

        &:hover ~ :global(.avatar) {
            transform: scale(1.1);
        }

        &:where(:hover, :focus-visible) ~ :global(.hover-details) {
            opacity: 1 !important;
        }
    }

    @supports not selector(:has(*)) {
        .item:focus-within {
            outline: 3px solid var(--accent);
            transform: scale(1.05);

            &::before {
                opacity: 0;
            }
            &::after {
                bottom: -2rem;
            }

            :global(.avatar) {
                transform: scale(1.1);
            }
        }
    }
</style>
