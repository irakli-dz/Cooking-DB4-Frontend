import { Component, OnInit, NgZone } from '@angular/core';
const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width : ${MAX_WIDTH_BREAKPOINT}px)`);
  links = [{
    name: 'Recipes',
    url: 'recipes'
  },
  {
    name: 'Cousine',
    url: 'cousines'
  }
]

  constructor(zone: NgZone) {
    this.mediaMatcher.addListener((mql)=> {
      zone.run(()=>this.mediaMatcher=mql)
    })
  }

  ngOnInit() {
  }

  isScreenSmall () {
    return this.mediaMatcher.matches;
  }

}
