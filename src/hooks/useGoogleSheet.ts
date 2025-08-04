import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGoogleSheet() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await axios.get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQWhoLv1tPTcf12wBNE30NW5Xc451CzFSQ0CF8ezK5umIg-VJ1VSrgSVf9uUVlGtuJTWajYtbV8fkpf/pub?gid=0&single=true&output=csv`
      );
      return res.data;
    },
    select: (data) => {
      return csvToObjects(data);
    },
    staleTime: 1000 * 60 * 10,
  });

  return { data, isLoading, error, isError };
}

function csvToObjects(csv: string) {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.forEach((header, idx) => {
      obj[header] = values[idx];
    });
    return obj;
  });
}

export interface Data {
  Номенклатура: string;
  "Код товара": string;
  "Ед.изм": string;
  Количество: string;
  "Место хранения": string;
  Инвойс: string;
  Номер: string;
}
