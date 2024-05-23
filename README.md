# FlowrSpot
A simple react web app for flower spotting while hiking, traveling, etc. Users can check out different flowers, their details and sightings, as well as add their sightings.

## Important
Given the app requirements i have took the liberty to change some thing to improve workflows and UX.

1. Signup workflow now automatically logs in the user after they have completed the signup process
- explenation: this is something i would expect of any modern web app and wouldn't want to spend extra steps to login 
(with the exception of email validation which currently Flowrspot api doesn't support).

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
`npm run dev`

### Running tests
`npm run test`