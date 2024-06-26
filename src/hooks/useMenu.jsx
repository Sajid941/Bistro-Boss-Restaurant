import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {
    const { data: items=[], isPending,refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios('http://localhost:3000/menu')
            return res.data
        }
    })
    return {items,isPending,refetch}
};

export default useMenu;