<script>
  import ContentContainer from "./Components/ContentContainer.svelte";
  import Test from "./Components/Test.svelte";
</script>

<span id="bkg">
  <span id="content__bkg">
    <div id="main__container">
      <h1>Nathan Inbar</h1>
      <h4>Student 👨‍🎓, Computer Scientist 👨‍💻, Photographer 📷</h4>
      <p>
        Hey, I'm Nathan. I've developed and published a mobile game, 2x winning
        hackathon entry, and many other projects. Love to learn and create
        awesome applications.
      </p>
    </div>
    <br />

    <ContentContainer title="Projects" />
    <ContentContainer title="Photos" />
  </span>
</span>

<style>
  #bkg {
    /*full background overlay currently disabled */
    background-color: rgb(242, 242, 255, 0);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  #content__bkg {
    /* content container background rgb(242, 242, 255, ); */
    position: absolute;
    width: 80%;
    height: 100%;
    margin-left: var(--global_margin);
    background-color: rgba(242, 242, 255, 0.6);
  }

  #main__container {
    display: flex;
    flex-direction: column;
    border: 0px solid magenta;
  }
  /* centers main container on mobile */
  @media only screen and (max-width: 620px) {
    #main__container {
      margin-right: var(--global_margin);
    }
  }
  h1 {
    font-size: 4rem;
    color: var(--global_header_light);
    margin-bottom: 0;
    margin-left: -4px;
    text-decoration: underline;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--global_header_light);
  }
</style>
