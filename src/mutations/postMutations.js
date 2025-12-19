import { useMutation } from "@tanstack/react-query";
import { createPost } from "../apis/posts/postApi";

export const usecreatePostMutations = () => useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (data) => {
        return await createPost(data);
    }
});