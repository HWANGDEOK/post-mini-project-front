import { useInfiniteQuery } from "@tanstack/react-query";
import { getFeeds } from "../apis/posts/postApi";

export const useGetFeeds = () => useInfiniteQuery({
    queryKey: ["feeds"],
    queryFn: async ({ pageParam = 1 }) => await getFeeds({currentPage: pageParam, size: 10}),
    getNextPageParam: (lastPage, allPages) => {
        const currentPage = lastPage.data.currentPage;
        const totalPages = lastPage.data.totalPages;
        return lastPage.data.isLast ? undefined : currentPage + 1;
    }
});