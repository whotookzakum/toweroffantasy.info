<script>
    import { page } from "$app/stores";

    export let data;
    // Note for Firefox: without "name" attribute, user must tab through all radio options. with "name", tabbing will skip the entire group and arrow keys must be used to select an option
    // The CSS transition supports up to 5 options
</script>

<div class="sliders-wrapper" style:--total-options={data.length}>
    {#each data as { name, href }}
        <a {href} class:active={href === "/" ? $page.url.pathname === href : $page.url.pathname.includes(href)}>{name}</a>
    {/each}
    <div class="slider" />
</div>

<style lang="scss">
    .sliders-wrapper {
        --total-options: 9;
        $total-options: var(--total-options);

        background: var(--surface1);
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: repeat(var(--total-options), 1fr);
        align-items: center;
        position: relative;

        @for $i from 2 through 9 {
            .active:nth-child(#{$i}) ~ .slider {
                transform: translateX(calc($i * (100% + 0.5rem) - 100% - 0.25rem)) !important;
            }
        }
    }

    a {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        justify-content: center;
        position: relative;
        z-index: 10;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
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

    .active {
        color: var(--accent);
    }
</style>
