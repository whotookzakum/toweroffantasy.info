<script>
    import BannerTable from "$components/BannerTable/BannerTable.svelte"
    export let data;
</script>

<BannerTable showCurrentBanners showStats banners={data.banners} />