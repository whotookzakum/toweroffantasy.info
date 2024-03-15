<script>
    import SetItems from "$components/SetItems.svelte";
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import { bgImg } from "$lib/stores";
    import SvelteMarkdown from "svelte-markdown";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const { simulacrumV2, weapon, matrix, banners } = data;
    $bgImg = simulacrumV2.assetsA0.titlePicture;
</script>

<Meta
    title="{simulacrumV2.name} | Tower of Fantasy Index"
    description="All about the simulacrum {simulacrumV2.name}, such as awakening unlocks, character profile, voice actors, and banners."
    image={simulacrumV2.assetsA0.avatar}
/>
<!-- TODO: Need to test if color works color="var(--element-{weapon.element})" -->

<article>
    <aside>
        <div class="sticky">
            <AnchorLinks {simulacrumV2} {weapon} {matrix} />
        </div>
    </aside>

    <div class="article-content">
        <Ad unit="ArticleLB-sim1" />

        <GenericHeader
            h1="{simulacrumV2.name} (Simulacrum)"
            h1id="top"
            icon={simulacrumV2.assetsA0.avatar}
            eleColor={simulacrumV2.weapon.element}
            rarity={simulacrumV2.rarity}
            imgStyle="transform: scale(1.25)"
        />
        <h2 style="font-size: var(--step-2)">Part of a set</h2>
        <SetItems {simulacrumV2} {weapon} {matrix} />
        <small style="color: var(--text2);"
            >Added in version {simulacrumV2.version}</small
        >

        <h2 id="awakening">Awakening</h2>
        <table
            class="awakening borders bg-alternate"
            style="margin-block: 1rem"
        >
            <thead>
                <tr>
                    <th>Affinity</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {#each simulacrumV2.awakening as awakening}
                    <tr>
                        <td
                            class="grid"
                            style="place-content: center; text-align: center"
                        >
                            <img
                                src={awakening.icon}
                                alt=""
                                width="82"
                                height="82"
                            />
                            {awakening.need}
                        </td>
                        <td>
                            <SvelteMarkdown source={awakening.description} />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <h3 id="gifts">Preferred Gifts</h3>
        <span>{simulacrumV2.likedGiftTypes}</span>

        <Ad unit="ArticleLB-sim2" />

        <h2 id="profile">Profile</h2>

        <ul class="flex">
            <li class="box grid" style="flex: 1">
                <span>Title</span>
                <span>{weapon.name}</span>
            </li>
            <li class="box grid" style="flex: 1">
                <span>Gender</span>
                <span>{simulacrumV2.gender}</span>
            </li>
            <li class="box grid" style="flex: 1">
                <span>Allegiance</span>
                <span>{simulacrumV2.homeTown}</span>
            </li>
            <li class="box grid" style="flex: 1">
                <span>Height</span>
                <span>{simulacrumV2.height}</span>
            </li>
            <li class="box grid" style="flex: 1">
                <span>Birthdate</span>
                <span>{simulacrumV2.birthday}</span>
            </li>
            <li class="box grid" style="flex-grow: 1;">
                <img
                    src={simulacrumV2.assetsA0.descPainting}
                    alt=""
                    width="678"
                    height="367"
                    style="width: 100%; height: auto;"
                />
            </li>
        </ul>

        <h2 id="voice-actors">Voice Actors</h2>
        <ul class="flex">
            <li class="box grid">
                <span>English</span>
                <span>{simulacrumV2.voicing.en}</span>
            </li>
            <li class="box grid">
                <span>Chinese</span>
                <span>{simulacrumV2.voicing.cn}</span>
            </li>
            <li class="box grid">
                <span>Japanese</span>
                <span>{simulacrumV2.voicing.jp}</span>
            </li>
            <li class="box grid">
                <span>Korean</span>
                <span>{simulacrumV2.voicing.kr}</span>
            </li>
            <li class="box grid">
                <span>Portuguese</span>
                <span>{simulacrumV2.voicing.pt}</span>
            </li>
        </ul>
        <h2 id="banners">Banners</h2>
    </div>
    <BannerTable
        {banners}
        bannerSearchTerm={simulacrumV2.name}
        style="grid-column: 1/-1"
    />
</article>

<style lang="scss">
    ul {
        list-style-type: none;
        padding: 0;
        flex-wrap: wrap;
    }

    li {
        line-height: 1.4;

        span:first-of-type {
            color: var(--accent);
            // text-transform: uppercase;
        }

        span:last-of-type {
            font-size: var(--step-1);
            font-weight: 600;
        }
    }

    :global(.awakening strong) {
        color: var(--text-mint);
    }
</style>
