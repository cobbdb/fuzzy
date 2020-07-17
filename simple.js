const FuzzySet = require('fuzzyset');

exports.score = ({ script: scriptSections, transcript, useLevenshtein, gramSizeLower, gramSizeUpper, chunkSize }) => {
  const set = FuzzySet(scriptSections, useLevenshtein, gramSizeLower, gramSizeUpper);

  const script = set.values();
  const words = transcript.split(' ');
  const scores = [];

  for (let i = 0; i < words.length; i += 1) {
    const lead = Math.min(chunkSize, words.length - i);
    const slice = words.slice(i, i + lead);
    const chunk = slice.join(' ');

    const res = set.get(chunk, null, 0) || [];
    res.forEach(([score, section]) => {
      const index = script.findIndex((_section) => _section === section);
      for (let j = 0; j < slice.length; j += 1) {
        scores[i + j] = scores[i + j] || [];
        scores[i + j].push({ index, score });
      }
    });
  }

  return scores.map((word, i) => {
    const tally = [];
    word.forEach(({ index, score }) => {
      tally[index] = tally[index] || { sum: 0, len: 0 };
      tally[index].sum += score;
      tally[index].len += 1;
    });
    const distilled = tally.map(({ sum, len }) => sum / len);

    let max = 0;
    let index = 0;
    distilled.forEach((score, j) => {
      if (score > max) {
        max = score;
        index = j;
      }
    });

    return { index, word: words[i] };
  });
};
