# FlowrSpot
A simple react web app for flower spotting while hiking, traveling, etc. Users can check out different flowers, their details and sightings, as well as add their sightings.

## Important
Given the app requirements i have took the liberty to change some thing to improve workflows and UX.

1. Signup workflow now automatically logs in the user after they have completed the signup process
- explenation: this is something i would expect of any modern web app and wouldn't want to spend extra steps to login 
(with the exception of email validation which currently Flowrspot api doesn't support).
2. Added infinite scroll to the Flower listing component as it helps with the overall UX (and was faily simple to implement)

### Tech stack:
- React
- Vite

#### Additional Libraries
- React hook form
- Lodash
- Axios
- TailwindCSS
- {...other}

### How to run

Go into the root folder of the project and run via terminal either of the two commands.
- Method 1 (when actively developing, is slower):
1. `npm run dev`

- Method 2 (prefered):
1. `npm run build`
2. `npm run preview`

### Running tests
`npm run test`

* Note about test: if tests fail wiht an error message such as "HTMLCanvasElement.prototype.getContext" just re-run the test and they should all pass. This is a bug with the npm package `canvas`.