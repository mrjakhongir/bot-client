import type { SearchFieldI } from "@/App";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { Loader } from "lucide-react";

type SearchFieldProps = {
  searchValues: SearchFieldI;
};

const DataTable: React.FC<SearchFieldProps> = ({ searchValues }) => {
  const { data, isLoading, isError, error } = useGoogleSheet();
  if (isLoading)
    return <Loader className='w-10 h-10 animate-spin mx-auto mt-5' />;
  if (isError) return <p>{error?.message ?? "Something went wrong"}</p>;
  const filteredData = data
    ?.flat()
    .filter((item) => item["Код товара"].includes(searchValues.productCode))
    .filter((item) => item["Номенклатура"].includes(searchValues.productName));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='min-w-[167px] sticky left-0 bg-white'>
            Номенклатура
          </TableHead>
          <TableHead className='min-w-[167px]'>Код товара</TableHead>
          <TableHead className='max-w-[110px] whitespace-normal'>
            Единица измерения
          </TableHead>
          <TableHead className='text-left'>Место хранения</TableHead>
          <TableHead className='text-left min-w-[200px] whitespace-normal'>
            Документ оприходования.Вх номер
          </TableHead>
          <TableHead className='text-left max-w-[120px] whitespace-normal'>
            Документ оприходования.Номер
          </TableHead>
          <TableHead className='text-left'>Количество</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData?.map((item, index) => (
          <TableRow className='text-[12px] text-slate-700' key={index}>
            <TableCell className='whitespace-normal sticky left-0 bg-white'>
              {item["Номенклатура"]}
            </TableCell>
            <TableCell className='min-w-[167px] whitespace-normal'>{item["Код товара"]}</TableCell>
            <TableCell>{item["Единица измерения"]}</TableCell>
            <TableCell>{item["Место хранения"]}</TableCell>
            <TableCell>{item["Документ оприходования.Вх номер"]}</TableCell>
            <TableCell>{item["Документ оприходования.Номер"]}</TableCell>
            <TableCell>{item["Количество"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
