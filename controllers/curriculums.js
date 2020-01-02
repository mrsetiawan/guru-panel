import ControllerBase from './ControllerBase';
import { CurriculumModel } from '../model/CurriculumModel';

class Curriculums extends ControllerBase {

    onInsert = (curriculum = CurriculumModel) => {
        return this.axios.post('curriculums', curriculum)
    }

    getList = () => {
        return this.axios.get('curriculums')
    }

    getCount = () => {
        return this.axios.get('curriculums/count')
    }

    getById = (id) => {
        return this.axios.get('curriculums/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('curriculums/'+ id)
    }
}

export default Curriculums