import { createSlice} from "@reduxjs/toolkit";

export type CounterState = {
    data: number;
};

const initialState: CounterState = {
    data: 42
};

// Slice باستخدام Redux Toolkit
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload;
        },
        decrement: (state, action) => {
            state.data -= action.payload;
        }
    }
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Export reducer for store
export default counterSlice.reducer;

// Legacy reducers (اختياري إذا كنت تريد دعم dispatch يدوي)
export function incrementLegacy(amount = 1) {
    return {
        type: 'increment',
        payload: amount
    };
}

export function decrementLegacy(amount = 1) {
    return {
        type: 'decrement',
        payload: amount
    };
}

// Legacy reducer (ممكن تستخدمه بدون createSlice)
export function counterReducer(state = initialState, action: { type: string; payload: number }) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                data: state.data + action.payload
            };
        case 'decrement':
            return {
                ...state,
                data: state.data - action.payload
            };
        default:
            return state;
    }
}
