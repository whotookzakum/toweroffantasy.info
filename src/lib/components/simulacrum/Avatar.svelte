<script>
    export let name, cnName;

    function getImgSrc(name) {
        switch(name) {
            case "Nemesis":
                return `avatar_${cnName}`
            case "Frigg":
                return `Avatar12`
            case "Pepper":
                return `touxiang_susan`
            case "Hilda":
                return `touxiang_hilda`
            default:
                return `touxiang_${cnName}`
        }
    }
</script>

<img
    src={`/images/Icon/Avatar/${getImgSrc(name)}.png`}
    alt={name}
    width="128"
    height="128"
/>
