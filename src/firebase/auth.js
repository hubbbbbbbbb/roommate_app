import firebaseApp from "./config";
import { getAuth } from "firebase/auth";

const authApp = getAuth(firebaseApp);

export default authApp;