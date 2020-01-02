import ControllerBase from './ControllerBase';
import { ProvinceModel } from '../model/ProvinceModel';

class Provinces extends ControllerBase {

    onInsert = (province = ProvinceModel) => {
        return this.axios.post('provinces', province)
    }

    onUpdate = (province = ProvinceModel) => {
        return this.axios.put('provinces/'+ province.id, province)
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