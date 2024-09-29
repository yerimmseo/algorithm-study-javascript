function solutions(name, yearning, photo) {
  const yearningMap = {};
  const yearningScore = [];

  for (let i = 0; i < name.length; i++) {
    yearningMap[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let y = 0; y < photo[i].length; y++) {
      score += (yearningMap[photo[i][y]] || 0);
    }
    yearningScore.push(score);
  }
  
  return yearningScore;
}