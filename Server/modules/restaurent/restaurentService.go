package restaurent

import (
	"shraddhaprojects/REACT/ReactProjects/Server/logs"
	"shraddhaprojects/REACT/ReactProjects/Server/models"
	"time"
)

func RegisterRestOwnerService(RestOwner models.RestaurentOwner) models.ResponseData {
	logs.Debug("IN : RegisterRestOwnerService")
	RestOwner.CreatedOn = time.Now().String()
	result := RegisterRestOwnerDAO(RestOwner)
	if result.Error != nil {
		logs.Error("ERROR : RegisterRestOwnerService ", result.Error)
		result.Result = nil
		return result
	}

	logs.Debug("OUT : RegisterRestOwnerService")
	result.Error = nil
	return result

}
