export type actionProps = {
    type: string;
    payload?: payloadProps
}

export type payloadProps = {
	username?: string;
	password?: string;
	authenticated?: boolean
}

export type statePropsLogin = {
	username: string;
    password: string;
    authenticated: boolean
}

export type statePropsRegist = {
	username: string;
    email: string;
    mobile: string;
    age: string;
    password: string;
    registering: boolean
}