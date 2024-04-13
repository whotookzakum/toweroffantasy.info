<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import UpgradeMats from "./UpgradeMats.svelte";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import { equipLevel, equipStars } from "$lib/stores";
    import EquipLevelSlider from "./EquipLevelSlider.svelte";
    import EquipStarSlider from "./EquipStarSlider.svelte";
    import ItemIcon from "$components/ItemIcon.svelte";

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

    $: baseStats = gear.baseStat.map((stat, statIndex) => {
        let statGainFromLevel = 0;

        for (let i = $equipLevel[0] - 1; i > -1; i--) {
            statGainFromLevel +=
                gear.gearUpgradeProps[Math.floor(i / 5)][statIndex];
        }

        return {
            ...stat,
            value: Math.floor(stat.propValue + statGainFromLevel),
        };
    });

    // $: console.log(baseStats)
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
                <EquipStarSlider {gear} />
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

            <div class="mobile-only">
                <EquipLevelSlider {gear} />
            </div>

            <ul class="stats g-100">
                {#each baseStats as stat}
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
                                {stat.value}
                            </b>
                        </div>
                    </li>
                {/each}
            </ul>
            {#if gear.advancement}
                <h4>Upgrade Materials</h4>
                <UpgradeMats advancement={gear.advancement} {gear} />
            {/if}

            <h4>Breakthrough</h4>
            <p>
                Every 5th level is a <strong>breakthrough</strong>, resulting in
                additional stats (called <em>Enhancement Unlock</em> when inspecting
                armor in-game). Basic 8-piece Activation bonuses are received when
                your helmet, gloves, shoulderpiece, armband, top, bottom, belt, and
                shoes all reach the same breakthrough level (+5, +10, +15, etc).
            </p>

            <div class="table-wrapper">
                <table class="bg-alternate">
                    <thead>
                        <tr>
                            <th>Enhancement</th>
                            <th>Attack</th>
                            <th>Resistance</th>
                            <th>HP</th>
                            <th>Crit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>8-pieces +5</th>
                            <td>+40</td>
                            <td>+20</td>
                            <td>+3231</td>
                            <td>+20</td>
                        </tr>
                        <tr>
                            <th>8-pieces +10</th>
                            <td>+87</td>
                            <td>+43</td>
                            <td>+6988</td>
                            <td>+43</td>
                        </tr>
                        <tr>
                            <th>8-pieces +15</th>
                            <td>+140</td>
                            <td>+70</td>
                            <td>+11277</td>
                            <td>+70</td>
                        </tr>
                        <tr>
                            <th>8-pieces +20</th>
                            <td>+202</td>
                            <td>+101</td>
                            <td>+16164</td>
                            <td>+101</td>
                        </tr>
                        <tr>
                            <th>8-pieces +25</th>
                            <td>+270</td>
                            <td>+135</td>
                            <td>+21669</td>
                            <td>+135</td>
                        </tr>
                        <tr>
                            <th>8-pieces +30</th>
                            <td>+349</td>
                            <td>+174</td>
                            <td>+27989</td>
                            <td>+174</td>
                        </tr>
                        <tr>
                            <th>8-pieces +35</th>
                            <td>+439</td>
                            <td>+219</td>
                            <td>+35153</td>
                            <td>+219</td>
                        </tr>
                        <tr>
                            <th>8-pieces +40</th>
                            <td>+541</td>
                            <td>+270</td>
                            <td>+43321</td>
                            <td>+270</td>
                        </tr>
                        <tr>
                            <th>8-pieces +45</th>
                            <td>+660</td>
                            <td>+330</td>
                            <td>+52874</td>
                            <td>+330</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="grid g-50">
            <h3 id="random-stats">Random Stats</h3>
            <p>
                Random stats can be upgraded by <strong>Advancement</strong>,
                consuming other equipment of the same type or EXP items to raise
                the stars on the item. Equipment of the same slot will provide
                increased EXP. EXP is transferred at a reduced rate when feeding
                an item that has been advanced into another item.
            </p>
            <p>
                {gear.name} comes with
                <strong>{numberOfRandomStats[gear.rarity]}</strong> of the
                following stats, selected randomly (probabilities shown below).
                Each advancement randomly selects <strong>1</strong> of the stats
                on the piece and increases it by a random value within the range
                shown below.
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
                                    {#if gear?.advancementExp?.length > 0}
                                        <small class="mint">
                                            +{getStat(
                                                stat.propName,
                                                "PropMinValue",
                                            )}~{getStat(
                                                stat.propName,
                                                "PropMaxValue",
                                            )}
                                        </small>
                                    {/if}
                                {:else}
                                    {$equipStars[0] *
                                        getStat(stat.propName, "PropMinValue") +
                                        getStat(
                                            stat.propName,
                                            "PropInitValue",
                                        )}~{$equipStars[0] *
                                        getStat(stat.propName, "PropMaxValue") +
                                        getStat(stat.propName, "PropInitValue")}
                                    {#if gear?.advancementExp?.length > 0}
                                        <small
                                            style="color: var(--tier-s); font-weight: 600"
                                            >({$equipStars[0]}★)</small
                                        >
                                    {/if}
                                {/if}
                            </b>
                        </div>
                    </li>
                {/each}
            </ul>

            {#if gear?.advancementExp?.length > 0}
                <h4>Required EXP</h4>
                <table class="bg-alternate">
                    <thead>
                        <tr>
                            <th>Stars</th>
                            <th>EXP</th>
                            <th>Total EXP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each gear.advancementExp as expValue, index}
                            <tr>
                                <td class="star">{index + 1} ★</td>
                                <td>{expValue}</td>
                                <td
                                    >{gear.advancementExp.reduce(
                                        (acc, curr, idx) => {
                                            if (idx <= index) acc += curr;
                                            return acc;
                                        },
                                        0,
                                    )}</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {/if}

            {#if gear.matList.length > 0}
                <h5>Upgrade Materials</h5>
                <p>
                    Below is a list of items that give EXP towards {gear.name}.
                    Equipment of type <strong>{gear.slotType}</strong> can also be
                    used.
                </p>
                <ul class="flex-wrap flex g-50" style="padding: 0; margin: 0">
                    {#each gear.matList as item}
                        <li class="flex">
                            <ItemIcon
                                item={{ ...item, amount: item.expValue }}
                                amount
                                imgSize="64"
                                wrapperSize="64px"
                            />
                        </li>
                    {/each}
                </ul>
            {/if}
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

    h4,
    h5 {
        margin-top: 1.5rem;
    }

    .star {
        color: var(--tier-s);
        font-weight: bold;
        font-size: var(--step-1);
    }
</style>
