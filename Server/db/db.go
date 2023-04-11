package db

import (
	"context"
	"shraddhaprojects/REACT/ReactProjects/Server/logs"
	"shraddhaprojects/REACT/ReactProjects/Server/models"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func getClientInstance() (*mongo.Client, error) {
	clientOptions := options.Client().ApplyURI(models.DB_ROOTPATH)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	var clientError error
	var ClientInstance *mongo.Client
	if err != nil {
		logs.Debug("ERROR", err)
		clientError = err
	}
	pingError := client.Ping(context.TODO(), nil)
	if pingError != nil {
		logs.Debug("ERROR", err)
		clientError = pingError
	}

	ClientInstance = client
	return ClientInstance, clientError

}
func GetCollection(collectionName string) (*mongo.Collection, error) {
	clientInstance, clientInstanceError := getClientInstance()
	if clientInstanceError != nil {
		logs.Error("ERROR :getCollection ", clientInstanceError)
		return nil, clientInstanceError
	}
	collection := clientInstance.Database(models.DBNAME).Collection(collectionName)
	return collection, nil

}
