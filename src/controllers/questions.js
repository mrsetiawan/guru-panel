import ControllerBase from './ControllerBase';
import {
    QuestionsModel
} from '../model/questionsModel';

class UserQuiz extends ControllerBase {

    onInsert = (userQuizz = UserQuizModel) => {
        return this.axios.post('/userquizzes', userQuizz)
    }

    onUpdate = (userQuizz = UserQuizModel) => {
        return this.axios.put('/userquizzes/' + userQuizz.id, userQuizz)
    }

    getList = () => {
        return this.axios.get('/userquizzes')
    }

    getCount = () => {
        return this.axios.get('/userquizzes/count')
    }

    getById = (id) => {
        return this.axios.get('/userquizzes/' + id)
    }

    onDelete = (id) => {
        return this.axios.delete('/userquizzes/' + id)
    }
}

export default Questions;