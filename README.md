# Vite Multi Step app

This is a frontend project built with Vite, React, Zustand and TailwindCSS

## Getting Started

#### Use docker Compose

:lion: Run the development server:

```bash
# Install dependencies
yarn install
# Run the app
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## See in action

:rocket: Check it out on https://react-multistep.netlify.app/

:round_pushpin: It renders a demo static front-end that shows a multi-step app to collect user information

:round_pushpin: The front-end is deployed on [Netlify](https://www.netlify.com/)

## Preview

https://github.com/lvidal1/react-vite-multistep/assets/6495076/6f96a6c5-6c21-458b-b04b-fa46059f0480

## Features

:newspaper: The UI shows a multi step journey where on different steps the user will be able to fill in his/her information.

:newspaper: Each page form is using `React Hook Form` to help the UI to validate and collect each piece of information.

:newspaper: The UI is connected to a `Zustand` store to manage state across different pages & component.

:newspaper: The collected information is persisted on `localstorage` so the user can resume the journey if the window is closed.

:newspaper: The UI retrieves countries information from an public file as if it were a `simulated API` endpoint to populate options on a custom select. Link: https://react-multistep.netlify.app/countries.json

:newspaper: The user can move back to any previous step using the `step navigation list`.

:newspaper: The user can review the collected information on the final step.

:newspaper: The user can try the journey again if the final step has been completed.

## Stack

:heavy_check_mark: Vite "^4.3.2"

:heavy_check_mark: React "^18.2.0",

:heavy_check_mark: Zustand "^4.3.8"

:heavy_check_mark: Tailwind "^5.0.1". Purging css at build stage.

:heavy_check_mark: Jest 27.1.1
