import { sessionStatus} from "../utils/session";
import { redirect } from "next/navigation";
if(!sessionStatus){
  redirect('/login')
}