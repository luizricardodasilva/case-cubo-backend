import { app } from "./controller/app"
import { userRouter } from "./router/Router"

app.use("/user", userRouter)