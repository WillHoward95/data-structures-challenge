const dictionary = (arr) => {
  const words = arr.map((item) => {
    return item[0];
  });

  let wordTracker = "";
  let dictionary = [];

  const dictionaryBuild = (currentWord, wordLength) => {
    for (let i = 0; i < wordLength; i++) {
      wordTracker += currentWord[i];
      if (dictionary.includes(currentWord[i])) {
        continue;
      }
      if (wordTracker === currentWord) {
        const index = arr.findIndex((e) => e[0] === wordTracker);
        dictionary.push(currentWord[i], arr[index][1]);
        wordTracker = "";
      } else {
        dictionary.push(currentWord[i], null);
      }
    }
  };

  words.map((item) => {
    dictionaryBuild(item, item.length);
  });

  //   console.log(dictionary);

  let obj1 = {};
  let obj2 = {};

  for (let i = dictionary.length - 1; i > -1; i -= 2) {
    obj1.letter = dictionary[i - 1];
    obj1.definition = dictionary[i];

    obj2.children = { ...obj1 };

    if (i === 1) {
      return obj1;
    }

    obj1 = { ...obj2 };
  }
};

// console.log(dictionary([["and", "AND_DEFINITION"]]));
// The resulting tree should be
// [{
// 	letter: ‘a’
// 	definition: null,
// 	children: [{
// 		letter: ‘n’,
// 		definition: null,
// 		children: [{
// 			letter: d,
// 			definition: ‘AND_DEFINITION’
// 		}]
// 	}]
// }]

console.log(
  dictionary([
    ["an", "AN_DEFINITION"],
    ["and", "AND_DEFINITION"],
  ])
);

// The resulting tree should be
// [{
// 	letter: ‘a’
// 	definition: null,
// 	children: [{
// 		letter: ‘n’,
// 		definition: ‘AN_DEFINITION’,
// 		children: [{
// 			letter: d,
// 			definition: ‘AND_DEFINITION’
// 		}]
// 	}]
// }]

// console.log(
//   dictionary([
//     ["an", "AN_DEFINITION"],
//     ["and", "AND_DEFINITION"],
//     ["boat", "BOAT_DEFINITION"],
//   ])
// );
