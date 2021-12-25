import { CHANGE_MEMBERSHIP } from "../actions/types"

const INIT_STATE = {
    hasMembership: false
}

export const membershipReducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        case CHANGE_MEMBERSHIP:
            return {
                ...state,
                hasMembership: action.payload
            }

        default:
            return state;
    }
}