export const generateWordListFromRememberry = words => {
  let pages = [];
  let wordsPackage = [];
  let wordsPackageTranslation = [];
  words.forEach((word, index) => {
    if (index % 40 === 0) {
      if (wordsPackage.length > 0) {
        pages.push(wordsPackage);
        pages.push(wordsPackageTranslation);
      }
      wordsPackage = [];
      wordsPackageTranslation = [];
    } else {
      if (words.length === index + 1) {
        pages.push(wordsPackage);
        pages.push(wordsPackageTranslation);
      }
    }
    wordsPackage.push(word[1].o);
    wordsPackageTranslation.push(word[1].t.join(", "));
  });

  return pages;
};

export const generateFromArray = words => {
  let pages = [];
  let wordsPackage = [];
  let wordsPackageTranslation = [];
  words.forEach((word, index) => {
    if (index % 40 === 0) {
      if (wordsPackage.length > 0) {
        pages.push(wordsPackage);
        pages.push(wordsPackageTranslation);
      }
      wordsPackage = [];
      wordsPackageTranslation = [];
    } else {
      if (words.length === index + 1) {
        pages.push(wordsPackage);
        pages.push(wordsPackageTranslation);
      }
    }
    wordsPackage.push(word.en.join(", "));
    wordsPackageTranslation.push(word.pl);
  });

  return pages;
};
