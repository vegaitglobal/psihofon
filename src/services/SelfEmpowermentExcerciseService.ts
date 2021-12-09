import {SelfEmpowermentExercise} from '../models/SelfEmpowermentExercise';
import {isConnected} from './apiUtils';
import axiosInstance from './axiosInstance';

interface SelfEmpowermentExcerciseService {
  fetchSelfEmpowermentExcercises(): Promise<Array<SelfEmpowermentExercise>>;
}

class SelfEmpowermentAxiosService implements SelfEmpowermentExcerciseService {
  async fetchSelfEmpowermentExcercises(): Promise<
    Array<SelfEmpowermentExercise>
  > {
    if (!isConnected()) {
      return Promise.reject('no connection');
    }
    return axiosInstance
      .get('/self-empowerment-exercises')
      .then(response => response.data)
      .then(data => data as Array<SelfEmpowermentExercise>)
      .catch(error => Promise.reject(error));
  }
}

export default new SelfEmpowermentAxiosService() as SelfEmpowermentExcerciseService;
