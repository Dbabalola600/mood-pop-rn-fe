import axios, { AxiosResponse } from "axios";
import connectMongo from "../connectMongo";


import {
  BASE_URL,
} from "../lib/envvar"



interface LoginResponse {
  status: number;
  data: any;
  message: string;
}


const authRequest = {
  //user requests

  getAll: async () => {
    let res: {
      status: number;
      data: any;
      message: string
    } = {
      status: 0,
      data: {},
      message: ""
    }

    return await axios.get(
      BASE_URL +
      "/users/",

      {
        headers: {
        },
        method: "GET"
      }
    )

      .then((response) => {
        res.status = response.status;
        res.data = { ...response.data };

        return res.data;
      })
      .catch((err) => {
        res.status = err.response.status;
        res.data = err.response.data;
        res.message = err.message
        return res
      });
  },



  //getting user details
  GetUserFull: async (
    _id: any
  ) => {
    let UserInfo = {
      _id: _id
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
        "/users/getUser",
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
  //create user
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

  // user loggin in
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




  //SEARCH USER
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

  //POSTS

  //get user posts
  GetUserPosts: async (
    userId: any
  ) => {
    let UserInfo = {
      userId: userId
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
    userId: any,
    post: any,
    category: any
  ) => {

    let postInfo = {
      userId: userId,
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
        "/post/getFollowingPost",

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


  //JOURNAL

  //new jounrnal note 
  CreateJNote: async (
    userId: any,
    title: any,
    content: any
  ) => {

    let UserInfo = {
      userId: userId,
      title: title,
      content: content
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
        "/journal/create",
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


  //get max journal 
  getJournal: async (
    userId: any,
  ) => {
    let Info = {
      userId: userId,
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
        "/journal/getJournal",
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

  //getting specific note from journal
  getJournalNote: async (
    userId: any,
    Nid: any
  ) => {
    let SpecInfo = {
      userId: userId,
      Nid: Nid
    }

    const body = SpecInfo
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
        "/journal/getNote",

        {
          params: {
            userId: userId,
            Nid: Nid
          },
          // method: "GET"
        }
      )


      .then((response) => {
        res.status = response.data.status;
        res.data = { ...response.data };
        res.message = res.data.message
        return res.data.data;
      })
      .catch((err) => {
        res.status = err.response.status;
        res.data = err.response.data;
        res.message = err.message
        return res
      });
  },


  //delete note
  delNote: async (
    userId: any,
    Nid: any
  ) => {
    let SpecInfo = {
      userId: userId,
      Nid: Nid
    }


    const body = SpecInfo
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
        "/journal/DelNote",
        body,

        {
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




  // REQUESTS
  //getting requests
  getFollowRequests: async (
    userId: any,
  ) => {
    let Info = {
      userId: userId,
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

  // requesting to follow 
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

  //accepting follow request
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

  //NOTIFICATION 
  //count notifications
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


  //FOLLOWINGS 

  //get followings
  GetFollowing: async (
    Id: any
  ) => {
    let FindInfo = {
      Id: Id
    }

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
            Id: Id
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

  //get followers
  GetFollowers: async (
    Id: any
  ) => {
    let FindInfo = {
      Id: Id
    }

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
            Id: Id
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
  console.log(await authRequest.GetFollowingPost(
    "650320061837f590a3b6652c"
  )
  )

}

myFunc()

export default authRequest