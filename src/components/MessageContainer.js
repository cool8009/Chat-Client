import { useEffect, useRef } from 'react';

//comp that desplay the message
const MessageContainer = ({ messages, prevMessages }) => {
    const messageRef = useRef();
    //TODO: TRY TO MAKE THIS WORK, FOR SOME REASON IT DOESNT FETCH MESSAGES FROM THE API
    //to scroll when there are new messages
    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [messages]);

    return <div ref={messageRef} className='message-container' >
        {prevMessages.map((m, index) =>
            <div key={index} className='user-message'>
                <div className='message bg-primary'>{m.message}</div>
                <div className='from-user'>placeholderuser</div>
            </div>
        )}
        {messages.map((m, index) =>
            <div key={index} className='user-message'>
                <div className='message bg-primary'>{m.message}</div>
                <div className='from-user'>{m.user}</div>
            </div>
        )}
    </div>
}

export default MessageContainer;