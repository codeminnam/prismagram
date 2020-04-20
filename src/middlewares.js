export const isAuthenticated = (request) => {
    if(!request.user){
        throw Error("Your need to log in to perform this action");
    }
    return;
}