
import BIButton from './button/index'

const components = [
    BIButton
]

const install = Vue => {
    if(install.installed) return
    components.map(component => Vue.component(component.name, component))
}

export default {
    install
}