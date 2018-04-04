//Ex2
/*
1. setTimeout() has extra process to initialize system timer. When we need to timeout
   immediately, it's faster to call setImmediate() instead.
2. processNextTick() will push the process into a prority queue which is not part of event loop. 
    thus executes first timer is initialized.
3. Array, Boolean, Date, Error, EvalError, Function, Infinity, JSON, Math, NaN
*/