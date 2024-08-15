let sampleJson  = `{
    "users":[
      {
        "firstName":"Eyup",
        "lastName":"Yildirim",
        "age":25,
        "email":"eyupyildirim@hotmail.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`



    
try{let users =JSON.parse(sampleJson);
    console.log(sampleJson);
} catch(err ) {
    console.log(err.message);
    
}




