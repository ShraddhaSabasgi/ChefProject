package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	logs "shraddhaprojects/REACT/ReactProjects/Server/logs"
	models "shraddhaprojects/REACT/ReactProjects/Server/models"
	"shraddhaprojects/REACT/ReactProjects/Server/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	initConfig()
	initializeAll()
}
func initConfig() {
	var Config models.Configuration
	File, FileError := ioutil.ReadFile("config.json")
	if FileError != nil {
	}
	UnmarshalError := json.Unmarshal(File, &Config)
	if UnmarshalError != nil {

	}
	models.DB_ROOTPATH = Config.DB_ROOTPATH
	models.DB_USERNAME = Config.DB_USERNAME
	models.DBNAME = Config.DBNAME
	models.DB_PASSWORD = Config.DB_PASSWORD
	models.PORT = Config.PORT
	models.RESTAURENTOWNER = Config.RESTAURENTOWNER
}
func initializeAll() {
	g := gin.Default()
	fmt.Println(gin.Version)
	// logs.Init()
	routes.Init(g)
	g.SetTrustedProxies(nil)
	ServerError := g.Run(":" + models.PORT)
	if ServerError != nil {
		logs.Error("IN : initializeAll", ServerError)
		log.Fatal("IN : initializeAll", ServerError)
	}
	logs.Debug("Server Started at - ", models.PORT)

}
