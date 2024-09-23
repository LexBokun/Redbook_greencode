package controllers

import (
	"net/http"

	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/models"
	"github.com/LexBokun/Redbook_GO_React/backend/services"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CreateSpecies(c *gin.Context) {
	var req models.Species

	// Валидация данных из запроса
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data", "details": err.Error()})
		return
	}

	species := models.Species{
		ScientificName: req.ScientificName,
		CommonName:     req.CommonName,
		Class:       		req.Class,
		Group: 					req.Group,
		Family: 				req.Family,
		Kind: 					req.Kind,		
		Status:         req.Status,
		Description:    req.Description,
		Habitat:        req.Habitat,
		Population: 		req.Population,	
		Coordinates: 		req.Coordinates,
		ResidenceTime: 	req.ResidenceTime,
	}

	if err := services.CreateSpecies(database.DB, &species); err != nil {
		if err == gorm.ErrDuplicatedKey {
			c.JSON(http.StatusConflict, gin.H{"error": "Species with this scientific name already exists"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add species", "details": err.Error()})
		}
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Species successfully added", "species": species})
}