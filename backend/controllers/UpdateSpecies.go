package controllers

import(
	"net/http"
	"strconv"

	"github.com/LexBokun/Redbook_GO_React/backend/internal/database"
	"github.com/LexBokun/Redbook_GO_React/backend/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func UpdateSpecies(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid species ID"})
		return
	}

	var species models.Species
	if err := database.DB.First(&species, id).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.JSON(http.StatusNotFound, gin.H{"error": "Species not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		}
		return
	}

	var input models.UpdateSpeciesInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	updatedSpecies := models.Species{
		ScientificName:    input.ScientificName,
		CommonName:        input.CommonName,
		Class:          	 input.Class,
		Status: 					 input.Status,
		Description:       input.Description,
		Habitat:           input.Habitat,
		Population:        input.Population,
		Coordinates: 			 input.Coordinates,	
		ResidenceTime: 		 input.ResidenceTime,	
	}

	if err := database.DB.Model(&species).Updates(updatedSpecies).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update species"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": species})
}