export interface InnitailFormState {
    success: boolean;
    message: string;
    errors? : Record<string, string[]>;
}

export const innitialFormState: InnitailFormState = {
    success: false,
    message: '',
}

export type Actiontype = (_prevState: InnitailFormState, formData: FormData) => Promise<InnitailFormState>