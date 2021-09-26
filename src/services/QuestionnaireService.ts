import { Questionnaire } from "../models/Questionnaire";
import axiosInstance from "./axiosInstance";

interface QuestionnaireService {
    fetchQuestionnaire(): Promise<Questionnaire>;
}

class QuestionnaireAxiosService implements QuestionnaireService {
    fetchQuestionnaire(): Promise<Questionnaire> {
        return axiosInstance
            .get('/questionnaire')
            .then((response) => response.data)
            .then((data) => data as Questionnaire)
            .catch((error) => Promise.reject(error));
    }
}

export default new QuestionnaireAxiosService() as QuestionnaireService; 