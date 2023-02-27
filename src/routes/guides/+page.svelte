<script>
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    export let data;

    const externalGuides = [
        {
            href: "https://docs.google.com/document/d/1gzNA6NWGcYMETEnPIKObuEr9FHfHhJZ0TO01IwOYUKI/edit?usp=sharing",
            title: "CN Registration & Daily Reward Code",
        },
        {
            href: "https://docs.google.com/spreadsheets/d/1lRhBgB7M7xqqBGdMCvmW2Bwnu1OAvasIN6ukLTgOoCo/edit#gid=0",
            title: "Bygone phantasm rewards",
        },
        {
            href: "https://docs.google.com/spreadsheets/d/1lRhBgB7M7xqqBGdMCvmW2Bwnu1OAvasIN6ukLTgOoCo/edit#gid=883187120",
            title: "Armor RNG stat ranges",
        },
        {
            href: "https://docs.google.com/spreadsheets/d/1lRhBgB7M7xqqBGdMCvmW2Bwnu1OAvasIN6ukLTgOoCo/edit#gid=1719634605",
            title: "World boss drop rates",
        },
        {
            href: "https://docs.google.com/spreadsheets/d/1lRhBgB7M7xqqBGdMCvmW2Bwnu1OAvasIN6ukLTgOoCo/edit#gid=1101144150",
            title: "Joint operation drop rates",
        },
        {
            href: "https://twitter.com/Sova_ToF/status/1562031690490560517",
            title: "Mount piece drop rates",
        },
        {
            href: "https://docs.google.com/document/d/1eZVlm-Y9Uosyx9Fqy9m8N8IfY31XF6YdQjFxCwiFcfk/edit",
            title: "Apex League Strategy Guide",
        },
    ];
</script>

<svelte:head>
    <title>Guides | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Guides for Tower of Fantasy Global and Chinese versions."
    />
    <meta property="og:title" content="Guides" />
    <meta
        property="og:description"
        content="Guides for Tower of Fantasy Global and Chinese versions."
    />
    <meta property="og:image" content={`/images/mia.png`} />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<SectionNavigation />

<h1>Guides</h1>
<p>
    Many guides have been removed for being extremely outdated. External links
    have been added to guides maintained by others. View all the old guides on
    the <a
        href="https://toweroffantasy.netlify.app/guides"
        target="_blank"
        rel="noreferrer noopener nofollow">old site</a
    >.
</p>

<blockquote>
    These guides are no longer maintained; newer guides can be found on our  <a
        href="https://discord.com/channels/670617630717116426/1020417184259919953"
        target="_blank"
        rel="noreferrer noopener nofollow">Discord</a
    >.
</blockquote>

<ul>
    {#each data.items as guide}
        <li>
            <a href={guide.path}>{guide.title}</a>
            <small
                >{new Date(guide.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}</small
            >
        </li>
    {/each}
</ul>

<h2>External guides</h2>
<ul>
    {#each externalGuides as guide}
        <li>
            <a
                href={guide.href}
                target="_blank"
                rel="noreferrer noopener nofollow">{guide.title}</a
            >
        </li>
    {/each}
</ul>

<style lang="scss">
    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        a {
            font-size: var(--step-2);
        }
    }
</style>
