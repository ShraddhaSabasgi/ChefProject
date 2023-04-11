package models

import "time"

var (
	DB_ROOTPATH     = ""
	DB_USERNAME     = ""
	DB_PASSWORD     = ""
	DBNAME          = ""
	PORT            = ""
	RESTAURENTOWNER = ""
)

type Configuration struct {
	DB_ROOTPATH     string
	DB_USERNAME     string
	DB_PASSWORD     string
	DBNAME          string
	PORT            string
	RESTAURENTOWNER string
}
type Employee struct {
	Name    string `json:""`
	Address string `json:""`
	Email   string `json:""`
	Mobile  int64  `json:""`
	City    string `json:""`
	State   string `json:""`

	Zipcode int16 `json:""`

	// City string `json:""`
	// City string `json:""`
	// City string `json:""`

	// City string `json:""`
}
type RestaurentOwner struct {
	RestName        string `json:"restName" bson:"restName"`
	RestDescription string `json:"restDescription" bson:"restDescription"`
	RestAddress     string `json:"restAddress" bson:"restAddress"`
	RestCity        string `json:"restCity" bson:"restCity"`
	RestState       string `json:"restState" bson:"restState"`
	RestZip         string `json:"restZip" bson:"restZip"`
	RestType        string `json:"restType" bson:"restType"`
	OwnerName       string `json:"ownerName" bson:"ownerName"`
	OwnerEmail      string `json:"ownerEmail" bson:"ownerEmail"`
	OwnerMobile     string `json:"ownerMobile" bson:"ownerMobile"`
	Password        string `json:"password" bson:"password"`
	ConfirmPassword string `json:"confirmPassword" bson:"confirmPassword"`
	CreatedOn       string `json:"createdOn" bson:"createdOn"`
}
type ResponseData struct {
	Result         interface{} `json:"result"`
	Error          interface{} `json:"error"`
	ResponseHeader interface{} `json:"reponseHeader"`
	ErrorCode      int         `json:"errorCode"`
	IsCompressed   bool        `json:"isCompressed"`
	ServerTime     time.Time   `json:"serverTime"`
}

func GetResponseData(result interface{}, errorData interface{}, errorCode int) ResponseData {
	return ResponseData{
		Result:     result,
		Error:      errorData,
		ErrorCode:  errorCode,
		ServerTime: time.Now(),
	}
}
