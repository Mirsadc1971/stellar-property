
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Payments from "./pages/Payments";
import RequestProposal from "./pages/RequestProposal";
import ReportViolation from "./pages/ReportViolation";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/"
              element={
                <AuthLayout>
                  <Index />
                </AuthLayout>
              }
            />
            <Route
              path="/about"
              element={
                <AuthLayout>
                  <About />
                </AuthLayout>
              }
            />
            <Route
              path="/services"
              element={
                <AuthLayout>
                  <Services />
                </AuthLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <AuthLayout>
                  <Contact />
                </AuthLayout>
              }
            />
            <Route
              path="/faqs"
              element={
                <AuthLayout>
                  <FAQs />
                </AuthLayout>
              }
            />
            <Route
              path="/blog"
              element={
                <AuthLayout>
                  <Blog />
                </AuthLayout>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <AuthLayout>
                  <BlogPost />
                </AuthLayout>
              }
            />
            <Route
              path="/payments"
              element={
                <AuthLayout>
                  <Payments />
                </AuthLayout>
              }
            />
            <Route
              path="/request-proposal"
              element={
                <AuthLayout>
                  <RequestProposal />
                </AuthLayout>
              }
            />
            <Route
              path="/report-violation"
              element={
                <AuthLayout>
                  <ReportViolation />
                </AuthLayout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
