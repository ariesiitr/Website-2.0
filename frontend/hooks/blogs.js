import { useMutation } from "@tanstack/react-query";
import { getUrl, request, getErrorBody } from "../utils/network";

const BlogData = (page, pageSize, searchText) => {
  let url = getUrl(`/blogs/?page=${page}&pageSize=${pageSize}`);
  if (searchText) {
    url += `&search_text=${encodeURIComponent(searchText)}`;
  }
  return request("GET", url, null, false);
};

export const BlogApi = (
  page,
  pageSize,
  searchText,
  successCallback,
  errorCallback,
) => {
  return useMutation(() => BlogData(page, pageSize, searchText), {
    mutationKey: "get-blog-data",
    onSuccess: (res) => {
      successCallback(res);
    },
    onError: (err) => {
      errorCallback(err, "hi");
    },
  });
};

const SingleBlog = (id) => {
  if (!id) return Promise.reject("ID is not provided");

  const url = getUrl(`/blogs/blogs/${id}`);
  return request("GET", url, null, false);
};

export const SingleBlogApi = (
  id,
  successCallback = () => {},
  errorCallback = () => {},
) => {
  return useMutation(() => SingleBlog(id), {
    mutationKey: "get-single-blog-data",
    onSuccess: (res) => {
      successCallback(res);
    },

    onError: (err) => {
      errorCallback(err, "error while fetching data");
    },
  });
};
