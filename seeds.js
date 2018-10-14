var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
//remove our campground
var data = [
    {   name:"Cloud's Rest",
        image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f9c27fa7e8b4b8_340.jpg",
        description:"Companies and businesses can benefit from using this form of modern marketing by sending either promotional content, reminders or discount coupons via text format directly to individuals via their personal mobile phones or PDAs. This is encouraged because of the relatively low cost entailed. There are even observers who note that it allows companies to have lower impact on the environment because they are no longer using paper for their direct mails.[2] The fundamental value is that the target audience is often compelled to open the text messages that arrive in their inbox. In a study in the United Kingdom, for instance, an overwhelming 81 percent opened and read text messages sent for the purpose of direct marketing.[3] There are numerous possibilities for direct text marketing and these could include customer services, alerts, CRM, communication - a two-way direct response mechanism, brand bonding, and event ticketing, among others.[4]"
    },
    {   name:"Desert Massa",
        image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f9c27fa7e8b4b8_340.jpg",
        description:"Companies and businesses can benefit from using this form of modern marketing by sending either promotional content, reminders or discount coupons via text format directly to individuals via their personal mobile phones or PDAs. This is encouraged because of the relatively low cost entailed. There are even observers who note that it allows companies to have lower impact on the environment because they are no longer using paper for their direct mails.[2] The fundamental value is that the target audience is often compelled to open the text messages that arrive in their inbox. In a study in the United Kingdom, for instance, an overwhelming 81 percent opened and read text messages sent for the purpose of direct marketing.[3] There are numerous possibilities for direct text marketing and these could include customer services, alerts, CRM, communication - a two-way direct response mechanism, brand bonding, and event ticketing, among others.[4]"
    },
    {   name:"Canyon Floor",
        image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f9c27fa7e8b4b8_340.jpg",
        description:"Companies and businesses can benefit from using this form of modern marketing by sending either promotional content, reminders or discount coupons via text format directly to individuals via their personal mobile phones or PDAs. This is encouraged because of the relatively low cost entailed. There are even observers who note that it allows companies to have lower impact on the environment because they are no longer using paper for their direct mails.[2] The fundamental value is that the target audience is often compelled to open the text messages that arrive in their inbox. In a study in the United Kingdom, for instance, an overwhelming 81 percent opened and read text messages sent for the purpose of direct marketing.[3] There are numerous possibilities for direct text marketing and these could include customer services, alerts, CRM, communication - a two-way direct response mechanism, brand bonding, and event ticketing, among others.[4]e"
    }
];



function seedDB(){
    //remove all campground
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all campground");
        //add some campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("add a new campground");
                    //create comments
                    Comment.create(
                        {
                            text: "balh balh",
                            author: "wluuuu"
                        }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("comments added");
                        }
                    })
                }
    
            })
        })
    });
}

module.exports = seedDB;