<script>
    import { weaponLevel, weaponStars } from "$lib/stores";
    import Tier from "$components/EntryItem/Tier.svelte";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import categoriesText from "$components/EntryItem/CategoriesText.json"

    export let weapon;

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
                    const zeroStarCoefficients = {}
                    advancement.multiplier.forEach(({ statId }) => {
                        zeroStarCoefficients[statId] =  1;
                    });
                    acc["0"] = zeroStarCoefficients
                }

                acc[index + 1] = currentCoefficients;
                return acc;
            },
            {},
        );
    }
</script>

<div class="flex g-100" style="justify-content: space-between;">
    <div class="flex box g-100" style="align-items: start">
        <img
            src={weapon.assets.icon}
            alt=""
            width="200"
            height="200"
            style="align-self: center"
        />
        <ul class="stats">
            <li class="stat">
                <CategoryIcon type={weapon.element} />
                <div class="stat-text">
                    <span class="stat-name">Element</span>
                    <b class="stat-value">{categoriesText[weapon.element]}</b>
                </div>
            </li>
            <li class="stat">
                <CategoryIcon type={weapon.category} />
                <div class="stat-text">
                    <span class="stat-name">Type</span>
                    <b class="stat-value">{categoriesText[weapon.category].replace(" Type", "")}</b>
                </div>
            </li>
            {#if $weaponStars > 0}
                <li class="stat">
                    <Tier
                        tier={weapon.weaponAdvancements[$weaponStars - 1]
                            .shatter.tier}
                        style="font-size: var(--step-2); width: 40px;"
                    />
                    <div class="stat-text">
                        <span class="stat-name">Shatter</span>
                        <b class="stat-value"
                            >{weapon.weaponAdvancements[
                                $weaponStars - 1
                            ].shatter.value.toFixed(2)}</b
                        >
                    </div>
                </li>
                <li class="stat">
                    <Tier
                        tier={weapon.weaponAdvancements[$weaponStars - 1].charge
                            .tier}
                        style="font-size: var(--step-2); width: 40px;"
                    />
                    <div class="stat-text">
                        <span class="stat-name">Charge</span>
                        <b class="stat-value"
                            >{weapon.weaponAdvancements[
                                $weaponStars - 1
                            ].charge.value.toFixed(2)}</b
                        >
                    </div>
                </li>
            {:else}
                <li class="stat">
                    <Tier
                        tier={weapon.shatter.tier}
                        style="font-size: var(--step-2); width: 40px;"
                    />
                    <div class="stat-text">
                        <span class="stat-name">Shatter</span>
                        <b class="stat-value"
                            >{weapon.shatter.value.toFixed(2)}</b
                        >
                    </div>
                </li>
                <li class="stat">
                    <Tier
                        tier={weapon.charge.tier}
                        style="font-size: var(--step-2); width: 40px;"
                    />
                    <div class="stat-text">
                        <span class="stat-name">Charge</span>
                        <b class="stat-value"
                            >{weapon.charge.value.toFixed(2)}</b
                        >
                    </div>
                </li>
            {/if}
        </ul>

        <ul class="stats">
            {#each weapon.weaponStats as stat}
                <li class="stat col-2">
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
                            {Math.floor(($weaponLevel * stat.upgradeProp + stat.value) * advancementCoefficients[$weaponStars][stat.id])}
                        </b>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
    .stats {
        display: grid;
        // grid-template-columns: 12ch 12ch;
        width: fit-content;
        padding: 0;
        margin: 0;
    }

    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        line-height: 1.2;

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
        // filter: brightness(0) invert(1);
        filter: brightness(4);
    }
</style>
