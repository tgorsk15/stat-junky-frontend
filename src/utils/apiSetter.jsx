
export function getEnvVariable() {
    let apiUrl;
    if (import.meta.env.MODE === 'development') {
        apiUrl = import.meta.env.VITE_DEV_API_URL
        console.log('in development')
    } 
    else {
       apiUrl = import.meta.env.VITE_PROD_API_URL
       console.log('in production')
    }
    return apiUrl
}