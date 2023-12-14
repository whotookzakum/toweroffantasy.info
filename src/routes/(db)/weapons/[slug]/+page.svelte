<script>
    import SvelteMarkdown from "svelte-markdown";
    import SimulacrumV2Query from "../../SimulacrumV2Query.svelte";
    import EntryItem from "../../EntryItem.svelte";
    import MatrixQuery from "../../MatrixQuery.svelte";
    import WeaponAttack from "./WeaponAttack.svelte"
    export let data;
    $: ({ Weapon } = data);
    $: weapon = $Weapon?.data?.weapon;

    // $: console.log(data)
    // $: console.log($Weapon)
    $: console.log(weapon)

    let stars = 1
    let level = 0;
</script>

<span>Stars: {stars}</span>
<input type="range" min="1" max="6" bind:value={stars}>

<span>Level: {level}</span>
<input type="range" min="0" max="200" bind:value={level}>

{#if !$Weapon.fetching}
    <div class="grid g-50">
        <p>Charge: {weapon.weaponAdvancements[stars - 1].charge.value}</p>
        <p>Shatter: {weapon.weaponAdvancements[stars - 1].shatter.value}</p>

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
            <SimulacrumV2Query id={weapon.simulacrumId} />
            <EntryItem entry={weapon} />
            <MatrixQuery id="matrix_ssr35" />
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
                <SvelteMarkdown source={advancement.description} />
            {/each}
        {/if}

        {#if weapon.weaponAttacks}
            <h2>Skills</h2>
            <WeaponAttack data={weapon.weaponAttacks.normals[0]} />
            {#each Object.entries(weapon.weaponAttacks) as [categoryKey, attackCategory]}
                <h3>{categoryKey}</h3>
                <!-- {#each attackCategory.attacks as attack}
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
                {/each} -->
            {/each}
        {/if}
    </div>
{/if}