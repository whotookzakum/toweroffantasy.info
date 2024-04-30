<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
</script>

<Meta
    title="Home | Tower of Fantasy Index"
    description="Online resource for Tower of Fantasy Global and Chinese versions. Simulacra, Weapons, Matrices, and more!"
/>

<svelte:head>
    <!-- https://developers.google.com/search/docs/appearance/site-names#website -->
    <!-- https://developers.google.com/search/docs/appearance/site-names#website -->
    <!-- https://developers.google.com/search/docs/appearance/site-names#website -->
    <!-- https://developers.google.com/search/docs/appearance/site-names#website -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Tower of Fantasy Index",
            "url": "https://toweroffantasy.info/"
        }
    </script>
</svelte:head>

<Ad unit="LB-home" />

<div class="box" style="margin-top: 1rem; width: fit-content">
    <h1>Tower of Fantasy Index</h1>

    <p>
        Online resource for Tower of Fantasy Global and Chinese versions.<br />
        Feedback can be sent via
        <a
            href="https://discord.com/channels/670617630717116426/1063498932749094912"
            target="_blank"
            rel="noreferrer nofollow noopener">Discord</a
        >.
    </p>

    <p>
        <b>CN support is limited to the following pages</b>, and only available in
        Chinese: <a href="/cn/simulacra">Simulacra</a>,
        <a href="/cn/weapons">Weapons</a>,
        <a href="/cn/matrices">Matrices</a>, and
        <a href="/cn/relics">Relics</a>. Banners and versions are not supported
        so items may be out of order or have bugs.
    </p>

    <p style="margin-bottom: 0; font-weight: bold">
        If you wish to support the site, please disable adblock or consider
        sending a <a
            href="https://ko-fi.com/whotookzakum"
            target="_blank"
            rel="noreferrer noopener nofollow">Ko-Fi!</a
        >
    </p>
</div>

<h2>Newest Arrivals</h2>
<ul class="entry-list">
    {#each data.newestAdditions as entry}
        <EntryItem {entry} />
    {/each}
</ul>
<small style="color: var(--text2);">Added in version {data.latestVersion}</small>

<h2 style="font-size: var(--step-3);">Credits</h2>
<div class="box" style="margin-top: 1rem; width: fit-content">
    <h3 style="margin-top: 0">Created by</h3>
    <p>Zakum, FortOfFans, biellSilva, Eminentglory</p>

    <h3>Original contents by</h3>
    <p>Pyrosu, BakuBaku, Sera Naoki</p>

    <h3>Special thanks to</h3>
    <p style="margin-bottom: 0">
        Sova, Afrodiy, HungryBunny, Cytus, realEmperor, Stitch, Abyss, tiny,
        Gateoo, Sky, ChickenJoy, Riala, TheKingOppaiDragon, Fanatique, Maygi
    </p>
</div>

<style lang="scss">
    h3 {
        color: var(--accent);
        font-size: var(--step--2);
        text-transform: uppercase;
    }

    h3:not(:first-of-type),
    p {
        margin-top: 0;
    }
</style>
