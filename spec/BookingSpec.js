describe('Booking', function(){
  
  var gui;
  var agenda;

  beforeEach(function(){
    gui = new PatientBuilder().build();
    agenda = new Booking();
  });
  
  it ('should book an appointment 20 days after', function(){
    var apptmt = new Appointment(gui,[],false,false,new Date(2019, 10, 1));
    var newAppointment = agenda.for(apptmt);

    expect(newAppointment.getDate().toString()).toEqual(new Date(2019, 10, 21).toString());
  });

  it ('should book an appointment only on weekdays', function(){
    var apptmt = new Appointment(gui,[],false,false,new Date(2019, 9, 27));
    var newAppointment = agenda.for(apptmt);

    expect(newAppointment.getDate().toString()).toEqual(new Date(2019, 10, 18).toString());
  });
});