import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ravitestdatamodel_list = createAsyncThunk(
  "ravitestdatamodels/api_v1_ravitestdatamodel_list",
  async payload => {
    const response = await apiService.api_v1_ravitestdatamodel_list(payload)
    return response.data
  }
)
export const api_v1_ravitestdatamodel_create = createAsyncThunk(
  "ravitestdatamodels/api_v1_ravitestdatamodel_create",
  async payload => {
    const response = await apiService.api_v1_ravitestdatamodel_create(payload)
    return response.data
  }
)
export const api_v1_ravitestdatamodel_retrieve = createAsyncThunk(
  "ravitestdatamodels/api_v1_ravitestdatamodel_retrieve",
  async payload => {
    const response = await apiService.api_v1_ravitestdatamodel_retrieve(payload)
    return response.data
  }
)
export const api_v1_ravitestdatamodel_update = createAsyncThunk(
  "ravitestdatamodels/api_v1_ravitestdatamodel_update",
  async payload => {
    const response = await apiService.api_v1_ravitestdatamodel_update(payload)
    return response.data
  }
)
export const api_v1_ravitestdatamodel_partial_update = createAsyncThunk(
  "ravitestdatamodels/api_v1_ravitestdatamodel_partial_update",
  async payload => {
    const response = await apiService.api_v1_ravitestdatamodel_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_ravitestdatamodel_destroy = createAsyncThunk(
  "ravitestdatamodels/api_v1_ravitestdatamodel_destroy",
  async payload => {
    const response = await apiService.api_v1_ravitestdatamodel_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ravitestdatamodelsSlice = createSlice({
  name: "ravitestdatamodels",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_ravitestdatamodel_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ravitestdatamodel_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ravitestdatamodel_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ravitestdatamodel_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ravitestdatamodel_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ravitestdatamodel_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ravitestdatamodel_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ravitestdatamodel_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_ravitestdatamodel_list,
  api_v1_ravitestdatamodel_create,
  api_v1_ravitestdatamodel_retrieve,
  api_v1_ravitestdatamodel_update,
  api_v1_ravitestdatamodel_partial_update,
  api_v1_ravitestdatamodel_destroy,
  slice: ravitestdatamodelsSlice
}
