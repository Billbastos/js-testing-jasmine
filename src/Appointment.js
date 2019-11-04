function Appointment(patient, procedures, particular, returning, date) {

  var clazz = {
    
    price: function() {
      if (returning) return 0;

      var finalPrice = 0;

      procedures.forEach(function(proc){
        if("x-ray" === proc) finalPrice += 55;
        else if("plaster" === proc) finalPrice += 32;
        else finalPrice += 25
      });

      if(particular) finalPrice *= 2;

      return finalPrice;
    },
    getPatient: function() { return patient },
    getProcedures: function() { return procedures },
    isParticular: function() { return particular },
    isReturn: function() { return returning },
    getDate: function() { return date }
  };

  return clazz;
}