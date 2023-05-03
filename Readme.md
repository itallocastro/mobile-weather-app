# Observações gerais

Olá, pessoal! 
O teste foi realizado utilizando o **react native**. 
A partir disso, notei que na construção do teste alguns ícones não foram exatamente encontrados como no figma. 
Contudo, tentei chegar o mais próximo. 
Além disso, a API fornecida não fornecia os dados hora a hora de forma gratuita. Com isso, eu utilizei os dados de <strong>Next Forecast</strong> para suprir a ausência deles. Portanto, vocês poderão notar que os dados que estão na parte "Today" serão basicamente os mesmos da parte "Next Forecast".
Ademais, como de imagens maiores só existiam as duas principais nos exemplos, eu só fiz uso delas como imagem principal, porque as imagens menores ficavam com uma resolução bem ruim. Ainda assim, as imagens pequenas foram utilizadas nas outras partes dos componentes.
Por fim, em relação ao background das telas eu imaginei que tivesse relação com a possibilidade ou não de chuva no dia corrente. 
A partir disso, foi feita a lógica para mudança de background, se houver > 50% de chance de chuva ele fica mais escuro, caso contrário fica mais claro. 

## Funcionalidade Adicionada
- O "Select" está funcional e com algumas opções de cidades para teste.

## Intruções
- Configurar o ambiente de desenvolvimento: https://reactnative.dev/docs/environment-setup
- Clonar o repositório.
- Ter o Node.js instalado, a versão que eu utilizei: **v19.8.1**
- Acessar o diretório do projeto baixado.
- Rodar o comando:
```
npm install 
```
- Ter algum dispositivo(físico ou não) para teste.
- Rodar npm start
- Escolher rodar no android ou no iOS (obs: Esse projeto foi desenvolvido com dispositivo android).