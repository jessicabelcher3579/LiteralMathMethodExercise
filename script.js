// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace ("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
warmHugs = beenImpaled.slice(18, 36);
console.log(warmHugs);

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *=3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7a
let reindeer = "Reindeers are better than people.";

// 7b
console.log(reindeer.replaceAll(" ", "_"));

// 8
console.log(Math.sqrt(2));

// 9
let newRandomNumber = Math.random(); 
newRandomNumber *=17;
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber +=7;

newRandomNumber = Math.floor((Math.random()*17)+7)
console.log(newRandomNumber);

