import React, { useState } from "react";
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import Table  from "./components/Table/table";
import Wrapper from "./components/Wrapper/wrapper";
import robbersArr from "./robbers.json";

function App() {
  
  const [sortAlias, setAlias] = useState("");

  const [robbers, setRobbers] = useState({
    every: robbersArr,
    filtered: robbersArr,
  });

  const searchRobber = event => {
    const filtered = robbers.every.filter(({ alias }) => 
      alias.toLowerCase().includes(event.target.value.toLowerCase()));

    setRobbers({ ...robbers, filtered });
  };

  const sortByAlias = () => {

      let sortedAlias = robbers.filtered.sort((a , b) =>{
        
      const aliasA = a.alias;
      const aliasB = b.alias;

      let corelation = 0;
      if (aliasA > aliasB) {
        corelation = 1;
      } else if (aliasA < aliasB) {
        corelation = -1;
      } return corelation
    }) 
    
    if (sortAlias === "DESC") {
      sortedAlias.reverse();
      setAlias("ASC");
    } else {
      setAlias("DESC");
    }
    setRobbers({...robbers, sortedAlias})
  }
  
  
  return (
    <>
      <Header />
      <Wrapper>
        <Search handleSearch={searchRobber}/>
        <Table robbers={robbers.filtered} sortByAlias={sortByAlias}/>
      </Wrapper>
    </>
  )
}

export default App;