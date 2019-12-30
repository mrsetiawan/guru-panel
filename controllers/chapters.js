import ControllerBase from './ControllerBase'

class chapters extends ControllerBase {
    index = () => {
        return this.axios.get('chapters')
    }
}

export default chapters