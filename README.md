## Sensors Network

This system to monitor a network of sensors distributed in a grid. Each sensor reports temperature data, but due to failures, some sensors do not report. The task is to identify the "stable zones": groups of connected sensors that meet certain conditions.

### Inputs

- A file or string representing an NxM grid, where each cell can be:
    - An integer representing the temperature of that sensor
    - "X" if the sensor is down
- A number T that represents the **stability threshold**: a zone is stable if all connected sensors (up, down, left, right) have **absolute temperature differences less than or equal to T**.

### Objectives

1. Detects all stable zones in the grid
2. Returns the total number of stable zones found
3. For each zone, returns:
    - Its size (number of sensors)
    - Its average temperature (rounded to 2 decimals)

## Table of Contents

- [Sensors Network](#sensors-network)
  - [Inputs](#inputs)
  - [Objectives](#objectives)
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Main commands](#main-commands)
- [Contact](#contact)

## Overview

This is a React project bootstrapped with [vite](https://vite.dev/).

## Installation

- node: **v22.12.0**
- npm: **v10.9.0**

1. Install every package inside the package.json

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) with your browser to see the application.

## Usage

### Main commands

- With `npm run dev` starts the application in test mode.

- With `npm run build` generate an optimized production build

- With `npm run lint` runs ESLint for all files in the `/src` directory
  
- With `npm run test` run unit tests in the folder `/tests`

## Contact

- Mail: [gonzalojusid@gmail.com](gonzalojusid@gmail.com)
- Linkedin: [https://www.linkedin.com/in/gonzalojusid/](https://www.linkedin.com/in/gonzalojusid/)

[⬆ Back to Top](#sensors-network)
