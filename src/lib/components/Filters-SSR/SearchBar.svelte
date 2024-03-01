<script>
    import { queryParam, ssp } from "sveltekit-search-params";
    
    const q = queryParam("q", ssp.string(), { showDefaults: false, pushHistory: false });
    let inputValue = $q ? $q : "";

    $: if (inputValue.length === 0) {
        $q = null;
    } else {
        $q = inputValue;
    }
</script>

<input type="text" placeholder="Search" bind:value={inputValue} />
