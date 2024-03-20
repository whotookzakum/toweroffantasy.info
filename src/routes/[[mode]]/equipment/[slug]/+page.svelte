<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import UpgradeMats from "./UpgradeMats.svelte";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import { equipLevel, equipStars } from "$lib/stores";
    import EquipLevelSlider from "./EquipLevelSlider.svelte";
    import EquipStarSlider from "./EquipStarSlider.svelte";

    export let data;
    const { gear } = data;
    gear.statPool.sort((a, b) => b.weightValue - a.weightValue);

    const numberOfRandomStats = {
        "6": 4, // red
        "5": 4, // gold
        "4": 4, // purple
        "3": 3, // blue
        "2": 2, // green
        "1": 1, // gray
    };

    const totalWeight = gear.statPool.reduce(
        (acc, curr) => (acc += curr.weightValue),
        0,
    );

    function getStat(id, key) {
        const statRanges = gear.props.find((prop) => prop.PropId === id);
        return statRanges[key];
    }
</script>

<Meta
    title="{gear.name} | Tower of Fantasy Index"
    description="All about the equipment piece {gear.name}, such as its possible stats, and stat gains per upgrade."
    image={gear.icon}
/>

<article>
    <aside>
        <div class="sticky">
            <AnchorLinks />
            <div class="aside-extras grid g-100">
                <EquipLevelSlider {gear} />
                <EquipStarSlider />
            </div>
        </div>
    </aside>

    <div class="article-content">
        <Ad unit="LB-gear1" />

        <GenericHeader
            h1={gear.name}
            icon={gear.icon}
            rarity={gear.rarity}
            desc={`${gear.description}\n\nGives **${gear.expValue}** EXP towards Equipment Advancement.`}
            eleColor={gear.element}
        />

        <h2 id="stats">Stats</h2>
        <small
            >Note: Decimal values are truncated, not rounded, so 100.9 will show
            as 100.</small
        >
        <div class="grid g-50">
            <h3 id="base-stats">Base Stats</h3>
            <p>
                Base stats can be upgraded by <strong>Enhancement</strong>,
                consuming Booster and Advancement Modules to level up the item.
                Enhancements are <strong class="mint">100%</strong> transferrable
                when changing equipment.
            </p>
            <p>
                Every 5th level is a breakthrough, resulting in additional stats
                (notated as Enhancement Unlock when inspecting armor in game).
                Basic 8-piece Activation bonuses are received when your helmet,
                gloves, shoulderpiece, armbad, top, bottom, belt, and shoes all
                reach the same breakthrough level (+5, +10, +15, etc).
            </p>

            <div class="mobile-only">
                <EquipLevelSlider {gear} />
            </div>

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
            {#if gear.advancement}
                <h4>Upgrade Materials</h4>
                <UpgradeMats advancement={gear.advancement} {gear} />
            {/if}
        </div>

        <div class="grid g-50">
            <h3 id="random-stats">Random Stats</h3>
            <p>
                Random stats can be upgraded by <strong>Advancement</strong>,
                consuming other equipment as EXP to raise the stars on the item.
                Equipment of the same slot will provide increased EXP. EXP is
                transferred at a reduced rate when feeding an Advanced item into
                another item.
            </p>
            <p>
                {gear.name} comes with <strong>{numberOfRandomStats[gear.rarity]}</strong> of the
                following stats, selected randomly. Each upgrade will increase the
                stat values by their respective ranges, shown below.
            </p>

            <div class="mobile-only">
                <EquipStarSlider />
            </div>

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
                            <span class="stat-name">
                                {stat.name}
                                <small
                                    >({(
                                        (stat.weightValue / totalWeight) *
                                        100
                                    ).toFixed(2)}%)</small
                                >
                            </span>
                            <b class="stat-value">
                                {#if $equipStars[0] == 0}
                                    {getStat(stat.propName, "PropInitValue")}
                                    <small class="mint">
                                        +{getStat(
                                            stat.propName,
                                            "PropMinValue",
                                        )}~{getStat(
                                            stat.propName,
                                            "PropMaxValue",
                                        )}
                                    </small>
                                {:else}
                                    {$equipStars[0] *
                                        getStat(stat.propName, "PropMinValue") +
                                        getStat(
                                            stat.propName,
                                            "PropInitValue",
                                        )}~{$equipStars[0] *
                                        getStat(stat.propName, "PropMaxValue") +
                                        getStat(stat.propName, "PropInitValue")}
                                    <small
                                        style="color: var(--tier-s); font-weight: 600"
                                        >({$equipStars[0]}★)</small
                                    >
                                {/if}
                            </b>
                        </div>
                    </li>
                {/each}
            </ul>
            <h4>Required EXP</h4>
            <p>Coming soon</p>
        </div>
    </div>
</article>

<style lang="scss">
    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
    }

    p {
        margin-block: 0 0.5rem;
    }

    h3 {
        margin-top: 2rem;
    }

    h4 {
        margin-top: 1.5rem;
    }
</style>
