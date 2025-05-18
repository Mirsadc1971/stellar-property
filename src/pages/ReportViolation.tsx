
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  reporterName: z.string().min(1, { message: "Name is required" }),
  unitAddress: z.string().min(1, { message: "Unit address is required" }),
  phoneEmail: z.string().min(1, { message: "Contact info is required" }),
  reportDate: z.string(),
  violatorName: z.string().optional(),
  unitNumber: z.string().optional(),

  // Violation types
  noiseDisturbance: z.boolean().default(false),
  unauthorizedConstruction: z.boolean().default(false),
  petViolation: z.boolean().default(false),
  parkingIssue: z.boolean().default(false),
  harassment: z.boolean().default(false),
  otherViolationType: z.boolean().default(false),
  otherViolationTypeDetails: z.string().optional(),

  violationDetails: z.string().min(1, { message: "Please provide details of the violation" }),
  
  // Previous reporting
  reportedBefore: z.enum(["yes", "no"]),
  previousReportDate: z.string().optional(),
  
  // Action requested
  requestWarning: z.boolean().default(false),
  requestFine: z.boolean().default(false),
  requestHearing: z.boolean().default(false),
  requestOther: z.boolean().default(false),
  requestOtherDetails: z.string().optional(),
  
  signature: z.string().min(1, { message: "Signature is required" }),
  
  // Acknowledgements
  acknowledgeSharingInfo: z.boolean().default(false)
    .refine(val => val === true, { message: "You must acknowledge this statement" }),
  acknowledgeAccuracy: z.boolean().default(false)
    .refine(val => val === true, { message: "You must acknowledge this statement" }),
  acknowledgeContact: z.boolean().default(false)
    .refine(val => val === true, { message: "You must acknowledge this statement" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ReportViolation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reporterName: "",
      unitAddress: "",
      phoneEmail: "",
      reportDate: format(new Date(), "yyyy-MM-dd"),
      violatorName: "",
      unitNumber: "",
      noiseDisturbance: false,
      unauthorizedConstruction: false,
      petViolation: false,
      parkingIssue: false,
      harassment: false,
      otherViolationType: false,
      otherViolationTypeDetails: "",
      violationDetails: "",
      reportedBefore: "no",
      previousReportDate: "",
      requestWarning: false,
      requestFine: false,
      requestHearing: false,
      requestOther: false,
      requestOtherDetails: "",
      signature: "",
      acknowledgeSharingInfo: false,
      acknowledgeAccuracy: false,
      acknowledgeContact: false,
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // Create array of violation types checked
    const violationTypes = [];
    if (data.noiseDisturbance) violationTypes.push("Noise/disturbance");
    if (data.unauthorizedConstruction) violationTypes.push("Unauthorized construction/alteration");
    if (data.petViolation) violationTypes.push("Pet violation");
    if (data.parkingIssue) violationTypes.push("Parking/vehicle issue");
    if (data.harassment) violationTypes.push("Harassment");
    if (data.otherViolationType) violationTypes.push(`Other: ${data.otherViolationTypeDetails}`);

    // Create array of requested actions
    const requestedActions = [];
    if (data.requestWarning) requestedActions.push("Warning");
    if (data.requestFine) requestedActions.push("Fine");
    if (data.requestHearing) requestedActions.push("Hearing");
    if (data.requestOther) requestedActions.push(`Other: ${data.requestOtherDetails}`);

    try {
      // Prepare email body
      const subject = "Illinois Condominium Violation Report";
      const body = `
Illinois Condominium Violation Report Form
Pursuant to Section 35 of the Ombudsperson Act

Your Name: ${data.reporterName}
Unit Address: ${data.unitAddress}
Phone/Email: ${data.phoneEmail}
Date of Report: ${data.reportDate}
Violator's Name (if known): ${data.violatorName || "N/A"}
Unit Number: ${data.unitNumber || "N/A"}

Nature of Violation:
${violationTypes.join("\n")}

Details of the Violation:
${data.violationDetails}

Have you reported this before?
${data.reportedBefore === "yes" ? `Yes (Date: ${data.previousReportDate || "Not specified"})` : "No"}

Requested Action:
${requestedActions.join("\n")}

Signature: ${data.signature}
Date: ${data.reportDate}

Acknowledgements:
- I understand that this report may be shared with the association board, management company, or other relevant parties as part of the investigation process.
- I certify that the information provided in this report is true and accurate to the best of my knowledge.
- I understand that I may be contacted for additional information regarding this report.
      `;

      // Open email client
      window.location.href = `mailto:service@stellarpropertygroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      toast({
        title: "Form submitted successfully",
        description: "Your email client should open with the violation report details.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-darkBlue" />
            <h1 className="font-heading text-3xl font-bold mb-4">Illinois Condominium Violation Report</h1>
            <p className="text-lg text-gray-600">
              Pursuant to Section 35 of the Ombudsperson Act
            </p>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-700">
                <strong>Important:</strong> This form is for reporting potential violations related to condominium properties in accordance with 
                the Illinois Condominium Property Act. For emergencies, please call 911.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Reporter Information */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Reporter Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="reporterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="unitAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit Address*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your unit address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone/Email*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number or email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reportDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Report*</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Violator Information */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Violator Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="violatorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Violator's Name (if known)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter violator's name if known" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="unitNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter unit number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Violation Type */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Nature of Violation (check all that apply)</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="noiseDisturbance"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Noise/disturbance</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="unauthorizedConstruction"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Unauthorized construction/alteration</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="petViolation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Pet violation</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="parkingIssue"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Parking/vehicle issue</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="harassment"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Harassment</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="otherViolationType"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  {form.watch("otherViolationType") && (
                    <FormField
                      control={form.control}
                      name="otherViolationTypeDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please specify other violation type</FormLabel>
                          <FormControl>
                            <Input placeholder="Describe the violation type" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                {/* Violation Details */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Details of the Violation (include dates, times, witnesses)*</h2>
                  
                  <FormField
                    control={form.control}
                    name="violationDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide detailed information about the violation"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Previous Reporting */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Have you reported this before?*</h2>
                  
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="reported-yes"
                        value="yes"
                        {...form.register("reportedBefore")}
                        className="mr-2"
                      />
                      <label htmlFor="reported-yes">Yes</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="reported-no"
                        value="no"
                        {...form.register("reportedBefore")}
                        className="mr-2"
                      />
                      <label htmlFor="reported-no">No</label>
                    </div>
                  </div>

                  {form.watch("reportedBefore") === "yes" && (
                    <FormField
                      control={form.control}
                      name="previousReportDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of previous report</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                {/* Requested Action */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Requested Action</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="requestWarning"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Warning</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="requestFine"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Fine</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="requestHearing"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Hearing</FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="requestOther"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Other</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  {form.watch("requestOther") && (
                    <FormField
                      control={form.control}
                      name="requestOtherDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please specify other requested action</FormLabel>
                          <FormControl>
                            <Input placeholder="Describe the requested action" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                {/* Signature */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Signature*</h2>
                  
                  <FormField
                    control={form.control}
                    name="signature"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Signature*</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your full name as signature" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Acknowledgements */}
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">Acknowledgements</h2>
                  
                  <FormField
                    control={form.control}
                    name="acknowledgeSharingInfo"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal">
                            I understand that this report may be shared with the association board, management company, or other relevant parties as part of the investigation process.*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acknowledgeAccuracy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal">
                            I certify that the information provided in this report is true and accurate to the best of my knowledge.*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acknowledgeContact"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal">
                            I understand that I may be contacted for additional information regarding this report.*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-darkBlue hover:bg-blue-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Violation Report"}
                  </Button>
                  <p className="text-xs text-gray-500 mt-3">
                    * Required fields. Form will be submitted to service@stellarpropertygroup.com
                  </p>
                </div>
              </form>
            </Form>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-heading text-xl font-semibold mb-4">Illinois Ombudsman Act Information</h3>
              <p className="text-gray-700 mb-4">
                The Condominium and Common Interest Community Ombudsperson Act (765 ILCS 615/) provides a means by which unit owners can report
                potential violations of the Condominium Property Act or the Common Interest Community Association Act.
              </p>
              <p className="text-gray-700">
                For more information about the Illinois Ombudsman Act or to file a complaint directly with the state, visit
                the <a href="https://www.idfpr.com/CCICO/" target="_blank" rel="noopener noreferrer" className="text-darkBlue hover:underline">Illinois Department of Financial and Professional Regulation website</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
