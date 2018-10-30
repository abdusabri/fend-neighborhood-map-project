# Neighborhood Map App

## Project Summary

This is the 7th project as part of my Front-End Web Development Nanodegree. It is a React web app for a neighborhood map (Berlin, Germany) with some interesting locations/places to visit. The app can be used [here](https://abdusabri.github.io/fend-neighborhood-map-project/)

## Technical Implementation Notes

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- Locations list are loaded from a local JSON file

- Locations can be filtered through a text input field, and they are always synced between the map and the list view. Filtering is done as the user types (with a 200 millisecond delay)

- Clicking on a location from the list view or on a map marker displays a popup with additional info on the location. The selected location is styled differently - both in the list view and on the map - to make it clear to the user which location is selected

- The app has url/paths management implemented, so the user can go backward and forward through the browser's navigation history. Also, entering the direct url/path of a location pre-selects it and shows its popup

- The app is responsive, follows recommended accessibility practices, and is usable with a keyboard

- It is also a progressive web app that can be used offline, using the default service worker implementation and behavior from Create React App

- The app uses [Mapbox](https://www.mapbox.com/) and data from [OpenStreetMap](https://www.openstreetmap.org/). Additional location info is from [Foursquare](https://developer.foursquare.com/)

## To run the app locally

Clone the repo, or download a zipped version, then unzip it. After that, navigate to the directory, open a shell window, and do the following:

- Install all project dependencies with `npm install`
- Start the development server with `npm start`

For more details and explanations, refer to the documentation from Create React App [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Used libraries and dependencies

- [bootstrap](https://www.npmjs.com/package/bootstrap)

- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)

- [gh-pages](https://www.npmjs.com/package/gh-pages)

- [jquery](https://www.npmjs.com/package/jquery)

- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)

- [popper.js](https://www.npmjs.com/package/popper.js)

- [react](https://www.npmjs.com/package/react)

- [react-dom](https://www.npmjs.com/package/react-dom)

- [react-foursquare](https://www.npmjs.com/package/react-foursquare)

- [react-icons](https://www.npmjs.com/package/react-icons)

- [react-map-gl](https://www.npmjs.com/package/react-map-gl)

- [react-router](https://www.npmjs.com/package/react-router)

- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

- [react-scripts](https://www.npmjs.com/package/react-scripts)

- [react-sidebar](https://www.npmjs.com/package/react-sidebar)

- [resize-observer-polyfill](https://www.npmjs.com/package/resize-observer-polyfill)

## References and Credits

Following are some articles, links, and tools that were very helpful for me while completing the project work:

- [Web Accessibility Checklist](https://a11yproject.com/checklist)

- A sidebar component for React. [Eaxmples](http://balloob.github.io/react-sidebar/example/), [Repo](https://github.com/balloob/react-sidebar)

- React-Map-GL by Uber, which is a wrapper for Mapbox JS library. [Website](https://uber.github.io/react-map-gl/#/)

- [How to use bootstrap with react](https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121)

- [Material Design icons](https://react-icons.netlify.com/#/icons/md) for React-Icons package

- Resize Observer. [Discussion on Stack Overflow](https://stackoverflow.com/questions/6492683/how-to-detect-divs-dimension-changed), [Polyfill](https://github.com/que-etc/resize-observer-polyfill)

- [CSS Loader on W3Schools](https://www.w3schools.com/howto/howto_css_loader.asp)

- [Cloudimage](https://cloudimage.io/). Used to display a default missing image indicator in case no photo is retrieved from Foursquare's API

- RegEx tools [regex101.com](https://regex101.com/), [regexr.com](https://regexr.com/)

- Guide for React Router [reacttraining.com](https://reacttraining.com/react-router/web/guides/quick-start)

- Changing map cursor for React-Map-GL [Issue on GitHub](https://github.com/uber/react-map-gl/issues/579)

- Deep JS object equality [mattzeunert.com](http://www.mattzeunert.com/2016/01/28/javascript-deep-equal.html)

- [Single Page Apps for GitHub Pages](https://github.com/rafrex/spa-github-pages)