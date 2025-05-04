import {Label} from '@/components/ui/label';
import { Input } from '../input';


interface InputformProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    required?: boolean;
}


const Inputform = ({label,id,required = false,...props} : InputformProps) => {
  return (
    <div className='flex flex-col  gap-2'>
        <Label htmlFor={id}>
            {label} {required && <span className="text-red-500">*</span>}
        </Label>
        <Input
        id = {id}
        name = {id}
        required = {required}
        {...props}
        />
    </div>
  )
}
export default Inputform