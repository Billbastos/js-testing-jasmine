function Patient(name, age, weight, height) {

  var clazz = {
    print: function() {
      console.log(name + " has " + age + " years.");
    },
    beats: function(){
      return age * 365 * 24 * 60 * 80;
    },
    imc: function(){
      return weight / (height * height);
    }
  }

  return clazz;
}
