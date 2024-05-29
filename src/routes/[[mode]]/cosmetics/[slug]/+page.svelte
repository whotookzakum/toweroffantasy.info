<script>
    import { outfitsGender } from "$lib/stores";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import Youtube from "$components/Youtube.svelte";
    import cosmeticVideos from "./cosmeticVideos.json";
    import SvelteMarkdown from "svelte-markdown";
    import SearchBar from "$components/Filters/SearchBar.svelte";
    import { applyFilters } from "$lib/utils";

    export let data;
    const type = data.items[0].type;
    let q = "";
    $: entries = applyFilters(data.items, { q });
</script>

<Meta
    title="{type} | Tower of Fantasy Index"
    description="All about the {type} cosmetics in Tower of Fantasy, such as how to obtain them and video previews (if available)."
    image={data.items[0].icon}
/>

<Ad unit="LB-cos1" />

<h1>{type}</h1>

<div class="filters-row">
    <SearchBar bind:q />
</div>

<!-- idk why this one single table wrapper doesnt work but im honestly over it  -->
<div class="table-wrapper" style="max-width: calc(100vw - 2rem) !important; margin-block: 1rem">
    <table class="bg-alternate">
        <thead>
            <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Video Preview</th>
            </tr>
        </thead>
        <tbody>
            {#each entries as item}
                <tr>
                    <td>
                        <div class="grid">
                            <div class="flex">
                                <img
                                    src={item.icon && item.icon !== "None.webp"
                                        ? item.icon
                                        : "/Hotta/Content/Resources/UI/makeup/kong.webp"}
                                    alt=""
                                    width="128"
                                    height="128"
                                />
                                {#if item.type === "Dress"}
                                    <img
                                        src={item.icon &&
                                        item.icon !== "None.webp"
                                            ? item.icon.replace(
                                                  /fashion_f(.+?)\.webp/,
                                                  `fashion_${$outfitsGender}$1.webp`,
                                              )
                                            : "/Hotta/Content/Resources/UI/makeup/kong.webp"}
                                        alt=""
                                        width="128"
                                        height="128"
                                    />
                                {/if}
                            </div>
                            <span>{item.name}</span>
                        </div>
                    </td>
                    <td style="min-width: 300px">
                        <SvelteMarkdown
                            source={item.description +
                                (item.source ? `\n\n***${item.source}***` : "")}
                        />
                    </td>
                    <td style="min-width: 300px">
                        {#if cosmeticVideos[item.id]}
                            <Youtube source={cosmeticVideos[item.id]} />
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
