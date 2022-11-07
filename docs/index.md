# Welcome to the docs

[[toc]]

## Markdown Guide

You can find the markdown guide [here](https://vitepress.vuejs.org/guide/markdown).

## This is a Section

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus lacus sed velit ornare, at tincidunt dolor pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

::: tip
You can highlight code blocks, wow so cool!
:::

```javascript{3-5}
this.setUserFeedbackAccuracy(this.userResponse, 1)
  .then(() => {
    this.$mixpanel.track("Learn mode / Overrode correct response");
    // Skip to next question
    this.goNextQuestionThrottled();
  })
  .catch((error) => {
    this.$toast.error(globalMessages.ERROR.GENERIC);
    console.error(error);
  })
  .finally(() => {
    this.overrideCorrectResponseLoading = false;
    this.$emit("update:loading", false);
  });
```

## This is another Section

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus lacus sed velit ornare, at tincidunt dolor pellentesque.

::: tip
You can use [Vue components](https://vitepress.vuejs.org/guide/using-vue.html) in your markdown.
:::

And have drowndown sections:
::: details Click me to view the a happy message!

```javascript
console.log("Hello, Ethan!");
```

:::
