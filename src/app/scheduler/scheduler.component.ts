import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { jqxSchedulerComponent } from '../../../node_modules/jqwidgets-ng/jqxscheduler';
import { jqxButtonComponent } from '../../../node_modules/jqwidgets-ng/jqxbuttons'
import{Router} from '@angular/router'
import{jqxColorPickerComponent} from '../../../node_modules/jqwidgets-ng/jqxcolorpicker'
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements AfterViewInit {
    @ViewChild('schedulerReference', {static: false}) scheduler: jqxSchedulerComponent;
    @ViewChild('htmlButton', {static: false}) myHTMLButton: jqxButtonComponent;
    @ViewChild('htmlButton', {static: false}) colorPicker: jqxColorPickerComponent;
    @ViewChild('events', {static: false}) events: ElementRef;
    ngAfterViewInit(): void {
        this.scheduler.ensureAppointmentVisible('id1');
  
        
    }
    
    hTMLButtonClicked(): void
    {
        
           
        this.router.navigate(["member"]);
        
    } 
    generateAppointments(): any {
        let appointments = new Array();
        let appointment1 = {
            id: "id1",
            description: "George brings projector for presentations.",
            location: "",
            subject: "Quarterly Project Review Meeting",
            calendar: "A-B1F",
            from: new Date(2019, 8, 20, 10, 0, 0), //(y,m,d,t)
            to: new Date(2019, 8, 20, 13, 0, 0),
            background:"#ADD8E6"
        };
       
        let appointment2 = {
            id: "id2",
            description: "",
            location: "",
            subject: "HR Meeting",
            calendar: "A-B2F",
            from: new Date(2019, 8, 27, 11, 0, 0),
            to: new Date(2019, 8, 27, 12, 0, 0),
            backgrouund: "#32CD32"
        };
        let appointment3 = {
            id: "id3",
            description: "",
            location: "",
            subject: "New Projects Planning",
            calendar: "B-B1F",
            from: new Date(2019, 8, 23, 1, 0, 0),
            to: new Date(2019, 8, 23, 3, 0, 0),
            background:"#ADFF2F"
        };
        let appointment4 = {
          id: "id4",
          description: "",
          location: "",
          subject: "PPS Group Mtg.",
          calendar: "B-B2F ",
          from: new Date(2019, 9, 24, 10, 0, 0),
          to: new Date(2019, 9, 24, 11, 0, 0),
          background:"	#FF8C00"
      };
        let appointment5 = {
            id: "id5",
            description: "",
            location: "",
            subject: "Interview with James",
            calendar: "C-B1F",
            from: new Date(2019, 9, 25, 10, 0, 0),
            to: new Date(2019, 9, 25, 11, 0, 0),
            background:"#FFD700"
        };
        let appointment6 = {
            id: "id6",
            description: "",
            location: "",
            backround: "backround",
            subject: "Interview with Nancy",
            calendar: "C-B2F",
            from: new Date(2019, 8, 26, 11, 0, 0),
            to: new Date(2019, 8, 26, 12, 0, 0),
            background:"#006400"
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
                
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'style', type: 'string' },
          
                { name: 'background', type: 'string' },
                { name: 'borderColor', type: 'string' },
                { name: 'from', type: 'date' },
                { name: 'to', type: 'date' }
            ],
        id: 'id',
        localData: this.generateAppointments
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);
    date: any = new jqx.date(2019, 8, 1);

    showLegend: true;
    
    appointmentDataFields: any =
    {
        resourceId:'calendar',
        from: 'from',
        to: 'from',
        id: 'id',
        description: 'description',
        location: 'calendar',
        subject: 'subject',
        style: 'style',
        color: 'color',
        background: 'background',
        borderColor: 'borderColor',
        tooltip:'tooltip'
    };
    resources: any =
    {      resourceId:"calendar",
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(this.source)
    };
    renderAppointment:any = function(data)
    {
        
    };
                

    views: any[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];
    editDialogCreate = (dialog, fields, editAppointment) => {
     
        
        // hide status option
        fields.statusContainer.hide();
        // hide location option
        fields.locationContainer.hide();
       fields.fromLabel.html("Start");
        fields.toLabel.html("End");
        fields.resourceLabel.html("Room");

      
  };
  /**
  * called when the dialog is opened. Returning true as a result disables the built-in handler.
  * @param {Object} dialog - jqxWindow's jQuery object.
  * @param {Object} fields - Object with all widgets inside the dialog.
  * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
  */
  editDialogOpen = (dialog, fields, editAppointment) => {
    
  };

  contextMenuCreate = (menu, settings) => {
    let source = settings.source;
    source.push({ id: 'delete', label: 'Delete Appointment' });
    source.push({
        id: 'status', label: 'Set Status', items:
        [
            { label: 'Free', id: 'free' },
            { label: 'Out of Office', id: 'outOfOffice' },
            { label: 'Tentative', id: 'tentative' },
            { label: 'Busy', id: 'busy' }
        ]
    });
};

contextMenuItemClick = (menu, appointment, event) => {
    let args = event.args;
    switch (args.id) {
        case 'delete':
            this.scheduler.deleteAppointment(appointment.id);
            return true;
        case 'free':
            this.scheduler.setAppointmentProperty(appointment.id, 'status', 'free');
            return true;
        case 'outOfOffice':
            this.scheduler.setAppointmentProperty(appointment.id, 'status', 'outOfOffice');
            return true;
        case 'tentative':
            this.scheduler.setAppointmentProperty(appointment.id, 'status', 'tentative');
            return true;
        case 'busy':
            this.scheduler.setAppointmentProperty(appointment.id, 'status', 'busy');
            return true;
    }
};

contextMenuOpen = (menu, appointment, event) => {
    if (!appointment) {
        menu.jqxMenu('hideItem', 'delete');
        menu.jqxMenu('hideItem', 'status');
    }
    else {
        menu.jqxMenu('showItem', 'delete');
        menu.jqxMenu('showItem', 'status');
    }
};
  /**
  * called when the dialog is closed.
  * 
// @param resourceId - resourceId.
  * @param {Object} dialog - jqxWindow's jQuery object.
  * @param {Object} fields - Object with all widgets inside the dialog.
  * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
  */
  
  /**
  * called when a key is pressed while the dialog is on focus. Returning true or false as a result disables the built-in keyDown handler.
  * @param {Object} dialog - jqxWindow's jQuery object.
  * @param {Object} fields - Object with all widgets inside the dialog.
  * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
  * @param {jQuery.Event Object} the keyDown event.
  */
  
  
  
    
    constructor(private router: Router) { }
  
    ngOnInit() {
  
}

}

