function Booking() {
 
  var clazz = {

    for: function(appointment){
      var newDate = new Date(appointment.getDate().getTime());
      newDate.setDate(appointment.getDate().getDate() + 20);
      while(newDate.getDay() === 6 || newDate.getDay() === 0) newDate.setDate(newDate.getDate() + 1);
      return new Appointment(appointment.getPatient(), appointment.getProcedures(), appointment.isParticular(), appointment.isReturn(), newDate)
    } 
  }

  return clazz;
}