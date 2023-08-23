import { useMutation } from "@tanstack/react-query";
import { getUrl,addQueryParams, request, getErrorBody } from "../utils/network";

const BlogData = (page, pageSize, searchText) => {
  let url = getUrl(`/blogs/?page=${page}&pageSize=${pageSize}`);
  if (searchText) {
    url += `&search_text=${encodeURIComponent(searchText)}`;
  }
  return request("GET", url, null, false);
};

export const BlogApi = (
  successCallback=()=>{},
  errorCallback=()=>{},
) => {
  return useMutation(BlogData, {
    mutationKey: "get-blog-data",
    onSuccess: (res) => {
      successCallback(res);
    },
    onError: (err) => {
      errorCallback(err);
    },
  });
};

const SingleBlog = (id) => {

  const url = getUrl(`/blogs/blogs/${id}`);
  return request("GET", url, null, false);
};

export const SingleBlogApi = (
  
  successCallback = () => {},
  errorCallback = () => {},
) => {
  return useMutation(SingleBlog, {
    mutationKey: "get-single-blog-data",
    onSuccess: (res) => {
      successCallback(res);
    },
    onError: (err) => {
      errorCallback(err, "error while fetching data");
    },
  });
};
