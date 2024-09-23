package services

import (
    "github.com/LexBokun/Redbook_GO_React/backend/internal/models"
    "gorm.io/gorm"
)

// Функция для создания нового вида в базе данных
func CreateSpecies(db *gorm.DB, species *models.Species) error {
    return db.Create(species).Error
}