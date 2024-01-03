import axios from "axios"

import {
    BASE_URL,
} from "../lib/envvar"



const journalRequest ={
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
}


export default  journalRequest