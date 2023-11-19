<script>
    import EntryItemRarity from "./EntryItemRarity.svelte";

    export let entry;
</script>

<img
    class="avatar"
    src="https://api.toweroffantasy.info{entry.assets.iconLarge}?format=webp"
    alt=""
    width="256"
    height="256"
/>
<EntryItemRarity rarity={entry.rarity} />

<img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.png" alt="">
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshiyou.png" alt=""> -->
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/Card/jingdwc_kapaixq_zhuangshi03.png" alt=""> -->



<style lang="scss">
    .avatar {
        object-position: -30px -40px !important;
        width: 256px !important;
    }
    
    .bg {
        position: absolute;
        width: 120%;
        inset: -15px;
        object-position: 50%;
        opacity: 0.3;
    }
</style>