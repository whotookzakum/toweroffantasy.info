<script>
    import SetItems from "$components/SetItems.svelte";

    export let data
    console.log(data)
    const { simulacrum_v2, weapon, matrix } = data
</script>

<SetItems {simulacrum_v2} {weapon} {matrix} />