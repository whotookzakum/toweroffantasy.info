<script>
    export let group, value, name;
</script>

<input
    type="radio"
    id={`${name}-${value}`}
    {name}
    {value}
    bind:group
/>
<label for={`${name}-${value}`}>{value}</label>