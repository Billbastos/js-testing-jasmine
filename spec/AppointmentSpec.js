describe('Appointment', function(){

  var guilherme;
  beforeEach(function(){
    guilherme = new PatientBuilder().withAge(32).build();
  })

  describe('Is return', function(){
    it('should not change return', function(){
      var appointment = new Appointment(guilherme, [], true, true);
      expect(appointment.price()).toEqual(0);
    }) ;
  })

  describe('Particular appointments', function(){
    it('Should charge 2 times if particular', function(){
      var appointment = new Appointment(guilherme, ["proc","x-ray","proc-2","plaster"], true, false);
      expect(appointment.price()).toEqual((25 + 55 + 25 + 32) * 2);
    }) ;
  })

  describe('Appointments not particular', function(){
    it('Should charge 25 for each regular procedure', function(){
      var appointment = new Appointment(guilherme, ["ECG","Blood test"], false, false);
      expect(appointment.price()).toEqual(50);
    }) ;
    it('should charge specific price depending on procedure type', function(){
      var appointment = new Appointment(guilherme, ["proc","x-ray","proc-2","plaster"], false, false);
      expect(appointment.price()).toEqual(25 + 55 + 25 + 32);
    }) ;
  })


})