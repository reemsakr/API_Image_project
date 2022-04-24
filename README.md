# API_Image_project
## Getting Started

This repo contains a basic resize for image app in Typescript in an API.


## Prerequisites Technologies

Your must install the following in order to use the project:
- [Node & NPM](https://nodejs.org/en/download/)
- [Typescript](https://www.npmjs.com/package/typescript) (install it globally)
- [Jasmine](https://www.npmjs.com/package/jasmine)

## Setup Steps
To get started:

1-Download the zip file locally.

2-using `cd` command.

3-install all dependencies using npm.

#### Runing the program locally in development mode

  `npm run start`

-and then head to your browser at `localhost:3000` and it should be working.

#### Runing the program locally in production mode

  `npm run build`
  
  `node dist/index.js`

#### Test the app

    npm run test
 
#### Code formating 

I'm using prettier and eslint

    npm run prettier

    npm run lint

### Available images 
•	encenadaport
•	fjord
•	icelandwaterfall
•	palmtunnel
•	santamonica

### Examples

1)`Localhost:5000/api/images?imageName=fjord&hight=100&width=100`

(retrieve the image with hight=100 and width=100 which name fjord_100_100)

2)`Localhost:5000/api/images?imageName=fjod&hight=100&width=100`

(retrieve the message “image is not found ,please enter the right name“)

3)`Localhost:5000/api/images?imageName=fjord&hight=j&width=100`

(retrieve the message “please enter a valid size“)

4)`Localhost:5000/api/images?imageName=fjord&hight=100`

(retrieve the message" sorry there is a missing parameter")
