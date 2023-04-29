<script>
    import Gift from "./Gift.svelte";

    export let gifts;
</script>

<h3 id="upgrade-materials">Upgrade Materials</h3>
<ol class="gifts">
    {#each gifts as gift}
        <li>
            <Gift {gift} />
        </li>
    {/each}
</ol>

<style lang="scss">
    .gifts {
        padding: 0;
        list-style: none;
    }

    .gifts {
        margin: 0;
        grid-template-columns: repeat(auto-fill, 64px);
    }
</style>
