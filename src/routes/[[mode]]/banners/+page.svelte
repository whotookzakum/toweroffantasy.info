<script>
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import Meta from "$components/Meta.svelte";
    import Tag from "$components/Tag.svelte";
    import Ad from "$components/Ad/Ad.svelte";

    export let data;

    const newestBanner = data.banners.filter((banner) => banner.totalBanners === 1)[0]
</script>

<Meta
    title="Banners | Tower of Fantasy Index"
    description="Banners in Tower of Fantasy refer to Limited-Cache events, where players can spend special tokens and Dark Crystals to get limited-time simulacra, weapons, and matrices. This page is a list of all the current and past banners."
    image={newestBanner.simulacrum.assetsA0.avatar}
/>

<Ad unit="LB-banners" />

<h1>Banners</h1>
<p>
    Banners in Tower of Fantasy refer to Limited-Cache events, where players can
    spend special tokens and Dark Crystals to get limited-time simulacra,
    weapons, and matrices. Below is a list of all the current and past banners.
</p>
<p>
    Items marked with <Tag type="final" /> will be added to the Standard Cache a
    while after their final banner ends. Items marked with <Tag
        type="limited"
    /> will not be added to the Standard Cache.
</p>

<BannerTable showCurrentBanners showStats banners={data.banners} />
