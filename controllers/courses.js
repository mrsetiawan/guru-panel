import ControllerBase from './ControllerBase';
import { CourseModel } from '../model/CourseModel';

class Courses extends ControllerBase {

    onInsert = (course = CourseModel) => {
        return this.axios.post('courses', course)
    }

    getList = () => {
        return this.axios.get('courses')
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