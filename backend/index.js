const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const { mongoose } = require("../backend/db/mongoose");
const {
  Space,
  Spacebudget,
  Spacebudgeteurope,
  NasaBudget,
  IsroBudget,
  RosBudget
} = require("../backend/models/space");

app.get("/nasaData", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

  Space.find({}, function(err, nasaData) {
    console.log("==============data=========", nasaData);
    let satellites = nasaData.map(n => {
      console.log("n is ", n.satellites);
      return n.satellites;
    });

    res.send(satellites);
  });
});

app.get("/nasaspacebudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Spacebudget.find({}, function(err, nasaData) {
    let budgets = nasaData.map(n => {
      console.log("budget is ", n.budget);
      return n.budget;
    });

    res.send(budgets);
  });
});

app.get("/europespacebudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Spacebudgeteurope.find({}, function(err, europeData) {
    let budgets = europeData.map(n => {
      console.log("budget is ", n.budget);
      return n.budget;
    });

    res.send(budgets);
  });
});

app.get("/marsdata", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Near Mars >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  Mars.find({}, function(err, nasaData) {
    let budgets = nasaData.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    let projects = nasaData.map(n => {
      console.log("new projects is ", n.project);
      return n.project;
    });

    const marsData = [budgets, projects];

    res.send(marsData);
  });
});

app.get("/planetData", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Near Mars >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  Planet.find({}, function(err, nasaData) {
    let distances = nasaData.map(n => {
      console.log("distance is ", n.budget);
      return n.distance;
    });

    let names = nasaData.map(n => {
      console.log("planet name is ", n.project);
      return n.name;
    });

    const planetData = [names, distances];

    res.send(planetData);
  });
});

//comparison

app.get("/nasabudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Nasa budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  NasaBudget.find({}, function(err, nBudget) {
    let budgets = nBudget.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    const naBudget = [budgets];

    res.send(naBudget);
  });
});

app.get("/isrobudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("isro budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  IsroBudget.find({}, function(err, iBudget) {
    let budgets = iBudget.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    const isBudget = [budgets];

    res.send(isBudget);
  });
});

app.get("/rosbudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("roscosmos budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  RosBudget.find({}, function(err, rBudget) {
    let budgets = rBudget.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    const roBudget = [budgets];

    res.send(roBudget);
  });
});

// app.get("/agency/isro", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   console.log("roscosmos budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//   // RosBudget.find({}, function(err, rBudget) {
//   //   let budgets = rBudget.map(n => {
//   //     console.log("new budget is ", n.budget);
//   //     return n.budget;
//   //   });

//   //   const roBudget = [budgets];

//   //   res.send(roBudget);
//   // });

//   res.send({
//     name: "ISRO",
//     full_name: "Indian Space Research Organisation",
//     logo:
//       "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg",
//     est: "1969",
//     country: "IND",
//     description:
//       'The Indian Space Research Organisation is the space agency of the Government of India headquartered in the city of Bengaluru. Its vision is to "harness space technology for national development while pursuing space science research & planetary exploration". The Indian National Committee for Space Research (INCOSPAR) was established in the tenure of Jawaharlal Nehru under the Department of Atomic Energy (DAE) in 1962, with the urging of scientist Vikram Sarabhai recognizing the need in space research. INCOSPAR grew and became ISRO in 1969,also under the DAE in 1972, Government of India setup a Space Commission and the Department of Space (DOS),bringing ISRO under the DOS.',
//     projects: [
//       {
//         id: "1",

//         name: "Chandrayaan 1",

//         start_date: "22 October 2008",

//         end_date: "28 August 2009",

//         description:
//           "Chandrayaan-1 was India's first lunar probe. It was launched by the Indian Space Research Organisations in October 2008, and operated until August 2009. The mission included a lunar orbiter and an impactor. The mission was a major boost to India's space program, as India researched and developed its own technology in order to explore the Moon. The vehicle was successfully inserted into lunar orbit on 8 November 2008.",

//         image_url:
//           "https://english.cdn.zeenews.com/sites/default/files/2019/06/07/793963-chandrayaan-nasa.jpg"
//       },

//       {
//         id: "2",

//         name: "Chandrayaan 2",

//         start_date: "22 July 2019",

//         end_date: "Ongoing (Communication with lander lost)",

//         description:
//           "Chandrayaan-2 was launched from the second launch pad at Satish Dhawan Space Centre on 22 July 2019 at 2.43 PM IST (09:13 UTC) to the Moon by a Geosynchronous Satellite Launch Vehicle Mark III (GSLV Mk III). The planned orbit has a perigee of 169.7 km and an apogee of 45475 km. It consists of a lunar orbiter, lander and rover, all developed in India. The main scientific objective is to map the location and abundance of lunar water.",

//         image_url:
//           "https://cdn.mos.cms.futurecdn.net/MuxRBAH6GMUUuUqS8nC3XS-1024-80.jpg"
//       },

//       {
//         id: "3",

//         name: "Mars Orbiter Mission 1 ( Mangalyaan)",

//         start_date: "5 November 2013",

//         end_date: "Ongoing",

//         description:
//           "Mars Orbiter Mission, also called Mangalyaan, is a spacecraft orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by the Indian Space Research Organisation (ISRO). It is India's first interplanetary mission and ISRO has become the fourth space agency to reach Mars, after the Soviet space program, NASA, and the European Space Agency. India is the first Asian nation to reach Mars orbit, and the first nation in the world to do so in its first attempt.",

//         image_url:
//           "https://image.slidesharecdn.com/mars-currentevents-141108002735-conversion-gate02/95/mangalyaan-indias-mission-to-mars-1-638.jpg?cb=1415406551"
//       },
//       {
//         id: "4",

//         name: "ASTROSAT",

//         start_date: "28 September 2015",

//         end_date: "Ongoing",

//         description:
//           "ASTROSAT is the first dedicated Indian Astronomy satellite mission launched by ISRO on 28 September 2015, which will be helpful in enabling multi-wavelength observations of the celestial bodies and cosmic sources in X-ray and UV spectral bands simultaneously. The scientific payloads cover the Visible (3500–6000 Å...), UV (1300–op Å...), soft and hard X-ray regimes (0.5–8 keV; 3–80 keV). The uniqueness of ASTROSAT lie in its wide spectral coverage extending over visible, UV, soft and hard X-ray regions.",

//         image_url:
//           "https://upload.wikimedia.org/wikipedia/commons/1/15/Astrosat-1_in_deployed_configuration.png"
//       },

//       {
//         id: "5",

//         name: "Mars Orbiter Mission 2 ( Mangalyaan)",

//         start_date: "Estimated 2024",

//         end_date: "To be decided",

//         description:
//           "Mars Orbiter Mission 2, also called Mangalyaan 2, is India's second interplanetary mission planned for launch to Mars by the Indian Space Research Organisation (ISRO). As per some reports emerged, the mission was to be an orbiter to Mars proposed for 2024.The orbiter will use aero-braking to lower its initial apoapsis and enter into an orbit more suitable for observations.",

//         image_url:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/L110_Liquid_Stage_at_Stage_Preparation_Facility.jpg/1280px-L110_Liquid_Stage_at_Stage_Preparation_Facility.jpg"
//       }
//     ]
//   });
// });

// app.get("/agency/esa", (req, res) => {
//   res.setHeader("Content-Type", "application/json");

// });

// app.get("/agency/nasa", (req, res) => {
//   res.send({
//     name: "NASA",
//     full_name: "National Aeronautics and Space Administration",
//     logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
//     est: "1958",
//     country: "USA",
//     description:
//       "The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research.NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science.Since its establishment, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion Multi-Purpose Crew Vehicle, the Space Launch System and Commercial Crew vehicles.",
//     projects: [
//       {
//         id: "1",

//         name: "Project Mercury",

//         start_date: "1958",

//         end_date: "63",

//         description: "First U.S. manned spaceflight mission.",

//         image_url:
//           "https://images.squarespace-cdn.com/content/v1/526597fae4b08e763cbf0389/1552335856101-3JVDS19GFKQSMLZ9Q1S1/ke17ZwdGBToddI8pDm48kB80eW4KK5wgMfkTp6SjTNtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxkEDnlqEYEiGVDb0kl5jpOJsm5iyfgdjNZyk67t96-U_4JMfIDDY8RGcVnRlrKExA/Mercury-NASA-Mission-poster-thumbnail.jpg?format=750w"
//       },

//       {
//         id: "2",

//         name: "Project Gemini",

//         start_date: "1961",

//         end_date: "66",

//         description:
//           "Training for extravehicular activity, rendezvous and docking in preparation for the Apollo missions.",

//         image_url:
//           "https://upload.wikimedia.org/wikipedia/commons/8/8d/Gemini_6_7.jpg"
//       },

//       {
//         id: "3",

//         name: "Project Apollo",

//         start_date: "1961",

//         end_date: "75",

//         description:
//           "The first and (so far)only exploration mission to successfully land humans on the moon.",

//         image_url:
//           "https://images.squarespace-cdn.com/content/v1/526597fae4b08e763cbf0389/1550179279894-ADBP11ZQP0ZOSHM3WMLD/ke17ZwdGBToddI8pDm48kD_8fTrfgG8p0_cDoTbpamQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2KMNufQQ-6LzTaq8C03wdVYUGhCLxLqtho8B4fMxfqTgfdurHDt8XjyaGurlSWvQe/Apollo-Poster.jpg?format=750w"
//       },

//       {
//         id: "4",

//         name: "Skylab",

//         start_date: "1973",

//         end_date: "79",

//         description:
//           "America's first and only independently built space station.",

//         image_url:
//           "https://upload.wikimedia.org/wikipedia/commons/0/07/Skylab_%28SL-4%29.jpg"
//       },

//       {
//         id: "5",

//         name: "Space Shuttle Program",

//         start_date: "1981",

//         end_date: "2011",

//         description: "Fleet of launchable and reusable space vehicles.",

//         image_url:
//           "https://media.wired.com/photos/5c6f46d93e8add2cdb917279/master/pass/spaceshuttle.jpg"
//       },

//       {
//         id: "6",

//         name: "International Space Station",

//         start_date: "1993",

//         end_date: "present",

//         description:
//           "Space research lab jointly managed by NASA and space agenices of Russia, Europe, Japan and Canada.",

//         image_url:
//           "https://cdn.mos.cms.futurecdn.net/Q8U3LcsBLsXX9mYksBx5eV.jpg"
//       }
//     ]
//   });
// });

app.use("/agency", require("./routes/agency"));

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
