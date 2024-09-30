import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-solo-skil',
  standalone: true,
  imports: [],
  templateUrl: './solo-skil.component.html',
  styleUrl: './solo-skil.component.scss'
})
export class SoloSkilComponent {

  skill: {
    image: string,
    title: string,
  }[] = [
    {
      image: 'assets/skills-icon/angular.svg',
      title: 'Angular'
    },
    {
      image: 'assets/skills-icon/typeScript.svg',
      title: 'Type Script'
    },
    {
      image: 'assets/skills-icon/firebase.svg',
      title: 'Firebase'
    },
    {
    image: 'assets/skills-icon/group.svg',
    title: 'Material Disign'
    },
    {
      image: 'assets/skills-icon/scrum.svg',
      title: 'Scrum'
    },
    {
      image: 'assets/skills-icon/gitHub.svg',
      title: 'GitHub'
    },
    {
      image: 'assets/skills-icon/restApi.svg',
      title: 'Rest-Api'
    },
    {
      image: 'assets/skills-icon/javaScript.svg',
      title: 'Java Script'
    },
    {
      image: 'assets/skills-icon/html.svg',
      title: 'HTML'
    },
    {
      image: 'assets/skills-icon/css.svg',
      title: 'CSS'
    },
  ]

}
