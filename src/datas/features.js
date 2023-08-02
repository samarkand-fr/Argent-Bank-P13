import chat from '../assets/img/icon-chat.png'
import money from '../assets/img/icon-money.png'
import security from '../assets/img/icon-security.png'

// The features array contains three objects, 
// each representing a different feature .
// each feature has its icon, title, and content. 

const features = [
  {
    icon: chat,
    alt: 'chat Icon',
    title: 'You are our #1 priority',
    content:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: money,
    alt: 'money Icon',
    title: 'More savings means higher rates',
    content:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: security,
    alt: 'security Icon',
    title: 'Security you can trust',
    content:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

export default features
