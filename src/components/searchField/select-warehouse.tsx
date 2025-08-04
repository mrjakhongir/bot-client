import type { SearchFieldI } from "@/App";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SearchFieldProps = {
  searchValues: SearchFieldI;
  setSearchValues: React.Dispatch<React.SetStateAction<SearchFieldI>>;
};

const SelectWarehouse: React.FC<SearchFieldProps> = ({
  searchValues,
  setSearchValues,
}) => {
  return (
    <Select
      value={searchValues.productPlace}
      onValueChange={(e) =>
        setSearchValues({ productCode: "", productName: "", productPlace: e })
      }
    >
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='Место хранения' />
      </SelectTrigger>
      <SelectContent className='max-h-[80dvh]'>
        <SelectGroup>
          <SelectLabel>Навес</SelectLabel>
          <SelectItem value='Навес 1'>Навес 1</SelectItem>
          <SelectItem value='Навес 2'>Навес 2</SelectItem>
          <SelectItem value='Навес 3'>Навес 3</SelectItem>
          <SelectItem value='Навес 1 А - 1'>Навес 1 А - 1</SelectItem>
          <SelectItem value='Навес 1 А - 2'>Навес 1 А - 2</SelectItem>
          <SelectItem value='Навес 1 А 1-2'>Навес 1 А 1-2</SelectItem>
          <SelectItem value='Навес Метизы'>Навес Метизы</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Плошадка</SelectLabel>
          <SelectItem value='Плошадка № А-1'>Плошадка № А-1</SelectItem>
          <SelectItem value='Плошадка № А-2'>Плошадка № А-2</SelectItem>
          <SelectItem value='Плошадка № А-3'>Плошадка № А-3</SelectItem>
          <SelectItem value='Плошадка № В-1'>Плошадка № В-1</SelectItem>
          <SelectItem value='Плошадка № В-2'>Плошадка № В-2</SelectItem>
          <SelectItem value='Плошадка № В-3'>Плошадка № В-3</SelectItem>
          <SelectItem value='Плошадка № С-1'>Плошадка № С-1</SelectItem>
          <SelectItem value='Плошадка № С-2'>Плошадка № С-2</SelectItem>
          <SelectItem value='Плошадка № С-3'>Плошадка № С-3</SelectItem>
          <SelectItem value='лощадка лист'>лощадка лист</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Транзит</SelectLabel>
          <SelectItem value='Транзит (Ш)'>Транзит (Ш)</SelectItem>
          <SelectItem value='Транзит АГМК'>Транзит АГМК</SelectItem>
          <SelectItem value='Транзит А срочно'>Транзит А срочно</SelectItem>
          <SelectItem value='Транзит ЗРА Цех'>Транзит ЗРА Цех</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Другие</SelectLabel>
          <SelectItem value='ERIELL'>ERIELL</SelectItem>
          <SelectItem value='Ж/Д (металл)'>Ж/Д (металл)</SelectItem>
          <SelectItem value='А1 Ж/Д Эстакада'>А1 Ж/Д Эстакада</SelectItem>
          <SelectItem value='А1 Ж/Д Эстакада'>А1 Ж/Д Эстакада</SelectItem>
          <SelectItem value='Ангар 1'>Ангар 1</SelectItem>
          <SelectItem value='Ангар 1 ташкари'>Ангар 1 ташкари</SelectItem>
          <SelectItem value='Авто плошадка'>Авто плошадка</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectWarehouse;
