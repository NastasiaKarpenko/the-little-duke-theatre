import * as React from "react";
import { Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  EventSettingsModel,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

function Page () {
    const data = [
        {
            Id: 1,
            Subject: "Class 1",
            StartTime: new Date(2024, 5, 11, 9, 0),
            EndTime: new Date(2024, 5, 11, 10, 0),
            IsAllDay: false,
        }
    ]
    return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Schedule</h1>
      <p className="mt-3 text-2xl mb-3">know more about our classes</p>
      <ScheduleComponent current view='Week' selectedDate={new Date(2024, 5, 11)} eventSettings={{
        dataSource: data,
      }}>
        <Inject services={[Day, Week, Month]} />
        <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='Month' />
        </ViewsDirective>
      </ScheduleComponent>
    </main>
  );
}

export default Page;

