<script>
  import { fade } from "svelte/transition";
  export let img_src;
  export let link;
</script>

<div class="thumbnail" transition:fade>
  <a href={link} target="_blank"><img src={img_src} alt="" /></a>
</div>

<style>
  .thumbnail {
    overflow: hidden;
  }

  .thumbnail img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
</style>
