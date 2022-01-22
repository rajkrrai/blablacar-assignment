import { render, screen } from "@testing-library/react";
import App from "./App";
import SearchResults from "./components/stateless/SearchResults";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import { FetchRideDetails } from "./services/RideFetchingService";
import * as api from "./services/RideFetchingService";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

//test 1: app loads/mount without failure
test("App runs without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/today/i);
  expect(linkElement).toBeInTheDocument();
});

//test 2: if trip array is null
test("redering search res component if trip is  null", () => {
  let trips = [];
  const searchInstance = shallow(<SearchResults trips={trips} />);
  expect(searchInstance.find(".card").length).toEqual(0);
});

//test 3:if trip array is not null
test("redering search res component if trip is not null", () => {
  let trips = [
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2378443693-velizy-villacoublay-lyon",
      waypoints: [
        {
          date_time: "2022-01-21T12:00:00",
          place: {
            city: "Vélizy-Villacoublay",
            address: "2 N118, Vélizy-Villacoublay",
            latitude: 48.781146,
            longitude: 2.21998,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-21T16:50:00",
          place: {
            city: "Lyon",
            address: "30 Cr de Verdun Perrache, Lyon",
            latitude: 45.748266,
            longitude: 4.828306,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "29.00",
        currency: "EUR",
      },
      vehicle: {
        make: "CHEVROLET",
        model: "CRUZE",
      },
      distance_in_meters: 457603,
      duration_in_seconds: 17400,
    },
  ];
  const searchInstance = shallow(<SearchResults trips={trips} />);
  expect(searchInstance.find(".card").length).toEqual(1);
});

// //test 4: setting the state
// test("redering search res component", () => {
//   let trips = [];
//   const searchInstance = shallow(<SearchResults trips={trips} />);
//   expect(searchInstance.find(".card").length).toEqual(1);
// });

//test 5: setting the state
test("App with state", () => {
  api.FetchRideDetails = jest.fn(async () =>
    Promise.resolve({
      link: "https://www.blablacar.co.uk/search?fc=48.8566,2.3522&tc=45.764043,4.835659&fn=Paris&tn=Lyon&db=2022-01-21&de=2022-01-21",
      search_info: {
        count: 59,
        full_trip_count: 12,
      },
      trips: [
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2378443693-velizy-villacoublay-lyon",
          waypoints: [
            {
              date_time: "2022-01-21T12:00:00",
              place: {
                city: "Vélizy-Villacoublay",
                address: "2 N118, Vélizy-Villacoublay",
                latitude: 48.781146,
                longitude: 2.21998,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T16:50:00",
              place: {
                city: "Lyon",
                address: "30 Cr de Verdun Perrache, Lyon",
                latitude: 45.748266,
                longitude: 4.828306,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "29.00",
            currency: "EUR",
          },
          vehicle: {
            make: "CHEVROLET",
            model: "CRUZE",
          },
          distance_in_meters: 457603,
          duration_in_seconds: 17400,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2377227453-paris-lyon",
          waypoints: [
            {
              date_time: "2022-01-21T12:00:00",
              place: {
                city: "Paris",
                address: "Porte d'Italie, Paris",
                latitude: 48.818421,
                longitude: 2.360012,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T16:50:00",
              place: {
                city: "Lyon",
                address: "Lyon, Lyon Perrache, Lyon",
                latitude: 45.748668,
                longitude: 4.826,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "32.00",
            currency: "EUR",
          },
          vehicle: {
            make: "VOLKSWAGEN",
            model: "GOLF",
          },
          distance_in_meters: 462396,
          duration_in_seconds: 17400,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2377590333-saint-denis-lyon",
          waypoints: [
            {
              date_time: "2022-01-21T12:30:00",
              place: {
                city: "Saint-Denis",
                address: "22 Rue Saint-Just, Saint-Denis",
                latitude: 48.908293,
                longitude: 2.363406,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T17:30:00",
              place: {
                city: "Lyon",
                address: "84 Quai Perrache, Lyon",
                latitude: 45.734521,
                longitude: 4.818071,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "29.00",
            currency: "EUR",
          },
          vehicle: {
            make: "RENAULT",
            model: "SCENIC",
          },
          distance_in_meters: 474696,
          duration_in_seconds: 18000,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2376912778-antony-saint-etienne",
          waypoints: [
            {
              date_time: "2022-01-21T12:30:00",
              place: {
                city: "Antony",
                address: "11 Rue Velpeau, Antony",
                latitude: 48.761863,
                longitude: 2.304344,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T18:00:00",
              place: {
                city: "Saint-Étienne",
                address: "1 Rue Maître Simone Levaillant, Saint-Étienne",
                latitude: 45.464857,
                longitude: 4.379556,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "32.00",
            currency: "EUR",
          },
          vehicle: {
            make: "AUDI",
            model: "A5",
          },
          distance_in_meters: 471841,
          duration_in_seconds: 19800,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2371067226-paris-lyon-1",
          waypoints: [
            {
              date_time: "2022-01-21T12:50:00",
              place: {
                city: "Paris",
                address: "142 Av. du Général Leclerc, Paris",
                latitude: 48.823458,
                longitude: 2.325374,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T17:40:00",
              place: {
                city: "Lyon",
                address: "Quai Charles de Gaulle, Lyon",
                latitude: 45.777945,
                longitude: 4.844289,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "26.00",
            currency: "EUR",
          },
          vehicle: {
            make: "RENAULT",
            model: "TWINGO 4",
          },
          distance_in_meters: 458846,
          duration_in_seconds: 17400,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2373789441-ivry-sur-seine-lyon",
          waypoints: [
            {
              date_time: "2022-01-21T12:50:00",
              place: {
                city: "Ivry-sur-Seine",
                address: "63 Bd de Brandebourg, Ivry-sur-Seine",
                latitude: 48.813988,
                longitude: 2.393874,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T17:30:00",
              place: {
                city: "Lyon",
                address: "Place Bellecour, Place, Lyon",
                latitude: 45.757591,
                longitude: 4.831966,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "29.00",
            currency: "EUR",
          },
          vehicle: {
            make: "PEUGEOT",
            model: "206",
          },
          distance_in_meters: 464003,
          duration_in_seconds: 16800,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2376766533-villejuif-saint-etienne",
          waypoints: [
            {
              date_time: "2022-01-21T13:00:00",
              place: {
                city: "Villejuif",
                address: "162 Bd Maxime Gorki, Villejuif",
                latitude: 48.78795,
                longitude: 2.36775,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T18:50:00",
              place: {
                city: "Saint-Étienne",
                address: "Saint-Étienne Châteaucreux, Saint-Étienne",
                latitude: 45.443427,
                longitude: 4.399503,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "49.00",
            currency: "EUR",
          },
          vehicle: {
            make: "CITROEN",
            model: "C4",
          },
          distance_in_meters: 478278,
          duration_in_seconds: 21000,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2375937991-montigny-le-bretonneux-saint-priest-d179286",
          waypoints: [
            {
              date_time: "2022-01-21T13:20:00",
              place: {
                city: "Antony",
                address: "9 Av. le Brun, Antony",
                latitude: 48.765694524,
                longitude: 2.306660464,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T18:10:00",
              place: {
                city: "Saint-Priest",
                address: "7 Rue des Prés Fleuris, Saint-Priest",
                latitude: 45.700396,
                longitude: 4.951987,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "27.00",
            currency: "EUR",
          },
          vehicle: {
            make: "DACIA",
            model: "SANDERO",
          },
          distance_in_meters: 470252,
          duration_in_seconds: 17400,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2377424033-creteil-lyon",
          waypoints: [
            {
              date_time: "2022-01-21T13:30:00",
              place: {
                city: "Créteil",
                address: "Créteil Pompadour, Chem. des Bœufs, Créteil",
                latitude: 48.771503,
                longitude: 2.435318,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T18:20:00",
              place: {
                city: "Lyon",
                address: "38 Rue Pierre Semard, Lyon",
                latitude: 45.740745,
                longitude: 4.844147,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "17.00",
            currency: "EUR",
          },
          vehicle: {
            make: "OPEL",
            model: "ASTRA",
          },
          distance_in_meters: 460092,
          duration_in_seconds: 17400,
        },
        {
          link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2372453196-saclay-lyon",
          waypoints: [
            {
              date_time: "2022-01-21T13:40:00",
              place: {
                city: "Saclay",
                address: "7 Rte de Bièvres, Saclay",
                latitude: 48.731273,
                longitude: 2.163789,
                country_code: "FR",
              },
            },
            {
              date_time: "2022-01-21T18:30:00",
              place: {
                city: "Lyon",
                address: "Lyon, Lyon Perrache, Lyon",
                latitude: 45.748668,
                longitude: 4.826,
                country_code: "FR",
              },
            },
          ],
          price: {
            amount: "29.00",
            currency: "EUR",
          },
          vehicle: {
            make: "VOLKSWAGEN",
            model: "GOLF",
          },
          distance_in_meters: 455505,
          duration_in_seconds: 17400,
        },
      ],
      next_cursor: "cGFnZT0x",
    })
  );
  let wrapper;
  act(() => {
    wrapper = mount(<App />);
    // console.log("wrapper", wrapper);
    expect(wrapper.find(".card").length).toEqual(1);
  });

  //******** */
  // xyz = jest.fn.mockImplementation(async () => {trip object})
});
