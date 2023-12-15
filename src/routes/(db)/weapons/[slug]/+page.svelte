<script>
    import SvelteMarkdown from "svelte-markdown";
    import SimulacrumV2Query from "../../SimulacrumV2Query.svelte";
    import EntryItem from "../../EntryItem.svelte";
    import MatrixQuery from "../../MatrixQuery.svelte";
    import WeaponQuery from "../../WeaponQuery.svelte";
    import WeaponAttack from "./WeaponAttack.svelte";
    import { weaponLevel } from "$lib/stores";
    import Tier from "../../Tier.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import BannerTable from "../../BannerTable.svelte";

    export let data;
    $: ({ Weapon } = data);
    $: weapon = $Weapon?.data?.weapon;

    // $: console.log(data)
    // $: console.log($Weapon)
    // $: console.log(weapon);

    let stars = 1;
    let attackCategory = "skill";
</script>

<span>Stars: {stars}</span>
<input type="range" min="1" max="6" bind:value={stars} />

<span>Level: {$weaponLevel}</span>
<input type="range" min="0" max="200" bind:value={$weaponLevel} />

{#if !$Weapon.fetching}
    <div class="gri g-50">
        <h1>{weapon.name}</h1>
        <p>{weapon.rarity} Weapon</p>
        <CategoryIcon type={weapon.element} />
        <CategoryIcon type={weapon.category} />
        {#each weapon.weaponStats as stat}
            <img
                src="https://api.toweroffantasy.info{stat.icon}?format=webp"
                alt=""
                width="42"
                height="42"
            />
        {/each}

        <p>
            Shatter: {weapon.weaponAdvancements[stars - 1].shatter.value}
            <Tier tier={weapon.weaponAdvancements[stars - 1].shatter.tier} />
        </p>
        <p>
            Charge: {weapon.weaponAdvancements[stars - 1].charge.value}
            <Tier tier={weapon.weaponAdvancements[stars - 1].charge.tier} />
        </p>

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
            <span>Level: {$weaponLevel}</span>
            <input type="range" min="0" max="200" bind:value={$weaponLevel} />
            <p>
                Skills can be strengthened by leveling up your weapon; every 10
                weapon levels increases skill level by 1. For example, a level
                143 weapon will have skill level 14, a level 90 weapon will have
                skill level 90, etc. Percent values do not change, only flat
                values will increase alongside skill level.
            </p>

            <label>
                <input
                    type="radio"
                    value="normals"
                    bind:group={attackCategory}
                /> Normal
            </label>

            <label>
                <input type="radio" value="dodge" bind:group={attackCategory} />
                Dodge
            </label>

            <label>
                <input type="radio" value="skill" bind:group={attackCategory} />
                Skill
            </label>

            <label>
                <input
                    type="radio"
                    value="discharge"
                    bind:group={attackCategory}
                /> Discharge
            </label>

            {#each weapon.weaponAttacks[attackCategory] as data}
                <WeaponAttack {data} />
            {/each}
        {/if}

        {#if weapon.meta?.recommendedPairings}
            <h3>Recommended Pairings</h3>
            <ul class="entry-list">
                {#each weapon.meta.recommendedPairings as pairingId}
                    <WeaponQuery id={pairingId} />
                {/each}
            </ul>
        {/if}

        {#if weapon.meta?.recommendedMatrices}
            <h3>Recommended Matrices</h3>
            <ul class="entry-list">
                {#each weapon.meta.recommendedMatrices as matrix}
                    <MatrixQuery id={matrix.id} />
                {/each}
            </ul>
        {/if}

        {#if weapon.banners?.length > 0}
            <h2>Banners</h2>
            <BannerTable  /> 
            <!-- bannerSearchTerm={weapon.banners[0].simulacrumName} -->
        {/if}
    </div>
{/if}
