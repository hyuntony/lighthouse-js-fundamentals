const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == trash) {
      bins[trash] += 1;
      return bins;
    }
  }
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));