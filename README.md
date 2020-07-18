# Caution: 2.0.0 is not stable
This branch is a work in progress and currently far from usable. Please use one of the 1.x branches instead.

# EccentricEngine
A simple engine for Javascript games

Named after the compact, lightweight [rotary engine](https://en.wikipedia.org/wiki/Wankel_engine) designed by German engineer Felix Wankel in the 1950s and developed more recently by Mazda for its RX-7 and RX-8 sports cars. Some variants have achieved a power-to-weight ratio of more than one horsepower per pound, and the design has been built into a range of vehicles and devices from chainsaws to sports cars.

So, a small, capable power plant for use in a wide range of applications. And also, why would any _normal_ person bother to roll yet another game engine?!

## Getting Started

TODO!

But in the meantime, and in the absence of any useful docs, here's my work-in-progress [astrowars](https://github.com/JustinPinner/astrowars) example of how the engine can be (ab)used.

There's also a fledgling [EccentricEngineDemos repo here](https://github.com/JustinPinner/EccentricEngineDemos) to which I'll add other demos as I make them.

## Versions
1.0.5
=====
* Swap requestAnimationFrame around in Engine `start` & `tick`

1.1.0
=====
* A potentially significant update in preparation for migrating Elite Arcade over to this engine
* Renamed `lib/2d.js` to `lib/lib2d.js`
* 2D maths functions are now exposed through a Math2D object and any imports and calls of those functions in user code will need to be updated. E.g. `angleBetween(x1, y1, x2, y2)` should now be referenced via `Math2D.angleBetween(x1, y1, x2, y2)`
* Renamed `Coordinate` as `Coordinate2D` and relocated into `lib2d.js`
* Renamed `lib/3d.js` to `lib/lib3d.js`
* Renamed `Coordinate3d` as `Coordinate3D` and relocated into `lib3d.js`
* Similarly renamed `Coordinates3d` as `Coordinates3D` and moved into `lib3d.js`

1.0.3
=====
* Updated dependencies
* Added a `Formatter` to the `Engine` to ease string padding / justification and lightweight date/time strings for logging
* Added a `deleteObjectById` method to`Engine` to make it easier to kill off a specific `gameObject` for whatever reason
* Export the Formatter class so you can use it in places other than via the `Engine`
* Added debugging to see what's going on inside events, timers and other engine functionality. Activate it by adding a `?debug` search param to your game url in your browser
* Added a `Logger` class that sends debug info (see above) to the browser console
* Changed the way that objects deregister their `xxx-Loaded` event - added a timed call to its `initDone` method. You now have 500ms to complete your custom initialisation code in game objects.

2.0.0
=====
* Conversion to typescript

