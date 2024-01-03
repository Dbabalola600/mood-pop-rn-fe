import axios from "axios"

import {
  BASE_URL,
} from "../lib/envvar"




const userRequest = {
  createUser: async (

    UserName: string,
    email: string,
    password: string,
  ) => {
    let createInfo = {
      UserName: UserName,
      email: email,
      password: password,
      // image: image,
      isVerified: false,
      isActive: true,
      role: "user"
    }

    const body = createInfo


    let res: {
      status: number;
      data: any;
      message: string
    } = {
      status: 0,
      data: {},
      message: ""
    }

    return await axios.post(
      BASE_URL +
      "/users/create",
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
  UserLogin: async (
    UserName: any,
    password: any,
  ) => {

    let loginInfo = {
      UserName: UserName,
      password: password,
    }

    const body = loginInfo
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
        "/users/login",
        body,
        {
          headers: {
          },
          method: "POST"
        }
      )


      .then((response) => {
        res.status = response.data.status;
        res.data = response.data;
        res.message = response.data.message;
        return res;
      })
      .catch((err) => {
        if (err.response) {
          res.status = err.response.status;
          res.data = err.response.data;
        } else {
          res.status = 500;
          res.data = {};
        }
        res.message = err.message;
        return res;
      });

  },

  SearchUser: async (
    Username: any
  ) => {

    let FindInfo = {
      Username: Username
    }

    const body = FindInfo
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
        "/users/search",

        {
          params: {
            Username: Username
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
  countNotification: async (
    userId: any
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
    return await axios
      .get(
        BASE_URL +
        "/notification/count",

        {
          params: {
            userId: userId
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




async function myFunc() {
  console.log(await userRequest.countNotification(
    "dami", 
  )
  )

}

myFunc()


export default userRequest