package controllers

import (
	"net/http"

	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/models"
	"github.com/gin-gonic/gin"
)

func GetSpecies(c *gin.Context) {
	var species []models.Species

	result := database.DB.Find(&species)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	if len(species) == 0 {
		c.JSON(http.StatusOK, gin.H{"species": []models.Species{}})
		return
	}
	// Возвращаем JSON с постами
	c.JSON(http.StatusOK, gin.H{
		"species": species,
	})
}
