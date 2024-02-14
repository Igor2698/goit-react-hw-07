import { createSlice, nanoid } from '@reduxjs/toolkit';


const contactsInitialState = { items: [] }

const contactsSlice = createSlice({
    name: 'contact',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {

                state.items.push(action.payload)
            },
            prepare(item) {
                return {
                    payload: {
                        name: item.name,
                        number: item.number,
                        id: nanoid(),
                    }

                }
            }
        },
        deleteContact: {
            reducer(state, action) {
                return { items: state.items.filter(item => item.id !== action.payload) }
            }
        }

    }
})

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;