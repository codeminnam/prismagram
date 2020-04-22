export const COMMENT_FRAGMENT = `
    fragment CommonParts on COMMENT {
        id
        text
        user {
            username
        }
    }
`;