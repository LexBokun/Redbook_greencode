package controllers

import (
	"net/http"
	"strconv"

	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/models"
	"github.com/gin-gonic/gin"
)

func GetSpeciesById(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid species ID"})
		return
	}

	var species models.Species

	// Получение объекта species по ID
	if err := database.DB.First(&species, id).Error; err != nil {
		if err.Error() == "record not found" {
			c.JSON(http.StatusNotFound, gin.H{"error": "Species not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		}
		return
	}
	c.JSON(http.StatusOK, species)
}
