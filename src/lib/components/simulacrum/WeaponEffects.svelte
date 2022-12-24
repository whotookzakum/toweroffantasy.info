<script>
    import SvelteMarkdown from "svelte-markdown";
    export let weapon;
</script>

<h4 id="weapon-effects">Weapon Effects</h4>
{#if weapon.weaponEffects}
    {#each weapon.weaponEffects as effect}
        <h5>{effect.title}</h5>
        <SvelteMarkdown source={effect.description} />
    {/each}
{/if}
