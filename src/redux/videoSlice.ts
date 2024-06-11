import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface VideoCard {
  query: string;
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  viewCount: string;
}

interface VideoState {
  videos: VideoCard[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const YOUTUBE_API_KEY = "AIzaSyBmo4wmh4lZcJaQlthTh7Oq2hJ4UPE6HWw";

export const fetchVideos = createAsyncThunk(
  "video/fetchVideos",
  async ({
    query,
    maxResults = 12,
  }: {
    query: string;
    maxResults?: number;
  }) => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          q: query,
          key: YOUTUBE_API_KEY,
          maxResults: maxResults,
          type: "video",
        },
      },
    );

    console.log(response);

    return await Promise.all(
      response.data.items.map(async (item: any) => {
        const videoId = item.id.videoId;
        const videoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: "statistics",
              id: videoId,
              key: YOUTUBE_API_KEY,
            },
          },
        );
        const videoData = videoResponse.data.items[0];

        return {
          query,
          id: videoId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnailUrl: item.snippet.thumbnails.high.url,
          viewCount: videoData.statistics.viewCount,
        } as VideoCard;
      }),
    );
  },
);

const initialState: VideoState = {
  videos: [],
  status: "idle",
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default videoSlice.reducer;
