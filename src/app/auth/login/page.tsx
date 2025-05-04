import Authform from "@/features/auths/components/Authform"
import Authheader from "@/features/auths/components/Authheader"


const Loginpage = () => {
  return (
    <Authheader type="login">
        <Authform type="login" />
    </Authheader>
  )
}
export default Loginpage