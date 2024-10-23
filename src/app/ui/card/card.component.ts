import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

industries:any=[
{
  id:1,
  title:'AeroSpace and Defence ',
  image:'https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-270-768x398.jpg',
  description:'This is the card1',
},

  {
    id:2,
    title:'Banking & Financial Service(BFS)',
    image:'https://nestdigital.com/wp-content/uploads/2023/08/Rectangle-365-768x398.jpg',
    description:'Accelerating the cashless economy efficiently by adopting global standards & local priorities',
  },
  {
    id:3,
    title:'Healthcare',
    image:'https://nestdigital.com/wp-content/uploads/2023/06/Rectangle-168-768x398.jpg',
    description:'Promoting digital innovation & excellence in the healthcare industry',
  },
  {
    id:4,
    title:'Insurance',
    image:'https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-271-768x398.jpg',
    description:'Unlocking the potential of insurance through technology',
  },
  {
    id:5,
    title:'Locomotive',
    image:'https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-269-768x398.jpg',
    description:'Elevating Locomotive Experiences through Innovative Technologies',
  },
  {
    id:6,
    title:'Industrial',
    image:'https://nestdigital.com/wp-content/uploads/2023/06/Rectangle-167-768x398.jpg',
    description:'Where Power Meets Production: Redefining Manufacturing & Energy',
  },
  {
    id:7,
    title:'Mobility',
    image:'https://nestdigital.com/wp-content/uploads/2023/04/Rectangle-20-1-768x398.jpg',
    description:'We are Revolutionizing the world of Mobility',
  },
]



}
