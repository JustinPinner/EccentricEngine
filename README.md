# EccentricEngine
A simple engine for Javascript games

Named after the compact, lightweight [rotary engine](https://en.wikipedia.org/wiki/Wankel_engine) designed by German engineer Felix Wankel in the 1950s and developed more recently by Mazda for its RX-7 and RX-8 sports cars. Some variants have achieved a power-to-weight ratio of more than one horsepower per pound, and the design has been built into a range of vehicles and devices from chainsaws to sports cars.

So, a small, capable power plant for use in a wide range of applications. And also, why would any _normal_ person bother to roll yet another game engine?!

## Getting Started

TODO!

But in the meantime, and in the absence of any useful docs, here's my work-in-progress [astrowars](https://github.com/JustinPinner/astrowars) example of how the engine can be (ab)used.

## Versions

1.0.3
=====
* Updated dependencies
* Added a `Formatter` to the `Engine` to ease string padding / justification and lightweight date/time strings for logging
* Added a `deleteObjectById` method to`Engine` to make it easier to kill off a specific `gameObject` for whatever reason
* Export the Formatter class so you can use it in places other than via the `Engine`
* Added debugging to see what's going on inside events, timers and other engine functionality. Activate it by adding a `?debug` search param to your game url in your browser
* Added a `Logger` class that sends debug info (see above) to the browser console
* Changed the way that objects deregister their `xxx-Loaded` event - added a timed call to its `initDone` method. You now have 500ms to complete your custom initialisation code in game objects.


