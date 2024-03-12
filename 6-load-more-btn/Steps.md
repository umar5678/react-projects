#### Overview

When page load, it displays some dummy products, at last of the page there is a load more button. When clicked it displayes more products

- For this functionality we use a dummyjson api endpint
- this api provides some functioalities, we can set limit of products, number of prooducts we want to get, skip, and select based on desired scenerio

### set up project

### Working on **LoadMoreBtn.jsx**

- declear state variables for

  - loading
  - products array
  - count

- Make an async `fetchProducts` method to call api
- api url: `https://dummyjson.com/products?limt=10&skip=10`
- we can set limt and also skip items
- when we first call the api, we recive 10 products, and we set the state of products as an array of 10 products
- we set the state of count as 1
- next time , we will skip 10 products and get 10 more products, and we will add them to the products array
- how we do: writing skip logic in the url: if the count is 0, the skipping is 0, otherwise it is 10 \* count
- multipling the count by 10 will give us the number of products we want to skip

```js
`https://dummyjson.com/products?limt=10&skip=${count === 0 ? 0 : count * 10}`;
```

- make a const result to store response from the api

- - run fetchProduct when page loads using useEffect

then

- check is result, results.products, and result.products.lenght is true , then set the state of products as result.products

- set loading true before calling api
- set loading false after data is reicved, or if there is any error

- Write Jsx to display products, write rendring logic etc
- make load more button , and set onClick `onClick={() => setCount(count + 1)}` incrememt count by one
- then update the setProducts, destructure the products array from the state and add more data along with prevoius data
  `setProducts((prev) => [...prev, ...result.products]);`

  ### Problem

  - Use Strict causes rendering two time of component
  - first it mount the component , and set the state of products array
  - when it renders 2nd time it over write the state of products array
  - that was causing problem, i was reciving 30 products instead of 10 products

  - so , i disabled strict mode
  - problem resolved!
