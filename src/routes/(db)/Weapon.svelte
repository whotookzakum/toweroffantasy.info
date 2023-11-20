<script>

    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Tier from "./Tier.svelte";
    export let entry;
</script>

<img
    class="avatar"
    src="https://api.toweroffantasy.info{entry.assets.icon}?format=webp"
    alt=""
    width="256"
    height="256"
/>

<style lang="scss">
    .avatar {
        object-position: -30px -40px !important;
        width: 256px !important;
    }
</style>
