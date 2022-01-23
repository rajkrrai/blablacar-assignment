import SearchResults from "../components/stateless/SearchResults";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

//test 2: if trip array is null, no result card component should be displayed
test("redering search res component if trip is  null", () => {
  let trips = [];
  const searchInstance = shallow(<SearchResults trips={trips} />);
  expect(searchInstance.find(".card").length).toEqual(0);
});

//test 3:if trip array is not null, there should be n result card component
test("redering search result component if trip is not null", () => {
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
