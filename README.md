![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled%20components-482563?style=for-the-badge&logo=styledcomponents&logoColor=white)
![TanStack Router](https://img.shields.io/badge/tanstack%20router-11B981?style=for-the-badge&logo=reactrouter&logoColor=white)
![TanStack Query](https://img.shields.io/badge/tanstack%20query-EF4444?style=for-the-badge&logo=reactquery&logoColor=white)
![Context API](https://img.shields.io/badge/context%20api-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Hook Form](https://img.shields.io/badge/react%20hook%20form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Supabase](https://img.shields.io/badge/supabase-3DCF8E?style=for-the-badge&logo=supabase&logoColor=white)

# The Wild Oasis - Management Dashboard
Custom-build web portal to allow users to manage hotel bookings, cabins and guests from The Wild Oasis company. This is part of "The Ultimate React Course" from Jonas Schmedtmann.
This web portal was developed with plain React as it will be used "internally" as a tool inside the company and it will be hidden behind a login. For this reason, this web portal doesn't need to be optimized for SEO and doesn't need to use SSR (Server Side Rendering).

## Index

* [Project requirements from the business](#project-requirements-from-the-business)

* [Features and required pages](#features-and-required-pages)

* [Tech stack](#tech-stack)

* [Author](#author)

## Project requirements from the business
- Users of the app are hotel employees. They need to be logged into the platform to perform tasks.
- New users can only be signed up inside the portal to guarantee that only actual employees can get accounts.
- Users should be able to upload an avatar, and change their name and password.
- App needs a table view with all cabin, and to create new cabins (including upload a photo).
- The booking status can be "unconfirmed" (booked but not yet checked in), "checked in", or "checked out". The table should be filterable by this important status.
- Other bookin data includes: number of guests, number of nights, guest observations, wheter they booked breakfast, breakfast price.
- Users should be able to delete, check in, or check out a booking as the guest arrives (no editing necessary for now).
- Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been recevied (inside the app).
- On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already.
- Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification.
- The initial app screen should be a dashboard, to display important information for the last 7, 30 or 90 days:
  - A list of guests checking in and out on the current day. Users should be able to perform these tasks from here.
  - Statistics on recent bookings, sales, check ins, and occupancy rate.
  - A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment).
  - A chart showing statistics on stay durations, as this is an important metric for the hotel.
- Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking.
- App needs a dark mode.

## Features and required pages
| **Feature categories** | **Necesary pages**    |
| ---------------------- | --------------------- |
| Dashboard              | `/dashboard`          |
| Bookings               | `/bookings`           |
| Cabins                 | `/cabins`             |
| Booking check in       | `/checkin/:bookingID` |
| App settings           | `/settings`           |
| User sign up           | `/users`              |
| Login                  | `/login`              |
| Account settings       | `/account`            |

## Tech Stack
- **Routing:** TanStack Router (AKA React Router)
- **Styling:** Styled Components
- **Remote state management:** TanStack Query (AKA React Query)
- **UI State management:** Context API
- **Form management:** React Hook Form
- **Other tools:** React icons / React hot toast / Recharts / date-fns / Supabase
