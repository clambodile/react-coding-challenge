import React from 'react'
import MessageColumn from './message-column'

function InfoColumn ({messages, priority}) {
    return (
            <MessageColumn
        messages={messages}
        priority={priority}
        label="Info" />
    )
}

export default InfoColumn
