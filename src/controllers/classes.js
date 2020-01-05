import ControllerBase from './ControllerBase';
import { ClassModel } from '../model/ClassModel';
import { ParamModel } from '../model/ParamModel';

class Classes extends ControllerBase {

    onInsert = (classes = ClassModel) => {
        return this.axios.post('classes', classes)
    }

    onUpdate = (classes = ClassModel) => {
        return this.axios.put('classes/'+ classes.id, classes)
    }

    getList = (paramModel = ParamModel) => {
        const createQueryParam =  (param, idx) => (idx == 0 ? "?"+ param[0] +"="+ param[1] : "&"+ param[0] +"="+ param[1]);
        const isParamNotNull = param => param[1] !== null;
        const queryParam = Object.entries(paramModel).filter(isParamNotNull).map(createQueryParam).join("")
        return this.axios.get('classes'+ queryParam)
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