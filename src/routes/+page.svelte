<script>
    import BannerTable from "$lib/components/BannerTable.svelte";
    import changelog from "$lib/data/changelog.json";
    import _ from "lodash";
    import Ad from "../lib/components/Ad.svelte";

    export let data;

    const todaysDate = new Date().getTime();
    
    let global = {
        all: data.glob.filter((banner) => new Date(banner.start).getTime() <= todaysDate),
        current: [],
        newest: [],
        expanded: false
    }

    global.current = global.all.filter((banner) => new Date(banner.end).getTime() >= todaysDate);

    // Sort by bannerNo, so uniqBy returns the original banner and not a rerun (Claudia #3 instead of Claudia #11)
    const sortedGlobalBanners = _.sortBy(global.all, ["bannerNo"]);
    // Get objects with unique names (first instance is kept) then sort in place to have the newest banners first
    const sortedUniqueGlobalBanners = 
        _.uniqBy(sortedGlobalBanners, "name")
        .sort((a, b) => b.bannerNo - a.bannerNo);

    // Start date strings MUST match in .jsons, otherwise use Date().getTime() to ensure conversion
    global.newest = sortedUniqueGlobalBanners.filter((banner) => banner.start === sortedUniqueGlobalBanners[0].start);

    let china = {
        all: data.cn.filter((banner) => new Date(banner.start).getTime() <= todaysDate),
        current: [],
        newest: [],
        expanded: false
    }

    china.current = china.all.filter((banner) => new Date(banner.end).getTime() >= todaysDate)

    const sortedChinaBanners = _.sortBy(china.all, ["bannerNo"]);
    const sortedUniqueChinaBanners = 
        _.uniqBy(sortedChinaBanners, "name")
        .sort((a, b) => b.bannerNo - a.bannerNo);
    china.newest = sortedUniqueChinaBanners.filter((banner) => banner.start === sortedUniqueChinaBanners[0].start)
</script>

<svelte:head>
    <title>Home | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
    />
    <meta property="og:title" content="Home" />
    <meta
        property="og:description"
        content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
    />
    <meta property="og:image" content={`/images/mia.webp`} />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Tower of Fantasy Index</h1>
<p>
    We prioritize data from the Global version of Tower of Fantasy. Content
    exclusive to the Chinese version is marked with <abbr
        title="China Exclusive"
    />. Issues can be reported on
    <a
        href="https://discord.com/channels/670617630717116426/1063498932749094912"
        target="_blank"
        rel="noopener noreferrer nofollow">Discord</a
    >.
</p>
<p>
    If the site has been helpful to you and you'd like to support its
    development, please disable adblock or consider sending a
    <a
        href="https://ko-fi.com/whotookzakum"
        target="_blank"
        rel="noopener noreferrer nofollow">Ko-Fi</a
    >!
</p>
<p>
    Last updated <a href="/changelog"
        >{new Date(changelog[0].date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
        })}</a
    >.
</p>

<Ad unit="lb1" />
<Ad unit="mobile_mpu1" />

<h2 id="banners">Banners</h2>
<div class="table-wrapper">
    <table class="outer-table bg-alternate">
        <caption>
            Click on a table row to show all banners for that version.
        </caption>
        <thead>
            <th>Version</th>
            <th colspan="2">Current</th>
            <th>Total</th>
            <th>Unique</th>
            <th>Newest</th>
            <th
                >{global.expanded || china.expanded
                    ? "To standard"
                    : "Added to standard"}
            </th>
        </thead>
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (global.expanded = !global.expanded)}
                on:keydown={(e) =>
                    e.key === "Enter"
                        ? (global.expanded = !global.expanded)
                        : null}
                tabindex={0}
            >
                <th>Global</th>
                <td colspan="2" class="current-banners">
                    {#each global.current as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td>{global.all.length}</td>
                <td>{sortedUniqueGlobalBanners.length}</td>
                <td class="newest-banners">
                    {#each global.newest as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td
                    >{global.all.filter((banner) => banner.standardAfterwards)
                        .length}</td
                >
            </tr>
        </tbody>
        <BannerTable
            banners={global.all}
            version="glob"
            expanded={global.expanded}
        />
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (china.expanded = !china.expanded)}
                on:keydown={(e) =>
                    e.key === "Enter"
                        ? (china.expanded = !china.expanded)
                        : null}
                tabindex={0}
            >
                <th>China</th>
                <td colspan="2" class="current-banners">
                    {#each china.current as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td>{china.all.length}</td>
                <td>{sortedUniqueChinaBanners.length}</td>
                <td class="newest-banners">
                    {#each china.newest as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td
                    >{china.all.filter((banner) => banner.standardAfterwards)
                        .length}</td
                >
            </tr>
        </tbody>
        <BannerTable
            banners={china.all}
            version="cn"
            expanded={china.expanded}
        />
    </table>
</div>

<h2>Event Codes</h2>
<small>List of the latest known working coupon codes.</small>
<ul class="horizontal-list">
    <li>tofniconico2023</li>
    <li>UA455ELX</li>
    <li>SONGKRAN2023</li>
</ul>

<h3>Credits</h3>
<footer>
    <h4>Created by</h4>
    <span>Pyrosu, Zakum</span>

    <h4>Original contents by</h4>
    <span>Pyrosu, BakuBaku, Sera Naoki</span>

    <h4>Special thanks</h4>
    <span
        >Sova, Afrodiy, HungryBunny, Cytus, realEmperor, Stitch, Abyss, tiny,
        Gateoo, Sky, ChickenJoy, Riala, 👑킹젖가슴드래곤👑, Fanatique, FortOfFans, Eminentglory, Maygi</span
    >
</footer>

<style lang="scss">
    .outer-table {
        text-align: left;

        thead th {
            color: var(--text2);
        }

        thead,
        tbody {
            background-color: var(--surface3);
        }
    }

    .newest-banners a,
    .current-banners a {
        font-size: var(--step--2);
        border: none;

        &:not(:last-of-type)::after {
            content: ", ";
            color: var(--text1);
        }
    }

    .outer-tr:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--accent);
    }

    footer {
        font-size: var(--step--2);
        line-height: 1.6;
        color: var(--text2);

        h4 {
            margin-top: 1.5rem;
            font-size: inherit;
            color: var(--accent);
        }
    }
</style>
