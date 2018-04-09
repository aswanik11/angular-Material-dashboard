//Dev: Aswani Tewari
import {Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular Material';
	showInfo(): void {
		console.log("success");
	}
	breakpoint: number;
	ngOnInit() {
		this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
		// this.breakpoint = (window.innerWidth <= 768) ? 2 : 3;
	}

	onResize(event) {
		this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
		// this.breakpoint = (event.target.innerWidth <= 768) ? 2 : 3;
	}
	displayedColumns = ['in_inches', 'unit_qty', 'length', 'breadth', 'height'];
	dataSource = ELEMENT_DATA;

}

export interface Element {
	in_inches: string;
	unit_qty: number;
	length: number;
	breadth: number;
	height: number;
}

const ELEMENT_DATA: Element[] = [
{in_inches: 'Item', unit_qty: 2, length: 10, breadth: 2, height: 10},
{in_inches: 'Inner Pack Carton' , unit_qty: 2, length: 10, breadth: 2, height: 10},
{in_inches: 'Master Pack Carton', unit_qty: 2, length: 10, breadth: 2, height: 10},
{in_inches: 'Item Size', unit_qty: 2, length: 10, breadth: 2, height: 10},
];
