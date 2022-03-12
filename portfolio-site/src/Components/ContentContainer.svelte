<script>
  export let title;
</script>

<div>
  <h1><span id="dropdown__icon">>></span> {title}</h1>
</div>

<style>
  div {
    margin-left: 0;
  }
  #dropdown__icon {
    display: inline-block;
  }
  #dropdown__icon:hover {
    animation: rotate-rt 0.5s 1;
    animation-fill-mode: forwards;
  }

  @keyframes rotate-rt {
    100% {
      transform: rotate(90deg);
    }
  }
</style>
