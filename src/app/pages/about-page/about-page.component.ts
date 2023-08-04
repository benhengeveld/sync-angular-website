import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  icons: { name: string; fileName: string }[] = [
    { fileName: 'angular', name: 'Angular' },
    { fileName: 'apachecordova', name: 'Cordova' },
    { fileName: 'aspdotnet', name: 'ASP.NET' },
    { fileName: 'csharp', name: 'C#' },
    { fileName: 'css3', name: 'CSS' },
    { fileName: 'git', name: 'Git' },
    { fileName: 'html5', name: 'HTML' },
    { fileName: 'java', name: 'Java' },
    { fileName: 'javascript', name: 'JavaScript' },
    { fileName: 'nodedotjs', name: 'Node.js' },
    { fileName: 'react', name: 'React' },
    { fileName: 'sass', name: 'Sass' },
    { fileName: 'sql', name: 'SQL' },
    { fileName: 'typescript', name: 'TypeScript' },
    { fileName: 'vuedotjs', name: 'Vue' },
    { fileName: 'yarn', name: 'Yarn' },
  ];

  links: { fileName: string; link: string }[] = [
    { fileName: 'github', link: 'https://github.com/benhengeveld' },
    { fileName: 'linkedin', link: 'https://www.linkedin.com/in/ben-hengeveld' },
    { fileName: 'email', link: 'mailto:contact@sy-nc.ca' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
