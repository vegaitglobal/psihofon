import { Questionnaire } from "../models/Questionnaire";
import { isConnected } from "./apiUtils";
import axiosInstance from "./axiosInstance";

interface QuestionnaireService {
    fetchQuestionnaire(): Promise<Questionnaire>;
}

class QuestionnaireAxiosService implements QuestionnaireService {
    fetchQuestionnaire(): Promise<Questionnaire> {
        if (!isConnected()) {
            return Promise.reject("no connection");
        }
        return axiosInstance
            .get('/questionnaire')
            .then((response) => response.data)
            .then((data) => data as Questionnaire)
            .catch((error) => Promise.reject(error));
    }
}

export default new QuestionnaireAxiosService() as QuestionnaireService; 