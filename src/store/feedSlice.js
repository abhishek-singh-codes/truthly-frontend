import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// API-1 will get all the feed items 

export const fetchFeed = createAsyncThunk(
    "feed/fetchFeed",
    // get payload data 
    async ({ IP, token, cursor }) => {
        
        // create the url
        const url = cursor
            ? `${IP}/api/v1/feed?cursor=${cursor}`
            : `${IP}/api/v1/feed`;
        
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); 

        if (!res.ok) {
            throw new Error("Feed API failed")
        }

        return res.json()
    }
)

export const fetchFeedByRange = createAsyncThunk(
    "feed/fetchFeedByRange", 

    async ({ IP, token, radius, cursor, lat, long }) => {
        // let url -> to update it further
        console.log("IP", IP)
        let url = `${IP}/api/v1/feed/nearby?radius=${radius}&lat=${lat}&long=${long}`

        if (cursor) url += `&cursor=${cursor}`

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }); 

        if (!res.ok) {
            throw new Error("Range API failed")
        }

        return res.json()
    }
)

const feedSlice = createSlice({
    name: "feed",

    initialState: {
        items: [], 
        cursor: null, 
        hasMore: true, 
        loading: false, 
        mode: "NORMAL", // NORMAL , RANGE
        radius: null
    }, 

    reducers: {

        resetFeed(state) {
            state.items = []
            state.cursor = null
            state.hasMore = true  
        }, 

        enableRangeMode(state, action) {
            state.mode = "RANGE"
            state.radius=action.payload
        }, 

        enableNormalMode(state) {
            state.mode="NORMAL"
        }, 
    }, 

    extraReducers: (builder) => {
        builder
            .addCase(fetchFeed.pending, (state) => {
                state.loading = true
            })
        
            .addCase(fetchFeed.fulfilled, (state, action) => {
                const { items, pagination } = action.payload.resultObj
                
                state.items.push(...items)

                state.cursor = pagination.nextcursor

                state.hasMore = pagination.hasMore

                state.loading = false
            })
        
            .addCase(fetchFeedByRange.pending, (state) => {
                state.loading = true
            })
        
            .addCase(fetchFeedByRange.fulfilled, (state, action) => {
                const { items, pagination } = action.payload.resultObj
                
                state.items.push(...items)

                state.cursor = pagination.nextcursor

                state.hasMore = pagination.hasMore

                state.loading = false
            })
        
            .addCase(fetchFeed.rejected, (state) => {
                state.loading = false
            })

            .addCase(fetchFeedByRange.rejected, (state) => {
                state.loading = false
            })

    }
})

export const {
    resetFeed, 
    enableRangeMode, 
    enableNormalMode
} = feedSlice.actions

// store need this reducer 
export default feedSlice.reducer