import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent {
items = [
  ...Array(100).fill(null).map((v, i) => ({
    id: i + 1,
    name: `John ${i + 1}`,
    email: `john${i + 1}@doe.com`,
    company: {
      name: `Company ${i + 1}`
    },
    address: {
      city: `New York ${i + 1}`
    }
  }))
];

}

