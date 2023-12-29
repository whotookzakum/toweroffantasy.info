<script>
    import BannerTable from "$components/BannerTable/BannerTable.svelte";
    import Meta from "$components/Meta.svelte";
    export let data;
</script>

<Meta
    title="Banners | Tower of Fantasy Index"
    description="Banners in Tower of Fantasy refer to Limited-Cache events, where players can spend special tokens and Dark Crystals to get limited-time simulacra, weapons, and matrices. This page is a list of all the current and past banners."
    image={data.banners[0].simulacrum.assetsA0.avatar}
/>

<h1>Banners</h1>
<p>
    Banners in Tower of Fantasy refer to Limited-Cache events, where players can
    spend special tokens and Dark Crystals to get limited-time simulacra,
    weapons, and matrices. Below is a list of all the current and past banners.
</p>
<p>
    Some banner items will be added to the Standard Cache a while after their
    "Final rerun" ends. Items that will not be added to Standard Cache are
    marked with "Limited-only".
</p>

<BannerTable showCurrentBanners showStats banners={data.banners} />
