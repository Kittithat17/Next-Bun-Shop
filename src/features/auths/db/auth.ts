interface SignupInput {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const signup = async (input: SignupInput) => {
    try{
            
    }catch (error){
        console.error('Error during signup:', error);
        return{
            message: 'An error occurred during signup. Please try again later.',
        }

    }
}