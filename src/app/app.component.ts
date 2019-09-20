<<<<<<< HEAD
import { Component, OnInit  } from '@angular/core';



=======
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from '../../node_modules/jqwidgets-ng/jqxscheduler';
>>>>>>> e09160f1b364ce322a40c42d18e1367f6a455936
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
<<<<<<< HEAD
export class AppComponent  {

    constructor(){

    }


}






 
=======
export class AppComponent implements AfterViewInit {
    @ViewChild('schedulerReference', {static: false}) scheduler: jqxSchedulerComponent;
    ngAfterViewInit(): void {
        this.scheduler.ensureAppointmentVisible('id1');
    }

    AppointmentClick(event: any): void 
    {
        // Do Something
    }

    AppointmentDelete(event: any): void 
    {
        // Do Something
    }
    AppointmentAdd(event: any): void 
    {
        // Do Something
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    generateAppointments(): any {
        let appointments = new Array();
        let appointment1 = {
            id: "id1",
            description: "George brings projector for presentations.",
            location: "",
            subject: "Quarterly Project Review Meeting",
            calendar: "A-B1F",
            start: new Date(2019, 8, 20, 10, 0, 0), //(y,m,d,t)
            end: new Date(2019, 8, 20, 13, 0, 0)
        };
        let appointment2 = {
            id: "id2",
            description: "",
            location: "",
            subject: "PPS Group Mtg.",
            calendar: "C-B2F ",
            start: new Date(2019, 9, 24, 10, 0, 0),
            end: new Date(2019, 9, 24, 11, 0, 0)
        };
        let appointment3 = {
            id: "id3",
            description: "",
            location: "",
            subject: "HR Meeting",
            calendar: "A-B2F",
            start: new Date(2019, 10, 27, 11, 0, 0),
            end: new Date(2019, 10, 27, 13, 0, 0)
        };
        let appointment4 = {
            id: "id4",
            description: "",
            location: "",
            subject: "New Projects Planning",
            calendar: "C-B1F",
            start: new Date(2019, 10, 23, 16, 0, 0),
            end: new Date(2019, 10, 23, 18, 0, 0)
        };
        let appointment5 = {
            id: "id5",
            description: "",
            location: "",
            subject: "Interview with James",
            calendar: "W-R1",
            start: new Date(2018, 10, 25, 15, 0, 0),
            end: new Date(2018, 10, 25, 17, 0, 0)
        };
        let appointment6 = {
            id: "id6",
            description: "",
            location: "",
            subject: "Interview with Nancy",
            calendar: "W-R2",
            start: new Date(2019, 10, 26, 14, 0, 0),
            end: new Date(2019, 10, 26, 16, 0, 0)
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        return appointments;
    };
    source: any =
    {
        dataType: "array",
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    date: any = new jqx.date(2019, 8, 1);
    
    appointmentDataFields: any =
    {
        from: "start",
        to: "end",
        id: "id",
        description: "description",
        location: "location",
        subject: "subject",
        resourceId: "calendar"
    };
    resources: any =
    {
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(this.source)
    };
    views: any[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];  
}
>>>>>>> e09160f1b364ce322a40c42d18e1367f6a455936
