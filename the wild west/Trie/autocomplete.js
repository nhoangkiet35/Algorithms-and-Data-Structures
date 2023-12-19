/*
Trie - autocomplete
Write a function on the trie class which accepts a string and returns an array of all the possible options in the trie for that string.

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
 
t.autocomplete('fa') // ["fast","fat", "fate", "father"] 
t.autoComplete('a') // ["awesome", "argue"]
t.autoComplete('arz') // []
*/
class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }

    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    findNode(word, node = this) {
        for (let char of word) {
            if (!node.characters[char]) {
                return null;
            }
            node = node.characters[char];
        }
        return node;
    }

    getWordsFromNode(node, prefix = "") {
        const words = [];

        const traverse = (currNode, currPrefix) => {
            if (currNode.isWord) {
                words.push(currPrefix);
            }

            for (let char in currNode.characters) {
                traverse(currNode.characters[char], currPrefix + char);
            }
        };

        traverse(node, prefix);
        return words;
    }

    autocomplete(prefix) {
        const node = this.findNode(prefix);
        if (!node) return [];

        return this.getWordsFromNode(node, prefix);
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

console.log(t.autocomplete("fa")); // ["fast", "fat", "fate", "father"]
console.log(t.autocomplete("a")); // ["awesome", "argue"]
console.log(t.autocomplete("arz")); // []
