import ControllerBase from './ControllerBase'
import { ChapterModel } from '../model/ChapterModel'

class chapters extends ControllerBase {

    onInsert = (chapter = ChapterModel) => {
        return this.axios.post('chapters', chapter)
    }

    onUpdate = (chapter = ChapterModel) => {
        return this.axios.put('chapters/'+ chapter.id, chapter)
    }

    getList = () => {
        return this.axios.get('chapters')
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