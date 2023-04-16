# Projeto de Algoritmos

Repositório para a disciplina de Projeto de Algoritmos da Universidade de Brasília.

Dá uma olhada em https://yudi-azvd.github.io/pa/. Se deu tudo certo,
a página vai estar estilizada. Se não, paciência x( Tô arrumando ainda.

## Setup

Baixe esse repositório e entre nele:

    git clone https://github.com/yudi-azvd/pa
    cd pa

Você precisa ter [Node.js](https://nodejs.org/en) instalado no seu computador
e um gerenciador de pacotes do Node como Yarn ou
[pnpm](https://pnpm.io/installation) (mais rapidinho pra instalar dependências).

```
pnpm i
pnpm test
```

<!--
## Godot

[Godot](https://godotengine.org/) é uma game engine Open Source e foi usada para
desenvolver algumas das atividades. Se você quiser testá-la nesse repositório,
você precisa apenas de uma cópia do [executável](https://godotengine.org/download/)
da engine para a sua distribuição e, opcionalmente, instalá-lo no _path_ da sua
máquina (prefira instalar a versão [4.0.2](https://github.com/godotengine/godot/releases/tag/4.0.2-stable)).

Se você instalou o executável no _path_, você deve poder iniciar o Godot apenas
digitando no terminal:

    godot

Isso vai abrir o Gerenciador de Projetos. Então siga o processo de [importação de projeto](https://docs.godotengine.org/en/3.0/getting_started/step_by_step/intro_to_the_editor_interface.html#:~:text=get%20started%20faster.-,Create%20or%20import%20a%20project,in%20the%20Project%20Path%20field.)
e importe o diretório `pa` baixado anteriormente.

Para executar algum script GDScript, faça:

    godot -s 0-graphs/main.gd --headless

Se você não instalou o executável no _path_, substitua `godot` nos comandos
anteriores por `./<caminho relativo para o executável Godot>`. Exemplo:

    ~/Downloads/Godot_v<...versão...> -s 0-graphs/main.gd --headless

Para mais informações consulte o [tutorial da CLI](https://docs.godotengine.org/en/stable/tutorials/editor/command_line_tutorial.html). -->
