<script>
    import links from "./links.json"
</script>

<nav class="flex g-50">
    {#each links as {href, name}}
        <a {href}>{name}</a>
    {/each}
</nav>

<style lang="scss">
    nav {
        
    }

    a {
        border: none;
    }
</style>