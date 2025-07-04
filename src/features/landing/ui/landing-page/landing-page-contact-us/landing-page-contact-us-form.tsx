import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/@core/card";
import { Input } from "@/shared/ui/@core/input";
import { Textarea } from "@/shared/ui/@core/textarea";
import { Button } from "@/shared/ui/@core/button";
import { Send } from "lucide-react";
import { Controller, Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CONTACT_US_FORM_SCHEMA } from "@/features/landing/lib/schema/form-schema";
import { toast } from "sonner";

const LandingPageContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(CONTACT_US_FORM_SCHEMA),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { control } = form;

  const onSubmit = () => {
    toast.success("Message sent successfully");
  };

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        <Form control={control} onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Controller
                control={control}
                name="name"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Your Name"
                      className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                    />
                    {error && (
                      <p className="text-red-700 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="space-y-2">
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                    />
                    {error && (
                      <p className="text-red-700 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Controller
              control={control}
              name="subject"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    {...field}
                    placeholder="Subject"
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                  />
                  {error && (
                    <p className="text-red-700 text-sm">{error.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <div className="space-y-2">
            <Controller
              control={control}
              name="message"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Textarea
                    {...field}
                    placeholder="Tell us about your financial goals..."
                    rows={6}
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl resize-none"
                  />
                  {error && (
                    <p className="text-red-700 text-sm">{error.message}</p>
                  )}
                </>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Send Message
            <Send
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LandingPageContactUsForm;
