import {Component, Input} from '@angular/core';
import { ICategory } from '../helpers/dashboard.interfaces';


@Component({
  selector : "dimo-dashboard",
  templateUrl : '../views/dashboard.component.html',
  styleUrls : ['../styles/scss/dashboard.component.scss']
})
export class DashboardComponent {

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
         },
         {
           name: "Inception",
           description: "A great Movie.",
           thumbNail: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
         },
         {
                    name: "Stree",
                    description: "A great Movie.",
                    thumbNail: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
                  }]
       },
       {
         category: 'Romantic',
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
         },
         {
           name: "Inception",
           description: "A great Movie.",
           thumbNail: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
         },
         {
                    name: "Stree",
                    description: "A great Movie.",
                    thumbNail: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
                  }]
       },
       {
         category: 'French',
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
         },
         {
           name: "Inception",
           description: "A great Movie.",
           thumbNail: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
         },
         {
                    name: "Stree",
                    description: "A great Movie.",
                    thumbNail: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
                  }]
       }
       // {
       //   category: 'Walt Disney',
       //   movies: [{
       //     name: "Interstellar",
       //     description: "A great Movie.",
       //     thumbNail: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
       //   },
       //   {
       //     name: "PK",
       //     description: "A great Movie.",
       //     thumbNail: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg"
       //   },
       //   {
       //     name: "1917",
       //     description: "A great Movie.",
       //     thumbNail: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg"
       //   },
       //   {
       //     name: "Inception",
       //     description: "A great Movie.",
       //     thumbNail: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
       //   },
       //   {
       //              name: "Stree",
       //              description: "A great Movie.",
       //              thumbNail: "https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
       //            }]
       // }
     ];

}
