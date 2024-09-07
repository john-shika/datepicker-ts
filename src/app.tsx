import * as React from "react";
import Layout from "./components/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import Networks from "./components/canvas/parallax/Networks";

function App(): React.JSX.Element {
  return (
    <>
      <Layout>
        <DatePicker />
        <Networks className="tsparticles-header" />
      </Layout>
    </>
  );
}

export default App;
