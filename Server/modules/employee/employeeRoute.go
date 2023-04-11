package employee

import (
	"fmt"
	"shraddhaprojects/REACT/ReactProjects/Server/logs"

	"github.com/gin-gonic/gin"
)

func Init(O *gin.RouterGroup, R *gin.RouterGroup, C *gin.RouterGroup) {
	O.GET("/employee", EmployeeRegistration)
}
func EmployeeRegistration(c *gin.Context) {
	logs.Debug("IN : EmployeeRegistration")
	fmt.Println("HELLLLOOO")
	logs.Debug("OUT : EmployeeRegistration")

}
