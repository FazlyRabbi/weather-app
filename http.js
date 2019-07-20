// create a http lybrary

class Http{

    //this is our get mathod....

 async  get(url){
       const result =  await fetch(url)
               .then(Response => Response.json())
                return result;

   }

 // this is post mathod......
 async post(url,data){

 const result =  await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(Response => Response.json())

      return result;
 }


 //this is update mathod.......... 

 async Update(url,data){

  const result =  await fetch(url, {
       method: 'PUT',
       body: JSON.stringify(data),
       headers: {
         "Content-type": "application/json; charset=UTF-8"
       }
     })
       .then(Response => Response.json())

       return result;
  }

  //this is delete mathod........

  async Delete(url){

      const result =  await fetch(url, {
           method: 'DELETE',

           headers: {
             "Content-type": "application/json; charset=UTF-8"
           }
         })
           .then(Response => Response.json())

           return result;
      }

}