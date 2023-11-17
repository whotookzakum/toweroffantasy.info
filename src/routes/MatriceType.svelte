<script>
    import EntryItemRarity from "./EntryItemRarity.svelte";

    export let entry;
</script>

<img
    class="avatar"
    src="https://api.toweroffantasy.info{entry.assets.icon}?format=webp"
    alt=""
    width="256"
    height="256"
/>
<EntryItemRarity rarity={entry.rarity} />
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Cafe/UI_CB_SE_02.png" alt=""> -->
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/shizhuang/nitai/beiying_meilier.png" alt=""> -->
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/MainForm/jingdwc_kapaidi_zi.png" alt=""> -->
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/MainForm/jingdwc_kapaidi_hei.png" alt=""> -->
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/MainForm/jingdwc_kapaidi_cheng.png" alt=""> -->

<img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.png" alt="">
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshiyou.png" alt=""> -->
<!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/Card/jingdwc_kapaixq_zhuangshi03.png" alt=""> -->



<style lang="scss">
    .avatar {
        // width: 196px !important;
        // height: 196px !important;
        // object-position: 50% -12px !important;
        object-position: -30px -40px !important;
        width: 256px !important;

        // object-position: -60px -45px !important;
        // width: 280px !important;
    }
    
    .bg {
        position: absolute;
        // height: 100%;
        width: 120%;
        inset: -15px;
        object-position: 50%;
        opacity: 0.3;
    }
</style>