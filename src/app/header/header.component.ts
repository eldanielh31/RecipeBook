import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchForm !: FormGroup;

  constructor(private router: Router, private readonly fb: FormBuilder) {
    this.searchForm = this.initForm();
  }

  /**
   * It returns a new FormGroup object with a single FormControl named 'search' that has an initial
   * value of an empty string
   * @returns A FormGroup
   */
  initForm(): FormGroup {
    return this.fb.group({
      search: ['']
    })
  }

  /**
   * The function clickSearch() is called when the user clicks the search button. It navigates to the
   * home page and passes the search term as a parameter
   */
  clickSearch() {
    this.router.navigate([`/home/${this.searchForm.value.search}`]);
  }

}
