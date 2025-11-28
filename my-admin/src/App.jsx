import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

import dataProvider from "./trailbasedataProvider";



const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="customers" list={ListGuesser} edit={EditGuesser} />
    <Resource name="maintenance_records" list={ListGuesser} />
  </Admin>
);

export default App;