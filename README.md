# 🚀 Go Real-time: Polling vs Server-Sent Events (SSE)

Este repositório é um laboratório prático projetado para comparar duas estratégias comuns de comunicação em tempo real: **Short Polling** e **Server-Sent Events (SSE)**. Para tornar o exemplo real, simulamos um **Sistema de checagem de pedidos**

## 📋 Sobre o Projeto

Quando precisamos atualizar o status de um pedido no frontend, temos várias opções. Este projeto foca em duas:

1.  **Polling**: O cliente faz requisições repetitivas ao servidor em intervalos fixos (ex: a cada 2 segundos).
2.  **SSE (Server-Sent Events)**: O cliente abre uma conexão HTTP persistente e o servidor "empurra" (push) atualizações apenas quando o dado realmente muda.

### Por que Go?
Go é excepcionalmente eficiente para conexões persistentes (como SSE) devido às **Goroutines**, que permitem manter milhares de conexões abertas com um consumo mínimo de memória (RAM).

---

## 🏗️ Arquitetura e Tecnologias

-   **Backend**: Go (Golang) usando apenas a biblioteca padrão `net/http`.
-   **Frontend**: React + TypeScript + Vite.
-   **Containers**: Docker e Docker Compose para orquestração.
-   **Componentização**: Lógica isolada em Custom Hooks no React e pacotes internos no Go.

---

## 📊 Benchmarks e Comparação

Durante a execução de 10 minutos da simulação, observamos os seguintes dados:

| Métrica | Short Polling (2s) | Server-Sent Events (SSE) |
| :--- | :--- | :--- |
| **Requisições HTTP** | 300 requisições | 1 única conexão inicial |
| **Consumo de Banda** | Alto (Headers enviados 300x) | Mínimo (Headers enviados 1x) |
| **Latência** | Até 2 segundos de atraso | Quase zero (Push instantâneo) |
| **Carga no Servidor** | Constante (Processa cada request) | Ociosa (Aguarda mudanças) |
| **Complexidade** | Muito Baixa | Baixa |

---

## 🚀 Como Executar

A maneira mais rápida de rodar o projeto é via **Docker Compose**:

1. Certifique-se de ter o Docker instalado.
2. Clone o repositório:
   ```bash
   git clone https://github.com/otaviozin/sse-vs-polling.git
   cd sse-vs-polling
   ```
3. Suba os containers:
   ```bash
   docker-compose up --build
   ```
4. Acesse no seu navegador:
   - **Frontend**: [http://localhost:5173](http://localhost:5173)
   - **Métricas do Backend**: [http://localhost:8080/polling](http://localhost:8080/polling)

---

## 📂 Estrutura do Projeto

```text
├── backend/
│   ├── main.go          # Configuração do servidor e CORS
│   ├── handlers.go      # Endpoint de Polling e stream de SSE
│   ├── repository.go    # Simulação da regra de negócio (pedidos)
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/  # UI Reutilizável (StatusCard, MetricsTable)
│   │   ├── hooks/       # Lógica isolada (usePolling, useSSE)
│   │   └── App.tsx      # Orquestração principal
│   └── Dockerfile
└── docker-compose.yml
```

---

## 💡 Lições Aprendidas

-   **Polling** é uma solução "brute-force". É fácil de implementar e escala bem com caches HTTP, mas é extremamente ineficiente para dispositivos móveis (devido ao consumo de rádio/bateria).
-   **SSE** é a escolha ideal para notificações unidirecionais. Ele utiliza o protocolo HTTP padrão, evitando a complexidade de gerenciar WebSockets (que são bidirecionais e usam um protocolo diferente).
-   O uso de **TypeScript** no frontend garantiu contratos de dados seguros entre o status enviado pelo Go e a interface.

---

## 🔗 Conecte-se comigo

Este projeto foi construído para fins educacionais e para demonstrar a aplicação prática de arquiteturas orientadas a eventos.

- **LinkedIn**: [Otávio Pereira](https://www.linkedin.com/in/otavio-ppereira/)
- **Portfolio**: [otaviozin.vercel.app](https://otaviozin.vercel.app/pt-br)

---
*Desenvolvido com ☕ e Go.*
