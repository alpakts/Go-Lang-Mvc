package migrate

import (
	"log"
	"myapi/models"

	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) {
	err := db.AutoMigrate(&models.Product{}, &models.User{})
	if err != nil {
		log.Fatalf("Could not run migrations: %v", err)
	}
	log.Println("Migrations applied successfully")
}
