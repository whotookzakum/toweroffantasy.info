<script>
    export let group, value, name;
</script>

<input
    class="visually-hidden"
    type="radio"
    id={`${name}-${value}`}
    {name}
    {value}
    bind:group
/>
<label for={`${name}-${value}`}>{value}</label>
