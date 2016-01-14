describe('tillTechTestController', function() {
  beforeEach(module('TillTechTest'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TillTechTestController');
  }));

  it('initialises with an empty search tableNames and tableNumber', function() {
    expect(ctrl.tableNames).toBeUndefined();
    expect(ctrl.tableNumber).toBeUndefined();
  });
});