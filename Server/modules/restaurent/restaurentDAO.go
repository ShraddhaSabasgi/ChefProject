package restaurent

import (
	"context"
	db "shraddhaprojects/REACT/ReactProjects/Server/db"
	"shraddhaprojects/REACT/ReactProjects/Server/logs"
	models "shraddhaprojects/REACT/ReactProjects/Server/models"
)

func RegisterRestOwnerDAO(RestOwner models.RestaurentOwner) models.ResponseData {
	logs.Debug("IN : RegisterRestOwnerDAO")
	var ResponseData models.ResponseData
	collection, collectionError := db.GetCollection(models.RESTAURENTOWNER)
	if collectionError != nil {
		logs.Debug("ERROR : RegisterRestOwnerDAO", collectionError)
		ResponseData.Error = collectionError
		ResponseData.Result = nil
		return ResponseData

	}
	result, insertError := collection.InsertOne(context.Background(), RestOwner)
	if insertError != nil {
		logs.Error("ERROR : RegisterRestOwnerDAO ", insertError)
		ResponseData.Error = insertError
		ResponseData.Result = nil
		return ResponseData

	}
	logs.Debug("OUT : RegisterRestOwnerDAO")
	ResponseData.Result = result
	return ResponseData

}
