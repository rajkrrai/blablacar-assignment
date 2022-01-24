import SearchResults from "../components/stateless/SearchResults";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

let searchResult = {
  link: "https://www.blablacar.co.uk/search?fc=48.8566,2.3522&tc=45.764043,4.835659&fn=Paris&tn=Lyon&db=2022-01-24&de=2022-01-24",
  search_info: {
    count: 44,
    full_trip_count: 6,
  },
  trips: [
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2378667658-etampes-ecully",
      waypoints: [
        {
          date_time: "2022-01-24T03:00:00",
          place: {
            city: "Étampes",
            address: "Étampes, Étampes",
            latitude: 48.436893,
            longitude: 2.159567,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T08:10:00",
          place: {
            city: "Écully",
            address: "5 Imp. du 1er Mai, Écully",
            latitude: 45.788863,
            longitude: 4.775018,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "30.00",
        currency: "EUR",
      },
      vehicle: {
        make: "HYUNDAI",
        model: "I20",
      },
      distance_in_meters: 453426,
      duration_in_seconds: 18600,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2370663521-melun-saint-vulbas",
      waypoints: [
        {
          date_time: "2022-01-24T04:30:00",
          place: {
            city: "Melun",
            address: "Melun, Melun",
            latitude: 48.52762,
            longitude: 2.655296,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T09:20:00",
          place: {
            city: "Saint-Vulbas",
            address:
              "Parc Industriel de la Plaine de l'Ain, 140 Avenue Charles de Gaulle, Saint-Vulbas",
            latitude: 45.837705,
            longitude: 5.286487,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "26.00",
        currency: "EUR",
      },
      vehicle: {
        make: "OPEL",
        model: "ASTRA",
      },
      distance_in_meters: 440723,
      duration_in_seconds: 17400,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2380735133-corbeil-essonnes-saint-etienne",
      waypoints: [
        {
          date_time: "2022-01-24T04:30:00",
          place: {
            city: "Corbeil-Essonnes",
            address: "SNCF, Pl. de la Gare, Corbeil-Essonnes",
            latitude: 48.613751,
            longitude: 2.473891,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T09:50:00",
          place: {
            city: "Saint-Étienne",
            address:
              "GR®42 Balcons du Rhône De St Etienne (Loire) au Grau-du-Roi (Gard), 223 Esp. de France, Saint-Étienne",
            latitude: 45.443304,
            longitude: 4.399445,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "39.00",
        currency: "EUR",
      },
      distance_in_meters: 489149,
      duration_in_seconds: 19200,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2380674218-paris-lyon",
      waypoints: [
        {
          date_time: "2022-01-24T05:00:00",
          place: {
            city: "Paris",
            address: "Quatre Septembre, Paris",
            latitude: 48.86978,
            longitude: 2.336077,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T10:10:00",
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
        amount: "18.00",
        currency: "EUR",
      },
      vehicle: {
        make: "VOLKSWAGEN",
        model: "POLO",
      },
      distance_in_meters: 465077,
      duration_in_seconds: 18600,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2380474683-garges-les-gonesse-sainte-julie",
      waypoints: [
        {
          date_time: "2022-01-24T05:00:00",
          place: {
            city: "Garges-lès-Gonesse",
            address: "15 Rue des Acacias, Garges-lès-Gonesse",
            latitude: 48.97189,
            longitude: 2.401911,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T10:30:00",
          place: {
            city: "Sainte-Julie",
            address: "Avenue du Bois des Vergnes, Sainte-Julie",
            latitude: 45.85934,
            longitude: 5.28099,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "35.00",
        currency: "EUR",
      },
      vehicle: {
        make: "VOLKSWAGEN",
        model: "GOLF",
      },
      distance_in_meters: 502220,
      duration_in_seconds: 19800,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2380736233-paris-lyon",
      waypoints: [
        {
          date_time: "2022-01-24T06:00:00",
          place: {
            city: "Paris",
            address: "1 Pl. Baudoyer, Paris",
            latitude: 48.856244,
            longitude: 2.355019,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T11:10:00",
          place: {
            city: "Lyon",
            address: "41 Rue de la Bourse, Lyon",
            latitude: 45.764482,
            longitude: 4.837034,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "26.00",
        currency: "EUR",
      },
      vehicle: {
        make: "HYUNDAI",
        model: "I30",
      },
      distance_in_meters: 465086,
      duration_in_seconds: 18600,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2380692933-montreuil-bron",
      waypoints: [
        {
          date_time: "2022-01-24T06:30:00",
          place: {
            city: "Montreuil",
            address: "2 Av. Walwein, Montreuil",
            latitude: 48.862237,
            longitude: 2.44339,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T11:40:00",
          place: {
            city: "Bron",
            address: "2-6 Rue Emile Bender, Bron",
            latitude: 45.734795,
            longitude: 4.903739,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "35.00",
        currency: "EUR",
      },
      vehicle: {
        make: "PEUGEOT",
        model: "5008",
      },
      distance_in_meters: 479589,
      duration_in_seconds: 18600,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2378360938-pontault-combault-lyon",
      waypoints: [
        {
          date_time: "2022-01-24T07:00:00",
          place: {
            city: "Pontault-Combault",
            address: "30 Rue de la Pierre Rollet, Pontault-Combault",
            latitude: 48.789189,
            longitude: 2.607794,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T11:50:00",
          place: {
            city: "Lyon",
            address: "Gorge de Loup, Lyon",
            latitude: 45.76592,
            longitude: 4.80446,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "34.00",
        currency: "EUR",
      },
      distance_in_meters: 465729,
      duration_in_seconds: 17400,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2378195518-sevres-lyon",
      waypoints: [
        {
          date_time: "2022-01-24T07:10:00",
          place: {
            city: "Sèvres",
            address: "8 Av. de la Cristallerie, Sèvres",
            latitude: 48.826653,
            longitude: 2.222208,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T12:30:00",
          place: {
            city: "Lyon",
            address: "38 Rue de la Villette, Lyon",
            latitude: 45.760541,
            longitude: 4.861488,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "37.00",
        currency: "EUR",
      },
      distance_in_meters: 474051,
      duration_in_seconds: 19200,
    },
    {
      link: "https://www.blablacar.co.uk/trip?source=CARPOOLING&id=2372722306-paris-lyon",
      waypoints: [
        {
          date_time: "2022-01-24T08:00:00",
          place: {
            city: "Paris",
            address: "Porte d'Italie, Paris",
            latitude: 48.819054,
            longitude: 2.36014,
            country_code: "FR",
          },
        },
        {
          date_time: "2022-01-24T12:50:00",
          place: {
            city: "Lyon",
            address: "60B Av. Leclerc, Lyon",
            latitude: 45.734481,
            longitude: 4.822984,
            country_code: "FR",
          },
        },
      ],
      price: {
        amount: "29.00",
        currency: "EUR",
      },
      distance_in_meters: 458604,
      duration_in_seconds: 17400,
    },
  ],
  next_cursor: "cGFnZT0x",
};

const setup = (props = {}) => {
  return shallow(<SearchResults {...props} />);
};

//test 1: if trip array is null, no result card component should be displayed
test("not rendering any search result card component if trip is  null", () => {
  let trips = [];
  const wrapper = setup({ trips });
  expect(wrapper.find(".card").length).toEqual(0);
});

//test 2:if trip array is not null, there should be n result card component
test("redering search result component if trip is not null", () => {
  const wrapper = setup({ trips: searchResult.trips });
  let totalTrip = searchResult.trips.length;
  expect(wrapper.find(".card").length).toEqual(totalTrip);
});
