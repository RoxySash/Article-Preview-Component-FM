# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Error in CSS](./images/Screenshot%20Section%20Two%20Error.png)

In the above image the social share icons were not toggling but I figured that I needed to add the important tag and that worked.

![Desktop Version](./images/Screenshot%20Desktop%20View.png)

I am proud of this desktop version

![Desktop Version Button Active](./images/Screenshot%20Desktop%20Active%20Button.png)

### Links

- Solution URL: [GitHub Code](https://github.com/RoxySash/Article-Preview-Component-FM.git)
- Live Site URL: [Click Here](https://roxysash.github.io/Article-Preview-Component-FM/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties / Media Queries
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

I went ahead and did the html structure then added some css working my way through from top to bottom. 


### What I learned

Adding JS to this project was fun. I enjoy using vanilla javascript it gives you so much freedom. 

I went ahead and created the variable to get the class or selector. Afterwhich i created a function which does x and created an event listener for the button click. 

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.share-circle {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: var(--light-blue-color);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.share-circle::after {
  position: absolute;
  z-index: 0;
  display: block;
}
```

- I learned how to toggle the visibility of elements with JS
- Using `z-index` yet again was fun along with `position` and display to hide or show sections
- Applying `!important` to override the stubborn classes such as hidden
- Debugging the event listener and class logic

```js
shareBtns.forEach(btn => {

// add click event listener 
btn.addEventListener("click", () => {
 shareSectionOne.classList.toggle("hidden");
  shareSectionTwo.classList.toggle("hidden");
});
 
});
```

### Continued development

- Changing svg colors 
- JS targeting
- Adding ARIA accessibility support 
- Improve theme toggling 


## Author

- Frontend Mentor - [@RoxySash](https://www.frontendmentor.io/profile/yourusername)
- Blusky - [@roxanedev.bsky.social](https://bsky.app/profile/roxanedev.bsky.social)



