# Projeto de Medição de Brilho

Este projeto é uma aplicação que mede o brilho de um ambiente usando um dispositivo ESP32 e envia os dados para um servidor WebSocket, onde os dados são armazenados em um banco de dados MySQL.

## Configuração

Antes de executar o projeto, certifique-se de configurar o ambiente corretamente:

## Configuração do esp32

1. Certifique-se de ter um docker e node instalaro em seu dispositivo.

2. Realize o clone do projeto.

3. Entre na pasta do projeto e execute o comando a seguir para iniciar o container que irá executar o banco de dados mysql.
   ```bash
   docker-compose up -d
4. Após a inicialização do container, execute o comando para realização do reset e configuração do banco de dados
   ```bash
   npm run db:reset
5. Faça agora a executação do comando para inicializar o servidor WebSocket, onde se bem sucedido estará no aguardo do envio das informações do sensor do esp32
   ```bash
   npm start
## Configuração do Arduino
1. Copie o código disponibilizado no repositório para a IDE do arduino e faça o upload em seu esp32, realizando as modifiações existentes comentadas no código.

2. Um detalhe importante é que caso o seu computador não esteja com a porta 8080 aberta provavelmente você precisará abri-la. Tive este problema durante a execução do projeto, e para solucionar este problema no ubuntu que é o sistema operacional que utilizo utilizei o comando abaixo no terminal
   ```bash
   sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
3. Se posteriormente você quiser retornar a configuração anterior e fechar a porta 8080 basta seguir a configuração a seguir em seu terminal
   ```bash
   sudo iptables -D INPUT -p tcp --dport 8080 -j ACCEPT
4. A montagem do circuito do esp32 esta disponível abaixo, assim como outros detalhes do projeto.

## Como Usar

1. Inicie o servidor WebSocket:

   ```bash
   npm start
Inicie a aplicação no ESP32 para medir o brilho e enviar dados para o servidor WebSocket.

Para isto após carregado o código em seu esp, basta conecta-lo a alguma fonte de energia.

Os dados de brilho serão armazenados automaticamente no banco de dados MySQL para sua posterior verificação ou utilização.

Contribuindo
Sinta-se à vontade para contribuir para este projeto. Você pode criar problemas (issues) e enviar solicitações de pull (pull requests) para melhorar o projeto.

Licença
Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.