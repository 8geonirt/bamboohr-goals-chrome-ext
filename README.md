# BambooHR Chrome Extension [Goals]

Draws a small chart with the progress on the goals present in the page.

Scrapes the DOM to fetch the required values and returns the data to the extension.

## Prerequisites
* [Yarn](https://yarnpkg.com/) v1.21+

## Getting Started

1. Clone the repository.
2. Go to the repository folder.
3. Run the command `yarn install`
6. Start adding/fixing code

## Development

1. Run `yarn build`
2. Using Chrome open [chrome://extensions](chrome://extensions) and enable the developer mode
3. Drag the build folder generated by the `yarn build` command.
4. You'll see the extension icon in your browser.
5. Start browsing the goals page and click on extension.

## Completed goals

![image](https://user-images.githubusercontent.com/2782816/81849387-13adc680-951c-11ea-9095-fc0524c238b2.png)

## Pending, in progress and completed goals

![image](https://user-images.githubusercontent.com/2782816/81849548-4952af80-951c-11ea-80c2-7aba299ebfe5.png)

## Future ideas

- Export the chart to PNG or any other image format.

## Built with

* React JS
