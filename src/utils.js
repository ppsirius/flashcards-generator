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
    }
    wordsPackage.push(word[1].o);
    wordsPackageTranslation.push(word[1].t.join(", "));
  });

  return pages;
};
