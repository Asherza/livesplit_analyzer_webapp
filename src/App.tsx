import { hot } from "react-hot-loader/root";
import * as React from "react";
import { DrawerNavigation } from "@components";

const App = () => <div>
  <DrawerNavigation />
  {/* The text below will eventually be wrapped in a body component, until then it the nav drawer will overlap */}
  Asher is really good at speedrunning portal
</div>;

export default hot(App);
