import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShot";
import ApiClient from "../services/api-client";


const useScreenShots = (id: number) => {
    const apiClient = new ApiClient<ScreenShot>(`/games/${id}/screenshots`);
    return useQuery({
        queryKey: ["screenshots" , id],
        queryFn: apiClient.getAll
    });
} 


export default useScreenShots;