import axios from "axios"

import {
    BASE_URL,
} from "../lib/envvar"
import { SecureStorage } from "../../services/secureStorage"



const journalRequest ={
    CreateJNote: async (

        title: any,
        content: any
      ) => {
    

        const user = await SecureStorage.getInst().getValueFor("userId")
        let UserInfo = {
          userId: user,
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

      ) => {

        const user = await SecureStorage.getInst().getValueFor("userId")
        let Info = {
          userId: user,
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

        Nid: any
      ) => {

        const user = await SecureStorage.getInst().getValueFor("userId")
        let SpecInfo = {
          userId: user,
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
                userId: user,
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

        Nid: any
      ) => {

        const user = await SecureStorage.getInst().getValueFor("userId")
        let SpecInfo = {
          userId: user,
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
}


export default  journalRequest