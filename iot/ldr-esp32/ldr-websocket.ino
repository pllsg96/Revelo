#include <WiFi.h>
#include <WebSocketsClient.h>

const char *ssid = "LOGIN DA SUA REDE WIFI";
const char *password = "SENHA DA SUA REDE WIFI";
const char *webSocketServer = "192.168.1.3"; // Este é o IP da sua máquina que está rodando o servidor websocket
int webSocketPort = 8080; // Porta do servidor WebSocket

const int analogPin = 34;

WebSocketsClient webSocket;

unsigned long lastSendTime = 0;
const unsigned long sendInterval = 10000; // Intervalo de envio em milissegundos (10 segundos)

void setup() {
  Serial.begin(115200);

  // Conectar à rede Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando ao Wi-Fi...");
  }
  Serial.println("Conectado ao Wi-Fi");

  // Conectar ao servidor WebSocket
  webSocket.begin(webSocketServer, webSocketPort, "/");
  webSocket.onEvent(webSocketEvent);
}

void loop() {
  webSocket.loop();
  unsigned long currentTime = millis();

  // Verifica se é hora de enviar dados
  if (currentTime - lastSendTime >= sendInterval) {
    // Ler o valor analógico
    int sensorValue = analogRead(analogPin);

    // Enviar o valor para o servidor WebSocket
    String data = String(sensorValue);
    webSocket.sendTXT(data);

    lastSendTime = currentTime; 
  }
}

void webSocketEvent(WStype_t type, uint8_t *payload, size_t length) {
  switch (type) {
    case WStype_DISCONNECTED:
      Serial.println("Desconectado do servidor WebSocket");
      break;
    case WStype_CONNECTED:
      Serial.println("Conectado ao servidor WebSocket");
      break;
    case WStype_TEXT:
      // Lidar com mensagens recebidas, se necessário
      break;
  }
}
