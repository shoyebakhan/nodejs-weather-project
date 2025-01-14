const express= require("express");
const app=express();
const hbs=require("hbs");
const path = require('path');
const port=process.env.PORT || 3000;


const static_path= path.join(__dirname,"./public");
const template_path= path.join(__dirname,"./template/views");
const partials_path= path.join(__dirname,"./template/partials");




app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"oops page not found"
    })
})
app.listen(port,()=>{
    console.log(`listining on port number ${port} `)
})