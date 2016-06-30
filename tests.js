var sdr = require('./');
var test = require('tape');

test('it', function(t){

  t.equals(sdr.sparsity([0, 10, 20], 100), 0.03);

  t.equals(sdr.capacity(16, 1), 16);
  t.equals(sdr.capacity(16, 2), 120);
  t.equals(sdr.capacity(2048, 40), 2.3717785116453587e+84);

  t.deepEquals(sdr.intersect([1, 2], [2, 3]), [2]);

  t.deepEquals(sdr.union(
    [0, 10, 15, 30],
    [0,  5, 10, 20]),
    [0,  5, 10, 15, 20, 30]
  );

  t.deepEquals(sdr.union(
    [0, 1, 2, 3],
    [4, 5, 6, 7]),
    [0, 1, 2, 3, 4, 5, 6, 7]
  );

  t.deepEquals(sdr.union(
    [4, 5, 6, 7],
    [0, 1, 2, 3]),
    [0, 1, 2, 3, 4, 5, 6, 7]
  );

  t.deepEquals(sdr.union(
    [],
    [0, 1, 2]),
    [0, 1, 2]
  );

  t.deepEquals(sdr.union(
    [0, 1, 2],
    []),
    [0, 1, 2]
  );

  t.end();
});
