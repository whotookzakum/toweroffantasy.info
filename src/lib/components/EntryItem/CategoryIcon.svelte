<script>
     import Popper from "$components/Popper/Popper.svelte";

     export let type;
     export let width = "60";
     export let style = "";
     export let tooltip = false;

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

          Superpower: "icon_element_powers",
     };

     let imgSrc = URI_map[type] ?? "icon_element_null";

     const text = {
          DPS: "Damage Type",
          Tank: "Tank Type",
          SUP: "Support Type",
          FlamePhysics: "Flame-Physical",
          ThunderIce: "Ice-Thunder",
          IceThunder: "Thunder-Ice",
          PhysicsFlame: "Physical-Flame",
          Superpower: "Altered",
     };
</script>

{#if tooltip}
     <Popper>
          <img
               class="flex"
               src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/wuqi/{imgSrc}.png"
               alt={type}
               width="60"
               height="54"
               {style}
               style:width
               loading="lazy"
          />
          <span slot="tooltip">{text[type] || type}</span>
     </Popper>
{:else}
     <img
          src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/wuqi/{imgSrc}.png"
          alt={type}
          width="60"
          height="54"
          {style}
          style:width
          loading="lazy"
     />
{/if}

<style lang="scss">
     img {
          width: 40px;
          height: auto;
          filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
     }
</style>
