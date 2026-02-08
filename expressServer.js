const express = require('express');
const path    =  require("path");
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended:false  }));

	const user = {
			name:'express',
		        course:"traversy http"
	}

app.get('/', (req, res) => {
	  res.contentType('application/json'); // or res.set('Content-Type', 'application/json')
	  res.json({
		  success: true ,
		  user: user ,
		  userAgent:req.header("user-agent")
	  }); // Express automatically handles stringifying


	
});

app.post("/post",(req,res)=>{
	  console.log(req.body)
	  res.send(req.body)
   })

const seever = app.listen(4545,() => {
     console.log("express http://localhos5:4545")
});


// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
          server.close(() => {
          console.log('Server closed');
           process.exit(0);
     })
});
