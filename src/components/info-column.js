import React from 'react'
import MessageColumn from './message-column'

function InfoColumn ({messages, priority, clearMessage}) {
    return (
            <MessageColumn
        messages={messages}
        priority={priority}
        clearMessage={clearMessage}
        label="Info" />
    )
}

export default InfoColumn
