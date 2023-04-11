package routes

import (
	middleware "shraddhaprojects/REACT/ReactProjects/Server/middleware"
	employee "shraddhaprojects/REACT/ReactProjects/Server/modules/employee"
	restaurent "shraddhaprojects/REACT/ReactProjects/Server/modules/restaurent"

	"github.com/gin-gonic/gin"
)

func Init(g *gin.Engine) {
	O := g.Group("/o")
	C := g.Group("/c")
	R := g.Group("/r")
	R.Use(middleware.CheckAuth())

	middleware.Init(O, R, C)
	employee.Init(O, R, C)
	restaurent.Init(O, R, C)

}
