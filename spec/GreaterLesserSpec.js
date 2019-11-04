describe('GreterLesser', function(){

  it('should accept any elements order', function(){
    var greaterLesser = new GreaterLesser();
    greaterLesser.find([15,6,4,22,1])
    expect(greaterLesser.getLesser()).toEqual(1);
    expect(greaterLesser.getGreater()).toEqual(22);
  });

  it('should accept elements in ascending order', function(){
    var greaterLesser = new GreaterLesser();
    greaterLesser.find([1,2,3,4,5])
    expect(greaterLesser.getLesser()).toEqual(1);
    expect(greaterLesser.getGreater()).toEqual(5);
  });

  it('should accept elements in descending order', function(){
    var greaterLesser = new GreaterLesser();
    greaterLesser.find([10,6,3,0])
    expect(greaterLesser.getLesser()).toEqual(0);
    expect(greaterLesser.getGreater()).toEqual(10);
  }); 
})