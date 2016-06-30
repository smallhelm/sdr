# sdr

[![build status](https://secure.travis-ci.org/smallhelm/sdr.svg)](https://travis-ci.org/smallhelm/sdr)

Functions for working with [Sparse Distributed Representation](https://github.com/numenta/nupic/wiki/Sparse-Distributed-Representations)

> one of biggest problems in AI
> --no, the only problem in AI--
> is the problem of representation
So said a [retiring AI researcher](https://youtu.be/A8sHMcCk0lU?t=9m51s)

If you don't know what SDRs are, you should go learn about them. [numenta.org](http://numenta.org) Or watch [these videos](https://www.youtube.com/playlist?list=PL3yXMgtrZmDqhsFQzwUC9V8MeeVOQ7eZ9) for an easy to follow introduction.

## Usage

Your SDR arrays are always assumed to be in order from least to greatest. The functions use this assumption to optimize performance.

```js
var sdr = require('sdr');

sdr.union(
  [0, 10, 15, 30],
  [0,  5, 10, 20]
);
//-> [0, 5, 10, 15, 20, 30]

sdr.intersect(
  [1, 2],
  [2, 3]
);
//-> [2]

sdr.sparsity([0, 10, 20], 100);
//-> 0.03

sdr.capacity(2048, 40);
//-> 2.3717785116453587e+84
```

## License
MIT
