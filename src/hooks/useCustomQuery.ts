import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetcher = async (url: string, options = {}) => {
  const { data } = await axios.get(url, options);
  return data;
};

export function useCustomQuery(key: string, url: string, queryOptions = {}, ) {
  return useQuery({
    queryKey: [key], // key duy nhat de luu du lieu tu api 
    queryFn: () => fetcher(url), // ham fetch data 
    refetchOnWindowFocus: false,
    ...queryOptions, // Các tùy chọn bổ sung của `useQuery`
  });
}
