# ZOOPLUS CODING CHALLENGE #

To implement this coding challenge i have used the following `NodeJS` framewoks:
    
* [Express](http://expressjs.com/) to create server api.
* [Babel](https://babeljs.io/) to compile and set up.
* [Nodemon](https://nodemon.io/) to reload automatically the application while developing.
* [Dotenv](https://www.npmjs.com/package/dotenv) to handle environment variables
* [Body-parser](https://www.npmjs.com/package/body-parser) to parse incoming requiest bodies.
* [Node-fetch](https://www.npmjs.com/package/node-fetch) to make third party http requests.
* [Jest](https://jestjs.io/): for testing purposes

## Usage ##
I have configured three commands in package.json file:
* `npm run test`: to run the tests.
* `npm run dev`: to run the app under nodemon utility.
* `npm run start`: to start the app.

After start the api server it can be used with a navigator like Chrome or with curl with this command:
> curl http://localhost:3000/api/breedsimages/3

## Architecture ##
It is the first time i have to build a whole application from scratch since about two or three years ago. Then i have done some research to find a good architecture and pattern and finally i have made the decission to create an application architecture based on this one: 
* [Achitecture](https://github.com/arcdev1/mm_express_api_example/blob/master/src/contacts/contacts-endpoint.spec.js). It follows two main principles. 
    + **Control**: Following this architecture we do not relay our bussiness logic in any external framework since every object, even the express request and response object, is handled by our business logic following the [Ice Factory pattern](https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-ice-factory-4161859a0eee/).
    + **Easy to extend**: by this architecture all the request handle is located in the same place and we can add as many endpoints or functionality in an easy way.

The application has the following folder structure:

```
└── src
    ├── helpers
    ├── models
    ├── routes
    └── thirdParty
```

* **SRC** folder has the application source
    +   *helpers*: application helpers code, including endpoint.
    +   *models*: what the application is, not necessary database models.
    +   *routes*: application routing to handle requests.

## Solution ##
The api expects a get request sending the number of vowels as parameter in the url.

Then using promises get first the whole breeds list, and for each breed checks whether it has the required number of vowels. 

If so it will be stored in an array and will be used to use in a promise.all array request to get the random image and return the expected array object like this:

```json
[
    {
        "petName": "cotondetulear",
        "petImage": "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg"
    },
    {
        "petName": "mexicanhairless",
        "petImage": "https://images.dog.ceo/breeds/mexicanhairless/n02113978_2606.jpg"
    }
]
```

## Improvements ##
The application can be improved in many ways:

* Documentation: A good documentation could be added with [JSDOC](https://jsdoc.app/) or [Swagger](https://swagger.io/).
* Securization: The app has not any security control.
* Docker: It can be embedded in a docker container to be tested and deployed in an more secure and easier way.

## Versions ##
* Node: v12.19.2
* body-parser: 1.19.0
* dotenv: 8.2.0
* express: 4.17.1
* node-fetch: 2.6.0