import { MentalState } from "../models/MentalState";
import { isConnected } from "./apiUtils";
import axiosInstance from "./axiosInstance";

interface MentalStateService {
    fetchMentalStates(): Promise<Array<MentalState>>;
}

class MentalStateAxiosService implements MentalStateService {
    fetchMentalStates(): Promise<Array<MentalState>> {
        if (!isConnected()) {
            return Promise.reject("no connection");
        }
        return axiosInstance
            .get('/mental-states')
            .then((res) => res.data)
            .then((data) => data as Array<MentalState>)
            .catch((error) => Promise.reject(error));
    }
}

export default new MentalStateAxiosService() as MentalStateService;