class ArrayStats {

  average (values) {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
  }

  median(values) {
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
  }

  min(values) {
    return values.reduce((min, val) => val < min ? val : min, values[0]);
  }

  max(values) {
    return values.reduce((max, val) => val > max ? val : max, values[0]);
  }

}

module.exports = ArrayStats;