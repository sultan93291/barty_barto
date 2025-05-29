import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { EventInput } from "@fullcalendar/core";



const CreateFlight = () => {
  const events: EventInput[] = [{ title: "✈ Flight", date: "2025-09-03" }];
  return (
    <div className="flex gap-x-10">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate="2025-09-01"
        events={events}
        headerToolbar={{ left: "prev,next", center: "title", right: "" }}
        eventContent={arg => {
          return {
            html: `<div style=" padding:4px 8px; border-radius:4px; font-size:14px; display:flex; align-items:center; gap:4px;"> <span style="color:gold;">●</span> <span>${arg.event.title}</span> </div>`,
          };
        }}
        height="auto"
      />
           <div>
          <label className="block text-sm font-medium mb-2">
            Upload passenger passport
        </label>
        
          <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
            <p className="text-sm">Drag & drop your files here</p>
            <p className="text-xs text-gray-400">Supported formats: PDF, PNG, JPG</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Upload Files</button>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-auto">
          Generate Declaration
        </button>
   

    </div>
  );
};
export default CreateFlight;
