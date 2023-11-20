<script>
     export let type, width;

     function getImgSrc(type) {
          switch (type) {
               // Weapon Type
               case "dps":
                    return "icon_qianggong";
               case "defense":
                    return "icon_fangyu";
               case "support":
                    return "icon_zengyi";

               // Weapon Element
               case "flame":
                    return "icon_element_huo";
               case "flame-physical":
                    return "icon_element_huowu";
               case "ice":
                    return "icon_element_bing";
               case "ice-volt":
                    return "icon_element_binglei";
               case "volt":
                    return "icon_element_lei";
               case "volt-ice":
                    return "icon_element_leibing";
               case "physical":
                    return "icon_element_wu";
               case "physical-flame":
                    return "icon_element_wuhuo"
               case "physical-flame-global":
                    return "icon_element_wuhuo"
               case "altered":
                    return "icon_element_powers";
          }
     }
</script>

<img
     src={`/images/UI/wuqi/${getImgSrc(type)}.webp`}
     alt={type}
     width="60"
     height="54"
     style={`width: ${width}px`}
     loading="lazy"
/>

<style lang="scss">
     img {
          width: 40px;
          height: auto;
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
     }
</style>
