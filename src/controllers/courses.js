import ControllerBase from './ControllerBase';
import { CourseModel } from '../model/CourseModel';
import { ParamModel } from '../model/ParamModel';

class Courses extends ControllerBase {

    onInsert = (course = CourseModel) => {
        return this.axios.post('courses', course)
    }

    onUpdate = (course = CourseModel) => {
        return this.axios.put('courses/'+ course.id, course)
    }

    getList = (paramModel = ParamModel) => {
        const createQueryParam =  (param, idx) => (idx === 0 ? "?"+ param[0] +"="+ param[1] : "&"+ param[0] +"="+ param[1]);
        const isParamNotNull = param => param[1] !== null;
        const queryParam = Object.entries(paramModel).filter(isParamNotNull).map(createQueryParam).join("")
        return this.axios.get('courses'+ queryParam)
    }

    getCount = () => {
        return this.axios.get('courses/count')
    }

    getById = (id) => {
        return this.axios.get('courses/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('courses/'+ id)
    }
}

export default Courses