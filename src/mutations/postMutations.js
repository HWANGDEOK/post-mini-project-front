import { useMutation } from "@tanstack/react-query";
import { createPost } from "../apis/posts/postApi";
import { createComments } from "../apis/posts/commentsApi";

export const usecreatePostMutations = () => useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data) => {
        return await createPost(data);
    }
});

export const userCreatePostCommentMutations = () => useMutation({
    mutationKey: ["createPost"],
    mutationFn: async ({postId, data}) => {
        return await createComments(postId, data);
    }
})