<script>
    import { page } from '$app/stores';

    function getImgSrc(path) {
        if (path === "/simulacra") return "huanxing/lihui/lan"
        else if (path.includes("food")) return "Activity/ThemeActivity/huodong_meishi_guo"
    }
</script>

<img
    class="bg-img"
    src={`/images/UI/${getImgSrc($page.url.pathname)}.png`}
    alt="Background"
    width="1080"
    height="1080"
/>

<style lang="scss">
    .bg-img {
        position: fixed;
        z-index: -5;
        right: 0;
        top: 0;
        object-fit: none;
        object-position: 200px;
        transition: opacity 0.5s ease;

        &[src*="lan"] {
            object-position: 350px;
        }

        // Food
        &[src*="huodong_meishi"] {
            object-position: 0px;
            top: unset;
            bottom: 0;
            width: 372px;
            height: 342px;
        }
    }
</style>
