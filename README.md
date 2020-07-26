# webGearsTask

This is a coding challange for WebGears.
This task is frontend challange in React.

You can access the demo page [here](http://saransh-dhama.github.io/webGearsTask).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# About This Task
## Theme and design
I am aware that the UI/design and theme of the application holds no significance for the evaluator, still I chose to create one as personal preference.
For styling the application, I used 'styled-components' as they provide a very easy and highly modular way to style a React app.

All the theme variables are stored in './src/utils/theme/themeConstants.js' and various components can access these variable through themeprovider.
With this approach, all the colors and theme elements can be updated from one place. A single source of truth for the theme.

## State management
useContext along with useReducer provide for a very simple solution for global state managment. useContext provides a medium for components to access the global state while useReducer enables having a simple store along with a reducer which manages various actions that can be dispatched from any component as and when needed.

The code used for setting up state management is a simple boilerplate code.

The layout component accesses the global state and passes it down to its children, i.e. the three grid coloumns elements.
In turn, child components call individual actions from the store on their own and dispacth them as per their requirements.

Along with this, useState was used for internal state managment for some components. 

Together useContext, useReducer and useState make up a very simple and elegant solution that can be used in place of Redux for state managemnt.

## Features implemented
As per the task requirements, the app follows a three-column layout:
1. List of Products
2. Shopping Cart
3. Inventory

Each product has: 1. Image, 2. Title, 3. Description 4. Price. 

Users can add desired products to the shopping cart by clicking on “Add to Order” button.

Shopping cart shows all the items selected along with there details -title, quantity, price and option to remove from cart.

I added an extra feature to remove a single item if multiple ones of a given product are present. The cart also shows the grand total.

In the inventory collumn, users can added new products or update exsisting products (bonus task) or remove a product completely.
As the update function works on keyup I chose to debounce the behaviour so as to reduce the amount of function calls made. The _.debounce function ensures that the actual onChange event is called only when the user has stopped inputting the characters for 300ms.

