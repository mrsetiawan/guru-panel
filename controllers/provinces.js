import ControllerBase from './ControllerBase';
import { ProvinceModel } from '../model/GradeModel';

class Provinces extends ControllerBase {

    onInsert = (province = ProvinceModel) => {
        return this.axios.post('provinces', province)
    }

    getList = () => {
        return this.axios.get('provinces')
    }

    getCount = () => {
        return this.axios.get('provinces/count')
    }

    getById = (id) => {
        return this.axios.get('provinces/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('provinces/'+ id)
    }
}

export default Provinces