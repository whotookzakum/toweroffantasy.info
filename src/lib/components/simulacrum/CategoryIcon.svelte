<script>
     export let type;
     export let width = "60";
     export let style = "";

     const URI_map = {
          DPS: "icon_qianggong",
          Tank: "icon_fangyu",
          SUP: "icon_zengyi",

          Flame: "icon_element_huo",
          FlamePhysics: "icon_element_huowu",

          Ice: "icon_element_bing",
          IceThunder: "icon_element_leibing",

          Thunder: "icon_element_lei",
          ThunderIce: "icon_element_binglei",

          Physics: "icon_element_wu",
          PhysicsFlame: "icon_element_wuhuo",
          OverseasZeke: "icon_element_wuhuo",

          Superpower: "icon_element_powers",
     };

     let imgSrc = URI_map[type] ?? "icon_element_null";
</script>

<img
     src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/wuqi/{imgSrc}.png"
     alt={type}
     width="60"
     height="54"
     {style}
     style:width
     loading="lazy"
/>

<style lang="scss">
     img {
          width: 40px;
          height: auto;
          filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
     }
</style>
