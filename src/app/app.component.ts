import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public data: object[] = [
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
    {CustomerID:'TEST',OrderID:'SADSAD',Freight:123,OrderDate:'20200301'},
  ];
}
