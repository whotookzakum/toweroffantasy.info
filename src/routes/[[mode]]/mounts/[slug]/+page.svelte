<script>
    import Youtube from "$lib/components/Youtube.svelte";
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import ItemIcon from "$lib/components/ItemIcon.svelte";
    import mountVideoLinks from "./mountVideoLinks.json";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;
    const { mount } = data;
</script>

<Meta
    title="{mount.name} | Tower of Fantasy Index"
    description="All about the mount {mount.name}, such as required parts and a video preview (if available)."
    image={mount.assets.icon}
/>

<Ad unit="LB-mount1" />

<GenericHeader
    h1={mount.name}
    icon={mount.assets.icon}
    desc={mount.description}
    imgStyle="transform: scale(0.65) translateY(20px); overflow: hidden; width: 308px; height: 206px;"
/>

<h2 id="parts">Parts</h2>
<table style="margin-block: 1rem;">
    <thead>
        <tr>
            <th>Item</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {#each mount.unlockItems as part}
            <tr>
                <td style="vertical-align: top">
                    <div style="width: fit-content">
                        <ItemIcon
                            item={{
                                icon: part.item.icon,
                                name: part.item.name,
                                rarity: part.item.rarity,
                                amount: part.amount,
                            }}
                        />
                    </div>
                </td>
                <td>
                    <p>{part.item.description}</p>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

{#if mountVideoLinks[mount.id]}
    <h2 id="preview">Preview</h2>
    <Youtube source={mountVideoLinks[mount.id]} />
{/if}
