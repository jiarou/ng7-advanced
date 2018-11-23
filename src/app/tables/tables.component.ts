import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  type = 0 ;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(
    p => {
      this.type = +(p['type'] || 0);
      //  p['type']; p.type url is string
      //  + turn to  number
    }

   );
      $('#dataTables-example').DataTable({
          responsive: true
      });


    }
   addfun() {
     this.router.navigateByUrl('tables/' + (this.type + 1) );
   }
  }
