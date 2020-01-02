import ControllerBase from './ControllerBase'
import { CityModel } from '../model/CityModel'

class Cities extends ControllerBase {

    onInsert = (city = CityModel) => {
        return this.axios.post('cities', city)
    }

    getList = () => {
        return this.axios.get('cities')
    }

    getCount = () => {
        return this.axios.get('cities/count')
    }

    getById = (id) => {
        return this.axios.get('cities/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('cities/'+ id)
    }
}

export default Cities