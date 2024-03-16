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

<div class="grid g-50">
    <h3 style="margin-top: 1rem;">Base Stats</h3>
    <ul class="stats g-100">
        {#each gear.baseStat as stat}
            <li class="stat box col-2">
                <img
                    src={stat.icon}
                    alt=""
                    width="40"
                    height="40"
                    class="invert"
                />
                <div class="stat-text">
                    <span class="stat-name">{stat.name}</span>
                    <b class="stat-value">
                        {stat.propValue}
                    </b>
                </div>
            </li>
        {/each}
    </ul>
</div>

<div class="grid g-50">
    <h3 style="margin-top: 2rem">Random Stats</h3>
    <p style="margin-block: 0 0.5rem">{gear.name} comes with 4 of the following stats, selected randomly. Each upgrade will increase the stat values by their respective ranges, shown below.</p>
    <ul class="stats g-100">
        {#each gear.statPool as stat}
            <li class="stat box col-2">
                <img
                    src={stat.icon}
                    alt=""
                    width="40"
                    height="40"
                    class="invert"
                />
                <div class="stat-text">
                    <span class="stat-name">{stat.name} <small>({stat.weightValue}%)</small></span>
                    <b class="stat-value">
                        ?~?
                    </b>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
    }
</style>
