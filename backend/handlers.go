package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

func pollingHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Order{ID: "ORD-1", Status: GetCurrentStatus()})
}

func sseHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")

	lastStatus := ""
	for {
		currentStatus := GetCurrentStatus()
		if currentStatus != lastStatus {
			fmt.Fprintf(w, "data: %s\n\n", currentStatus)
			w.(http.Flusher).Flush()
			lastStatus = currentStatus
		}

		select {
		case <-r.Context().Done():
			return
		case <-time.After(1 * time.Second):
			continue
		}
	}
}
