class ApiError extends Error {

   constructor(statusCode, 
       message="Someting went wrong",
       errors=[],
       stack=""
       
   ) {
     super(message);
     this.statusCode = statusCode;
     this.data = message
     this.message = message;
     this.success = false;
     this.errors = errors;
     console.log("In the api error file", this.errors)
     if(stack){
       this.stack = stack;
     }else{
       Error.captureStackTrace(this, this.constructor);
     }
     
   }
 }
 
 export { ApiError };