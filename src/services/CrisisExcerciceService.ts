import { CrisisExercise } from '../models/CrisisExercise';
import axiosInstance from './axiosInstance';

interface CrisisExerciceService {
    fetchCrisisExercices(): Promise<Array<CrisisExercise>>;
}

class CrisisExericeAxiosService implements CrisisExerciceService {
    fetchCrisisExercices(): Promise<Array<CrisisExercise>> {
        return axiosInstance
            .get('/crisis-exercises')
            .then((res) => res.data)
            .then((data) => data as Array<CrisisExercise>)
            .catch((error) => Promise.reject(error));
    }
}

export default new CrisisExericeAxiosService() as CrisisExerciceService;