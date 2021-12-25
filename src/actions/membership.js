import { CHANGE_MEMBERSHIP } from './types'

export const changeMembership = (hasMembership) => {
    return dispatch => dispatch({ type: CHANGE_MEMBERSHIP, payload: hasMembership })
}