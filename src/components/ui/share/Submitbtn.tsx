import { Loader2 } from "lucide-react";
import { Button } from "../button"

interface SubmitbtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    pending?: boolean;
}

const Submitbtn = ({name , pending = false, ...props}: SubmitbtnProps) => {
  return (
    <Button type='submit' disabled={pending} {...props}>
       {pending ? <Loader2 size={16} className=" animate-spin"/> : name}
    </Button>
  )
}
export default Submitbtn