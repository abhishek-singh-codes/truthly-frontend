import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ---------- NORMAL FEED ---------- */
export const fetchFeed = createAsyncThunk(
  "feed/fetchFeed",
  async ({ IP, token, cursor }) => {
    const url = cursor
      ? `${IP}/api/v1/feed?cursor=${cursor}`
      : `${IP}/api/v1/feed`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Feed API failed");
    return res.json();
  }
);

/* ---------- RANGE FEED ---------- */
export const fetchFeedByRange = createAsyncThunk(
  "feed/fetchFeedByRange",
  async ({ IP, token, radius, cursor, lat, long }) => {
    let url = `${IP}/api/v1/feed/nearby?radius=${radius}&lat=${lat}&long=${long}`;
    if (cursor) url += `&cursor=${cursor}`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Range API failed");
    return res.json();
  }
);

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    items: [],
    normalCursor: null,
    rangeCursor: null,
    hasMore: true,
    loading: false,
    mode: "NORMAL",
    radius: null,
  },

  reducers: {
    resetFeed(state) {
      state.items = [];
      state.normalCursor = null;
      state.rangeCursor = null;
      state.hasMore = true;
    },

    enableRangeMode(state, action) {
      state.mode = "RANGE";
      state.radius = action.payload;
    },

    enableNormalMode(state) {
      state.mode = "NORMAL";
      state.radius = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        const { items, pagination } = action.payload.resultObj;
        state.items.push(...items);
        state.normalCursor = pagination.nextCursor;
        state.hasMore = pagination.hasMore;
        state.loading = false;

        console.log("Fetched feed items:", items);
        console.log("Next cursor:", pagination.nextCursor);
        console.log("Has more?", pagination.hasMore);
      })

      .addCase(fetchFeedByRange.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeedByRange.fulfilled, (state, action) => {
        const { items, pagination } = action.payload.resultObj;
        state.items.push(...items);
        state.rangeCursor = pagination.nextCursor;
        state.hasMore = pagination.hasMore;
        state.loading = false;
      })

      .addCase(fetchFeed.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchFeedByRange.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetFeed, enableRangeMode, enableNormalMode } =
  feedSlice.actions;

export default feedSlice.reducer;
