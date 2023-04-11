package logs

import (
	"fmt"
	"log"
	"os"
)

var (
	WarningLogger *log.Logger
	InfoLogger    *log.Logger
	ErrorLogger   *log.Logger
)

func init() {
	file, err := os.OpenFile("logs.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		log.Fatal(err)
	}

	InfoLogger = log.New(file, "INFO : ", log.Ldate|log.Ltime|log.Lshortfile)
	WarningLogger = log.New(file, "WARNING : ", log.Ldate|log.Ltime|log.Lshortfile)
	ErrorLogger = log.New(file, "ERROR : ", log.Ldate|log.Ltime|log.Lshortfile)
}
func Debug(args ...interface{}) {
	fmt.Printf("\nWARNING : %v", args)
	WarningLogger.Println(args)
}
func Error(args ...interface{}) {
	fmt.Printf("\nERROR : %v", args)
	ErrorLogger.Println(args)
}
func Info(args ...interface{}) {
	fmt.Printf("\nINFO : %v", args)
	InfoLogger.Println(args)
}
