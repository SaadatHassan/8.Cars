import React from "react";
import { CarSearch } from "./components/CarSearch";
import { CarForm } from "./components/CarForm";
import { CarList } from "./components/CarList";
import { CarValue } from "./components/CarValue";
function App() {
  return (
    <>
      <div className="container is-fluid">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </>
  );
}

export default App;
