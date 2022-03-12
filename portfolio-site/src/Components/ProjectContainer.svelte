<script>
  export let title;
  export let img_src;
  export let desc;
  export let link;
  let show_desc = false;
</script>

<div id="main">
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
    font-size: 1rem;
    max-width: 400px;
    background-color: #f2f2ff;
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
  .project__container > h2 {
    background-color: rgba(242, 242, 255, 0.6);
    width: 100%;
  }
</style>
