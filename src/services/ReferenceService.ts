import {Reference} from '../models/Reference';
import {isConnected} from './apiUtils';
import axiosInstance from './axiosInstance';

interface ReferenceService {
  fetchReferences(): Promise<Array<Reference>>;
}

class ReferenceAxiosService implements ReferenceService {
  fetchReferences(): Promise<Array<Reference>> {
    if (!isConnected()) {
      return Promise.reject('no connection');
    }
    return axiosInstance
      .get('/references')
      .then(res => res.data)
      .then(data => data as Array<Reference>)
      .catch(error => Promise.reject(error));
  }
}

export default new ReferenceAxiosService() as ReferenceService;
