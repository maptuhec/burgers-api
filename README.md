# burgers-api
API for creating, getting burgers

Link to Heroku app : https://nameless-river-99113.herokuapp.com

POST Create new Burger :

https://nameless-river-99113.herokuapp.com/burger

Example body of post request :
{
	"name": "Cheese Burger",
	"burgerNum": "3"
}

Both params "name" and "burgerNum" are required.

GET All burgers request:

https://nameless-river-99113.herokuapp.com/burgers

GET random burger request:

https://nameless-river-99113.herokuapp.com/burgers/random

GET Burger by burgerNum :

https://nameless-river-99113.herokuapp.com/burgers/:burgersNum

example: https://nameless-river-99113.herokuapp.com/burgers/2

GET Burger by ID:

https://nameless-river-99113.herokuapp.com/burger/id/:id

example: https://nameless-river-99113.herokuapp.com/burger/id/5a0f4010c10ab21400fdb232
