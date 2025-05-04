
import Authform from "@/features/auths/components/Authform"
import Authheader from "@/features/auths/components/Authheader"
import { Metadata } from "next"


export const metadata : Metadata = {
    title: "Signup",
    description: "ร้านค้าออนไลน์อันดับหนึ่งในไทย จัดส่งเร็ว",
}
const SignupPage = () => {
   const type  = 'signup';
  return (
    <Authheader type={type}>
      <Authform type={type} />
    </Authheader>
  )
}
export default SignupPage