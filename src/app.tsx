import * as React from "react";
import Layout from "./components/Layout";
import { DatePicker } from "./components/datepicker";
import { NetworksParallax } from "./components/canvas/parallax";
import { Table } from "./components/table";

function App(): React.JSX.Element {
  return (
    <>
      <Layout>
        <DatePicker />
        <NetworksParallax className="tsparticles-header" />
        <Table />
      </Layout>
    </>
  );
}

export default App;
