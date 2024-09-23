package main

import (
	"github.com/LexBokun/Redbook_GO_React/backend/controllers"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/gin-gonic/gin"
)

func main() {
	database.InitBD() // Инициализация БД

	r := gin.Default()

	r.GET("/species", controllers.GetSpecies)
	r.GET("/species/:id", controllers.GetSpeciesById)

	r.POST("/species", controllers.CreateSpecies)
	r.PUT("/species/:id", controllers.UpdateSpecies)
	r.DELETE("/species/:id", controllers.DeleteSpecies)
	r.Run("127.0.0.1:3306")
}
