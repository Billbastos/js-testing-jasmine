describe('Patient', function(){

  it('should calc the imc', function(){
    var patient = new Patient('Gui', 43, 86, 1.76);
    expect(patient.imc()).toEqual(86 / (1.76 * 1.76));
  }) 
})