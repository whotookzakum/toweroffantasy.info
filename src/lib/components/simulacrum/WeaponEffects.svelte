<script>
    import SvelteMarkdown from "svelte-markdown";
    import allWeaponEffects from "$lib/data/weaponElementalEffects.json";
    export let weapon, rarity;

    const getElementalEffect = () => {
        const effect = allWeaponEffects[weapon.element]
        const value = rarity === "SSR" ? effect.values[1] : effect.values[0];
        const updatedDescription = effect.description.replace("{{VALUE}}", value).replace("{{WEAPONNAME}}", weapon.name)
        return { ...effect, description: updatedDescription }
    }
</script>

<h4 id="weapon-effects">Weapon Effects</h4>

<h5 style={`color: var(--element-${weapon.element})`}>{getElementalEffect().title}</h5>
<SvelteMarkdown source={getElementalEffect().description} />

{#if weapon.weaponEffects}
    {#each weapon.weaponEffects as effect}
        <h5 style={`color: var(--element-${weapon.element})`}>{effect.title}</h5>
        <SvelteMarkdown source={effect.description} />
    {/each}
{/if}

<style lang="scss">
    h5 {
        margin-top: var(--space-m);
    }
</style>