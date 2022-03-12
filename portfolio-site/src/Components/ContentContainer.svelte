<script>
  export let title;
  let showContent = false;

  const dropdownToggle = () => {
    showContent = !showContent;
  };
</script>

<!-- content container header, e.g: ">> Projects" -->
<div on:click={dropdownToggle}>
  <h1>
    <span
      id="dropdown_icon"
      class="dropdown_icon_rt"
      style={"animation-fill-mode:" + (showContent ? "forwards" : "backwards")}
      >>></span
    >
    {title}
  </h1>
</div>

<!-- container's content -->
<div />

<style>
  div {
    margin-left: 0;
    color: var(--global_header_light);
    user-select: none;
  }

  #dropdown_icon {
    display: inline-block;
  }
  .dropdown_icon_rt {
    animation: rotate-rt 0.5s 1;
    /* animation-fill-mode: forwards; */
  }
  .dropdown_icon_lt {
    animation: rotate-lt 0.5s 1;
    animation-fill-mode: forwards;
  }

  @keyframes rotate-rt {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
</style>
