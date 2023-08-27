import {useMutation} from "@tanstack/react-query";
import { getUrl,request,getErrorBody } from "../utils/network.js";

const TeamData= () => {
    const url = getUrl('/team/')
    return request("GET",url,null,false)

}

export const TeamApi = (successCallback, errorCallback) => {
    return useMutation(TeamData, {
      mutationKey: "get-auth-token",
      onSuccess: (res) => {
        successCallback(res);
        
      },
      onError: (err) => {
        errorCallback(err);
      },
    });
  };

