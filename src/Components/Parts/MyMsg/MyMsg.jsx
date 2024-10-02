import React from 'react'
import '../MyMsg/Mymsg.css'
export default function MyMsg() {
    const mymsg = {
        Namme: "myself",
        Message: 'Hi da , How are you?'
    }
    return (
        <div className='MyMsg_main'>
            <div className="MyMsg_content">
                <p>{mymsg.Message}</p>
            </div>
        </div>
    )
}
