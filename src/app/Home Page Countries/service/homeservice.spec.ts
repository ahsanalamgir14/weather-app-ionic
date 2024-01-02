import { TestBed, inject } from '@angular/core/testing';

import { ServiceComponent } from './service.component';

describe('a service component', () => {
	let component: ServiceComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ServiceComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ServiceComponent], (ServiceComponent) => {
		component = ServiceComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});