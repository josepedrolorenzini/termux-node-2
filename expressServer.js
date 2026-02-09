const express    =  require('express');
const path       =  require("path");
const app        =  express();
const userRoutes = require("./route/user");



app.use(express.json())
app.use(express.urlencoded({ extended:false  }));

const usuario = {
	name:'express',
	course:"traversy http"
}

app.get('/', (req, res) => {

	res.contentType('application/json'); // or res.set('Content-Type', 'application/json')
	// 'Home Page - No middleware here!'
	  res.json({
		  message:'Home Page - No middleware here!' ,
		  success: true ,
		  user: usuario ,
		  userAgent:req.header("user-agent")
		}); // Express automatically handles stringifying
		
		return ;
		
	});
	
	app.post("/post",(req,res)=>{
		console.log(req.body)
		res.send(req.body)
		return ;
	}) ; 



	// Use the user routes for any path starting with /user
	app.use('/user', userRoutes);
	
	
	const server = app.listen(4545,() => {
		console.log("express http://localhost:4545")
	});


// Graceful shutdown
process.on('SIGINT', () => {
	console.log('\nShutting down server...');
          server.close(() => {
			  console.log('Server closed');
			  process.exit(0);
			})
		});
		