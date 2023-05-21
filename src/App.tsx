import "react-photo-view/dist/react-photo-view.css";

import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, theme, useMediaQuery } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "react-query";
import EventDetail from "./pages/EventDetail";
import HomePage from "./pages/HomePage";
import EventTiming from "./pages/EventTiming";
import EventBooking from "./pages/EventBooking";
import FooterNav from "./components/FooterNav";
import EventPass from "./pages/EventPass";
import ReviewBooking from "./pages/ReviewBooking";
import PubDetails from "./pages/PubDetails";
import SignIn from "./pages/SignIn";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VerifyPhone from "./pages/VerifyPhone";
import ConfirmBooking from "./pages/ConfirmBooking";
import BookingDetails from "./pages/BookingDetails";
import Profile from "./pages/Profile";
import TermsCond from "./pages/TermsCond";
import RefundPolicy from "./pages/RefundPolicy";
import EventBundle from "./pages/EventBundle";
import UserBookings from "./pages/UserBookings";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const checkForDevice = () => window && window.innerWidth < 820;

const isMobile = checkForDevice();

// const HomePage = React.lazy(
//   () => import("./pages/HomePage" /* webpackChunkName: "Home" */)
// );

// const EventDetail = React.lazy(() => import("./pages/EventDetail"));

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <GoogleOAuthProvider clientId="141910281072-u5kbahlsnc5a535dc3f8ur3ukqau01t8.apps.googleusercontent.com">
        {!isMobile ? (
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="terms-and-conditions" element={<TermsCond />} />
              <Route
                path="refund-and-cancellation"
                element={<RefundPolicy />}
              />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </Router>
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:tab" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/support" element={<HomePage />} />
              <Route path="/user/bookings" element={<UserBookings />} />

              <Route path="/signin" element={<SignIn />} />
              <Route path="/verify-phone" element={<VerifyPhone />} />

              {/* Event Routes */}
              <Route
                path="/event/bundle/:eventType"
                element={<EventBundle />}
              />
              <Route path="/event/detail/:eventId" element={<EventDetail />} />
              <Route path="/event/booking/:eventId" element={<EventTiming />} />
              <Route
                path="/event/booking/:eventId/:slotNo"
                element={<EventBooking />}
              />
              <Route
                path="/event/booking/confirm/:eventId/:slotNo/:counter"
                element={<ConfirmBooking />}
              />
              <Route path="/booking-details" element={<BookingDetails />} />
              <Route
                path="/event/booking/pass/:eventId"
                element={<EventPass />}
              />
              <Route
                path="/event/booking/confirm"
                element={<ReviewBooking />}
              />

              {/* Pub Routes */}
              <Route path="/pub/detail/:pubId" element={<PubDetails />} />

              {/* User Policies */}
              <Route path="/terms-and-conditions" element={<TermsCond />} />
              <Route
                path="/refund-and-cancellation"
                element={<RefundPolicy />}
              />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Router>
        )}
      </GoogleOAuthProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
