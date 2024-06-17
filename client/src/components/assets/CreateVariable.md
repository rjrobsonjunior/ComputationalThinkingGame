###### VARIÁVEIS 
# Criando uma Variável: var 
<kbd> 4 minutos </kbd> 
  
Houve muitas mudanças introduzidas na versão ES6 do JavaScript em 2015. Uma das maiores mudanças foram duas novas palavras-chave, let e const, para criar ou declarar variáveis. Antes do ES6, os programadores só podiam usar a palavra-chave var para declarar variáveis.`
```  javascript
var meuNome = 'João';
console.log(meuNome);
// saída: João
``` 
`Vamos considerar o exemplo acima:

1. var, abreviação de variável, é uma palavra-chave JavaScript que cria ou declara uma nova variável.
2. myName é o nome da variável. Colocar letras maiúsculas dessa forma é uma convenção padrão em JavaScript chamada camel case. Na caixa de camelo, você agrupa as palavras em uma, a primeira palavra é minúscula e cada palavra a seguir terá sua primeira letra maiúscula. (por exemplo, camelCaseEverything).
3. = é o operador de atribuição. Atribui o valor ('Arya') à variável (meuNome).
4. 'Arya' é o valor atribuído (=) à variável meuNome. Você também pode dizer que a variável myName é inicializada com um valor ‘Arya’.
5. Após a variável ser declarada, o valor da string 'Arya' é impresso no console referenciando o nome da variável: console.log(myName).
Existem algumas regras gerais para nomear variáveis:

* Os nomes das variáveis ​​não podem começar com números.
* Os nomes das variáveis ​​diferenciam maiúsculas de minúsculas, portanto meuNome e meunome seriam variáveis ​​diferentes. É uma má prática criar duas variáveis ​​com o mesmo nome usando casos diferentes.
* Os nomes das variáveis ​​não podem ser iguais às palavras-chave. Para obter uma lista abrangente de palavras-chave, verifique a documentação de palavras-chave do MDN.
* Nos próximos exercícios, aprenderemos por que let e const do ES6 são as palavras-chave de variáveis ​​preferidas por muitos programadores. Como ainda há muito código escrito antes do ES6, é útil estar familiarizado com a palavra-chave var pré-ES6.