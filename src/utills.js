import moment from "moment"



export const analyze = (text) => {
    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi, How can i Help you?'
    else if(text.includes('date'))
        return moment().format('MMMM DD YYYY')
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if (text.includes('googlelink'))
        return 'https://www.google.com'
    else if(text.includes('Bank interest'))
        return 'Bank interst rate is 8.5'
    else if(text.includes('thankyou'))
        return "Thanks for Contacting me Welcome..."
    return "I can't get you. Can you rephrase the message"
}