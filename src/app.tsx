import * as React from "react";
import Layout from "./components/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import Networks from "./components/canvas/parallax/Networks";
import { TableVue } from "./components/table/TableVue";

function App(): React.JSX.Element {
  return (
    <>
      <Layout>
        <DatePicker />
        <Networks className="tsparticles-header" />
        <TableVue />
      </Layout>
    </>
  );
}

export default App;
