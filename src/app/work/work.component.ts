import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  work_data = {
    solo: [
      {
        title: "iRock",
        url: "https://irockfinishes.com.au/",
        tags: ["react", "gatsby", "wp"]
      },
      {
        title: "The Reformist",
        url: "https://www.thereformist.co.in/",
        tags: ["react", "next", "wp"]
      }
    ],
    team: [
      {
        title: "WhiteFox Real Estate",
        url: "https://www.whitefoxrealestate.com.au/",
        tags: ["react", "gatsby", "wp"]
      },
      {
        title: "Supreme Golf",
        url: "https://supremegolf.com/",
        tags: ["react"]
      },
      {
        title: "USBank",
        url: "https://www.usbank.com/",
        tags: ["react", "next"]
      }
    ],
    companies: [
      {
        title: "Publicis Sapient (2021-present)",
        url: "https://www.publicissapient.com/",
        tags: []
      },
      {
        title: "Inkoop (2020-2021)",
        url: "https://www.inkoop.io/",
        tags: []
      },
    ],
  }
}
