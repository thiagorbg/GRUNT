1- Neste modulo aprendi a usar o grunt uma ferramenta poderosa de automação de tarefas via codigo .js

2- Fazer a compilação do less

3- Entender a divisão do ambiente de desenvolvedor é de produção e criar tarefas diferentes para cada ambiente para melhor organização

4- Minificar e comprimir os asquivos finais .css

5- A ampliar melhor meus diretorios 


plugins usado 

npm i -g grunt-cli // baixando de forma global 

npm i --save-dev grunt // baixando de forma local na sua pasta 

npm  i --save-dev grunt-contrib-less    \\ usa o less 

npm  i --save-dev grunt-contrib-watch    \\ A função watch de observar e fazer a compilação do less 

npm  i --save-dev grunt-contrib-uglify    \\ faz a compreção e a minificação dos  arquivos .js


Dividido em tres diretorios principais 

SRC     \\ Onde fica os arquivos que o desenvolvedor trablha , onde fica o less e os arquivos que não são coprimidos e minificados 
DEV      \\ onde fica os arquivos e o less compilado para .css para o dev trabalhar e ver os resultados das compilaçães 
DIST      \\ Onde fica or aquivos finais ou consumidor que o papel e ser eficiente e eficaz onde o arquivo e comprimido e minificado  para diminuir o  tamanho do arquivo final e tirar os caracteres e espaços desnecessarío 
