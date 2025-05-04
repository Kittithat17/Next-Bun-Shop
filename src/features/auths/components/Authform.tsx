'use client'

import { CardContent, CardFooter } from "@/components/ui/card"
import Inputform from "@/components/ui/share/Inputform";
import Submitbtn from "@/components/ui/share/Submitbtn";
import Authfooter from "./Authfooter";

interface AuthformProps {
    type: "login" | "signup";

}

const Authform = ({type}: AuthformProps) => {
const renderInput = (label:string, id:string, type='text' , required=false) => (
    <div>
        <Inputform label={label} id={id} type={type} required={required}/>
    </div>
)



  return (
    <div>
       <form action="">
        <CardContent className="flex flex-col gap-3">
            { type === 'signup' && renderInput('Username','name')}
            {renderInput('Email','email','email', true)}
            {renderInput('Password','password','password', true)}
            { type === 'signup' && renderInput('Confirm Password','confirm_password','password', true)}
        </CardContent>
        <CardFooter className="flex flex-col gap-3 pt-4">
            <Authfooter type={type}/>
            <Submitbtn className="w-full py-6" name={type === 'signup' ? 'Signup' : 'Login'}/>
        </CardFooter>
       </form>
    </div>
  )
}
export default Authform