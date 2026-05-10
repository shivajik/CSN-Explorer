import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { tours } from "@/data/tours";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Send } from "lucide-react";
import { useState } from "react";

interface ContactFormProps {
  defaultTourId?: number;
  defaultTourName?: string;
  onSuccess?: () => void;
}

export function ContactForm({ defaultTourId, defaultTourName, onSuccess }: ContactFormProps) {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      tourId: defaultTourId || null,
      tourName: defaultTourName || "",
      pickupLocation: null,
      travelDate: "",
      groupSize: 1,
      message: defaultTourName ? `I would like to inquire about the ${defaultTourName} tour.` : "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    if (data.tourId && !data.tourName) {
      const selected = tours.find(t => t.id === Number(data.tourId));
      if (selected) data.tourName = selected.name;
    }

    setIsPending(true);
    // Simulate a short delay then show success
    setTimeout(() => {
      setIsPending(false);
      toast({
        title: "Inquiry Sent Successfully",
        description: "Our travel experts will contact you shortly to confirm your booking.",
      });
      form.reset();
      if (onSuccess) onSuccess();
    }, 800);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} data-testid="input-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+91-9923322790" {...field} data-testid="input-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tourId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Tour</FormLabel>
                <Select
                  onValueChange={(val) => field.onChange(val === "none" ? null : Number(val))}
                  defaultValue={field.value ? String(field.value) : undefined}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-tour">
                      <SelectValue placeholder="General Inquiry (No specific tour)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="none">General Inquiry</SelectItem>
                    {tours.map(tour => (
                      <SelectItem key={tour.id} value={String(tour.id)}>{tour.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pickupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Location</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger data-testid="select-pickup">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select pickup city" />
                      </div>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Mumbai">Mumbai (via Samruddhi Mahamarg)</SelectItem>
                    <SelectItem value="Pune">Pune</SelectItem>
                    <SelectItem value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar (Local)</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="travelDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Travel Date</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" {...field} value={field.value || ""} data-testid="input-date" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="groupSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Size</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                    <Input type="number" min="1" className="pl-10" {...field} value={field.value || ""} data-testid="input-group-size" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your requirements, specific places you want to visit, or any special needs..."
                  className="min-h-[120px]"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto font-medium tracking-wide"
          disabled={isPending}
          data-testid="button-submit-inquiry"
        >
          {isPending ? (
            "Sending..."
          ) : (
            <>
              Send Inquiry <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
