<script>
    import SvelteMarkdown from "svelte-markdown";
    import avatars from "$lib/data/cosmetics/avatars.json";
    import Ad from "$lib/components/Ad/Ad.svelte";

    // After Lin: T-Pose
    // {
    //     "name": "Cold Lovin' Mi-a",
    //     "imgSrc": "../../ResourcesOverSea/Icon/Avatar/Avatar_Overseas_",
    //     "source": "From events."
    // },
    // {
    //     "name": "Tian Lang: T Pose",
    //     "imgSrc": "../../ResourcesOverSea/Icon/Avatar/Avatar_Overseas_",
    //     "source": "Obtained when purchasing the tanium pack during the sale."
    // },
    // {
    //     "name": "Lyra: T Pose",
    //     "imgSrc": "../../ResourcesOverSea/Icon/Avatar/Avatar_Overseas_",
    //     "source": "Obtained when purchasing the tanium pack during the sale."
    // },
</script>

<svelte:head>
    <title>Avatars | Tower of Fantasy Index</title>
    <meta name="description" content="List of cosmetic avatars and how to get them.">
    <meta property="og:title" content="Avatars" />
    <meta
        property="og:description"
        content="List of cosmetic avatars and how to get them."
    />
    <meta
        property="og:image"
        content={`/images/Icon/Avatar/${avatars[0].imgSrc}.webp`}
    />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Avatars</h1>
<p>
    Avatars shown on the <a href="/simulacra">Simulacra</a> page can be obtained
    by raising the respective simulacrum's Awakening points (friendship) to 200.
</p>

<Ad unit="Banner1" />

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each avatars as avatar}
                <tr>
                    <td>
                        <div class="img-and-name">
                            <img
                                src={`/images/Icon/Avatar/${avatar.imgSrc}.webp`}
                                alt={avatar.name}
                                width="128"
                                height="128"
                                loading="lazy"
                            />
                            <h2>{avatar.name}</h2>
                        </div>
                    </td>
                    <td>
                        <SvelteMarkdown source={avatar.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
