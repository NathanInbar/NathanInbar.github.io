<script>
  import ContentContainer from "./Components/ContentContainer.svelte";
  import { dark_mode } from "./Components/stores.js";

  const theme_toggle_icons = ["🌑", "☀️"];
  let theme_toggle_icon = theme_toggle_icons[0];
  let img_src;
  const toggleDarkMode = () => {
    $dark_mode = !$dark_mode;
    theme_toggle_icon = theme_toggle_icons[$dark_mode ? 1 : 0];
    if ($dark_mode) {
      img_src = "/assets/site/constellation_dark.svg";
    } else {
      img_src = "/assets/site/constellation_light.svg";
    }
  };
</script>

<svelte:head>
  {#if $dark_mode}
    <style>
      body {
        background-image: url(/assets/site/constellation_dark.svg);
      }
    </style>
  {:else}
    <style>
      body {
        background-image: url(/assets/site/constellation_light.svg);
      }
    </style>
  {/if}
</svelte:head>

<!-- background-image: url("/assets/site/constellation_light.svg"); -->

<body style={`background-image:url(${img_src})`}>
  <span id="bkg">
    <span id="content__bkg">
      <div id="main__container">
        <h1>Nathan Inbar</h1>
        <h4>Student 👨‍🎓, Computer Scientist 👨‍💻, Photographer 📷</h4>
        <p>
          Hey, I'm Nathan. I've developed and published a mobile game, 2x
          winning hackathon entry, and many other projects. <br /> I enjoy film photography,
          tennis, rock climbing, and digital art!
        </p>
        <span id="main__links">
          <a href="https://github.com/NathanInbar" target="_blank">Github 💻</a>
          <a
            href="https://github.com/NathanInbar/NathanInbar/raw/main/Nathan_Inbar_Resume_2022.pdf"
            target="_blank"
            download>Resume (download) 📜</a
          >
          <a href="mailto:nathaninbar1@gmail.com">Email Me 📧</a>
        </span>
      </div>
      <br />

      <ContentContainer title="Projects" />
      <ContentContainer title="Photos" />
      <a href="#main__container">back to top</a>
      <div on:click={toggleDarkMode}>{theme_toggle_icon} {$dark_mode}</div>
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
  }

  #bkg {
    /*full background overlay currently disabled */
    /* background-color: rgb(45, 45, 151); */
    width: inherit;
    height: inherit;
    position: absolute;
  }
  #content__bkg {
    /* content container background rgb(242, 242, 255, ); */
    position: absolute;
    width: 80%;
    margin-left: var(--global_margin);
    background-color: rgba(242, 242, 255, 0.6);
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
    color: var(--global_header_light);
    margin-bottom: 0;
    text-decoration: underline;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--global_header_light);
  }
</style>
