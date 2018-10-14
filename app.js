var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStratery = require("passport-local");
var Campground = require("./models/campground");
var User = require("./models/user");
var seedDB = require("./seeds");
var Comment = require("./models/comment");
var methodOverride = require("method-override");
var flash = require("connect-flash");

//requring routes
var commentRoutes = require("./routes/comments");
var campgroundsRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");


//connect database
mongoose.connect("mongodb://localhost/yelp_camp_v12", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");
//seedDB();    //seed the database
//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"wluuuu is really cute",
    resave:false,
    saveUninitialized: false
}));

//use passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratery(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds",campgroundsRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started successful!");
});