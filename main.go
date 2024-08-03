package main

import (
	"flag"
	"log"
	"myapi/config"
	"myapi/controllers"
	"myapi/migrate"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	envFile := flag.String("env", ".env", "env file to load")
	flag.Parse()

	log.Printf("Loading .env file: %s", *envFile)

	err := godotenv.Load(*envFile)
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	db, err := config.GetDB()
	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}

	migrate.Migrate(db)

	controllers.InitDB(db)

	r := gin.Default()
	log.Println("Loading templates from templates/*")
	files, err := loadTemplates("templates")
	if err != nil {
		log.Println(err)
	}
	r.LoadHTMLFiles(files...)

	r.GET("/", func(c *gin.Context) {
		data := gin.H{
			"Title": "Welcome to the Home Page",
		}
		c.HTML(http.StatusOK, "index.html", data)
	})

	r.GET("/register", controllers.ShowRegisterPage)
	r.POST("/register", controllers.Register)

	r.POST("/login", controllers.Login)

	api := r.Group("/api")
	api.Use(controllers.AuthMiddleware())
	{
		api.GET("/products", controllers.GetProducts)
		api.POST("/products", controllers.CreateProduct)

		api.GET("/users", controllers.GetUsers)
		api.POST("/users", controllers.CreateUser)
	}

	r.Run(":8080")
}
func loadTemplates(root string) (files []string, err error) {
	err = filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		fileInfo, err := os.Stat(path)
		if err != nil {
			return err
		}
		if fileInfo.IsDir() {
			if path != root {
				loadTemplates(path)
			}
		} else {
			files = append(files, path)
		}
		return err
	})
	return files, err
}
