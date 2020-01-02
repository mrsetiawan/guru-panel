import ControllerBase from './ControllerBase';
import { QuizModel } from '../model/QuizModel';

class Quiz extends ControllerBase {

    onInsert = (quizz = QuizModel) => {
        return this.axios.post('quizzes', quizz)
    }

    getList = () => {
        return this.axios.get('quizzes')
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

