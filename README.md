# NEWS APP - DEMO
This is a project built in Ionic v6 that uses the 'storage', 'inappbrowser', and 'social-sharing' libraries to consume information from the news API https://newsapi.org. It is necessary to configure your own apiKey in the environment file.

## Table of Contents
- Introduction
- Features
- System Requirements
- Installation
- Usage
- Credits
- License

## Introduction
NoticiasApp is a mobile application that allows users to read news from different sources and share the information on their favorite social networks. The application uses the news API https://newsapi.org to get the latest news from different categories.

## Features
* The application allows users to view the latest news in different categories (business, entertainment, health, sports, technology).
* Users can save favorite news on their device using the 'storage' library.
* The application uses the 'inappbrowser' library to open news in the device's browser.
* Users can share news on their favorite social networks using the 'social-sharing' library.

## System Requirements
* Node.js
* Ionic CLI v6
* Angular CLI v12
* Account on https://newsapi.org and generated apiKey.

## Installation
1. Clone the repository.
2. Run npm install to install the dependencies.
3. Configure your generated apiKey in the src/environments/environment.ts file.
## Usage
1. Run ionic serve to start the application in the browser.
2. On the main screen of the application, select a news category to see the latest news.
3. To see more details of a news item, click on the corresponding news.
4. To save a news item as a favorite, click on the "save" button on the news details screen.
5. To share a news item on social networks, click on the "share" button on the news details screen.
## Credits
* This project was built by [Enrique Lopez].
* The news API used in this application is provided by https://newsapi.org.
## License
This project is licensed under the MIT License. See the LICENSE file for more details.

[Enrique Lopez]: https://github.com/jenriquelopezdev
