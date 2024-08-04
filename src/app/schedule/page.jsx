"use client"
import * as React from "react"
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule"
import { registerLicense } from "@syncfusion/ej2-base"
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data"

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmpCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXlceXRTR2RYWEB1V0s="
)

function Page() {
  // "https://calendar.google.com/calendar/u/0?cid=NmE1YzkyZWJhY2NmZmRhOGMxOTI5M2NkYzQ3MTk5NTk2Yjk2NmMwNjRkYjZkMmUxZjUwNmIxZTJlNDE2ZGY1ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"

  let calendarId =
    // "en.ukrainian#holiday@group.v.calendar.google.com"
  "f0911ab58b8390e149c0bd265808a6a5146cafa824a702a87bcf48d204ff7ba4@group.calendar.google.com"
  let publicKey = "AIzaSyA7cpqhDaYNDfib3mYdWdiX76HxeeX63ac"


  // let calendarId = 'en.usa%23holiday@group.v.calendar.google.com';
  let dataManger = new DataManager({
    url:
      "https://www.googleapis.com/calendar/v3/calendars/" +
      calendarId +
      "/events?key=" +
      publicKey,
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  })

  const onDataBinding = (e) => {
    let items = e.result.items
    let scheduleData = []
    if (items.length > 0) {
      for (let event of items) {
        let isRecurring = !!event.recurrence;
        let when = event.start.dateTime
        let start = event.start.dateTime
        let end = event.end.dateTime
        if (!when) {
          when = event.start.date
          start = event.start.date
          end = event.end.date
        }
        scheduleData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: new Date(start),
          EndTime: new Date(end),
          IsAllDay: !event.start.dateTime,
          ...(isRecurring && { RecurrenceRule: event?.recurrence[0].slice(6) })
        })
      }
    }
    e.result = scheduleData
  }

  const data = [
    {
      Id: 1,
      Subject: "Class 1",
      StartTime: new Date(2024, 5, 28, 9, 0),
      EndTime: new Date(2024, 5, 28, 10, 0),
      IsAllDay: false,
    },
  ]
  return (
    <main className='text-center pt-16 px-5   min-h-screen'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Schedule</h1>
      <p className='mt-3 text-2xl mb-3'>know more about our classes</p>
      <div className='flex justify-center items-center '>
        <ScheduleComponent
          width={1000}
          height={500}
          view='Week'
          eventSettings={{ dataSource: dataManger }}
          dataBinding={onDataBinding}
          readonly={true}
          startHour='10:00'
          endHour='19:00'
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
  )
}

export default Page
