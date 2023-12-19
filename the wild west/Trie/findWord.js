/*
Trie Exercise - findWord
Write a function called findWord which accepts a string and returns the characters object for the last character in that word if the string is a word in the Trie, otherwise it returns undefined. Try to solve this without having to find every single word in the Trie. addWord is implement to help you test the function.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
 
t.findWord('taco') // undefined
t.findWord('fat').characters // {t: Trie}
t.findWord('father').characters // {}
t.findWord('father').isWord // true
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

    findWord(word) {
        let node = this;

        for (let char of word) {
            if (node.characters[char]) {
                node = node.characters[char];
            } else {
                return undefined;
            }
        }

        return node.isWord ? node : undefined;
    }
}

// Test cases
const t = new Trie();
t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");

console.log(t.findWord("taco")); // undefined
console.log(t.findWord("fat").characters); // { e: Trie, h: Trie }
console.log(t.findWord("father").characters); // {}
console.log(t.findWord("father").isWord); // true
