import ControllerBase from './ControllerBase';
import { ClassModel } from '../model/ClassModel';

class Classes extends ControllerBase {

    onInsert = (classes = ClassModel) => {
        return this.axios.post('classes', classes)
    }

    getList = () => {
        return this.axios.get('classes')
    }

    getCount = () => {
        return this.axios.get('classes/count')
    }

    getById = (id) => {
        return this.axios.get('classes/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('classes/'+ id)
    }
}

export default Classes