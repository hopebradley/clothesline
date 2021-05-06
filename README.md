# ClothesLine

ClothesLine is a simulated clothing store application that includes features like adding items to your cart, checking out your cart, viewing your owned items in your closet, returning items, and adding new items to the line.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Opening The App

Inside the app directory, run:

### 'json-server --watch db.json --port 3001'
so that the app has access to the clothing database.

To open the app in the browser, run
### `yarn start`
and then go to [http://localhost:3000](http://localhost:3000).

## Use

When ClothesLine loads on the home page, there is a line with five items on it (the maximum that can be shown at a time). 

If you want to add the item to your cart, click the Add To Cart button and the item will leave the line and move into your cart. If you don't like the item, clicking "Not Interested" will simply remove the item from view and move a new item into its place as needed. 

When you want to check out your cart, navigate to the cart page using the navigation bar and click the "Check Out" button. If you don't have enough money to afford the total cost, you will have to remove items to check out successfully. When you have enough money to check out, it will be successful and the items in your cart will move to your closet. 

To view your closet, navigate to the closet page and your purchased items will be listed there. If you want to return an item, click the Return Item link and you will be taken to the page to that specific item where you can choose to either return the item or go back to your closet. If you decide to return it, the item will return to the clothesline and the money will return to your account.

To add a new item to the clothesline, navigate to the "Sell An Item" page and fill out the form with the information of your item. When you click submit, your item will be added to the line and you can view it on the home page. You cannot add your own item to your cart, but you can click "Not Interested" if you don't want to see it on the line.

## Contact Me:

Hope Bradley
<br>
Email: hope.e.bradley@gmail.com
<br>
LinkedIn: https://www.linkedin.com/in/hopebradl3y/
<br>
Blog: <a href="https://hopebradley.com">hopebradley.com</a>