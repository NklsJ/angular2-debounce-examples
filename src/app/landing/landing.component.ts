import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    public debounce;
    public debounceSaveFunction;
    public saving;

    public searchInput: FormControl = new FormControl('');

    public buttonValue: number;

    constructor() {
        this.buttonValue = 0;
    }

    ngOnInit() {
        /**
         * Debounced text input
         */
        this.searchInput.valueChanges.debounceTime(500).subscribe((searchInput: string) => {
            this.searchInput.setValue( searchInput );
            if ( searchInput !== '' ) {
                this.startSearch( searchInput );
            }
        });

        /**
         * Based on: https://www.reddit.com/r/javascript/comments/6urunf/debounce_function_deep_dive_es6/
         *
         * Debounce function calls.
         *
         * @param fn        function        Function to be debounced
         * @param time      number          Time in milliseconds
         */
        const debounce = (fn, time) => {
            let timeout;

            return function (...args) {
              const functionCall = () => fn.apply(this, args);

              clearTimeout(timeout);
              timeout = setTimeout(functionCall, time);
            };
        };

        this.debounce = debounce;
        this.debounceSaveFunction = this.debounce(this.saveValue, 500);
    }

    startSearch( text: string ): void {
        alert( 'Search started. Search term was: ' + text );
    }

    saveValue( value ): void {
        alert( 'Selected value is: ' + value );
    }

    increaseQty(): void {
        this.buttonValue++;
        this.debounceSaveFunction( this.buttonValue );
    }

    decreaseQty(): void {
        if ( this.buttonValue > 0 ) {
            this.buttonValue--;
            this.debounceSaveFunction( this.buttonValue );
        } else {
            this.buttonValue = 0;
        }
    }

}
