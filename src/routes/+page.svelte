<script>
    import BannerTable from "$lib/components/BannerTable.svelte";
    import changelog from "$lib/data/changelog.json";
    import _ from "lodash";
    import Ad from "../lib/components/Ad.svelte";

    export let data;
    let showGlobalBanners,
        showChinaBanners = false;

    const todaysDate = new Date().getTime();

    let chinaBanners = data.cn.filter(
        (banner) => new Date(banner.start).getTime() <= todaysDate
    );
    let globalBanners = data.glob.filter(
        (banner) => new Date(banner.start).getTime() <= todaysDate
    );

    let currentGlobalBanners = []
    let currentChinaBanners = [];

    chinaBanners.forEach((banner) => {
        if (new Date(banner.end).getTime() >= todaysDate) {
            currentGlobalBanners.push(banner);
        }
    });
    globalBanners.forEach((banner) => {
        const end = new Date(banner.end).getTime();
        const start = new Date(banner.start).getTime();
        if (end >= todaysDate && todaysDate > start) {
            currentGlobalBanners.push(banner);
        }
    });



    // First sort in bannerNo order, so that uniqBy returns the OLDEST banner of that character and not a rerun (Nemesis ... Lin)
    // Then sort in place to have the newest first (Lin ... Nemesis)
    const sortedGlobalBanners = _.sortBy(globalBanners, ["bannerNo"])
    const sortedUniqueGlobalBanners = _.uniqBy(sortedGlobalBanners, "name").sort((a, b) => b.bannerNo - a.bannerNo)
    const sortedChinaBanners = _.sortBy(chinaBanners, ["bannerNo"])
    const sortedUniqueChinaBanners = _.uniqBy(sortedChinaBanners, "name").sort((a, b) => b.bannerNo - a.bannerNo)
    
    let newestBanners = { cn: [], glob: [] }
    // Add all banners that started on the same day, using recursion to avoid looping through unneccessary indices with filter or reduce
    const setNewestBanners = (list, key, index) => {
        newestBanners[key].push(list[index])
        const currentBannerStart = new Date(list[index].start).getTime()
        const nextBannerStart = new Date(list[index+1]?.start).getTime()
        if (currentBannerStart === nextBannerStart) setNewestBanners(list, key, index + 1)
    }
    setNewestBanners(sortedUniqueGlobalBanners, "glob", 0)
    setNewestBanners(sortedUniqueChinaBanners, "cn", 0)
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
    <meta property="og:image" content={`/images/mia.png`} />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Tower of Fantasy Index</h1>
<p>
    We prioritize data from the Global version of Tower of Fantasy. Content
    exclusive to the Chinese version is marked with <abbr
        title="China Exclusive"
    />. Issues can be reported on
    <a
        href="https://discord.com/channels/670617630717116426/1021126011158536272"
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
                >{showGlobalBanners || showChinaBanners
                    ? "To standard"
                    : "Added to standard"}
            </th>
        </thead>
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (showGlobalBanners = !showGlobalBanners)}
                on:keydown={(e) =>
                    e.key === "Enter"
                        ? (showGlobalBanners = !showGlobalBanners)
                        : null}
                tabindex={0}
            >
                <th>Global</th>
                <td colspan="2" class="current-banners">
                    {#each currentGlobalBanners as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td>{globalBanners.length}</td>
                <td>{_.uniqBy(globalBanners, "name").length}</td>
                <td class="newest-banners">
                    {#each newestBanners.glob as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td
                    >{globalBanners.filter(
                        (banner) => banner.standardAfterwards
                    ).length}</td
                >
            </tr>
        </tbody>
        <BannerTable
            banners={globalBanners}
            version="glob"
            expanded={showGlobalBanners}
        />
        <tbody>
            <tr
                class="outer-tr"
                on:click={() => (showChinaBanners = !showChinaBanners)}
                on:keydown={(e) =>
                    e.key === "Enter"
                        ? (showChinaBanners = !showChinaBanners)
                        : null}
                tabindex={0}
            >
                <th>China</th>
                <td colspan="2" class="current-banners">
                    {#each currentChinaBanners as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td>{chinaBanners.length}</td>
                <td>{_.uniqBy(chinaBanners, "name").length}</td>
                <td class="newest-banners">
                    {#each newestBanners.cn as banner}
                        <a
                            href={banner.path}
                            style={`color: var(--element-${banner.element})`}
                            >{banner.name}</a
                        >
                    {/each}
                </td>
                <td
                    >{chinaBanners.filter((banner) => banner.standardAfterwards)
                        .length}</td
                >
            </tr>
        </tbody>
        <BannerTable
            banners={chinaBanners}
            version="cn"
            expanded={showChinaBanners}
        />
    </table>
</div>

<h3>Credits</h3>
<footer>
    <h4>Created by</h4>
    <span>Pyrosu, Zakum</span>

    <h4>Original contents by</h4>
    <span>Pyrosu, BakuBaku, Sera Naoki</span>

    <h4>Special thanks</h4>
    <span
        >Sova, Afrodiy, HungryBunny, Cytus, realEmperor, Stitch, Abyss, tiny,
        Gateoo, Sky, ChickenJoy, Riala, 👑킹젖가슴드래곤👑, Fanatique</span
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
