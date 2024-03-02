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
          "@context" : "https://schema.org",
          "@type" : "WebSite",
          "name" : "Tower of Fantasy Index",
          "url" : "https://toweroffantasy.info/"
        }
    </script>
</svelte:head>

<Ad unit="LB-home" />

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
    If the site has been helpful to you and you'd like to show gratitude, please
    disable adblock or consider sending a Ko-Fi!
</p>

<h2>Newest Arrivals</h2>
<ul class="entry-list">
    {#each data.newestAdditions as entry}
        <EntryItem {entry} />
    {/each}
</ul>
<small style="color: var(--text2)">Added in version {data.latestVersion}</small>

<div>
    <h2 style="font-size: var(--step-3);">Credits</h2>

    <h3>Created by</h3>
    <p>Pyrosu, Zakum</p>

    <h3>Original contents by</h3>
    <p>Pyrosu, BakuBaku, Sera Naoki</p>

    <h3>With major contributions by</h3>
    <p>
        Sova, Afrodiy, Eminentglory, TheKingOppaiDragon, FortOfFans, biellSilva
    </p>

    <h3>And special thanks to</h3>
    <p>
        HungryBunny, Cytus, realEmperor, Stitch, Abyss, tiny, Gateoo, Sky,
        ChickenJoy, Riala, TheKingOppaiDragon, Fanatique, FortOfFans,
        EminentGlory, Maygi
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
