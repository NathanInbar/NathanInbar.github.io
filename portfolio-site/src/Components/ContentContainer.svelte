<script>
  import ArtContainer from "./ArtContainer.svelte";
  import PhotoContainer from "./PhotoContainer.svelte";
  import ProjectContainer from "./ProjectContainer.svelte";
  import { dark_mode, photos, projects, art } from "./stores.js";

  export let title;
  let showContent = false;

  const dropdownToggle = () => {
    showContent = !showContent;
  };
</script>

<main>
  {#if $dark_mode}
    <style>
      div {
        color: var(--global_header_dark);
      }
    </style>
  {:else}
    <style>
      div {
        color: var(--global_header_light);
      }
    </style>
  {/if}
</main>

<!-- content container header, e.g: ">> Projects" -->
<div on:click={dropdownToggle}>
  <h1>
    <span id="dropdown_icon" class={showContent ? "dropdown_icon_rt" : ""}
      >>></span
    >
    {title}
  </h1>
  <hr />
</div>

<!-- container's content -->
{#if showContent}
  <div class="content__container">
    {#if title == "Coding Projects"}
      {#each $projects as project}
        <ProjectContainer
          title={project[0]}
          img_src={project[1]}
          link={project[2]}
          desc={project[3]}
        />
      {/each}
    {/if}

    {#if title == "Art"}
      {#each $art as _art}
        <ArtContainer img_src={_art[0]} link={_art[1]} desc={_art[2]} orientation={_art[3]} />
      {/each}
    {/if}

    <!-- end project containers -->
    {#if title == "Photography"}
      {#each $photos as photo}
        <PhotoContainer img_src={photo[0]} link={photo[1]} />
      {/each}
    {/if}
  </div>
  {#if title == "Coding Projects"}
    <p>
      view more on <a href="https://github.com/NathanInbar" target="_blank"
        >my github profile</a
      >
    </p>
  {/if}
  {#if title == "Photography"}
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
  }

  #dropdown_icon {
    display: inline-block;
  }
  .dropdown_icon_rt {
    animation: rotate 0.5s 1;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    100% {
      transform: rotate(90deg);
    }
  }
</style>
