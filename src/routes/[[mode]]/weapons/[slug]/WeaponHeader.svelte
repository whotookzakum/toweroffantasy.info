<script>
    import SvelteMarkdown from "svelte-markdown";
    import { weaponLevel, weaponStars } from "$lib/stores";
    import Tier from "$components/EntryItem/Tier.svelte";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import categoriesText from "$components/EntryItem/CategoriesText.json";

    export let weapon;

    $: charge =
        weapon.weaponAdvancements[$weaponStars - 1]?.charge || weapon.charge;
    $: shatter =
        weapon.weaponAdvancements[$weaponStars - 1]?.shatter || weapon.shatter;

    // (baseValue + weaponLevel * upgradePropValue) * advancementCoefficient
    let advancementCoefficients;

    $: {
        advancementCoefficients = weapon.weaponAdvancements.reduce(
            (acc, advancement, index) => {
                // Coefficients in the current advancement (1-6)
                const currentCoefficients = {};
                advancement.multiplier.forEach(({ statId, coefficient }) => {
                    currentCoefficients[statId] = coefficient;
                });

                // Add the 0-star advancement which is not in the api
                if (index === 0) {
                    const zeroStarCoefficients = {};
                    advancement.multiplier.forEach(({ statId }) => {
                        zeroStarCoefficients[statId] = 1;
                    });
                    acc["0"] = zeroStarCoefficients;
                }

                acc[index + 1] = currentCoefficients;
                return acc;
            },
            {},
        );
    }
</script>

<h1>{weapon.name}</h1>

<div class="grid g-100">
    <div
        class="flex flex-wrap g-100 box"
        style="align-items: center; justify-content: center"
    >
        <div
            class="wep-img-wrapper flex"
            style="--ele-color: var(--element-{weapon.element});"
        >
            <img
                src={weapon.assets.icon}
                alt=""
                width="128"
                height="128"
                class="wep-img"
            />
        </div>
        <div style="flex: 1; min-width: 35ch">
            <p style="margin: 0">{weapon.description}</p>
        </div>
        <!-- <SvelteMarkdown source={weapon.elementEffect?.description} /> -->
    </div>
    <ul class="stats g-100">
        <li class="stat box">
            <CategoryIcon type={weapon.element} />
            <div class="stat-text">
                <span class="stat-name">Element</span>
                <b class="stat-value">{categoriesText[weapon.element]}</b>
            </div>
        </li>
        <li class="stat box">
            <CategoryIcon type={weapon.category} />
            <div class="stat-text">
                <span class="stat-name">Type</span>
                <b class="stat-value"
                    >{categoriesText[weapon.category].replace(" Type", "")}</b
                >
            </div>
        </li>
        <li class="stat box">
            <Tier
                tier={shatter.tier}
                style="font-size: var(--step-2); width: 40px;"
            />
            <div class="stat-text">
                <span class="stat-name">Shatter</span>
                <b class="stat-value">{shatter.value.toFixed(2)}</b>
            </div>
        </li>
        <li class="stat box">
            <Tier
                tier={charge.tier}
                style="font-size: var(--step-2); width: 40px;"
            />
            <div class="stat-text">
                <span class="stat-name">Charge</span>
                <b class="stat-value">{charge.value.toFixed(2)}</b>
            </div>
        </li>
        {#each weapon.weaponStats as stat}
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
                        {Math.floor(
                            ($weaponLevel * stat.upgradeProp + stat.value) *
                                advancementCoefficients[$weaponStars][stat.id],
                        )}
                    </b>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .stats {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
    }

    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        line-height: 1.2;
        flex: 1;
        flex-basis: 22%;
        white-space: nowrap;

        .stat-text {
            display: grid;
        }

        .stat-name {
            color: var(--text2);
            font-size: var(--step--2);
        }

        .stat-value {
            text-transform: uppercase;
        }
    }

    .invert {
        filter: brightness(0) invert(1);
        filter: brightness(4);
    }

    .wep-img-wrapper {
        position: relative;

        &::before {
            content: "";
            border-radius: 50%;
            position: absolute;
            inset: 0;
            border: 4px solid transparent;
            z-index: 1;
            transform: rotate(-55deg);
            transform-origin: center;
            transition: all 0.4s ease;
        }

        &:hover::before {
            border-top: 4px solid var(--ele-color);
            transform: rotate(90deg); // 270deg
        }
    }

    

    .wep-img {
        background: hsl(226, 45%, 12%);
        border: 4px solid var(--surface3);
        box-shadow: 0 2px 4px var(--bg);
        border-radius: 50%;
        padding: 0.5rem;
        place-content: center;
        box-sizing: content-box;
    }
</style>
