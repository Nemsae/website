<div align="center"><img src="public/images/rixi_banner.jpg" alt="rixi website banner" align="center" /></div>

<br />

<div align="center"><strong>Personal website for Rixi</strong></div>

<br />

## Bugs

1. .route-fade-enter
.route-fade-enter-active
.route-fade-enter-done
enter fade timeout does work,
hover exit fade timeout does not trigger at all.
1. Issue with Routes being re rendered, because of the link hovering capture fxn. `this.state.hoveredLocation` is changing.

## SQUASHED Bugs
1 . captureHoveredLocation
```
//  BUG: issue with onMouseOver being triggered multiple times. Issue is most likely the event handler intereacting with child elements triggering it.
//  resetHoveredLocation was being called because the mouse "left" from parent to inner child.
//  Solution: use mouseEnter and mouseLeave instead of mouseHover and mouseOut

//  BUG: issue with onMouseOver being triggered first on child element. Hence `location` is "" because no id.
//  if event fires from child, check parent div for id then.
//  Solution: instead of setting location from "id", pass as an argument and bind in render.
```

## Todos

1. Host on S3
2. `cd react-boilerplate`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*


<div align="center">
  <sub>Created by and maintained with ❤️ by <a href="https://github.com/Nemsae">John Son</a>.</sub>
</div>

<br />

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, `styled-components`, redux-saga, FontFaceObserver</i></sub>

<br />

<div align="center">
  <sub>Bootstrapped with Max Stoiber's <a href="https://github.com/react-boilerplate/react-boilerplate">React Boilerplate</a></sub>
</div>
