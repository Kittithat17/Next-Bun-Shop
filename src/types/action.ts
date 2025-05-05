export interface InnitailFormState {
    success: boolean;
    message: string;
    errors? : Record<string, string[]>;
}

const innitialFormState: InnitailFormState = {
    success: false,
    message: '',
}