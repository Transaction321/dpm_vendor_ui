import {renewSession, createData, updateData} from './utils'
import {toast} from 'react-toastify'

export const addVehicle = async (vehicle) => {
    try{
        const data = await createData('/vehicle/create', vehicle);
        toast(data.data.message);
        return true
    } catch(error) {
        const result = await renewSession(error);
        if(result.status !== 200) {
            toast.error(result.message);
            return false
        } else {
            const data = await createData('/vehicle/create', vehicle);
            toast(data.data.message);
            return true
        }
    }
}

export const updateVehicle = async (vehicle) => {
    try{
        const data = await updateData('/vehicle/create', vehicle);
        toast(data.data.message);
        return true
    } catch(error) {
        const result = await renewSession(error);
        if(result.status !== 200) {
            toast.error(result.message);
            return false
        } else {
            const data = await updateData('/vehicle/create', vehicle);
            toast(data.data.message);
            return true
        }
    }
}
   