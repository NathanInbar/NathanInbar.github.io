<script>
  import Test from "./Components/Test.svelte";
  let x = 20;
</script>

<span id="bkg">
  <div id="main__container">
    <h1>Nathan Inbar</h1>
    <h4>Student 👨‍🎓, Computer Scientist 👨‍💻, Photographer 📷</h4>
    <p>
      Hey, I'm Nathan. I've developed and published a mobile game, 2x winning
      hackathon entry, and many other projects. Love to learn and create awesome
      applications.
    </p>
  </div>
  <br />
  <Test /><Test /><Test /><Test /><Test /><Test /><Test /><Test /><Test /><Test
  /><Test /><Test /><Test /><Test />
  <Test /><Test /><Test /><Test /><Test /><Test /><Test /><Test /><Test /><Test
  /><Test /><Test /><Test /><Test />
</span>

<style>
  #bkg {
    /*background overlay currently disabled */
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #main__container {
    display: flex;
    flex-direction: column;
    border: 1px solid magenta;
    margin-left: var(--global_margin);
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
  }
  h4 {
    margin-top: 0;
    color: var(--global_header_light);
  }
</style>
