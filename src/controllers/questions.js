import ControllerBase from './ControllerBase';
import {
    QuestionsModel
} from '../model/questionsModel';

class Questions extends ControllerBase {

    onInsert = (questions = QuestionsModel) => {
        return this.axios.post('/questions', questions)
    }

    onUpdate = (questions = QuestionsModel) => {
        return this.axios.put('/questions/' + userQuizz.id, questions)
    }

    getList = () => {
        return this.axios.get('/questions')
    }

    getCount = () => {
        return this.axios.get('/questions/count')
    }

    getById = (id) => {
        return this.axios.get('/questions/' + id)
    }

    onDelete = (id) => {
        return this.axios.delete('/questions/' + id)
    }
}

export default Questions;
