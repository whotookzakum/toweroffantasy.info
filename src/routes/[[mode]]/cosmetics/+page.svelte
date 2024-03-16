<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import RadioSliderGroup from "$lib/components/RadioSliderGroup.svelte";
    import { outfitsGender } from "$lib/stores";
    import { applyFilters } from "$lib/utils";
    import uniqBy from "lodash/uniqBy";
    import SelectorFilter from "$lib/components/Filters/SelectorFilter.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import cosmeticVideos from "./[slug]/cosmeticVideos.json";

    export let data;
    let q = "";
    let type = "all";
    let uniqTypes = uniqBy(data.outfits, (outfit) => outfit.type).map(
        (obj) => ({ name: obj.type, value: obj.type }),
    );

    $: entries = applyFilters(data.outfits, { q, type }).map((item) => {
        const blankIcon = "/Hotta/Content/Resources/UI/makeup/kong.webp";
        return {
            ...item,
            icon:
                item.icon === "None.webp"
                    ? blankIcon
                    : item.icon.replace(
                          /fashion_f(.+?)\.webp/,
                          `fashion_${$outfitsGender}$1.webp`,
                      ),
        };
    });
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
    or Tanium. Cosmetic gachapon items may have reruns. A television emoji (📺)
    indicates that a video preview is available.
</p>

<div class="filters-row">
    <SearchBar bind:q />
    <RadioSliderGroup
        bind:group={$outfitsGender}
        groupName="outfits-gender"
        name="outfitsGender"
        data={[
            { label: "Female", value: "f" },
            { label: "Male", value: "m" },
        ]}
    />
    <SelectorFilter dataset={uniqTypes} selectorName="Type" bind:value={type} />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id + entry.icon)}
        <EntryItem {entry} hasVideo={cosmeticVideos[entry.id]} />
    {/each}
</ul>
