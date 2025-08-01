import type { SearchFieldI } from "@/App";
import { Input } from "../ui/input";

type SearchFieldProps = {
  searchValues: SearchFieldI;
  setSearchValues: React.Dispatch<React.SetStateAction<SearchFieldI>>;
};

const SearchField: React.FC<SearchFieldProps> = ({
  searchValues,
  setSearchValues,
}) => {
  return (
    <header className='p-2 flex flex-col gap-2 shadow-md mb-3 rounded-b-md sticky top-0 bg-white z-10'>
      <Input
        placeholder='Номенклатура'
        type='text'
        className='py-4'
        value={searchValues.productName}
        onChange={(e) =>
          setSearchValues({ ...searchValues, productName: e.target.value })
        }
        onFocus={() => setSearchValues({ ...searchValues, productCode: "" })}
      />
      <Input
        placeholder='Код товара'
        type='text'
        value={searchValues.productCode}
        onChange={(e) =>
          setSearchValues({ ...searchValues, productCode: e.target.value })
        }
        onFocus={() => setSearchValues({ ...searchValues, productName: "" })}
      />
    </header>
  );
};

export default SearchField;
