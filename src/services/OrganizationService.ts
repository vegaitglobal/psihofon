import { Organization } from '../models/Organization';
import { isConnected } from './apiUtils';
import axiosInstance from './axiosInstance';

interface OrganziationService {
    fetchOrganizations(): Promise<Array<Organization>>;
}

class OrganizationAxiosService implements OrganziationService{
    fetchOrganizations(): Promise<Array<Organization>> {
        if (!isConnected()) {
            return Promise.reject("no connection");
        }
        return axiosInstance
                .get('/organizations')
                .then((res) => res.data)
                .then((data) => data as Array<Organization>)
                .catch((error) => Promise.reject(error));
    }
}

export default new OrganizationAxiosService() as OrganziationService;