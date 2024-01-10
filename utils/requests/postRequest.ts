import axios from "axios"

import {
    BASE_URL,
} from "../lib/envvar"
import { SecureStorage } from "../../services/secureStorage"





const postRequest = {
    GetUserPosts: async (

    ) => {

        const user = await SecureStorage.getInst().getValueFor("userId")
        let UserInfo = {
            userId: user
        }
        const body = UserInfo

        let res: {
            status: number;
            data: any;
            message: string
        } = {
            status: 0,
            data: {},
            message: ""
        }

        return await axios
            .post(
                BASE_URL +
                "/post/getPosts",
                body,
                {
                    headers: {
                    },
                    method: "POST"
                }
            )


            .then((response) => {
                res.status = response.status;
                res.data = { ...response.data };

                return res;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.message = err.message
                return res
            });
    },

    //new post 
    CreatePost: async (
        post: any,
        category: any
    ) => {


        const user = await SecureStorage.getInst().getValueFor("userId")
        let postInfo = {
            userId: user,
            post: post,
            category: category
        }

        const body = postInfo
        let res: {
            status: number;
            data: any;
            message: string
        } = {
            status: 0,
            data: {},
            message: ""
        }

        return await axios
            .post(
                BASE_URL +
                "/post/create",
                body,
                {
                    headers: {
                    },
                    method: "POST"
                }
            )


            .then((response) => {
                res.status = response.status;
                res.data = { ...response.data };

                return res;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.message = err.message
                return res
            });
    },


    //get posts of those you follow
    GetFollowingPost: async (
        // userId: any
    ) => {
        let res: {
            status: number;
            data: any;
            message: string
        } = {
            status: 0,
            data: {},
            message: ""
        }

        const user = await SecureStorage.getInst().getValueFor("userId")


        return await axios
            .get(
                BASE_URL +
                "/post/getFollowingPost",

                {
                    params: {
                        userId: user
                    },
                    // method: "GET"
                }
            )
            .then((response) => {
                res.status = response.status;
                res.data = { ...response.data };

                return res.data.data;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.message = err.message
                return res
            });


    },
}



export default postRequest