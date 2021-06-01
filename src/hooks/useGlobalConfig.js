import {getCurrentInstance} from 'vue'
const useGlobalConfig = () => {
    const {appContext} = getCurrentInstance()
    return appContext.config.globalProperties
}
export default useGlobalConfig