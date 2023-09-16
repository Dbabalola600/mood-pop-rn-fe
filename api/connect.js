import connectMongo from "../utils/connectMongo";



app.get("/api/connect", async (req, res) => {

  try {

    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    return res.status(200).json({ message: "CONNECTED BEIGN" })

  } catch (error) {


    console.log(error);
    res.json({ error });
  }
}
)