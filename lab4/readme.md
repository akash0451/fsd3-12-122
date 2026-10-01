# NPM Project

1. goto project folder (by cd)
2. type ```npm init -y```
3. open package.json
4. update ```type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
    
scripts: {
    "start": "node app.js",
    "dev" : "nodemon prg7.js"
  }
```
7. add node_modules to .gitignore


## request type: GET
1. get all
GET: /api/products  ---> (to get all products)
2. get by id
GET: /api/products/101 --->(to get product with id 101)

## request type: POST
Post: /api/products  --->(to add product)

## request type: PUT/PATCH
put/patch: /api/products/201
- put---> for totally replacement
- patch---> for partial modification

## request type: DELETE
delete: /api/products/110

## 