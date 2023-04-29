<script>
    import SvelteMarkdown from "svelte-markdown";
    import allWeaponEffects from "$lib/data/weaponElementalEffects.json";
    export let weapon;

</script>

<h4 id="weapon-effects">Characteristics</h4>


{#if weapon.weaponEffects}
    {#each weapon.weaponEffects as effect}
    {#if effect.title}
        <h5 style={`color: var(--element-${weapon.element})`}>{effect.title}</h5>
    {/if}
        <SvelteMarkdown source={effect.description} />
    {/each}
{/if}

<style lang="scss">
    h5 {
        margin-top: var(--space-m);
    }
</style>