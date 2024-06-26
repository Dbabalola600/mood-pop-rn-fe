import axios from "axios"

import {
    BASE_URL,
} from "../lib/envvar"
import { SecureStorage } from "../../services/secureStorage"




const settingsRequest = {
    contactSupport: async (
        title: string,
        details: any

    ) => {
        const email = await SecureStorage.getInst().getValueFor("email")



        let sendInfo = {
            title: title,
            details: details,
            email: email
        }


        const body = sendInfo
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
            "/users/contactSupport",
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

    updateUsername: async (

        userName: any

    ) => {
        const id = await SecureStorage.getInst().getValueFor("userId")



        let sendInfo = {
            UserName: userName,
            _id: id
        }


        const body = sendInfo
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
            "/users/UpdateUsername",
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

    updatePassword: async (

        password: any

    ) => {
        const id = await SecureStorage.getInst().getValueFor("userId")



        let sendInfo = {
            password: password,
            _id: id
        }


        const body = sendInfo
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
            "/users/UpdatePassword",
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

    updateEmail: async (

        email: any

    ) => {
        const id = await SecureStorage.getInst().getValueFor("userId")



        let sendInfo = {
            email: email,
            _id: id
        }


        const body = sendInfo
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
            "/users/UpdateEmail",
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

    updateImage: async (

        image: any

    ) => {
        const id = await SecureStorage.getInst().getValueFor("userId")



        let sendInfo = {
            image: image,
            _id: id
        }


        const body = sendInfo
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
            "/users/UpdateImage",
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
}

export default settingsRequest