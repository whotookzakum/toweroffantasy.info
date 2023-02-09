<script>
    export let weapon;
    import RangeSlider from "svelte-range-slider-pips";
    import WeaponMaterial from "$lib/components/simulacrum/WeaponMaterial.svelte";
    import Item from "../Item.svelte";

    $: values = [0, 170];

    const materials = {
        global: {
            SSR: [
                {
                    wepLevelMin: 0,
                    wepLevelMax: 10,
                    goldAndExpCost: 400,
                    augmentMatCount: [],
                    augmentGoldCost: 0,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 10,
                    wepLevelMax: 20,
                    goldAndExpCost: 600,
                    augmentMatCount: [2],
                    augmentGoldCost: 400,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 20,
                    wepLevelMax: 30,
                    goldAndExpCost: 900,
                    augmentMatCount: [2],
                    augmentGoldCost: 800,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 30,
                    wepLevelMax: 40,
                    goldAndExpCost: 1200,
                    augmentMatCount: [3, 3],
                    augmentGoldCost: 1200,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 40,
                    wepLevelMax: 50,
                    goldAndExpCost: 1700,
                    augmentMatCount: [3, 3, 3],
                    augmentGoldCost: 1600,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 50,
                    wepLevelMax: 60,
                    goldAndExpCost: 2200,
                    augmentMatCount: [4, 4, 4],
                    augmentGoldCost: 2000,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 60,
                    wepLevelMax: 70,
                    goldAndExpCost: 2900,
                    augmentMatCount: [6, 6, 6],
                    augmentGoldCost: 2400,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 70,
                    wepLevelMax: 80,
                    goldAndExpCost: 3900,
                    augmentMatCount: [8, 8, 8],
                    augmentGoldCost: 2800,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 80,
                    wepLevelMax: 90,
                    goldAndExpCost: 5000,
                    augmentMatCount: [11, 11, 11],
                    augmentGoldCost: 3200,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 90,
                    wepLevelMax: 100,
                    goldAndExpCost: 5800,
                    augmentMatCount: [5, 5, 5],
                    augmentGoldCost: 3600,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 100,
                    wepLevelMax: 110,
                    goldAndExpCost: 6400,
                    augmentMatCount: [6, 6, 6],
                    augmentGoldCost: 4000,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 110,
                    wepLevelMax: 120,
                    goldAndExpCost: 7100,
                    augmentMatCount: [8, 8, 8],
                    augmentGoldCost: 4400,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 120,
                    wepLevelMax: 130,
                    goldAndExpCost: 7600,
                    augmentMatCount: [11, 11, 11],
                    augmentGoldCost: 4800,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 130,
                    wepLevelMax: 140,
                    goldAndExpCost: 8000,
                    augmentMatCount: [15, 15, 15],
                    augmentGoldCost: 5200,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 140,
                    wepLevelMax: 150,
                    goldAndExpCost: 8500,
                    augmentMatCount: [20, 20, 20],
                    augmentGoldCost: 5600,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 150,
                    wepLevelMax: 160,
                    goldAndExpCost: 9000,
                    augmentMatCount: [5, 5, 5],
                    augmentGoldCost: 6000,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 160,
                    wepLevelMax: 170,
                    goldAndExpCost: 9600,
                    augmentMatCount: [5, 5, 5],
                    augmentGoldCost: 6400,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 170,
                    wepLevelMax: 180,
                    goldAndExpCost: 10200,
                    augmentMatCount: ["?", "?", "?"],
                    augmentGoldCost: 6800,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 180,
                    wepLevelMax: 190,
                    goldAndExpCost: 11000,
                    augmentMatCount: ["?", "?", "?"],
                    augmentGoldCost: 7200,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 190,
                    wepLevelMax: 200,
                    goldAndExpCost: 11800,
                    augmentMatCount: ["?", "?", "?"],
                    augmentGoldCost: 7600,
                    materialTier: 3,
                },
            ],
            altered: [
                {
                    wepLevelMin: 0,
                    wepLevelMax: 10,
                    goldAndExpCost: 400,
                    augmentMatCount: [],
                    augmentGoldCost: 0,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 10,
                    wepLevelMax: 20,
                    goldAndExpCost: 600,
                    augmentMatCount: [2, 2],
                    augmentGoldCost: 400,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 20,
                    wepLevelMax: 30,
                    goldAndExpCost: 900,
                    augmentMatCount: [3, 3],
                    augmentGoldCost: 800,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 30,
                    wepLevelMax: 40,
                    goldAndExpCost: 1200,
                    augmentMatCount: [4, 4],
                    augmentGoldCost: 1200,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 40,
                    wepLevelMax: 50,
                    goldAndExpCost: 1700,
                    augmentMatCount: [3, 3, 3, 3],
                    augmentGoldCost: 1600,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 50,
                    wepLevelMax: 60,
                    goldAndExpCost: 2200,
                    augmentMatCount: [4, 4, 4, 4],
                    augmentGoldCost: 2000,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 60,
                    wepLevelMax: 70,
                    goldAndExpCost: 2900,
                    augmentMatCount: [5, 5, 5, 5],
                    augmentGoldCost: 2400,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 70,
                    wepLevelMax: 80,
                    goldAndExpCost: 3900,
                    augmentMatCount: [6, 6, 6, 6],
                    augmentGoldCost: 2800,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 80,
                    wepLevelMax: 90,
                    goldAndExpCost: 5000,
                    augmentMatCount: [8, 8, 8, 8],
                    augmentGoldCost: 3200,
                    materialTier: 1,
                },
                {
                    wepLevelMin: 90,
                    wepLevelMax: 100,
                    goldAndExpCost: 5800,
                    augmentMatCount: [5, 5, 5, 5],
                    augmentGoldCost: 3600,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 100,
                    wepLevelMax: 110,
                    goldAndExpCost: 6400,
                    augmentMatCount: [6, 6, 6, 6],
                    augmentGoldCost: 4000,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 110,
                    wepLevelMax: 120,
                    goldAndExpCost: 7100,
                    augmentMatCount: [8, 8, 8, 8],
                    augmentGoldCost: 4400,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 120,
                    wepLevelMax: 130,
                    goldAndExpCost: 7600,
                    augmentMatCount: [11, 11, 11, 11],
                    augmentGoldCost: 4800,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 130,
                    wepLevelMax: 140,
                    goldAndExpCost: 8000,
                    augmentMatCount: [15, 15, 15, 15],
                    augmentGoldCost: 5200,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 140,
                    wepLevelMax: 150,
                    goldAndExpCost: 8500,
                    augmentMatCount: [20, 20, 20, 20],
                    augmentGoldCost: 5600,
                    materialTier: 2,
                },
                {
                    wepLevelMin: 150,
                    wepLevelMax: 160,
                    goldAndExpCost: 9000,
                    augmentMatCount: [4, 4, 4, 4],
                    augmentGoldCost: 6000,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 160,
                    wepLevelMax: 170,
                    goldAndExpCost: 9600,
                    augmentMatCount: [5, 5, 5, 5],
                    augmentGoldCost: 6400,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 170,
                    wepLevelMax: 180,
                    goldAndExpCost: 10200,
                    augmentMatCount: [5, 5, 5, 5],
                    augmentGoldCost: 6800,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 180,
                    wepLevelMax: 190,
                    goldAndExpCost: 11000,
                    augmentMatCount: [6, 6, 6, 6],
                    augmentGoldCost: 7200,
                    materialTier: 3,
                },
                {
                    wepLevelMin: 190,
                    wepLevelMax: 200,
                    goldAndExpCost: 11800,
                    augmentMatCount: [6, 6, 6, 6],
                    augmentGoldCost: 7600,
                    materialTier: 3,
                },
            ],
        },
        china: {
            SSR: [
                {
                    wepLevelMin: 0,
                    wepLevelMax: 10,
                    goldAndExpCost: "700",
                    augmentMatCount: [],
                    augmentGoldCost: "",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 10,
                    wepLevelMax: 20,
                    goldAndExpCost: "1100",
                    augmentMatCount: [3],
                    augmentGoldCost: "400",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 20,
                    wepLevelMax: 30,
                    goldAndExpCost: "1600",
                    augmentMatCount: [4],
                    augmentGoldCost: "800",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 30,
                    wepLevelMax: 40,
                    goldAndExpCost: "2100",
                    augmentMatCount: [4, 4],
                    augmentGoldCost: "1200",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 40,
                    wepLevelMax: 50,
                    goldAndExpCost: "2800",
                    augmentMatCount: [4, 4, 4],
                    augmentGoldCost: "1600",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 50,
                    wepLevelMax: 60,
                    goldAndExpCost: "3700",
                    augmentMatCount: [6, 6, 6],
                    augmentGoldCost: "2000",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 60,
                    wepLevelMax: 70,
                    goldAndExpCost: "4900",
                    augmentMatCount: [9, 9, 9],
                    augmentGoldCost: "2400",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 70,
                    wepLevelMax: 80,
                    goldAndExpCost: "6500",
                    augmentMatCount: [13, 13, 13],
                    augmentGoldCost: "2800",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 80,
                    wepLevelMax: 90,
                    goldAndExpCost: "8000",
                    augmentMatCount: [17, 17, 17],
                    augmentGoldCost: "3200",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 90,
                    wepLevelMax: 100,
                    goldAndExpCost: "11000",
                    augmentMatCount: [7, 7, 7],
                    augmentGoldCost: "3600",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 100,
                    wepLevelMax: 110,
                    goldAndExpCost: "12000",
                    augmentMatCount: [9, 9, 9],
                    augmentGoldCost: "4000",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 110,
                    wepLevelMax: 120,
                    goldAndExpCost: "12500",
                    augmentMatCount: [12, 12, 12],
                    augmentGoldCost: "4400",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 120,
                    wepLevelMax: 130,
                    goldAndExpCost: "13000",
                    augmentMatCount: [17, 17, 17],
                    augmentGoldCost: "4800",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 130,
                    wepLevelMax: 140,
                    goldAndExpCost: "13700",
                    augmentMatCount: [23, 23, 23],
                    augmentGoldCost: "5200",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 140,
                    wepLevelMax: 150,
                    goldAndExpCost: "14400",
                    augmentMatCount: [30, 30, 30],
                    augmentGoldCost: "5600",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 150,
                    wepLevelMax: 160,
                    goldAndExpCost: "15300",
                    augmentMatCount: [7, 7, 7],
                    augmentGoldCost: "6000",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 160,
                    wepLevelMax: 170,
                    goldAndExpCost: "16300",
                    augmentMatCount: [7, 7, 7],
                    augmentGoldCost: "6400",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 170,
                    wepLevelMax: 180,
                    goldAndExpCost: "17400",
                    augmentMatCount: [8, 8, 8],
                    augmentGoldCost: "6800",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 180,
                    wepLevelMax: 190,
                    goldAndExpCost: "18700",
                    augmentMatCount: [8, 8, 8],
                    augmentGoldCost: "7200",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 190,
                    wepLevelMax: 200,
                    goldAndExpCost: "20000",
                    augmentMatCount: [9, 9, 9],
                    augmentGoldCost: "7600",
                    materialTier: 3,
                },
            ],
            altered: [
                {
                    wepLevelMin: 0,
                    wepLevelMax: 10,
                    goldAndExpCost: "700",
                    augmentMatCount: [],
                    augmentGoldCost: "",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 10,
                    wepLevelMax: 20,
                    goldAndExpCost: "1100",
                    augmentMatCount: [3, 3],
                    augmentGoldCost: "600",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 20,
                    wepLevelMax: 30,
                    goldAndExpCost: "1600",
                    augmentMatCount: [4, 4],
                    augmentGoldCost: "1200",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 30,
                    wepLevelMax: 40,
                    goldAndExpCost: "2100",
                    augmentMatCount: [5, 5],
                    augmentGoldCost: "1800",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 40,
                    wepLevelMax: 50,
                    goldAndExpCost: "2800",
                    augmentMatCount: [5, 5, 5, 5],
                    augmentGoldCost: "2400",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 50,
                    wepLevelMax: 60,
                    goldAndExpCost: "3700",
                    augmentMatCount: [8, 8, 8, 8],
                    augmentGoldCost: "3000",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 60,
                    wepLevelMax: 70,
                    goldAndExpCost: "4900",
                    augmentMatCount: [11, 11, 11, 11],
                    augmentGoldCost: "3600",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 70,
                    wepLevelMax: 80,
                    goldAndExpCost: "6500",
                    augmentMatCount: [16, 16, 16, 16],
                    augmentGoldCost: "4200",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 80,
                    wepLevelMax: 90,
                    goldAndExpCost: "8000",
                    augmentMatCount: [21, 21, 21, 21],
                    augmentGoldCost: "4800",
                    materialTier: 1,
                },
                {
                    wepLevelMin: 90,
                    wepLevelMax: 100,
                    goldAndExpCost: "11000",
                    augmentMatCount: [9, 9, 9, 9],
                    augmentGoldCost: "5400",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 100,
                    wepLevelMax: 110,
                    goldAndExpCost: "12000",
                    augmentMatCount: [11, 11, 11, 11],
                    augmentGoldCost: "6000",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 110,
                    wepLevelMax: 120,
                    goldAndExpCost: "12500",
                    augmentMatCount: [15, 15, 15, 15],
                    augmentGoldCost: "6600",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 120,
                    wepLevelMax: 130,
                    goldAndExpCost: "13000",
                    augmentMatCount: [21, 21, 21, 21],
                    augmentGoldCost: "7200",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 130,
                    wepLevelMax: 140,
                    goldAndExpCost: "13700",
                    augmentMatCount: [29, 29, 29, 29],
                    augmentGoldCost: "7800",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 140,
                    wepLevelMax: 150,
                    goldAndExpCost: "14400",
                    augmentMatCount: [38, 38, 38, 38],
                    augmentGoldCost: "8400",
                    materialTier: 2,
                },
                {
                    wepLevelMin: 150,
                    wepLevelMax: 160,
                    goldAndExpCost: "15300",
                    augmentMatCount: [9, 9, 9, 9],
                    augmentGoldCost: "9000",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 160,
                    wepLevelMax: 170,
                    goldAndExpCost: "16300",
                    augmentMatCount: [9, 9, 9, 9],
                    augmentGoldCost: "9600",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 170,
                    wepLevelMax: 180,
                    goldAndExpCost: "17400",
                    augmentMatCount: [10, 10, 10, 10],
                    augmentGoldCost: "10200",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 180,
                    wepLevelMax: 190,
                    goldAndExpCost: "18700",
                    augmentMatCount: [10, 10, 10, 10],
                    augmentGoldCost: "10800",
                    materialTier: 3,
                },
                {
                    wepLevelMin: 190,
                    wepLevelMax: 200,
                    goldAndExpCost: "20000",
                    augmentMatCount: [11, 11, 11, 11],
                    augmentGoldCost: "11400",
                    materialTier: 3,
                },
            ],
        },
    };

    const versionMaterials =
        weapon.element === "altered"
            ? materials.global.altered
            : materials.global.SSR;

    $: matsInRange = versionMaterials.filter(
        (item) => item.wepLevelMin >= values[0] && item.wepLevelMax <= values[1]
    );
    $: totalGoldAndExpCost = matsInRange.reduce(
        (total, current) => total + current.goldAndExpCost,
        0
    );
    $: totalAugmentGoldCost = matsInRange.reduce(
        (total, current) => total + current.augmentGoldCost,
        0
    );

    $: sumOfMatsForTier = (tier) => {
        return matsInRange
            .filter((item) => item.materialTier === tier)
            .reduce((acc, cur) => {
                for (let i = 0; i < cur.augmentMatCount.length; i++) {
                    acc[i] ??= 0;
                    if (cur.augmentMatCount[i].toString().includes("?")) {
                        acc[i] = "???";
                    } else {
                        acc[i] += cur.augmentMatCount[i];
                    }
                }
                return acc;
            }, []);
    };

    // Based on length of mats, since lin has 4
    $: totalMatsInRange = weapon.materials.map((mat, index) =>
        sumOfMatsForTier(index + 1)
    );
</script>

<!-- <h4 id="upgrade-materials">
    <span>Upgrade Materials</span>
    <span>(level <strong>{values[0]}</strong> to <strong>{values[1]})</span>
</h4> -->

<h4 id="upgrade-materials">
    Upgrade Materials
    <span>
        Lv. <strong class="mint">{values[0]}</strong>
        to <strong class="mint">{values[1]}</strong>
    </span>
</h4>

<RangeSlider
    bind:values
    min={0}
    max={200}
    step={10}
    range
    float
    pips
    first="label"
    last="label"
    rest
/>

<dl class="results-wrapper">
    <div class="column">
        <dt>Augmentation</dt>
        {#if values[1] >= 20}
            <dd>
                <details>
                    <summary>Details</summary>
                    Augments enhancement cap from
                    <strong class="mint">
                        Lv. {values[0]}
                    </strong>
                    to
                    <strong class="mint">
                        Lv. {values[1]}
                    </strong>
                    and raises weapon skills to
                    <strong class="mint">Lv. {values[1] / 10}</strong>
                </details>
            </dd>
        {/if}
        <dd>
            <div class="item-grid">
                {#each totalMatsInRange as valuesInTier, tier}
                    {#each totalMatsInRange[tier] as matCount, index}
                        <WeaponMaterial
                            type={weapon.materials[index]}
                            tier={tier + 1}
                            amount={matCount}
                        />
                    {/each}
                {/each}
                {#if totalAugmentGoldCost > 0}
                    <div style="display: flex; flex-wrap: wrap">
                        <Item rarity={3} amount={totalAugmentGoldCost}>
                            <img
                                src="/images/Icon/huobi/jinbi.png"
                                alt="Gold"
                                width="64"
                                height="64"
                                loading="lazy"
                            />
                        </Item>
                    </div>
                {/if}
            </div>
        </dd>
        {#if values[1] >= 20}
            <dd>
                Req. Wanderer Level <strong class="clay">{values[1] / 2}</strong
                >
            </dd>
        {/if}
    </div>
    <div class="column">
        <dt>Enhancement</dt>
        {#if totalGoldAndExpCost}
            <dd>
                <details>
                    <summary>Details</summary>
                    Enhances weapon from
                    <strong class="mint">Lv. {values[0]}</strong>
                    to <strong class="mint">Lv. {values[1]}</strong>
                </details>
            </dd>
            <dd>
                <div class="item-grid">
                    <Item
                        rarity={3}
                        amount={totalGoldAndExpCost.toString().includes("?")
                            ? "???"
                            : totalGoldAndExpCost}
                    >
                        <img
                            src="/images/Icon/huobi/jinbi.png"
                            alt="Gold"
                            width="64"
                            height="64"
                            loading="lazy"
                        />
                    </Item>
                    <Item
                        rarity={1}
                        amount={totalGoldAndExpCost.toString().includes("?")
                            ? "???"
                            : totalGoldAndExpCost}
                    >
                        <img
                            src="/images/Icon/huobi/jingyan.png"
                            alt="EXP"
                            width="64"
                            height="64"
                            loading="lazy"
                        />
                    </Item>
                </div>
            </dd>
        {/if}
    </div>
</dl>

<div>
    <section />
</div>

<style lang="scss">
    .results-wrapper {
        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(calc(64px * 3 + 1rem), auto)
        );
        gap: var(--space-s) var(--space-xl);
        align-items: flex-start;
        justify-items: center;
    }

    .column {
        max-width: calc(64px * 3 + 1rem);
    }

    .item-grid {
        display: grid;
        grid-template-columns: repeat(3, 64px);
        gap: 0.5rem;
    }

    h4#upgrade-materials {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        margin-bottom: var(--space-2xs);

        span {
            font-size: var(--step-1);
            font-weight: normal;
            text-transform: none;
        }
    }

    details summary {
        font-size: var(--step--1);
        user-select: none;
    }

    dl div {
        gap: 0.5rem;
    }

    dt {
        color: var(--accent);
        font-size: var(--step-2);
    }

    dd {
        margin: 0;
    }
</style>
