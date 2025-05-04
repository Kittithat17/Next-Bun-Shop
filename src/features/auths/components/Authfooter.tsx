import Link from "next/link";

interface AuthfooterProps {
    type: "login" | "signup";

}

const textmap ={
    signup: {
        footertext: "Already have an account?",
        linktext: "Login",
        link: "/auth/login"
    },
    login: {
        footertext: "Don't have an account?",
        linktext: "Signup",
        link: "/auth/signup"
    }
}

const Authfooter = ({type}: AuthfooterProps) => {

    const {footertext, linktext, link} = textmap[type];
  return (
    <div>{footertext} <Link href={link} className="text-primary hover:underline">{linktext}</Link></div>
  )
}
export default Authfooter