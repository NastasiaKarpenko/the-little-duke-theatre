'use client';
/* Капотрібно подумати як це робити з бази данних 
як дозволити редагувати компоненти лише зареєстрованому користувачу адміну, а батькам лише переглядати

import { resourceData } from '../datasource';

export default function Home() {
  const eventSettings = { dataSource: resourceData };

}*/


import * as React from "react";
import { Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense("Ngo9BigBOggjHTQxAR8/V1NCaF5cXmpCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXlceXRTR2RYWEB1V0s=");


function Page () {
    const data = [
        {
            Id: 1,
            Subject: "Class 1",
            StartTime: new Date(2024, 5, 28, 9, 0),
            EndTime: new Date(2024, 5, 28, 10, 0),
            IsAllDay: false,
        }
    ]
    return (
    <main className=" text-center pt-16 px-5   min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Schedule</h1>
      <p className="mt-3 text-2xl mb-3">know more about our classes</p>
      <div className="flex justify-center items-center ">
        <ScheduleComponent 
      width={1000}
      height={500}
      current view='Week'
      eventSettings={{dataSource: data,}}
      >
        <Inject services={[Day, Week, Month]} />
        <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='Month' />
        </ViewsDirective>
        </ScheduleComponent>
      </div>
      
    </main>
  );
}

export default Page;

