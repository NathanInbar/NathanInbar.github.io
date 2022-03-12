<script>
  import PhotoContainer from "./PhotoContainer.svelte";
  import { photos } from "./stores.js";

  export let title;
  let showContent = true;

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
{#if showContent}
  <div class="content__container">
    {#if title == "Projects"}
      <!-- todo -->
    {/if}

    {#if title == "Photos"}
      {#each $photos as photo}
        <PhotoContainer img_src={photo[0]} link={photo[1]} />
      {/each}
    {/if}
  </div>
  {#if title == "Projects"}
    <!--  -->
  {/if}
  {#if title == "Photos"}
    <p>
      view more on <a
        href="https://imgur.com/user/nathaninbar/posts"
        target="_blank">my imgur profile</a
      >
    </p>
  {/if}
{/if}

<style>
  div {
    margin-left: 0;
    color: var(--global_header_light);
    user-select: none;
  }

  @media only screen and (max-width: 620px) {
    .content__container {
      flex-direction: column !important;
      align-items: center;
    }
  }

  .content__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1%;
    border: 1px solid red;
  }

  #dropdown_icon {
    display: inline-block;
  }
  .dropdown_icon_rt {
    animation: rotate 0.5s 1;
    /* animation-fill-mode: forwards; */
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
</style>
