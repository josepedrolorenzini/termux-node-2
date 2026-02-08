const http = require("http");


let PORT=5055


const server = http.createServer((req,res)=>{

if(req.url=="/"){
res.writeHead(200, {"Content-Type":"text/plain"});
res.end("hello android81");
}


}).listen( PORT , ()=> {

	console.log(`server running http://localhost:${PORT}`);

	});

// Graceful shutdown
 process.on('SIGINT', () => {
          console.log('\nShutting down server...');
          server.close(() => {
          console.log('Server closed');
          process.exit(0);
     });



	
 }) ;


   
   
   
   
   // * Common Content Types in Node.js
    //       * The correct content type depends entirely on the data being sent. Some common examples include:
    //       *
    //       *     application/json: For sending structured data in JSON format.
   //       *       text/html: For sending HTML content.
   //       *       text/plain: For sending plain text.
    //       *       text/css: For CSS stylesheets.
    //       *       text/javascript: For JavaScript code.
   //       *       image/jpeg, image/png, image/gif: For various image formats.
   //       *       multipart/form-data: For file uploads and complex forms.
   //       *        application/pdf: For PDF documents.
    //       *
    //       *
    //       Quick Fix - Kill the Process
             //      Find and kill the process using that port:
            //      # Find the process using port 5055
            //      lsof -i :5055
            //
           //      # Kill it (replace PID with the actual process ID from above)
           //      kill -9 PID
          //      Or use a one-liner:
          //      kill -9 $(lsof -t -i:5055)

