<script>
    import SvelteMarkdown from "svelte-markdown";
    import EntryItem from "../../EntryItem.svelte"
    import { graphql } from '$houdini'
    import QueryEntryItem from "./QueryEntryItem.svelte";
    export let data;
    $: ({ Weapon } = data);
    $: weapon = $Weapon?.data?.weapon;

    // console.log(data)
</script>



{#if !$Weapon.fetching}
    <div class="grid g-50">
        <h1>{weapon.name}</h1>
        <span>{weapon.rarity} Weapon</span>

        <img
            src="https://api.toweroffantasy.info{weapon.assets
                .icon}?format=webp"
            alt=""
            width="128"
            height="128"
        />

        <span>Part of a set</span>

        <ul class="entry-list">
            <QueryEntryItem type="simulacrum_v2" id="imitation_37" />
        </ul>

        {#if weapon.weaponEffects}
            <h2>Weapon Effects</h2>
            {#each weapon.weaponEffects as effect}
                <span>{effect.title}</span>
                <SvelteMarkdown source={effect.description} />
            {/each}
        {/if}

        {#if weapon.weaponAdvancements}
            <h2>Advancements</h2>
            {#each weapon.weaponAdvancements as advancement}
                <SvelteMarkdown source={advancement.Description} />
            {/each}
        {/if}

        {#if weapon.weaponAttacks}
            <h2>Skills</h2>
            {#each Object.entries(weapon.weaponAttacks) as [categoryKey, attackCategory]}
                <h3>{attackCategory.name}</h3>
                {#each attackCategory.attacks as attack}
                    <h4>{attack.name}</h4>
                    <img
                        src="https://api.toweroffantasy.info{attack.icon}?format=webp"
                        alt=""
                        width="64"
                        height="64"
                    />
                    <SvelteMarkdown source={attack.description} />
                    <span>{attack.operations}</span>
                    <span>{attack.tags}</span>
                {/each}
            {/each}
        {/if}
    </div>
{/if}
