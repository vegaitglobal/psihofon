import { MentalState } from "../models/MentalState";
import axiosInstance from "./axiosInstance";

interface MentalStateService {
    fetchMentalStates(): Promise<Array<MentalState>>;
}

class MentalStateAxiosService implements MentalStateService {
    fetchMentalStates(): Promise<Array<MentalState>> {
        return axiosInstance
            .get('/mental-states')
            .then((res) => res.data)
            .then((data) => data as Array<MentalState>)
            .catch((error) => Promise.reject(error));
    }
}

export default new MentalStateAxiosService() as MentalStateService;