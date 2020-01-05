import ControllerBase from './ControllerBase'
import { ChapterModel } from '../model/ChapterModel'
import { ParamModel } from '../model/ParamModel'

class chapters extends ControllerBase {

    onInsert = (chapter = ChapterModel) => {
        return this.axios.post('chapters', chapter)
    }

    onUpdate = (chapter = ChapterModel) => {
        return this.axios.put('chapters/'+ chapter.id, chapter)
    }

    getList = (paramModel = ParamModel) => {
        const createQueryParam =  (param, idx) => (idx === 0 ? "?"+ param[0] +"="+ param[1] : "&"+ param[0] +"="+ param[1]);
        const isParamNotNull = param => param[1] !== null;
        const queryParam = Object.entries(paramModel).filter(isParamNotNull).map(createQueryParam).join("")
        return this.axios.get('chapters'+ queryParam)
    }

    getCount = () => {
        return this.axios.get('chapters/count')
    }

    getById = (id) => {
        return this.axios.get('chapters/'+ id)
    }

    onDelete = (id) => {
        return this.axios.delete('chapters/'+ id)
    }
}

export default chapters