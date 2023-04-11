package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Init(O *gin.RouterGroup, R *gin.RouterGroup, C *gin.RouterGroup) {
	O.GET("/check", func(C *gin.Context) {
		C.JSON(http.StatusOK, gin.H{
			"message": "Conncted",
		})
	})
}
func CheckAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Next()
	}
}

// func respondWithError(c *gin.Context, code int, message interface{}) {
// 	c.AbortWithStatusJSON(code, gin.H{"error": message})
//   }

// func TokenAuthMiddleware() gin.HandlerFunc {
// 	requiredToken := os.Getenv("API_TOKEN")

// 	// We want to make sure the token is set, bail if not
// 	if requiredToken == "" {
// 		log.Fatal("Please set API_TOKEN environment variable")
// 	}

// 	return func(c *gin.Context) {
// 		token := c.Request.FormValue("api_token")

// 		if token == "" {
// 			respondWithError(c, 401, "API token required")
// 			return
// 		}

// 		if token != requiredToken {
// 			respondWithError(c, 401, "Invalid API token")
// 			return
// 		}

// 		c.Next()
// 	}
// }
