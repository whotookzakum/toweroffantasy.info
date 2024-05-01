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

<details
    open
    class="box warning-box"
    style="max-width: calc(65ch + 2rem); margin-top: 1rem;"
>
    <summary style="font-weight: bold; color: red"> Aida Cafe Warning </summary>
    <p style="margin-block: 0.5rem 0">
        <b>The Aida Cafe discord server is no more.</b> The new server owner has
        went rogue and demoted/banned former mods and the previous server owner.
        We are unsure what new direction they have planned for the server, but
        for your safety, it's advised to leave the server. If you wish to remain
        a part of the community, consider joining
        <a
            href="https://discord.gg/SG7h8qRzyr"
            target="_blank"
            rel="noopener nofollow noreferrer">Afrodiy's Server</a
        >.
    </p>
</details>

<div class="box" style="margin-top: 1rem; width: fit-content">
    <h1>Tower of Fantasy Index</h1>

    <p>
        Online resource for Tower of Fantasy Global and Chinese versions.<br />
        Feedback can be sent on Discord to
        <a
            style="color: var(--accent)"
            href="https://discordapp.com/users/134492795133100033 "
            target="_blank"
            rel="noreferrer nofollow noopener">.zakum</a
        >.
    </p>

    <p>
        <b>CN support is limited to the following pages</b>, and only available
        in Chinese: <a href="/cn/simulacra">Simulacra</a>,
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

<details class="box" style="max-width: calc(65ch + 2rem); margin-top: 1rem;">
    <summary style="font-weight: bold; color: var(--accent)">
        About delays in updating the site
    </summary>
    <p style="margin-block: 0.5rem 0">
        With recent patches, the game seems to partially receive static data
        from the game servers. In other words, sometimes the data required to
        update this site is not available in the game client until the
        <i>next</i> update. Unfortunately, when this happens (such as Rei release
        during the Evangelion collab), we won't be able to update the site for that
        patch. The next patch usually seems to fix this, though this is not guaranteed,
        and thus website updates are not guaranteed.
    </p>
</details>

<h2>Newest Arrivals</h2>
<ul class="entry-list">
    {#each data.newestAdditions as entry}
        <EntryItem {entry} />
    {/each}
</ul>
<small style="color: var(--text2);">Added in version {data.latestVersion}</small
>

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

    .warning-box {
        background: rgb(41, 7, 7);
        border: 2px solid red;

        strong {
            color: red;
            font-size: var(--step-1);
        }

        p {
            margin-bottom: 0;
        }

        ::marker {
            color: red;
        }
    }
</style>
