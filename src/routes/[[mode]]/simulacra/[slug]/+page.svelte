<script>
    import SetItems from "$components/SetItems.svelte";
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import { bgImg } from "$lib/stores";
    import SvelteMarkdown from "svelte-markdown";

    export let data;
    const { simulacrum_v2, weapon, matrix, banners } = data;
    $bgImg = simulacrum_v2.assetsA0.titlePicture;
</script>

<h1>{simulacrum_v2.name}</h1>
<SetItems {simulacrum_v2} {weapon} {matrix} />

<h2>Awakening</h2>
<table class="awakening">
    <thead>
        <tr>
            <th>Affinity</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {#each simulacrum_v2.awakening as awakening}
            <tr>
                <td
                    class="grid"
                    style="place-content: center; text-align: center"
                >
                    <img src={awakening.icon} alt="" width="82" height="82" />
                    {awakening.need}
                </td>
                <td>
                    <SvelteMarkdown source={awakening.description} />
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<h2>Profile</h2>

<ul class="flex" style="max-width: 605px;">
    <li class="box grid">
        <span>Gender</span>
        <span>{simulacrum_v2.gender}</span>    
    </li>
    <li class="box grid">
        <span>Height</span>
        <span>{simulacrum_v2.height}</span>    
    </li>
    <li class="box grid">
        <span>Birthplace</span>
        <span>{simulacrum_v2.homeTown}</span>    
    </li>
    <li class="box grid">
        <span>Horoscope</span>
        <span>???</span>    
    </li>
    <li class="box grid">
        <span>Birthday</span>
        <span>{simulacrum_v2.birthday}</span>    
    </li>
    <li class="box grid">
        <img src={simulacrum_v2.assetsA0.descPainting} alt="" width="678" height="367" style="width: 100%; height: auto;">
    </li>
</ul>

<h2>Voice Actors</h2>
<ul class="flex">
    <li class="box grid">
        <span>English</span>
        <span>{simulacrum_v2.voicing.en}</span>    
    </li>
    <li class="box grid">
        <span>Chinese</span>
        <span>{simulacrum_v2.voicing.cn}</span>    
    </li>
    <li class="box grid">
        <span>Japanese</span>
        <span>{simulacrum_v2.voicing.jp}</span>    
    </li>
    <li class="box grid">
        <span>Korean</span>
        <span>{simulacrum_v2.voicing.kr}</span>    
    </li>
    <li class="box grid">
        <span>Portuguese</span>
        <span>{simulacrum_v2.voicing.pt}</span>    
    </li>
</ul>

<h2>Banners</h2>
<BannerTable {banners} bannerSearchTerm={simulacrum_v2.name} />

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
