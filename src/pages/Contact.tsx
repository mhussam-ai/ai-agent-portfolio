
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} className="text-4xl font-bold mb-8">Contact</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-lg mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                hello@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Schedule a call on Calendly</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Please feel free to reach out for collaboration opportunities, speaking engagements, or just to say hello!
          </p>
        </motion.div>
        
        <motion.div variants={item}>
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="h-4 w-4" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" /> Message
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          rows={6} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full gap-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
