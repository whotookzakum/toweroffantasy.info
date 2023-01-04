<script>
    import Icon from "@iconify/svelte";
    export let navIsOpen;
</script>

<div class="nav-toggle" class:slide={navIsOpen}>
    <input type="checkbox" name="nav-toggle" id="nav-toggle" bind:checked={navIsOpen}>
    <label for="nav-toggle">
        {#if navIsOpen}
            <Icon icon="ph:x" width="40" height="40" color="inherit" />
        {:else}
            <Icon icon="mdi:menu" width="40" height="40" color="inherit" />
        {/if}
    </label>
</div>

<style lang="scss">
    .nav-toggle {
        position: fixed;
        z-index: 2000;
        top: 1rem;
        left: 1rem;
        display: none;
        transition: all 0.3s ease;

        input {            
            display: none;
            // appearance: none;
        }

        label {
            background: var(--surface3);
            box-shadow: 0 2px 4px var(--surface-shadow);
            border: 1px solid var(--accent);
            display: flex;
            padding: 0.3rem;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: 44px;
            height: 44px;
            color: var(--accent);

            &:focus {
                outline: 5px solid red;
            }
        }
    }

    @media (max-width: 800px) {
        .nav-toggle {
            display: unset;
        }
    }

    .slide {
        transform: translateX(250px);
    }
</style>