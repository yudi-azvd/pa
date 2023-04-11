<script lang="ts">
  import { base } from '$app/paths'
</script>

<div id="app">
  <div>
    <a href="https://github.com/yudi-azvd/pa" target="_blank">
      <img alt="logo do repositório" id="pa-logo" width="120" src="{base}/icon.png" />
    </a>
    <h1>Projeto de Algoritmos</h1>
  </div>

  <ul class="links">
    <li>Grafos</li>
    <ol>
      <li><a href="{base}/bfs">BFS</a></li>
      <li><a class="disabled" href="{base}/">DFS</a></li>
    </ol>
    <li><a class="disabled" href="{base}/">Gananciosos</a></li>
    <li><a class="disabled" href="{base}/">Dividir e Consquitar</a></li>
    <li><a class="disabled" href="{base}/">Programação Dinâmica</a></li>
  </ul>
</div>
