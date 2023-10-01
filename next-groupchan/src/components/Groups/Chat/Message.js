"use client"

import {Container} from "./Message.styled"

const Message = ({message}) => {

    return ( <Container>
{message.content}
    </Container> );
}
 
export default Message;