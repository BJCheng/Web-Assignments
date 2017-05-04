var express = require('express');
var router = express.Router();

let aboutObject = {
    "name": "Ben Cheng(The Tryndamere!)",
    "biography": "ueled by his unbridled fury and rage, Tryndamere cuts his way through the tundra, mastering the art of battle by challenging the Freljord's greatest warriors. The wrathful barbarian seeks revenge on the one who decimated his clan and strikes down all those who stand between him and his final retribution.",
    "favoriteTargets": ["Ashe", "Ahri", "Ryze", "Viktor"],
    "hobbies": ["Mocking Shout", "Bloodlust", "Undying Rage", "Spinning Slash", "Web Programming(a little bit!)"]
};

let storyObject = {
    "storyTitle": "How I transfer from a killer to coder.",
    "story": "I am a barbarian, but I am not the usual barbarian, I am the king of all barbarians."
};

let listOfEducations = [{
    "schoolName": "Barbarian High School",
    "degree": "High School",
    "favoriteClass": "Spinning Move",
    "favoriteMemory": "First time I can have a SWORD! The folks was so envious."
}, {
    "schoolName": "Bloodthirst University",
    "degree": "Bachelor's degree",
    "favoriteClass": "How to Steal Life While Attacking",
    "favoriteMemory": "Asked the girl barbarian out for the first time when I was a sophomore!"

}, {
    "schoolName": "Stevens Institute of Technology",
    "degree": "Master's degree",
    "favoriteClass": "CS-546",
    "favoriteMemory": "Learning Node.js!"

}];


router.get('/about', (req, res) => {
    res.send(aboutObject);
});
router.get('/story', (req, res) => {
    res.json(storyObject);
});
router.get('/education', (req, res) => {
    res.json(listOfEducations);
});
router.get('*', (req, res)=>{
    res.sendStatus(404);
});

module.exports = router;