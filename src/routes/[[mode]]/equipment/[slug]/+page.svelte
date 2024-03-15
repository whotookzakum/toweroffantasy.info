<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const { gear } = data;
</script>

<Meta
    title="{gear.name} | Tower of Fantasy Index"
    description=""
    image={gear.icon}
/>

<Ad unit="LB-gear1" />

<GenericHeader
    h1={gear.name}
    icon={gear.icon}
    rarity={gear.rarity}
    desc={gear.description}
    eleColor={gear.element}
/>

<h2 id="stats">Stats</h2>
<ul>
    {#each gear.baseStat as stat}
        <li>
            {stat.propName}
            {stat.propValue}
        </li>
    {/each}
</ul>
