import axios from "axios"

import {
    BASE_URL,
} from "../lib/envvar"
import { SecureStorage } from "../../services/secureStorage"




const followRequest = {
    acceptFollowRequest: async (
        userId: any,
        newFollowId: any,
        RequiD: any,

    ) => {
        let Info = {
            userId: userId,
            newFollowId: newFollowId,
            RequiD: RequiD,
        }
        const body = Info
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
                "/request/AcceptRequest",
                body,
                {
                    headers: {
                    },
                    method: "POST"
                }
            )
            .then((response) => {
                res.status = response.data.status;
                res.data = { ...response.data };
                res.message = res.data.message
                return res.data;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.message = err.message
                return res
            });
    },

    newFollowRequest: async (
        toId: any,
        fromId: any
    ) => {
        let Info = {
            toId: toId,
            fromId: fromId
        }


        const body = Info
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
                "/request/newRequest",
                body,
                {
                    headers: {
                    },
                    method: "POST"
                }
            )

            .then((response) => {
                res.status = response.data.status;
                res.data = { ...response.data };
                res.message = res.data.message
                return res.data;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.message = err.message
                return res
            });
    },

    getFollowRequests: async (
        // userId: any,
    ) => {
        // let Info = {
        //     userId: userId,
        // }


        const idStuff = await SecureStorage.getInst().getValueFor("userId")


         let Info = {
            userId: idStuff,
        }
        const body = Info
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
                "/request/getAll",
                body,
                {
                    headers: {
                    },
                    method: "POST"
                }
            )


            .then((response) => {
                res.status = response.data.status;
                res.data = { ...response.data };
                res.message = res.data.message
                return res.data;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.message = err.message
                return res
            });
    },


    GetFollowers: async (
        // Id: any
      ) => {
        // let FindInfo = {
        //   Id: Id
        // }

        const user = await SecureStorage.getInst().getValueFor("userId")
    
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
          .get(
            BASE_URL +
            "/follow/getFollowers",
    
            {
              params: {
                Id: user
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


      GetFollowing: async (
        // Id: any
      ) => {
        // let FindInfo = {
        //   Id: Id
        // }




        const user = await SecureStorage.getInst().getValueFor("userId")
    
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
          .get(
            BASE_URL +
            "/follow/getFollowing",
    
            {
              params: {
                Id: user
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


export default followRequest