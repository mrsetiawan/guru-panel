import ControllerBase from './ControllerBase';
import { QuizModel } from '../model/QuizModel';
import { ParamModel } from '../model/ParamModel';

class Quiz extends ControllerBase {

    onInsert = (quizz = QuizModel) => {
        return this.axios.post('quizzes', quizz)
    }

    onUpdate = (quizz = QuizModel) => {
        return this.axios.put('quizzes/'+ quizz._id, quizz)
    }

    getList = (paramModel = ParamModel) => {
        const createQueryParam =  (param, idx) => (idx === 0 ? "?"+ param[0] +"="+ param[1] : "&"+ param[0] +"="+ param[1]);
        const isParamNotNull = param => param[1] !== null;
        const queryParam = Object.entries(paramModel).filter(isParamNotNull).map(createQueryParam).join("")
        return this.axios.get('quizzes'+ queryParam)
    }

    getCount = () => {
        return this.axios.get('quizzes/count')
    }

    getById = (id) => {
        return this.axios.get('quizzes/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('quizzes/'+ id)
    }
}

export default Quiz;

