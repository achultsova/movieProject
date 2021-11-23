




function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.message) {
              
                localStorage.removeItem('user');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const loginService = ( email: string, password: string ) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch('http://localhost:8080/login/', requestOptions)
    .then(handleResponse)
    .then( user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }

    )
}


    

export default loginService