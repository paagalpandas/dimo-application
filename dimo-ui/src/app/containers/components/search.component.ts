import {Component} from "@angular/core";
import { ViewEncapsulation } from '@angular/core';
import {ICategory} from "../helpers/dashboard.interfaces";

@Component({
  selector : "dimo-search",
  templateUrl : '../views/search.component.html',
  styleUrls : ['../styles/scss/search.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {

  public text: String = "Test Search";
  //end point call. Variable = new data
  //clicking of search button, action?



  public categories: Array<ICategory> = [
    {
      category: 'trending',
      movies: [{
        name: "Interstellar",
        description: "A great Movie.",
        thumbNail: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      },
        {
          name: "PK",
          description: "A great Movie.",
          thumbNail: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg"
        },
        {
          name: "1917",
          description: "A great Movie.",
          thumbNail: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"
        }]
    }];



    }
