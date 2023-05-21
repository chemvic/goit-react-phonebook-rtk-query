import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64635cbe4dca1a66135b925a.mockapi.io' }),

  tagTypes: ['contacts'],

  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
       providesTags: ['contacts'],
    }),   
  
  addContact: builder.mutation({
   
    query: ({name, phone}) => ({
      url: `/contacts`,
      method: 'POST',
      body: {
      name,
      phone},
    }),    
    invalidatesTags: ['contacts'],
}),

deleteContact: builder.mutation({
  query: id => ({
    url: `/contacts/${id}`,
    method: 'DELETE',
  }),
  invalidatesTags: ['contacts'],
}),
}),
});
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation  } = contactsApi;














// import { createSlice } from '@reduxjs/toolkit';
// import {fetchContacts, addContact, deleteContact} from "../redux/operations";

// const initialState={     
//       items: [],
//       isLoading: false,
//       error: null
//   };
//    const handlePending = state => {
//     state.isLoading = true;
//   };
  
//   const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;    
//   };

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState, 
//     extraReducers: (builder) =>{
//       builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action)=>{
//         state.isLoading=false;
//         state.items=action.payload;
//         state.error=null;
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action)=>{
//         state.isLoading=false;
//         state.items.push(action.payload);
//         state.error=null;
//       })
//       .addCase(deleteContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action)=>{
//         state.isLoading=false;
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//         state.error=null;
//       })  
//     }
//   });

// export const contactsReducer = contactsSlice.reducer;
