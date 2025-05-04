import {
  Card,
  
  CardDescription,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthheaderProps {
  type: "login" | "signup";
  children: React.ReactNode;
}

const Authheader = ({type , children}: AuthheaderProps) => {

const title = type === 'signup' ? 'Signup' : 'Login';
const des = type === 'signup' ? 'Please signup to your account' : 'Please login to your account';  

  return (
    <div className="px-4 md:px-0">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
          <CardDescription className="text-center font-semibold">{des}</CardDescription>
        </CardHeader>
        {children}
        
      </Card>
    </div>
  );
};
export default Authheader;
