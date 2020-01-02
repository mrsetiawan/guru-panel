import ControllerBase from './ControllerBase';
import { GradeModel } from '../model/GradeModel';

class Grades extends ControllerBase {

    onInsert = (grades = GradeModel) => {
        return this.axios.post('grades', grades)
    }

    getList = () => {
        return this.axios.get('grades')
    }

    getCount = () => {
        return this.axios.get('grades/count')
    }

    getById = (id) => {
        return this.axios.get('grades/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('grades/'+ id)
    }
}

export default Grades