import { SAVE_VIEWED } from './actions';
 
	export const viewed = (state = [] , action) => {
    		const { type, payload } = action;

    		switch (type) {
        		case SAVE_VIEWED: {
            			const { text } = payload;
            			const newViewed = {
                			text,
                			isCompleted: false,
            			};
            			return state.concat(newViewed);
        		}
        		default:
            			return state;
    		}
	}