import { useState } from "react";
import DataTable from "./components/dataTable/data-table";
import SearchField from "./components/searchField/search-field";
export interface SearchFieldI {
  productName: string;
  productCode: string;
}

function App() {
  const [searchValues, setSearchValues] = useState({
    productName: "",
    productCode: "",
  });
  return (
    <div className='max-w-[400px] mx-auto px-3'>
      <SearchField
        searchValues={searchValues}
        setSearchValues={setSearchValues}
      />
      <DataTable searchValues={searchValues} />
    </div>
  );
}

export default App;
