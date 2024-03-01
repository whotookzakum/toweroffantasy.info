<script>
    import Meta from "$components/Meta.svelte";
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import TypeSelector from "$lib/components/Filters/TypeSelector.svelte";
    import RadioSliderGroup from "$lib/components/RadioSliderGroup.svelte";
    import { outfitsGender } from "$lib/stores";

    export let data;
    let q = ""
    let type = "all"

    $: entries = data.outfits
        .filter((entry) => {
            const searchMatch = q
                ? entry.name?.toLowerCase().includes(q.toLowerCase())
                : true;
            const typeMatch =
                type && type !== "all" ? entry.type === type : true;

            return searchMatch && typeMatch;
        })
        // Replace missing icons with N/A icon
        .map((item) => {
            const blankIcon =
                "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/UI/makeup/kong.webp";
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

<h1>Cosmetics</h1>
<p>
    Cosmetic items allow you customize the appearance of your character and
    other social features. They are typically acquired by spending Dark Crystals
    or Tanium. Cosmetic gachapon items may have reruns.
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
    <TypeSelector originalData={data.outfits} bind:type />
</div>

<ul class="entry-list">
    {#each entries as entry (entry.id + entry.icon)}
        <EntryItem {entry} />
    {/each}
</ul>
