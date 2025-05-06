import { Actiontype, innitialFormState } from "@/types/action";
import { useRouter } from "next/navigation";
import {  useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export const useForm = (action: Actiontype, route?: string) => {
    const [errors,seterrors] = useState<Record<string, string[]>>({})
    const [state, formAction,isPending] = useActionState(action, innitialFormState)
    const router = useRouter()


    useEffect(() => {
        if (!state) return;
    
        if (state.errors) seterrors(state.errors);
    
        if (state.message) {
          if (state.success) {
            toast.success(state.message);
            if (route) router.push(route);
          } else {
            toast.error(state.message);
          }
        }
      }, [state, route, router]);

    const clearErrors = () => seterrors ({})
    return {
        errors,
        formAction,
        isPending,
        clearErrors,
    }
}