import React from 'react'
import '../Otherschat/Otherschat.css'

export default function Otherschat() {
    const others_msg = {
        Name: 'Barath',
        Message: "I'm Good , What's up"
    }
    const bubbleName = others_msg.Name[0]
    return (
        <div className='othersMsg_main'>
            <div className="othersMsg_main2">
                <div className="othersMsg_bubble">
                    <h4>{bubbleName}</h4>
                </div>
                <div className="othersMsg_content">
                    <p>{others_msg.Message}</p>
                </div>
            </div>

        </div>
    )
}
