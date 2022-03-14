<script>
  import { dark_mode } from "./stores.js";
  import { slide } from "svelte/transition";
  import App from "../App.svelte";
  export let title;
  export let img_src;
  export let desc;
  export let link;
</script>

<main>
  {#if $dark_mode}
    <style>
      #main {
        background-color: var(--global_stroke_dark);
      }
      .project__container > h2 {
        background-color: rgba(28, 29, 33, 0.85);
      }
    </style>
  {:else}
    <style>
      #main {
        background-color: #f2f2ff;
      }
      .project__container > h2 {
        background-color: rgba(242, 242, 255, 0.85);
      }
    </style>
  {/if}
</main>

<div id="main" transition:slide>
  <div>
    <a href={link} target="_blank">
      <div
        class="project__container"
        style={`background-image:url(${img_src})`}
      >
        <h2>{title}</h2>
      </div>
    </a>
    <p>{desc}</p>
  </div>
</div>

<style>
  #main {
    margin-bottom: 1%;
    align-self: left;
    /* border: 1px dashed var(--global_header_light); */
    border-radius: 2px;
  }
  a {
    color: var(--global_header_light);
  }
  h2 {
    color: #eb321a;
  }
  h2,
  p {
    padding: 1%;
    margin: 0;
  }
  p {
    text-align: center;
    font-size: 1rem;
    max-width: 400px;
  }
  .project__container {
    width: 400px;
    height: 200px;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid mar;
  }
</style>
