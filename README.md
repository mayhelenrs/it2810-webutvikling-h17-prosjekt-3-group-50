## IT2810 - Web Development - Project 3 - Group 50

With this application you get your very own Personal Information Manager, PIM. 
It lets you keep track of your weekly schedule, appointments, notes and todos.

###Table of contents:
1. [file structure](#FileStruct)
2. [setup](#Setup)

### General file structure of the project <a name="FileStruct"></a>
We have split our project into two main folders: `app` and `website`.

The code is very similar in both parts,
but some changes has been made 
to accommodate for the differences between React and React Native.

#### Website
* `website/public` contains the html file in which we put all our javascript into,
 to make it render. Also the favicon is placed in this folder.
 
* `website/src` contains, basically, our whole website. Everything is build up using react and javascript.
    * `website/src/assets` contains fonts, images and our css.
    * `website/src/components` contains all our components, which are used to construct our views.
        * `website/src/components/appointments` contains components related to our appointment-view.
        * `website/src/components/categories` contains components for categories. 
        Categories are used to filter between different types of notes and todos.
        * `website/src/components/common` contains the components that are common for all the views.
        * `website/src/components/frontpage` contains components related to our front page.
        * `website/src/components/notes` contains  components related to our notes-view.
        * `website/src/components/schedule` contains components related to our schedule-view.
        * `website/src/components/todo` contains components related to our todo-view.
        * `website/src/components/index.jsx` exports all our components to make importing easier
    * `website/src/service` contains our service worker which allows for offline capabilities etc.
    * `website/src/views` contains all our views, these are all the different pages the website consists of.
    * `website/src/index.jsx` used to route between different views.
    

### App
The file structure for the app is basically the same as for the website.


### Setup <a name="Setup"></a>
To run the application you need:
* A web server to host the website
* A web browser to access the website

####Source code:
* https://github.com/IT2810/it2810-webutvikling-h17-prosjekt-3-group-50 (Will probably be downloaded to our own repos at some point)

Dependencies:

#####Website:

    "react": "^15.6.1",
    "react-addons-update": "^15.6.2",
    "react-dom": "^15.6.1",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.0.13"

#####App:

Dev. dependencies:

    "react-native-scripts": "1.5.0",
    "jest-expo": "^21.0.2",
    "react-test-renderer": "16.0.0-alpha.12"

Dependencies:

    "expo": "^21.0.0",
    "react": "16.0.0-alpha.12",
    "react-native": "^0.48.4",
    "react-navigation": "^1.0.0-beta.13"
    
    
#####Setup:
* Website (assuming webserver has react and node installed):
    * Upload the source code to the server
    * If he webserver does not do so automatically, download all the necessary dependencies.
    * On the server,  run `npm start`.
* App (assuming you have react native and node installed):
    * Download all necessary dependencies.
    * Install the Expo app on your phone.
    * Run `npm start`.
    * Use Expo on your phone to view the app.


