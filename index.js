var factorialStop = function(n, stop){
  if(n === stop){
    return 1;
  }
  return n * factorialStop(n - 1, stop);
};

var sdr = {};

sdr.sparsity = function(arr, n){
  return arr.length / n;
};

sdr.capacity = function(n, w){
  return factorialStop(n, n - w) / factorialStop(w, 1);
};

sdr.intersect = function(a, b){
  var u = [];
  var curv = -1;
  var i = 0;
  var j = 0;
  while(true){
    while(a[i] <= curv && (i < a.length)){
      i++;
    }
    while(b[j] <= curv && (j < b.length)){
      j++;
    }
    if(!(i < a.length) || !(j < b.length)){
      break;
    }
    if(a[i] <= b[j]){
      if(a[i] === b[j]){
        u.push(a[i]);
      }
      curv = a[i];
    }else{
      curv = b[j];
    }
  }
  return u;
};

sdr.union = function(a, b){
  var u = [];
  var curv = -1;
  var i = 0;
  var j = 0;
  while(true){
    while(a[i] <= curv && (i < a.length)){
      i++;
    }
    while(b[j] <= curv && (j < b.length)){
      j++;
    }
    if(!(i < a.length) || !(j < b.length)){
      break;
    }
    if(a[i] <= b[j]){
      u.push(a[i]);
      curv = a[i];
    }else{
      u.push(b[j]);
      curv = b[j];
    }
  }
  while(i < a.length){
    u.push(a[i]);
    i++;
  }
  while(j < b.length){
    u.push(b[j]);
    j++;
  }
  return u;
};

module.exports = sdr;
