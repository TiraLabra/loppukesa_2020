---
layout: info
title:  "FAQ"
categories: jekyll update
tag: info
permalink: /en/faq/
---

## May I use library "X" in my tests?

Yes.

## May I use library "Y" for making my UI?

Yes.

You should make sure that there is a clear divide between the UI and the actual project code and leave the UI out of the test coverage reports.

## May I use library "Z" to read / write files?

Yes.

You should "hide" the use of the library in your own "I/O" class, and have the only import for "Z" there.

## May I use java interfaces?

Yes. In many cases this is not very practical.

For example, the java `List` interface contains many features not often needed in *your* implementation. Additionally `List` defines a generic data structure, which in java means that an implementation that is based on `List` is unlikely to ever be as fast as an implementation hard coded for integers. (Unless the `List` implementation contains code for specificly handling integers.)

## Do data strutures need to be generic?

No.

## Are the "functional" java features (streams) allowed?

Possibly.

However these are often so slow compared to the alternatives as to be impractical in project work where performance is a priority.

Of course these are perfectly fine in tests and user interface code.

## Is using functions / methods from the `String` class allowed?

The `length()` functions essentially has to be allowed.

Others that are allowed are at least `charAt()`, `toCharArray()`, `getBytes()`, `equals()`.

Generally more complex functions are not allowed as these hide non-trivial functionality. Ask if unsure.

Of course all string member functions are fine in the usere interface.

## Is using `System.arraycopy` allowed?

See below.

## Is using functions / methods from the `Arrays` class allowed?

in principle, no. However, for example, copying arrays without using `System.arraycopy` may be slow enough to become a bottle neck in the code, witch is not practical. In this case, you should document the performance difference and use built in functions.

This may apply to member of `Arrays` as well.

Sorting using standard library functions is not allowed, except in test and user interface code.

## May I use the java `Random` class?

Not really. 

A few random numbers can easily be generated for example with the `System.nanotime() % n` -code. And for applications where a lot of random numbers are needed, something like a "[Mersenne twister](https://en.wikipedia.org/wiki/Mersenne_Twister)" is not that hard to implement.

Generally leaving some code using the random from java in the final product won't be that bad especially if the reason is well documented.

## May I use the `Math` functions in java?

Sort of no. But depending on the case it may be almost required.

* `n = min(a, b);` is the same as `n = a < b ? a : b;`. So there is really no reason to use `Math`.
* `n = max(a, b);` is the same as `n = a > b ? a : b;`. So there is really no reason to use `Math`.
* `n = abs(n);` is the same as `n = n > 0 ? n : -n;`. So there is really no reason to use `Math`.
* `Math.Pi` is essentially a constant, so no real reason to separately import unless `Math` is already available.
* **Logarithms** are practically impossible to implementa as efficiently as the java standard library. The optimum would be to implement your own version and test how much worse it is, and the use `Math` in the final product if  the difference in speed is significant. (Mention this in documentation.)
* **Square roots** are ery similar to logarithms in this case.
* **Sin**, **Cos**, **Tan**. Trigonometric functions work the same as logarithm and square roots.

## What is the easiest topic for passing / getting grade 5?

This is very personal. Different people find different things challenging.

Typically comparing path finding algorithms, compression algorithms and map generators have been some of the easier projects.

* Pathfinding using the 2d maps from [Movin ai labs](https://movingai.com/benchmarks/grids.html), Using BFS and/or Dijkstra as well as A* shuold pass. Adding JPS should get a 5 with a good project.
* Huffman or some LZ compression should pass. Implementing both (or adding something else) is likely to get a 5.
* Generating dungeons or maps with a few different algorithms should pretty easily pass, and is fairly easy to expand to something that should be worhty of grade 5.

You should discuss with a course assistant.

## Can the project be done in C/C++/Rust/Fortran...?

Testing and test coverage generation for low level languages can be challenging. This is not recommended unless you are very well versed in the language and prepared to figure out how the test coverage can be made available for example in Codecov.

You may not be able to get points for code reviews.

In any case you should discuss with a course assistant *before the first deadline*!

## Can the project be done in Python?

This may even be recommended for some very challenging topics. For example in neural network projects, it is typically a good idea to use the ready made linear algebra functions in numpy, even in the final product. The standard list/set/dict implementations are typically not practical to replace, so the project should be sufficiently challenging even with these given.

In either case, this is not recommended unless you are very familiar with python (including resting and code coverage reporting).

You may not be able to get points for code reviews.

In any case you should discuss with a course assistant *before the first deadline*!

## Can the project be done in JavaScript?

JS seems to work surprisingly well for data structure and algorithm projects. However, you should be familiar with writing, testing and test coverage reporting in JS should be familiar from before.

You may not be able to get points for code reviews.

In any case you should discuss with a course assistant *before the first deadline*!

## Can the project be done in Pascal/APL/ADA/Piet/PHP/...?

Not recommended. You can ask a course assistant *before the first deadline*!

## What should be unit tested?

Everything except the user interface, performance tests and possibly file input and output depending on the project.

## What should the test coverage be in percent?

There is no set percentage for a reason. It is very possible to have a 100% coverage for badly tested code, and conversely to have 50% coverage for very well tested code. Generally tho, the higher - the better.

It's a good idea to write as many, as small unit tests as possible. The idea being that, any bug in the code triggers at least one test and the bug should be easy to find based on the failing test(s).

## Where should performance tests be?

You shouldn't run performance tests as part of unit testing. If running the unit tests takes several minutes, you will probably not run the tests often enough. Conversely if the perfomrance tests take under a minute to run, they are likely not very comprehensive.

So you should make a separate package for performance tests. See: [example project](https://github.com/TiraLabra/Testing-and-rmq/tree/master/src/main/java/rmq/util).
