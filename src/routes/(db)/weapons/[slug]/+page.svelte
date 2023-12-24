<script>
    import SvelteMarkdown from "svelte-markdown";
    import EntryItem from "../../EntryItem.svelte";
    import WeaponAttack from "./WeaponAttack.svelte";
    import { weaponLevel } from "$lib/stores";
    import Tier from "../../Tier.svelte";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import BannerTable from "../../BannerTable.svelte";
    import Youtube from "$lib/components/Youtube.svelte";
    import Rating from "$lib/components/simulacrum/Rating.svelte";
    import RarityIcon from "../../RarityIcon.svelte";
    import { bgImg } from "$lib/stores"

    export let data;
    const { weapon, simulacrum_v2, matrix } = data

    let stars = 1;
    let attackCategory = "skill";
    $bgImg = simulacrum_v2.assetsA0.titlePicture
</script>

<span>Stars: {stars}</span>
<input type="range" min="1" max="6" bind:value={stars} />

<span>Level: {$weaponLevel}</span>
<input type="range" min="0" max="200" bind:value={$weaponLevel} />

<div class="page-layout grid g-100">
    <header>
        <h1>{weapon.name}</h1>
        <p><RarityIcon rarity={weapon.rarity} /> Weapon</p>
    </header>

    <aside class="grid g-100">
        <div class="sticky-wrapper">
            <ul class="entry-list">
                <EntryItem entry={simulacrum_v2} />
                <EntryItem entry={weapon} />
                <EntryItem entry={matrix} />
            </ul>

            <div class="box grid g-25">
                <a href="#effects">Weapon Effects</a>
                <a href="#effects">Advancements</a>
                <a href="#skills">Skills</a>
                <a href="#meta">Meta</a>
                <a href="#banners">Banners</a>
            </div>
        </div>
    </aside>

    <article>
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
                            <b class="stat-value">{weapon.element}</b>
                        </div>
                    </li>
                    <li class="stat">
                        <CategoryIcon type={weapon.category} />
                        <div class="stat-text">
                            <span class="stat-name">Type</span>
                            <b class="stat-value">{weapon.category}</b>
                        </div>
                    </li>
                    <li class="stat">
                        <Tier
                            tier={weapon.weaponAdvancements[stars - 1].shatter
                                .tier}
                            style="font-size: var(--step-2); width: 40px;"
                        />
                        <div class="stat-text">
                            <span class="stat-name">Shatter</span>
                            <b class="stat-value"
                                >{weapon.weaponAdvancements[
                                    stars - 1
                                ].shatter.value.toFixed(2)}</b
                            >
                        </div>
                    </li>
                    <li class="stat">
                        <Tier
                            tier={weapon.weaponAdvancements[stars - 1].charge
                                .tier}
                            style="font-size: var(--step-2); width: 40px;"
                        />
                        <div class="stat-text">
                            <span class="stat-name">Charge</span>
                            <b class="stat-value"
                                >{weapon.weaponAdvancements[
                                    stars - 1
                                ].charge.value.toFixed(2)}</b
                            >
                        </div>
                    </li>
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
                                <b class="stat-value">{$weaponLevel}</b>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <h2 id="effects">Weapon Effects</h2>
        <span>{weapon.elementEffect.title}</span>
        <SvelteMarkdown source={weapon.elementEffect.description} />

        {#if weapon.weaponEffects}
            {#each weapon.weaponEffects as effect}
                <span>{effect.title}</span>
                <SvelteMarkdown source={effect.description} />
            {/each}
        {/if}

        {#if weapon.weaponAdvancements}
            <h2 id="advancements">Advancements</h2>
            {#each weapon.weaponAdvancements as advancement}
                <SvelteMarkdown source={advancement.description} />
            {/each}
        {/if}

        {#if weapon.weaponAttacks}
            <h2 id="skills">Skills</h2>
            <span>Level: {$weaponLevel}</span>
            <input type="range" min="0" max="200" bind:value={$weaponLevel} />
            <!-- Hide this as a hint icon popover -->
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

        <h2 id="meta">{weapon.name} Meta</h2>

        {#if weapon.meta?.analyticVideoId}
            <h3>Analysis</h3>
            <Youtube source={weapon.meta.analyticVideoId} />
        {/if}

        {#if weapon.meta?.rating}
            <h3>Combat Analysis</h3>
            <Rating {weapon} />
        {/if}

        {#if weapon.meta?.recommendedPairings}
            <h3>Recommended Pairings</h3>
            <ul class="entry-list">
                {#each weapon.meta.recommendedPairings as pairingId}
                    <!-- <WeaponQuery id={pairingId} /> -->
                {/each}
            </ul>
        {/if}

        {#if weapon.meta?.recommendedMatrices}
            <h3>Recommended Matrices</h3>
            <ul class="entry-list">
                {#each weapon.meta.recommendedMatrices as matrix}
                    <!-- <MatrixQuery id={matrix.id} /> -->
                {/each}
            </ul>
        {/if}
    </article>

    <footer>
        {#if weapon.banners?.length > 0}
            <h2 id="banners">Banners</h2>
            <BannerTable bannerSearchTerm={weapon.banners[0].simulacrumName} />
        {/if}
    </footer>
</div>

<style lang="scss">
    :global(.page-layout) {
        grid-template-columns: 70ch 1fr;
        grid-template-areas:
            "header header"
            "article aside"
            "footer footer";
        align-items: start;
        align-content: start;
        position: absolute;
        z-index: 10;
        width: 100%;
        // background: var(--bg);
    }

    header {
        grid-area: header;
    }

    footer {
        grid-area: footer;
    }

    article {
        grid-area: article;
    }

    aside {
        grid-area: aside;
        align-self: stretch;

        .sticky-wrapper {
            position: sticky;
            top: 0;
            margin-bottom: auto;
        }

        a {
            border: none;
            width: fit-content;
        }
    }

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
