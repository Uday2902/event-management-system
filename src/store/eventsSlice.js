import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: []
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action) => {
            state.events = action.payload.events;
            console.log("Events state updated in redux");
        }
    }
})

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
