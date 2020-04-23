import { prisma } from "../../../generated/prisma-client";

export default {
    User: {
        fullName: parent => {
            return `${parent.firstName} ${parent.lastName}`;
        },
        isFollowing: async(parent, _, {request}) => {
            const {user} = request;
            const {id: parentId} = parent;
            console.log(user.id, parentId);
            try{
                return prisma.$exists.user({
                    AND: [
                        {id: parentId}, 
                        {followers_some: {
                            id: user.id
                        }}]
                });
            }catch(err){
                console.log(err);
                return false;
            }
        },
        isSelf: (parent, _, {request}) => {
            const {user} = request;
            const {id: parentId} = parent;
            return user.id === parentId;
        }
    },
    Post: {
        isLiked: (parent, _, {request}) => {
            const {user} = request;
            const {id} = parent;
            console.log(parent);
            console.log(id);
            return prisma.$exists.like({
                AND:[
                    {user: {
                        id: user.id
                    }},
                    {post: {
                        id
                    }}
                ]
            });
        }
    }
}