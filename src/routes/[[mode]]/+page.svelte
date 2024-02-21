<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";

    export let data;
</script>

<Meta
    title="Home | Tower of Fantasy Index"
    description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
/>

<h1>Tower of Fantasy Index</h1>

<p>
    We prioritize data from the Global version of Tower of Fantasy. Content
    exclusive to the Chinese version is marked with <abbr
        title="China Exclusive"
    />. Issues can be reported on Discord.
</p>

<p>
    If the site has been helpful to you and you'd like to support its
    development, please disable adblock or consider sending a Ko-Fi! Last
    updated November 3.
</p>

<h2>Newest Arrivals</h2>
<ul class="entry-list">
    <EntryItem entry={data.newest.simulacrum} />
    <EntryItem entry={data.newest.weapon} />
    <EntryItem entry={data.newest.matrix} />
</ul>

<div>
    <h2>Credits</h2>

    <h3>Created by</h3>
    <p>Pyrosu, Zakum</p>

    <h3>Original contents by</h3>
    <p>Pyrosu, BakuBaku, Sera Naoki</p>

    <h3>Data courtesy of</h3>
    <p>Eminentglory, TheKingOppaiDragon, FortOfFans, biellSilva</p>

    <h3>Special thanks</h3>
    <p>
        Sova, Afrodiy, HungryBunny, Cytus, realEmperor, Stitch, Abyss, tiny,
        Gateoo, Sky, ChickenJoy, Riala, TheKingOppaiDragon, Fanatique,
        FortOfFans, EminentGlory, Maygi
    </p>
</div>
