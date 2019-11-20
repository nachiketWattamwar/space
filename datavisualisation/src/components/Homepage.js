import React, { Component } from "react";
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="homepage-wrapper">
        <div class="banner-wrapper">
          <div class="banner background-tint">
            <div class="container center name-div">
              <div class="logo center">
                <img src="/img/spaceship-logo.png"/>
              </div>
              <h1 class="name">Lift Off</h1>
              <p>Some Tag Line</p>
            </div>
          </div>
        </div> {/*End .banner-wrapper*/}
        <div class="plantes-div">
          <div class="container">

            <h2 class="section-title">Explore Planets</h2>
            <div class="row">

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="http://localhost:3000/planet/moon">
                    <img class="planet-tile-img" src="/img/planet-tiles/moon.jpg"/>
                  </a>
                </div>
              </div>

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="#">
                    <img class="planet-tile-img" src="/img/planet-tiles/mars.jpg"/>
                  </a>
                </div>
              </div>

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="#">
                    <img class="planet-tile-img" src="/img/planet-tiles/jupiter.jpg"/>
                  </a>
                </div>
              </div>

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="#">
                    <img class="planet-tile-img" src="/img/planet-tiles/saturn.jpg"/>
                  </a>
                </div>
              </div>

            </div> {/*End Row*/}
          </div>
        </div> {/*end .planet-wrapper*/}

        <div class="agency-div">
          <div class="container">

            <h2 class="section-title">Explore Agencies</h2>
            <div class="row">

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/nasa">
                    <img class="agency-tile-img" src="/img/agency/nasa.png"/>
                  </a>
                </div>
              </div>

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/ros">
                    <img class="agency-tile-img" src="/img/agency/ros.png"/>
                  </a>
                </div>
              </div>

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/isro">
                    <img class="agency-tile-img" src="/img/agency/isro.svg"/>
                  </a>
                </div>
              </div>

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/esa">
                    <img class="agency-tile-img" src="/img/agency/esa.jpg"/>
                  </a>
                </div>
              </div>

            </div> {/*end .row*/}
          </div>
        </div> {/*end .agency-div*/}

        <div class="comparison-div">
          <div class="row">

            <div class="col-md-6 comparison-left">
              <h2 class="section-title">Comparison</h2>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <a class="mybtn" href="http://localhost:3000/comparison">EXPLORE</a>

            </div>

            <div class="col-md-6 comparison-left">
              <img src="/img/astronaut.png"/>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
