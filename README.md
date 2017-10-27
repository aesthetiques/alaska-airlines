# Alaska Airlines Ticket Pricer

### Setup:
* Clone repo into local folder.
* Run `yarn install` or `npm i` in terminal to install required packages. 
* Run`touch .dev.env` in your terminal at the main directory level [same level as webpack.config.js]
  * .dev.env setup: 
      
      `API_URL='http://localhost:3000'` 
      
      `NODE_ENV=dev` 
      
      `CDN_URL=/`

* Once this is completed, and you've started the database, run `yarn watch` or `npm run watch` depending on which package manager you use.

### Notables:
This application is designed to work with a restful API that provides flight data to a user based on the search parameters. It's built using react/redux, and uses material ui and bootstrap components for some functionality.

#### In-progress functionality:
  When attempting to run a search, the built in search from material-ui is currently case-sensitive. this means that when searching for `Seattle, WA`, you actually have to use a capitol `S`. This will be fixed soon. Other than that, the app is fully functional in what the user is able to use.

  