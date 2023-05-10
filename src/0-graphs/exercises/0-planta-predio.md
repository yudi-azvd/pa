# Exercicio Resolvido

## Problema

Seja um grafo G=(V,E) representando a planta de um edifício.
Inicialmente temos dois robos localizados em dois vértices de V, a e b,
que devem alcançar os vértices c e d de V.

A cada passo um dos robos deve caminhar para um vertice adjacente ao
vértice que ele se encontra no momento.

Exiba um algoritmo polinomial que decida se é possível, ou não, os robos
partirem de a e b e chegarem em c e d, respectivamente, sem que em
nenhum momento eles estejam a distância menor do que r, onde r é um
inteiro dado.

<!--
## Solução

Seja H um grafo representando as configurações possíveis (posições
dos robos) do problema. Cada nó de H corresponde a um par ordenado
de vértices de V a distância menor ou igual a r.

Um par de nós u e v de H tem uma aresta se e somente em um passo é
possível alcançar a configuração v a partir da configuração u em um
único passo, ou seja, se u=(u1,u2) e v=(v1,v2) então uma das alternativas
é válida

(i) u1=v1 e (u2,v2) pertence a E

(i) u2=v2 e (u1,v1) pertence a E

O problema portanto consiste em decidir se existe um camìnho entre o
nó (a,b) e o nó (c,d) em H. Isso requer tempo linear no tamanho de H.
Como H tem O(n2) vértices e O(n3) arestas, o algoritmo executa em
O(n3) . -->
