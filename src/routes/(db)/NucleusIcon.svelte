<script>
    export let entry;
    export let nucleusIcons;
</script>

{#if entry.id !== "imitation_33"}
    {#each nucleusIcons as uri}
        <img
            src="https://api.toweroffantasy.info{uri}?format=webp"
            alt=""
            width="30"
            height="30"
        />
    {/each}
{/if}

<style lang="scss">
    img {
        margin: 0 -0.4rem -0.4rem 0;

        &:not(:first-child) {
            margin-left: -0.8rem;
        }
    }
</style>
