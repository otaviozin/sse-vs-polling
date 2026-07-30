package main

import (
	"log"
	"net/http"
)

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		next.ServeHTTP(w, r)
	})
}

func main() {
	go StartOrderSimulation()

	mux := http.NewServeMux()
	mux.HandleFunc("/polling", pollingHandler)
	mux.HandleFunc("/sse", sseHandler)

	log.Println("Backend rodando em :8080")
	log.Fatal(http.ListenAndServe(":8080", enableCORS(mux)))
}
