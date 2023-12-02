<script>
    import SvelteMarkdown from "svelte-markdown";
    export let data;
    $: ({ Weapon } = data);
    $: weapon = $Weapon?.data?.weapon;
    $: console.log(weapon);
</script>

{#if !$Weapon.fetching}
    <div class="grid g-50">
        <h1>{weapon.Name}</h1>
        <span>{weapon.Rarity} Weapon</span>

        <img
            src="https://api.toweroffantasy.info{weapon.Assets
                .ItemIcon}?format=webp"
            alt=""
            width="128"
            height="128"
        />

        {#if weapon.WeaponEffects}
            <h2>Weapon Effects</h2>
            {#each weapon.WeaponEffects as effect}
                <span>{effect.title}</span>
                <SvelteMarkdown source={effect.description} />
            {/each}
        {/if}

        {#if weapon.WeaponAdvancements}
            <h2>Advancements</h2>
            {#each weapon.WeaponAdvancements as advancement}
                <SvelteMarkdown source={advancement.Description} />
            {/each}
        {/if}

        {#if weapon.WeaponAttacks}
            <h2>Skills</h2>
            {#each Object.entries(weapon.WeaponAttacks) as [categoryKey, attackCategory]}
                <h3>{attackCategory.Name}</h3>
                {#each attackCategory.Attacks as attack}
                    <h4>{attack.Name}</h4>
                    <img
                        src="https://api.toweroffantasy.info{attack.Icon}?format=webp"
                        alt=""
                        width="64"
                        height="64"
                    />
                    <SvelteMarkdown source={attack.Description} />
                    <span>{attack.Operations}</span>
                    <span>{attack.Tags}</span>
                {/each}
            {/each}
        {/if}
    </div>
{/if}
