export const SAVE_VIEWED = 'SAVE_VIEWED'
	export const saveViewed = text => ({
    		type: SAVE_VIEWED,
    		payload: { text },
	});