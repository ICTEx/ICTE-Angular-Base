 <p align="center">
   <a href="http://icte.io">
     <img width="400" src="https://icte.io/assets/images/ip-1590_ictelogo.svg" alt="icte.io">
   </a>
 </p>
 <h1 align="center">ICTE Angular Base</h1>
 <div align="center">
 Develop real-time applications for the crypto community.
 </div>
 
## 🔑 Features
- Component Routing Implementation
  - Reroute to different views quickly, without reloading the application.
- Real-Time Market Data Library (icte-market-data-api.js)
  - Receive realtime market data through a websocket connection for 20+ cryptocurrencies.
  - Includes market data from: *Binance*, *HitBtc*, and *Poloniex*.
- Header and Footer Menu Bars
  - Menu for rerouting page views and for navigating within pages.
  - Link to social medias or business pages.
- Action Panel Service
  - Functional component that can be altered depending on application settings.
 
## ⬇️Install
#### Prerequisites
Download and install [*Node.js and npm*](https://nodejs.org/en/download/)(**8.12+**).
#### Build ICTE Angular Base
Clone this repository to a desired directory and install dependencies.
```sh
git clone https://github.com/ICTEx/ICTE-Angular-Base.git
cd ICTE-Angular-Base
npm install
```
If not already installed, install Angular CLI from NPM.
```sh
npm install -g @angular/cli
```
#### Launch ICTE Angular Base
Launch the framework:
```sh
ng serve
```
- Navigate to `http://localhost:4200` on your preferred web browser.

- Click *example* in the header menu to see real-time market data.

## ✏️TODO
1. Fix mobile navigation
1. Add missing crypto market data to libraries
1. Add more functional action panel examples

## 💡 Contributing

1. [Fork ICTE Angular Base](<https://github.com/ICTEx/ICTE-Angular-base/fork>)
1. Create your feature branch (`git checkout -b feature/fooBar`)
1. Commit your changes (`git commit -m 'Add some fooBar'`)
1. Push to the branch (`git push origin feature/fooBar`)
1. [Create a new Pull Request](https://github.com/ICTEx/ICTE-Angular-Base/compare)
1. [Report any issues](https://github.com/ICTEx/ICTE-Angular-Base/issues)

## License
Copyright 2018-2019 HTU Technologies

Licensed under the GPLv3: http://www.gnu.org/licenses/gpl-3.0.html
