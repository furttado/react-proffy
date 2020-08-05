import app from "./index";
import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is runing in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
