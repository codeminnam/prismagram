export const USER_FRAGMENT = `
    id
    username
    avatar
`;

export const COMMENT_FRAGMENT = `
    id
    text
    user {
        ${USER_FRAGMENT}
    }
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const MESSAGE_FRAGMENT = `
    id
    from{
        ${USER_FRAGMENT}
    }
    to{
        ${USER_FRAGMENT}
    }
    text
`;

export const FULL_POST_FRAGMENT = `
    id
    caption
    location
    files {
        ${FILE_FRAGMENT}
    }
    comments {
        ${COMMENT_FRAGMENT}
    }
    user {
        ${USER_FRAGMENT}
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room{
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages{
            ${MESSAGE_FRAGMENT}
        }
    }
`;

