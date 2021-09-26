import { Organization } from '../models/Organization';
import axiosInstance from './axiosInstance';

interface OrganziationService {
    fetchOrganizations(): Promise<Array<Organization>>;
}

class OrganizationAxiosService implements OrganziationService{
    fetchOrganizations(): Promise<Array<Organization>> {
        return axiosInstance
                .get('/organizations')
                .then((res) => res.data)
                .then((data) => data as Array<Organization>)
                .catch((error) => Promise.reject(error));
    }
}

export default new OrganizationAxiosService() as OrganziationService;