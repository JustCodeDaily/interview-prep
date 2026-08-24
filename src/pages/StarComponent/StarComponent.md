# Star Component

## Problem Statement

Build a reusable Star Rating component in React. 

### Requirements:
1. Accept `maxStars` prop to define how many stars to show (default to 5).
2. Accept `rating` prop to define the initial rating.
3. Accept `onChange` callback that is called with the new rating when a star is clicked.
4. Support hover states (highlighting stars up to the hovered one).
5. Must be accessible (usable via keyboard).

## Example Usage
```jsx
<StarRating maxStars={5} rating={3} onChange={(newRating) => console.log(newRating)} />
```
