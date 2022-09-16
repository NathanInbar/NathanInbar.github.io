<script>
  import ContentContainer from "./Components/ContentContainer.svelte";
  import { dark_mode } from "./Components/stores.js";

  const theme_toggle_icons = ["🌑", "☀️"];
  let theme_toggle_icon = theme_toggle_icons[0];
  const toggleDarkMode = () => {
    $dark_mode = !$dark_mode;
    theme_toggle_icon = theme_toggle_icons[$dark_mode ? 1 : 0];
  };
</script>

<svelte:head>
  {#if $dark_mode}
    <style>
      body {
        background-image: url(/assets/site/constellation_dark.svg);
      }
      #content_bkg {
        background-color: rgba(28, 29, 33, 0.6);
      }
    </style>
  {:else}
    <style>
      body {
        background-image: url(/assets/site/constellation_light.svg);
      }
      #content_bkg {
        background-color: rgba(242, 242, 255, 0.6);
      }
    </style>
  {/if}
</svelte:head>

<main>
  {#if $dark_mode}
    <style>
      h1 {
        color: var(--global_header_dark);
      }
      h4 {
        color: var(--global_header_dark);
      }
      p {
        color: var(--global_header_dark);
      }
      #content__bkg {
        background-color: rgba(28, 29, 33, 0.6);
      }
    </style>
  {:else}
    <style>
      h1 {
        color: var(--global_header_light);
      }
      h4 {
        color: var(--global_header_light);
      }
      p {
        color: var(--global_header_light);
      }
      #content__bkg {
        background-color: rgba(242, 242, 255, 0.6);
      }
    </style>
  {/if}
</main>

<body>
  <span id="bkg">
    <span id="content__bkg">
      <div id="main__container">
        <h1>Nathan Inbar</h1>
        <h4>Student 📖, Computer Scientist 👨‍💻, Artist 🎨</h4>
        <p>
          Hey, I'm Nathan. I've developed and published a mobile game, 2x
          winning hackathon entry, and many other projects. <br /> 
          I enjoy tennis, rock climbing, and creating art!
        </p>
        <span id="main__links">
          <a href="https://github.com/NathanInbar" target="_blank">Github 💻</a>
          <a
            href="https://github.com/NathanInbar/NathanInbar/raw/main/Nathan_Inbar_Resume_2022.pdf"
            target="_blank"
            download>Resume (download) 📜</a
          >
          <a href="mailto:nathaninbar1@gmail.com">Email Me 📧</a>
          <div id="dark_mode_toggle" on:click={toggleDarkMode}>
            {theme_toggle_icon}{$dark_mode ? "light" : "dark"} mode
          </div>
        </span>
      </div>
      <br />

      <ContentContainer title="Coding Projects" />
      <ContentContainer title="Art" />
      <ContentContainer title="Photography" />
      <a href="#main__container">back to top</a>
    </span>
  </span>
</body>

<style>
  /* centers main container on mobile */
  @media only screen and (max-width: 620px) {
    #main__container {
      margin-right: var(--global_margin);
    }
    h1,
    h4 {
      text-align: center;
    }
    p {
      line-height: 125%;
    }
    #dark_mode_toggle {
      margin-top: 5% !important;
    }
  }

  #bkg {
    /*full background overlay currently disabled */
    width: inherit;
    height: inherit;
    position: absolute;
  }
  #content__bkg {
    /* content container background rgb(242, 242, 255, ); */
    position: absolute;
    width: 80%;
    margin-left: var(--global_margin);
  }

  #dark_mode_toggle,
  #dark_mode_toggle:hover {
    margin-top: 2%;
    color: var(--global_accent);
    cursor: pointer;
    max-width: fit-content;
  }

  #main__container {
    display: flex;
    flex-direction: column;
  }
  #main__links > a {
    margin-right: 2%;
    word-wrap: break-word;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 0;
    text-decoration: underline;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
