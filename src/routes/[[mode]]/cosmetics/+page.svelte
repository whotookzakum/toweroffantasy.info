<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    console.log(data)
</script>

<Meta
    title="Cosmetics | Tower of Fantasy Index"
    description="Cosmetic items allow you customize the appearance of your character and other social features. Many cosmetics require you to spend real money, but some can be acquired for free. Cosmetic gachapon items may have reruns."
/>

<Ad unit="LB-cosmetics" />

<h1>Cosmetics</h1>
<p>
    Cosmetic items allow you customize the appearance of your character and
    other social features. They are typically acquired by spending Dark Crystals
    or Tanium. Cosmetic gachapon items may have reruns.
</p>

<ul class="entry-list">
    {#each data.cosmetics as entry (entry.id + entry.icon)}
        <EntryItem entry={{...entry, rarity: null}} />
    {/each}
</ul>
