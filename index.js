function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = "";

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " into the spaceship " + myAdverb;

    return result;
}

console.log(wordBlanks("Engineer", "Happy", "ran", "quickly." ));