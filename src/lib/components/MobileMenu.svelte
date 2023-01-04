<script>
  import Icon from "@iconify/svelte";
  let closed = true;

  const toggle = () => {
    closed = !closed;
    const page = document.getElementById("page-uid");
    const nav = document.getElementById("nav-uid");

    if (!closed) {
      page.style.marginLeft = "250px";
      nav.classList.add("nav-open");
      nav.classList.remove("nav-closed");
    } else {
      page.style.marginLeft = "0";
      nav.classList.add("nav-closed");
      nav.classList.remove("nav-open");
    }
  };
</script>

<button on:click={toggle} class="hamburger-button">
  <Icon icon={closed ? "mdi:hamburger-menu" : "mdi:close"} width="32" height="32" />
</button>

<style lang="scss">
  .hamburger-button {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    border: none;
    background: var(--surface2);
    box-shadow: 0 2px 4px var(--surface-shadow);
    transition: all 0.1s ease;
    width: 4rem;
    height: 4rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 100;
    color: white;
    &:hover {
      background: var(--surface3);
    }
  }
</style>
