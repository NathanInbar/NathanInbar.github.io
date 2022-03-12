<script>
  import Test from "./Components/Test.svelte";
  let x = 20;
</script>

<span id="bkg">
  <div id="main__container">
    <h1>Hello World</h1>
  </div>
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
    border: 1px solid magenta;
    background-color: rgba(
      rgb(196, 53, 53),
      rgb(28, 199, 28),
      rgb(37, 37, 151),
      0.3
    );
    margin-left: var(--global_margin);
    margin-right: var(--global_margin);
  }

  h1 {
    color: var(--global_header_light);
  }
</style>
