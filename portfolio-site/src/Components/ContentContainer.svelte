<script>
  import PhotoContainer from "./PhotoContainer.svelte";
  import ProjectContainer from "./ProjectContainer.svelte";
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
  <hr />
</div>

<!-- container's content -->
{#if showContent}
  <div class="content__container">
    {#if title == "Projects"}
      <ProjectContainer
        title="Lorem"
        img_src="https://i.ytimg.com/vi/5gUVDYUiFUY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB2NSjFO9LEOGYx-YKsvrInNL0LJA"
        link="https://youtu.be/5gUVDYUiFUY"
        desc="I've been doing serious photography for about a year and a half, and I still don't quite feel comfortable with calling myself a photographer."
      />
      <ProjectContainer
        title="Lorem"
        img_src="https://i.ytimg.com/an_webp/VyaNip2X38Q/mqdefault_6s.webp?du=3000&sqp=CNidsJEG&rs=AOn4CLAqioz0Iux7XHDWkjeKCJEVqEhp7w"
        link="https://www.youtube.com/watch?v=VyaNip2X38Q&t=12s"
        desc="dolor"
      />
      <ProjectContainer
        title="Lorem"
        img_src="https://i.ytimg.com/an_webp/VyaNip2X38Q/mqdefault_6s.webp?du=3000&sqp=CNidsJEG&rs=AOn4CLAqioz0Iux7XHDWkjeKCJEVqEhp7w"
        link="https://www.youtube.com/watch?v=VyaNip2X38Q&t=12s"
        desc="dolor"
      />
    {/if}
    <!-- end project containers -->
    {#if title == "Photos"}
      {#each $photos as photo}
        <PhotoContainer img_src={photo[0]} link={photo[1]} />
      {/each}
    {/if}
  </div>
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
      align-items: center;
    }
  }

  .content__container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1%;
    border: 1px solid green;
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
