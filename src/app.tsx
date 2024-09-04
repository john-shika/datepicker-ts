import * as React from "react";
import Layout from "./components/Layout";
import DatePicker from "./components/datepicker/DatePicker";

function App(): React.JSX.Element {
  return (
    <>
      <Layout>
        <DatePicker />
      </Layout>
    </>
  );
}

export default App;
