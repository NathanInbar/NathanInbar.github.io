<script>
    import { fade } from "svelte/transition";
    export let img_src;
    export let link
    export let desc;
    export let orientation

  </script>
  
  <div class="thumbnail" transition:fade>
    <a href="https://imgur.com/gallery/{link}" target="_blank"><img src="{img_src}" alt="" /></a>
    <h4>{desc}</h4>
  </div>
  
  <style>
    .thumbnail {
      overflow: hidden;
    }

    h4 {
        margin-top: 0;
        text-align: center;
    }
  </style>
    {#if orientation == "portrait"}
        <style>
            .thumbnail img {
                max-height: 600px;
                max-width: 300px;
                object-fit: cover;
                }
        </style>
    {/if}
    {#if orientation == "landscape"}
        <style>
            .thumbnail img {
                max-height: 300px;
                max-width: 600px;
                object-fit: cover;
                }
        </style>

    {/if}