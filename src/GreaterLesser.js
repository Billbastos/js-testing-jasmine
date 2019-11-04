function GreaterLesser() {
  var greater = Number.MIN_VALUE;
  var lesser = Number.MAX_VALUE;

  var clazz = {
    find: function(numbers) {
      numbers.forEach(element => {
        if(element < lesser) lesser = element;
        if(element > greater) greater = element;
      });
    },
    getGreater: function() {
      return greater;
    },
    getLesser: function() {
      return lesser;
    }
  }

  return clazz;
}