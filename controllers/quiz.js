import ControllerBase from './ControllerBase';
import { QuizModel } from '../model/QuizModel';

class Quiz extends ControllerBase {

    onInsert = (quizz = QuizModel) => {
        return this.axios.post('quizzes', quizz)
    }

    onGetList = () => {
        return this.axios.get('quizzes')
    }

    onGetById = (id) => {
        return this.axios.get('quizzes/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('quizzes/'+ id)
    }
}

export default Quiz;

