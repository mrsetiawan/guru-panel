import ControllerBase from './ControllerBase';
import { SchoolModel } from '../model/SchoolModel';

class Schools extends ControllerBase {

    onInsert = (school = SchoolModel) => {
        return this.axios.post('schools', school)
    }

    onUpdate = (school = SchoolModel) => {
        return this.axios.put('schools/'+ school.id, school)
    }

    getList = () => {
        return this.axios.get('schools')
    }

    getCount = () => {
        return this.axios.get('schools/count')
    }

    getById = (id) => {
        return this.axios.get('schools/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('schools/'+ id)
    }
}

export default Schools;

