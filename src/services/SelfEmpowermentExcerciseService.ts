import { SelfEmpowermentExercise } from "../models/SelfEmpowermentExercise";
import axiosInstance from "./axiosInstance";

interface SelfEmpowermentExcerciseService {
    fetchSelfEmpowermentExcercises(): Promise<Array<SelfEmpowermentExercise>>;
}

class SelfEmpowermentAxiosService implements SelfEmpowermentExcerciseService {
    fetchSelfEmpowermentExcercises(): Promise<Array<SelfEmpowermentExercise> {
        return axiosInstance
            .get('/self-empowerment-exercises')
            .then((response) => response.data)
            .then((data) => data as Array<SelfEmpowermentExercise>)
            .catch((error) => Promise.reject(error));            
    }    
}