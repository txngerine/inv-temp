"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Navigation, CalendarDays, ExternalLink } from "lucide-react";


interface WeddingEvent {
  title: string;
  arabicTitle: string;
  date: string;
  hijriDate: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapLink: string;
  calendarDetails: {
    title: string;
    start: string; // YYYYMMDDTHHMMSSZ
    end: string;
    description: string;
  };
}

const EVENTS: WeddingEvent[] = [
  {
    title: "The Nikah Ceremony",
    arabicTitle: "النكاح",
    date: "Saturday, July 04, 2026",
    hijriDate: "١٩ محرم",
    time: "1:00 PM Onwards",
    venueName: "Green Oak Auditorium",
    venueAddress: "Iringath",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Green+Oak+Auditorium,+Iringath",
    calendarDetails: {
      title: "Nikah Ceremony: Shasna & Shafeeq",
      start: "20260704T073000Z", // UTC representation of 1:00 PM (assuming UTC+5.5 offset, 7:30 AM UTC)
      end: "20260704T123000Z",
      description: "You are invited to witness the sacred Nikah ceremony of Shasna Navas and Muhammed Shafeeq.",
    },
  },
];

export default function DetailsSection() {
  // Helper to generate Google Calendar Link
  const getGoogleCalendarLink = (event: WeddingEvent) => {
    const details = event.calendarDetails;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      details.title
    )}&dates=${details.start}/${details.end}&details=${encodeURIComponent(
      details.description
    )}&location=${encodeURIComponent(event.venueAddress)}`;
  };

  // Helper to download ICS file for Apple/Outlook
  const downloadIcsFile = (event: WeddingEvent) => {
    const details = event.calendarDetails;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Nikah Invitation Website//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${details.title}`,
      `DTSTART:${details.start}`,
      `DTEND:${details.end}`,
      `DESCRIPTION:${details.description}`,
      `LOCATION:${event.venueAddress}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${event.title.toLowerCase().replace(/\s+/g, "_")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="details" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Glow circles */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[140px] bg-gold-400/5 pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24 z-10 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-sans font-medium mb-2">
            The Celebration
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-100 tracking-wide font-light">
            Event Details
          </h2>
          <div className="w-12 h-[1px] bg-gold-400/30 mt-4"></div>
        </div>

        {/* Event Cards Grid */}
        <div className="flex justify-center w-full z-10 mb-16">
          <div className="grid grid-cols-1 max-w-2xl w-full gap-8">
            {EVENTS.map((event, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              key={idx}
              className="rounded-2xl border border-gold-300/15 p-5 sm:p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden glass-panel"
            >
              {/* Event Decorative Arabic Calligraphy Backdrop */}
              <span className="absolute right-4 top-2 text-6xl md:text-8xl font-arabic text-gold-300/5 select-none pointer-events-none">
                {event.arabicTitle}
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl sm:text-2xl font-heading font-light text-gold-200">
                  {event.title}
                </h3>
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold-400 font-sans font-semibold">
                  Event Details
                </span>
              </div>

              <div className="flex flex-col gap-4 font-sans text-sm font-light">
                {/* Date */}
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase font-semibold text-gold-400">
                      Date
                    </h4>
                    <p className="text-gold-100 flex items-center gap-1.5 flex-wrap">
                      <span>{event.date}</span>
                      <span className="text-gold-400/60">•</span>
                      <span className="font-arabic text-[15px] text-gold-300 translate-y-[1px]">{event.hijriDate}</span>
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase font-semibold text-gold-400">
                      Time
                    </h4>
                    <p className="text-gold-100">{event.time}</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase font-semibold text-gold-400">
                      Venue
                    </h4>
                    <p className="font-medium text-gold-100">{event.venueName}</p>
                    <p className="opacity-70 text-xs mt-0.5">{event.venueAddress}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 border-t border-gold-300/10 pt-6">
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans tracking-widest uppercase bg-gold-400 text-emerald-deep hover:bg-gold-300 hover:scale-[1.02] transition-all font-semibold shadow-md cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>

                {/* Calendar Add Menu */}
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => window.open(getGoogleCalendarLink(event), "_blank")}
                    className="p-2.5 rounded-full border border-gold-300/20 hover:border-gold-300/50 hover:bg-gold-400/10 text-gold-300 transition-all cursor-pointer"
                    title="Add to Google Calendar"
                  >
                    <CalendarDays className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => downloadIcsFile(event)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-gold-300/20 hover:border-gold-300/50 hover:bg-gold-400/10 text-gold-300 text-xs font-sans tracking-widest uppercase text-center transition-all cursor-pointer"
                    title="Download Calendar .ics file"
                  >
                    <span>Apple / Outlook</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>


      </div>
    </section>
  );
}
