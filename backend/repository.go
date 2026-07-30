package main

import (
	"sync"
	"time"
)

type Order struct {
	ID     string `json:"id"`
	Status string `json:"status"`
}

var (
	statuses = []string{"Aguardando", "Preparando", "Cozinhando", "Embalando", "Saiu para Entrega", "Entregue"}
	mu       sync.RWMutex
	current  = 0
)

func StartOrderSimulation() {
	for {
		time.Sleep(10 * time.Second) // Muda o status a cada 10s
		mu.Lock()
		current = (current + 1) % len(statuses)
		mu.Unlock()
	}
}

func GetCurrentStatus() string {
	mu.RLock()
	defer mu.RUnlock()
	return statuses[current]
}
