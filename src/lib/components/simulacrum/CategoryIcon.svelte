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
               case "ice":
                    return "icon_element_bing";
               case "volt":
                    return "icon_element_lei";
               case "physical":
                    return "icon_element_wu";
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
