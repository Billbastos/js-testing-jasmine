function PatientBuilder() {

  var _name = 'Guilherme', _age = 42, _weight = 86, _height = 1.76
  
  var clazz = {
    build:  function() {
      return new Patient(_name, _age, _weight, _height);
    },
    withAge: function(age) {
      _age = age;
      return this;
    },
    withWeight: function(weight) {
      _weight = weight;
      return this;
    },   
    withHeight: function(height) {
      _height = height;
      return this;
    }
  }

  return clazz;
}