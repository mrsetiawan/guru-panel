import ControllerBase from './ControllerBase';
import { QuestionsourceModel } from '../model/QuestionsourceModel';

class Questionsources extends ControllerBase {

    onInsert = (questionsource = QuestionsourceModel) => {
        return this.axios.post('questionsources', questionsource)
    }

    getList = () => {
        return this.axios.get('questionsources')
    }

    getCount = () => {
        return this.axios.get('questionsources/count')
    }

    getById = (id) => {
        return this.axios.get('questionsources/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('questionsources/'+ id)
    }
}

export default Questionsources