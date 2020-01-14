import ControllerBase from './ControllerBase';
import { UserQuizModel } from '../model/UserQuizModel';
import { ParamModel } from '../model/ParamModel';

class UserQuiz extends ControllerBase {

    onInsert = (userQuizz = UserQuizModel) => {
        return this.axios.post('/userquizzes', userQuizz)
    }

    onUpdate = (userQuizz = UserQuizModel) => {
        return this.axios.put('/userquizzes/'+ userQuizz.id, userQuizz)
    }

    getList = (paramModel = ParamModel) => {
        const createQueryParam =  (param, idx) => (idx === 0 ? "?"+ param[0] +"="+ param[1] : "&"+ param[0] +"="+ param[1]);
        const isParamNotNull = param => param[1] !== null;
        const queryParam = Object.entries(paramModel).filter(isParamNotNull).map(createQueryParam).join("")
        return this.axios.get('userquizzes'+ queryParam)
    }

    getCount = () => {
        return this.axios.get('/userquizzes/count')
    }

    getById = (id) => {
        return this.axios.get('/userquizzes/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('/userquizzes/'+ id)
    }
}

export default UserQuiz;

