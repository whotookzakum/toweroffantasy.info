<script>
    import { queryParam } from 'sveltekit-search-params';
    const q = queryParam('q');
</script>

<input
    type="text"
    placeholder="Search"
    bind:value={$q}
/>
