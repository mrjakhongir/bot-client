import { useState } from "react";
import { AccordionData } from "./components/dataTable/data-accordion";
import SearchField from "./components/searchField/search-field";
export interface SearchFieldI {
  productName: string;
  productCode: string;
  productPlace: string;
}

function App() {
  const [searchValues, setSearchValues] = useState({
    productName: "",
    productCode: "",
    productPlace: "",
  });
  return (
    <div className='max-w-[400px] mx-auto px-3'>
      <SearchField
        searchValues={searchValues}
        setSearchValues={setSearchValues}
      />
      {/* <DataTable searchValues={searchValues} /> */}
      <AccordionData searchValues={searchValues} />
    </div>
  );
}

export default App;
