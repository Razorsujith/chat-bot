import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { analyze } from '../utills';
import ChatMessages from './ChatMessages';




export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi, Razor i have your name?",
    },

  ]);

  const [text, setText] = useState('');

  const onSend = () => {
    let list =[...messages, { message: text, user: true}];
    if(list.length>2){
      const reply  = analyze(text)
      list =[
        ...list,
        {message: reply}
      ];
    }
    else {
      list = [

        ...list,
        {
          message: `Hi, ${text}`
        },
        {
          message: 'How can i help you?',


        },



      ];
  }
  setMessages(list);
  setText("");

  setTimeout(() => {
    document.querySelector("#copyright").scrollIntoView();
  }, 1);




};
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center'>
        <img src='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/03/30/14908898013202.jpg'
          alt="logo"
          height={200}
          width={200} />
        <h2 className="p-5 text-primary ">Razor-Chatbot</h2>

      </div>
      <div className='chat-message'>
        {
          messages.length > 0 && messages.map((data) => <ChatMessages {...data} />)
        }
        <div className='d-flex mt-2'>
          <input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
          <Button type="primary" className="ms-3" onClick={onSend}>Send</Button>
        </div>
        <div id='copyright' className="mt-3"> Copyrights Reserved Razor_Developer</div>
      </div>
    </div>
  )
}
