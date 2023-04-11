package restaurent

import (
	"net/http"
	"shraddhaprojects/REACT/ReactProjects/Server/logs"
	"shraddhaprojects/REACT/ReactProjects/Server/models"

	"github.com/gin-gonic/gin"
)

func Init(O *gin.RouterGroup, R *gin.RouterGroup, C *gin.RouterGroup) {
	C.POST("/restaurentowner/register", RegisterRestOwnerRoute)
}
func RegisterRestOwnerRoute(c *gin.Context) {
	logs.Debug("IN : RegisterRestOwnerRoute")
	var RestOwner models.RestaurentOwner
	var Result models.ResponseData
	bindError := c.Bind(&RestOwner)
	if bindError != nil {
		Result.Error = bindError
		Result.Result = nil
		Result.ErrorCode = http.StatusInternalServerError
		logs.Error("ERROR : ", bindError)
		c.IndentedJSON(http.StatusOK, Result)

	}
	ResultFromService := RegisterRestOwnerService(RestOwner)
	if ResultFromService.Error != nil && ResultFromService.Result == nil {
		ResultFromService.ErrorCode = http.StatusInternalServerError
		ResultFromService.Result = nil
	}
	logs.Debug("OUT : RegisterRestOwnerRoute")
	c.IndentedJSON(http.StatusOK, ResultFromService)

}
