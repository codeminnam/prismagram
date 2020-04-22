import { prisma } from "../../../generated/prisma-client";

export default {
    User: {
        fullName: parent => {
            return `${parent.firstName} ${parent.lastName}`;
        },
        amIFollowing: async(parent, _, {request}) => {
            const {user} = request;
            const {id: parentId} = parent;
            console.log(user.id, parentId);
            try{
                const exists = await prisma.$exists.user({
                    AND: [{id: parentId}, {followers_some: [user.id]}]
                });
                console.log(exists);
                if(exists){
                    return true;
                }else{
                    console.log(error);
                    return false;
                }
            }catch(err){
                console.log(err);
                return false;
            }
        },
        itsMe: (parent, _, {request}) => {
            const {user} = request;
            const {id: parentId} = parent;
            return user.id === parentId;
        }
    }
}