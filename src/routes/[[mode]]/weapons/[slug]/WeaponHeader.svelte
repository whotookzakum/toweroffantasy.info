<script>
    import SvelteMarkdown from "svelte-markdown";
    import { weaponLevel, weaponStars } from "$lib/stores";
    import Tier from "$components/EntryItem/Tier.svelte";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import categoriesText from "$components/EntryItem/CategoriesText.json";
    import GenericHeader from "../../../../lib/components/GenericHeader.svelte";

    export let weapon;

    $: charge =
        weapon.weaponAdvancements[$weaponStars - 1]?.charge || weapon.charge;
    $: shatter =
        weapon.weaponAdvancements[$weaponStars - 1]?.shatter || weapon.shatter;

    // (baseValue + weaponLevel * upgradePropValue) * advancementCoefficient
    $: advancementCoefficients = weapon.weaponAdvancements.reduce(
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
</script>

<div class="grid g-100">
    <GenericHeader
        h1={weapon.name}
        h1id="stats"
        icon={weapon.assets.icon}
        desc={weapon.description}
        eleColor={weapon.element}
        rarity={weapon.rarity}
        alternateIcons={weapon.fashion.map((obj) => obj.icon)}
        imgStyle="transform: scale(1.3)"
    />
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
                        {#if advancementCoefficients[$weaponStars]}
                            {Math.floor(($weaponLevel * stat.upgradeProp + stat.value) * advancementCoefficients[$weaponStars][stat.id])}
                        {:else}
                            {Math.floor(($weaponLevel * stat.upgradeProp + stat.value))}
                        {/if}
                    </b>
                </div>
            </li>
        {/each}
    </ul>
</div>
