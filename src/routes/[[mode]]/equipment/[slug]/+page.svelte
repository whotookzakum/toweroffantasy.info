<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const { gear } = data;

    const numberOfRandomStats = {
        "6": 4, // red
        "5": 4, // gold
        "4": 4, // purple
        "3": 3, // blue
        "2": 2, // green
        "1": 1 // gray
    }

    const totalWeight = gear.statPool.reduce((acc, curr) => acc += curr.weightValue, 0)

    gear.statPool.sort((a, b) => b.weightValue - a.weightValue)
</script>

<Meta
    title="{gear.name} | Tower of Fantasy Index"
    description="All about the equipment piece {gear.name}, such as its possible stats, and stat gains per upgrade."
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
<small>Note: Decimal values are truncated, not rounded.</small>
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
                        {Math.floor(stat.propValue)}
                    </b>
                </div>
            </li>
        {/each}
    </ul>
</div>

<div class="grid g-50">
    <h3 style="margin-top: 2rem">Random Stats</h3>
    <p style="margin-block: 0 0.5rem">{gear.name} comes with {numberOfRandomStats[gear.rarity]} of the following stats, selected randomly. Each upgrade will increase the stat values by their respective ranges, shown below.</p>
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
                    <span class="stat-name">{stat.name} <small>({(stat.weightValue / totalWeight * 100).toFixed(2)}%)</small></span>
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
