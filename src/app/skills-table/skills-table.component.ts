import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ArcheageDatabaseService} from "../services/database.service";
import {PagerService} from "../services/pager.service";

@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.css']
})
export class SkillsTableComponent implements OnInit {
  private sortColumns: any;
  private skills: Array<Object> = [];
  private skillsTemp: Array<Object>;
  private columns: Array<Object>;
  private skillParam: any;
  private hasData: boolean = false;
  // pager object
  pager: any = {};

  // paged items
  private pagedItems: any;

  constructor(private _database: ArcheageDatabaseService, private _pagerService: PagerService, private router: Router, private route: ActivatedRoute) {
    let that = this;
    that.columns = [
      {
        name: 'ID',
        className: 'skill-id',
        id: 'id'
      },
      {
        name: 'Icon',
        className: 'skill-icon',
        id: 'icon'
      },
      {
        name: 'Title',
        className: 'skill-name',
        id: 'name'
      },
      {
        name: 'Level',
        className: 'skill-level',
        id: 'description'
      },
      {
        name: 'Type',
        className: 'skill-type',
        id: 'type'
      }
    ];
    that.skills = [];

    that.route.params.subscribe(matrixParams => {
      if (matrixParams.hasOwnProperty('item1')) {
        that.skillsTemp = that._database.getAllSkills();
        that.skillParam = matrixParams["item1"];
        that.skills = [];
        that.hasData = false;
        if (that.pagedItems !== undefined) {
          that.pagedItems = [];
          that.pager = {};
        }
        setTimeout(function () {
          let tempArray = [];
          for (let i = 0; i < that.skillsTemp.length; i++) {
            if (that.skillsTemp[i]['className'].toLowerCase() !== that.skillParam) {
              that.skillsTemp.splice(that.skillsTemp.indexOf(that.skillsTemp[i]), 1);
            }
            else {
              tempArray.push(that.skillsTemp[i])
            }
          }
          that.skills = tempArray;
          that.hasData = true;
          that.setPage(1);
        },2000);
      }
      else {
        that.skills = that._database.getAllSkills();
        setTimeout(function () {
          that.hasData = true;
          that.setPage(1);
        },2000);
      }
    });

    that.sortColumns = {
      active: 'id',
      descending: false
    }
  }

  ngOnInit() {
  }

  setPage(page: number) {
    let that = this;
    if (page < 1 || page > that.pager.totalPages) {
      return;
    }
    // get pager object from service
    that.pager = that._pagerService.getPager(that.skills.length, page);

    // get current page of items
    that.pagedItems = that.skills.slice(that.pager.startIndex, that.pager.endIndex + 1);
    // that.pagedItems = that.items;
  }

  onItemPage(itemId: any) {
    this.router.navigate(['item', itemId]);
  }

  selectedClass(column): string{
    var sort = this.sortColumns;

    if (sort.active == column) {
      return sort.descending
        ? 'fa fa-sort-asc'
        : 'fa fa-sort-desc';
    }

    return 'fa fa-sort';
  }

  addClass(className) {
    return className;
  }

  changeSorting (column) {

    let sort = this.sortColumns;

    if (sort.active == column) {
      sort.descending = !sort.descending;

    } else {
      sort.active = column;
      sort.descending = false;
    }
  };

  convertSorting(): string{
    let that = this;
    return that.sortColumns.descending ? '-' + that.sortColumns.active : that.sortColumns.active;
  }

}
