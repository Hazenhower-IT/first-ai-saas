import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", rapidApiKey)
            headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com")
            

            return headers
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encode URI component fa si che anche se il testo contiene caratteri speciali l'azione non dia errori
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const {useLazyGetSummaryQuery} = articleApi;