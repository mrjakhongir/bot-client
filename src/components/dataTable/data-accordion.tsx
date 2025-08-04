import type { SearchFieldI } from "@/App";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { Loader } from "lucide-react";

type AccordionDataProps = {
  searchValues: SearchFieldI;
};

export const AccordionData: React.FC<AccordionDataProps> = ({
  searchValues,
}) => {
  const { data, isLoading, isError, error } = useGoogleSheet();
  if (isLoading)
    return <Loader className='w-10 h-10 animate-spin mx-auto mt-5' />;
  if (isError) return <p>{error?.message ?? "Something went wrong"}</p>;
  const filteredData = data
    ?.flat()
    .filter((item) => item["Код товара"].includes(searchValues.productCode))
    .filter((item) => item["Номенклатура"].includes(searchValues.productName));
  return (
    <Accordion type='single' collapsible className='w-full'>
      {filteredData?.map((item, index) => (
        <AccordionItem value={String(index)}>
          <AccordionTrigger>{item["Номенклатура"]}</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4'>
            <ul className="bg-slate-50 p-2 rounded-md">
              <li className='flex justify-between'>
                <b>Код товара:</b>
                {item["Код товара"]}
              </li>
              <li className='flex justify-between'>
                <b>Ед.изм:</b>
                {item["Ед.изм"]}
              </li>
              <li className='flex justify-between'>
                <b>Количество:</b>
                {item["Количество"]}
              </li>
              <li className='flex justify-between'>
                <b>Место хранения:</b>
                {item["Место хранения"]}
              </li>
              <li className='flex justify-between'>
                <b>Инвойс:</b>
                {item["Инвойс"]}
              </li>
              <li className='flex justify-between'>
                <b>Номер:</b>
                {item["Номер"]}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
