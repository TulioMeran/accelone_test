import express from "express"
import contactsRoutes from "./routes/contactRoutes"

const app = express();
//Set 3000 as default port if doesnt get port from .env file.
const PORT = process.env.PORT || 3000

app.use(express.json())
//Using versioning for controller and routes to group request for contact.
app.use("/api/v1/contacts",contactsRoutes)

app.listen(PORT, () => {
    console.log("Connected")
})

export default app