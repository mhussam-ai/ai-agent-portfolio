
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
import { Mail, MessageSquare, User, Send, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

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
    
    try {
      // Store message in Supabase - Fix: Pass data directly as a single object, not in an array
      const { error: dbError } = await supabase
        .from('messages')
        .insert(data); // This is the fixed line - data is already the correct shape

      if (dbError) throw dbError;

      // Send email notifications
      const response = await fetch('https://rzbydelamynswznlctxd.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email notifications');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <motion.h1 variants={item} className="text-4xl font-bold mb-12">Contact</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={item}>
          <motion.div 
            className="mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-lg mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-6 mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:mohammadhussam.ai@gmail.com" className="hover:text-primary transition-colors">
                  mohammadhussam.ai@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="p-3 rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Schedule a Call</h3>
                <span>Book a time on my Calendly</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <span>Remote - Worldwide</span>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Please feel free to reach out for collaboration opportunities, speaking engagements, or just to say hello!
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={item}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="p-6 border shadow-lg">
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
                        <Input 
                          placeholder="Your name" 
                          className="focus-visible:ring-primary" 
                          {...field} 
                        />
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
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          className="focus-visible:ring-primary" 
                          {...field} 
                        />
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
                          className="focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full gap-2 group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message 
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
