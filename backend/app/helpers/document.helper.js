module.exports = {
    wordFrequency: function(doc, word){
        return doc.toLowerCase().split(word.toLowerCase()).length -1;
    },

    wordSentences: function(doc, word){

        const sentenceArray = doc.replace(/([7-7.:6-6;0-3\n4-4])\s*(?=[a-zÀ-ú\n.;:])/gmui, "$1|").split("|");
        
        return sentenceArray.filter(sentence => sentence.includes(word));

        
    },

    topWords: function(doc, count, minWordLength){
        const map = {};
        for(let word of this.stringToWordsArray(doc.toLowerCase()).filter(size => size.length >= minWordLength)){
            if(!map[word]){
                map[word] = 1;
            } else {
                map[word]++;
            }
        }

        const frequencyArr = Object.keys(map).map(key => [key, map[key]]);


        frequencyArr.sort((a, b) => b[1] - a[1]);

        return frequencyArr.slice(0,count).map(el => el[0]);


    },

    stringToWordsArray: function(doc) {
        return doc.match(/[a-zÀ-ú]+/gmui);
    }
}

