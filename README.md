# Serif

Web-based lyrics display software.

### Background

This project is maintained by **Hizkia Felix** and **Jonathan Filbert**. Originally we started this project as we have been searching for an alternative and more flexible lyric displaying software to be used in our local church.

We have tried some free and open source _church software_, but they are just either too fragile, bloated, or did not fit our needs.

We 👏 Just 👏 Want 👏 To 👏 Display 👏 Lyrics.

And so we decided that desktop software is not really our target product here, since there are a lot of people that have done so. So we picked an alternative approach, which is to developed a **web app** instead. Not just an ordinary web app, but a **blazing-fast web app** whose sole job is to display lyrics in a single browser page with a black background (_As the approach in our church is to layer this lyric afterwards to our Resolume visual layer_).

### Stack

- React ⚛️
- Redux ♻️
- Styled Components 💅🏻
- Cross tab functionalities using _Local Storage_ 🌍

### What's included?

- `/` **Homepage**
- `/controller` **Control Page**
    - _You can control which songs and which lyrics should be displayed by the display page_
    - _You can also add new songs in this page_
- `/display` **Display Page**
    - _You can see the displayed lyric here_
    - _It is recommended to run this tab on a seperate window as this will be the page that is displayed on your projector / external display device._

### How to run this?

- `git clone`
- `npm install`
- `npm start`
- Go to `http://localhost:3000` in your browser
- ???
- Profit! :moneybag:
