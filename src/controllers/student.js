import ControllerBase from './ControllerBase'
import { StudentModel } from '../model/StudentModel'
import { ParamModel } from '../model/ParamModel'

class student extends ControllerBase {
  getList = (paramModel = ParamModel) => {
    const createQueryParam =  (param, idx) => (idx === 0 ? "?"+ param[0] +"="+ param[1] : "&"+ param[0] +"="+ param[1]);
    const isParamNotNull = param => param[1] !== null;
    const queryParam = Object.entries(paramModel).filter(isParamNotNull).map(createQueryParam).join("")
    return this.axios.get('students' + queryParam)
  }
}

export default student