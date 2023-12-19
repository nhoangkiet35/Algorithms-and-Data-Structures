/*
Trie Exercise - getWords
Write a function on the Trie.prototype called getWords which returns an array of all of the words in the Trie.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
 
t.getWords() // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
 
t.getWords().length // 8
*/
class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }

    addWord(word, index = 0, node = this) {
        if (index === word.length) {
            node.isWord = true;
            return;
        }

        const char = word[index];
        if (!node.characters[char]) {
            node.characters[char] = new Trie();
        }

        this.addWord(word, index + 1, node.characters[char]);
    }

    getWords(node = this, word = "", words = []) {
        if (node.isWord) {
            words.push(word);
        }

        for (let char in node.characters) {
            this.getWords(node.characters[char], word + char, words);
        }

        return words;
    }
}

// Test cases
const t = new Trie();
t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");

console.log(t.getWords()); // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
console.log(t.getWords().length); // 8
