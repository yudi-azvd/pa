<script>
  import '../global.css'
  import { base } from '$app/paths'
</script>

<div id="app">
  <div class="content">
    <a href="{base}/">Início</a>

    <slot />
  </div>
</div>

<style>
  #app .content {
    margin: 0 auto;
  }

  :global(canvas) {
    /* border-radius: 8px; */
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.2);
  }
</style>
